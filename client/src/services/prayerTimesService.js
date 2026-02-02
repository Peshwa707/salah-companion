/**
 * Prayer Times Service - Calculate accurate prayer times using adhan.js
 */

import { Coordinates, CalculationMethod, PrayerTimes, SunnahTimes, Qibla } from 'adhan'

const CALCULATION_METHODS = {
  'MWL': CalculationMethod.MuslimWorldLeague,
  'ISNA': CalculationMethod.NorthAmerica,
  'Egypt': CalculationMethod.Egyptian,
  'Makkah': CalculationMethod.UmmAlQura,
  'Karachi': CalculationMethod.Karachi,
  'Tehran': CalculationMethod.Tehran,
  'Singapore': CalculationMethod.Singapore,
  'Turkey': CalculationMethod.Turkey,
  'Dubai': CalculationMethod.Dubai,
  'Kuwait': CalculationMethod.Kuwait,
  'Qatar': CalculationMethod.Qatar
}

const STORAGE_KEY = 'prayer_calculation_method'

/**
 * Get stored calculation method
 */
export const getCalculationMethod = () => {
  return localStorage.getItem(STORAGE_KEY) || 'ISNA'
}

/**
 * Save calculation method
 */
export const setCalculationMethod = (method) => {
  localStorage.setItem(STORAGE_KEY, method)
}

/**
 * Get available calculation methods
 */
export const getAvailableMethods = () => [
  { id: 'ISNA', name: 'ISNA', description: 'Islamic Society of North America' },
  { id: 'MWL', name: 'MWL', description: 'Muslim World League' },
  { id: 'Egypt', name: 'Egypt', description: 'Egyptian General Authority' },
  { id: 'Makkah', name: 'Makkah', description: 'Umm al-Qura University, Makkah' },
  { id: 'Karachi', name: 'Karachi', description: 'University of Islamic Sciences, Karachi' },
  { id: 'Tehran', name: 'Tehran', description: 'Institute of Geophysics, Tehran' },
  { id: 'Singapore', name: 'Singapore', description: 'MUIS, Singapore' },
  { id: 'Turkey', name: 'Turkey', description: 'Diyanet, Turkey' },
  { id: 'Dubai', name: 'Dubai', description: 'GANS, UAE' },
  { id: 'Kuwait', name: 'Kuwait', description: 'Kuwait' },
  { id: 'Qatar', name: 'Qatar', description: 'Qatar' }
]

/**
 * Calculate prayer times for a given location and date
 */
export const calculatePrayerTimes = (latitude, longitude, date = new Date(), method = null) => {
  const coordinates = new Coordinates(latitude, longitude)
  const calcMethod = method || getCalculationMethod()
  const params = CALCULATION_METHODS[calcMethod]()

  const prayerTimes = new PrayerTimes(coordinates, date, params)
  const sunnahTimes = new SunnahTimes(prayerTimes)

  return {
    fajr: prayerTimes.fajr,
    sunrise: prayerTimes.sunrise,
    dhuhr: prayerTimes.dhuhr,
    asr: prayerTimes.asr,
    maghrib: prayerTimes.maghrib,
    isha: prayerTimes.isha,
    // Sunnah times
    middleOfTheNight: sunnahTimes.middleOfTheNight,
    lastThirdOfTheNight: sunnahTimes.lastThirdOfTheNight,
    // Current prayer info
    currentPrayer: prayerTimes.currentPrayer(),
    nextPrayer: prayerTimes.nextPrayer(),
    // Time for next prayer
    timeForPrayer: (prayer) => prayerTimes.timeForPrayer(prayer)
  }
}

/**
 * Format time to display string
 */
export const formatTime = (date, use24Hour = false) => {
  if (!date) return '--:--'

  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: !use24Hour
  })
}

/**
 * Get time remaining until a prayer
 */
export const getTimeRemaining = (prayerTime) => {
  if (!prayerTime) return null

  const now = new Date()
  const diff = prayerTime - now

  if (diff < 0) return null

  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  if (hours > 0) {
    return `${hours}h ${minutes}m`
  }
  return `${minutes}m`
}

/**
 * Get prayer name display
 */
export const getPrayerName = (prayer) => {
  const names = {
    fajr: 'Fajr',
    sunrise: 'Sunrise',
    dhuhr: 'Dhuhr',
    asr: 'Asr',
    maghrib: 'Maghrib',
    isha: 'Isha',
    none: 'None'
  }
  return names[prayer] || prayer
}

/**
 * Get prayer Arabic name
 */
export const getPrayerArabic = (prayer) => {
  const arabic = {
    fajr: 'الفجر',
    sunrise: 'الشروق',
    dhuhr: 'الظهر',
    asr: 'العصر',
    maghrib: 'المغرب',
    isha: 'العشاء'
  }
  return arabic[prayer] || ''
}

/**
 * Get rakats info for each prayer
 */
export const getRakatsInfo = (prayer) => {
  const rakats = {
    fajr: '2 Sunnah + 2 Fard',
    sunrise: 'Ishraq time begins',
    dhuhr: '4 Sunnah + 4 Fard + 2 Sunnah',
    asr: '4 Fard',
    maghrib: '3 Fard + 2 Sunnah',
    isha: '4 Fard + 2 Sunnah + 3 Witr'
  }
  return rakats[prayer] || ''
}

/**
 * Calculate Qibla direction from a location
 */
export const calculateQibla = (latitude, longitude) => {
  const coordinates = new Coordinates(latitude, longitude)
  return Qibla(coordinates)
}

/**
 * Get all prayer times for display
 */
export const getPrayerTimesForDisplay = (latitude, longitude, date = new Date()) => {
  const times = calculatePrayerTimes(latitude, longitude, date)

  return {
    fajr: { time: formatTime(times.fajr), date: times.fajr, arabic: 'الفجر', rakats: getRakatsInfo('fajr') },
    sunrise: { time: formatTime(times.sunrise), date: times.sunrise, arabic: 'الشروق', rakats: getRakatsInfo('sunrise') },
    dhuhr: { time: formatTime(times.dhuhr), date: times.dhuhr, arabic: 'الظهر', rakats: getRakatsInfo('dhuhr') },
    asr: { time: formatTime(times.asr), date: times.asr, arabic: 'العصر', rakats: getRakatsInfo('asr') },
    maghrib: { time: formatTime(times.maghrib), date: times.maghrib, arabic: 'المغرب', rakats: getRakatsInfo('maghrib') },
    isha: { time: formatTime(times.isha), date: times.isha, arabic: 'العشاء', rakats: getRakatsInfo('isha') },
    currentPrayer: times.currentPrayer,
    nextPrayer: times.nextPrayer
  }
}

export default {
  calculatePrayerTimes,
  calculateQibla,
  formatTime,
  getTimeRemaining,
  getPrayerName,
  getPrayerArabic,
  getRakatsInfo,
  getPrayerTimesForDisplay,
  getCalculationMethod,
  setCalculationMethod,
  getAvailableMethods
}

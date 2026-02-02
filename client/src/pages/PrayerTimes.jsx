import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Clock, MapPin, Sun, Moon, Sunrise, Sunset, ChevronLeft, ChevronRight, Settings } from 'lucide-react'
import { getFullLocation, getStoredLocation, getLocationDisplay } from '../services/locationService'
import {
  calculatePrayerTimes,
  formatTime,
  getPrayerArabic,
  getRakatsInfo,
  getCalculationMethod,
  getAvailableMethods
} from '../services/prayerTimesService'
import './PrayerTimes.css'

const prayerInfo = {
  fajr: { icon: Sunrise, color: 'var(--color-fajr)' },
  sunrise: { icon: Sun, color: '#f97316' },
  dhuhr: { icon: Sun, color: 'var(--color-dhuhr)' },
  asr: { icon: Sun, color: 'var(--color-asr)' },
  maghrib: { icon: Sunset, color: 'var(--color-maghrib)' },
  isha: { icon: Moon, color: 'var(--color-isha)' }
}

const prayerOrder = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha']

export default function PrayerTimes() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [location, setLocation] = useState(null)
  const [prayerTimes, setPrayerTimes] = useState(null)
  const [loading, setLoading] = useState(true)
  const [calcMethod, setCalcMethod] = useState(getCalculationMethod())

  // Load location
  useEffect(() => {
    const loadLocation = async () => {
      const stored = getStoredLocation()
      if (stored) {
        setLocation(stored)
        setLoading(false)
      }

      try {
        const fresh = await getFullLocation()
        setLocation(fresh)
      } catch (err) {
        console.error('Location error:', err)
      }
      setLoading(false)
    }

    loadLocation()
  }, [])

  // Calculate prayer times when location or date changes
  useEffect(() => {
    if (location) {
      const times = calculatePrayerTimes(location.latitude, location.longitude, selectedDate)
      setPrayerTimes(times)
    }
  }, [location, selectedDate])

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const changeDate = (days) => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + days)
    setSelectedDate(newDate)
  }

  const isToday = selectedDate.toDateString() === new Date().toDateString()
  const nextPrayer = isToday ? prayerTimes?.nextPrayer : null

  const methodInfo = getAvailableMethods().find(m => m.id === calcMethod)

  return (
    <div className="page prayer-times-page fade-in">
      <header className="page-header">
        <div className="header-icon">
          <Clock size={28} />
        </div>
        <h1>Prayer Times</h1>
        <div className="location-display">
          <MapPin size={14} />
          <span>{location ? getLocationDisplay(location) : 'Loading...'}</span>
        </div>
      </header>

      {/* Date Navigator */}
      <div className="date-navigator card">
        <button className="date-nav-btn" onClick={() => changeDate(-1)}>
          <ChevronLeft size={20} />
        </button>
        <div className="date-display">
          <span className="date-text">{formatDate(selectedDate)}</span>
          {isToday && <span className="today-badge">Today</span>}
        </div>
        <button className="date-nav-btn" onClick={() => changeDate(1)}>
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Prayer Times List */}
      {loading ? (
        <div className="loading-card card">
          <p>Loading prayer times...</p>
        </div>
      ) : (
        <div className="prayer-times-list">
          {prayerOrder.map((name) => {
            const info = prayerInfo[name]
            const Icon = info.icon
            const isNext = isToday && name === nextPrayer
            const isSunrise = name === 'sunrise'
            const time = prayerTimes?.[name]

            return (
              <div
                key={name}
                className={`prayer-time-card card ${isNext ? 'next' : ''} ${isSunrise ? 'sunrise' : ''}`}
                style={{ '--prayer-color': info.color }}
              >
                <div className="prayer-icon-wrapper" style={{ background: info.color }}>
                  <Icon size={22} />
                </div>
                <div className="prayer-details">
                  <div className="prayer-name-row">
                    <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                    <span className="arabic-name">{getPrayerArabic(name)}</span>
                  </div>
                  <span className="rakats-info">{getRakatsInfo(name)}</span>
                </div>
                <div className="prayer-time-display">
                  <span className="time">{time ? formatTime(time) : '--:--'}</span>
                  {isNext && <span className="next-badge">Next</span>}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Settings Note */}
      <div className="calculation-note">
        <p>Prayer times calculated using {methodInfo?.name || calcMethod} method</p>
        <Link to="/settings" className="btn btn-sm btn-secondary">
          <Settings size={14} />
          Change Calculation Method
        </Link>
      </div>
    </div>
  )
}

/**
 * Location Service - Handles geolocation and reverse geocoding
 */

const STORAGE_KEY = 'salah_location'

// Default location (Mecca) as fallback
const DEFAULT_LOCATION = {
  latitude: 21.4225,
  longitude: 39.8262,
  city: 'Mecca',
  country: 'Saudi Arabia'
}

/**
 * Get stored location from localStorage
 */
export const getStoredLocation = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

/**
 * Save location to localStorage
 */
export const saveLocation = (location) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(location))
}

/**
 * Get current position using Geolocation API or Capacitor
 */
export const getCurrentPosition = async () => {
  // Check if running in Capacitor
  if (window.Capacitor) {
    try {
      const { Geolocation } = await import('@capacitor/geolocation')
      const permission = await Geolocation.checkPermissions()

      if (permission.location !== 'granted') {
        const request = await Geolocation.requestPermissions()
        if (request.location !== 'granted') {
          throw new Error('Location permission denied')
        }
      }

      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000
      })

      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    } catch (error) {
      console.error('Capacitor geolocation error:', error)
      throw error
    }
  }

  // Web Geolocation API
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported'))
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
      (error) => {
        reject(error)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    )
  })
}

/**
 * Reverse geocode coordinates to get city name
 * Uses free Nominatim API (OpenStreetMap)
 */
export const reverseGeocode = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
      {
        headers: {
          'User-Agent': 'SalahCompanion/1.0'
        }
      }
    )

    if (!response.ok) {
      throw new Error('Geocoding failed')
    }

    const data = await response.json()
    const address = data.address || {}

    return {
      city: address.city || address.town || address.village || address.municipality || 'Unknown',
      state: address.state || address.region || '',
      country: address.country || 'Unknown'
    }
  } catch (error) {
    console.error('Reverse geocoding error:', error)
    return {
      city: 'Unknown',
      state: '',
      country: 'Unknown'
    }
  }
}

/**
 * Get full location with coordinates and city name
 */
export const getFullLocation = async () => {
  try {
    const coords = await getCurrentPosition()
    const geo = await reverseGeocode(coords.latitude, coords.longitude)

    const location = {
      latitude: coords.latitude,
      longitude: coords.longitude,
      city: geo.city,
      state: geo.state,
      country: geo.country,
      timestamp: Date.now()
    }

    saveLocation(location)
    return location
  } catch (error) {
    console.error('Failed to get location:', error)

    // Return stored location if available
    const stored = getStoredLocation()
    if (stored) {
      return stored
    }

    // Return default location as last resort
    return DEFAULT_LOCATION
  }
}

/**
 * Get location display string
 */
export const getLocationDisplay = (location) => {
  if (!location) return 'Unknown Location'

  if (location.state) {
    return `${location.city}, ${location.state}`
  }
  return `${location.city}, ${location.country}`
}

export default {
  getStoredLocation,
  saveLocation,
  getCurrentPosition,
  reverseGeocode,
  getFullLocation,
  getLocationDisplay
}

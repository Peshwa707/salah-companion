import { useState, useEffect } from 'react'
import { Compass, MapPin, Navigation, AlertCircle, RefreshCw } from 'lucide-react'
import { getFullLocation, getStoredLocation, getLocationDisplay } from '../services/locationService'
import { calculateQibla } from '../services/prayerTimesService'
import './Qibla.css'

export default function Qibla() {
  const [heading, setHeading] = useState(0)
  const [qiblaDirection, setQiblaDirection] = useState(null)
  const [location, setLocation] = useState(null)
  const [hasPermission, setHasPermission] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load location and calculate qibla
  useEffect(() => {
    const loadLocation = async () => {
      // Try stored location first
      const stored = getStoredLocation()
      if (stored) {
        setLocation(stored)
        const qibla = calculateQibla(stored.latitude, stored.longitude)
        setQiblaDirection(Math.round(qibla))
        setLoading(false)
      }

      try {
        const fresh = await getFullLocation()
        setLocation(fresh)
        const qibla = calculateQibla(fresh.latitude, fresh.longitude)
        setQiblaDirection(Math.round(qibla))
      } catch (err) {
        console.error('Location error:', err)
        if (!stored) {
          setError('Could not get your location')
        }
      }
      setLoading(false)
    }

    loadLocation()
  }, [])

  // Setup compass
  useEffect(() => {
    if (window.DeviceOrientationEvent) {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        // iOS 13+ needs permission
        setHasPermission(false)
      } else {
        startCompass()
      }
    } else {
      setError('Compass not supported on this device')
    }
  }, [])

  const requestPermission = async () => {
    try {
      const permission = await DeviceOrientationEvent.requestPermission()
      if (permission === 'granted') {
        setHasPermission(true)
        startCompass()
      } else {
        setError('Permission denied')
      }
    } catch (err) {
      setError('Failed to request permission')
    }
  }

  const startCompass = () => {
    setHasPermission(true)
    window.addEventListener('deviceorientationabsolute', handleOrientation, true)
    window.addEventListener('deviceorientation', handleOrientation, true)
  }

  const handleOrientation = (event) => {
    let alpha = event.alpha
    if (event.webkitCompassHeading) {
      // iOS
      alpha = event.webkitCompassHeading
    }
    if (alpha !== null) {
      setHeading(Math.round(alpha))
    }
  }

  useEffect(() => {
    return () => {
      window.removeEventListener('deviceorientationabsolute', handleOrientation)
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [])

  const refreshLocation = async () => {
    setLoading(true)
    try {
      const fresh = await getFullLocation()
      setLocation(fresh)
      const qibla = calculateQibla(fresh.latitude, fresh.longitude)
      setQiblaDirection(Math.round(qibla))
    } catch (err) {
      console.error('Location error:', err)
    }
    setLoading(false)
  }

  const rotation = qiblaDirection !== null ? qiblaDirection - heading : 0
  const isAligned = qiblaDirection !== null && (Math.abs(rotation % 360) < 10 || Math.abs(rotation % 360) > 350)

  return (
    <div className="page qibla-page fade-in">
      <header className="page-header">
        <div className="header-icon">
          <Compass size={28} />
        </div>
        <h1>Qibla Direction</h1>
        <p>Face towards the Kaaba</p>
      </header>

      {/* Location Info */}
      <div className="location-info">
        <MapPin size={14} />
        <span>{location ? getLocationDisplay(location) : 'Loading...'}</span>
        {qiblaDirection !== null && (
          <>
            <span className="separator">|</span>
            <span>{qiblaDirection}° from North</span>
          </>
        )}
        <button className="refresh-btn" onClick={refreshLocation} disabled={loading}>
          <RefreshCw size={14} className={loading ? 'spinning' : ''} />
        </button>
      </div>

      {/* Compass */}
      <div className={`compass-container ${isAligned ? 'aligned' : ''}`}>
        {hasPermission === false && (
          <div className="permission-prompt card">
            <AlertCircle size={48} className="prompt-icon" />
            <h3>Compass Access Required</h3>
            <p>Allow access to your device's compass to find the Qibla direction.</p>
            <button className="btn btn-primary" onClick={requestPermission}>
              Enable Compass
            </button>
          </div>
        )}

        {error && (
          <div className="error-prompt card">
            <AlertCircle size={48} className="prompt-icon error" />
            <h3>Compass Unavailable</h3>
            <p>{error}</p>
            {qiblaDirection !== null && (
              <p className="manual-direction">
                Qibla is approximately <strong>{qiblaDirection}°</strong> from North
              </p>
            )}
          </div>
        )}

        {hasPermission && !error && qiblaDirection !== null && (
          <>
            <div className="compass-ring">
              <div
                className="compass-needle"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <div className="needle-point">
                  <Navigation size={32} />
                </div>
                <div className="kaaba-icon">🕋</div>
              </div>

              {/* Cardinal directions */}
              <div className="cardinal north" style={{ transform: `rotate(${-heading}deg)` }}>N</div>
              <div className="cardinal east" style={{ transform: `rotate(${90 - heading}deg)` }}>E</div>
              <div className="cardinal south" style={{ transform: `rotate(${180 - heading}deg)` }}>S</div>
              <div className="cardinal west" style={{ transform: `rotate(${270 - heading}deg)` }}>W</div>
            </div>

            <div className="compass-status">
              {isAligned ? (
                <div className="aligned-message">
                  <span className="checkmark">✓</span>
                  You are facing the Qibla
                </div>
              ) : (
                <div className="direction-hint">
                  Turn {rotation > 0 && rotation < 180 ? 'right' : 'left'} to face Qibla
                </div>
              )}
            </div>

            <div className="heading-display">
              <span className="heading-value">{heading}°</span>
              <span className="heading-label">Current Heading</span>
            </div>
          </>
        )}

        {loading && !hasPermission && (
          <div className="loading-compass">
            <p>Loading qibla direction...</p>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="qibla-instructions card">
        <h4>How to Use</h4>
        <ul>
          <li>Hold your phone flat and level</li>
          <li>Rotate until the arrow points to the Kaaba icon</li>
          <li>The compass will turn green when aligned</li>
          <li>Keep away from metal objects for accuracy</li>
        </ul>
      </div>
    </div>
  )
}

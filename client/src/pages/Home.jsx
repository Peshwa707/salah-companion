import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Compass, CheckSquare, Brain, ChevronRight, Flame, Sun, Moon, Sunrise, Sunset, Star, MapPin } from 'lucide-react'
import { getFullLocation, getStoredLocation, getLocationDisplay } from '../services/locationService'
import { calculatePrayerTimes, formatTime, getTimeRemaining, getPrayerName } from '../services/prayerTimesService'
import { getStats } from '../services/srsService'
import { prayerDuasForMemorization } from '../data/dailyDuasData'
import './Home.css'

const prayerIcons = {
  fajr: Sunrise,
  dhuhr: Sun,
  asr: Sun,
  maghrib: Sunset,
  isha: Moon
}

const prayerColors = {
  fajr: 'var(--color-fajr)',
  dhuhr: 'var(--color-dhuhr)',
  asr: 'var(--color-asr)',
  maghrib: 'var(--color-maghrib)',
  isha: 'var(--color-isha)'
}

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [location, setLocation] = useState(null)
  const [prayerTimes, setPrayerTimes] = useState(null)
  const [loading, setLoading] = useState(true)
  const [streak, setStreak] = useState(0)
  const [duasLearned, setDuasLearned] = useState(0)

  // Load location and prayer times
  useEffect(() => {
    const loadData = async () => {
      // Try stored location first for fast load
      const stored = getStoredLocation()
      if (stored) {
        setLocation(stored)
        const times = calculatePrayerTimes(stored.latitude, stored.longitude)
        setPrayerTimes(times)
        setLoading(false)
      }

      // Then get fresh location
      try {
        const fresh = await getFullLocation()
        setLocation(fresh)
        const times = calculatePrayerTimes(fresh.latitude, fresh.longitude)
        setPrayerTimes(times)
      } catch (err) {
        console.error('Location error:', err)
      }
      setLoading(false)
    }

    loadData()
  }, [])

  // Update current time and prayer times every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      // Recalculate prayer times every minute to keep nextPrayer accurate
      if (location && currentTime.getSeconds() === 0) {
        const times = calculatePrayerTimes(location.latitude, location.longitude)
        setPrayerTimes(times)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [location, currentTime])

  // Load streak from tracker storage
  useEffect(() => {
    try {
      const trackerData = localStorage.getItem('prayer_tracker')
      if (trackerData) {
        const data = JSON.parse(trackerData)
        setStreak(data.streak || 0)
      }
    } catch {
      // Ignore
    }

    // Load SRS stats
    const cardIds = prayerDuasForMemorization.map(d => d.id)
    const stats = getStats(cardIds)
    setDuasLearned(stats.mastered + stats.learning)
  }, [])

  const formatTimeDisplay = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    })
  }

  const nextPrayer = prayerTimes?.nextPrayer || 'none'
  const nextPrayerTime = prayerTimes?.[nextPrayer]
  const NextPrayerIcon = prayerIcons[nextPrayer] || Sun

  const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha']

  return (
    <div className="page home-page fade-in">
      {/* Header with Time */}
      <header className="home-header">
        <div className="current-time">{formatTimeDisplay(currentTime)}</div>
        <div className="current-date">{formatDate(currentTime)}</div>
        <div className="location">
          <MapPin size={14} />
          <span>{location ? getLocationDisplay(location) : 'Loading location...'}</span>
        </div>
      </header>

      {/* Next Prayer Card */}
      {!loading && prayerTimes && nextPrayer !== 'none' && (
        <div className="next-prayer-card card" style={{ borderColor: prayerColors[nextPrayer] }}>
          <div className="next-prayer-label">Next Prayer</div>
          <div className="next-prayer-info">
            <div className="next-prayer-icon" style={{ background: prayerColors[nextPrayer] }}>
              <NextPrayerIcon size={28} />
            </div>
            <div className="next-prayer-details">
              <h2 className="next-prayer-name">{getPrayerName(nextPrayer)}</h2>
              <span className="next-prayer-time">{formatTime(nextPrayerTime)}</span>
            </div>
            <div className="countdown">
              <span className="countdown-value">{getTimeRemaining(nextPrayerTime) || '--'}</span>
              <span className="countdown-label">remaining</span>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="next-prayer-card card loading">
          <div className="loading-text">Loading prayer times...</div>
        </div>
      )}

      {/* Prayer Times Overview */}
      <div className="prayer-times-overview card">
        <div className="section-header">
          <h3>Today's Prayer Times</h3>
          <Link to="/prayer-times" className="see-all">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="prayer-times-grid">
          {prayers.map((name) => {
            const Icon = prayerIcons[name]
            const isNext = name === nextPrayer
            const time = prayerTimes?.[name]
            return (
              <div key={name} className={`prayer-time-item ${isNext ? 'next' : ''}`}>
                <Icon size={18} style={{ color: prayerColors[name] }} />
                <span className="prayer-name">{getPrayerName(name)}</span>
                <span className="prayer-time">{time ? formatTime(time) : '--:--'}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats-row">
        <Link to="/tracker" className="stat-card card">
          <Flame size={24} className="stat-icon streak" />
          <div className="stat-info">
            <span className="stat-value">{streak}</span>
            <span className="stat-label">Day Streak</span>
          </div>
        </Link>
        <Link to="/memorize" className="stat-card card">
          <Star size={24} className="stat-icon memorized" />
          <div className="stat-info">
            <span className="stat-value">{duasLearned}</span>
            <span className="stat-label">Duas Learned</span>
          </div>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions-grid">
          <Link to="/qibla" className="action-card card">
            <Compass size={24} />
            <span>Find Qibla</span>
          </Link>
          <Link to="/tracker" className="action-card card">
            <CheckSquare size={24} />
            <span>Log Prayer</span>
          </Link>
          <Link to="/memorize" className="action-card card">
            <Brain size={24} />
            <span>Practice Duas</span>
          </Link>
          <Link to="/prayer-times" className="action-card card">
            <Clock size={24} />
            <span>Prayer Times</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

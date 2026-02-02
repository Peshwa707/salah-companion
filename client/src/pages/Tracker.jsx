import { useState, useEffect } from 'react'
import { CheckSquare, Flame, Calendar, ChevronLeft, ChevronRight, Check, Sun, Moon, Sunrise, Sunset } from 'lucide-react'
import './Tracker.css'

const prayers = [
  { id: 'fajr', name: 'Fajr', icon: Sunrise, color: 'var(--color-fajr)' },
  { id: 'dhuhr', name: 'Dhuhr', icon: Sun, color: 'var(--color-dhuhr)' },
  { id: 'asr', name: 'Asr', icon: Sun, color: 'var(--color-asr)' },
  { id: 'maghrib', name: 'Maghrib', icon: Sunset, color: 'var(--color-maghrib)' },
  { id: 'isha', name: 'Isha', icon: Moon, color: 'var(--color-isha)' }
]

const STORAGE_KEY = 'salah_tracker_data'

export default function Tracker() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [prayerLog, setPrayerLog] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prayerLog))
  }, [prayerLog])

  const getDateKey = (date) => date.toISOString().split('T')[0]

  const togglePrayer = (prayerId) => {
    const dateKey = getDateKey(selectedDate)
    const dayLog = prayerLog[dateKey] || {}
    const newDayLog = {
      ...dayLog,
      [prayerId]: !dayLog[prayerId]
    }
    setPrayerLog({
      ...prayerLog,
      [dateKey]: newDayLog
    })
  }

  const getDayLog = () => {
    return prayerLog[getDateKey(selectedDate)] || {}
  }

  const getCompletedCount = () => {
    const log = getDayLog()
    return Object.values(log).filter(Boolean).length
  }

  const calculateStreak = () => {
    let streak = 0
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    for (let i = 0; i < 365; i++) {
      const checkDate = new Date(today)
      checkDate.setDate(checkDate.getDate() - i)
      const dateKey = getDateKey(checkDate)
      const dayLog = prayerLog[dateKey] || {}
      const completed = Object.values(dayLog).filter(Boolean).length

      if (completed === 5) {
        streak++
      } else if (i > 0) {
        break
      }
    }
    return streak
  }

  const changeDate = (days) => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + days)
    if (newDate <= new Date()) {
      setSelectedDate(newDate)
    }
  }

  const formatDate = (date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const compareDate = new Date(date)
    compareDate.setHours(0, 0, 0, 0)

    if (compareDate.getTime() === today.getTime()) {
      return "Today"
    }

    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    if (compareDate.getTime() === yesterday.getTime()) {
      return "Yesterday"
    }

    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })
  }

  const isToday = selectedDate.toDateString() === new Date().toDateString()
  const streak = calculateStreak()
  const completed = getCompletedCount()
  const dayLog = getDayLog()

  // Generate week view
  const getWeekDays = () => {
    const days = []
    const today = new Date()
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      const dateKey = getDateKey(date)
      const log = prayerLog[dateKey] || {}
      const count = Object.values(log).filter(Boolean).length
      days.push({ date, count })
    }
    return days
  }

  return (
    <div className="page tracker-page fade-in">
      <header className="page-header">
        <div className="header-icon">
          <CheckSquare size={28} />
        </div>
        <h1>Prayer Tracker</h1>
        <p>Track your daily prayers</p>
      </header>

      {/* Streak Card */}
      <div className="streak-card card">
        <div className="streak-icon">
          <Flame size={32} />
        </div>
        <div className="streak-info">
          <span className="streak-value">{streak}</span>
          <span className="streak-label">Day Streak</span>
        </div>
        <div className="streak-message">
          {streak === 0 ? 'Start your streak today!' :
           streak < 7 ? 'Keep going!' :
           streak < 30 ? 'Great consistency!' :
           'Amazing dedication!'}
        </div>
      </div>

      {/* Week Overview */}
      <div className="week-overview card">
        <h3>This Week</h3>
        <div className="week-grid">
          {getWeekDays().map(({ date, count }) => {
            const isSelected = date.toDateString() === selectedDate.toDateString()
            return (
              <button
                key={date.toISOString()}
                className={`week-day ${isSelected ? 'selected' : ''} ${count === 5 ? 'complete' : ''}`}
                onClick={() => setSelectedDate(date)}
              >
                <span className="day-name">{date.toLocaleDateString('en-US', { weekday: 'short' }).charAt(0)}</span>
                <span className="day-num">{date.getDate()}</span>
                <div className="day-dots">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`dot ${i < count ? 'filled' : ''}`} />
                  ))}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Date Navigator */}
      <div className="date-navigator">
        <button className="date-nav-btn" onClick={() => changeDate(-1)}>
          <ChevronLeft size={20} />
        </button>
        <div className="date-display">
          <Calendar size={16} />
          <span>{formatDate(selectedDate)}</span>
        </div>
        <button
          className="date-nav-btn"
          onClick={() => changeDate(1)}
          disabled={isToday}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress */}
      <div className="daily-progress">
        <span>{completed}/5 prayers</span>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(completed / 5) * 100}%` }} />
        </div>
      </div>

      {/* Prayer List */}
      <div className="prayer-list">
        {prayers.map((prayer) => {
          const Icon = prayer.icon
          const isCompleted = dayLog[prayer.id]

          return (
            <button
              key={prayer.id}
              className={`prayer-item card ${isCompleted ? 'completed' : ''}`}
              onClick={() => togglePrayer(prayer.id)}
            >
              <div className="prayer-icon" style={{ background: isCompleted ? prayer.color : 'var(--color-warm)' }}>
                <Icon size={20} style={{ color: isCompleted ? 'white' : prayer.color }} />
              </div>
              <span className="prayer-name">{prayer.name}</span>
              <div className={`check-circle ${isCompleted ? 'checked' : ''}`}>
                {isCompleted && <Check size={16} />}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

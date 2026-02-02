import { useState } from 'react'
import { Settings as SettingsIcon, MapPin, Calculator, Bell, Moon, Info, ChevronRight, ExternalLink } from 'lucide-react'
import './Settings.css'

const calculationMethods = [
  { id: 'ISNA', name: 'ISNA', description: 'Islamic Society of North America' },
  { id: 'MWL', name: 'MWL', description: 'Muslim World League' },
  { id: 'Egypt', name: 'Egypt', description: 'Egyptian General Authority' },
  { id: 'Makkah', name: 'Makkah', description: 'Umm al-Qura University' },
  { id: 'Karachi', name: 'Karachi', description: 'University of Islamic Sciences' }
]

export default function Settings() {
  const [location, setLocation] = useState('New York, NY')
  const [calculationMethod, setCalculationMethod] = useState('ISNA')
  const [notifications, setNotifications] = useState({
    prayerTimes: true,
    fajr: true,
    dhuhr: false,
    asr: false,
    maghrib: true,
    isha: true
  })

  const handleNotificationToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="page settings-page fade-in">
      <header className="page-header">
        <div className="header-icon">
          <SettingsIcon size={28} />
        </div>
        <h1>Settings</h1>
        <p>Customize your experience</p>
      </header>

      {/* Location */}
      <div className="settings-section">
        <h3 className="section-title">
          <MapPin size={18} />
          Location
        </h3>
        <div className="setting-card card">
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-name">Current Location</span>
              <span className="setting-value">{location}</span>
            </div>
            <button className="btn btn-sm btn-secondary">
              Change
            </button>
          </div>
          <p className="setting-note">
            Prayer times are calculated based on your location
          </p>
        </div>
      </div>

      {/* Calculation Method */}
      <div className="settings-section">
        <h3 className="section-title">
          <Calculator size={18} />
          Calculation Method
        </h3>
        <div className="setting-card card">
          <div className="method-list">
            {calculationMethods.map(method => (
              <button
                key={method.id}
                className={`method-item ${calculationMethod === method.id ? 'active' : ''}`}
                onClick={() => setCalculationMethod(method.id)}
              >
                <div className="method-info">
                  <span className="method-name">{method.name}</span>
                  <span className="method-desc">{method.description}</span>
                </div>
                <div className={`radio-circle ${calculationMethod === method.id ? 'checked' : ''}`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="settings-section">
        <h3 className="section-title">
          <Bell size={18} />
          Notifications
        </h3>
        <div className="setting-card card">
          <div className="setting-row">
            <div className="setting-info">
              <span className="setting-name">Prayer Time Alerts</span>
              <span className="setting-desc">Get notified for prayer times</span>
            </div>
            <label className="toggle">
              <input
                type="checkbox"
                checked={notifications.prayerTimes}
                onChange={() => handleNotificationToggle('prayerTimes')}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          {notifications.prayerTimes && (
            <div className="prayer-notifications">
              {['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'].map(prayer => (
                <div key={prayer} className="prayer-notif-row">
                  <span className="prayer-name">{prayer.charAt(0).toUpperCase() + prayer.slice(1)}</span>
                  <label className="toggle small">
                    <input
                      type="checkbox"
                      checked={notifications[prayer]}
                      onChange={() => handleNotificationToggle(prayer)}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* About */}
      <div className="settings-section">
        <h3 className="section-title">
          <Info size={18} />
          About
        </h3>
        <div className="setting-card card">
          <div className="about-row">
            <span>Version</span>
            <span className="about-value">1.0.0</span>
          </div>
          <div className="about-row">
            <span>Prayer Time Data</span>
            <span className="about-value">Adhan.js</span>
          </div>
          <a href="#" className="about-link">
            <span>Privacy Policy</span>
            <ExternalLink size={14} />
          </a>
          <a href="#" className="about-link">
            <span>Terms of Service</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

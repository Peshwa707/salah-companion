import { Outlet, NavLink } from 'react-router-dom'
import { Home, Clock, Compass, CheckSquare, Brain, Settings } from 'lucide-react'
import './Layout.css'

export default function Layout() {
  return (
    <div className="app-layout">
      <main className="main-content">
        <Outlet />
      </main>

      <nav className="bottom-nav">
        <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Home size={22} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/prayer-times" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Clock size={22} />
          <span>Times</span>
        </NavLink>
        <NavLink to="/qibla" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Compass size={22} />
          <span>Qibla</span>
        </NavLink>
        <NavLink to="/tracker" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <CheckSquare size={22} />
          <span>Tracker</span>
        </NavLink>
        <NavLink to="/memorize" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Brain size={22} />
          <span>Learn</span>
        </NavLink>
      </nav>
    </div>
  )
}

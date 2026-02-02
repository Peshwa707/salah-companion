import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PrayerTimes from './pages/PrayerTimes'
import Qibla from './pages/Qibla'
import Tracker from './pages/Tracker'
import Memorize from './pages/Memorize'
import Settings from './pages/Settings'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="prayer-times" element={<PrayerTimes />} />
          <Route path="qibla" element={<Qibla />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="memorize" element={<Memorize />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

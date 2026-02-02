import { useState, useEffect } from 'react'
import { Brain, Eye, EyeOff, ChevronLeft, ChevronRight, CheckCircle, RotateCcw, ThumbsUp, ThumbsDown, Meh } from 'lucide-react'
import { prayerDuasForMemorization } from '../data/dailyDuasData'
import {
  Quality,
  getCardData,
  processReview,
  isDue,
  getCardsByPriority,
  getStats,
  resetAllData,
  formatInterval
} from '../services/srsService'
import './Memorize.css'

export default function Memorize() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [mode, setMode] = useState('due') // due, all, mastered
  const [cards, setCards] = useState([])
  const [stats, setStats] = useState({ total: 0, mastered: 0, learning: 0, newCards: 0, dueToday: 0 })

  const cardIds = prayerDuasForMemorization.map(d => d.id)

  // Load cards and stats
  useEffect(() => {
    refreshCards()
  }, [mode])

  const refreshCards = () => {
    const newStats = getStats(cardIds)
    setStats(newStats)

    let filteredIds
    switch (mode) {
      case 'due':
        filteredIds = getCardsByPriority(cardIds).filter(id => isDue(id))
        break
      case 'mastered':
        filteredIds = cardIds.filter(id => {
          const data = getCardData(id)
          return data.easinessFactor >= 2.5 && data.repetitions >= 5
        })
        break
      default:
        filteredIds = cardIds
    }

    setCards(filteredIds)
    setCurrentIndex(0)
    setShowAnswer(false)
  }

  const currentCardId = cards[currentIndex]
  const currentDua = prayerDuasForMemorization.find(d => d.id === currentCardId)
  const currentCardData = currentCardId ? getCardData(currentCardId) : null

  const handleRating = (quality) => {
    if (!currentCardId) return

    processReview(currentCardId, quality)

    // Move to next card
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      // Refresh to get new due cards
      refreshCards()
    }
    setShowAnswer(false)
  }

  const nextCard = () => {
    setShowAnswer(false)
    setCurrentIndex((currentIndex + 1) % cards.length)
  }

  const prevCard = () => {
    setShowAnswer(false)
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length)
  }

  const resetProgress = () => {
    if (confirm('Reset all memorization progress? This cannot be undone.')) {
      resetAllData()
      refreshCards()
    }
  }

  return (
    <div className="page memorize-page fade-in">
      <header className="page-header">
        <div className="header-icon">
          <Brain size={28} />
        </div>
        <h1>Memorize Duas</h1>
        <p>Learn essential prayer supplications</p>
      </header>

      {/* Stats Card */}
      <div className="stats-card card">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">{stats.dueToday}</span>
            <span className="stat-label">Due Today</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.learning}</span>
            <span className="stat-label">Learning</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.mastered}</span>
            <span className="stat-label">Mastered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.newCards}</span>
            <span className="stat-label">New</span>
          </div>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((stats.mastered + stats.learning) / stats.total) * 100}%` }}
          />
        </div>
        <button className="reset-btn-small" onClick={resetProgress} title="Reset progress">
          <RotateCcw size={14} />
        </button>
      </div>

      {/* Mode Selector */}
      <div className="mode-selector">
        <button
          className={`mode-btn ${mode === 'due' ? 'active' : ''}`}
          onClick={() => setMode('due')}
        >
          Due ({stats.dueToday})
        </button>
        <button
          className={`mode-btn ${mode === 'all' ? 'active' : ''}`}
          onClick={() => setMode('all')}
        >
          All ({stats.total})
        </button>
        <button
          className={`mode-btn ${mode === 'mastered' ? 'active' : ''}`}
          onClick={() => setMode('mastered')}
        >
          Mastered ({stats.mastered})
        </button>
      </div>

      {/* Flashcard */}
      {cards.length > 0 && currentDua ? (
        <div className="flashcard-container">
          <div className={`flashcard card ${showAnswer ? 'revealed' : ''}`}>
            <div className="card-badge">{currentDua.category}</div>

            {currentCardData && currentCardData.repetitions > 0 && (
              <div className="card-stats">
                <span className="interval">Next: {formatInterval(currentCardData.interval)}</span>
              </div>
            )}

            {!showAnswer ? (
              <div className="flashcard-front">
                <h3 className="card-title">{currentDua.name}</h3>
                <span className="card-arabic-name">{currentDua.arabicName}</span>
                <p className="card-when">{currentDua.whenToSay}</p>
                <button className="btn btn-primary reveal-btn" onClick={() => setShowAnswer(true)}>
                  <Eye size={18} />
                  Show Dua
                </button>
              </div>
            ) : (
              <div className="flashcard-back">
                <p className="arabic-text">{currentDua.arabic}</p>
                <p className="transliteration">{currentDua.transliteration}</p>
                <p className="translation">{currentDua.translation}</p>
                {currentDua.times > 1 && (
                  <span className="times-badge">Recite {currentDua.times}x</span>
                )}
                <button className="hide-btn" onClick={() => setShowAnswer(false)}>
                  <EyeOff size={14} />
                  Hide
                </button>
              </div>
            )}
          </div>

          {/* SRS Rating Buttons - Show when answer is revealed */}
          {showAnswer && (
            <div className="rating-buttons">
              <p className="rating-prompt">How well did you remember?</p>
              <div className="rating-row">
                <button
                  className="rating-btn again"
                  onClick={() => handleRating(Quality.COMPLETE_BLACKOUT)}
                >
                  <ThumbsDown size={18} />
                  <span>Again</span>
                  <small>1 day</small>
                </button>
                <button
                  className="rating-btn hard"
                  onClick={() => handleRating(Quality.CORRECT_DIFFICULT)}
                >
                  <Meh size={18} />
                  <span>Hard</span>
                  <small>{formatInterval(Math.max(1, Math.round(currentCardData?.interval * 1.2) || 1))}</small>
                </button>
                <button
                  className="rating-btn good"
                  onClick={() => handleRating(Quality.CORRECT_HESITATION)}
                >
                  <ThumbsUp size={18} />
                  <span>Good</span>
                  <small>{formatInterval(Math.round((currentCardData?.interval || 1) * (currentCardData?.easinessFactor || 2.5)))}</small>
                </button>
                <button
                  className="rating-btn easy"
                  onClick={() => handleRating(Quality.PERFECT)}
                >
                  <CheckCircle size={18} />
                  <span>Easy</span>
                  <small>{formatInterval(Math.round((currentCardData?.interval || 1) * (currentCardData?.easinessFactor || 2.5) * 1.3))}</small>
                </button>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="card-navigation">
            <button className="nav-btn" onClick={prevCard} disabled={cards.length <= 1}>
              <ChevronLeft size={20} />
              <span>Previous</span>
            </button>
            <span className="card-counter">{currentIndex + 1} / {cards.length}</span>
            <button className="nav-btn" onClick={nextCard} disabled={cards.length <= 1}>
              <span>Next</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      ) : (
        <div className="no-cards card">
          <CheckCircle size={48} className="success-icon" />
          <h3>
            {mode === 'due'
              ? 'All caught up!'
              : mode === 'mastered'
              ? 'No mastered duas yet'
              : 'No duas available'}
          </h3>
          <p>
            {mode === 'due'
              ? 'No duas are due for review right now. Come back later or practice all duas.'
              : mode === 'mastered'
              ? 'Keep practicing to master more duas!'
              : 'Start learning some duas!'}
          </p>
          {mode === 'due' && (
            <button className="btn btn-primary" onClick={() => setMode('all')}>
              Practice All Duas
            </button>
          )}
        </div>
      )}

      {/* Quick Reference */}
      <div className="quick-reference">
        <h4>All Prayer Duas</h4>
        <div className="duas-list">
          {prayerDuasForMemorization.map((dua, idx) => {
            const cardData = getCardData(dua.id)
            const isMastered = cardData.easinessFactor >= 2.5 && cardData.repetitions >= 5
            const isLearning = cardData.repetitions > 0 && !isMastered
            const duaIsDue = isDue(dua.id)

            return (
              <button
                key={dua.id}
                className={`dua-item ${isMastered ? 'mastered' : ''} ${isLearning ? 'learning' : ''} ${duaIsDue ? 'due' : ''}`}
                onClick={() => {
                  const index = cards.findIndex(id => id === dua.id)
                  if (index !== -1) {
                    setCurrentIndex(index)
                    setShowAnswer(false)
                  } else {
                    setMode('all')
                    setTimeout(() => {
                      const newIndex = cardIds.findIndex(id => id === dua.id)
                      if (newIndex !== -1) setCurrentIndex(newIndex)
                    }, 100)
                  }
                }}
              >
                <span className="dua-number">{idx + 1}</span>
                <div className="dua-info">
                  <span className="dua-name">{dua.name}</span>
                  <span className="dua-category">{dua.category}</span>
                </div>
                {isMastered && <CheckCircle size={16} className="check-icon" />}
                {isLearning && !isMastered && <span className="learning-dot" />}
                {duaIsDue && <span className="due-dot" />}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/**
 * Spaced Repetition Service - SM-2 Algorithm Implementation
 *
 * The SM-2 algorithm calculates optimal review intervals based on:
 * - Quality of recall (0-5 scale)
 * - Number of successful repetitions
 * - Easiness factor (how easy the card is for this user)
 */

const STORAGE_KEY = 'srs_card_data'

// Quality ratings
export const Quality = {
  COMPLETE_BLACKOUT: 0,      // Complete failure to recall
  INCORRECT_REMEMBERED: 1,   // Incorrect, but remembered upon seeing answer
  INCORRECT_EASY_RECALL: 2,  // Incorrect, but easy to recall after hint
  CORRECT_DIFFICULT: 3,      // Correct with serious difficulty
  CORRECT_HESITATION: 4,     // Correct after hesitation
  PERFECT: 5                 // Perfect response
}

/**
 * Default card data
 */
const createDefaultCardData = (cardId) => ({
  cardId,
  repetitions: 0,           // Number of times reviewed
  easinessFactor: 2.5,      // EF starts at 2.5
  interval: 0,              // Days until next review
  nextReviewDate: new Date().toISOString(),
  lastReviewDate: null,
  reviewHistory: []
})

/**
 * Get all card data from storage
 */
export const getAllCardData = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

/**
 * Get card data for a specific card
 */
export const getCardData = (cardId) => {
  const allData = getAllCardData()
  return allData[cardId] || createDefaultCardData(cardId)
}

/**
 * Save card data
 */
const saveCardData = (cardId, data) => {
  const allData = getAllCardData()
  allData[cardId] = data
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData))
}

/**
 * SM-2 Algorithm Implementation
 *
 * @param {number} quality - Quality of recall (0-5)
 * @param {number} repetitions - Number of successful repetitions
 * @param {number} easinessFactor - Current EF
 * @param {number} interval - Current interval in days
 * @returns {object} - New repetitions, EF, and interval
 */
const sm2Algorithm = (quality, repetitions, easinessFactor, interval) => {
  let newRepetitions = repetitions
  let newEF = easinessFactor
  let newInterval = interval

  if (quality >= 3) {
    // Correct response
    if (repetitions === 0) {
      newInterval = 1
    } else if (repetitions === 1) {
      newInterval = 6
    } else {
      newInterval = Math.round(interval * easinessFactor)
    }
    newRepetitions = repetitions + 1
  } else {
    // Incorrect response - reset
    newRepetitions = 0
    newInterval = 1
  }

  // Calculate new easiness factor
  // EF' = EF + (0.1 - (5-q) * (0.08 + (5-q) * 0.02))
  newEF = easinessFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))

  // EF should not go below 1.3
  if (newEF < 1.3) {
    newEF = 1.3
  }

  return {
    repetitions: newRepetitions,
    easinessFactor: newEF,
    interval: newInterval
  }
}

/**
 * Process a review and update card data
 */
export const processReview = (cardId, quality) => {
  const cardData = getCardData(cardId)

  const result = sm2Algorithm(
    quality,
    cardData.repetitions,
    cardData.easinessFactor,
    cardData.interval
  )

  const now = new Date()
  const nextReview = new Date(now)
  nextReview.setDate(nextReview.getDate() + result.interval)

  const updatedData = {
    ...cardData,
    repetitions: result.repetitions,
    easinessFactor: result.easinessFactor,
    interval: result.interval,
    nextReviewDate: nextReview.toISOString(),
    lastReviewDate: now.toISOString(),
    reviewHistory: [
      ...cardData.reviewHistory,
      {
        date: now.toISOString(),
        quality,
        interval: result.interval
      }
    ].slice(-50) // Keep last 50 reviews
  }

  saveCardData(cardId, updatedData)
  return updatedData
}

/**
 * Check if a card is due for review
 */
export const isDue = (cardId) => {
  const cardData = getCardData(cardId)
  const now = new Date()
  const nextReview = new Date(cardData.nextReviewDate)
  return now >= nextReview
}

/**
 * Get cards due for review from a list of card IDs
 */
export const getDueCards = (cardIds) => {
  return cardIds.filter(id => isDue(id))
}

/**
 * Get cards sorted by review priority
 * (Most overdue first, then by easiness factor - harder cards first)
 */
export const getCardsByPriority = (cardIds) => {
  const now = new Date()

  return cardIds
    .map(id => ({
      id,
      data: getCardData(id)
    }))
    .sort((a, b) => {
      const aNext = new Date(a.data.nextReviewDate)
      const bNext = new Date(b.data.nextReviewDate)

      // First, prioritize overdue cards
      const aOverdue = now - aNext
      const bOverdue = now - bNext

      if (aOverdue > 0 && bOverdue <= 0) return -1
      if (bOverdue > 0 && aOverdue <= 0) return 1

      // If both overdue, most overdue first
      if (aOverdue > 0 && bOverdue > 0) {
        return bOverdue - aOverdue
      }

      // If neither overdue, sort by EF (lower EF = harder = higher priority)
      return a.data.easinessFactor - b.data.easinessFactor
    })
    .map(item => item.id)
}

/**
 * Get learning statistics
 */
export const getStats = (cardIds) => {
  const now = new Date()
  const allData = getAllCardData()

  let mastered = 0      // EF >= 2.5 and repetitions >= 5
  let learning = 0      // Has been reviewed but not mastered
  let newCards = 0      // Never reviewed
  let dueToday = 0

  cardIds.forEach(id => {
    const data = allData[id]

    if (!data || data.repetitions === 0) {
      newCards++
    } else if (data.easinessFactor >= 2.5 && data.repetitions >= 5) {
      mastered++
    } else {
      learning++
    }

    if (isDue(id)) {
      dueToday++
    }
  })

  return {
    total: cardIds.length,
    mastered,
    learning,
    newCards,
    dueToday
  }
}

/**
 * Reset all SRS data
 */
export const resetAllData = () => {
  localStorage.removeItem(STORAGE_KEY)
}

/**
 * Reset data for specific card
 */
export const resetCard = (cardId) => {
  const allData = getAllCardData()
  delete allData[cardId]
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData))
}

/**
 * Get human-readable interval
 */
export const formatInterval = (days) => {
  if (days === 0) return 'Now'
  if (days === 1) return '1 day'
  if (days < 7) return `${days} days`
  if (days < 30) return `${Math.round(days / 7)} weeks`
  if (days < 365) return `${Math.round(days / 30)} months`
  return `${Math.round(days / 365)} years`
}

export default {
  Quality,
  getCardData,
  processReview,
  isDue,
  getDueCards,
  getCardsByPriority,
  getStats,
  resetAllData,
  resetCard,
  formatInterval
}

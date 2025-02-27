import { useState, useEffect } from 'react'
import { Blockquote } from '@mantine/core'
import supabase from '../supabase'

/* Get all quotes from database */
async function getQuotes() {
  let { data } = await supabase.from('daily-quotes').select('*')
  return data
}

function DailyMotivation() {
  const [dailyQuote, setDailyQuote] = useState('')
  const [quoteAuthor, setQuoteAuthor] = useState(null)
  const [lastFetchDate, setLastFetchDate] = useState(localStorage.getItem('lastFetchDate') || null)
  const [quoteIndex, setQuoteIndex] = useState(
    parseInt(localStorage.getItem('quoteIndex'), 10) || 0
  )
  const [quotes, setQuotes] = useState(null)

  const fetchDailyQuote = async () => {
    try {
      const data = await getQuotes()
      if (data && data.length > 0) {
        setQuotes(data) // Store all quotes
        const currentIndex = quoteIndex % data.length // Ensure index stays within bounds
        const newQuote = data[currentIndex].quote
        const newAuthor = data[currentIndex].author
        const today = new Date().toDateString()

        setDailyQuote(newQuote)
        setQuoteAuthor(newAuthor)
        setLastFetchDate(today)

        localStorage.setItem('dailyQuote', newQuote)
        localStorage.setItem('quoteAuthor', newAuthor)
        localStorage.setItem('lastFetchDate', today)
        localStorage.setItem('quoteIndex', currentIndex.toString())
      }
    } catch (err) {
      console.error('Failed to load quotes:', err)
    }
  }

  const updateQuote = () => {
    if (quotes && quotes.length > 0) {
      const nextIndex = (quoteIndex + 1) % quotes.length // Increment and loop back to 0
      const today = new Date().toDateString()
      setQuoteIndex(nextIndex)
      setDailyQuote(quotes[nextIndex].quote)
      setQuoteAuthor(quotes[nextIndex].author)
      setLastFetchDate(today)
      localStorage.setItem('quoteIndex', nextIndex.toString())
      localStorage.setItem('dailyQuote', quotes[nextIndex].quote)
      localStorage.setItem('quoteAuthor', quotes[nextIndex].author)
      localStorage.setItem('lastFetchDate', today)
    }
  }

  useEffect(() => {
    const today = new Date().toDateString()

    // Fetch quotes on mount if not loaded or if it's a new day
    if (!quotes || lastFetchDate !== today) {
      fetchDailyQuote()
    } else if (quotes) {
      // Restore from localStorage if quotes exist and it's the same day
      const currentIndex = quoteIndex % quotes.length
      setDailyQuote(quotes[currentIndex].quote)
      setQuoteAuthor(quotes[currentIndex].author)
    }

    // Schedule update at midnight
    const now = new Date()
    const nextMidnight = new Date(now)
    nextMidnight.setHours(24, 0, 0, 0) // Midnight tomorrow in local time
    const timeToMidnight = nextMidnight - now

    const timeoutId = setTimeout(() => {
      updateQuote()
      const intervalId = setInterval(updateQuote, 24 * 60 * 60 * 1000)
      return () => clearInterval(intervalId)
    }, timeToMidnight)

    return () => clearTimeout(timeoutId) // Cleanup on unmount
  }, [quotes, lastFetchDate]) // Re-run if quotes or lastFetchDate changes

  return (
    <section>
      <h2>Daily Motivation</h2>
      <Blockquote color="rgba(255, 255, 255, 0)" radius="md" cite={quoteAuthor}>
        {dailyQuote || 'Loading...'}
      </Blockquote>
    </section>
  )
}

export default DailyMotivation

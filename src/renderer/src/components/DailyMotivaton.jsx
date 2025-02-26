import { useState, useEffect } from 'react'
import supabase from '../supabase'

/* Get all quotes from database */
async function getQuotes() {
  let { data } = await supabase.from('daily-quotes').select('*')
  return data
}

function DailyMotivation() {
  const [dailyQuote, setDailyQuote] = useState('')
  const [quoteAuthor, setQuoteAuthor] = useState(null)
  //const [lastFetchDate, setLastFetchDate] = useState(localStorage.getItem('lastFetchDate') || null)
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
        //setLastFetchDate(today)

        localStorage.setItem('dailyQuote', newQuote)
        localStorage.setItem('quoteAuthor', newAuthor)
        localStorage.setItem('lastFetchDate', today)
      }
    } catch (err) {
      console.error('Failed to load quotes:', err)
    }
  }

  const updateQuote = () => {
    if (quotes && quotes.length > 0) {
      const nextIndex = (quoteIndex + 1) % quotes.length // Increment and loop back to 0
      setQuoteIndex(nextIndex)
      setDailyQuote(quotes[nextIndex].quote)
      setQuoteAuthor(quotes[nextIndex].author)
      localStorage.setItem('quoteIndex', nextIndex.toString())
      localStorage.setItem('dailyQuote', quotes[nextIndex].quote)
      localStorage.setItem('quoteAuthor', quotes[nextIndex].author)
    }
  }

  useEffect(() => {
    // Fetch quotes on mount if not already loaded
    if (!quotes) {
      fetchDailyQuote()
    }

    // Set interval to update quote every 60 seconds
    const intervalId = setInterval(() => {
      updateQuote()
    }, 1 * 1000) // 60 seconds in milliseconds

    return () => clearInterval(intervalId) // Cleanup on unmount
  }, [quotes, quoteIndex]) // Re-run if quotes or quoteIndex changes

  return (
    <section>
      <h2>Daily Motivation</h2>
      <blockquote>
        {dailyQuote || 'Loading...'}
        {quoteAuthor && <cite>{quoteAuthor}</cite>}
      </blockquote>
    </section>
  )
}

export default DailyMotivation

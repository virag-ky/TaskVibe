import { useState, useEffect } from 'react'
import supabase from '../supabase'

async function getQuotes() {
  let { data } = await supabase.from('daily-quotes').select('*')
  return data
}

function DailyMotivation() {
  const [dailyQuote, setDailyQuote] = useState()

  useEffect(() => {
    getQuotes()
      .then((data) => {
        setDailyQuote(data[1].quote)
      })
      .catch((err) => {
        console.error('Failed to load quotes:', err)
      })
  }, [])

  return (
    <section>
      <h2>Daily Motivation</h2>
      <blockquote>{dailyQuote}</blockquote>
    </section>
  )
}

export default DailyMotivation

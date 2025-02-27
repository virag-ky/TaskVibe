import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
//import { useState } from 'react'
import { MantineProvider } from '@mantine/core'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Settings from './pages/settings'
import LoginSignup from './pages/LoginSignUp'

function App() {
  //const [user, setUser] = useState(null)
  let user = ''
  return (
    <MantineProvider>
      <MemoryRouter>
        {!user ? (
          <LoginSignup />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </>
        )}
      </MemoryRouter>
    </MantineProvider>
  )
}

export default App

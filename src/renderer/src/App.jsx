import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import { MantineProvider } from '@mantine/core'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  return (
    <MantineProvider>
      <Navbar />
      <Main />
    </MantineProvider>
  )
}

export default App

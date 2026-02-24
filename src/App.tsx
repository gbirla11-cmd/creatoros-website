import { useState } from 'react'
import LandingPage from './LandingPage'
import Dashboard from './Dashboard'

function App() {
  const [page, setPage] = useState('landing')

  if (page === 'dashboard') return <Dashboard />
  
  return <LandingPage onGetStarted={() => setPage('dashboard')} />
}

export default App

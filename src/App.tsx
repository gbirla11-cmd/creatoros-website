import { useState } from 'react'
import Dashboard from './Dashboard'

function App() {
  const [page, setPage] = useState('landing')
  
  if (page === 'dashboard') return <Dashboard />
  
  // Landing page is served as static HTML
  window.location.href = '/'
  return null
}

export default App

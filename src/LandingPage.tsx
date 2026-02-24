import { useEffect } from 'react'

const LandingPage = () => {
  useEffect(() => {
    window.location.href = '/index.html'
  }, [])
  return null
}

export default LandingPage

import '@/styles/globals.css'

import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration)
        })
        .catch((error) => {
          console.error('Error registering Service Worker:', error)
        })
      })
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp


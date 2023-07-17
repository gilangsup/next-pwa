import { useEffect } from 'react'

function PushNotificationPermission() {
  useEffect(() => {
    if ('Notification' in window && 'serviceWorker' in navigator) {
      if (Notification.permission !== 'granted') {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            console.log('Notification permission granted.')
            // Handle the permission grant and subscription process here
          }
        })
      }
    }
  }, [])

  return null
}

export default PushNotificationPermission

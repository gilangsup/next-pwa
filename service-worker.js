self.addEventListener("install", (event) => {
  console.log("Service worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
});

self.addEventListener("fetch", (event) => {
  console.log("Fetching", event.request.url);
});

self.addEventListener('push', function (event) {
  const title = 'Push Notification'
  const options = {
    body: event.data.text(),
  }
  event.waitUntil(
    self.registration.showNotification(title, options)
  )
})

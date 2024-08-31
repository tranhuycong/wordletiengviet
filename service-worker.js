self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('static-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icons/pwa-192x192.png',
        './icons/pwa-512x512.png',
        // Add other assets you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
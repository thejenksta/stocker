const CACHE_NAME = 'stock-ious-cache-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.webmanifest'
  // add './icon-192.png', './icon-512.png' if you use icons
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return from cache, or fallback to network
      return response || fetch(event.request);
    })
  );
});


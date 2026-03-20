const CACHE_VERSION = 'deutschvoca-v3';

// Local app shell assets — cache-first strategy
const APP_SHELL = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/vocab.js',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/analytics.js'
];

// CDN / external resources — network-first strategy
const CDN_RESOURCES = [
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans:wght@400;600;700&display=swap',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Coat_of_arms_of_Germany.svg/240px-Coat_of_arms_of_Germany.svg.png'
];

// ── Install: pre-cache all assets ──────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      // Cache app shell (critical — must succeed)
      const shellPromise = cache.addAll(APP_SHELL);
      // Cache CDN resources (best-effort — don't block install if a CDN is down)
      const cdnPromise = Promise.allSettled(
        CDN_RESOURCES.map((url) =>
          fetch(url, { mode: 'cors' })
            .then((response) => {
              if (response.ok) {
                return cache.put(url, response);
              }
            })
            .catch(() => {/* ignore CDN fetch failure during install */})
        )
      );
      return Promise.all([shellPromise, cdnPromise]);
    }).then(() => self.skipWaiting())
  );
});

// ── Activate: clean up old caches ──────────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: route requests through the right strategy ───────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // Determine if this is a CDN / external resource
  const isCDN = url.origin !== self.location.origin;

  if (isCDN) {
    // Network-first for CDN resources — fall back to cache when offline
    event.respondWith(networkFirst(request));
  } else {
    // Cache-first for local app shell — fall back to network
    event.respondWith(cacheFirst(request));
  }
});

// ── Strategy helpers ───────────────────────────────────────────────────

/**
 * Cache-first: return cached response immediately; update cache in background.
 * Falls back to network if nothing is cached.
 */
function cacheFirst(request) {
  return caches.match(request).then((cached) => {
    if (cached) {
      // Refresh the cache in the background (stale-while-revalidate)
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, response));
          }
        })
        .catch(() => {/* offline — ignore */});
      return cached;
    }
    // Not in cache — go to network and cache the result
    return fetch(request).then((response) => {
      if (response && response.ok) {
        const clone = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(request, clone));
      }
      return response;
    }).catch(() => {
      // Offline and not cached — return a basic offline fallback for navigation
      if (request.mode === 'navigate') {
        return caches.match('/index.html');
      }
      return new Response('Offline', { status: 503, statusText: 'Offline' });
    });
  });
}

/**
 * Network-first: try the network; fall back to cache if offline.
 */
function networkFirst(request) {
  return fetch(request)
    .then((response) => {
      if (response && response.ok) {
        const clone = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(request, clone));
      }
      return response;
    })
    .catch(() => {
      return caches.match(request).then((cached) => {
        return cached || new Response('Offline', { status: 503, statusText: 'Offline' });
      });
    });
}

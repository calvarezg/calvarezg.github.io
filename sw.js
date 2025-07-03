// sw.js

// This is the version of your service worker.
// Increment this number any time you make changes to the service worker code
// to ensure users get the latest version.
const CACHE_VERSION = 'v1';

self.addEventListener('install', (event) => {
    // This will install the service worker
    console.log('Service Worker: Installed');
    self.skipWaiting(); // Force the new service worker to activate immediately
});

self.addEventListener('activate', (event) => {
    // This will activate the service worker
    console.log('Service Worker: Activated');
    // Clean up old caches if any
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_VERSION) {
                        console.log('Service Worker: Deleting old cache', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    // Claim clients to take control of existing open pages
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Only apply to requests within your GitHub Pages domain and specific paths
    if (url.origin === location.origin && url.pathname.includes('/assets/')) {
        // Check if the request is for a PDF file
        if (url.pathname.endsWith('.pdf')) {
            event.respondWith(
                fetch(event.request).then((response) => {
                    // Clone the response because responses are streams and can only be consumed once
                    const newResponse = new Response(response.body, response);

                    // Construct the canonical URL for the plain text version
                    const plainTextCanonicalUrl = url.origin + url.pathname.replace('.pdf', '.md');

                    // Add the Link header with canonical
                    newResponse.headers.append('Link', `<${plainTextCanonicalUrl}>; rel="canonical"`);

                    console.log(`Service Worker: Added canonical for ${url.pathname} to ${plainTextCanonicalUrl}`);
                    return newResponse;
                }).catch((error) => {
                    console.error('Service Worker: Fetch error for PDF:', error);
                    // Fallback to network or cache if there's an error
                    return fetch(event.request);
                })
            );
        }
    }
    // For all other requests, just proceed as normal (fetch from network)
    return;
});
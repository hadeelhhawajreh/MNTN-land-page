const filesToCache = [
    './assets/01.png',
    './assets/02.png',
    './assets/03.png',
    './assets/BGContent.png',
    './assets/BGHero.png',
    './assets/coloredArrow.svg',
    './assets/whitearrow.svg',
    './assets/instagram.svg',
    './assets/twitter.svg',
    './assets/global.style.css',
    './assets/HG.png',
    './assets/MG.png',
    './assets/logo.png',
    './Styles/',
    '../public/index.html',
    './main.js',
]

const staticCacheName = 'pages-cache-v1';
self.addEventListener('install', event => {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
        caches.open(staticCacheName)
        .then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});

window.addEventListener('activate', event => {
    console.log('Activating new service worker...');

    const cacheWhitelist = [staticCacheName];
    console.log("cacheWhitelist", cacheWhitelist)
    event.waitUntil(
        caches.keys().then(cacheNames => {
            console.log("cacheNames", cacheNames)
            return Promise.all(
                cacheNames.map(cacheName => {
                    console.log("cacheName", cacheName)
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

window.addEventListener('fetch', event => {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
                console.log('Found ', event.request.url, ' in cache');
                return response;
            }
            console.log('Network request for ', event.request.url);
            return fetch(event.request)
                .then(response => {
                    return caches.open(staticCacheName)
                        .then(cache => {
                            cache.put(event.request.url, response.clone());
                            return response;
                        });
                });
        }).catch(error => {
            console.log('Error, ', error);
        })
    );
});
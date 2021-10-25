const cacheName = 'cache-app-av1';

const recursosCacheados = [
    "index.html",
    "index.css",
    "favicon.ico",
    "index.js"
];

self.addEventListener("install", function (event) {
    console.log("Service Worker instalado!");
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            cache.addAll(recursosCacheados);
        })
    );
});

self.addEventListener("activate", function () {
    console.log("Service worker ativado!");
})
const cacheName = 'ecommerce-matheus-v1';

const recursosCacheados = [
    "./",
    "./index.html",
    "./index.css",
    "./favicon.ico",
    "./index.js",
    "./icons/account.png",
    "./icons/android-icon-36x36.png",
    "./icons/android-icon-48x48.png",
    "./icons/android-icon-72x72.png",
    "./icons/android-icon-96x96.png",
    "./icons/android-icon-144x144.png",
    "./icons/android-icon-192x192.png",
    "./icons/apple-icon-57x57.png",
    "./icons/apple-icon-60x60.png",
    "./icons/apple-icon-72x72.png",
    "./icons/apple-icon-76x76.png",
    "./icons/apple-icon-114x114.png",
    "./icons/apple-icon-120x120.png",
    "./icons/apple-icon-144x144.png",
    "./icons/apple-icon-152x152.png",
    "./icons/apple-icon-180x180.png",
    "./icons/apple-icon-precomposed.png",
    "./icons/apple-icon.png",
    "./icons/favicon-16x16.png",
    "./icons/favicon-32x32.png",
    "./icons/favicon-96x96.png",
    "./icons/favicon-512x512.png",
    "./icons/folder.png",
    "./icons/home.png",
    "./icons/ms-icon-70x70.png",
    "./icons/ms-icon-144x144.png",
    "./icons/ms-icon-150x150.png",
    "./icons/ms-icon-310x310.png",
    "./icons/sacola.png",
    "./icons/star.png"
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
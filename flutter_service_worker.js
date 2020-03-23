'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "3b15172930905dd3f17acd7393e9b667",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons/Icon-192.png": "96415dbe0f10a6b8133d29f284bdd220",
"/icons/Icon-512.png": "6a313edc2db057d7854402e4d248af73",
"/index.html": "07a5f9a6b576473e2865fcbf3b1b7334",
"/main.dart.js": "834c771a2c038fbd78f2d06ce2984516",
"/manifest.json": "c371dd644531759830a036a709726f7f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

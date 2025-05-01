const CACHE_NAME = "lojada-tele-v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/manifest.json",
  "/icon.png",
  "/icon-192.png",
  "/icon-512.png",
  "/img/amendoim.png",
  "/img/fini.webp",
  "/img/pirulito.jpg",
  "/img/paçoca.webp",
  "/img/mentos.jpg",
  "/img/tortuguita.png",
  "/img/bala.jpg",
  "/img/pingo de leite.jpg",
  "/img/pe de moca.jpg",
  "/img/espressso.jpg",
  "/img/nescau.jpg",
  "/img/galak.png",
  "/img/chococcino.png",
  "/img/cappucino.jpg",
  "/img/cafe com leite.jpg",
  "/pix-qrcode.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

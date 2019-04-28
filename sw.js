importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0bab77a631dcbe6a7d7e.js",
    "revision": "a182b0269ccd762a23e7f26f1273718b"
  },
  {
    "url": "/_nuxt/18bb4a2b213b22250678.js",
    "revision": "71cc242025abd50cc3cb22119498e84b"
  },
  {
    "url": "/_nuxt/38e98d2a4f62003e8905.js",
    "revision": "79ee4625ee6f54d22e3cd6c24204a48a"
  },
  {
    "url": "/_nuxt/4ac1d142b803f2b6d90e.js",
    "revision": "050db91e76ba66649690e6bdc1421459"
  },
  {
    "url": "/_nuxt/4c0de0047c8b856d1dcb.js",
    "revision": "312c52b3608deddfc4ed50d221724184"
  },
  {
    "url": "/_nuxt/5581ca24a031e154f907.js",
    "revision": "db2d63ebb2180edb5755128359bac514"
  },
  {
    "url": "/_nuxt/57062a7c297d045c0d04.js",
    "revision": "b4b102f8647d96bad84b642dce0aa4ee"
  },
  {
    "url": "/_nuxt/660da4fe7585d8828e80.js",
    "revision": "0b211d32014196a717334fef8b6488ae"
  },
  {
    "url": "/_nuxt/b41bc2597727b961cc74.js",
    "revision": "262c6cfca7029b9d35237d207d3c62d4"
  },
  {
    "url": "/_nuxt/c765ce6bb83e7e4abada.js",
    "revision": "cb7578c414ec371a74b8098ec4422799"
  },
  {
    "url": "/_nuxt/c8b86e8f1986683c3de2.js",
    "revision": "d49593f9357eddffbdf85e5ab419b991"
  },
  {
    "url": "/_nuxt/d3e5a0b47029438ce145.js",
    "revision": "cd9b2862be626ab79759ac5899ee4d21"
  },
  {
    "url": "/_nuxt/eae4da83ac68d1b28d49.js",
    "revision": "65451621d3ad168d09364ed31259b1bb"
  }
], {
  "cacheId": "my-diary",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

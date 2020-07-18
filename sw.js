/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "077e97a8c08f542b8447960925448a73"
  },
  {
    "url": "404/index.html",
    "revision": "87b97b2388aa8db25201eade3925f865"
  },
  {
    "url": "app-1dfdf58c768cbc0eb931.js"
  },
  {
    "url": "app-1dfdf58c768cbc0eb931.js.map",
    "revision": "b582915dd0483e943a5c802904d4971b"
  },
  {
    "url": "app-3375cea6d9a61d98ee6e.js"
  },
  {
    "url": "app-3375cea6d9a61d98ee6e.js.map",
    "revision": "d290ba0d841ff40e87535c6050e0a54a"
  },
  {
    "url": "app-c9773756423005473dae.js"
  },
  {
    "url": "app-c9773756423005473dae.js.map",
    "revision": "ae25215f1d5a493a48404d5e0821a892"
  },
  {
    "url": "chunk-map.json",
    "revision": "d05f5a31f1ed61a0c61c8b84272e0b96"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-0e7509a3429803f7697c.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-0e7509a3429803f7697c.js.map",
    "revision": "0e7d8346e873f5c7b97bf38cf8cc8b29"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js.map",
    "revision": "73fab470230271ac23de3b660b41bd46"
  },
  {
    "url": "component---src-pages-404-js-a074e8b8dbab78d30535.js"
  },
  {
    "url": "component---src-pages-404-js-a074e8b8dbab78d30535.js.map",
    "revision": "134e0b68cd7b290c6a8a832be48839db"
  },
  {
    "url": "component---src-pages-index-js-0af9405853d6f1e906a4.js"
  },
  {
    "url": "component---src-pages-index-js-0af9405853d6f1e906a4.js.map",
    "revision": "f4f3fe4a2fd442843336d4a943bd624e"
  },
  {
    "url": "component---src-pages-index-js-e16bbd94e6d8b24acf78.js"
  },
  {
    "url": "component---src-pages-index-js-e16bbd94e6d8b24acf78.js.map",
    "revision": "da9459c560ff2266af151d690d8cd372"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-808cc4eea871c17fab00.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-808cc4eea871c17fab00.js.map",
    "revision": "fdce1046c818c7fdd8bfc7cb490c9874"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "50a6a8a733310bff9ee79d2dd6f0655f"
  },
  {
    "url": "framework-8c8d363c63d1a9a80d21.js"
  },
  {
    "url": "framework-8c8d363c63d1a9a80d21.js.map",
    "revision": "bc94ec94bce0afc91631defd1223df76"
  },
  {
    "url": "framework-a576ae5ab153fa4a7c27.js"
  },
  {
    "url": "framework-a576ae5ab153fa4a7c27.js.map",
    "revision": "93827e9ae5e1ecfb372843b664b62144"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "a357006864e3d83f35e994d7cf8d35d1"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "0583d85f3102c14f11a9608df620a096"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "75e25b6f7343f086b6cf9249fdcc6524"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "cc1bdb48c87f4668f08a8288665ab9d7"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "90fa6fb602aa5a8642815b147bae1e75"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "e5d18453908d24b1c9810771494f37f4"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "d179d53308b5329c7dbb158bac8eb442"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "0b3b7c2335aef02eeacad96078823161"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "fd21ccbcbb6dcee88783607706bed501"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "2eaaa2bad660be5c89a404a0a0ad0bce"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3df6b17e157f891b15a0fadff0d7f55c"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "73b53c376c0c6df9ec96677d201cf94b"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "517e1f8ce5610edb94d7dea4bede4428"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "c4774c64eca28ca586e99c28ab7f5dc3"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "06161a94f1e57a13ae942e5d896a1ef2"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7ccc544e5b95d2236edddf9ecf727a8c"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "polyfill-05ca266ba135f47d33f0.js"
  },
  {
    "url": "polyfill-05ca266ba135f47d33f0.js.map",
    "revision": "152d85d660cf35c6f270977f79d89456"
  },
  {
    "url": "polyfill-830cd53ca5c6720b5926.js"
  },
  {
    "url": "polyfill-830cd53ca5c6720b5926.js.map",
    "revision": "0c0ba94d94d6521b2d1611a8e0ffd435"
  },
  {
    "url": "robots.txt",
    "revision": "9826b571d9874f89fc71ba8c1b710ab4"
  },
  {
    "url": "sitemap.xml",
    "revision": "fc168168c45f4dc0d7413147f7bbb754"
  },
  {
    "url": "static/byline-20f461669ac3d95a3e4d00b67788dda5.svg"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/002c1/combined_content.png"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/53f65/combined_content.png"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/a90ce/combined_content.png"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/ecd8d/combined_content.png"
  },
  {
    "url": "static/felixity_the_cat-a33264bde9e0a8389dfbf2268c6d5911.svg"
  },
  {
    "url": "webpack-runtime-32e07c795199be928e03.js"
  },
  {
    "url": "webpack-runtime-32e07c795199be928e03.js.map",
    "revision": "c30990ec7a1481ad6d561986aa5a5087"
  },
  {
    "url": "webpack-runtime-b44e91f4dfa790f7bf28.js"
  },
  {
    "url": "webpack-runtime-b44e91f4dfa790f7bf28.js.map",
    "revision": "5518d103315ef2b4ee8573ea4679f7e4"
  },
  {
    "url": "webpack.stats.json",
    "revision": "b4ecc7e7748fa5799c11112c4eee0509"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-3375cea6d9a61d98ee6e.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)

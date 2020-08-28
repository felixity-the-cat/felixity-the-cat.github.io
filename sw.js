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
    "revision": "7387fbfacb4338aa7480eb4f7164e0be"
  },
  {
    "url": "404/index.html",
    "revision": "ba73ef9c1a11a875fc89fa1e6f928184"
  },
  {
    "url": "app-1e490c75ecac4c6a0013.js"
  },
  {
    "url": "app-1e490c75ecac4c6a0013.js.map",
    "revision": "9b457a2b840e378ec8a453ea72b4a789"
  },
  {
    "url": "chunk-map.json",
    "revision": "da02757e9227ad94717b81e915cbe484"
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
    "url": "component---src-pages-index-js-4de9cd975794dfd956b4.js"
  },
  {
    "url": "component---src-pages-index-js-4de9cd975794dfd956b4.js.map",
    "revision": "4f86e1e404d26816ec186145ff204e3b"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-93ee4f32a3c3631b6c51.js"
  },
  {
    "url": "e50e9c162871c1d91fba5ce567a5656e16dc6783-93ee4f32a3c3631b6c51.js.map",
    "revision": "8cdc407cb4ffb6dd24804d37476610df"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "50a6a8a733310bff9ee79d2dd6f0655f"
  },
  {
    "url": "favicon.svg",
    "revision": "4e032a896d328a2f78d6d7045118ac18"
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
    "revision": "b64d234d251f77eaac11c6190d61bd7e"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "2eaaa2bad660be5c89a404a0a0ad0bce"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "39d0ab9d2a4a89bf0af9393f512e2de2"
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
    "revision": "1d8fd9a5b807b844b103de474b8c5a13"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "f6f657399ba70f25f59426bd9d3ed3e3"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "polyfill-830cd53ca5c6720b5926.js"
  },
  {
    "url": "polyfill-830cd53ca5c6720b5926.js.map",
    "revision": "0c0ba94d94d6521b2d1611a8e0ffd435"
  },
  {
    "url": "static/byline-20f461669ac3d95a3e4d00b67788dda5.svg"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/09f27/combined_content.webp"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/0b5f9/combined_content.webp"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/20023/combined_content.png"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/3d4cf/combined_content.png"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/5206a/combined_content.png"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/95d4a/combined_content.webp"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/cdb45/combined_content.png"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/fabd0/combined_content.webp"
  },
  {
    "url": "static/felixity_the_cat-a33264bde9e0a8389dfbf2268c6d5911.svg"
  },
  {
    "url": "webpack-runtime-c86f5c41c4b4247f7a88.js"
  },
  {
    "url": "webpack-runtime-c86f5c41c4b4247f7a88.js.map",
    "revision": "8afeba1584e04c1ed3f5b641d26fbb56"
  },
  {
    "url": "webpack.stats.json",
    "revision": "9bcbdd3b5ce483aa98013f4427e4b8f5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
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
  if (!resources || !(await caches.match(`/app-1e490c75ecac4c6a0013.js`))) {
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

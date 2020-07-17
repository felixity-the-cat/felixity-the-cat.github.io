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

importScripts("workbox-v4.3.1/workbox-sw.js")
workbox.setConfig({ modulePathPrefix: "workbox-v4.3.1" })

workbox.core.setCacheNameDetails({ prefix: "gatsby-plugin-offline" })

workbox.core.skipWaiting()

workbox.core.clientsClaim()

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    url: "app-c9773756423005473dae.js",
  },
  {
    url: "app-c9773756423005473dae.js.map",
    revision: "ae25215f1d5a493a48404d5e0821a892",
  },
  {
    url: "chunk-map.json",
    revision: "06d8fa8dd7dd2438983bca7fe59e858b",
  },
  {
    url:
      "component---cache-caches-gatsby-plugin-offline-app-shell-js-0e7509a3429803f7697c.js",
  },
  {
    url:
      "component---cache-caches-gatsby-plugin-offline-app-shell-js-0e7509a3429803f7697c.js.map",
    revision: "0e7d8346e873f5c7b97bf38cf8cc8b29",
  },
  {
    url: "component---src-pages-index-js-d045e5b82013e09594f7.js",
  },
  {
    url: "component---src-pages-index-js-d045e5b82013e09594f7.js.map",
    revision: "7ed749e8fd2f5b2c319061ae9389f2e9",
  },
  {
    url: "favicon-32x32.png",
    revision: "50a6a8a733310bff9ee79d2dd6f0655f",
  },
  {
    url: "framework-8c8d363c63d1a9a80d21.js",
  },
  {
    url: "framework-8c8d363c63d1a9a80d21.js.map",
    revision: "bc94ec94bce0afc91631defd1223df76",
  },
  {
    url: "icons/icon-144x144.png",
    revision: "a357006864e3d83f35e994d7cf8d35d1",
  },
  {
    url: "icons/icon-192x192.png",
    revision: "0583d85f3102c14f11a9608df620a096",
  },
  {
    url: "icons/icon-256x256.png",
    revision: "75e25b6f7343f086b6cf9249fdcc6524",
  },
  {
    url: "icons/icon-384x384.png",
    revision: "cc1bdb48c87f4668f08a8288665ab9d7",
  },
  {
    url: "icons/icon-48x48.png",
    revision: "90fa6fb602aa5a8642815b147bae1e75",
  },
  {
    url: "icons/icon-512x512.png",
    revision: "e5d18453908d24b1c9810771494f37f4",
  },
  {
    url: "icons/icon-72x72.png",
    revision: "d179d53308b5329c7dbb158bac8eb442",
  },
  {
    url: "icons/icon-96x96.png",
    revision: "0b3b7c2335aef02eeacad96078823161",
  },
  {
    url: "idb-keyval-3.2.0-iife.min.js",
  },
  {
    url: "index.html",
    revision: "b6c5873e6a778deccbe9bd4c01415cbf",
  },
  {
    url: "manifest.webmanifest",
    revision: "bb0e2c48a031529d5e02a8a48d05b6aa",
  },
  {
    url: "offline-plugin-app-shell-fallback/index.html",
    revision: "07058ac524ac3888769d109bc5b15724",
  },
  {
    url: "page-data/app-data.json",
    revision: "e8d7fe796ba7eaf577192682a35359f1",
  },
  {
    url: "page-data/index/page-data.json",
    revision: "b13d7f735a9e3724b5a85849d23caba3",
  },
  {
    url: "page-data/offline-plugin-app-shell-fallback/page-data.json",
    revision: "f6081b83111aea4128c98944b7fafccc",
  },
  {
    url: "polyfill-05ca266ba135f47d33f0.js",
  },
  {
    url: "polyfill-05ca266ba135f47d33f0.js.map",
    revision: "152d85d660cf35c6f270977f79d89456",
  },
  {
    url: "static/byline-20f461669ac3d95a3e4d00b67788dda5.svg",
  },
  {
    url: "static/d01187b2dade0fbaed431c5a8d229f72/497c6/combined_content.png",
  },
  {
    url: "static/d01187b2dade0fbaed431c5a8d229f72/69585/combined_content.png",
  },
  {
    url: "static/d01187b2dade0fbaed431c5a8d229f72/a7599/combined_content.png",
  },
  {
    url: "static/felixity_the_cat-a33264bde9e0a8389dfbf2268c6d5911.svg",
  },
  {
    url: "webpack-runtime-f47ee36d4b73ad84d02b.js",
  },
  {
    url: "webpack-runtime-f47ee36d4b73ad84d02b.js.map",
    revision: "7322e516267a9eea4fba5d0922ab8964",
  },
  {
    url: "webpack.stats.json",
    revision: "f60dcebe752e1f4425b6907bb7bb0a8f",
  },
].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
  /(\.js$|\.css$|static\/)/,
  new workbox.strategies.CacheFirst(),
  "GET"
)
workbox.routing.registerRoute(
  /^https?:.*\page-data\/.*\/page-data\.json/,
  new workbox.strategies.StaleWhileRevalidate(),
  "GET"
)
workbox.routing.registerRoute(
  /^https?:.*\/page-data\/app-data\.json/,
  new workbox.strategies.StaleWhileRevalidate(),
  "GET"
)
workbox.routing.registerRoute(
  /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
  new workbox.strategies.StaleWhileRevalidate(),
  "GET"
)
workbox.routing.registerRoute(
  /^https?:\/\/fonts\.googleapis\.com\/css/,
  new workbox.strategies.StaleWhileRevalidate(),
  "GET"
)

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
  if (!resources || !(await caches.match(`/app-c9773756423005473dae.js`))) {
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

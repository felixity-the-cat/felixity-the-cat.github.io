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
    "url": "175-ccfb79fa598103aff433.js"
  },
  {
    "url": "175-ccfb79fa598103aff433.js.map",
    "revision": "4e0d565380d6492a8b0454483d3394cd"
  },
  {
    "url": "231-7cede0fd63200e1deba8.js"
  },
  {
    "url": "231-7cede0fd63200e1deba8.js.map",
    "revision": "452155f9d78132f534b29447b367fd9f"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-6ca668b8df74af635023.js"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-6ca668b8df74af635023.js.map",
    "revision": "97faa825de7ea7216f74ef75b27c02f9"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-8a7d2dd9522e72b060b4.js"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-8a7d2dd9522e72b060b4.js.map",
    "revision": "3f276b4613d63ec774bf995e1b61dc09"
  },
  {
    "url": "404.html",
    "revision": "ff30758cf2cc0383e7773c921afb64ae"
  },
  {
    "url": "404/index.html",
    "revision": "01065c40b8473438bfce3898f1a2026c"
  },
  {
    "url": "503-84811d4a8a749e826c43.js"
  },
  {
    "url": "503-84811d4a8a749e826c43.js.map",
    "revision": "f9f675e7c8182ac6f1d47a7101a5f01d"
  },
  {
    "url": "app-f2284966a3b574059f12.js"
  },
  {
    "url": "app-f2284966a3b574059f12.js.LICENSE.txt",
    "revision": "6fce53c7c7713ebf61712cc2929746fa"
  },
  {
    "url": "app-f2284966a3b574059f12.js.map",
    "revision": "1178d6eb87de0586f6868b3b18aa8d46"
  },
  {
    "url": "chunk-map.json",
    "revision": "6fb3d8aa154f9d5c7d7c61222e311a46"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7b47388f026eb12218d0.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7b47388f026eb12218d0.js.map",
    "revision": "7d7e9348730bedec10d97e611259f53f"
  },
  {
    "url": "component---src-pages-404-jsx-ece90e74cd2aa7944bec.js"
  },
  {
    "url": "component---src-pages-404-jsx-ece90e74cd2aa7944bec.js.map",
    "revision": "48988636facbc8e9c68badbad7da5afc"
  },
  {
    "url": "component---src-pages-index-jsx-9789de96aa4649144f8b.js"
  },
  {
    "url": "component---src-pages-index-jsx-9789de96aa4649144f8b.js.map",
    "revision": "d7bd670e0f6bd427d1be4834da7eb639"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "224ced249ab342520f4db0c0672936b1"
  },
  {
    "url": "favicon.svg",
    "revision": "4e032a896d328a2f78d6d7045118ac18"
  },
  {
    "url": "framework-f349ac6340b825a84156.js"
  },
  {
    "url": "framework-f349ac6340b825a84156.js.LICENSE.txt",
    "revision": "34ad9c8bf4d74905b6b042d9f6310c3b"
  },
  {
    "url": "framework-f349ac6340b825a84156.js.map",
    "revision": "02ba55c9f70a31ebe690dbfaf6629c52"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "12df20ef15dbee6ea46a7b1bcb091bb5"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "45a816cccc86e1b04d417bd71d792768"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "d168c9d3e87506a39f1f100c1ddd7105"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "c57392e7615ceecf0d3c82e7accc07fb"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "1ea47aaf4c1792a2bf4593a7f0a730db"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "c4c26a6b0a0b847a373b3e19deb9e3d9"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "c0a15860d61fdbe8295336dd32c856f7"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "ef36681ca140ff9694060ade0f4b27a6"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "4baf1d4524242bbfda3ccfa849c71cf4"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "237e8e8a82158b3c3bca75d46553a99e"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f3cbdfc4337b9e6c199eded47c3cd973"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "171dbd7715a9e8a895d7a36888770c1c"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "db4523ee118a4df37d9ae53cca625f83"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "8aa1598949cfd7952607ea2722e42f8b"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "1268b9e60328196b02088437dbd9bada"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f2c002077289a7e1ac538802bc7f5314"
  },
  {
    "url": "polyfill-063a54ddf19d2d07635a.js"
  },
  {
    "url": "polyfill-063a54ddf19d2d07635a.js.map",
    "revision": "acf3e0ce14dbdefe31c958bb91dce722"
  },
  {
    "url": "robots.txt",
    "revision": "0b02b4549c57b2c93d395ec0dae27461"
  },
  {
    "url": "sitemap/sitemap-0.xml",
    "revision": "e4b830f0560b850362e0ca1b13c8c925"
  },
  {
    "url": "sitemap/sitemap-index.xml",
    "revision": "b2efe8ac852d06cfd39e0f17e80913e7"
  },
  {
    "url": "static/Billabong-15b124bd411b94e1da8914b4e10b7af7.woff2"
  },
  {
    "url": "static/Billabong-23b39ea3caf10dd1cfd5cac701c284c4.otf"
  },
  {
    "url": "static/Billabong-b8d9be2d62a292c0c6dc4293c8cf3f8d.woff"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/098b6/combined_content.png"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/1d1cf/combined_content.png"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/25553/combined_content.avif"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/31591/combined_content.avif"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/4119b/combined_content.webp"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/464b2/combined_content.avif"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/bda91/combined_content.webp"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/d209c/combined_content.webp"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/e48ab/combined_content.png"
  },
  {
    "url": "static/felixity_the_cat-600dc9a3afab2f5014aad3d7a4bbaa7e.svg"
  },
  {
    "url": "webpack-runtime-62f9e7db8735c3b18f51.js"
  },
  {
    "url": "webpack-runtime-62f9e7db8735c3b18f51.js.map",
    "revision": "adf5d33218a3440086f595d052810172"
  },
  {
    "url": "webpack-runtime-f87bb9294629235feeba.js"
  },
  {
    "url": "webpack-runtime-f87bb9294629235feeba.js.map",
    "revision": "f96b4f99dbfe748aa5692d8cb50aeb0f"
  },
  {
    "url": "webpack.stats.json",
    "revision": "e71c5619a5b591be1e3e3898c06277ff"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
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

    // We detected compilation hash mismatch
    // we should clear runtime cache as data
    // files might be out of sync and we should
    // do fresh fetches for them
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (key && key.includes(`runtime`)) {
              return caches.delete(key)
            }

            return Promise.resolve()
          })
        )
      })
    )
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
  if (!resources || !(await caches.match(`/app-f2284966a3b574059f12.js`))) {
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

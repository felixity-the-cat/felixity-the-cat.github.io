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
    "url": "_gatsby/slices/_gatsby-scripts-1.html",
    "revision": "15ec1ca44b31864d45ec0f76bb8c9de9"
  },
  {
    "url": "~partytown/debug/partytown-atomics.js"
  },
  {
    "url": "~partytown/debug/partytown-media.js"
  },
  {
    "url": "~partytown/debug/partytown-sandbox-sw.js"
  },
  {
    "url": "~partytown/debug/partytown-sw.js"
  },
  {
    "url": "~partytown/debug/partytown-ww-atomics.js"
  },
  {
    "url": "~partytown/debug/partytown-ww-sw.js"
  },
  {
    "url": "~partytown/debug/partytown.js"
  },
  {
    "url": "~partytown/partytown-atomics.js"
  },
  {
    "url": "~partytown/partytown-media.js"
  },
  {
    "url": "~partytown/partytown-sw.js"
  },
  {
    "url": "~partytown/partytown.js"
  },
  {
    "url": "108-c36cc2d4830537cea1e7.js"
  },
  {
    "url": "108-c36cc2d4830537cea1e7.js.LICENSE.txt",
    "revision": "b2a938793c03a627bef3e9442ddf9200"
  },
  {
    "url": "108-c36cc2d4830537cea1e7.js.map",
    "revision": "7936fa38d111476e0196e66549242fef"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-fabbea0af59c48e721e9.js"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-fabbea0af59c48e721e9.js.map",
    "revision": "9b8d19762caecfc021549f5fd8e07af6"
  },
  {
    "url": "404.html",
    "revision": "cfdf6b71ac08151eb4563f2a9acf5a39"
  },
  {
    "url": "404/index.html",
    "revision": "8e54fdc7a4dbdc13770d59b2c99c938e"
  },
  {
    "url": "556-9ed577f2371c876b0091.js"
  },
  {
    "url": "556-9ed577f2371c876b0091.js.map",
    "revision": "69adc371258a0072ecf381a478baa5c1"
  },
  {
    "url": "app-7d4e4d73961492709778.js"
  },
  {
    "url": "app-7d4e4d73961492709778.js.LICENSE.txt",
    "revision": "8fb505a0d15bd340a3f1f1c822e27e4a"
  },
  {
    "url": "app-7d4e4d73961492709778.js.map",
    "revision": "16395bc4cf267179e35b5bf52a439aef"
  },
  {
    "url": "chunk-map.json",
    "revision": "00df49cb798b5615c63c79db02a135c0"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b4807282a7d54621e242.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b4807282a7d54621e242.js.map",
    "revision": "7c0186fb3a699d40eee60a88ccaffb37"
  },
  {
    "url": "component---src-pages-404-jsx-5d2299a05f3c530edada.js"
  },
  {
    "url": "component---src-pages-404-jsx-5d2299a05f3c530edada.js.map",
    "revision": "a0165afc52bdeaa5aa96acef4bfab526"
  },
  {
    "url": "component---src-pages-index-jsx-2a42e8fee517a6cb9de0.js"
  },
  {
    "url": "component---src-pages-index-jsx-2a42e8fee517a6cb9de0.js.map",
    "revision": "655fe9d3d4bc5a94c55e568cd5634115"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "5820fe5608fc4a993cb191336132d531"
  },
  {
    "url": "favicon.svg",
    "revision": "4e032a896d328a2f78d6d7045118ac18"
  },
  {
    "url": "framework-702648718598aa114bd9.js"
  },
  {
    "url": "framework-702648718598aa114bd9.js.LICENSE.txt",
    "revision": "60f6bf9e100e456690e9ab6c9a37bfc2"
  },
  {
    "url": "framework-702648718598aa114bd9.js.map",
    "revision": "5a6590e05d42da8e5a16cf799274a52d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "9484d7717b4dc767366edb653326c0c9"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "16b9341f7fbf2c7c5a53310c4c316725"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "14d64d7d11d94502d2d8bfbf7f8dfc55"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "40967eb03ea864ae112175e701f8d319"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "38745df22dac637580aa980696759b0b"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "ba4c709700b2b8f96ff4f690e0f5459b"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "2b6658fed4f32c58df23ada7a7abfa90"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "7d5720cbfd2451f44a8ed0611a442b86"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "cc1f7a5c324a6c80c1a0c6b9e66d6375"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "237e8e8a82158b3c3bca75d46553a99e"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4ab926ccff89e171a817fdc8b64bf547"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "783b1363edeafaa29bd758f6507954e9"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "aa7386d977f6ef93b5ef998b0178a381"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "7d388930d0bbc14c00159ac0a87271ae"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "26ba160c56d82ed41868808e5bcd471f"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "d22fedc5f9585423cf2e45d46cac048f"
  },
  {
    "url": "polyfill-cac8a28b2d976b2f940d.js"
  },
  {
    "url": "polyfill-cac8a28b2d976b2f940d.js.map",
    "revision": "34556a6e12e70b42c7446ddc74ef76ae"
  },
  {
    "url": "robots.txt",
    "revision": "887c34e2dbcb42e863ca87ae40369ab4"
  },
  {
    "url": "sitemap-0.xml",
    "revision": "e4b830f0560b850362e0ca1b13c8c925"
  },
  {
    "url": "sitemap-index.xml",
    "revision": "96cbe00146da6654d118e4d19b273cdd"
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
    "url": "webpack-runtime-04a88ca024a172f3743a.js"
  },
  {
    "url": "webpack-runtime-04a88ca024a172f3743a.js.map",
    "revision": "6a1b3678e04567098f482cabcc8381c1"
  },
  {
    "url": "webpack.stats.json",
    "revision": "a99ee8e010cb3b9a1b539545942527da"
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
  if (!resources || !(await caches.match(`/app-7d4e4d73961492709778.js`))) {
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

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
    "revision": "d25409d1850132cf92dc0b0b02b29b21"
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
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-b921ad0d65b544d182d7.js"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-b921ad0d65b544d182d7.js.map",
    "revision": "7dd18a1fa32a028d28253d1d72c0d35e"
  },
  {
    "url": "357-fa486712037fc273fabc.js"
  },
  {
    "url": "357-fa486712037fc273fabc.js.LICENSE.txt",
    "revision": "b2a938793c03a627bef3e9442ddf9200"
  },
  {
    "url": "357-fa486712037fc273fabc.js.map",
    "revision": "f69b1c8c716ee54c5c63f215dfc9d4a0"
  },
  {
    "url": "404.html",
    "revision": "de2e76a4f787aae69ac88248496c59c0"
  },
  {
    "url": "404/index.html",
    "revision": "beaa48f4146842741a0f5cf45b9223fc"
  },
  {
    "url": "86-082248426dadf86f17e9.js"
  },
  {
    "url": "86-082248426dadf86f17e9.js.map",
    "revision": "967dd38e853dc38d6ae6100b098edbe7"
  },
  {
    "url": "app-48208da3198c1e278caf.js"
  },
  {
    "url": "app-48208da3198c1e278caf.js.LICENSE.txt",
    "revision": "8fb505a0d15bd340a3f1f1c822e27e4a"
  },
  {
    "url": "app-48208da3198c1e278caf.js.map",
    "revision": "3d7e66186c54346034e672e38ff55841"
  },
  {
    "url": "app-774bdbb926483b053100.js"
  },
  {
    "url": "app-774bdbb926483b053100.js.LICENSE.txt",
    "revision": "8fb505a0d15bd340a3f1f1c822e27e4a"
  },
  {
    "url": "app-774bdbb926483b053100.js.map",
    "revision": "8d43925174787c1bf76326c063684fc2"
  },
  {
    "url": "chunk-map.json",
    "revision": "4b5849011f337d976a7beeec22c84540"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b59c177a3b81267aabe9.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b59c177a3b81267aabe9.js.map",
    "revision": "d3e3d95fcd57e1046849a7052300732c"
  },
  {
    "url": "component---src-pages-404-jsx-6afcb9e539dc2d1dde30.js"
  },
  {
    "url": "component---src-pages-404-jsx-6afcb9e539dc2d1dde30.js.map",
    "revision": "574d4cd92a452b20532db1237e94befc"
  },
  {
    "url": "component---src-pages-index-jsx-b428f6602adacccb5bd2.js"
  },
  {
    "url": "component---src-pages-index-jsx-b428f6602adacccb5bd2.js.map",
    "revision": "250c64e48195419f30f0e8caa01a5c95"
  },
  {
    "url": "component---src-pages-index-jsx-ed47ea6c3830417d545c.js"
  },
  {
    "url": "component---src-pages-index-jsx-ed47ea6c3830417d545c.js.map",
    "revision": "b69ddd3d726c20d5ce4a7b6c62bc8bec"
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
    "url": "framework-b63c62b16fde62c32417.js"
  },
  {
    "url": "framework-b63c62b16fde62c32417.js.LICENSE.txt",
    "revision": "60f6bf9e100e456690e9ab6c9a37bfc2"
  },
  {
    "url": "framework-b63c62b16fde62c32417.js.map",
    "revision": "cd0afce55aa0e4a7c8e765d7d6b5fff6"
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
    "revision": "f56fba571591b2cc28f0c8f494a4dceb"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "34492712bc17274d784a3ddedfd56f60"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c69b33e232ac9274e127bd296dcdd92c"
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
    "revision": "8485c7996aab78de1debb7b982c13a29"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "e736244d2ef9aca704399b972ed3fa14"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "d22fedc5f9585423cf2e45d46cac048f"
  },
  {
    "url": "polyfill-f1d46b781c26c3bc1360.js"
  },
  {
    "url": "polyfill-f1d46b781c26c3bc1360.js.map",
    "revision": "1a3ff9d1900e4685dc66e8c20cecba88"
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
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/149bf/combined_content.png"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/15e50/combined_content.webp"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/288b1/combined_content.webp"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/3ae6d/combined_content.avif"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/3e4c4/combined_content.webp"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/b6ca5/combined_content.png"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/c8ae0/combined_content.avif"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/c9fea/combined_content.avif"
  },
  {
    "url": "static/d01187b2dade0fbaed431c5a8d229f72/fca96/combined_content.png"
  },
  {
    "url": "static/felixity_the_cat-600dc9a3afab2f5014aad3d7a4bbaa7e.svg"
  },
  {
    "url": "webpack-runtime-2c295af509d78745ac2a.js"
  },
  {
    "url": "webpack-runtime-2c295af509d78745ac2a.js.map",
    "revision": "0a86c5b048565057d3d80fe716ac6317"
  },
  {
    "url": "webpack-runtime-da20c3e49f9971f1c20a.js"
  },
  {
    "url": "webpack-runtime-da20c3e49f9971f1c20a.js.map",
    "revision": "20c837715746c4d29f2425a8cefdd366"
  },
  {
    "url": "webpack.stats.json",
    "revision": "3f8e6c9bae8c1e915b895fb3c7b240a9"
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
  if (!resources || !(await caches.match(`/app-774bdbb926483b053100.js`))) {
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

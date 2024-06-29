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
    "revision": "172ba04c5e9cb7e21632ce7396047eaf"
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
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-220b5b2052503eb0f9e0.js"
  },
  {
    "url": "2525ca2b4881fe9911cbb8081340847caf7a19a3-220b5b2052503eb0f9e0.js.map",
    "revision": "86f8ccdd90f848020836f59c1c4e8d06"
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
    "revision": "076a03d7861a5377ebf0d04fc614f06e"
  },
  {
    "url": "404/index.html",
    "revision": "f14d83cc9daa9454d2df255baf76f32a"
  },
  {
    "url": "86-082248426dadf86f17e9.js"
  },
  {
    "url": "86-082248426dadf86f17e9.js.map",
    "revision": "967dd38e853dc38d6ae6100b098edbe7"
  },
  {
    "url": "app-33836fee2d88d9feb427.js"
  },
  {
    "url": "app-33836fee2d88d9feb427.js.LICENSE.txt",
    "revision": "8fb505a0d15bd340a3f1f1c822e27e4a"
  },
  {
    "url": "app-33836fee2d88d9feb427.js.map",
    "revision": "3042c3830411765aa8038d332da8a88e"
  },
  {
    "url": "chunk-map.json",
    "revision": "e9d4e103a8ff954a97307ecf6eb94006"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b59c177a3b81267aabe9.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b59c177a3b81267aabe9.js.map",
    "revision": "d3e3d95fcd57e1046849a7052300732c"
  },
  {
    "url": "component---src-pages-404-jsx-4398c161e2a0c2405ed2.js"
  },
  {
    "url": "component---src-pages-404-jsx-4398c161e2a0c2405ed2.js.map",
    "revision": "ee848b200a073b107176915ff3f5bb62"
  },
  {
    "url": "component---src-pages-index-jsx-52dede36fce135bee827.js"
  },
  {
    "url": "component---src-pages-index-jsx-52dede36fce135bee827.js.map",
    "revision": "d966f5a44c244bdaeb081877a8a4d380"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "5820fe5608fc4a993cb191336132d531"
  },
  {
    "url": "favicon.svg",
    "revision": "39afef72b2f116ae542ad7966edb006c"
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
    "revision": "e33e8a152d309437ded01c4c2b583595"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "7f8aaad06a90e860bb899876ee52b1cb"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "e9c15934918cbf7e1e7cfd39119e433b"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "cd1d6bfcf24031e892ccc736f1c716d7"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "38745df22dac637580aa980696759b0b"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "7891cbb6a46e6cd777bc7fff6985dd8d"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "673b34f3421fb0c233b7a6d3e81179c5"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "0bdb37e4eb5f0ed0133dcb29b03cc13e"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "d0444012eb0b4e6964ec407a7c5a2e5d"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "cc1e02bb940521267215ccfb5707b622"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9936baf04e7976c1403ec7b71de47b0c"
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
    "revision": "a50abb4d0ac8d3028f1697857bf12e55"
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
    "url": "static/felixity_the_cat.d7b4c9d6.svg"
  },
  {
    "url": "webpack-runtime-6b74aa96713cf024de44.js"
  },
  {
    "url": "webpack-runtime-6b74aa96713cf024de44.js.map",
    "revision": "530423d13117429bda4b9867015e67ab"
  },
  {
    "url": "webpack.stats.json",
    "revision": "bfe5359275f42ff9783dcd6807fa8cd2"
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
  if (!resources || !(await caches.match(`/app-33836fee2d88d9feb427.js`))) {
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

// https://codelabs.developers.google.com/codelabs/workbox-lab/

importScripts("workbox-sw.js");
// importScripts("./node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v2.1.1.js");
// importScripts("https://unpkg.com/workbox-sw@2.0.3/build/importScripts/workbox-sw.dev.v2.0.3.js");

/**
 * Create an instance of WorkboxSW.
 * Setting clientsClaims to true tells our service worker to take control as
 * soon as it's activated.
 */
var workboxSW = new WorkboxSW({clientsClaim: true});

/**
 * precache() is passed a manifest of URLs and versions, and does the following
 * each time the service worker starts up:
 *   - Adds all new URLs to a cache.
 *   - Refreshes the previously cached response if the URL isn't new, but the
 *     revision changes. This will also trigger a Broadcast Channel API message
 *     sent to the channel 'precache-updates'.
 *   - Removes entries for URLs that used to be in the list, but aren't anymore.
 *   - Sets up a fetch handler to respond to any requests for URLs in this
 *     list using a cache-first strategy.
 *
 * DO NOT CREATE OR UPDATE THIS LIST BY HAND!
 * Instead, add one of our tools (workbox-cli, workbox-webpack-plugin, or
 * workbox-build) to your existing build process, and have that regenerate the
 * manifest at the end of every build.
 */
workboxSW.precache([
  {
    "url": "assets/css/styles.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.woff2",
    "revision": "a85ccf360fecc9e944dae3617f131577"
  },
  {
    "url": "assets/icons/icon-256.png",
    "revision": "d5222afc45cee197edfd4f5579dc940c"
  },
  {
    "url": "assets/icons/icon-large.png",
    "revision": "dfc2528c59fd4c821f5163e26dbfa0c3"
  },
  {
    "url": "assets/icons/icon.png",
    "revision": "1f4015200de4b8fd686702b81af11c5e"
  },
  {
    "url": "index.html",
    "revision": "2d2510ea95e121905b8da18283bca92f"
  },
  {
    "url": "manifest.json",
    "revision": "08e9e68486359ec14d72a0a3526700bd"
  },
  {
    "url": "news.html",
    "revision": "9dc2ad296323719de23b4c6f0e93519b"
  },
  {
    "url": "overview.html",
    "revision": "fcb1735c0cf51c3d3505327d2a499e07"
  },
  {
    "url": "settings.html",
    "revision": "29ec30ed175bdccc43a10e4b71f19332"
  },
  {
    "url": "sw-init.js",
    "revision": "ba76a7e37335c5a113737b53de912b93"
  },
  {
    "url": "sw.js",
    "revision": "77a9287ad5e613bc200f264d641c3cd3"
  },
  {
    "url": "template.html",
    "revision": "0ff418121b8ee49134786f26b989d329"
  },
  {
    "url": "views.html",
    "revision": "5638f951f8cd540fd47268b37844bbc0"
  }
]);

/**
 * registerNavigationRoute() is used for sites that follow the App Shell Model,
 * https://developers.google.com/web/fundamentals/architecture/app-shell
 * It tells the service worker that whenever there's a navigation request for
 * a new URL, instead of returning the HTML for that URL, return a previously
 * cached "shell" HTML file instead.
 *
 * If you want more control over which navigations use the "shell" HTML, you
 * can provide an optional array of regular expressions:
 *   - whitelist (which defaults to [/./])
 *   - blacklist (which defaults to [])
 *
 * (For the purposes of this demo, which doesn't follow the App Shell Model,
 * registerNavigationRoute() is commented out.)
 */
// workboxSW.router.registerNavigationRoute('app-shell.html', {
//     whitelist: [/./],
//     blacklist: [],
// });

/**
 * Requests for URLs that aren't precached can be handled by runtime caching.
 * Workbox has a flexible routing system, giving you control over which caching
 * strategies to use for which kind of requests.
 *
 * registerRoute() takes a RegExp or a string as its first parameter.
 *   - RegExps can match any part of the request URL.
 *   - Strings are Express-style routes, parsed by
 *     https://github.com/nightwolfz/path-to-regexp
 *
 * registerRoute() takes a caching strategy as its second parameter.
 * The built-in strategies are:
 *   - cacheFirst
 *   - cacheOnly
 *   - networkFirst
 *   - networkOnly
 *   - staleWhileRevalidate
 * Advice about which strategies to use for various assets can be found at
 * https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/
 *
 * Each strategy can be configured with additional options, controlling the
 * name of the cache that's used, cache expiration policies, which response
 * codes are considered valid (useful when you want to cache opaque responses)
 * and whether updates to previously cached responses should trigger a message
 * using the BroadcastChannel API.
 *
 * The following routes show this flexibility put to use.
 */

/**
 * Set up a route that will match any URL requested that ends in .txt.
 * Handle those requests using a network-first strategy.
 */
// workboxSW.router.registerRoute(
//     /\.txt$/,
//     workboxSW.strategies.networkFirst()
// );

/**
 * Set up a route that will match any URL requested that starts with
 * https://httpbin.org/delay/.
 * Handle those requests using a network-first strategy, but with a timeout.
 * If there's no network response before the timeout, then return the previous
 * response from the cache instead.
 */
// workboxSW.router.registerRoute(
//     "https://httpbin.org/delay/(.*)",
//     workboxSW.strategies.networkFirst({networkTimeoutSeconds: 3})
// );

/**
 * Set up a route that will match any URL requested that starts with
 * https://httpbin.org/image/.
 * Handle those requests using a cache-first strategy, storing them in a
 * dedicated cache named 'images'.
 * That cache has a maximum size of 2 entries,
 * and once that's reached, the least-recently used entry will be deleted.
 * Additionally, any entries older than 7 * 24 * 60 * 60 seconds (1 week) will
 * be deleted.
 * Because the image responses are cross-domain and don't use CORS, they will
 * be "opaque", and have a status code of 0. When using a cache-first strategy,
 * we need to explicitly opt-in to caching responses with a status of 0.
 */
// workboxSW.router.registerRoute(
//     "https://httpbin.org/image/(.*)",
//     workboxSW.strategies.cacheFirst({
//         cacheName: "images",
//         cacheExpiration: {
//         maxEntries: 2,
//         maxAgeSeconds: 7 * 24 * 60 * 60,
//         },
//         cacheableResponse: {statuses: [0, 200]},
//     })
// );

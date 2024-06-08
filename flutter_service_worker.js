'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "798e7c505253ad06a3b4cc913f67a0c8",
"flutter_bootstrap.js": "6854aa570b135a8888d9a7d7c3d712e0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js": "95720efde34e7a5b70c62f64127923de",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "50d03e495722855df41f982b0e062fb2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "3ae1a4b489714250dee6be2229e07f58",
"assets/fonts/MaterialIcons-Regular.otf": "33c5b4833916b6ba3c60aaaf8670a7db",
"assets/assets/images/logo.png": "911602ec26eaa76616bb2b67a30dfbc4",
"assets/assets/images/logo_2.png": "101361d997276cbeda46cd4c653d4b86",
"assets/assets/images/bottom_arrow.png": "8bfb53d2462cf71a7f60807a959e759c",
"assets/assets/images/grey_background.png": "55323384f9fd2e09c70539cfd15ac3da",
"assets/assets/images/facebook.png": "e3c5defafa0aba53645c80acee87b170",
"assets/assets/images/instagram.png": "836c604178095e2bf88b4dbca4ef7696",
"assets/assets/images/college_girl_vector.png": "b79bc50e55b922a3636b3120c6f1695d",
"assets/assets/icons/inference.png": "c221cd43b4c06ac12a8f94debf213bb5",
"assets/assets/icons/application_color.png": "e1868a8c8cf0e785f60c75fbb0c2425f",
"assets/assets/icons/discussion_color.png": "e2426ebf500d49e25775be5322177e62",
"assets/assets/icons/university.png": "513a513b4c98fb128caccd8a66958719",
"assets/assets/icons/tourist.png": "dade3885f50f886f9b1801447da446c2",
"assets/assets/icons/application.png": "b61f88fbcca0efe9a52a3c26d401730e",
"assets/assets/icons/interview.png": "378dda2378b2210c0e18584527710d67",
"assets/assets/icons/university_color.png": "1945b9eccc9db552f9057395270383fe",
"assets/assets/icons/interview_color.png": "c50f3086ddf5bd31ef7b377fd6980b51",
"assets/assets/icons/guidance.png": "e4c11f36dcbdc21bdaa7d2bf99fdb80d",
"assets/assets/icons/visa_color.png": "0385b94e9c84c20f5858a8997766ef88",
"assets/assets/icons/tourist_color.png": "57cccbf4987e821ec900d8361938d983",
"assets/assets/icons/guidance_color.png": "4f7fdcc22f3e058a28f2395d0bb07da3",
"assets/assets/icons/inference_color.png": "1e1c916cbefe638a1f74e33f6bb7e063",
"assets/assets/icons/visa.png": "ca761837e2350fe7851225f048ab3977",
"assets/assets/icons/discussion.png": "3605034ab52a8e86c3571071f560558f",
"assets/assets/destinations_images/france.png": "fce197303eb3d32641dcfb2869d0f512",
"assets/assets/destinations_images/austria.png": "3352ba23f732565932cb1dd4f2eee3fb",
"assets/assets/destinations_images/canada.png": "8a698272e5838c17830efd9ff10ed49a",
"assets/assets/destinations_images/dubai.png": "49076928db26d2cd17bbf4c75c16d824",
"assets/assets/destinations_images/finland.png": "8f521408e5aaa0c64140a1977d1dd333",
"assets/assets/destinations_images/united_kingdom.png": "d91b71c886bf44c1f135c98ee268864c",
"assets/assets/destinations_images/australia.png": "f7f0d61919fdc3705fa464c704a5af4e",
"assets/assets/destinations_images/america.png": "d5b9a23bd69b06b5959f51dd6d32ae82",
"assets/assets/destinations_images/ireland.png": "9f272258aa9677c60e3f50c0bb0ee36f",
"assets/assets/destinations_images/lithuana.png": "1d76ddf155dd9dcf8221aa6214b07324",
"assets/assets/destinations_images/germany.png": "fa0adb0f64394c998f7391c7c17ef126",
"assets/assets/destinations_images/sweden.png": "d79f6e5a6fc7ca521f893ec07ba5b5cf",
"assets/assets/destinations_images/new_zealand.png": "3ad2a6479c446b14a3afbdf03b119891",
"assets/assets/destinations_images/hungary.png": "b6ebedfbc7e3d20b1354143e3b1fe166",
"assets/assets/destinations_images/malaysia.png": "fd6396f609ff5d8518e24a17b4444b90",
"assets/AssetManifest.bin": "d2ee59f3d5c2ad887273c3fdd92fe8bf",
"assets/NOTICES": "1ad7565eae5fb04216f144e8b66788bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"manifest.json": "a7731e1c9f482ea703218021225e209b",
"index.html": "cdb966101db812cef1677467ed7a30d1",
"/": "cdb966101db812cef1677467ed7a30d1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

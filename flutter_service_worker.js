'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cc3ced1f985e7e218f58c6bfeb4d652b",
"assets/assets/america.png": "46f15a1dd9923a616216aa24ea3e37f7",
"assets/assets/anxious(2).JPG": "63600a1f47cca90ecde009c9e689a2b5",
"assets/assets/anxious.JPG": "54ce1124ac0b39510e8b159dcba71ef0",
"assets/assets/anxious.png": "0c3300d3d02da052aba73d8da1375318",
"assets/assets/awake.JPG": "5e10fb2c280ea8f754b6d47b6d6f0696",
"assets/assets/awake.png": "8cd600e949f937a480a5e956061e7d50",
"assets/assets/bed.JPG": "c46fcdcde84671bcacc47367ace60247",
"assets/assets/bed.png": "e2c6034e0df86ce53f26544bc6887417",
"assets/assets/concentrate.JPG": "dbaa6341be4bc129995352e08fa0bb36",
"assets/assets/concentrate.png": "9d4a3877dd70c17d4803044577a62f44",
"assets/assets/cycle.png": "b1b9bfd799d710251cf66345ce62a723",
"assets/assets/default_profile.jpg": "e40d1cb5b40fa93aa99c3909ab62381d",
"assets/assets/default_profilee.jpg": "df64bffab7d6f33d48b13e6072c3c80b",
"assets/assets/distracted.JPG": "88188111ee2f09f7204cd3fe8ed9c7fa",
"assets/assets/distracted.png": "4e343aec1f9c77229d889e72dc63f744",
"assets/assets/dizzy.png": "8df2fa4a5c4cdddcb9601cec9b723c4c",
"assets/assets/energised.png": "9388f34fea35ce4b1b3ace7711a18b1d",
"assets/assets/excercise.JPG": "546a4da53febd8e4f71123ad36d6bd4a",
"assets/assets/excited.JPG": "41f7fedd50d3fa7e158cf121d597bdc3",
"assets/assets/exercise.jpg": "546a4da53febd8e4f71123ad36d6bd4a",
"assets/assets/killer.png": "49207cc4dd1518a67a6d894f2048e8ae",
"assets/assets/measure.png": "e26515b30b06ce05024cf3262b07128c",
"assets/assets/productive.JPG": "f13c27546b8313f7ee2cd360c3c07059",
"assets/assets/productive.png": "10974b664f2f3a2ad624d16b41029083",
"assets/assets/relaxed.JPG": "9d3a1d9329c4a221eed6961206e14428",
"assets/assets/relaxed.png": "a845ddbe6619981b6c3299e171eecf2a",
"assets/assets/salt.png": "b2cdaef75f177cb5e222cfdd661fa4c3",
"assets/assets/spouse.png": "a817dfca05354f6915cfb1bee9027eab",
"assets/assets/sweat.png": "f2c2c84499e2adad762c84154b43ab61",
"assets/assets/sweaty.JPG": "f88a3164f90b51e3d0d94f45cdca3cfd",
"assets/assets/tired.JPG": "bd7fa7e3f68a289e36ac8ae1f526417b",
"assets/assets/tired.png": "85629108ea1f4ec73aa325dc3046a4af",
"assets/assets/wine.png": "e9fb80d7014134c53197940f4eefedbf",
"assets/assets/work.png": "01d24bb32ac68c7420ce724d9582eded",
"assets/assets/young.png": "e7d7c4b6092327b74a3a3769774955be",
"assets/FontManifest.json": "9ca479dc7c42222fbef5b4ec0afb42a8",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Montserrat-Italic.ttf": "c7ef29737ac0c81becc51ffbd2d6feed",
"assets/fonts/Montserrat.ttf": "a3fcdff002f26cdf718968593b0d9e47",
"assets/fonts/OpenSans-Italic.ttf": "8813083d80a30128eb9dd1b5a342c629",
"assets/fonts/OpenSans.ttf": "fad3454a861bdaf75e6abfc2c9de46c5",
"assets/fonts/PlayfairDisplay-Italic.ttf": "f54fcb31947f45744af46e4bb6166b0e",
"assets/fonts/PlayfairDisplay.ttf": "168ee09f171436bd22bfc276dc181ada",
"assets/NOTICES": "5386a354606a2ee405a9ef0c84488124",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/shaders/ink_sparkle.frag": "d0908f54bd795b5120481b33bde259e2",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f9242d1766ecc546293378bb521d5bdf",
"/": "f9242d1766ecc546293378bb521d5bdf",
"main.dart.js": "9d868f542434879d8cbd2396f2ac49a8",
"manifest.json": "ae0ece01676d410a033f9cc7cfa4e0c3",
"version.json": "fd3333857a44e8c40bc8301dce9b6947"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

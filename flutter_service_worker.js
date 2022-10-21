'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "ec6734f04329aa6e88626e335a0835d2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e866edadfe991e92756c7c4774fc20e2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cf163e091f55295722ef558687fceab6",
".git/logs/refs/heads/main": "13dd315d43947629a3e85419fa3cefa9",
".git/logs/refs/remotes/origin/main": "6718e070e2b0fb55dd84a9c73b2ddb78",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/ea34ba24ec13e9636f3ed04d575da62586be26": "ed632720d01fd2b5db74138be2b5b034",
".git/objects/14/6d0cd9f8fc4bac73e837b86ff29f42d40a4083": "68e356df44ceab6ee70b476e0b0a8252",
".git/objects/1e/67dd2074b93a6e5ff5f479cd7136eca8f14b50": "2ed4e016bf0134e59fbe54b1dcc52eb3",
".git/objects/1e/85fcccd4d042b95f6cb49672ad787e33a00434": "ebe8cbf958e50a96abee0035c41657ef",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/22/698ae54d4769ac4353cfa69e24a598eecee920": "64737344172c09f9681213ef8167320a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/2c/c1698a5ecc8892955c09f242a75190878b96a2": "141f51d62c65c837fd890dc4620775d6",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/37/1d7586e697ddbbebdb991521f71b744e6c544c": "f29ed0264fb4a5bbb80a77f00145a708",
".git/objects/3a/78e0d988c1101424af311ea45870a58e8444ad": "0230b5c78c51796753edecf1a94dd121",
".git/objects/4a/35c3d9d3534e83ac4fd57afaaa856bd40e7aa7": "b77982da1d025bfad80888fa4803915f",
".git/objects/4b/10964033912ce70ba050bf0b9c366ba91bd361": "b0553705b0ba3248e9ab28d1b69e5b44",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/dd3c3be28961137a1006890a28ee923d796f60": "b3fe26a9211d138e18be724158dfc650",
".git/objects/68/ac856d6115120baf507a3f7002db2cc1e1ea77": "403360cc4ec6843bd9d5ee0a7bd2a259",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/7c8b805ccc249a9b9bfe217059ade180bd7ea7": "62c3e0d64264040495b68bc4281e2fa0",
".git/objects/7f/279dfc892ffa8196767ae79a9b838d20ea9646": "3eee4dc28a79c161a35a79d1ffda1f45",
".git/objects/81/7155713f017b8c8b3fb077d22ddabd69691e17": "9c6b8658a80d3dbed9829e0527ae9f4f",
".git/objects/86/9f07b853a4e51db2b963d88dd833044e566675": "112df01b9683c0f017e538ece4f19db9",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8b/05141cdd8cd97f922caa7771c1d61fc7b0b850": "3ce3382da90e0e750a0ea381849e53af",
".git/objects/8e/4acb73712068b34ac005a36d197fc0f4352479": "fa3c3e0bdadf85ef1ebc8146597510a7",
".git/objects/90/35286c72459b38d1b8d61372dfd24abaceef76": "ef825eb92c1496c5f4440b65010ca05d",
".git/objects/a0/96313b5eb4f814cccf05a7e34517d7da52315f": "cf06323e6af1cc8d083b197dc02fd104",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/66147fc77748c80bdf627fa2269f376db576bc": "4ae73ddbdae7819b12cd0a9f72584fda",
".git/objects/ae/bc13c1d0565da3dac00acaa8b90cb02979555f": "1c0df06eb2b653536a99407184b01d2c",
".git/objects/b6/ac9f59b8167de5c341151270fe45a37d21393c": "e9aa156a3430b916b2d4c682cd92c329",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cb/19a74e3d9bcdd3dcffd87bb160d2ae645aa704": "5d90d57d2e14fd73efb322cadc14c3cc",
".git/objects/ce/3179665cb483615506cfc134f05fb4a98b0125": "056b22333dc81ebacb16d4e55cd23ed6",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2087245457379e739dfc0f775f44960cc0cd03": "95407b9d07901e923ee38d6e4a5c1999",
".git/objects/e1/81f530f27282575cb219eeba7c8ba8cdd68693": "381acf14bc99ada39ed526eb0eda4f0c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/f2e8baa5f4120da1ca273aaf4e581ef7a1ba4a": "4c2f81e27bdfe213c631adb545445060",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/de6d32faeed715b6a8bebdb3721e40d1f0bb81": "a458c8650d1183a870770140da1613a1",
".git/objects/f0/b2cb32ec3b2d43f19840b4ac108d5c36f3261e": "837fa75c464b05e21855d725ee3a47cb",
".git/objects/fd/7f5f0b35bae498784dda2dbe5e9ddd945477b2": "cf1e17266d30175d3c50d459905717ee",
".git/objects/fd/be1a280ed6b7ea52dd6e908abae45717978790": "754a6a727963eb8aa55e4ac92d94f50e",
".git/refs/heads/main": "f7299defb4bfe585c92bf4004527711f",
".git/refs/remotes/origin/main": "f7299defb4bfe585c92bf4004527711f",
"assets/AssetManifest.json": "4197fa9eee10fbc9d272f6a07d2cd8b3",
"assets/assets/america.png": "46f15a1dd9923a616216aa24ea3e37f7",
"assets/assets/anxious.png": "a0eb44b8923bb5628cabcbaf437eef71",
"assets/assets/awake.png": "b97b51b0925a1964e5b816b642e2316e",
"assets/assets/bed.png": "607a21dc9882075e36aad671e9baf644",
"assets/assets/concentrate.png": "e3ada7066d6e043027b5035398cfb802",
"assets/assets/cycle.png": "b1b9bfd799d710251cf66345ce62a723",
"assets/assets/default_profile.jpg": "e40d1cb5b40fa93aa99c3909ab62381d",
"assets/assets/default_profilee.jpg": "df64bffab7d6f33d48b13e6072c3c80b",
"assets/assets/distracted.png": "3c7bf58bda4a042c7dc623b2c18a60f7",
"assets/assets/dizzy.png": "8df2fa4a5c4cdddcb9601cec9b723c4c",
"assets/assets/energised.png": "397a0fc49838d193c45884ec8a18e7ba",
"assets/assets/exercise.jpg": "546a4da53febd8e4f71123ad36d6bd4a",
"assets/assets/killer.png": "49207cc4dd1518a67a6d894f2048e8ae",
"assets/assets/measure.png": "c1f2e240884e9e1b129b875e20042496",
"assets/assets/productive.png": "ed0fdf2fb1894c0692bf37c54e50bd68",
"assets/assets/relaxed.png": "5adb1e3f1dc6e8e8dc51a39771e36768",
"assets/assets/salt.png": "b2cdaef75f177cb5e222cfdd661fa4c3",
"assets/assets/sweat.png": "fb4ea8b74530eaec44e010b2a9da49bd",
"assets/assets/tired.png": "1997362f2a28a7e0f6cb7b5790de5d5a",
"assets/assets/wine.png": "e9fb80d7014134c53197940f4eefedbf",
"assets/assets/young.png": "e7d7c4b6092327b74a3a3769774955be",
"assets/FontManifest.json": "9ca479dc7c42222fbef5b4ec0afb42a8",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Montserrat-Italic.ttf": "c7ef29737ac0c81becc51ffbd2d6feed",
"assets/fonts/Montserrat.ttf": "a3fcdff002f26cdf718968593b0d9e47",
"assets/fonts/OpenSans-Italic.ttf": "8813083d80a30128eb9dd1b5a342c629",
"assets/fonts/OpenSans.ttf": "fad3454a861bdaf75e6abfc2c9de46c5",
"assets/fonts/PlayfairDisplay-Italic.ttf": "f54fcb31947f45744af46e4bb6166b0e",
"assets/fonts/PlayfairDisplay.ttf": "168ee09f171436bd22bfc276dc181ada",
"assets/NOTICES": "56fc49bed67ffef54630172f058bca0f",
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
"index.html": "32e2b6b515a4ac18c9afa451653b5a57",
"/": "32e2b6b515a4ac18c9afa451653b5a57",
"main.dart.js": "b70de6419d5a595d21d6a483e5fb104a",
"manifest.json": "5188b2ddbe80803cb0c763398a5bc8e6",
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "adbb254471b22552031730a26c4492b5",
"assets/assets/fond.gif": "c284424724c5818b13be5937d2a74099",
"assets/assets/home/athle.jpeg": "72b02fa7219669ee06308c6f9031ccd3",
"assets/assets/home/athle_2.jpeg": "5ea45e703cfb2d9666a559ed65179103",
"assets/assets/home/bad.jpeg": "b44dedfcbc3fb4383b1c306cb609aec1",
"assets/assets/home/basket_F.jpeg": "e8752fbe1a44c47d8ab7bff9604c9646",
"assets/assets/home/basket_F2.jpeg": "320f3b55cec1fce3b30717fb6c63d1cf",
"assets/assets/home/basket_F3.jpeg": "f66a2811b6d824e85ba300c1b23406b0",
"assets/assets/home/basket_M.jpeg": "96a8ee32e67d1ea4f1c0758bef204e4f",
"assets/assets/home/boxe.jpeg": "cdb71b417914fb59790e13801024546a",
"assets/assets/home/escrime.jpeg": "66fec79f06bc9f8dc13e6123cad2fb8a",
"assets/assets/home/foot_F.jpeg": "9f234925a42d298e3aa1fd442dbc349b",
"assets/assets/home/foot_F2.jpeg": "2598f4d8782ca5aa907d36f442bd488d",
"assets/assets/home/foot_M.jpeg": "a4138860729399ef1086110b8ac22919",
"assets/assets/home/foot_M3.jpeg": "ed32420e80a8cc33617aeb852bafab3f",
"assets/assets/home/hand_2.jpeg": "1658c40d7eb63a89c1155613bff89f9f",
"assets/assets/home/hand_M.jpeg": "745940b134ed753e50d46125723be52f",
"assets/assets/home/judo_2.jpeg": "da6dc68202951fd3e2575b38efff2f13",
"assets/assets/home/jugo.jpeg": "fca9726fd18bb54e16fe1df4544fc46e",
"assets/assets/home/natation.jpeg": "5573d68615f3c4d71e62ce20bb0d3faf",
"assets/assets/home/natation_2.jpeg": "0b1dc2eaddeb320d7ec262bc082291b9",
"assets/assets/home/pompins.jpeg": "e675530f3eecabe04b0670bd84038ae6",
"assets/assets/home/pompins2.jpeg": "b3da1e95a6154b6fa53eba9867465f29",
"assets/assets/home/rugby.jpeg": "20bbe972acbc0a003944fce116d0471d",
"assets/assets/home/rugby2.JPG": "f27e9e14574f7a01d66d90f0e0b918b4",
"assets/assets/home/tennis.jpeg": "614f5e1d3278f3c5ce14254403b5ba4b",
"assets/assets/home/tennis_2.jpeg": "7b6ed80d95be8694fe1616ee1e34c9a0",
"assets/assets/home/ultimate.JPG": "c0e54eac97a363c84696b0766bc683d6",
"assets/assets/home/ultimate2.JPG": "81c8c241a4e9d62796880bcf444027bc",
"assets/assets/home/ultimate3.JPG": "e4af560fb1164b9fef2b7fdf5e6187d4",
"assets/assets/home/volley.jpeg": "601afbea583733a6ad549ce38c0f3bb8",
"assets/assets/home/volley_F1.jpeg": "dec30e7012bb969258ec5cc73d8b4c79",
"assets/assets/home/volley_M2.jpeg": "386254e063d18522852b88b5fdbc2bc8",
"assets/assets/home/volley_M3.jpeg": "4ee716c71d90656fac00793cdef10790",
"assets/assets/home/volley_M4.jpeg": "6ed18c4343d575d16518160397aa0ad2",
"assets/assets/logo_AlerTA.png": "adc7dbba234c85261372863eb7abb1a7",
"assets/assets/logo_ENSTA.png": "b97d8cf9ca30959ce6fb48adca00306e",
"assets/assets/pres/adrienp.png": "7f5cb4e6dc646a14b95739ba0fae4278",
"assets/assets/pres/adrienw.png": "e2867a5a7e70ef40870e6fca2bf03299",
"assets/assets/pres/agathe.png": "343c4989858fafe4fbfe241a5172add8",
"assets/assets/pres/alix.png": "7bfbcbea3ca97bf64ae07c6f1a288c9d",
"assets/assets/pres/antoine.png": "7370f39def8010d619ba72340917866c",
"assets/assets/pres/benoit.png": "3d1d708d852c8fe46222f58e836c9f17",
"assets/assets/pres/clara.png": "5fd50cd230abd0a787e777424cdf3565",
"assets/assets/pres/damien.png": "ef27a89901852c6e4e1e9bb8904647d6",
"assets/assets/pres/dorian.png": "5dca2f32be19e46583e6341e60efe249",
"assets/assets/pres/eric.png": "0ff04782a8cbac9f3fe3a9af76a4e70b",
"assets/assets/pres/evaelle.png": "3eba666bf5e19ee5e14b2f7f16b3fac8",
"assets/assets/pres/flo.png": "a10c1c0b3de2d1cb0917646ed461c331",
"assets/assets/pres/gab.png": "c6eb6091fdcd76a4972837f52862146d",
"assets/assets/pres/joan.png": "61d180b17760c7a54fa7724172ea7fd8",
"assets/assets/pres/josh.png": "f59bf963bb17f4ee1769398c741689a9",
"assets/assets/pres/lola.png": "01b79e0e205c81d31419d99acd633729",
"assets/assets/pres/lorenzo.png": "190b6b53200b56596973cb9c437a6b5b",
"assets/assets/pres/nastia.png": "e98dd5657413283527224eb20e2abd49",
"assets/assets/Trombi_AlerTAMalibu.png": "92d670b386d96c7f602bdfb9519bc825",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "8e50cef85cea4975b7c6b5c2434a4f92",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "91c7e2b9c68b803f9cebb5bee0a4cea8",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "98926d91ab2d2d50358e956cc33b9d62",
"/": "98926d91ab2d2d50358e956cc33b9d62",
"main.dart.js": "b076d608f55f94f744b723a3e360844d",
"manifest.json": "cac34bfaffa96077d242019d88c59671",
"version.json": "396de5a4c2aa47a16a8dfcf623c12daa"
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

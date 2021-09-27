'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0db03d1a172272e5cf8dbb42f339dd07",
".git/config": "61b9d42b1f1e64640bc2fd39fc301af5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4e96bf97528f729f605bf9d7003c284e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "89634a314e48dfa63749b9fa735f31b9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f9a004ccbb006ea5655d58c1e9af105e",
".git/logs/refs/heads/master": "1b836b681a6229f7ed11d5866e147141",
".git/logs/refs/remotes/origin/master": "ab264d353d0cc2b832d775a1f023b262",
".git/objects/01/495c4e3ad0569ac584dec1ae054f533ffb838c": "89f75987b8d13b0d4b79ca4ad120c8ee",
".git/objects/02/bcd0cdb4c8b3c09a4b2e9d76b5985516f79589": "a5195779cf138a87b8319188ae4f1639",
".git/objects/06/ce3bcf486d2c9aabbbdc7a8b29d6c95fa29b1a": "f5c6e1ed3846d38826100d76d9ba9919",
".git/objects/0c/60471549719f9c9835ccebb9a819434f506d89": "49ba0cf3cf31b76338866443f932e33e",
".git/objects/0d/ed09550ec10486583824919a863ed288a6b3cb": "84a58aeedea364d635f1a18eb1167224",
".git/objects/10/dd4608bd5d677772490a0d9c4921e3e900fbf9": "ccb55a330c5edc1dfc4ac2e1ab0ae965",
".git/objects/13/142382b73f86284706ce558ba9f3a15263263d": "d4fe585e54a6724b2c464fbc7abbdd79",
".git/objects/14/d77a9c2f87c62ea2c37d158c4ef00e5347ec59": "04ece9a8dad293f1e5119178d6c50271",
".git/objects/17/9f44e634c15ca00de11a350be1fcd02d8312dc": "ce8a7bfdcba572ba1374c46edce12d26",
".git/objects/19/7a8b22f58dd20808b6f50b883d9f1255382727": "c4084243fab6709045ae7c8b09503566",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/23/0972bb57f6287f664ba819e168a4e867c6ca19": "a1a90d67a45da13f07d85d56fb78b415",
".git/objects/24/362945d388d04e57c283c49f143bc6cf85611e": "94c94e7fcd050193807707f126af13c2",
".git/objects/26/584217cea654fd869b28dac4082815d9c47afb": "3a194d393904934e0bfe581915ab9582",
".git/objects/30/edef9ee4cbdb80d0c741b5dfbcf09eefb8e0ef": "2272c692e7dcd2f11c09f4cc8ff1aa01",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/39/98e6b327887930f65e80842084e8548965ebfe": "72b6aa8a00c2add9dcb4344015f194f8",
".git/objects/3b/6034355a2f2aec7eca914db5842a600c8722d7": "bd185933d119423497f5a9c80ef9b9d2",
".git/objects/43/731b6933130ab12a75d39d1b34aede769d2a2f": "c9ef8485a1a99dec440a14a6fd8e7db1",
".git/objects/47/670573452ac115c4f0d8965016d02904c17846": "bfa5fab28a3e6a6df9051458d34349cc",
".git/objects/47/6ceb60376c0f4780f79cfb1e26aa221faf3a87": "7120a4f0a2bd37c0ac18042028aaacf4",
".git/objects/47/95541a6364c537c4dbb96f2445260d62aff500": "859f9dd4574ed1e6ab5b015c95e20894",
".git/objects/48/225f5ac2fb0ee7a14ecd10856659fe8cd0ed6a": "b47148f402c95c96f062a094730cd14f",
".git/objects/55/55e30dc552127e825a8ee67922c3b6717d13bd": "6fe32026701a1cf5808e00339e619b2c",
".git/objects/56/3397a1a9c895084e76e5858fdb97aeed522d58": "3031d21e91de23f0c381b4a39a93c77a",
".git/objects/58/9392eb7e55ac797871cf83b9eb0eca54307135": "9282daf32e89b1bfe18c47ff0c986c6f",
".git/objects/5f/a090cbaadfd80661558d22c851f253fc562347": "4ef7a07a3d926d613f7e0d33663b30f3",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/64/34f49d8c4b05b203bcb60d0c6682add03be2ff": "c50ce449833a4b40c316c6adeccd7c0b",
".git/objects/67/989ab674f5035dba6ba85f88f5a72b515fdec9": "826ccc9d936012463edd5930c6059683",
".git/objects/69/178f4df843628e8fb5880b3f9ae1dc8c93e4cc": "6e30e7739fb293edcd37154a5939a5b9",
".git/objects/69/bd64462adc533f755b7778cd75210d394509db": "75f0203676275450a57376588d8d62f8",
".git/objects/6d/f6cd7786deb38ef5e9b922b80519bf998f78ee": "a1049939c6f184df66dda5708eea2753",
".git/objects/71/4e8618c0e058b96c5a82e515d5cd4e9d3301ef": "45ab30aa3ae228b8aa8b7c2e52a12c00",
".git/objects/71/678b2b9e556962b7e34f9ad47b36640789d0b5": "cb4c5000fd75032807623d2f41495cf2",
".git/objects/73/7124564b2dc55cba19b7c2100da2863dfc14d8": "7b51358f99030468c6c5c7041a139d67",
".git/objects/76/3b5603ef312cfb52fa6da58941a3337bf951c8": "3581c7106f65f2b54b892ce67aed6eee",
".git/objects/77/49133efc1f5bcccdfa938222f0d4642d1d7cb4": "4d0079899cc3d46199c5c6a4b86cba3e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/23a7433f8c4d33ec2f92805ac33d017e89058f": "6ff60ccc433e9cdace5ddba2231b7789",
".git/objects/80/99b4cae9cfde307a8d6beffc644b042b2a4596": "d014c259c66d62571164519dcdd52e5e",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/89/3ff4019d7e2c4971d72f0a76aa2af3b495ffc3": "477bc7207d22ee43fe66afe608c7754e",
".git/objects/8a/7bbe52cfff58bd19d209b9d6bd00781fe2f5da": "7293929dc8432b2ce3a6cc0a5de5993a",
".git/objects/8b/d52d9e31f2e2af4dc29344a2653ba1e2feea3e": "3566624a0fabd29d3dd6588e35d56e96",
".git/objects/8c/02814499bd845aa9fd2108e81ba4b4cfbc6150": "3408ab807fdd189a7b3546b3cada9250",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/92/25b5958964fea9cacf4ab2517ab2dade21ba96": "401bc0ab7f891e9aef91efe29486962a",
".git/objects/92/973686573daa35696ecd5d321e4a62be9b5771": "9cbaa4a70a9c1026d1bdfb0a7c740ca0",
".git/objects/95/29ca654906583f8c093796d31dda584ad0ae34": "ec74e3f0cfd724445d48f60b15989d6e",
".git/objects/9d/3ef334218b94e43272fb2321aaf822027ce630": "5ca2f9be1fbf171272b49fe102cbef41",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/2f0677074f91f2ef6ecf4d94c8fdda3dbc5974": "4cfa2008eec5581defef1194b72db89a",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/c841e3d5ae384e109511f300fbdb23c4664384": "598c343a063fba00cd09cf7e2ad49222",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/7c0953657a828c33882cc5d1991cd8a8333128": "1d6c15865dfbd4566573ac94c3b35bb8",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/b3/e3361f30610773d8307568e6814a2a268865da": "6139733c12e62ba19dd6de964a402bbc",
".git/objects/b4/25de134998ef29c1b78d1aa1e2b92fbe5e3999": "837b1fe6c485a49a6f1bc7a9c79e2c8d",
".git/objects/b5/a8c755698b5a848ad18355ecd841144edf8177": "4785302376a874149eab51e44c48562a",
".git/objects/b6/9ef8ad14af07f3af5eafedb37380727c6cbdc0": "043efd366a3c56226e04fad33bc2179a",
".git/objects/b8/3393d10e78c6eecfb34d00ee58b9982f955d71": "5ae18bda8a0bf336ada5a4fa623049fc",
".git/objects/bc/d73f3984da6ccc22305212dd3c73f12f1d4dd5": "4cf5a95a3202daf0902e413327bf781e",
".git/objects/bc/e3f85dd58e0c61973edf490b3dd2f832158048": "51078a7ea9ecf355fb523c7c534c9c0d",
".git/objects/bf/fc768baf9ccb415cb6dea0b02db5545f823cc0": "71c13560285e474058a348e7b9e40b8b",
".git/objects/c0/d44a7cd7a69d948c8cfb3fc900a9971464892d": "ce9378939bdd551410962d1b1e4bb06d",
".git/objects/c3/588ac0734a427d040837c6bb7775a20c487a91": "1eebc78a0163c1941c2516b59b6f11d8",
".git/objects/c6/7af5835b4e5ea53bef3236201cca9e5a988825": "782da3544394ee40122bf4d827767cd6",
".git/objects/c7/41e4f449c0156bdebbf641afcb391fe142f42d": "e50951f1fbdd9ad8fa9c59ff9fb680be",
".git/objects/c8/bf7d086d4fc81161ad2711620f834945b92938": "c265f968d1083f04192e2801440ec1b8",
".git/objects/cf/b0e4cc433952556d9c5d9374115fd843a0661e": "7c9f29cf8007eeaa983c951b1652dc0a",
".git/objects/d0/7233a3c7b0a1c635857bf5b2f8ad802180bb9f": "a721991981884ca72fa51e1c9822b98e",
".git/objects/d5/b8743c573133b54e741a8d084935e5d28a385d": "a60ddd52d4b6cd2f9bb14436b313e62d",
".git/objects/d6/e09830f8de5f4f16d6df5ed3c73a0e2d60c63d": "c1857a1445b44180686e011843d59dee",
".git/objects/da/97e481893ed89bb494f841bdc13264d33bc9ea": "f819a55c5b1a520c351457c45f6e063e",
".git/objects/e2/6227caf0bafe1d5558335c1d8cba4713aca02a": "acbf6217d4a77af95da633613220aa7c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f1/1cb5c2a41c8c299cc6ccf3dae29c5e64b3dd8d": "c1211b7eea8326a687901b10bf2b2f12",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f7/2615dd456a996f6c5d19c2287d7be0edeaf274": "fadba3391835407c2d2388862826d55d",
".git/objects/f8/35e42df268b18c29a4f84e2bfaf38dd5347233": "1bd54d4fa9a443ee627a31bff0a6d58c",
".git/ORIG_HEAD": "b0b08ce7841aa66a2ee2e9b4c6347fd5",
".git/refs/heads/master": "0f836bad0e0c2ab30708ac6256acb531",
".git/refs/remotes/origin/master": "0f836bad0e0c2ab30708ac6256acb531",
"assets/AssetManifest.json": "c9d9242f71ab0c2ed5685af227840c8c",
"assets/assets/1.png": "bdb4391790b9eaa10b44eaffba85270c",
"assets/assets/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/flutter.png": "bfaeff1fc8975df93eb7d1b5cbf1e41a",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/projects/132959544-35cc0bc7-37ed-4f57-864b-7ef1918ac954.png": "a1cc6588c092800cbc14cc4ca9147136",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/covid.png": "27c600501d335324e8fce4c5d6c22b76",
"assets/assets/projects/covidB.png": "1884ac58a9de5d81e995f1e46e4b7398",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/food_delivery.jpg": "52820a771ec4b38db2e1049c7a94ea89",
"assets/assets/projects/Food_deliveryL.png": "292375e03a0a8855c1c1110d148d780a",
"assets/assets/projects/hereiam.png": "cbb5a77a5e19e1224080dcaf0e3b5407",
"assets/assets/projects/hereiamB.png": "16ee68a57fbf0eae5c50e1b8376064df",
"assets/assets/projects/medkit.png": "915431d4f438d5bc7c642fed8dbfb419",
"assets/assets/projects/medkitB.png": "058d00d54c3ee8a953442d0cf3bfb866",
"assets/assets/projects/movie.png": "8f508d432fdab0676194f7d9631f6e9b",
"assets/assets/projects/moviesL.png": "39588962eaf012e068ef84bbb7ae4ce3",
"assets/assets/projects/property.png": "a691df5b4bfc56e91405c31e18210664",
"assets/assets/projects/real_estateL.png": "5b96a639b39aa73bf95ce39c40190c79",
"assets/assets/projects/travel_blog.jpg": "2d70f15c930c24cd7167dcf1756ae526",
"assets/assets/projects/travel_blogL.png": "01a0ffa066b336528c2a37c8af229616",
"assets/assets/rtu.png": "8a88ec48cdedc49175d2d5368c672f49",
"assets/assets/services/33175-devs-app.json": "aa36353027c7748f36272f82795a335b",
"assets/assets/services/app.json": "7102e3e7b0720d55d44846b11a261d3e",
"assets/assets/services/open.json": "57a607f893b4686cf2ee671cb5621cb1",
"assets/assets/services/rapid.json": "394d854f65b98f9f241b860ebb645539",
"assets/assets/services/seo.json": "78677d4e142e1ec5e9cdebb3bc320b77",
"assets/assets/services/ui-ux.json": "2a0472904ed7c6e07ff3e51cecc063a6",
"assets/FontManifest.json": "53db916e40f5cd339f7e07ff4f1303a1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "c1bf57ea1a29535ae5cc603a8e469860",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "3079b316130e70ea5aa65946b86f5cf3",
"icons/favicon.png": "152a222f28e6e09bf23c6ccfb9cae89f",
"icons/Icon-192.png": "d003050cc11209988f3a8b7de726c58e",
"icons/Icon-512.png": "702438ac3857e0fc41c9691babf2ca82",
"icons/images-removebg-preview%20(4).png": "53528ca2aa2fd469c792f5c713cdcdb3",
"icons/images-removebg-preview.png": "604874fbe7b0a765ed5ac5b82e930ab5",
"index.html": "2f2ee0a204039b3392b85f1def44d570",
"/": "2f2ee0a204039b3392b85f1def44d570",
"main.dart.js": "350fc790c55a48f0d81ec68b1ee3ba74",
"manifest.json": "f64d8c5fdfa025edb786fa7789b0d606",
"version.json": "1cefaf2a48f42633ff4b37ffe0e9de96"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

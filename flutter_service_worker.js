'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "798e7c505253ad06a3b4cc913f67a0c8",
"flutter_bootstrap.js": "6a375f0680ddd08d9d98a67ff79e8ca7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"main.dart.js": "e17950acc0c6b63bfd408f81b9f55002",
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
"assets/assets/images/college_girl_vector.png": "029bac5ec6b832893d19021efba0def5",
"assets/assets/icons/inference.png": "6874b609bb2205ef01ca7e837c6b0b95",
"assets/assets/icons/application_color.png": "126f54fc79092611f93f5f64359b0f8e",
"assets/assets/icons/discussion_color.png": "de210fd251619519e7c0228636e4e92b",
"assets/assets/icons/university.png": "dd8198009f3e1cdb257243ed0f80bd93",
"assets/assets/icons/tourist.png": "35b9ef72b19ea7c0b7eb49f56b5c2633",
"assets/assets/icons/application.png": "1e501a6ed374e8dfcd7704313877d695",
"assets/assets/icons/interview.png": "cb49b1be8db7a334ef18a2598988c948",
"assets/assets/icons/university_color.png": "0f818c75c36a09dccb34e899211e6e39",
"assets/assets/icons/interview_color.png": "41600d86eb53481038791dc7139da68d",
"assets/assets/icons/guidance.png": "1b198e2e77fd15bb101a5238f9d0f44b",
"assets/assets/icons/visa_color.png": "b31a24a4796b913faa447279a78808d2",
"assets/assets/icons/tourist_color.png": "c4130a8f3d2f18f39cd26a6b1215fe8d",
"assets/assets/icons/guidance_color.png": "092e4fd5b0c7e89fc963188c51b7c937",
"assets/assets/icons/inference_color.png": "ec65cf5a44a7f0ac4b620ca73e2c64f1",
"assets/assets/icons/visa.png": "2f5170374a725a545b9607dd51cb5d95",
"assets/assets/icons/discussion.png": "d3e97b0ef7d032ef7e6cb3c4e7b06a52",
"assets/assets/destinations_images/france.png": "5f5dbac538611fb00c23ee29db77b0bd",
"assets/assets/destinations_images/austria.png": "7692983af628c7d857e424dbe3638d28",
"assets/assets/destinations_images/canada.png": "abf6fc0c485274829e4874f36e389949",
"assets/assets/destinations_images/dubai.png": "cc0d0a40ad202219a0fa781759baf721",
"assets/assets/destinations_images/finland.png": "b1e1bdfe92d73f93b006ea24a917820d",
"assets/assets/destinations_images/united_kingdom.png": "96b93136aa7aad110bd73193aa68589f",
"assets/assets/destinations_images/australia.png": "65ee627f820990edbc618e64858b9b96",
"assets/assets/destinations_images/america.png": "0aec9bf1e42d4734b738108211fba993",
"assets/assets/destinations_images/ireland.png": "da8b71a60ea42edbcae8e5f4baec07a9",
"assets/assets/destinations_images/lithuana.png": "e07190a7f8ba0ab23c4e438c29f536c1",
"assets/assets/destinations_images/germany.png": "a43d895ac9b61c9dad7e17109e406edc",
"assets/assets/destinations_images/sweden.png": "da2ca44225eca23618ff50f17df012cb",
"assets/assets/destinations_images/new_zealand.png": "68a255c6340f41e55739495706d58d13",
"assets/assets/destinations_images/hungary.png": "dca0820b8e5baa24fde9058b1da7ab60",
"assets/assets/destinations_images/malaysia.png": "d1194998709a3f69f4c30106fbcf973f",
"assets/AssetManifest.bin": "d2ee59f3d5c2ad887273c3fdd92fe8bf",
"assets/NOTICES": "745c8814b703c68f41a4c664958adba5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/index": "db6304ff6bd249031f538e3e481cdd14",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/17/836744e76eba60cd42da80754d118de16237ea": "a82e07bae0a5d054d3aacf2d00889edf",
".git/objects/b0/1d57234ec44ac1409d1afaf95145d904c9a47e": "7b350c51c047a19d3b09813425ea257f",
".git/objects/c9/b34802dc81bf40fed7c1a359ed20218a1cb01e": "95344ac4c9a4c1ba388acaaa4b776529",
".git/objects/c9/6d47e1b02aa54e375792e277358a07cb1ff292": "53855889713991b7b4b1322b034e949b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cf/b799542036df1be53d1d5ecdf538fd294d607f": "5ce236ff4d8ba59b859f1ebe6884ea09",
".git/objects/df/f60f34f3f1b5b9bee4bf67c49eb4c566993868": "dba96d90af405d0baa93beeeeca11195",
".git/objects/c5/b73456a006d4e390d6792c211d0134adadc5a7": "56041abbed72d117af04439e76b22616",
".git/objects/c5/d1dc8d944182dfec973d11934ead04959b9b14": "5d8f0e432bb04dc20979ef2718b6f5f8",
".git/objects/fd/62d0e7261be70cf2747f0f53a5dbd5977e8a34": "206ea349ae02842b9134eeeb53f216ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/34/15f21f667b89fa0f4d2c3082dbb64b17c59870": "3a83ec5d5fe24d823b20a2a8c9298c05",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/81/707d6be2cbddaff103ee3dea26f703eb1840d6": "943cb9cf3dc6d43c4a525f8ec26ba9ef",
".git/objects/81/3b77665f7e38e2f3c184d32f48199dbbe5e5a8": "2141d82ffa1a0692929b48820947bb41",
".git/objects/a2/e314ed0dec11fe8daa1247f4e892330ea53bb2": "d18c66a009c59364215f94c5186a18e0",
".git/objects/ce/d680e01deef019bfca0e83c30bde7b0ee65ba2": "965ef990830a4427fcef084e99cadfa5",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/c8/b3a77b47e41baddd7236818c5f9547a6e329e5": "3c0bd5f3af10fb4d8a25f4155fae99b9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/39091df7d9a60f22a7a3cb32e13b54b3b57a7f": "a8e1b06b103c0f21e267832cc0be9bab",
".git/objects/d4/c7facea80ee43a2412c545bbcf35b28ed030fa": "952e3f02804e5eda034790cbf1f564a1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/8c/66e28ff8c0a35f8e97b5612676059c76d7ab7a": "023053260379d2e8a3cc224631c79bff",
".git/objects/0e/9dfec11a6949cb0bf5c0f8a7dc755a1d27fbec": "4bd36393baa8bad4d0fd4278e3dc601d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/b5/3622673204b921ac790ea34fa3fa72d50aee41": "ff156c66e5ffb5d4b71d8dcc7275d0e2",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/bf/c72eeba995c7cc12fe43288323dd76a1322700": "914f7a859f35b7ff69a7c835ee687d52",
".git/objects/76/1a1c7718bf380f09352918bbdcd631e7d2d767": "ddc5a2f078c5f3c09b945e6ae2f1e6b3",
".git/objects/19/01c2cd3e0ddce3d2d5368b2ac5b9e3b657ad93": "aa10abc8d1474c49963214f74ddf394c",
".git/objects/93/e878cdb4d2cbfa85f81a01dcd5fbc255b5ced1": "13bd5f4bc322e0fb9ad2b14ccda4788a",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/7d/17097b26f39aef2faf62e5e08820059f09fdb2": "1f1bbd1f8b7caf365d89667ce505ef74",
".git/objects/7e/4494e88884ea738d03703225cd07effd58d8fd": "2d431abfc2a44db976c3b1245f8cb98e",
".git/objects/69/a52f69549a7342f1db5ca3616249f29df472b2": "8377d506edc7f56cf490f53881da64e2",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/6a/d8ed235844d2ba72f9ee53d840d56fcac5d1fd": "e46f7895115decea34ba7c50a3348adf",
".git/objects/98/d6aa27018586f87267514fcfbbf724f5e0d433": "9e87cf16ec5f0da4b491b2a87af489ba",
".git/objects/91/04f778f7fd6b8ac55456dc21555847710fb630": "9f42865f18e26af04201de060a52157e",
".git/objects/2f/2bb970490a97f8e013b7e3cee956dae94ac0f8": "af797ff881070dd61126695bb21a84f9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/16/1ce28d88a7cba1d85fa3772b1ad96807bef0b0": "db0a2ce96db9c1f1cae48401d4f56b67",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/55/318c59ec56e17b5f725216b4bdb7e86332b0ea": "b5df3d01b47abdbc66c08c05560348ca",
".git/objects/ad/0ad7e54158df59872e17db099918d654c06624": "82acaa3b902f939d0d580682513ea776",
".git/objects/1b/2ccc08dcf0cf01b36e4021a6fb4943ee05c037": "7516b5f5ff33990e0bbb294cf549c6ae",
".git/objects/0c/8e28eade12ac9a44f3325482e50fb050bbbef0": "d774c569489b4292bb0d59ce3c1b9dec",
".git/objects/11/16ca4738e708b2bae7bc4f1eed9463278a42cd": "1abb4f44a590cfe89e81484006d6952b",
".git/objects/11/2cca9ea27e68e69d274623d5ddec9ce19ab333": "3f06fbd3f63f7b1a984972ba82c0758b",
".git/objects/04/540a68559a7fcf2f9269dc1cfb2d3f61d750c2": "4c9165711371f8c20fbdaa9623d3d4d6",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/a8/f953e794e388d0d19b07790267cacea0ad8370": "fbd89504abe5c16b0c7e4223716a910b",
".git/objects/dd/4272823830e4241e159c31a7b273670800184c": "1edb3702abc9bd637eb6c52754f4ed75",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/b104383c9c58828807b76b71968a0411beb97a": "918238de9202a3979e96a0cb20c19892",
".git/objects/06/7019518d9fd33617bd0d3041e22af4235d6989": "aa5b03ff97faee5f602b2d1de14b6caa",
".git/objects/21/a5e43bc431da584d24f20dd74863469b6fb44f": "0fe10481d1f70415e2cbd00dd1a1789f",
".git/objects/21/0a97ab0774ddc04616ed333936ff0d8f47d0a7": "bde0e89412ddfa49d37fada00e3467df",
".git/objects/2c/a8b38898d056a00655ef6988588620b88910c8": "02e97a4b7f577f845a2cd1c5164277c9",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/73/90df4349db566b763841077cbdedfbf558ac1c": "54984a22fb61364fde8506c23a9a2561",
".git/objects/73/ad1f9b50e36329bad59390e18d8dee6a7f5c83": "322e53af9efea95247cab9782558e466",
".git/objects/f3/a010aec3b6fabcbca922ed3a98b3975216905c": "d05b60e08ee4569a602ba76e0580125b",
".git/objects/be/53633d78733c753ffbfb03225c481d17927994": "358f573a00b3a49a2af182cf97108532",
".git/objects/3b/7884b1349a913c4ec04c141b24b2167da323d6": "1d919b0a5f42cbf0dbd460d1b8bdb054",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/4c/abf6ba6deee092a5700cd311cd6a7bf3fb0130": "9ecb7372b85918f49983f20261452c1e",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/77/13b90a1a564168a072653990ec3f61027085ca": "bd2ba0efd62e0e576fbe09741f12e4ac",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/4a/018e998a648f4b7effd0d0e4fb72bce6c79b45": "f40be4c0cdae711fcd2332e8c946a091",
".git/objects/4a/3060230379183557ebcf03c22d59730792bcb7": "67ea67e614c220e3a30b1f8ef4abc31d",
".git/objects/5b/c0028793555c00553b694aed7352e3e24126cf": "4ca72123a51afd892f0919c70092c0c9",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/0b/ea0dc0b4bace13a790ec5e727e77dbf27d1ade": "f6188109a4e635aa3b8756d45af2d074",
".git/objects/ac/b0c2397155ab995c1990e15778ed7603aff5c4": "df6e64d9034bea5fdd02c34438f3f20e",
".git/config": "a79dad8e8c58a43102836c5dc4c8b651",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "11f28524e76f47fb69d1fb5e67eac642",
".git/logs/refs/heads/main": "c38c747df9f0cad6100c148dc0b69b28",
".git/logs/refs/remotes/origin/main": "c1fd18da55a47a0713ff3023b693dc9f",
".git/refs/heads/main": "6a1ca09a8490c256a50858c29bb855c9",
".git/refs/remotes/origin/main": "6a1ca09a8490c256a50858c29bb855c9",
".git/COMMIT_EDITMSG": "e0c530b2a49bafd6e4405240fb4a7fb9",
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

'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "4e43b285fae4302dbe7119419fe8d292",
"/.git/config": "32c1d1b7bb14937303ef2f3b226d7e78",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/FETCH_HEAD": "2f4438de905283bd5c40bfa1ad66635c",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/index": "3873caeb2a395ea0178c0170c9d519f2",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "0dbb2faf6729ad97bd3baaaa553cca00",
"/.git/logs/refs/heads/master": "0dbb2faf6729ad97bd3baaaa553cca00",
"/.git/logs/refs/remotes/origin/master": "6f03e91867d29afff5eec70b19671ca0",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/09/ceb1faad6ce9eab159aa6345d61ab4a5d2ba00": "b8e465bd9ca02f0afc605fa28211a471",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/10/f12e50fb90b073a5fa2e3b4e218153f1b1623d": "beb10dc4bd385df80ba4cb3069780ebe",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/20/fcdbecb1951ccef0d03d9edc23c723edef40d8": "ec48234ba2fd6e13c6add4c3dfdc774a",
"/.git/objects/2d/8fd729d4166368b624c9ad833177920b5373d6": "d42b1e567db1bc0614b8674baac2619b",
"/.git/objects/45/39b7a4c447128c14bf912673c4fb0a615ba013": "144aee7de0c1f13f0c7c28bd09d9bea0",
"/.git/objects/47/4b1cad7bbff8ca5906b939436c51f0c4a2a630": "6c82ccc54829d98f409cc5f2253c81bd",
"/.git/objects/4a/6ebcb5df12cbc98c8e0742b6c6c9281c047671": "701b47f71f5623de05971104b3611098",
"/.git/objects/4b/a468f1bc83bc4d72cc048e13a220965a0f472b": "541fab0d116519299a6db25cba71e95c",
"/.git/objects/5e/c0d92e283bd8cabf7b3343abf81f585ba470d4": "fb8c1f434719ddd963027ad90030ada7",
"/.git/objects/62/26ad897f6d430a9fe5078ffd571c4211d47c50": "d400c0e827548c1cd614900f91810982",
"/.git/objects/68/b13241eeabf07f20efbf6d33a0c67d16defbfb": "588e2725d5c0e515bcd392d5ef1098d4",
"/.git/objects/69/841d8a966e3f410df857d4cd2bce39b57c0892": "8ff011dee90d83321a655bc534bbcbc4",
"/.git/objects/6b/74a041baf4e069450439d7b027db78d922fb53": "2b9527a2b4c115207c0ce8b76ca5f63d",
"/.git/objects/6c/cd87bce4bb5c2d4b499ab2b332546e6766d0d9": "56edde4fdf96331cd65e1f440abaa779",
"/.git/objects/73/ac99e0b721a3b12c747c8710c3e527233d86bd": "794663a0adcccb31fbbf197555be4cbe",
"/.git/objects/77/6583ba1bab14456e76a21a80a7f3ccaccda2c0": "5088ceb49ce68c44f9e49e4cec086e28",
"/.git/objects/77/f6ef1fcd6c797b660dff6ad7db1b8919b6253f": "5ec570e8b4d597c0dd200a867b6e9397",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/8b/bce312c0be82ed617f0a72ede802f38a1f9a1e": "7fb10cff4eb36fe8d1df7519cdae1d96",
"/.git/objects/8f/8b6b7062eaa5990fed5b3b7b057bceb2f76c2d": "947bb361a65b44e86193719855cd77e0",
"/.git/objects/92/8d8395149cfe3b27a8f4082b07762478ec4255": "a10f1dae93616b5f52045047cab6d5fb",
"/.git/objects/93/7b675565f379735245a83c1721635689cebbbe": "78f16348e0717b73f59e7d3aa0b4dd64",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/96/30f0ade1b92b941a9ab7c69f78c30796bec600": "b223bde832b605785c1fcba4f171bb2c",
"/.git/objects/97/6fe88d5b1202f9d61f70de5c2b553d40a68be9": "f86d83f4a1ae83edec0d4dd95b274e52",
"/.git/objects/a0/903e2545fc0803647ec1865c75015504cf2d4c": "89ac422a1ae6fe3871b4ff6bc282e913",
"/.git/objects/a4/a92863ad8babd7953bd9aeefe2b55642bf0d1b": "5159397e5a3988c90830c9cef328d571",
"/.git/objects/a8/0e2433d0ce581971b83762672c9f500915c0de": "f1954299b43581751bbaafeec63aa12a",
"/.git/objects/aa/d63f8eebc3b832b4bb39b8e27c0098b646e347": "3186ff157b6ae67837ca1eec0dc83002",
"/.git/objects/b1/150adbed7a8d50072fc0360d6ef6fe31ea5a33": "a06375c9b4a07d1915e625dcf3958379",
"/.git/objects/b7/4f0406d882b9851f9db24ce15f301afa05359c": "479a4bcee9b24057f132400e752c624b",
"/.git/objects/c3/a56b09786957d0ab447720289a861fce6dc5e4": "bd2530939c6789319504be1f978c10d3",
"/.git/objects/c5/8dfe217d3a3b9142fbd987b4020d398030a9b6": "373045fb1b89c897e3a914c835a3f648",
"/.git/objects/cc/80e74d631896d8a6bb399d962258321588204f": "5dcdf32b9ec803738dfb7149ed39c619",
"/.git/objects/ce/ca5af70660e89073272409335bdc8aed0cde2c": "4135e2234b72d5781b0b0af46261c570",
"/.git/objects/cf/51ecff825adfcf6608721ea5dc608213ebe81a": "7f6ae4239c1ba07e10a46039d70d02fb",
"/.git/objects/d1/608e2a8bee76038b41a8d6527433755e722935": "c55b1e2b7e23afc8d1a5826d6ec8e3fa",
"/.git/objects/d5/4400f7348d89fccb73dfd1c2e74684f6c107b0": "932c762a8ccd043efc9dae616084dc84",
"/.git/objects/d5/4baea5078d560aef6ba6fad6f9374abaf93c42": "79a34f384f6b10cfdf330b218a5da50f",
"/.git/objects/d5/8a1084aac12b0f40742d0eda5d8eed2a2098c2": "8eb077eac3897353e7ac18960cb755a4",
"/.git/objects/db/3eacd82f015f248bb7af9460c6cb093c1e61c4": "6aed12d4b11d250dbdabdb28c3399e73",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/e1/d4b6f5c60e383c369f45971009ee6e75012f53": "08a619ba2ad293383b988be2b8716ebf",
"/.git/objects/e2/4333a63ddb1d9f14316df9a56cb64571ec0e0a": "c7a6f497ffdcc446c6a80eb8752e8390",
"/.git/objects/e3/a55ecc4d19d89d787f0ceed3e81512d65a3a32": "4ea2c8f0f6abcf56e41be213ef2debb8",
"/.git/objects/e5/7a633c458ec3b1a3e9c5b336a02d1928fffc84": "f9ab29de298b0f1787e3aadbc93cc907",
"/.git/objects/ea/368872a942cea8ca804c2d5f94eabe3ffc6df9": "dc58de3c8d411b65e6ef664b7b545ff6",
"/.git/objects/f2/d7e7954385acb6d07395fd531f420d0064a166": "d7752ad8148e643311dbf78ec40c9232",
"/.git/objects/f3/8472d4d03487d5c0dd50254dae507eeed4be4e": "87b439291afec5b58b148d27fe57394f",
"/.git/objects/f8/5f17e4d0312afa8351fa48445254e418d1634c": "8284d3664d0bad627e9da308b2da00a3",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/ORIG_HEAD": "6cfa7f4d77039ffb10241dd38e678dd3",
"/.git/refs/heads/master": "6cfa7f4d77039ffb10241dd38e678dd3",
"/.git/refs/remotes/origin/master": "6cfa7f4d77039ffb10241dd38e678dd3",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "3b15172930905dd3f17acd7393e9b667",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/CNAME": "b2e6173c3312b6541cef7071fcf3d6aa",
"/favicon.ico": "62e4500942e84e65b2983b78b024d328",
"/icons/Icon-192.png": "96415dbe0f10a6b8133d29f284bdd220",
"/icons/Icon-512.png": "6a313edc2db057d7854402e4d248af73",
"/index.html": "07a5f9a6b576473e2865fcbf3b1b7334",
"/main.dart.js": "1e24d02e5d3cdbe41bc567befa699ea3",
"/manifest.json": "c371dd644531759830a036a709726f7f",
"/README.MD": "c2ab0d5a2cea5acdf31fd9f746b78b9d"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

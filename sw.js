var CACHE="rebar-calc-v1";
self.addEventListener("install",function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){
    return c.addAll(["/","/index.html","/icon-192.png","/icon-512.png"]);
  }));
});
self.addEventListener("fetch",function(e){
  e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request);}));
});

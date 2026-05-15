var CACHE="rebar-calc-v1";
self.addEventListener("install",function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      // 简化：只缓存首页，不过度依赖外部资源
      return c.add('/').catch(function(err){
        console.warn('Cache install partial failure (OK):',err);
      });
    })
  );
});
self.addEventListener("fetch",function(e){
  e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request);}));
});

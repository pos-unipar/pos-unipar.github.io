!function(e){var t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s(s.s=5)}([function(e,t,s){"use strict";try{self["workbox:precaching:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:core:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:routing:6.1.5"]&&_()}catch(e){}},function(e,t,s){"use strict";try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}},function(e,t){function s(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}s.keys=function(){return[]},s.resolve=s,e.exports=s,s.id=4},function(e,t,s){"use strict";s.r(t);s(1);const a=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class n extends Error{constructor(e,t){super(a(e,t)),this.name=e,this.details=t}}const r={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},i=e=>[r.prefix,e,r.suffix].filter((e=>e&&e.length>0)).join("-"),c=e=>e||i(r.precache),o=e=>e||i(r.runtime);function l(e,t){const s=t();return e.waitUntil(s),s}s(0);function h(e){if(!e)throw new n("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}class u{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class f{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let d;async function p(e,t){let s=null;if(e.url){s=new URL(e.url).origin}if(s!==self.location.origin)throw new n("cross-origin-copy-response",{origin:s});const a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=t?t(r):r,c=function(){if(void 0===d){const e=new Response("");if("body"in e)try{new Response(e.body),d=!0}catch(e){d=!1}d=!1}return d}()?a.body:await a.blob();return new Response(c,i)}function y(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const w=new Set;s(3);function _(e){return"string"==typeof e?new Request(e):e}class v{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=_(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){throw new n("plugin-error-request-will-fetch",{thrownError:e})}const r=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:r,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=_(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i={...n,cacheName:a};s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=_(e);var a;await(a=0,new Promise((e=>setTimeout(e,a))));const r=await this.getCacheKey(s,"write");if(!t)throw new n("cache-put-with-no-response",{url:(i=r.url,new URL(String(i),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var i;const c=await this._ensureResponseSafeToCache(t);if(!c)return!1;const{cacheName:o,matchOptions:l}=this._strategy,h=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=y(t.url,s);if(t.url===n)return e.match(t,a);const r={...a,ignoreSearch:!0},i=await e.keys(t,r);for(const t of i)if(n===y(t.url,s))return e.match(t,a)}(h,r.clone(),["__WB_REVISION__"],l):null;try{await h.put(r,u?c.clone():c)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=_(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n={...a,state:s};return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class m extends class{constructor(e={}){this.cacheName=o(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new v(this,{event:t,request:s,params:a}),r=this._getResponse(n,s,t);return[r,this._awaitComplete(r,n,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new n("no-response",{url:t.url})}catch(n){for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:n,event:s,request:t}),a)break;if(!a)throw n}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){r=e}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}{constructor(e={}){e.cacheName=c(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;if(!this._fallbackToNetwork)throw new n("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s=await t.fetch(e),s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new n("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==m.copyRedirectedCacheableResponsesPlugin&&(a===m.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await p(e):e};class b{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:c(e),plugins:[...t,new f({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=h(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new n("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return l(e,(async()=>{const t=new u;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return l(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new n("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params={cacheKey:t,...s.params},this.strategy.handle(s))}}s(2);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"3b924ece60843b81908f6379f20a8daf","url":"404.html"},{"revision":"ec5d4512ec1299eb7a9f2fd939e2d867","url":"assets/css/styles.e516aa4d.css"},{"revision":"3eb818454b2c0da05c8ca0e43d00476c","url":"assets/js/01a85c17.33057c6f.js"},{"revision":"64b97a48090c278d656477c6c7598631","url":"assets/js/03a1f9ec.e1ffd5f8.js"},{"revision":"08cc9e35390da446a256ab08745b3a62","url":"assets/js/05c13303.2cf9abb9.js"},{"revision":"340aecfc1be921d618a3227e94a47f25","url":"assets/js/0b387740.2b519076.js"},{"revision":"6c6daaa998bc7d1ca8cc2c728995d079","url":"assets/js/0f1f64f1.0cef55ce.js"},{"revision":"2115b876956af6ac492829ca563e24fc","url":"assets/js/1.1e41b69b.js"},{"revision":"44f9b2e96ed7e45432fa93a3e69ba9e2","url":"assets/js/1be78505.854b389c.js"},{"revision":"1b60188839829b84f4c0c34a10f96684","url":"assets/js/1c1974bc.6bc26cdb.js"},{"revision":"77b79c178245a46ffe8d4dd7485f71b0","url":"assets/js/1cb27cc7.47ca8cb2.js"},{"revision":"eca6fc2ab3ba4c81d0318288ce9a277a","url":"assets/js/1f391b9e.6ffeae69.js"},{"revision":"ab8a8571122f4cb621c43344124a8d91","url":"assets/js/2.e3559c37.js"},{"revision":"7dbe482033c09ffc99a88e1ccaf7e4ec","url":"assets/js/21579477.7f31c59a.js"},{"revision":"94a52e123092f2c56963e863cbd50aad","url":"assets/js/21957f92.dd1e3f2f.js"},{"revision":"813d2e14ee5d08b2efdf4bed8a66a8fe","url":"assets/js/2c00a981.ada44935.js"},{"revision":"4bc33bdeefe30f3d2a6a29541fafca4b","url":"assets/js/2ceb18ba.8b3b098f.js"},{"revision":"3affd4bbe00d9e3c295eb3abe03f59f3","url":"assets/js/313a9635.7f9d4c55.js"},{"revision":"f28fba97760a6eda9bed28a540038606","url":"assets/js/34f35117.304ba2f2.js"},{"revision":"80e3302767c501d7fe3dd7d67f4fe4b5","url":"assets/js/372bc7d4.1307e792.js"},{"revision":"7a91ec2e9f52f27b2f25b620df3638ef","url":"assets/js/393be207.9c5a2be1.js"},{"revision":"ec8af7ec294db650328db582bbca5804","url":"assets/js/3c61d34a.855ce4fb.js"},{"revision":"413b679ec50319a57559aca48a83eeff","url":"assets/js/3e38eae7.f707df83.js"},{"revision":"8c38ff3411bca1ae55ea3e7a8deb753c","url":"assets/js/4059a294.7449c97f.js"},{"revision":"4747c922f15ebb98450c53f00804de3a","url":"assets/js/41047951.a760aec9.js"},{"revision":"d01d1fbdbb191a36c8c6002be4de7c39","url":"assets/js/4970546e.99d5bcff.js"},{"revision":"0e75bb787b5697550dcb11ea1a6573c2","url":"assets/js/4ae44e2f.99d54e3f.js"},{"revision":"81958f53a4bf922e824f77f62c039b6d","url":"assets/js/557d061a.2cff361c.js"},{"revision":"ece6029ce8cd4c93a63489d55f6f185e","url":"assets/js/58c360fd.5a31478a.js"},{"revision":"55dfa541f8aaf432eb216966bf8be01c","url":"assets/js/59.d52d165e.js"},{"revision":"1d78d46cfe59b3cdec63293464c1b90f","url":"assets/js/60.d7f34c52.js"},{"revision":"bfd94640e3b852d6315697e6f6643142","url":"assets/js/61.a880fff5.js"},{"revision":"5390a9122b071fa8e5476a089f6b0b03","url":"assets/js/62.19a9563a.js"},{"revision":"63948f5d86b674fa78d94155697c786a","url":"assets/js/63.740e6a34.js"},{"revision":"ce093b302a0fe10ee7b3893902cac168","url":"assets/js/631037e5.93fc43bb.js"},{"revision":"96d9ebfca355ac3702ee77c965e592a3","url":"assets/js/672e9862.5f4807cf.js"},{"revision":"c5874e9a6347fa7f2535a3a4478a5199","url":"assets/js/6875c492.f06a55dc.js"},{"revision":"f6be58b16f592b4cb0214b2310601941","url":"assets/js/6a6126ea.8469a3a3.js"},{"revision":"428f04a0d19cfe4d65441f81b9e19e6d","url":"assets/js/7035c7d2.88ea63a3.js"},{"revision":"28a18235560b6470937d3fc7a1a72bb5","url":"assets/js/7b3c1a22.4c63adfd.js"},{"revision":"38c452391dfd96eefca7656e6a89908c","url":"assets/js/857c089d.81f64012.js"},{"revision":"337467819896ea031cfbbf505266771a","url":"assets/js/87d1bbdf.7d296583.js"},{"revision":"90010d39368d21c0042ad3b44c0bf50e","url":"assets/js/956f478e.f7abd250.js"},{"revision":"6ae7d2428a8a77089eddf615bc42390d","url":"assets/js/98113184.1d4350f9.js"},{"revision":"7affabdc7f7b98c078cbd8070480c576","url":"assets/js/9a6c7dad.76de1952.js"},{"revision":"a248c639f498d4e2f8a02c0a5c2649de","url":"assets/js/9c15dc75.cce99831.js"},{"revision":"bbbd01fa9fa64c1452d41fe3400b77a1","url":"assets/js/9dfd648c.6b3d03eb.js"},{"revision":"167c44260372a7dce2e108bbf7769270","url":"assets/js/a02aa5fe.63f9b6c0.js"},{"revision":"5237440b175c2a86f813d794b1c44e67","url":"assets/js/a6aa9e1f.2d7fe4d9.js"},{"revision":"0306cbbab7e06ea958b76c761cba478b","url":"assets/js/a7023ddc.37b6e0b1.js"},{"revision":"1d0abcdb4f715bed13c434f044e71cb8","url":"assets/js/a7af4cc8.10622a66.js"},{"revision":"e193873efb489e436777f1fdc1301b0f","url":"assets/js/b1576589.78dc213f.js"},{"revision":"7a02109ca7761a3532c287197c94e3f9","url":"assets/js/b2b675dd.69d912f0.js"},{"revision":"5a1fe6ab6fc8ffa5ab71ce2d9e472326","url":"assets/js/c4f5d8e4.4d4d3806.js"},{"revision":"43d971a3ba0c536eeeb364cbb147be58","url":"assets/js/c73310d1.80366931.js"},{"revision":"4a4f63e54af8a9a0b12ce5f9401d2662","url":"assets/js/ccc49370.0494f83a.js"},{"revision":"ef2c37619e0429cb148c347ebc2f7536","url":"assets/js/ce974d64.96cbb4d7.js"},{"revision":"fc862e62c45631f72eee363dc904a522","url":"assets/js/d1c21ad3.ce6da80b.js"},{"revision":"6c32b7e44e2ae3eaef315b75be9185d0","url":"assets/js/ed7f1ff1.62ef320b.js"},{"revision":"35be122e53e61871a072e2624632eee1","url":"assets/js/f4ab10be.323440fd.js"},{"revision":"e9059f956c2f7bd96fc21c5c9f11f4b6","url":"assets/js/f6b148ae.592bb1ec.js"},{"revision":"3f363d9df2aee5935cdc740a50971708","url":"assets/js/f6fb477e.c3eb1af0.js"},{"revision":"63334b3b7c74d3546dbad06cd6fc16f2","url":"assets/js/f855e442.252d4ae3.js"},{"revision":"9b40a79e6cdb88d439c9f616b4302739","url":"assets/js/main.253c209a.js"},{"revision":"485bb03ee80391d40faeec771aceeea4","url":"assets/js/runtime~main.df10cf38.js"},{"revision":"1fd2dea85072bf7f3d0654f3ed04604a","url":"assets/js/styles.be9d36fc.js"},{"revision":"9839c3b0983720647909dcdb9f34368a","url":"blog/1/index.html"},{"revision":"406bcaeded8319924da0a78dbabb9812","url":"blog/2/index.html"},{"revision":"fe9b1eeb3d952f2811ff3179c419ec57","url":"blog/3/index.html"},{"revision":"c30ef7fb932938b3be02c7d5ca600743","url":"blog/4/index.html"},{"revision":"dbbb2edbe7de15aec935970e128d8244","url":"blog/index.html"},{"revision":"78c60b3c6b93afda369bac27bfb02c17","url":"blog/tags/03-2021/index.html"},{"revision":"419dcdd4799c398e1d6d5c071e69a42e","url":"blog/tags/04-2021/index.html"},{"revision":"7f0859a0958316e152fa7c070e98d4bb","url":"blog/tags/10-04-2021/index.html"},{"revision":"e55126f4d753131da8576ceff383674a","url":"blog/tags/13-03-2021/index.html"},{"revision":"f2084daeaa99efd5c37cdd3deea715a7","url":"blog/tags/2021/index.html"},{"revision":"0f375fc528ce174157fbafcf2e2c6828","url":"blog/tags/24-04-2021/index.html"},{"revision":"128b0e7240163fe815c9fd25096b9dc9","url":"blog/tags/27-03-2021/index.html"},{"revision":"a393ae02aa4acacd5ea9e9a40ec93b09","url":"blog/tags/blog/index.html"},{"revision":"9f0b6a67d44d48bbc71c26ec17adcfc8","url":"blog/tags/css/index.html"},{"revision":"3e69acdd5bce02faacacb270b900a90d","url":"blog/tags/geferson/index.html"},{"revision":"19c3f2bd4fe30766ca06f6b854ddf730","url":"blog/tags/html/index.html"},{"revision":"ab53313d5f83a786b2e4fc0a0fc8aa2f","url":"blog/tags/index.html"},{"revision":"e4375d06b4667c6f609ff80b8aacb15b","url":"blog/tags/jemerson/index.html"},{"revision":"581614fb9e1acb405e3404623ef6e888","url":"blog/tags/js/index.html"},{"revision":"f9607bbf688539c4bab8e7b6fc4de19b","url":"blog/tags/unipar/index.html"},{"revision":"64d867920ea536313914ebda76bd3e42","url":"docs/html-css-js/index.html"},{"revision":"57df18cc2133544f70a8b73606e0bfbf","url":"docs/index.html"},{"revision":"1329321dabeab88056a3f8aa54967254","url":"exemplos/create-a-blog-post/index.html"},{"revision":"725ad122b93192780c5737b2f62d1e71","url":"exemplos/create-a-document/index.html"},{"revision":"84485537c99df88cf8eb7c42051c6de2","url":"exemplos/create-a-page/index.html"},{"revision":"1c03ee6e3868d7c4af0291f657331334","url":"exemplos/index.html"},{"revision":"8ce7420eb4b269b860694609bdcf6806","url":"exemplos/markdown-features-admonitions/index.html"},{"revision":"61559fdab89c6ea79d5980f038c23dfc","url":"exemplos/markdown-features/index.html"},{"revision":"c6646486dd2c06f2cd061718b9416141","url":"exemplos/thank-you/index.html"},{"revision":"4237a3f0765d542b2765b3ac9d9cd68f","url":"index.html"},{"revision":"d2240c7fb22f71285278a56c521550fc","url":"info/creditos/index.html"},{"revision":"d60e32216e255216fa8a48aa70ad6004","url":"info/ferramentas-online/index.html"},{"revision":"e890c647579b572e2c65f46d02832b59","url":"info/index.html"},{"revision":"3f4b4d5dddacdfd3e6a9c02c95a2a7c0","url":"info/programas/git/index.html"},{"revision":"60370b9752e878acd85afe819b630297","url":"info/programas/visual-studio-code/index.html"},{"revision":"ec8154205401e8bbd20b86501e23c7f7","url":"manifest.json"},{"revision":"fbad948aca8b412f554b74cac76b4060","url":"markdown-page/index.html"},{"revision":"b0c50aff053d2ce053a3fc0156044893","url":"professores/geferson/index.html"},{"revision":"12d5f3e453cf98d7ff060db56b7ec389","url":"professores/index.html"},{"revision":"da527298bfac546a4d830fc1c840efca","url":"professores/jemerson/index.html"},{"revision":"47d1934420646afede7262ae781ae806","url":"android-chrome-144x144.png"},{"revision":"8fa5df14ffe86ed6da751cdb38cf8784","url":"android-chrome-192x192.png"},{"revision":"2aeb9725b8a162f82e8d60a228b570e8","url":"android-chrome-256x256.png"},{"revision":"5ba05d5fddb50beddc16ccb64ae5702c","url":"android-chrome-36x36.png"},{"revision":"381e39fae8652cc165e97954d13267ed","url":"android-chrome-384x384.png"},{"revision":"e204d448f3c9b03480c4faa2df3862c8","url":"android-chrome-48x48.png"},{"revision":"44677461122aef1aa362bda353f58e98","url":"android-chrome-512x512.png"},{"revision":"1aeac9964dec727cb8c5118651b2d92c","url":"android-chrome-72x72.png"},{"revision":"e078f56c8e006a78a036022d330b8e7e","url":"android-chrome-96x96.png"},{"revision":"6df4a48d438414961a948a2680d470ea","url":"apple-touch-icon-114x114-precomposed.png"},{"revision":"7d6c4c00149be67cfc6a1efa901818f1","url":"apple-touch-icon-114x114.png"},{"revision":"613b8fa11782067f6a1c5e92812d5bd5","url":"apple-touch-icon-120x120-precomposed.png"},{"revision":"886652b2f97481234037b65eefbc6f15","url":"apple-touch-icon-120x120.png"},{"revision":"c244cf3d0678bb3002837e1f31e44581","url":"apple-touch-icon-144x144-precomposed.png"},{"revision":"72cd7de7b9a1c493aeb959fc90dc2071","url":"apple-touch-icon-144x144.png"},{"revision":"5d91b79fbc60592bb8397ef5aea5df55","url":"apple-touch-icon-152x152-precomposed.png"},{"revision":"7504ca717e4db91c8a0e946e0595a2ee","url":"apple-touch-icon-152x152.png"},{"revision":"bf67253443206b17cd1ae02ce1669b8e","url":"apple-touch-icon-180x180-precomposed.png"},{"revision":"dade6939d7a6733ca1433db06d56ac67","url":"apple-touch-icon-180x180.png"},{"revision":"8c6ae3094464800c11805d5ba65df2ce","url":"apple-touch-icon-57x57-precomposed.png"},{"revision":"30392c2302461ac01cfd1188829c5760","url":"apple-touch-icon-57x57.png"},{"revision":"4fa284af7d5ad7dcfd5087c646e9e3df","url":"apple-touch-icon-60x60-precomposed.png"},{"revision":"6c0c267ebe05fb6ceeebda3c77097e41","url":"apple-touch-icon-60x60.png"},{"revision":"2d8a907db64fa95b3e5d439067873979","url":"apple-touch-icon-72x72-precomposed.png"},{"revision":"699d0c6f7477dfe806eeffffec7e6014","url":"apple-touch-icon-72x72.png"},{"revision":"14aa4ab4a121a93e9d67adc30e6b3717","url":"apple-touch-icon-76x76-precomposed.png"},{"revision":"9e31160a3556f858564e93fca3d5e3e2","url":"apple-touch-icon-76x76.png"},{"revision":"08cea05f7ff3a3f9b2a4a3797d75e08b","url":"apple-touch-icon-precomposed.png"},{"revision":"3e752c0dd37bb5636365c46ff3527c73","url":"apple-touch-icon.png"},{"revision":"4eaceafb7a3b9cec6c8e00ef1f6f65d1","url":"assets/images/aula-6c959df9e5962f50c6ab1907a9397b44.jpeg"},{"revision":"4eaceafb7a3b9cec6c8e00ef1f6f65d1","url":"docs/aula-1/aula.jpeg"},{"revision":"6b6f3615a4c1c6f7e57ed372b3daf183","url":"favicon-16x16.png"},{"revision":"2b5f4a215943e4024f39c05dc66af387","url":"favicon-32x32.png"},{"revision":"4abf98d262f3f48d9df79e13be6547f0","url":"img/document.svg"},{"revision":"0b0bb8084dd32e1313fcde7f10a1ed2e","url":"img/documentSmall.svg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"ae56930a28eaaabf63c2537a231cff4f","url":"img/favicon.ico"},{"revision":"d17190b209a9947e8460dcae1f32f0b7","url":"img/logo.svg"},{"revision":"f79694a67507390a907ec3f6db340b18","url":"img/logo512.png"},{"revision":"e35cbf702abaa79e39b110eb185cb14b","url":"img/mochila.svg"},{"revision":"5bbc0200a0b86ceb4d387f81e1deac65","url":"img/mochilaSmall.svg"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"},{"revision":"bb87f7e4d8194a69496c20e6284865bd","url":"mstile-144x144.png"},{"revision":"2cd71c38f001a8988e52566384d9f851","url":"mstile-150x150.png"},{"revision":"4a40fcf4c2469d40fd79532e9f27e0b8","url":"mstile-310x150.png"},{"revision":"07dcb5f1c140b664ae312e8a40c9d830","url":"mstile-310x310.png"},{"revision":"f157a795e3afc202caac60e0f573fa02","url":"mstile-70x70.png"},{"revision":"430410e91c906200a24b8713db4d1ff6","url":"safari-pinned-tab.svg"}],s=new b({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let r=0;r<n.length;r+=1){const i=n[r],c=s.getCacheKeyForURL(i);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()}]);
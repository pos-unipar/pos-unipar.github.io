(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.2.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.2.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.2.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.2.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let s=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))s=y(await e({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[t]=s}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return a=await s.fetch(e),a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"a6c63379c200f2211910930ca1a73509","url":"404.html"},{"revision":"64096fbdf3edcbf1d30a602a600eee77","url":"assets/css/styles.ec57f71e.css"},{"revision":"6587bd08eaa3798b0150235ead561611","url":"assets/js/01a85c17.015fc569.js"},{"revision":"4e9995a57292d92deaa0a7757762819a","url":"assets/js/03a1f9ec.b55c92f3.js"},{"revision":"3d5daef873c6c03a74df12ca620ea1e6","url":"assets/js/05a28ebe.11eb33c1.js"},{"revision":"ad431187ceef75663eb42a06e7c7aacf","url":"assets/js/05c13303.72a184c6.js"},{"revision":"99f338370a5f89e6677f221e2b643e59","url":"assets/js/090dc678.9aab4dfa.js"},{"revision":"76fca53d03ffe7e609732d07d45756fd","url":"assets/js/0b387740.e6a9b4cd.js"},{"revision":"7b0f902182453384264f90add2af8726","url":"assets/js/0f1bf2d4.a22f1bad.js"},{"revision":"ef55f9b79112348033a21e9943a44263","url":"assets/js/0f1f64f1.7991be17.js"},{"revision":"b5f9094f4a89016a778590b78398f011","url":"assets/js/111d182a.279420db.js"},{"revision":"4c85cd53f492eeda118ff772eb467dc3","url":"assets/js/17896441.76953ffe.js"},{"revision":"8de93b5e5a9f032c926aaa2fb33dced6","url":"assets/js/1a4e3797.b8146662.js"},{"revision":"95f05c826374a003b2d8f69a26c1632c","url":"assets/js/1be78505.a28b0645.js"},{"revision":"3641fd61a902c07a9be9cf0ea287566e","url":"assets/js/1c1974bc.71016dcc.js"},{"revision":"0859f83313b8b51b6255de506f8a78ae","url":"assets/js/1cb27cc7.77e64226.js"},{"revision":"086f9b685cad2a5842d0ec6a5919831d","url":"assets/js/1f391b9e.be826ebb.js"},{"revision":"5f71bf7528e3f33ddbae0e75b64228df","url":"assets/js/21579477.8f2e10fa.js"},{"revision":"e4e3a516dbab2e8256fc01d2840b68a1","url":"assets/js/21957f92.9a4feb25.js"},{"revision":"ede1f9bea1bd32f2431113d11357c0dd","url":"assets/js/21c9fd5d.ad3e2fb6.js"},{"revision":"a3aa276a33dd286ac9c193b53dcc6131","url":"assets/js/291f7eca.78c27f2e.js"},{"revision":"09555b16123021e8bb435bce2746a5d7","url":"assets/js/2c00a981.0651d774.js"},{"revision":"3608ee005b5a3d3ab856caa0ac9c1410","url":"assets/js/2ceb18ba.e280a300.js"},{"revision":"b2a9cfd9969e887c6d51a6556805c3d4","url":"assets/js/313a9635.11f954f4.js"},{"revision":"4482a65392f10e18bb16a64204be4dee","url":"assets/js/34f35117.4497ba4a.js"},{"revision":"9f48368df20a08f6e0f8ee23930068e2","url":"assets/js/3886e87e.70d46b84.js"},{"revision":"cb9169f580e8c8ac9fb26013f1920401","url":"assets/js/393be207.b7c1f25d.js"},{"revision":"07054ea19ff556d54f745b62186dba0f","url":"assets/js/3c61d34a.41b99df2.js"},{"revision":"abfd2592c6cf7361481fe1dd9dfeb0b1","url":"assets/js/3e38eae7.2fb83847.js"},{"revision":"e5fa2355d73bce4038e3368c475bfa7a","url":"assets/js/4059a294.a1f923fb.js"},{"revision":"0befe7463485ba3f525769ca3fa02eeb","url":"assets/js/41047951.4c30e3f7.js"},{"revision":"bde13c2775b3d2c40bb04d5cef14b0d9","url":"assets/js/4970546e.5cd0c41f.js"},{"revision":"9d314293fe63ef4492b2f1e330c1c01d","url":"assets/js/4ae44e2f.e5e54e2b.js"},{"revision":"33dad26685db868d3bccb985f0daab9a","url":"assets/js/50d894d4.765f02bb.js"},{"revision":"e73316c05be28c91b3cfa5a25703f634","url":"assets/js/5131.2635758a.js"},{"revision":"1feb329da22570ed85da1eb106109726","url":"assets/js/53c9bdce.89a4c666.js"},{"revision":"48896952f09ecdac8e41860c212b45a3","url":"assets/js/5525.42067efe.js"},{"revision":"0d62268b8f92fb04bb8f5438c5ab73b2","url":"assets/js/557d061a.e3c9e0b9.js"},{"revision":"ab8f75a9ac1453f911fe25bbe935e2a9","url":"assets/js/58c360fd.bc666c6a.js"},{"revision":"7a98e489f08cc03e1dbc6c947756af82","url":"assets/js/5d04cfb5.11622d46.js"},{"revision":"961e5aebac423289d3703d19f1fdba2c","url":"assets/js/6167.b1bdf7c2.js"},{"revision":"f45f8cc7c8c0aa7be4dfbfa2dc7981dd","url":"assets/js/631037e5.acd2b4d6.js"},{"revision":"2f55b3d763cf6782c079d78fe5b83af9","url":"assets/js/6403.9068a905.js"},{"revision":"ab6d675f23d2ba89dac81b0ecb239d3e","url":"assets/js/672e9862.baab1eb1.js"},{"revision":"78e86dbd7ebbd04b3ddd182fdfab5de0","url":"assets/js/6875c492.0d795685.js"},{"revision":"d4c94282ce56562226b984d1fb0ce5f8","url":"assets/js/6a6126ea.7356cd62.js"},{"revision":"0d899becfcd9c676e46e0b4ca2a8b733","url":"assets/js/7035c7d2.d9acb47c.js"},{"revision":"fab4924feb3647fe1e66c80a7a3d6c87","url":"assets/js/7303.205aeb0d.js"},{"revision":"0e359fb5434fb642c353754b6c0b3ffe","url":"assets/js/7b3c1a22.b324ef25.js"},{"revision":"46c5c25f311a69dbae8cdc2729ca09ee","url":"assets/js/814f3328.045945a7.js"},{"revision":"7b1be4e095ca6c30d50e8370c9868ab1","url":"assets/js/8443.4e7f048b.js"},{"revision":"977bfb8aaa27d7a55773c1af142e330c","url":"assets/js/857c089d.3ab48a6f.js"},{"revision":"07e617f2ffdf3047aa646684432a7838","url":"assets/js/8664f156.8869c0fe.js"},{"revision":"f604639500fcea4ec1491f8ff57e9484","url":"assets/js/87d1bbdf.b0a284f5.js"},{"revision":"5d74643cf083c55b094337feddf5f451","url":"assets/js/9213.e7b77456.js"},{"revision":"9e2a890e2e9e06f14ec53c80e63946de","url":"assets/js/923.a8fcabfc.js"},{"revision":"7d961784dcaeb8bfb011d697a941a560","url":"assets/js/9337a139.65c716a1.js"},{"revision":"2878d1a0f806c73eac6a216b7c15c9b3","url":"assets/js/9443c8fc.fe8b4a53.js"},{"revision":"c543bf29eb0940dcb1359f35cccfcad7","url":"assets/js/956f478e.7f9d4545.js"},{"revision":"01cd826605f1c517e79ee32997c9e7d3","url":"assets/js/98113184.f7872b5c.js"},{"revision":"63540b04287f5e6b7516c699f4c7d010","url":"assets/js/99f73156.c152e40c.js"},{"revision":"25d53181c6c5e0b8b77d0f0a9fc840e7","url":"assets/js/9a6c7dad.60036a2e.js"},{"revision":"6fd47fd05c30700507c5fa01007aead7","url":"assets/js/9b230bd9.b0101467.js"},{"revision":"687e63117ec0257b55fc07c8e97d5e75","url":"assets/js/9bf75cfe.686a6242.js"},{"revision":"40aa72bed574d8c02fa388389e58f77f","url":"assets/js/9c15dc75.e89bb11d.js"},{"revision":"2a7ee75207755667e127f2c3b492f615","url":"assets/js/9dfd648c.ef51db31.js"},{"revision":"19c7842a8150ad2465b3e5eeafcbef25","url":"assets/js/a02aa5fe.fe3db848.js"},{"revision":"a6d170560e645bbfb2168160fc6bbbd1","url":"assets/js/a15ed6e6.d2ea8fab.js"},{"revision":"701e0efd709a0a25b5963e2cfa347882","url":"assets/js/a6aa9e1f.cd7b62af.js"},{"revision":"0eed97f299a98902d8ac16608af62c38","url":"assets/js/a7023ddc.0ee0bb50.js"},{"revision":"f21e94c6c4e2f09e7f06db078e728d1a","url":"assets/js/a7af4cc8.1ec324eb.js"},{"revision":"adfb0e188784f603203e5236575f1451","url":"assets/js/a7e657da.5f3dbe5c.js"},{"revision":"f75d86033ac366b013d8976bcaa9f5ad","url":"assets/js/aaa2aa3d.b29e920c.js"},{"revision":"e2a97752bccc0831fe5715fc2f5ca8b7","url":"assets/js/b1576589.92279893.js"},{"revision":"ccf425162f76bd10c9eee6fb16813644","url":"assets/js/b2b675dd.bf492fd7.js"},{"revision":"068d4997cdd99c5bf969a1c12ae5bf3b","url":"assets/js/b4b74db7.539c2efd.js"},{"revision":"cc935e9959b7b14d67ff4a3601aa6c55","url":"assets/js/c4f5d8e4.a4f33542.js"},{"revision":"871c9ffb2ea00766799146bb3c6ec204","url":"assets/js/c73310d1.40c7bbbc.js"},{"revision":"f9c30d1ca67ebdba8c0978d55ce1d13d","url":"assets/js/ccc49370.521ce3ce.js"},{"revision":"47112b67f30018fe1533d170475e55ac","url":"assets/js/cd9a46b9.a92850de.js"},{"revision":"63aeca809d538240fb0534550a0d731a","url":"assets/js/ce974d64.8c69cfb0.js"},{"revision":"ca6b07fcc61025afb372aa5b07afc144","url":"assets/js/d1c21ad3.57d2bcd0.js"},{"revision":"d0c2d2eb04ad838e6c4e52c9490c1ffb","url":"assets/js/d275e265.a84172cb.js"},{"revision":"d228bc586ef33765262703a76f5dce52","url":"assets/js/d28f8025.274ad943.js"},{"revision":"14676f379926c56d56081ada80ff57cc","url":"assets/js/d3a64851.9f0c4ddf.js"},{"revision":"2d9e2eb516f36e714e1c525bfeb9fac3","url":"assets/js/e1a0c850.0b039edc.js"},{"revision":"7d0e076410e26bac466db06194bc26b7","url":"assets/js/e7b1d2a0.9a1885cb.js"},{"revision":"ba43b86d4266e570cc73689e87ca03ef","url":"assets/js/eb0e5bad.261e09f6.js"},{"revision":"1d149c3d7095a5aa6028c74c3bd20e6a","url":"assets/js/ed7f1ff1.411888e2.js"},{"revision":"82edf81076c616951e8eda7c0797a379","url":"assets/js/f252791a.bacde816.js"},{"revision":"a684e356777443248f4c7f9ee0914290","url":"assets/js/f4ab10be.5928a307.js"},{"revision":"d5e14a24a0319dee95c035f571f36150","url":"assets/js/f6b148ae.3fb59b5e.js"},{"revision":"24080f39bb0ab2cfd2d1d77d6314757b","url":"assets/js/f6fb477e.4bb2fb5a.js"},{"revision":"a2bc5823b91c0d83facd78d2408fe3b3","url":"assets/js/f855e442.837fac0f.js"},{"revision":"dac985190eebb488400f534439a38de2","url":"assets/js/main.3b154bbd.js"},{"revision":"dc1d0a730568308c370cdb0b00481218","url":"assets/js/runtime~main.c2381c42.js"},{"revision":"85ba32bca9a0d0e3a345cbd9fb9dd76f","url":"blog/1/index.html"},{"revision":"aea900af1c83c823a79e29b1c6e12276","url":"blog/2/index.html"},{"revision":"e2bf680303278bb739f75d32d3fa94c3","url":"blog/3/index.html"},{"revision":"1acbc5078fa400b5f8b5347175f19e3b","url":"blog/4/index.html"},{"revision":"0e5ea2b06dc6064250a7f11c177130c0","url":"blog/5/index.html"},{"revision":"7e3a4b54552c3a31b9d8552009abffac","url":"blog/6/index.html"},{"revision":"409c22bc48b7641efb64a860e989545a","url":"blog/7/index.html"},{"revision":"946e0c67c5863167deb32ef05108b79c","url":"blog/8/index.html"},{"revision":"b888ab70f21d6a25d98ce0660aa1e58d","url":"blog/9/index.html"},{"revision":"d3b45a25afdfd7494e98374d675adb66","url":"blog/index.html"},{"revision":"469c7db6d840ebf8a01cdd5aa86a31cf","url":"blog/tags/03-2021/index.html"},{"revision":"3f1a7fabc8711d264bc2bbd2427b0c65","url":"blog/tags/04-2021/index.html"},{"revision":"c0c9e37b02d6339fae1df2c6092efa93","url":"blog/tags/05-2021/index.html"},{"revision":"a17c1abae5effbd03410515b7d4f5896","url":"blog/tags/06-2021/index.html"},{"revision":"663fe0c2f7028a9f1f6147547e76d52e","url":"blog/tags/07-2021/index.html"},{"revision":"370b75a19fa151b78cb5ccfb9d82f761","url":"blog/tags/10-04-2021/index.html"},{"revision":"a8e69a222947bf76b20860d416bd3ecb","url":"blog/tags/12-06-2021/index.html"},{"revision":"91555b8169e566840866e58647c69ee6","url":"blog/tags/13-03-2021/index.html"},{"revision":"d5ee18c3ce017047897e6c75eeaacaa0","url":"blog/tags/15-05-2021/index.html"},{"revision":"4fad84a1f7db8c8b84840fd027257dd7","url":"blog/tags/2021/index.html"},{"revision":"37ccfa77aa1061885a8b4b04bec5436d","url":"blog/tags/24-04-2021/index.html"},{"revision":"06d92d8cdafe0d202902e761cf040143","url":"blog/tags/26-06-2021/index.html"},{"revision":"8cd12c728f5f99474ca3337fd0b16da9","url":"blog/tags/27-03-2021/index.html"},{"revision":"9e68c86d9f459d0d1921ad25031893fe","url":"blog/tags/29-05-2021/index.html"},{"revision":"27aa87b621c3567879d471528fcb7030","url":"blog/tags/31-07-2021/index.html"},{"revision":"91d377e171d006758b5f2882f1f50032","url":"blog/tags/angular/index.html"},{"revision":"c93d6b564902804f734d15656970094a","url":"blog/tags/banco-de-dados/index.html"},{"revision":"169db6f8cc41b06a9d64a36e40232bf9","url":"blog/tags/blog/index.html"},{"revision":"835b87fbc7e26f7d0673341f833cef8d","url":"blog/tags/css/index.html"},{"revision":"3d09ef4d477b4eb216e19d3f84acf0ea","url":"blog/tags/fernando/index.html"},{"revision":"f7c60e81160e4c139ea2cdbb9f413ca9","url":"blog/tags/geferson/index.html"},{"revision":"f2b33398afd6e157aacde34b51662de6","url":"blog/tags/html/index.html"},{"revision":"3afbc336e397565989daee3e177eac0a","url":"blog/tags/index.html"},{"revision":"221c68e3d01b150b4d3050f864546469","url":"blog/tags/jean/index.html"},{"revision":"d57326ca7d9e234d91302a6d6a620cd4","url":"blog/tags/jemerson/index.html"},{"revision":"eea0ddad5185d526132780986e19c848","url":"blog/tags/js/index.html"},{"revision":"10fddf9bc42970a86474dea5330a14ca","url":"blog/tags/presencial/index.html"},{"revision":"a640f55cccd9f57575be15bcf6eff38b","url":"blog/tags/remoto/index.html"},{"revision":"cd9c27f1620ed64e62bd7f6cc8f420e1","url":"blog/tags/unipar/index.html"},{"revision":"1ca5bd16c59028689be0e3d32e877693","url":"docs/angular/index.html"},{"revision":"05ff14edc96e6c2c28df70d29e7e2004","url":"docs/banco-de-dados/index.html"},{"revision":"4dbd88de7693a3553e455df60fdfbb68","url":"docs/html-css-js/index.html"},{"revision":"7598eae7658f5b89a756c476c98bc24e","url":"docs/index.html"},{"revision":"b45c45acb84ab7a1f0124375d39f583f","url":"exemplos/create-a-blog-post/index.html"},{"revision":"0fb5e45d93f397b829ffe39340d86581","url":"exemplos/create-a-document/index.html"},{"revision":"644ea939d8a65fde375f1515b52b541b","url":"exemplos/create-a-page/index.html"},{"revision":"453479c91ab8e1a0b3f37b4404c69b7e","url":"exemplos/index.html"},{"revision":"c578c71b4540ad193406aabcf92aa9ba","url":"exemplos/markdown-features-admonitions/index.html"},{"revision":"0218f36a2da3d807e759a1e636e4c02f","url":"exemplos/markdown-features/index.html"},{"revision":"48a98e505963cfb259f598a134b8a024","url":"exemplos/thank-you/index.html"},{"revision":"2eeb0e9efea03e585c872c76e1bbefa6","url":"index.html"},{"revision":"dc21436f30334e91d640beff1c75bb34","url":"info/creditos/index.html"},{"revision":"157b6f5d3af5ff4ded6cb75ed1e975be","url":"info/ferramentas-online/index.html"},{"revision":"25a6d466288499875120893c19fe00d9","url":"info/index.html"},{"revision":"961fd56a7193aceaf8cdde8433aeff93","url":"info/programas/git/index.html"},{"revision":"146d01bba4c31d9a960ff319fd99270b","url":"info/programas/visual-studio-code/index.html"},{"revision":"ec8154205401e8bbd20b86501e23c7f7","url":"manifest.json"},{"revision":"9aa5e9e18cc7c7dfda68c5c725d294ea","url":"markdown-page/index.html"},{"revision":"d48ca0d53bae7816b0a65e19c82e21e8","url":"professores/fernando/index.html"},{"revision":"36727ed15499bce2412a52a41242b648","url":"professores/geferson/index.html"},{"revision":"0548c3b8e92eec4f757b6817c16d34b5","url":"professores/index.html"},{"revision":"522efa64bf7793838a3c373cdaef024e","url":"professores/jean/index.html"},{"revision":"5d049fef0509ef6e90d21cf5a18e1b7a","url":"professores/jemerson/index.html"},{"revision":"f694e181ce3bbcc8b44e5be09e629705","url":"search-index.json"},{"revision":"80ae79583d790f0088e35245d200111e","url":"search/index.html"},{"revision":"47d1934420646afede7262ae781ae806","url":"android-chrome-144x144.png"},{"revision":"8fa5df14ffe86ed6da751cdb38cf8784","url":"android-chrome-192x192.png"},{"revision":"2aeb9725b8a162f82e8d60a228b570e8","url":"android-chrome-256x256.png"},{"revision":"5ba05d5fddb50beddc16ccb64ae5702c","url":"android-chrome-36x36.png"},{"revision":"381e39fae8652cc165e97954d13267ed","url":"android-chrome-384x384.png"},{"revision":"e204d448f3c9b03480c4faa2df3862c8","url":"android-chrome-48x48.png"},{"revision":"44677461122aef1aa362bda353f58e98","url":"android-chrome-512x512.png"},{"revision":"1aeac9964dec727cb8c5118651b2d92c","url":"android-chrome-72x72.png"},{"revision":"e078f56c8e006a78a036022d330b8e7e","url":"android-chrome-96x96.png"},{"revision":"6df4a48d438414961a948a2680d470ea","url":"apple-touch-icon-114x114-precomposed.png"},{"revision":"7d6c4c00149be67cfc6a1efa901818f1","url":"apple-touch-icon-114x114.png"},{"revision":"613b8fa11782067f6a1c5e92812d5bd5","url":"apple-touch-icon-120x120-precomposed.png"},{"revision":"886652b2f97481234037b65eefbc6f15","url":"apple-touch-icon-120x120.png"},{"revision":"c244cf3d0678bb3002837e1f31e44581","url":"apple-touch-icon-144x144-precomposed.png"},{"revision":"72cd7de7b9a1c493aeb959fc90dc2071","url":"apple-touch-icon-144x144.png"},{"revision":"5d91b79fbc60592bb8397ef5aea5df55","url":"apple-touch-icon-152x152-precomposed.png"},{"revision":"7504ca717e4db91c8a0e946e0595a2ee","url":"apple-touch-icon-152x152.png"},{"revision":"bf67253443206b17cd1ae02ce1669b8e","url":"apple-touch-icon-180x180-precomposed.png"},{"revision":"dade6939d7a6733ca1433db06d56ac67","url":"apple-touch-icon-180x180.png"},{"revision":"8c6ae3094464800c11805d5ba65df2ce","url":"apple-touch-icon-57x57-precomposed.png"},{"revision":"30392c2302461ac01cfd1188829c5760","url":"apple-touch-icon-57x57.png"},{"revision":"4fa284af7d5ad7dcfd5087c646e9e3df","url":"apple-touch-icon-60x60-precomposed.png"},{"revision":"6c0c267ebe05fb6ceeebda3c77097e41","url":"apple-touch-icon-60x60.png"},{"revision":"2d8a907db64fa95b3e5d439067873979","url":"apple-touch-icon-72x72-precomposed.png"},{"revision":"699d0c6f7477dfe806eeffffec7e6014","url":"apple-touch-icon-72x72.png"},{"revision":"14aa4ab4a121a93e9d67adc30e6b3717","url":"apple-touch-icon-76x76-precomposed.png"},{"revision":"9e31160a3556f858564e93fca3d5e3e2","url":"apple-touch-icon-76x76.png"},{"revision":"08cea05f7ff3a3f9b2a4a3797d75e08b","url":"apple-touch-icon-precomposed.png"},{"revision":"3e752c0dd37bb5636365c46ff3527c73","url":"apple-touch-icon.png"},{"revision":"b69b7aaac5acf49579d475f682d22e2e","url":"assets/images/Alunos-208f0cb5d02dd2d399808bb14e7510c2.jpg"},{"revision":"4eaceafb7a3b9cec6c8e00ef1f6f65d1","url":"assets/images/aula-6c959df9e5962f50c6ab1907a9397b44.jpeg"},{"revision":"77edc406024001d3d6090b23fd2ad4d0","url":"assets/images/Grupo-03-a45897d031b943176b2f5196629f7996.png"},{"revision":"4eaceafb7a3b9cec6c8e00ef1f6f65d1","url":"docs/aula-1/aula.jpeg"},{"revision":"b69b7aaac5acf49579d475f682d22e2e","url":"docs/aula-9/Alunos.jpg"},{"revision":"77edc406024001d3d6090b23fd2ad4d0","url":"docs/aula-9/Grupo-03.png"},{"revision":"6b6f3615a4c1c6f7e57ed372b3daf183","url":"favicon-16x16.png"},{"revision":"2b5f4a215943e4024f39c05dc66af387","url":"favicon-32x32.png"},{"revision":"4abf98d262f3f48d9df79e13be6547f0","url":"img/document.svg"},{"revision":"0b0bb8084dd32e1313fcde7f10a1ed2e","url":"img/documentSmall.svg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"ae56930a28eaaabf63c2537a231cff4f","url":"img/favicon.ico"},{"revision":"d17190b209a9947e8460dcae1f32f0b7","url":"img/logo.svg"},{"revision":"f79694a67507390a907ec3f6db340b18","url":"img/logo512.png"},{"revision":"e35cbf702abaa79e39b110eb185cb14b","url":"img/mochila.svg"},{"revision":"5bbc0200a0b86ceb4d387f81e1deac65","url":"img/mochilaSmall.svg"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"},{"revision":"bb87f7e4d8194a69496c20e6284865bd","url":"mstile-144x144.png"},{"revision":"2cd71c38f001a8988e52566384d9f851","url":"mstile-150x150.png"},{"revision":"4a40fcf4c2469d40fd79532e9f27e0b8","url":"mstile-310x150.png"},{"revision":"07dcb5f1c140b664ae312e8a40c9d830","url":"mstile-310x310.png"},{"revision":"f157a795e3afc202caac60e0f573fa02","url":"mstile-70x70.png"},{"revision":"430410e91c906200a24b8713db4d1ff6","url":"safari-pinned-tab.svg"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();
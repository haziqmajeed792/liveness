import{r as tt,c as I,h as p,g as et}from"./index-CnKKXoxi.js";import{v as d,E as G,w as nt,R as h,A as it}from"./workflow.store-a1a1bec6-BlC0WLyn.js";import{s as c,W as b,L as u,T as A,d as rt,o as z,e as st,E as m,f as T,g as ot,h as at}from"./store-88a4e8c3-BR2RF-gK.js";import{u as W}from"./browser-6b4c8cad-DKsL9QIc.js";import{a as ct,i as D}from"./translations-d180e65d-Bu5TNlG5.js";import"./_commonjsHelpers-1789f0cf-Cpj98o6Y.js";var R=function(n,e){return R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},R(n,e)};function w(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");R(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Y(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function P(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s}function V(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function f(n){return typeof n=="function"}function X(n){var e=function(i){Error.call(i),i.stack=new Error().stack},t=n(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var N=X(function(n){return function(t){n(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,r){return r+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function _(n,e){if(n){var t=n.indexOf(e);0<=t&&n.splice(t,1)}}var E=function(){function n(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return n.prototype.unsubscribe=function(){var e,t,i,r,s;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var a=Y(o),l=a.next();!l.done;l=a.next()){var v=l.value;v.remove(this)}}catch(g){e={error:g}}finally{try{l&&!l.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}else o.remove(this);var S=this.initialTeardown;if(f(S))try{S()}catch(g){s=g instanceof N?g.errors:[g]}var K=this._finalizers;if(K){this._finalizers=null;try{for(var k=Y(K),y=k.next();!y.done;y=k.next()){var $=y.value;try{H($)}catch(g){s=s??[],g instanceof N?s=V(V([],P(s)),P(g.errors)):s.push(g)}}}catch(g){i={error:g}}finally{try{y&&!y.done&&(r=k.return)&&r.call(k)}finally{if(i)throw i.error}}}if(s)throw new N(s)}},n.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)H(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},n.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},n.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},n.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&_(t,e)},n.prototype.remove=function(e){var t=this._finalizers;t&&_(t,e),e instanceof n&&e._removeParent(this)},n.EMPTY=function(){var e=new n;return e.closed=!0,e}(),n}(),Q=E.EMPTY;function J(n){return n instanceof E||n&&"closed"in n&&f(n.remove)&&f(n.add)&&f(n.unsubscribe)}function H(n){f(n)?n():n.unsubscribe()}var lt={Promise:void 0},dt={setTimeout:function(n,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,V([n,e],P(t)))},clearTimeout:function(n){return clearTimeout(n)},delegate:void 0};function ht(n){dt.setTimeout(function(){throw n})}function j(){}function x(n){n()}var q=function(n){w(e,n);function e(t){var i=n.call(this)||this;return i.isStopped=!1,t?(i.destination=t,J(t)&&t.add(i)):i.destination=gt,i}return e.create=function(t,i,r){return new U(t,i,r)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(E),ut=function(){function n(e){this.partialObserver=e}return n.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){C(i)}},n.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){C(i)}else C(e)},n.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){C(t)}},n}(),U=function(n){w(e,n);function e(t,i,r){var s=n.call(this)||this,o;return f(t)||!t?o={next:t??void 0,error:i??void 0,complete:r??void 0}:o=t,s.destination=new ut(o),s}return e}(q);function C(n){ht(n)}function pt(n){throw n}var gt={closed:!0,next:j,error:pt,complete:j},ft=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function mt(n){return n}function vt(n){return n.length===0?mt:n.length===1?n[0]:function(t){return n.reduce(function(i,r){return r(i)},t)}}var F=function(){function n(e){e&&(this._subscribe=e)}return n.prototype.lift=function(e){var t=new n;return t.source=this,t.operator=e,t},n.prototype.subscribe=function(e,t,i){var r=this,s=yt(e)?e:new U(e,t,i);return x(function(){var o=r,a=o.operator,l=o.source;s.add(a?a.call(s,l):l?r._subscribe(s):r._trySubscribe(s))}),s},n.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},n.prototype.forEach=function(e,t){var i=this;return t=O(t),new t(function(r,s){var o=new U({next:function(a){try{e(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:r});i.subscribe(o)})},n.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},n.prototype[ft]=function(){return this},n.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return vt(e)(this)},n.prototype.toPromise=function(e){var t=this;return e=O(e),new e(function(i,r){var s;t.subscribe(function(o){return s=o},function(o){return r(o)},function(){return i(s)})})},n.create=function(e){return new n(e)},n}();function O(n){var e;return(e=n??lt.Promise)!==null&&e!==void 0?e:Promise}function It(n){return n&&f(n.next)&&f(n.error)&&f(n.complete)}function yt(n){return n&&n instanceof q||It(n)&&J(n)}var bt=X(function(n){return function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),M=function(n){w(e,n);function e(){var t=n.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new L(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new bt},e.prototype.next=function(t){var i=this;x(function(){var r,s;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var o=Y(i.currentObservers),a=o.next();!a.done;a=o.next()){var l=a.value;l.next(t)}}catch(v){r={error:v}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(r)throw r.error}}}})},e.prototype.error=function(t){var i=this;x(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var r=i.observers;r.length;)r.shift().error(t)}})},e.prototype.complete=function(){var t=this;x(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),n.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,r=this,s=r.hasError,o=r.isStopped,a=r.observers;return s||o?Q:(this.currentObservers=null,a.push(t),new E(function(){i.currentObservers=null,_(a,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,r=i.hasError,s=i.thrownError,o=i.isStopped;r?t.error(s):o&&t.complete()},e.prototype.asObservable=function(){var t=new F;return t.source=this,t},e.create=function(t,i){return new L(t,i)},e}(F),L=function(n){w(e,n);function e(t,i){var r=n.call(this)||this;return r.destination=t,r.source=i,r}return e.prototype.next=function(t){var i,r;(r=(i=this.destination)===null||i===void 0?void 0:i.next)===null||r===void 0||r.call(i,t)},e.prototype.error=function(t){var i,r;(r=(i=this.destination)===null||i===void 0?void 0:i.error)===null||r===void 0||r.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,r;return(r=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&r!==void 0?r:Q},e}(M),Z=function(n){w(e,n);function e(t){var i=n.call(this)||this;return i._value=t,i}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var i=n.prototype._subscribe.call(this,t);return!i.closed&&t.next(this._value),i},e.prototype.getValue=function(){var t=this,i=t.hasError,r=t.thrownError,s=t._value;if(i)throw r;return this._throwIfClosed(),s},e.prototype.next=function(t){n.prototype.next.call(this,this._value=t)},e}(M);class B{constructor(e){this.getDefaultData=()=>({version:this.apiKey?2:1,tenantId:this.tenantId,sessionId:this.sessionId,source:this.clientId,family:this.type}),this.generateOperationId=()=>new Promise(t=>{const i=d();this.operationId=i,t(i)}),this.generateStepId=()=>d(),this.trackingAsset=async(t,i,r,s,o)=>new Promise(async a=>{const l=new Date().getTime(),v=await this.apiService.requestUpload(this.trackingUrlAssets,t,{family:this.type,tenantId:this.tenantId,operationId:o||this.operationId,type:i}),S=new Date().getTime();await this.apiService.request(this.trackingUrl,{method:h.post,data:Object.assign(Object.assign({operationId:o||this.operationId},this.getDefaultData()),{events:[{eventId:d(),clientTimestamp:new Date().getTime(),executionTime:S-l,payload:{stepId:r,stepType:s,type:m.asset,source:this.getDefaultData().source,assetType:i,url:v.path,hash:v.hash,contentType:v.contentType}}]})}),a(!0)}),this.trackingSignature=async(t,i)=>{await this.apiService.request(this.trackingUrl,{method:h.post,data:Object.assign(Object.assign({operationId:i||this.operationId},this.getDefaultData()),{events:[{eventId:d(),clientTimestamp:new Date().getTime(),payload:{type:T.signature,timestamp:new Date().getTime(),result:t}}]})})},this.trackingStatus=(t,i,r,s,o)=>{this.apiService.request(this.trackingUrl,{method:h.post,data:Object.assign(Object.assign({},this.getDefaultData()),{operationId:o||this.operationId,events:[{eventId:d(),clientTimestamp:new Date().getTime(),payload:{stepId:r,stepType:s,type:T.result,status:t,reason:i}}]})})},this.trackingEvent=(t,i,r)=>this.apiService.request(this.trackingUrl,{method:h.post,data:Object.assign(Object.assign({operationId:r||this.operationId},this.getDefaultData()),{events:[{eventId:d(),clientTimestamp:new Date().getTime(),payload:{stepId:t,stepType:i,type:m.stepChange,widget:null,component:null}}]})}),this.trackingStepSuccess=(t,i,r)=>{this.apiService.request(this.trackingUrl,{method:h.post,data:Object.assign(Object.assign({operationId:r||this.operationId},this.getDefaultData()),{events:[{eventId:d(),clientTimestamp:new Date().getTime(),payload:{stepId:t,stepType:i,type:m.stepResult,status:ot.succeeded,reason:null}}]})})},this.trackingTerms=t=>{this.apiService.request(this.trackingUrl,{method:h.post,data:Object.assign(Object.assign({operationId:t||this.operationId},this.getDefaultData()),{events:[{eventId:d(),clientTimestamp:new Date().getTime(),payload:{type:m.termsConditions,timestamp:new Date().getTime(),accepted:!0}}]})})},this.trackingCustomerId=(t,i)=>{this.apiService.request(this.trackingUrl,{method:h.post,data:Object.assign(Object.assign({operationId:i||this.operationId},this.getDefaultData()),{events:[{eventId:d(),clientTimestamp:new Date().getTime(),payload:{type:this.type,screen:null,event:m.setCustomerId,value:t}}]})})},this.authenticate=async()=>{if(this.apiKey)return null;const t=await this.apiService.requestToken(this.clientId,this.clientSecret);return this.apiService.setToken(t),t},this.trackingStart=async(t,i)=>{const r=this.operationId||await this.generateOperationId(),s=[];return s.push({eventId:d(),clientTimestamp:new Date().getTime(),payload:{stepId:this.generateStepId(),stepType:at.start,type:m.stepChange,component:null,widget:null}}),s.push({eventId:d(),clientTimestamp:new Date().getTime(),executionTime:null,payload:{type:T.device,deviceType:this.deviceType,osVersion:this.browser.version,model:this.browser.version,brand:this.browser.name,browser:this.browser.name,osName:this.os.name}}),t&&s.push({eventId:d(),clientTimestamp:new Date().getTime(),executionTime:null,payload:{type:m.stepFlows,id:null,steps:t,reducedId:null,reducedSteps:null}}),i&&s.push({eventId:d(),clientTimestamp:new Date().getTime(),executionTime:null,payload:{type:this.type,screen:null,event:m.setCustomerId,value:i||this.customerId}}),await this.apiService.request(this.trackingUrl,{method:h.post,data:Object.assign(Object.assign({operationId:this.operationId},this.getDefaultData()),{events:s})}),{operationId:r,sessionId:this.sessionId}},this.apiService=new it({authUrl:e.authUrl,apiKey:e.apiKey}),this.trackingUrlAssets=e.trackingUrlAssets,this.type=e.type,this.tenantId=e.tenantId,this.trackingUrl=e.trackingUrl,this.sessionId=d(),this.clientId=e.clientId?e.clientId:e.landing?"landing":d(),this.clientSecret=e.clientSecret,this.apiKey=e.apiKey,this.apiKey=e.apiKey,this.browser=W().browser,this.os=W().os,this.deviceType=W().deviceType,this.customerId=e.customerId,this.operationId=e.operationId}}class wt{constructor(){this.myData=new Z(""),this.statusLicense=new Z(""),this.myLicense=new Z(null),this.loaded=!1,this.init=e=>{if(!this.loaded&&!this.innerWorker){const t="LyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi8NCmNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydChgaHR0cHM6Ly9zZGstd2ViLmZhY2VwaGkucHJvL3Jlc291cmNlcy9zY3JpcHRzL0ZCVG9rZW5pemVyLmpzYCk7DQpjb25zdCBkb3dubG9hZEJ1ZmYgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9zZGstd2ViLmZhY2VwaGkucHJvL3Jlc291cmNlcy9zY3JpcHRzL0ZCVG9rZW5pemVyLndhc21gKTsNCmNvbnN0IG1vZHVsZUxpY2Vuc2UgPSBhd2FpdCBpbXBvcnQoYGh0dHBzOi8vc2RrLXdlYi5mYWNlcGhpLnByby9yZXNvdXJjZXMvc2NyaXB0cy9GQmxpY2Vuc2luZ0xpdGUuanNgKTsNCmNvbnN0IGRvd25sb2FkQnVmZkxpY2Vuc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9zZGstd2ViLmZhY2VwaGkucHJvL3Jlc291cmNlcy9zY3JpcHRzL0ZCbGljZW5zaW5nTGl0ZS53YXNtYCk7DQoNCmNvbnN0IHdhc21pbnN0YW5jZSA9IGF3YWl0IGRvd25sb2FkQnVmZi5hcnJheUJ1ZmZlcigpOw0KY29uc3Qgd2FzbWluc3RhbmNlTGljZW5zZSA9IGF3YWl0IGRvd25sb2FkQnVmZkxpY2Vuc2UuYXJyYXlCdWZmZXIoKTsNCg0KY29uc3QgaW5zdGFuY2VMaWNlbnNlID0gYXdhaXQgbW9kdWxlTGljZW5zZS5kZWZhdWx0KHsNCiAgd2FzbUJpbmFyeTogd2FzbWluc3RhbmNlTGljZW5zZSwNCiAgb25SdW50aW1lSW5pdGlhbGl6ZWQ6ICgpID0+IHNlbGYucG9zdE1lc3NhZ2UoeyBtZXNzYWdlOiAnaW5pdGlhbGl6ZWQnLCBkYXRhOiBudWxsIH0pLA0KfSk7DQoNCmNvbnN0IGluc3RhbmNlID0gYXdhaXQgbW9kdWxlLmRlZmF1bHQoew0KICB3YXNtQmluYXJ5OiB3YXNtaW5zdGFuY2UsDQogIG9uUnVudGltZUluaXRpYWxpemVkOiAoKSA9PiBzZWxmLnBvc3RNZXNzYWdlKHsgbWVzc2FnZTogJ2luaXRpYWxpemVkJywgZGF0YTogbnVsbCB9KSwNCn0pOw0KDQpjb25zdCB0b2tlbml6ZXIgPSBuZXcgaW5zdGFuY2UuVG9rZW5pemVyKCk7DQoNCnNlbGYub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHsNCiAgY29uc3QgaXNWYWxpZExpY2Vuc2UgPSBsaWNlbnNlID0+IHsNCiAgICB0cnkgew0KICAgICAgY29uc3QgcmVzdWx0ID0gaW5zdGFuY2VMaWNlbnNlLmlzVmFsaWRMaWNlbnNlKGxpY2Vuc2UpOw0KICAgICAgY29uc3QgbGljZW5zZVN0YXR1cyA9IGluc3RhbmNlTGljZW5zZS5MaWNlbnNlU3RhdHVzLnZhbHVlc1tyZXN1bHQudmFsdWVdOw0KDQogICAgICBzZWxmLnBvc3RNZXNzYWdlKHsNCiAgICAgICAgbWVzc2FnZTogJ2lzVmFsaWRMaWNlbnNlJywNCiAgICAgICAgZGF0YTogbGljZW5zZVN0YXR1cy5jb25zdHJ1Y3Rvci5uYW1lLA0KICAgICAgfSk7DQogICAgfSBjYXRjaCAoZXJyb3IpIHsNCiAgICAgIHNlbGYucG9zdE1lc3NhZ2Uoew0KICAgICAgICBtZXNzYWdlOiAnaW52YWxpZExpY2Vuc2UnLA0KICAgICAgfSk7DQogICAgfQ0KICB9Ow0KDQogIGNvbnN0IHNlbmRFeHRyYURhdGEgPSBkYXRhID0+IHsNCiAgICBjb25zdCBleHRyYURhdGEgPSBuZXcgaW5zdGFuY2UuTWFwU3RyU3RyKCk7DQoNCiAgICBleHRyYURhdGEuc2V0KCdFeHRyYURhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7DQogICAgdG9rZW5pemVyLmFkZEV4dHJhRGF0YShleHRyYURhdGEpOw0KDQogICAgbGV0IGVuY3J5cHRlZCA9IG51bGw7DQogICAgdG9rZW5pemVyLmVuY3J5cHREaWN0aW9uYXJ5KCk7DQogICAgZW5jcnlwdGVkID0gdG9rZW5pemVyLmdldEVuY3J5cHRlZERpY3Rpb25hcnlCYXNlNjQoKTsNCiAgICBzZWxmLnBvc3RNZXNzYWdlKHsgbWVzc2FnZTogJ2VuY3J5cHRlZERhdGEnLCBkYXRhOiBlbmNyeXB0ZWQgfSk7DQogIH07DQoNCiAgY29uc3QgZ2V0RW5hYmxlZENvbXBvbmVudHMgPSAobGljZW5zZSwgY29tcG9uZW50TmFtZSkgPT4gew0KICAgIGNvbnN0IHJlc3VsdHMgPSBpbnN0YW5jZUxpY2Vuc2UuZ2V0RW5hYmxlZENvbXBvbmVudHMobGljZW5zZSwgY29tcG9uZW50TmFtZSk7DQoNCiAgICBjb25zdCBjb21wb25lbnRzVmVjID0gcmVzdWx0cy5nZXRDb21wb25lbnRzKCk7DQogICAgbGV0IG9iamVjdENvbXBvbmVudDsNCg0KICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcG9uZW50c1ZlYy5zaXplKCk7IGkrKykgew0KICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c1ZlYy5nZXQoaSk7DQoNCiAgICAgIG9iamVjdENvbXBvbmVudCA9IHsNCiAgICAgICAgcGFyYW1ldGVyczogY29tcG9uZW50LmxpY2Vuc2UgIT09ICcnID8gSlNPTi5wYXJzZShjb21wb25lbnQubGljZW5zZSkgOiBudWxsLA0KICAgICAgfTsNCiAgICB9DQoNCiAgICByZXR1cm4gb2JqZWN0Q29tcG9uZW50Ow0KICB9Ow0KDQogIHN3aXRjaCAoZS5kYXRhLm1lc3NhZ2UpIHsNCiAgICBjYXNlICdleHRyYURhdGEnOg0KICAgICAgc2VuZEV4dHJhRGF0YShlLmRhdGEuZGF0YSk7DQoNCiAgICAgIGJyZWFrOw0KICAgIGNhc2UgJ3ZhbGlkTGljZW5zZSc6IHsNCiAgICAgIGlzVmFsaWRMaWNlbnNlKEpTT04uc3RyaW5naWZ5KGUuZGF0YS5kYXRhKSk7DQogICAgICBicmVhazsNCiAgICB9DQoNCiAgICBjYXNlICdnZXRFbmFibGVkQ29tcG9uZW50cyc6IHsNCiAgICAgIGxldCByZXN1bHRzID0ge307DQogICAgICBjb25zdCBjb21wb25lbnRzID0gZS5kYXRhLmNvbXBvbmVudHNOYW1lOw0KICAgICAgY29tcG9uZW50cy5tYXAoaXRlbSA9PiB7DQogICAgICAgIGNvbnN0IG5ld0NvbXBvbmVudCA9IGdldEVuYWJsZWRDb21wb25lbnRzKEpTT04uc3RyaW5naWZ5KGUuZGF0YS5saWNlbnNlKSwgaXRlbSk7DQoNCiAgICAgICAgaWYgKG5ld0NvbXBvbmVudCkgew0KICAgICAgICAgIHJlc3VsdHMgPSB7IC4uLnJlc3VsdHMsIFtpdGVtXTogbmV3Q29tcG9uZW50IH07DQogICAgICAgIH0NCiAgICAgIH0pOw0KDQogICAgICBzZWxmLnBvc3RNZXNzYWdlKHsgbWVzc2FnZTogJ2dldEVuYWJsZWRDb21wb25lbnRzJywgZGF0YTogcmVzdWx0cyB9KTsNCiAgICB9DQogIH0NCn07DQo=",i=new Blob([atob(t)],{type:"application/javascript"}),r=URL.createObjectURL(i),s=()=>new Worker(r,{type:"module"});this.innerWorker=s(),this.innerWorker.onmessage=o=>{switch(o.data.message){case"initialized":this.loaded=!0,e&&e();break;case"encryptedData":this.myData.next(o.data.data);break}}}}}async validLicense(e){return new Promise((t,i)=>{this.innerWorker.postMessage({message:"validLicense",data:e}),this.innerWorker.onmessage=r=>{switch(r.data.message){case"invalidLicense":{console.error("The license is invalid, please contact Facephi for more information"),i("invalid license");break}case"isValidLicense":{t(r.data.data);break}}}})}getEnabledComponents(e){return new Promise(t=>{this.innerWorker.postMessage({message:"getEnabledComponents",license:e,componentsName:[u.tracking,u.selphiWidget,u.selphidWidget,u.videoRecording,u.videoRecruitment,u.flow,u.voiceRecording,u.landing,u.videoAssistance]}),this.innerWorker.onmessage=i=>{switch(i.data.message){case"getEnabledComponents":{t(i.data.data);break}}}})}async generateExtraData({customerId:e,operationId:t,trackingFamily:i,trackingOptions:r,sessionId:s}){return new Promise((o,a)=>{try{if(e&&t&&i&&s&&r&&this.innerWorker){const l=new URL(r==null?void 0:r.authUrl);this.innerWorker.postMessage({message:"extraData",data:{customerId:e,operationId:t,FACEPHI_SELPHID_TRACKING_TENANT_UUID:r==null?void 0:r.tenantId,FACEPHI_SELPHID_TRACKING_USER_KEY:r==null?void 0:r.clientId,FACEPHI_SELPHID_TRACKING_URL_KEY:l.origin,FACEPHI_SELPHID_TRACKING_PASSWORD_KEY:r==null?void 0:r.clientSecret,sessionId:s,family:i,FACEPHI_SELPHID_TRACKING_ASSETS_ENDPOINT:"/api/assets/",FACEPHI_SELPHID_TRACKING_EVENTS_ENDPOINT:"/api/tracking/events",FACEPHI_SELPHID_TRACKING_AUTH_ENDPOINT:"/auth/realms/inphinite/protocol/openid-connect/token",FACEPHI_SELPHID_TRACKING_EVENT_SOURCE:"backend.sdk"}})}this.innerWorker.onmessage=l=>{switch(l.data.message){case"encryptedData":{o(l.data.data);break}}}}catch(l){a(l)}})}}class St{getLicense(e){return fetch(c.dev?"https://license.identity-platform.dev":"https://license.identity-platform.io",{mode:"cors",method:"GET",headers:{"x-api-key":e,"Content-Type":"application/json"}}).then(async t=>{const i=await t.json();if(i.statusCode===401)throw new Error(i.message);if(new Date(i.dateEnd).getTime()<new Date().getTime())throw new Error(G.LICENSE_EXPIRED);return i}).catch(t=>{throw new Error(t.message==="Failed to fetch"?G.LICENSE_SERVICE_ERROR:t.message)})}checkOrigin(e){return fetch(c.dev?"https://license.identity-platform.dev":"https://license.identity-platform.io/check-origin",{mode:"cors",method:"GET",headers:{"x-api-key":e,"Content-Type":"application/json"}}).then(async t=>await t.json())}}class kt{constructor(e){this.request=(t,i)=>new Promise((r,s)=>fetch(`${this.apiUrl}${t}`,{method:i.method,mode:"cors",headers:Object.assign({"content-type":"application/json"},i.headers),body:JSON.stringify(i.data)}).then(o=>{if(o.ok)r(o.json());else throw new Error("Something went wrong")}).catch(o=>{s(o)})),this.apiUrl=e.apiUrl,this.source=e.source,this.apiKey=e.apiKey,this.operationId=e.operationId,this.generateSessionId()}async start(e){try{return await this.request("/conductor/workflows/start",{method:h.post,data:e,headers:{"x-api-key":this.apiKey,"x-source":this.source}})}catch(t){throw new Error(t)}}async session(e){return await this.request(`/conductor/operations/${this.operationId}/session`,{method:h.post,data:e})}generateSessionId(){this.sessionId=d()}async event(e,t,i){return await this.request(`/conductor/operations/${i}/events`,{method:h.post,data:{stepId:e,events:t}})}}class Ct{constructor(e){this.request=(t,i)=>fetch(`${this.apiUrl}${t}`,{method:i.method,mode:"cors",body:JSON.stringify(i.data),headers:{"x-api-key":this.apiKey,"content-type":"application/json"}}).then(async r=>{if(r.ok){const s=r.headers.get("content-type");return s&&s.includes("application/json")?r.json():null}else{const s=await r.text();throw new Error(`HTTP Error ${r.status}: ${s}`)}}).catch(r=>{throw console.log(r),new Error(r)}),this.sendReniec=(t,i,r)=>this.request("/identiphi/PER",{method:h.post,data:Object.assign(Object.assign({},t),{operationId:i,sessionId:r})}),this.sendSelphid=({front:t,back:i,country:r},s,o)=>this.request("/selphid",{method:h.post,data:{front:t,back:i,country:r,operationId:s,sessionId:o,tenantId:this.tenantId}}),this.sendVideoContracting=(t,i)=>this.request("/videocontracting",{method:h.post,data:{operationId:t,sessionId:i,tenantId:this.tenantId}}),this.sendSelphi=(t,i,r)=>this.request("/selphi",{method:h.post,data:{image:t.replace("data:image/jpeg;base64,",""),operationId:i,sessionId:r,tenantId:this.tenantId}}),this.getResults=t=>new Promise((i,r)=>{this.request(`/result/${t}`,{method:h.get}).then(s=>{s.error&&r(s),i(s)})}),this.apiKey=e.apiKey,this.apiUrl=e.apiUrl,this.tenantId=e.tenantId}}const xt=({text:n="Initializing",show:e=!1})=>e?p("div",{class:"loading"},p("div",{class:"lds-ellipsis"},p("div",null),p("div",null),p("div",null),p("div",null)),n&&D.t(n,{missingBehavior:"empty"})&&p("p",null,D.t(n,{missingBehavior:"empty"}))):null,Et=`:host {
  --secondaryColor: #3167FC
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li {
  margin: 0;
  padding: 0;
}

/* Form */

.form {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    max-width: 100%;
    justify-content: space-between;
  }
}

.form-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  padding: var(--padding) var(--padding) 0;

  @media (max-width: 767px) {
    margin: auto 0;
  }
}

.tip-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: var(--padding) var(--padding) 0;
  margin: 0 auto;

  @media (max-width: 767px) {
    margin: auto 0;
  }
}

.form-submit {
  padding: var(--padding) 0;
  width: var(--maxWidthField);
  @media (max-width: 767px) {
    padding: var(--padding);
    width: 100%;
  }
}

.form-submit .button {
  @media (max-width: 767px) {
    max-width: 100%;
  }
}

/* Button */
.button {
  height: 48px;
  padding: 0px 10px;
  border-radius: 8px;
  border: 0px;
  color: var(--whiteColor);
  background: var(--secondaryColor);
  width: 100%;
  max-width: var(--maxWidthField);
  font-family: inherit;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.button--small {
  height: 40px;
  font-size: 14px;
  line-height: 21px;
}

.button:disabled {
  background-color: var(--backgroundDisabled);
  color: var(--fontColorDisabled);
}

.button:hover:not(:disabled) {
  cursor: pointer;
  background: var(--tertiaryColor);
}

.button--link {
  background: none;
  color: var(--secondaryColor);
}

.button--link:hover {
  background: none !important;
}

/* Card */

.card {
  background: white;
  border-radius: 24px;
  padding: 30px;
  box-shadow: 0px 2px 14px 0px #EAEEF6;
}


/* Fonts */

.fs-xl {
  font-size: 32px;
  line-height: 44px;
  font-family: inherit;
  color: var(--fontColor);

  @media (max-width: 767px) {
    font-size: 21px;
    line-height: 32px;
  }
}

.fs-l {
  font-size: 21px;
  line-height: 32px;
  font-family: inherit;
  color: var(--fontColor);

  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 24px;
  }
}

.fs-m {
  font-size: 16px;
  line-height: 24px;
  font-family: inherit;
  color: var(--fontColor);

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 21px;
  }
}

.fs-sm {
  font-size: 14px;
  line-height: 21px;
  font-family: inherit;
  color: var(--fontColor);

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 21px;
  }
}

.fs-s {
  font-size: 12px;
  line-height: 16px;
  font-family: inherit;
  color: var(--fontColor);

  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 16px;
  }
}

.fc-error {
  color: var(--errorColor) !important;
}

.fc-success {
  color: var(--successColor) !important;
}

.fc-white {
  color: var(--whiteColor) !important;
}

.fc-secondary {
  color: var(--fontSecondaryColor) !important;
}

.fw-600 {
  font-weight: 600;
}

.text-center {
  text-align: center;
}

.text-uppercase {
  text-transform: uppercase;
}

.label-input {
  font-size: 12px;
  line-height: 16px;
  font-family: inherit;
  color: var(--fontColor);
  font-weight: 600;
  margin-bottom: 4px;

  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 16px;
  }
}

.label-error {
  font-size: 12px;
  line-height: 16px;
  font-family: inherit;
  color: var(--errorColor);
  margin-top: 4px;

  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 16px;
  }
}

/* Spacing */

.mt-4 {
  margin-top: 4px;
}

.mb-4 {
  margin-bottom: 4px;
}
`,At=Et,Tt=`:host {
  --borderColor: #ccd4e5;
  --whiteColor: #ffffff;
  --fontColor: #1d2c4d;
  --fontSecondaryColor: #526080;
  --errorColor: #dd3631;
  --successColor: #0f8837;
  --backgroundDisabled: #eaeef6;
  --fontColorDisabled: #afb8cc;
  --maxWidthField: 350px;
  --heightField: 40px;
  --rowGap: 24px;
  --padding: 48px;
  --hoverBackground: #f3f4f9;

  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;

  /* Config Theme */
  --primaryColor: transparent;
  --secondaryColor: #7636fc;
  --tertiaryColor: #572bb6;
  --backgroundColor: transparent;

  @media (max-width: 767px) {
    --maxWidthField: 100%;
    --rowGap: 16px;
    --padding: 16px;
  }
}

:host > div {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
}

.loading {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading p {
  padding-top: 200px;
  font-weight: bold;
  color: #243760;
}

.lds-ellipsis {
  width: 160px;
  height: 100px;
  display: inline-block;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #243760;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
  left: 20px;
  animation: lds-ellipsis1 0.45s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 20px;
  animation: lds-ellipsis2 0.45s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: calc(20px + 48px);
  animation: lds-ellipsis2 0.45s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: calc(20px + 48px + 48px);
  animation: lds-ellipsis3 0.45s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(48px, 0);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
`,Wt=Tt,Nt=class{watchOperationId(n){c.operationId=n}watchLoaded(n){n||this.workflowHandleEvent(b.loaded)}watchComponents(n){if(n){c.components=n;const e=n[u.tracking],t=n[u.flow],i=n[u.landing];if(this.getComponents(),t&&!this.disabled){const r=t.parameters;this.flowService=new kt({apiUrl:r.apiUrl,apiKey:r.apiKey,source:r.source,operationId:this.operationId}),this.operationId?this.initSesion():this.initFlow()}if(i){if(this.disabled)return!1;this.landingParameters=i.parameters,this.widgetService=new Ct({apiKey:this.landingApiKey,apiUrl:this.landingParameters.apiUrl,tenantId:this.tenantId}),c.tenantId=this.tenantId,this.trackingService=new B({authUrl:`${this.landingParameters.apiUrl}/auth/realms/inphinite/protocol/openid-connect/token`,apiKey:this.landingApiKey,trackingUrl:`${this.landingParameters.apiUrl}/trail/event`,trackingUrlAssets:`${this.landingParameters.apiUrl}/trail/asset`,tenantId:this.tenantId,customerId:this.customerId||d(),type:this.type||A.onboarding,bundlePath:this.bundlePath,operationId:this.operationId,landing:!0}),this.autoInitTracking?this.disabled||this.qr?c.loading=!1:this.initTracking():c.loading=!1}e&&!t&&(this.trackingParameters=e.parameters,c.tenantId=this.tenantId||this.trackingParameters.tenantId,this.trackingService=new B({authUrl:`${this.trackingParameters.apiUrl}/auth/realms/inphinite/protocol/openid-connect/token`,apiKey:this.trackingParameters.apiKey,clientId:this.trackingParameters.clientId,clientSecret:this.trackingParameters.clientSecret,trackingUrl:`${this.trackingParameters.apiUrl}/api/tracking/events`,trackingUrlAssets:`${this.trackingParameters.apiUrl}/api/assets/`,tenantId:this.tenantId||this.trackingParameters.tenantId,customerId:this.customerId||d(),type:this.type||A.onboarding,bundlePath:this.bundlePath,operationId:this.operationId}),this.autoInitTracking?this.disabled?c.loading=!1:this.initTracking():c.loading=!1),(!e&&!t&&!i||this.disabled)&&(this.operationId=this.operationId||d(),this.sessionId=d(),c.loading=!1,this.emitOperationId.emit(this.operationId),this.emitSessionId.emit(this.sessionId),this.emitData.emit({operationId:this.operationId,extraData:null,sessionId:this.sessionId})),i&&this.emitData.emit({operationId:this.operationId,extraData:null,sessionId:this.sessionId})}}constructor(n){tt(this,n),this.emitExtraData=I(this,"emitExtraData"),this.emitOperationId=I(this,"emitOperationId"),this.emitSessionId=I(this,"emitSessionId"),this.emitData=I(this,"emitData"),this.emitError=I(this,"emitError"),this.emitWorkflowEvent=I(this,"emitWorkflowEvent"),this.desktopView=void 0,this.customerId=void 0,this.apikey=void 0,this.type=A.onboarding,this.steps=void 0,this.disabled=void 0,this.bundlePath=void 0,this.workflow=void 0,this.theme=void 0,this.language=rt.es,this.debug=!1,this.dev=!1,this.operationId=void 0,this.autoInitWorkflow=!0,this.autoInitTracking=!0,this.tenantId=void 0,this.qr=void 0,this.qrExtraParams=void 0,this.waitRequest=!1,this.landingApiKey=void 0,this.loading=!0,this.sessionId=void 0,this.components=void 0,this.error=void 0,this.trackingParameters=void 0,this.landingParameters=void 0,this.isLoadTracking=!1,this.trackingService=void 0,this.flowService=void 0,this.widgetService=void 0,this.apikey?this.securityService=new wt:console.warn("ApiKey prop is required")}async initSesion(){const n=await this.flowService.session({customerId:this.customerId,sessionId:this.flowService.sessionId});this.workflow||(this.workflow=n.config.workflow.definition),this.theme||this.updateTheme(n.config.theme),this.isLoadTracking=!0,c.loading=!1}async initFlow(){try{const n=await this.flowService.start({customerId:this.customerId,sessionId:this.flowService.sessionId});this.operationId=n.operationId,this.isLoadTracking=!0,c.loading=!1}catch(n){this.emitError.emit({message:n,statusCode:500})}}async updateTheme(n){const e=["primaryColor","secondaryColor","tertiaryColor","backgroundColor"];for(const t of e)n[t]&&this.host.style.setProperty(`--${t}`,n[t]);if(n.fontName){const t=document.querySelector("link[data-theme-font]");t&&t.remove();const i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("href",`https://fonts.googleapis.com/css2?family=${n.fontName}:wght@400;600&display=swap`),i.setAttribute("data-theme-font","true"),document.head.appendChild(i),this.host.style.fontFamily=n.fontName}}async haveTracking(){}async initExternalTracking(){if(this.disabled||this.flowService)return!0;for(;!this.trackingService;)await new Promise(n=>setTimeout(n,100));await this.initTracking()}async initTracking(){var n,e,t,i;try{if(!this.trackingService&&this.flowService)return!1;const r=this.components.landing;r||await this.trackingService.authenticate();const{operationId:s,sessionId:o}=await this.trackingService.trackingStart(this.steps,this.customerId);this.operationId=this.operationId||s,c.operationId=this.operationId||s,this.sessionId=o,this.isLoadTracking=!0,this.emitOperationId.emit(this.operationId),this.emitSessionId.emit(o),c.loading=!1,!r&&this.securityService.generateExtraData({customerId:this.customerId,operationId:s,sessionId:o,trackingFamily:this.type,trackingOptions:{tenantId:this.tenantId||((n=this.trackingParameters)===null||n===void 0?void 0:n.tenantId),clientId:(e=this.trackingParameters)===null||e===void 0?void 0:e.clientId,clientSecret:(t=this.trackingParameters)===null||t===void 0?void 0:t.clientSecret,authUrl:(i=this.trackingParameters)===null||i===void 0?void 0:i.apiUrl}}).then(a=>{this.emitExtraData.emit(a),this.emitData.emit({operationId:s,extraData:a,sessionId:o})})}catch(r){this.workflowHandleEvent(b.error,null,r)}}async componentWillLoad(){c.bundlePath=this.bundlePath,c.desktopView=this.desktopView,c.debug=this.debug,c.initWorkflow=this.autoInitWorkflow,c.dev=this.dev,c.wait=this.waitRequest,c.loading=!0,z("loading",e=>{this.loading=e}),z("operationId",e=>{this.operationId=e,this.emitOperationId.emit(e)}),this.qr?c.initTracking=!1:c.initTracking=this.autoInitTracking,this.language&&(c.language=this.language,ct(this.language)),this.theme&&this.updateTheme(this.theme),D.locale=this.language,this.licenseService=new St,this.debug&&this.licenseService.checkOrigin(this.apikey).then(e=>{console.log("origin-request",e)});const n=await this.licenseService.getLicense(this.apikey).catch(e=>(this.error=e.message,!1));this.securityService.init(async()=>{n&&await this.securityService.validLicense(n).catch(()=>{this.error=G.LICENSE_INVALID})===st.valid&&(this.components=await this.securityService.getEnabledComponents(n))})}checkTracking(){return new Promise(n=>{const e=setInterval(()=>{this.isLoadTracking&&(n(!0),clearInterval(e))},3)})}async workflowHandleEvent(n,e,t){this.emitWorkflowEvent.emit({type:n,stepId:e,data:t}),nt.currentState={type:n,stepId:e}}async sendError(n){this.emitError.emit(n)}async loadTracking(){return this.disabled?!0:this.checkTracking()}async trackingEvent(n,e){this.trackingService&&this.trackingService.trackingEvent(n,e).catch(t=>{console.log("error",t)})}async flowEvent(n,e){return this.flowService?this.flowService.event(n,e,this.operationId):Promise.resolve(null)}async getComponents(){return this.components}async haveTrackingService(){return new Promise(n=>{const e=setInterval(()=>{this.widgetService&&(n(!0),clearInterval(e)),this.flowService&&(n(!0),clearInterval(e)),this.disabled&&(n(!1),clearInterval(e)),this.trackingService&&(n(!0),clearInterval(e))},3)})}async haveFlowService(){return!!this.flowService}async generateStepId(){return this.trackingService&&this.trackingService.generateStepId()}async trackingAsset(n,e,t,i){return this.trackingService?this.trackingService.trackingAsset(n,e,t,i):Promise.resolve(!0)}async trackingStatus(n,e,t,i){this.trackingService&&this.trackingService.trackingStatus(n,e,t,i)}async trackingStepSuccess(n,e){this.trackingService&&this.trackingService.trackingStepSuccess(n,e)}async trackingTerms(){this.trackingService&&this.trackingTerms()}async trackingSignature(n){this.trackingService&&this.operationId&&this.trackingService.trackingSignature(n,this.operationId)}async getOperationId(){return this.operationId}async callReniec(n){this.operationId&&this.sessionId&&this.widgetService&&this.widgetService.sendReniec(n,this.operationId,this.sessionId)}async sendSelphid(n){return this.operationId&&this.sessionId&&this.widgetService?this.widgetService.sendSelphid(n,this.operationId,this.sessionId):Promise.resolve(!0)}async sendSelphi(n){return this.operationId&&this.sessionId&&this.widgetService?this.widgetService.sendSelphi(n,this.operationId,this.sessionId):Promise.resolve(!0)}async sendVideoContracting(){this.operationId&&this.sessionId&&this.widgetService&&this.widgetService.sendVideoContracting(this.operationId,this.sessionId)}async callResults(){return this.operationId&&this.widgetService?this.widgetService.getResults(this.operationId):null}async getWorkflowConfiguration(){return{workflow:this.workflow,operationId:this.operationId,bundlePath:this.bundlePath,qr:this.qr}}render(){const n=p("facephi-workflow-provider",{key:"261fc1229f61b8778ba14f0401f2a8c02cdb066f",workflow:this.workflow,bundlePath:this.bundlePath,onWorkflowStarted:e=>this.workflowHandleEvent(b.start,e.detail.stepId),onWorkflowFinished:e=>this.workflowHandleEvent(b.finish,e.detail.stepId),onWorkflowChangeStep:e=>this.workflowHandleEvent(b.changeStep,e.detail.stepId,e.detail.data),qr:this.qr,qrParameters:this.qrExtraParams,operationId:this.operationId,style:{display:this.loading?"none":"block"}});return p("div",{key:"9e038b153ec4ec87f5946340ecd13feb88000f7f"},this.loading?p(xt,{text:c.loadingText,show:!0}):this.error?p("error-view",{text:this.error}):this.workflow&&c.initWorkflow?n:p("slot",null))}get host(){return et(this)}static get watchers(){return{operationId:["watchOperationId"],loading:["watchLoaded"],components:["watchComponents"]}}};Nt.style=At+Wt;export{Nt as facephi_sdk_provider};

(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],d=0,l=[];d<u.length;d++)a=u[d],o[a]&&l.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0861b74c":"34f31662","chunk-7e411bb7":"a8d8e67a","chunk-d2070d4e":"7ef4b957"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0861b74c":1,"chunk-7e411bb7":1,"chunk-d2070d4e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0861b74c":"e3dac487","chunk-7e411bb7":"846fbb24","chunk-d2070d4e":"149bcfab"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=u(e),s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/static_pages/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a5d":function(e,t,n){var r={"./index.vue":["1e4b","chunk-d2070d4e"],"./tokenDetail/components/popupTokenSelector.vue":["3914","chunk-0861b74c"],"./tokenDetail/tokenDetail.vue":["3270","chunk-7e411bb7"]};function a(e){var t=r[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(r)},a.id="1a5d",e.exports=a},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"initEnv",function(){return y});n("a481"),n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],u={name:"App",data:function(){return{}},computed:{},watch:{}},c=u,s=(n("5c0b"),n("2877")),d=Object(s["a"])(c,o,i,!1,null,null,null);d.options.__file="App.vue";var l=d.exports,f=n("8c4f"),p=function(e){return function(){return n("1a5d")("./".concat(e,".vue"))}},h=[{path:"/index",component:p("index"),meta:{title:"RREx",needAuth:!1}},{path:"/tokenDetail",component:p("tokenDetail/tokenDetail"),meta:{title:"币种介绍"}},{path:"*",redirect:"/index"},{path:"/",redirect:"/index"}],m={appName:"pages",domain:"",getBcvConfig:"/api/hb/getBcvConfig",getHomeStatus:"/api/otcApply/getHomeStatus"},v=m;a["default"].use(f["a"]);var g=new f["a"]({mode:"history",base:"/".concat(v.appName),routes:h,scrollBehavior:function(e,t,n){return{x:0,y:0}}}),b=n("2f62"),y=(n("4917"),function(e){var t={},n=window.navigator.userAgent;n.indexOf("Android")>-1||n.indexOf("Adr")>-1?t.platform="android":n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)?t.platform="ios":t.platform="desktop";var r=n.match(/rrex\/(ios|android)\/(\d+\.\d+\.\d+)(\/lang\/(\w{1,}))?/);r?(t.isInRrexApp=!0,t.appPlatform=r[1],t.appVersion=r[2],t.appLanguage=r[4]?r[4]:"cn"):t.isInRrexApp=!1,/MicroMessenger/i.test(n)?t.isInWx=!0:t.isInWx=!1,e.env=t});a["default"].use(b["a"]);var k=new b["a"].Store({mutations:r,state:{env:null}}),w=n("8daa"),x=n("76a0"),T=n.n(x),O=(n("aa35"),n("28a5"),n("6b54"),{getMatchedMetaValue:function(e,t){for(var n=e.length-1;n>=0;n--)if(e[n].meta&&e[n].meta[t])return e[n].meta[t]},setDocumentTitle:function(e){document.title=e},addCookie:function(e,t){var n=new Date;n.setTime(n.getTime()+2592e6),document.cookie="".concat(e,"=").concat(t,";expires=").concat(n.toGMTString(),";path=/")},hideTelephone:function(e){return e.substr(0,3)+"****"+e.substr(7)},getUrlRelativePath:function(){var e=location.href.toString(),t=e.split("//"),n=t[1].indexOf("/"),r=t[1].substring(n);return r},getVueRouterByHash:function(){var e=location.href.toString();return e.split("#")[1]},compareVersion:function(e,t){var n=e.split("."),r=t.split(".");return+n[0]>+r[0]?1:+n[0]<+r[0]?-1:+n[1]>+r[1]?1:+n[1]<+r[1]?-1:+n[2]>+r[2]?1:+n[2]<+r[2]?-1:0}}),E=O,j=E;a["default"].use(T.a),a["default"].prototype.$http=w["a"],a["default"].prototype.$utils=j,a["default"].prototype.$api=v,a["default"].config.productionTip=!1,document.body.addEventListener("touchstart",function(){}),k.commit("initEnv"),g.afterEach(function(e,t){j.getMatchedMetaValue(e.matched,"title")&&j.setDocumentTitle(j.getMatchedMetaValue(e.matched,"title"))}),g.onError(function(e){e.message&&e.message.toLowerCase().indexOf("loading chunk")>=0?setTimeout(function(){var e=g.history.current.fullPath;g.replace(e)},1e3):(console.log(e),T.a.Toast(e))}),new a["default"]({router:g,store:k,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("8fba"),a=n.n(r);a.a},"8daa":function(e,t,n){"use strict";var r=n("795b"),a=n.n(r),o=(n("cadf"),n("551c"),n("097d"),n("bc3a")),i=n.n(o),u=n("76a0"),c=n.n(u),s=i.a.create({baseURL:"https://api.rrex.com"}),d=function(e){return 101===e.data.code?(c.a.Toast("未登录"),a.a.reject(new Error("未登录"))):0===e.data.code?(c.a.Toast(e.data.msg),a.a.reject(e.data.msg)):e.data},l=function(e){return e.response?c.a.Toast("服务器不稳定，请重试(".concat(e.response.status,")")):c.a.Toast("网络慢，请重试(".concat(e,")")),a.a.reject(e)};s.interceptors.response.use(d,l),t["a"]=s},"8fba":function(e,t,n){}});
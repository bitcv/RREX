(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e411bb7","chunk-0861b74c"],{"0666":function(t,e,r){"use strict";var n=r("44392"),o=r.n(n);o.a},"093d":function(t,e,r){"use strict";var n=r("c5cc"),o=r.n(n);o.a},"0a49":function(t,e,r){var n=r("9b43"),o=r("626a"),i=r("4bf8"),a=r("9def"),c=r("cd1c");t.exports=function(t,e){var r=1==t,s=2==t,u=3==t,l=4==t,f=6==t,h=5==t||f,p=e||c;return function(e,c,v){for(var d,y,m=i(e),g=o(m),w=n(c,v,3),b=a(g.length),x=0,k=r?p(e,b):s?p(e,0):void 0;b>x;x++)if((h||x in g)&&(d=g[x],y=w(d,x,m),t))if(r)k[x]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return x;case 2:k.push(d)}else if(l)return!1;return f?-1:u||l?l:k}}},1169:function(t,e,r){var n=r("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"1af6":function(t,e,r){var n=r("63b6");n(n.S,"Array",{isArray:r("9003")})},"20fd":function(t,e,r){"use strict";var n=r("d9f6"),o=r("aebd");t.exports=function(t,e,r){e in t?n.f(t,e,o(0,r)):t[e]=r}},3270:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-container"},[r("section",{staticClass:"token-selector",on:{click:t.showSelector}},[r("img",{staticClass:"logo",attrs:{src:t.selectedCurrency.icon,alt:""}}),r("div",{staticClass:"token-info"},[r("p",{staticClass:"symbol"},[t._v(t._s(t.selectedCurrency.name))]),r("p",{staticClass:"fullname"},[t._v(t._s(t.selectedCurrency.full_name))])]),r("p",{staticClass:"icon-arrow"})]),r("popupTokenSelector",{attrs:{status:t.selectorStatus,tokenList:t.currencyList,selectedTokenName:t.selectedCurrency.name},on:{closePopup:function(e){t.selectorStatus=!1},switchToken:t.switchToken}}),t.loading?t._e():r("section",{staticClass:"token-detail"},[r("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.desc)}}),r("div",{staticClass:"detail-info"},[r("p",{staticClass:"field"},[t._v("官方网址: ")]),r("a",{staticClass:"value",attrs:{href:t.website}},[t._v(t._s(t.website))])]),r("div",{staticClass:"detail-info"},[r("p",{staticClass:"field"},[t._v("区块查询: ")]),r("a",{staticClass:"value",attrs:{href:t.explorer}},[t._v(t._s(t.explorer))])])])],1)},o=[],i=(r("7f7f"),r("7514"),r("96cf"),r("795b")),a=r.n(i);function c(t,e,r,n,o,i,c){try{var s=t[i](c),u=s.value}catch(l){return void r(l)}s.done?e(u):a.a.resolve(u).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new a.a(function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,s,"next",t)}function s(t){c(i,n,o,a,s,"throw",t)}a(void 0)})}}var u=r("a745"),l=r.n(u);function f(t){if(l()(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var h=r("774e"),p=r.n(h),v=r("c8bb"),d=r.n(v);function y(t){if(d()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return p()(t)}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function g(t){return f(t)||y(t)||m()}var w=r("8daa");function b(t){return w["a"].post("/currency/intro",{tokens:g(t)})}function x(t){return w["a"].post("/currency/all")}var k={getCurrencyDetail:b,getCurrencyList:x},L=r("3914"),_={data:function(){return{currencyList:[],selectedCurrency:{},desc:"",website:"",explorer:"",loading:!0,selectorStatus:!1}},components:{popupTokenSelector:L["default"]},created:function(){var t=s(regeneratorRuntime.mark(function t(){var e,r,n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.getCurrencyList();case 3:if(e=t.sent,r=e.data,this.currencyList=r,!this.$route.query.token){t.next=13;break}if(n=this.$route.query.token,o=r.find(function(t){return t.name===n}),!o){t.next=13;break}return this.selectedCurrency=o,this.getDetail(),t.abrupt("return");case 13:this.selectedCurrency=this.currencyList[0],this.getDetail(),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](0),console.error(t.t0);case 20:case"end":return t.stop()}},t,this,[[0,17]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{showSelector:function(){this.selectorStatus=!0},switchToken:function(t){this.selectedCurrency=t,this.getDetail()},getDetail:function(){var t=s(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,k.getCurrencyDetail([this.selectedCurrency.name]);case 4:e=t.sent,r=e.data,n=this.$store.state.locale,this.desc=r[0].intro[n]||r[0].intro.cn,this.website=r[0].website,this.explorer=r[0].explorer,this.loading=!1,t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),console.error(t.t0);case 16:case"end":return t.stop()}},t,this,[[0,13]])}));function e(){return t.apply(this,arguments)}return e}()}},C=_,E=(r("0666"),r("2877")),A=Object(E["a"])(C,n,o,!1,null,"75701a74",null);A.options.__file="tokenDetail.vue";e["default"]=A.exports},3914:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"popup",on:{touchmove:function(t){t.preventDefault()}}},[r("transition",{attrs:{name:"slideInUp"},on:{"before-enter":t.beforeEnter,"after-leave":t.afterLeave}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"popup-content-wrap"},[r("div",{staticClass:"popup-close",on:{click:t.closePopup}}),r("div",{staticClass:"popup-content"},[r("h2",{staticClass:"title"},[t._v("请选择币种")]),r("ul",{staticClass:"token-list"},t._l(t.tokenList,function(e,n){return r("li",{key:n,staticClass:"token-item",on:{click:function(r){t.switchToken(e)}}},[r("img",{staticClass:"logo",attrs:{src:e.icon,alt:""}}),r("p",{staticClass:"symbol"},[t._v(t._s(e.name))]),r("i",{staticClass:"status",class:{active:t.selectedTokenName===e.name}})])}),0)])])])],1)},o=[],i={name:"popupTokenSelector",data:function(){return{wrapStatus:!1}},props:{status:Boolean,tokenList:Array,selectedTokenName:String},computed:{},mounted:function(){},methods:{beforeEnter:function(){this.wrapStatus=!0},afterLeave:function(){this.wrapStatus=!1},closePopup:function(){this.$emit("closePopup")},switchToken:function(t){this.$emit("switchToken",t),this.$emit("closePopup")}}},a=i,c=(r("093d"),r("2877")),s=Object(c["a"])(a,n,o,!1,null,"21c8113b",null);s.options.__file="popupTokenSelector.vue";e["default"]=s.exports},44392:function(t,e,r){},"549b":function(t,e,r){"use strict";var n=r("d864"),o=r("63b6"),i=r("241e"),a=r("b0dc"),c=r("3702"),s=r("b447"),u=r("20fd"),l=r("7cd6");o(o.S+o.F*!r("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,o,f,h=i(t),p="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,y=void 0!==d,m=0,g=l(h);if(y&&(d=n(d,v>2?arguments[2]:void 0,2)),void 0==g||p==Array&&c(g))for(e=s(h.length),r=new p(e);e>m;m++)u(r,m,y?d(h[m],m):h[m]);else for(f=g.call(h),r=new p;!(o=f.next()).done;m++)u(r,m,y?a(f,d,[o.value,m],!0):o.value);return r.length=m,r}})},"54a1":function(t,e,r){r("6c1c"),r("1654"),t.exports=r("95d5")},7514:function(t,e,r){"use strict";var n=r("5ca1"),o=r("0a49")(5),i="find",a=!0;i in[]&&Array(1)[i](function(){a=!1}),n(n.P+n.F*a,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(i)},"774e":function(t,e,r){t.exports=r("d2d5")},"7f7f":function(t,e,r){var n=r("86cc").f,o=Function.prototype,i=/^\s*function ([^ (]*)/,a="name";a in o||r("9e1e")&&n(o,a,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},9003:function(t,e,r){var n=r("6b4c");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"95d5":function(t,e,r){var n=r("40c3"),o=r("5168")("iterator"),i=r("481b");t.exports=r("584a").isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(n(e))}},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=b;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",d={},y={};y[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(P([])));g&&g!==n&&o.call(g,a)&&(y=g);var w=_.prototype=k.prototype=Object.create(y);L.prototype=w.constructor=_,_.constructor=L,_[s]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},C(E.prototype),E.prototype[c]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,r,n){var o=new E(b(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},C(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function b(t,e,r,n){var o=e&&e.prototype instanceof k?e:k,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=A(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function k(){}function L(){}function _(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(r,n,i,a){var c=x(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,a)})}a(c.arg)}var r;function n(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=n}function A(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return N()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=x(t,e,r);if("normal"===s.type){if(n=r.done?v:h,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}function S(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a745:function(t,e,r){t.exports=r("f410")},c5cc:function(t,e,r){},c8bb:function(t,e,r){t.exports=r("54a1")},cd1c:function(t,e,r){var n=r("e853");t.exports=function(t,e){return new(n(t))(e)}},d2d5:function(t,e,r){r("1654"),r("549b"),t.exports=r("584a").Array.from},e853:function(t,e,r){var n=r("d3f4"),o=r("1169"),i=r("2b4c")("species");t.exports=function(t){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},f410:function(t,e,r){r("1af6"),t.exports=r("584a").Array.isArray}}]);
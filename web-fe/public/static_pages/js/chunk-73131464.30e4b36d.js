(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73131464"],{"014b":function(t,n,e){"use strict";var r=e("e53d"),o=e("07e3"),i=e("8e60"),c=e("63b6"),a=e("9138"),f=e("ebfd").KEY,u=e("294c"),s=e("dbdb"),l=e("45f2"),p=e("62a0"),d=e("5168"),b=e("ccb9"),y=e("6718"),g=e("47ee"),h=e("9003"),w=e("e4ae"),v=e("f772"),m=e("36c3"),S=e("1bc3"),O=e("aebd"),x=e("a159"),k=e("0395"),j=e("bf0b"),P=e("d9f6"),E=e("c3a1"),J=j.f,N=P.f,A=k.f,T=r.Symbol,L=r.JSON,B=L&&L.stringify,I="prototype",R=d("_hidden"),$=d("toPrimitive"),_={}.propertyIsEnumerable,C=s("symbol-registry"),F=s("symbols"),U=s("op-symbols"),D=Object[I],H="function"==typeof T,M=r.QObject,K=!M||!M[I]||!M[I].findChild,W=i&&u(function(){return 7!=x(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=J(D,n);r&&delete D[n],N(t,n,e),r&&t!==D&&N(D,n,r)}:N,q=function(t){var n=F[t]=x(T[I]);return n._k=t,n},z=H&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},Y=function(t,n,e){return t===D&&Y(U,n,e),w(t),n=S(n,!0),w(e),o(F,n)?(e.enumerable?(o(t,R)&&t[R][n]&&(t[R][n]=!1),e=x(e,{enumerable:O(0,!1)})):(o(t,R)||N(t,R,O(1,{})),t[R][n]=!0),W(t,n,e)):N(t,n,e)},G=function(t,n){w(t);var e,r=g(n=m(n)),o=0,i=r.length;while(i>o)Y(t,e=r[o++],n[e]);return t},Q=function(t,n){return void 0===n?x(t):G(x(t),n)},V=function(t){var n=_.call(this,t=S(t,!0));return!(this===D&&o(F,t)&&!o(U,t))&&(!(n||!o(this,t)||!o(F,t)||o(this,R)&&this[R][t])||n)},X=function(t,n){if(t=m(t),n=S(n,!0),t!==D||!o(F,n)||o(U,n)){var e=J(t,n);return!e||!o(F,n)||o(t,R)&&t[R][n]||(e.enumerable=!0),e}},Z=function(t){var n,e=A(m(t)),r=[],i=0;while(e.length>i)o(F,n=e[i++])||n==R||n==f||r.push(n);return r},tt=function(t){var n,e=t===D,r=A(e?U:m(t)),i=[],c=0;while(r.length>c)!o(F,n=r[c++])||e&&!o(D,n)||i.push(F[n]);return i};H||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===D&&n.call(U,e),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),W(this,t,O(1,e))};return i&&K&&W(D,t,{configurable:!0,set:n}),q(t)},a(T[I],"toString",function(){return this._k}),j.f=X,P.f=Y,e("6abf").f=k.f=Z,e("355d").f=V,e("9aa9").f=tt,i&&!e("b8e3")&&a(D,"propertyIsEnumerable",V,!0),b.f=function(t){return q(d(t))}),c(c.G+c.W+c.F*!H,{Symbol:T});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)d(nt[et++]);for(var rt=E(d.store),ot=0;rt.length>ot;)y(rt[ot++]);c(c.S+c.F*!H,"Symbol",{for:function(t){return o(C,t+="")?C[t]:C[t]=T(t)},keyFor:function(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var n in C)if(C[n]===t)return n},useSetter:function(){K=!0},useSimple:function(){K=!1}}),c(c.S+c.F*!H,"Object",{create:Q,defineProperty:Y,defineProperties:G,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),L&&c(c.S+c.F*(!H||u(function(){var t=T();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))})),"JSON",{stringify:function(t){var n,e,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(e=n=r[1],(v(n)||void 0!==t)&&!z(t))return h(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!z(n))return n}),r[1]=n,B.apply(L,r)}}),T[I][$]||e("35e8")(T[I],$,T[I].valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"0395":function(t,n,e){var r=e("36c3"),o=e("6abf").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(n){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(r(t))}},1909:function(t,n,e){"use strict";var r=e("dc54"),o=e.n(r);o.a},"355d":function(t,n){n.f={}.propertyIsEnumerable},"47ee":function(t,n,e){var r=e("c3a1"),o=e("9aa9"),i=e("355d");t.exports=function(t){var n=r(t),e=o.f;if(e){var c,a=e(t),f=i.f,u=0;while(a.length>u)f.call(t,c=a[u++])&&n.push(c)}return n}},"4d38":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-container"},[e("pageLoading")],1)},o=[],i=(e("cadf"),e("551c"),e("097d"),e("8daa")),c=e("f499"),a=e.n(c),f=e("5d58"),u=e.n(f),s=e("67bb"),l=e.n(s);function p(t){return p="function"===typeof l.a&&"symbol"===typeof u.a?function(t){return typeof t}:function(t){return t&&"function"===typeof l.a&&t.constructor===l.a&&t!==l.a.prototype?"symbol":typeof t},p(t)}function d(t){return d="function"===typeof l.a&&"symbol"===p(u.a)?function(t){return p(t)}:function(t){return t&&"function"===typeof l.a&&t.constructor===l.a&&t!==l.a.prototype?"symbol":p(t)},d(t)}var b=e("4360"),y=e("76a0"),g=b["a"].state.env;function h(){return!!g.isInRrexApp||(Object(y["Toast"])("操作失败：请在 RREx APP 中使用此功能"),!1)}function w(t,n){return!!h()&&("object"===d(n)&&(n=a()(n)),"android"==g.appPlatform?window.JSBridge&&window.JSBridge[t]?(void 0===n?window.JSBridge[t]():window.JSBridge[t](n),!0):(Object(y["Toast"])("操作失败：未找到 ".concat(t," 方法")),!1):"ios"==g.appPlatform?window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers[t]&&window.webkit.messageHandlers[t].postMessage?(void 0===n&&(n=""),window.webkit.messageHandlers[t].postMessage(n),!0):(Object(y["Toast"])("操作失败：未找到 ".concat(t," 方法")),!1):void Object(y["Toast"])("操作失败：环境不正确"))}function v(t){var n=w("getUserToken");n&&(window.JSBridge||(window.JSBridge={}),window.JSBridge.getUserTokenCb=t)}function m(t){w("download",t)}function S(t){window.location.href="rrex://".concat(t)}var O={getUserToken:v,download:m,goUrl:S},x={name:"webLogin",data:function(){return{env:this.$utils.getEnv(),rurl:this.$route.query.rurl||"/"}},components:{},created:function(){this.env.isInRrexApp?this.invokeRrexAppLogin():this.$toast("请在 RREx APP 中打开此页面"),this.$route.query.test&&this.rrexLoginCheck(localStorage.getItem("token"))},methods:{invokeRrexAppLogin:function(){O.getUserToken(this.rrexLoginCheck)},rrexLoginCheck:function(t){var n=this;i["a"].post("/auth/detail",{},{headers:{Authorization:t}}).then(function(e){101!=e.data.code?(n.$store.commit("logIn",t),n.goBeforeLoginUrl()):n.$toast("登录失败: ".concat(e.data.msg))}).catch(function(t){n.$toast("登录失败: ".concat(t))})},goBeforeLoginUrl:function(){window.location.href=this.rurl}}},k=x,j=(e("1909"),e("2877")),P=Object(j["a"])(k,r,o,!1,null,"2e150d12",null);P.options.__file="webLogin.vue";n["default"]=P.exports},"5d58":function(t,n,e){t.exports=e("d8d6")},6718:function(t,n,e){var r=e("e53d"),o=e("584a"),i=e("b8e3"),c=e("ccb9"),a=e("d9f6").f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||a(n,t,{value:c.f(t)})}},"67bb":function(t,n,e){t.exports=e("f921")},"69d3":function(t,n,e){e("6718")("asyncIterator")},"6abf":function(t,n,e){var r=e("e6f3"),o=e("1691").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},"765d":function(t,n,e){e("6718")("observable")},9003:function(t,n,e){var r=e("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"9aa9":function(t,n){n.f=Object.getOwnPropertySymbols},a21f:function(t,n,e){var r=e("584a"),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},bf0b:function(t,n,e){var r=e("355d"),o=e("aebd"),i=e("36c3"),c=e("1bc3"),a=e("07e3"),f=e("794b"),u=Object.getOwnPropertyDescriptor;n.f=e("8e60")?u:function(t,n){if(t=i(t),n=c(n,!0),f)try{return u(t,n)}catch(e){}if(a(t,n))return o(!r.f.call(t,n),t[n])}},ccb9:function(t,n,e){n.f=e("5168")},d8d6:function(t,n,e){e("1654"),e("6c1c"),t.exports=e("ccb9").f("iterator")},dc54:function(t,n,e){},ebfd:function(t,n,e){var r=e("62a0")("meta"),o=e("f772"),i=e("07e3"),c=e("d9f6").f,a=0,f=Object.isExtensible||function(){return!0},u=!e("294c")(function(){return f(Object.preventExtensions({}))}),s=function(t){c(t,r,{value:{i:"O"+ ++a,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[r].w},d=function(t){return u&&b.NEED&&f(t)&&!i(t,r)&&s(t),t},b=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},f499:function(t,n,e){t.exports=e("a21f")},f921:function(t,n,e){e("014b"),e("c207"),e("69d3"),e("765d"),t.exports=e("584a").Symbol}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14811e2c"],{"0044":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"none"}})},o=[],i=(n("96cf"),n("3b8d")),a=(n("6f81"),n("1c48")),c={data:function(){return{result:{},captchaObj:null,interval:null}},created:function(){var t=this;this.init(),this.interval=setInterval((function(){t.init()}),29e4)},destroyed:function(){clearInterval(this.interval)},computed:{langForGeetest:function(){var t=this.$store.state.locale;switch(t){case"cn":t="zh-cn";break;case"en":t="en";break;default:t="en"}return t}},methods:{captchaHandler:function(t){var e=this;this.captchaObj=t,t.onReady((function(){e.$emit("onReady",e.captchaObj)})).onSuccess((function(){var n=t.getValidate();e.$emit("onSuccess",n)})).onClose((function(){e.$emit("onClose")})).onError((function(t){e.$emit("onError",t)}))},init:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a["a"].initGeetest();case 3:e=t.sent,n=e.data,window.initGeetest({gt:n.gt,challenge:n.challenge,offline:!n.success,new_captcha:n.new_captcha,product:"bind",width:"100%",lang:this.langForGeetest},this.captchaHandler),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.showErrMsg(t.t0.msg);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()}},s=c,u=n("2877"),l=Object(u["a"])(s,r,o,!1,null,null,null);e["a"]=l.exports},"4d26":function(t,e,n){"use strict";var r=n("8d53"),o=n.n(r);o.a},"6f81":function(t,e,n){"use strict";(function(t){n("a481");var e=n("7618");(function(n,r){"object"===Object(e["a"])(t)&&"object"===Object(e["a"])(t.exports)?t.exports=n.document?r(n,!0):function(t){if(!t.document)throw new Error("Geetest requires a window with a document");return r(t)}:r(n)})("undefined"!==typeof window?window:void 0,(function(t,n){if("undefined"===typeof t)throw new Error("Geetest requires browser environment");var r=t.document,o=t.Math,i=r.getElementsByTagName("head")[0];function a(t){this._obj=t}function c(t){var e=this;new a(t)._each((function(t,n){e[t]=n}))}a.prototype={_each:function(t){var e=this._obj;for(var n in e)e.hasOwnProperty(n)&&t(n,e[n]);return this}},c.prototype={api_server:"api.geetest.com",protocol:"http://",type_path:"/gettype.php",fallback_config:{slide:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"slide",slide:"/static/js/geetest.0.0.0.js"},fullpage:{static_servers:["static.geetest.com","dn-staticdown.qbox.me"],type:"fullpage",fullpage:"/static/js/fullpage.0.0.0.js"}},_get_fallback_config:function(){var t=this;return u(t.type)?t.fallback_config[t.type]:t.new_captcha?t.fallback_config.fullpage:t.fallback_config.slide},_extend:function(t){var e=this;new a(t)._each((function(t,n){e[t]=n}))}};var s=function(t){return"number"===typeof t},u=function(t){return"string"===typeof t},l=function(t){return"boolean"===typeof t},f=function(t){return"object"===Object(e["a"])(t)&&null!==t},p=function(t){return"function"===typeof t},d={},h={},m=function(){return parseInt(1e4*o.random())+(new Date).valueOf()},b=function(t,e){var n=r.createElement("script");n.charset="UTF-8",n.async=!0,n.onerror=function(){e(!0)};var o=!1;n.onload=n.onreadystatechange=function(){o||n.readyState&&"loaded"!==n.readyState&&"complete"!==n.readyState||(o=!0,setTimeout((function(){e(!1)}),0))},n.src=t,i.appendChild(n)},v=function(t){return t.replace(/^https?:\/\/|\/$/g,"")},g=function(t){return t=t.replace(/\/+/g,"/"),0!==t.indexOf("/")&&(t="/"+t),t},w=function(t){if(!t)return"";var e="?";return new a(t)._each((function(t,n){(u(n)||s(n)||l(n))&&(e=e+encodeURIComponent(t)+"="+encodeURIComponent(n)+"&")})),"?"===e&&(e=""),e.replace(/&$/,"")},y=function(t,e,n,r){e=v(e);var o=g(n)+w(r);return e&&(o=t+e+o),o},_=function(t,e,n,r,o){var i=function i(a){var c=y(t,e[a],n,r);b(c,(function(t){t?a>=e.length-1?o(!0):i(a+1):o(!1)}))};i(0)},j=function(e,n,r,o){if(f(r.getLib))return r._extend(r.getLib),void o(r);if(r.offline)o(r._get_fallback_config());else{var i="geetest_"+m();t[i]=function(e){"success"===e.status?o(e.data):e.status?o(r._get_fallback_config()):o(e),t[i]=void 0;try{delete t[i]}catch(n){}},_(r.protocol,e,n,{gt:r.gt,callback:i},(function(t){t&&o(r._get_fallback_config())}))}},O=function(t,e){var n={networkError:"网络错误"};if("function"!==typeof e.onError)throw new Error(n[t]);e.onError(n[t])},k=function(){return!!t.Geetest};k()&&(h.slide="loaded");var x=function(e,n){var r=new c(e);e.https?r.protocol="https://":e.protocol||(r.protocol=t.location.protocol+"//"),j([r.api_server||r.apiserver],r.type_path,r,(function(e){var o=e.type,i=function(){r._extend(e),n(new t.Geetest(r))};d[o]=d[o]||[];var a=h[o]||"init";"init"===a?(h[o]="loading",d[o].push(i),_(r.protocol,e.static_servers||e.domains,e[o]||e.path,null,(function(t){if(t)h[o]="fail",O("networkError",r);else{h[o]="loaded";for(var e=d[o],n=0,i=e.length;n<i;n+=1){var a=e[n];p(a)&&a()}d[o]=[]}}))):"loaded"===a?i():"fail"===a?O("networkError",r):"loading"===a&&d[o].push(i)}))};return t.initGeetest=x,x}))}).call(this,n("dd40")(t))},"8d53":function(t,e,n){},b2d7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box-container bind-mobile"},[n("div",{staticClass:"mobile-title__container"},[n("div",{staticClass:"mobile-title"},[t._v(t._s(t.$t("user.BindYourEmail")))])]),n("div",{staticClass:"form-container mobile-body"},[n("div",{staticClass:"form-item form-input form-input__btn"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-input__inner",attrs:{type:"text",placeholder:t.$t("user.Email")},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"form-item form-input form-input__btn"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-input__inner",attrs:{type:"text",placeholder:t.$t("user.VerificationCode")},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),120===t.countDown||0===t.countDown?n("button",{staticClass:"btn btn-submit",attrs:{type:"button"},on:{click:t.openGeetest}},[t._v(t._s(t.$t("user.Send")))]):n("button",{staticClass:"btn btn-submit",attrs:{type:"button",disabled:""}},[t._v(t._s(t.countDown)+" S")])]),n("div",{staticClass:"form-submit"},[n("button",{staticClass:"btn btn-submit",attrs:{type:"button"},on:{click:t.bindEmail}},[t._v(t._s(t.$t("user.ConfirmBinding")))])])]),n("AppGeetest",{on:{onReady:t.handleReady,onSuccess:t.sendCode}})],1)},o=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),a=(n("96cf"),n("3b8d")),c=n("1c48"),s=n("7655"),u=n("0044");function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={mixins:[s["a"]],data:function(){return{email:"",code:"",authReady:!1,auth:null,geetestInfo:{}}},computed:{},components:{AppGeetest:u["a"]},methods:{sendCode:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$Progress.start(),this.geetestInfo=e,t.prev=2,n=f({email:this.email,type:"bind"},this.geetestInfo),t.next=6,c["a"].sendEmailCode(n);case 6:r=t.sent,o=r.msg,this.showSucMsg(o),this.startCountDown(),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](2),this.showErrMsg(t.t0.msg);case 15:this.$Progress.finish();case 16:case"end":return t.stop()}}),t,this,[[2,12]])})));function e(e){return t.apply(this,arguments)}return e}(),bindEmail:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].bindEmail({email:this.email,code:this.code});case 3:e=t.sent,n=e.msg,this.showSucMsg(n),this.$store.commit("updateAccountInfo",{email:this.email}),this.$router.push({name:"user"}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),this.showErrMsg(t.t0.msg);case 13:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(){return t.apply(this,arguments)}return e}(),handleReady:function(t){this.authReady=!0,this.auth=t},openGeetest:function(){this.auth.verify()}}},d=p,h=(n("4d26"),n("2877")),m=Object(h["a"])(d,r,o,!1,null,"82d56a20",null);e["default"]=m.exports},dd40:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}}}]);
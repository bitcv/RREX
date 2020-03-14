(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99f6eab4"],{"0896":function(t,a,e){"use strict";var s=e("3a14"),i=e.n(s);i.a},"273c":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"container-loading"},[e("mt-spinner",{attrs:{type:"triple-bounce",color:t.color,size:50}})],1)},i=[],o=(e("cadf"),e("551c"),e("8a81"),e("f751"),e("2fdb"),{name:"pageLoading",data:function(){return{}},props:{color:{type:String,default:"#333"}}}),n=o,r=(e("64a0"),e("2877")),c=Object(r["a"])(n,s,i,!1,null,"0a07c8d2",null);c.options.__file="pageLoading.vue";a["a"]=c.exports},"3a14":function(t,a,e){},"40a3":function(t,a,e){},"4b34":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"page-container"},[e("popupInputPw",{attrs:{status:t.popupInputPw.status,amount:t.popupInputPw.amount,symbol:t.popupInputPw.symbol,desc:t.popupInputPw.desc},on:{closePopup:function(a){t.popupInputPw.status=!1},confirmPw:t.confirmPw}}),"ok"==t.pageStatus?e("section",{staticClass:"container",class:[t.env.platform]},[e("div",{staticClass:"tabbar-top"},[e("p",{staticClass:"tabbar-top-item",class:{active:"buy"===t.advType},on:{click:function(a){t.toggleTab("buy")}}},[t._v("我要买币")]),e("p",{staticClass:"tabbar-top-item",class:{active:"sell"===t.advType},on:{click:function(a){t.toggleTab("sell")}}},[t._v("我要卖币")])]),e("div",{staticClass:"info"},[e("ul",{staticClass:"info-list"},[e("li",{staticClass:"info-item clearfix"},[e("p",{staticClass:"info-item-field"},[t._v("币种")]),e("div",{staticClass:"info-selector-wrap"},[e("p",{staticClass:"info-selector-text"},[t._v(t._s(t.symbol))]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.symbol,expression:"symbol"}],staticClass:"info-selector",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.symbol=a.target.multiple?e:e[0]}}},t._l(t.pageData.assetList,function(a){return e("option",{key:a.symbol,domProps:{value:a.symbol}},[t._v(t._s(a.symbol))])}),0)])]),"buy"===t.advType?[e("li",{staticClass:"info-item clearfix"},[e("p",{staticClass:"info-item-field"},[t._v("收购总量 ("+t._s(t.symbol)+")")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.totalAmount,expression:"totalAmount"}],staticClass:"info-item-value",attrs:{type:"number",placeholder:"0.0001"},domProps:{value:t.totalAmount},on:{input:function(a){a.target.composing||(t.totalAmount=a.target.value)}}})])]:[e("li",{staticClass:"info-item clearfix"},[e("p",{staticClass:"info-item-field"},[t._v("出售总量 ("+t._s(t.symbol)+")")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.totalAmount,expression:"totalAmount"}],staticClass:"info-item-value",attrs:{type:"number",placeholder:"0.0001"},domProps:{value:t.totalAmount},on:{input:function(a){a.target.composing||(t.totalAmount=a.target.value)}}})]),e("li",{staticClass:"info-comment clearfix"},[e("a",{staticClass:"info-comment-btn",attrs:{href:"javascript:;"},on:{click:t.sellAll}},[t._v("全部")]),e("p",{staticClass:"info-comment-text"},[t._v("我的 "+t._s(t.userAmount)+" "+t._s(t.symbol))])])],e("li",{staticClass:"info-item clearfix"},[e("p",{staticClass:"info-item-field"},[t._v("最小交易额 (CNY)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.minValue,expression:"minValue"}],staticClass:"info-item-value",attrs:{type:"number",min:"1",placeholder:"¥ 1.00"},domProps:{value:t.minValue},on:{input:function(a){a.target.composing||(t.minValue=a.target.value)}}})]),e("li",{staticClass:"info-item clearfix"},[e("p",{staticClass:"info-item-field"},[t._v("最大交易额 (CNY)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.maxValue,expression:"maxValue"}],staticClass:"info-item-value",attrs:{type:"number",placeholder:"¥ 999999.99"},domProps:{value:t.maxValue},on:{input:function(a){a.target.composing||(t.maxValue=a.target.value)}}})]),"buy"===t.advType?[e("li",{staticClass:"info-payway clearfix"},[e("p",{staticClass:"info-item-field"},[t._v("支持付款方式")]),e("ul",{staticClass:"info-payway-list"},[e("li",{staticClass:"info-payway-item",class:{active:t.payWaySelectState.wx},on:{click:function(a){t.selectPayWay("wx")}}},[t._v("微信")]),e("li",{staticClass:"info-payway-item",class:{active:t.payWaySelectState.ali},on:{click:function(a){t.selectPayWay("ali")}}},[t._v("支付宝")]),e("li",{staticClass:"info-payway-item",class:{active:t.payWaySelectState.bank},on:{click:function(a){t.selectPayWay("bank")}}},[t._v("银行卡")])])])]:[e("li",{staticClass:"info-payway clearfix"},[e("p",{staticClass:"info-item-field"},[t._v("支持收款方式")]),e("ul",{staticClass:"info-payway-list"},[e("li",{staticClass:"info-payway-item",class:{active:t.payWaySelectState.wx},on:{click:function(a){t.selectPayWay("wx","微信")}}},[t._v("微信")]),e("li",{staticClass:"info-payway-item",class:{active:t.payWaySelectState.ali},on:{click:function(a){t.selectPayWay("ali","支付宝")}}},[t._v("支付宝")]),e("li",{staticClass:"info-payway-item",class:{active:t.payWaySelectState.bank},on:{click:function(a){t.selectPayWay("bank","银行卡")}}},[t._v("银行卡")])])])]],2),e("div",{staticClass:"info-price"},[e("div",{staticClass:"price-type"},[e("p",{staticClass:"price-type-field"},[t._v("设置单价")]),e("div",{staticClass:"price-type-switch"},[e("a",{staticClass:"switch-item",class:{active:"float"==t.priceType},attrs:{href:"javascript:;"},on:{click:function(a){t.changePriceType("float")}}},[t._v("浮动价")]),e("a",{staticClass:"switch-item",class:{active:"fixed"==t.priceType},attrs:{href:"javascript:;"},on:{click:function(a){t.changePriceType("fixed")}}},[t._v("一口价")]),e("p",{staticClass:"bg-color",class:[t.priceType]})])]),"float"==t.priceType?[e("div",{staticClass:"price-title-wrap"},[e("p",{staticClass:"price-title"},[t._v("设置溢价"),e("span",[t._v("市场参考价 ￥"+t._s(t.tokenPrice))])]),e("router-link",{staticClass:"price-title-question",attrs:{to:"/intro4floatPrice"}})],1),e("div",{staticClass:"price-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.priceFloat,expression:"priceFloat"}],staticClass:"price-value",attrs:{type:"number",placeholder:"buy"===t.advType?"建议 -20 到 0":"建议 0 到 20"},domProps:{value:t.priceFloat},on:{input:function(a){a.target.composing||(t.priceFloat=a.target.value)}}}),e("p",{staticClass:"unit"},[t._v("%")])]),e("p",{staticClass:"price-note"},[t._v("浮动价 "+t._s(t.priceFloatValue))])]:[e("div",{staticClass:"price-title-wrap"},[e("p",{staticClass:"price-title"},[t._v("固定价格"),e("span",[t._v("市场参考价 ￥"+t._s(t.tokenPrice))])])]),e("div",{staticClass:"price-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"price-value",attrs:{type:"number",placeholder:"不随市价浮动"},domProps:{value:t.price},on:{input:function(a){a.target.composing||(t.price=a.target.value)}}}),e("p",{staticClass:"unit"},[t._v("CNY")])]),e("p",{staticClass:"price-note"},[t._v("发布后，该价格不会因市场波动而改变")])]],2),e("div",{staticClass:"info-submit"},[e("li",{staticClass:"info-note-wrap"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],staticClass:"info-note",attrs:{placeholder:"请输入备注信息(最多输入20个字符)"},domProps:{value:t.note},on:{input:function(a){a.target.composing||(t.note=a.target.value)}}})]),"buy"===t.advType?[e("buttonLoading",{staticClass:"btn-add",attrs:{status:t.btnLoading.status,normalText:"创建挂单"},on:{handleClick:t.confirmAddOrder}})]:[e("buttonLoading",{staticClass:"btn-add",attrs:{status:t.btnLoading.status,normalText:"委托 "+t.totalAmount+" "+t.symbol+" 给平台"},on:{handleClick:t.confirmAddOrder}}),e("p",{staticClass:"btn-note"},[t._v("您的 "+t._s(t.symbol)+" 交由平台保管，只有对方给您完成付款后平台才会将 您的 "+t._s(t.symbol)+" 发送给对方，请放心交易")])]],2)])]):e("page-loading",{attrs:{color:"#4D72FE"}})],1)},i=[],o=(e("a481"),e("ac6a"),e("cebc")),n=(e("cadf"),e("551c"),e("8a81"),e("f751"),e("2fdb"),e("6612")),r=e.n(n),c=e("2f62"),l=e("273c"),u=e("dbb6"),p=e("d6f6"),d={name:"advAdd",data:function(){return{pageStatus:"",pageData:{},advType:this.$route.query.type||"buy",payWaySelectState:{wx:!1,ali:!1,bank:!1},priceType:"float",symbol:this.$route.query.symbol||"BCV",minValue:"",maxValue:"",price:"",priceFloat:"",totalAmount:"",note:"",btnLoading:{status:"normal"},popupInputPw:{status:!1,amount:"",symbol:"",desc:"创建卖单"}}},computed:Object(o["a"])({},Object(c["c"])(["userData","env"]),{userAmount:function(){var t=this;if(!this.pageData||!this.pageData.assetList)return"";var a="";return this.pageData.assetList.forEach(function(e){t.symbol===e.symbol&&(a=e.amount)}),a},tokenPrice:function(){var t=this;if(!this.pageData||!this.pageData.assetList)return"";var a="";return this.pageData.assetList.forEach(function(e){t.symbol===e.symbol&&(a=e.price)}),a},payWayStr:function(){var t=[];return this.payWaySelectState.wx&&t.push("wx"),this.payWaySelectState.ali&&t.push("ali"),this.payWaySelectState.bank&&t.push("bank"),t.join(",")},priceFloatValue:function(){return"float"==this.priceType&&"ok"==this.pageStatus&&this.tokenPrice&&this.priceFloat?this.$numeral(this.priceFloat).divide(100).add(1).multiply(this.tokenPrice).format("0.[0000]"):"-"}}),created:function(){var t=this;if(!this.userData)return this.$router.replace("/index");this.$http.post(this.$api.getAssetList).then(function(a){0==a.data.errcode?(t.pageData=a.data.data,t.pageStatus="ok"):t.$toast("提示：".concat(a.data.errmsg))})},methods:{preSelectAdvType:function(){"sell"!=this.userData.auth?"buy"!=this.userData.auth?"sell"!=this.$route.query.type&&"buy"!=this.$route.query.type?this.advType="buy":this.advType=this.$route.query.type:this.advType="buy":this.advType="sell"},toggleTab:function(t){this.advType!=t&&("sell"==t&&(this.userData.wxStatus||(this.payWaySelectState.wx=!1),this.userData.aliStatus||(this.payWaySelectState.ali=!1),this.userData.bankStatus||(this.payWaySelectState.bank=!1)),this.advType=t)},selectPayWay:function(t,a){"buy"==this.advType?this.payWaySelectState[t]=!this.payWaySelectState[t]:this.userData["".concat(t,"Status")]?this.payWaySelectState[t]=!this.payWaySelectState[t]:this.$toast("您还未设置".concat(a,"收款信息"))},changePriceType:function(t){this.priceType=t},sellAll:function(){this.totalAmount=this.userAmount},confirmAddOrder:function(){var t=this;this.checkKYC()&&this.checkAuth()&&this.checkParam()&&this.$messagebox({title:"确认创建挂单吗？",message:"（创建后将不可修改）",confirmButtonText:"确认",showCancelButton:!0}).then(function(a){"confirm"===a&&("buy"==t.advType?t.addBuyOrder():t.addSellOrder())})},addBuyOrder:function(){var t=this;this.btnLoading.status="loading",this.$http.post(this.$api.addAdv,{advType:this.advType,symbol:this.symbol,minValue:this.minValue,maxValue:this.maxValue,priceType:this.priceType,price:"fixed"==this.priceType?this.price:1,priceRate:"float"==this.priceType?r()(this.priceFloat).divide(100).add(1).format("0.[0000]"):1,totalAmount:this.totalAmount,payWayStr:this.payWayStr,note:this.note}).then(function(a){t.btnLoading.status="normal",0==a.data.errcode?(t.$toast("创建成功！"),t.$router.replace({path:"/userAdvs"})):t.$toast("提示：".concat(a.data.errmsg))}).catch(function(a){console.log(a),t.btnLoading.status="normal"})},addSellOrder:function(){this.popupInputPw.symbol=this.symbol,this.popupInputPw.amount=this.totalAmount,this.popupInputPw.status=!0},confirmPw:function(t){var a=this;this.btnLoading.status="loading",this.$http.post(this.$api.addAdv,{advType:this.advType,symbol:this.symbol,minValue:this.minValue,maxValue:this.maxValue,priceType:this.priceType,price:"fixed"==this.priceType?this.price:1,priceRate:"float"==this.priceType?r()(this.priceFloat).divide(100).add(1).format("0.[0000]"):1,totalAmount:this.totalAmount,payWayStr:this.payWayStr,note:this.note,paywd:t.password}).then(function(t){a.btnLoading.status="normal",0==t.data.errcode?(a.$toast("创建成功！"),a.$router.push({path:"/userAdvs"})):a.$toast("提示：".concat(t.data.errmsg))}).catch(function(t){console.log(t),a.btnLoading.status="normal"})},checkKYC:function(){return!0},checkAuth:function(){return"all"==this.userData.auth||this.userData.auth==this.advType||(this.$store.dispatch("openDepo",this.pageData.depoId),!1)},checkParam:function(){if("sell"==this.advType){if(!this.totalAmount)return this.$toast("请输入出售总量"),!1;if(+this.totalAmount<1e-4)return this.$toast("出售总量不能小于0.0001"),!1;if(+this.totalAmount>+this.userAmount)return this.$toast("出售总量不能大于您的资产"),!1}else{if(!this.totalAmount)return this.$toast("请输入收购总量"),!1;if(+this.totalAmount<1e-4)return this.$toast("收购总量不能小于0.0001"),!1}if(!this.minValue)return this.$toast("请输入最小交易额"),!1;if(+this.minValue<1)return this.$toast("最小交易额不能小于 1"),!1;if(!this.maxValue)return this.$toast("请输入最大交易额"),!1;if(+this.maxValue>999999.99)return this.$toast("最大交易额不能大于 999999.99"),!1;if(+this.minValue>=+this.maxValue)return this.$toast("最小交易额不能大于最大交易额"),!1;if(1.5*+this.minValue>+this.maxValue)return this.$toast("最大交易额至少为最小交易额的1.5倍"),!1;if(!this.payWayStr)return this.$toast("请选择".concat("buy"==this.advType?"支持付款方式":"支持收款方式")),!1;if("float"==this.priceType){if(!this.priceFloat)return this.$toast("请输入溢价区间"),!1;if("sell"==this.advType){if(+this.priceFloat>20||+this.priceFloat<0)return this.$toast("溢价最好在0-20%之间"),!1}else if("buy"==this.advType&&(+this.priceFloat>0||+this.priceFloat<-20))return this.$toast("溢价最好在-20%-0之间"),!1}else{if(!this.price)return this.$toast("请输入单价"),!1;if(+this.price<=0)return this.$toast("单价不能小于0"),!1}return!(this.note.length>20)||(this.$toast("备注信息不能大于20个字符"),!1)}},components:{pageLoading:l["a"],buttonLoading:u["a"],popupInputPw:p["a"]}},f=d,m=(e("c4c1"),e("2877")),h=Object(m["a"])(f,s,i,!1,null,"5a4c553d",null);h.options.__file="advAdd.vue";a["default"]=h.exports},"5d58":function(t,a,e){t.exports=e("d8d6")},"5dbc":function(t,a,e){var s=e("d3f4"),i=e("8b97").set;t.exports=function(t,a,e){var o,n=a.constructor;return n!==e&&"function"==typeof n&&(o=n.prototype)!==e.prototype&&s(o)&&i&&i(t,o),t}},"64a0":function(t,a,e){"use strict";var s=e("40a3"),i=e.n(s);i.a},"67bb":function(t,a,e){t.exports=e("f921")},"69d3":function(t,a,e){e("6718")("asyncIterator")},"765d":function(t,a,e){e("6718")("observable")},"7ec3":function(t,a,e){},8739:function(t,a,e){"use strict";var s=e("f499"),i=e.n(s),o=e("5d58"),n=e.n(o),r=e("67bb"),c=e.n(r);function l(t){return l="function"===typeof c.a&&"symbol"===typeof n.a?function(t){return typeof t}:function(t){return t&&"function"===typeof c.a&&t.constructor===c.a&&t!==c.a.prototype?"symbol":typeof t},l(t)}function u(t){return u="function"===typeof c.a&&"symbol"===l(n.a)?function(t){return l(t)}:function(t){return t&&"function"===typeof c.a&&t.constructor===c.a&&t!==c.a.prototype?"symbol":l(t)},u(t)}e("cadf"),e("551c"),e("8a81"),e("f751"),e("2fdb");var p=e("4360"),d=e("76a0");e.d(a,"b",function(){return b});var f=p["a"].state.env;function m(){return!!f.isInRrexApp||(Object(d["Toast"])("操作失败：请在 RREx APP 中使用此功能"),!1)}function h(t,a){return!!m()&&("object"===u(a)&&(a=i()(a)),"android"==f.appPlatform?window.JSBridge&&window.JSBridge[t]?(void 0===a?window.JSBridge[t]():window.JSBridge[t](a),!0):(Object(d["Toast"])("操作失败：未找到 ".concat(t," 方法")),!1):"ios"==f.appPlatform?window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers[t]&&window.webkit.messageHandlers[t].postMessage?(void 0===a&&(a=""),window.webkit.messageHandlers[t].postMessage(a),!0):(Object(d["Toast"])("操作失败：未找到 ".concat(t," 方法")),!1):void Object(d["Toast"])("操作失败：环境不正确"))}function y(t){var a=h("getUserToken");a&&(window.JSBridge||(window.JSBridge={}),window.JSBridge.getUserTokenCb=t)}function v(t){h("download",t)}function b(t){window.location.href="rrex://".concat(t)}a["a"]={getUserToken:y,download:v,goUrl:b}},"8b97":function(t,a,e){var s=e("d3f4"),i=e("cb7c"),o=function(t,a){if(i(t),!s(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,a,s){try{s=e("9b43")(Function.call,e("11e9").f(Object.prototype,"__proto__").set,2),s(t,[]),a=!(t instanceof Array)}catch(i){a=!0}return function(t,e){return o(t,e),a?t.__proto__=e:s(t,e),t}}({},!1):void 0),check:o}},aa77:function(t,a,e){var s=e("5ca1"),i=e("be13"),o=e("79e5"),n=e("fdef"),r="["+n+"]",c="​",l=RegExp("^"+r+r+"*"),u=RegExp(r+r+"*$"),p=function(t,a,e){var i={},r=o(function(){return!!n[t]()||c[t]()!=c}),l=i[t]=r?a(d):n[t];e&&(i[e]=l),s(s.P+s.F*r,"String",i)},d=p.trim=function(t,a){return t=String(i(t)),1&a&&(t=t.replace(l,"")),2&a&&(t=t.replace(u,"")),t};t.exports=p},ac6a:function(t,a,e){for(var s=e("cadf"),i=e("0d58"),o=e("2aba"),n=e("7726"),r=e("32e9"),c=e("84f2"),l=e("2b4c"),u=l("iterator"),p=l("toStringTag"),d=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=i(f),h=0;h<m.length;h++){var y,v=m[h],b=f[v],g=n[v],w=g&&g.prototype;if(w&&(w[u]||r(w,u,d),w[p]||r(w,p,v),c[v]=d,b))for(y in s)w[y]||o(w,y,s[y],!0)}},c108:function(t,a,e){},c4c1:function(t,a,e){"use strict";var s=e("7ec3"),i=e.n(s);i.a},c5f6:function(t,a,e){"use strict";var s=e("7726"),i=e("69a8"),o=e("2d95"),n=e("5dbc"),r=e("6a99"),c=e("79e5"),l=e("9093").f,u=e("11e9").f,p=e("86cc").f,d=e("aa77").trim,f="Number",m=s[f],h=m,y=m.prototype,v=o(e("2aeb")(y))==f,b="trim"in String.prototype,g=function(t){var a=r(t,!1);if("string"==typeof a&&a.length>2){a=b?a.trim():d(a,3);var e,s,i,o=a.charCodeAt(0);if(43===o||45===o){if(e=a.charCodeAt(2),88===e||120===e)return NaN}else if(48===o){switch(a.charCodeAt(1)){case 66:case 98:s=2,i=49;break;case 79:case 111:s=8,i=55;break;default:return+a}for(var n,c=a.slice(2),l=0,u=c.length;l<u;l++)if(n=c.charCodeAt(l),n<48||n>i)return NaN;return parseInt(c,s)}}return+a};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var a=arguments.length<1?0:t,e=this;return e instanceof m&&(v?c(function(){y.valueOf.call(e)}):o(e)!=f)?n(new h(g(a)),e,m):g(a)};for(var w,C=e("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;C.length>S;S++)i(h,w=C[S])&&!i(m,w)&&p(m,w,u(h,w));m.prototype=y,y.constructor=m,e("2aba")(s,f,m)}},d6f6:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{directives:[{name:"show",rawName:"v-show",value:t.wrapStatus,expression:"wrapStatus"}],staticClass:"popup",on:{touchmove:function(t){t.preventDefault()}}},[e("transition",{attrs:{name:"zoomIn"},on:{"before-enter":t.beforeEnter,"after-leave":t.afterLeave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"popup-content-wrap"},[e("div",{staticClass:"popup-close",on:{click:t.closePopup}}),e("div",{staticClass:"popup-content"},[e("h3",{staticClass:"title"},[t._v(t._s(t.title))]),e("div",{staticClass:"info-wrap"},[e("p",{staticClass:"info"},[t._v(t._s(t.desc))]),e("p",{staticClass:"amount dinMedium"},[t._v(t._s(+t.amount)),e("span",{staticClass:"symbol"},[t._v(t._s(t.symbol))])])]),e("div",{staticClass:"password"},[e("p",{staticClass:"block",class:t.password.length>=1?"filled":""}),e("p",{staticClass:"block",class:t.password.length>=2?"filled":""}),e("p",{staticClass:"block",class:t.password.length>=3?"filled":""}),e("p",{staticClass:"block",class:t.password.length>=4?"filled":""}),e("p",{staticClass:"block",class:t.password.length>=5?"filled":""}),e("p",{staticClass:"block",class:t.password.length>=6?"filled":""}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"tel",autofocus:"autofocus"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})])])])])],1)},i=[],o=e("cebc"),n=(e("c5f6"),e("8739")),r={data:function(){return{wrapStatus:!1,hasPaywd:"",password:"",isConfirmed:!1}},props:{status:Boolean,amount:[Number,String],symbol:String,title:{type:String,default:"输入支付密码"},desc:{type:String,default:"支付"},extraParas:{type:Object,default:function(){return{}}}},watch:{password:function(t,a){t&&!/^[0-9]{0,6}$/.test(t)&&(this.password=a||""),/^[0-9]{6}$/.test(t)&&(0==this.isConfirmed?(this.$emit("confirmPw",{extraParas:Object(o["a"])({},this.extraParas),password:this.password,amount:this.amount}),this.isConfirmed=!0,this.$emit("closePopup")):this.password="")}},created:function(){var t=this;this.$http.post(this.$api.getUserData).then(function(a){0==a.data.errcode?t.hasPaywd=a.data.data.hasPaywd:t.$toast("提示：".concat(a.data.errmsg))})},methods:{beforeEnter:function(){this.hasPaywd?(this.password="",this.isConfirmed=!1,this.wrapStatus=!0):this.$messagebox({title:"提示",message:"您还未设置支付密码",confirmButtonText:"去设置"}).then(function(t){"confirm"===t&&Object(n["b"])("settings")})},afterLeave:function(){this.password="",this.wrapStatus=!1},closePopup:function(){this.$emit("closePopup")}}},c=r,l=(e("e18b"),e("2877")),u=Object(l["a"])(c,s,i,!1,null,"219a3452",null);u.options.__file="popupInputPw.vue";a["a"]=u.exports},d8d6:function(t,a,e){e("1654"),e("6c1c"),t.exports=e("ccb9").f("iterator")},dbb6:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("p",{directives:[{name:"show",rawName:"v-show",value:"disabled"==t.status,expression:"status == 'disabled'"}],staticClass:"common-btn disabled"},[t._v(t._s(t.disabledText?t.disabledText:t.normalText))]),e("a",{directives:[{name:"show",rawName:"v-show",value:"normal"==t.status,expression:"status == 'normal'"}],staticClass:"common-btn",attrs:{href:"javascript:;"},on:{click:t.handleClick}},[t._v(t._s(t.normalText))]),e("div",{directives:[{name:"show",rawName:"v-show",value:"loading"==t.status,expression:"status == 'loading'"}],staticClass:"common-btn"},[e("mt-spinner",{attrs:{type:"triple-bounce",color:"white",size:30}})],1),e("p",{directives:[{name:"show",rawName:"v-show",value:"success"==t.status,expression:"status == 'success'"}],staticClass:"common-btn"},[t._v(t._s(t.successText?t.successText:t.normalText))])])},i=[],o=(e("c5f6"),{name:"buttonLoading",data:function(){return{}},props:{status:{type:String,default:"normal"},disabledText:[String,Number],normalText:{type:[String,Number],default:"按钮"},successText:[String,Number]},methods:{handleClick:function(){this.$emit("handleClick")}}}),n=o,r=(e("0896"),e("2877")),c=Object(r["a"])(n,s,i,!1,null,"0c114732",null);c.options.__file="buttonLoading.vue";a["a"]=c.exports},e18b:function(t,a,e){"use strict";var s=e("c108"),i=e.n(s);i.a},f921:function(t,a,e){e("014b"),e("c207"),e("69d3"),e("765d"),t.exports=e("584a").Symbol},fdef:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
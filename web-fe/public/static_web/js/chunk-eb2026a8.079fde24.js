(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb2026a8"],{"38bf":function(t,e,s){},4509:function(t,e,s){t.exports=s.p+"img/check_icon.7bab647c.svg"},5027:function(t,e,s){"use strict";var r=s("38bf"),n=s.n(r);n.a},"7cf3":function(t,e,s){t.exports=s.p+"img/cancel.fca23b1c.svg"},ec10:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"box-container kyc"},[r("router-link",{staticClass:"box-nav__container",attrs:{tag:"div",to:"/user"}},[r("i",{staticClass:"icon icon-return pointer router-link-active"}),r("span",[t._v(t._s(t.$t("withdrawConfirm.center")))])]),r("div",{staticClass:"kyc-result"},[r("div",{staticClass:"kyc-result__img"},[0!==t.state?r("img",{attrs:{src:s("4509")}}):r("img",{attrs:{src:s("7cf3")}})]),r("div",{staticClass:"kyc-result__title"},[0===t.state?r("span",[t._v(t._s(t.errorMsg))]):t._e(),1===t.state?r("span",[t._v(t._s(t.$t("withdrawConfirm.success")))]):t._e(),2===t.state?r("span",[t._v(t._s(t.$t("withdrawConfirm.failed")))]):t._e(),3===t.state?r("span",[t._v(t._s(t.$t("withdrawConfirm.cancel")))]):t._e()]),1===t.state?r("div",{staticClass:"kyc-result__desc"},[r("span",[t._v("\n            "+t._s(t.$t("withdrawConfirm.desc1"))+"\n            "),r("router-link",{attrs:{to:"/balance/history"}},[t._v("\n              "+t._s(t.$t("withdrawConfirm.withdrawHistory"))+"\n            ")]),t._v("\n            "+t._s(t.$t("withdrawConfirm.desc2"))+"\n          ")],1)]):t._e()])],1)])])},n=[],a=(s("96cf"),s("3b8d")),c=s("f45f"),i={data:function(){return{state:0,errorMsg:""}},beforeRouteEnter:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e,s,r){var n,a,i,o,u,f,l=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.query,a=n.u,i=n.h,o=n.type,t.prev=1,"confirm"!==o){t.next=10;break}return t.next=5,c["a"].validateWithdraw(a,i);case 5:u=t.sent,f=u.msg,r((function(t){t.state="success"===f?1:2})),t.next=14;break;case 10:if("cancel"!==o){t.next=14;break}return t.next=13,c["a"].withdrawCancel(a,i);case 13:r((function(t){t.state=3}));case 14:t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](1),r((function(e){e.state=0,e.errorMsg=t.t0.msg?t.t0.msg:l.$t("exchange.serverErr")}));case 19:r();case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));function e(e,s,r){return t.apply(this,arguments)}return e}()},o=i,u=(s("5027"),s("2877")),f=Object(u["a"])(o,r,n,!1,null,"cdbc476c",null);e["default"]=f.exports}}]);
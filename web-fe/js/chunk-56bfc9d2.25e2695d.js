(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56bfc9d2"],{"0f0f":function(t,e,a){var r=a("8eeb"),n=a("9934");function o(t,e){return t&&r(e,n(e),t)}t.exports=o},1041:function(t,e,a){var r=a("8eeb"),n=a("a029");function o(t,e){return r(t,n(t),e)}t.exports=o},"1a2d":function(t,e,a){var r=a("42a2"),n=a("1310"),o="[object Map]";function i(t){return n(t)&&r(t)==o}t.exports=i},"1bac":function(t,e,a){var r=a("7d1f"),n=a("a029"),o=a("9934");function i(t){return r(t,o,n)}t.exports=i},"2dcb":function(t,e,a){var r=a("91e9"),n=r(Object.getPrototypeOf,Object);t.exports=n},"32b3":function(t,e,a){var r=a("872a"),n=a("9638"),o=Object.prototype,i=o.hasOwnProperty;function s(t,e,a){var o=t[e];i.call(t,e)&&n(o,a)&&(void 0!==a||e in t)||r(t,e,a)}t.exports=s},3818:function(t,e,a){var r=a("7e64"),n=a("8057"),o=a("32b3"),i=a("5b01"),s=a("0f0f"),c=a("e538"),u=a("4359"),l=a("54eb"),d=a("1041"),f=a("a994"),b=a("1bac"),p=a("42a2"),v=a("c87c"),h=a("c2b6"),_=a("fa21"),m=a("6747"),y=a("0d24"),g=a("cc45"),x=a("1a8c"),w=a("d7ee"),j=a("ec69"),C=1,D=2,k=4,T="[object Arguments]",A="[object Array]",O="[object Boolean]",H="[object Date]",$="[object Error]",P="[object Function]",W="[object GeneratorFunction]",S="[object Map]",L="[object Number]",M="[object Object]",E="[object RegExp]",R="[object Set]",U="[object String]",F="[object Symbol]",I="[object WeakMap]",N="[object ArrayBuffer]",B="[object DataView]",q="[object Float32Array]",J="[object Float64Array]",V="[object Int8Array]",G="[object Int16Array]",z="[object Int32Array]",K="[object Uint8Array]",Q="[object Uint8ClampedArray]",X="[object Uint16Array]",Y="[object Uint32Array]",Z={};function tt(t,e,a,A,O,H){var $,S=e&C,L=e&D,E=e&k;if(a&&($=O?a(t,A,O,H):a(t)),void 0!==$)return $;if(!x(t))return t;var R=m(t);if(R){if($=v(t),!S)return u(t,$)}else{var U=p(t),F=U==P||U==W;if(y(t))return c(t,S);if(U==M||U==T||F&&!O){if($=L||F?{}:_(t),!S)return L?d(t,s($,t)):l(t,i($,t))}else{if(!Z[U])return O?t:{};$=h(t,U,S)}}H||(H=new r);var I=H.get(t);if(I)return I;H.set(t,$),w(t)?t.forEach((function(r){$.add(tt(r,e,a,r,t,H))})):g(t)&&t.forEach((function(r,n){$.set(n,tt(r,e,a,n,t,H))}));var N=E?L?b:f:L?keysIn:j,B=R?void 0:N(t);return n(B||t,(function(r,n){B&&(n=r,r=t[n]),o($,n,tt(r,e,a,n,t,H))})),$}Z[T]=Z[A]=Z[N]=Z[B]=Z[O]=Z[H]=Z[q]=Z[J]=Z[V]=Z[G]=Z[z]=Z[S]=Z[L]=Z[M]=Z[E]=Z[R]=Z[U]=Z[F]=Z[K]=Z[Q]=Z[X]=Z[Y]=!0,Z[$]=Z[P]=Z[I]=!1,t.exports=tt},"3b4a":function(t,e,a){var r=a("0b07"),n=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=n},"41c3":function(t,e,a){var r=a("1a8c"),n=a("eac5"),o=a("ec8c"),i=Object.prototype,s=i.hasOwnProperty;function c(t){if(!r(t))return o(t);var e=n(t),a=[];for(var i in t)("constructor"!=i||!e&&s.call(t,i))&&a.push(i);return a}t.exports=c},4359:function(t,e){function a(t,e){var a=-1,r=t.length;e||(e=Array(r));while(++a<r)e[a]=t[a];return e}t.exports=a},"54eb":function(t,e,a){var r=a("8eeb"),n=a("32f4");function o(t,e){return r(t,n(t),e)}t.exports=o},"55df":function(t,e,a){"use strict";var r=a("6eeb"),n=a.n(r);n.a},"5b01":function(t,e,a){var r=a("8eeb"),n=a("ec69");function o(t,e){return t&&r(e,n(e),t)}t.exports=o},"5d89":function(t,e,a){var r=a("f8af");function n(t,e){var a=e?r(t.buffer):t.buffer;return new t.constructor(a,t.byteOffset,t.byteLength)}t.exports=n},"5f2a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container order-history record"},[a("AirbnbStyleDatepicker",{attrs:{"trigger-element-id":"datePicker",mode:"range","fullscreen-mobile":!0,"date-one":t.filters.date_from,"date-two":t.filters.date_to,"offset-y":245,"offset-x":-375,"show-shortcuts-menu-trigger":!1},on:{"date-one-selected":function(e){t.filters.date_from=e},"date-two-selected":function(e){t.filters.date_to=e},apply:t.refreshData,cancelled:t.resetDate}}),a("div",{staticClass:"balance-container"},[a("div",{staticClass:"box-container search-list"},[a("div",{staticClass:"search-item"},[a("div",{staticClass:"btn-group"},t._l(t.tabList,(function(e,r){return a("button",{key:r,staticClass:"btn",class:{active:t.currentTab===e.value},attrs:{type:"button"},on:{click:function(a){t.currentTab=e.value}}},[t._v(t._s(e.label))])})),0)]),a("div",{staticClass:"search-item"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.filters.currency,expression:"filters.currency"}],staticClass:"btn",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.filters,"currency",e.target.multiple?a:a[0])},t.refreshData]}},[a("option",{domProps:{value:""}},[t._v(t._s(t.$t("balance.AllCoins")))]),t._l(t.currencyList,(function(e){return a("option",{key:e.id,domProps:{value:e.token}},[t._v(t._s(e.token))])}))],2)]),a("div",{staticClass:"search-item"},[a("div",{staticClass:"input-date__container"},[a("input",{staticClass:"form-input__base input-date",attrs:{type:"text",readonly:"",id:"datePicker",placeholder:t.$t("balance.ChooseDate")},domProps:{value:t.selectedDate}})])])]),a("div",{staticClass:"box-container"},[a("div",{staticClass:"order-title"},[1===t.currentTab?a("span",[t._v(t._s(t.$t("balance.OrderHistory")))]):t._e(),2===t.currentTab?a("span",[t._v(t._s(t.$t("balance.WithdrawalHistory")))]):t._e(),a("a",{staticClass:"fr pointer hover-underline",attrs:{href:"mailto:support@rrex.com"}},[a("i",{staticClass:"icon icon-contact_us"}),a("span",{staticClass:"middle"},[t._v(t._s(t.$t("balance.ContactUs")))])])]),a("div",[a("div",{staticClass:"order-table order-table__pc"},[1===t.currentTab?a("DepositTable",{attrs:{"table-data":t.depositHistoryData,loading:t.isLoading}}):t._e(),2===t.currentTab?a("WithdrawTable",{attrs:{"table-data":t.withdrawHistoryData,loading:t.isLoading},on:{cancel:t.cancelWithdraw}}):t._e()],1),a("div",{staticClass:"order-table order-table__mobile"},[1===t.currentTab?a("MobileDepositTable",{attrs:{"table-data":t.depositHistoryData}}):t._e(),2===t.currentTab?a("MobileWithdrawTable",{attrs:{"table-data":t.withdrawHistoryData},on:{cancel:t.cancelWithdraw}}):t._e()],1)]),a("div",{staticClass:"eox-pagination"},[t.totalPage>1?a("v-pagination",{attrs:{length:t.totalPage,"total-visible":7,color:"#2174FF"},on:{input:t.refreshData},model:{value:t.filters.page,callback:function(e){t.$set(t.filters,"page",e)},expression:"filters.page"}}):t._e()],1)])])],1)},n=[],o=(a("c5f6"),a("96cf"),a("3b8d")),i=a("30b7"),s=a("f45f"),c=a("93c6"),u=a.n(c),l=a("b8ce"),d=a.n(l),f=a("902e"),b=a.n(f),p=a("bb67"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("DataTable",{attrs:{data:t.tableData,head:t.mobileHead},scopedSlots:t._u([{key:"item",fn:function(e){return[a("td",[a("div",{staticClass:"order-content"},[a("div",{staticClass:"order-td"},[a("span",{staticClass:"order-item__title"},[t._v(t._s(e.data.token))])]),a("div",{staticClass:"order-td"},[a("span",[t._v(t._s(e.data.amount))])]),a("div",{staticClass:"order-content__info"},[a("span",[t._v("Txid: "+t._s(e.data.txid))])])])]),a("td",[a("div",{staticClass:"order-content"},[a("div",{staticClass:"order-td"},[t._v(t._s(e.data.time))]),a("div",{staticClass:"order-td"},[[0,1,3,4].includes(e.data.state)?a("span",{staticClass:"table-tag table-tag__disabled"},[t._v(t._s(t.$t("balance.Processing")))]):t._e(),2===e.data.state?a("span",{staticClass:"table-tag table-tag__green"},[t._v(t._s(t.$t("balance.Processed")))]):t._e()])])])]}}])})},h=[],_={props:{tableData:{required:!0,type:Array}},components:{DataTable:i["a"]},computed:{mobileHead:function(){return[{text:this.$t("balance.TokenAmount")},{text:this.$t("balance.DateStatus")}]}}},m=_,y=(a("55df"),a("2877")),g=Object(y["a"])(m,v,h,!1,null,"268ebdc2",null),x=g.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("DataTable",{attrs:{data:t.tableData,head:t.mobileHead},scopedSlots:t._u([{key:"item",fn:function(e){return[a("td",[a("div",{staticClass:"order-content"},[a("div",{staticClass:"order-td"},[a("span",{staticClass:"order-item__title"},[t._v(t._s(e.data.token))])]),a("div",{staticClass:"order-td"},[a("span",[t._v(t._s(e.data.amount))])]),a("div",{staticClass:"order-content__info"},[a("span",[t._v("Txid: "+t._s(e.data.txid))])])])]),a("td",[a("div",{staticClass:"order-content"},[a("div",{staticClass:"order-td"},[t._v(t._s(e.data.time))]),a("div",{staticClass:"order-td"},[[0,6].includes(e.data.state)?a("i",{staticClass:"icon icon-cancel pointer",on:{click:function(a){return t.$emit("cancel",e.data.id)}}}):t._e(),[0,5,6].includes(e.data.state)?a("span",{staticClass:"table-tag table-tag__disabled"},[t._v(t._s(t.$t("balance.Processing")))]):t._e(),2===e.data.state?a("span",{staticClass:"table-tag table-tag__green"},[t._v(t._s(t.$t("balance.Completed")))]):t._e(),[1,3,4].includes(e.data.state)?a("span",{staticClass:"table-tag table-tag__red"},[t._v(t._s(t.$t("balance.Failed")))]):t._e()])])])]}}])})},j=[],C={props:{tableData:{required:!0,type:Array}},components:{DataTable:i["a"]},computed:{mobileHead:function(){return[{text:"Token/Amount"},{text:"Date/Status"}]}}},D=C,k=(a("b56d"),Object(y["a"])(D,w,j,!1,null,"18691ecf",null)),T=k.exports,A=a("cba1"),O=a("ef4f"),H={mixins:[O["a"]],data:function(){return{currencyList:[],depositHistoryData:[],withdrawHistoryData:[],currentTab:0,isLoading:!1,filters:{page:1,date_from:"",date_to:"",limit:10,currency:""},totalPage:0}},beforeRouteEnter:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,a,r){var n,o,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s["a"].getWallet();case 3:n=t.sent,o=n.data,i=u()(o,"currency","asc"),c=e.query.type||1,r((function(t){t.currencyList=i.map((function(t){return{token:t.currency,iconUrl:t.icon,id:t.id,disabled:t.open_deposit,available:t.amount}})),t.currentTab=Number(c)})),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));function e(e,a,r){return t.apply(this,arguments)}return e}(),watch:{currentTab:function(){this.refreshData()}},components:{DataTable:i["a"],DepositTable:A["a"],WithdrawTable:p["a"],MobileDepositTable:x,MobileWithdrawTable:T},computed:{selectedDate:function(){return""===this.filters.date_from?"":"".concat(this.filters.date_from," - ").concat(this.filters.date_to)},tabList:function(){return[{value:1,label:this.$t("balance.Deposit")},{value:2,label:this.$t("balance.Withdraw")}]}},methods:{resetDate:function(){this.filters.date_from="",this.filters.date_to="",this.refreshData()},refreshData:function(){1===this.currentTab&&this.getDepositHistory(),2===this.currentTab&&this.getWithdrawHistory()},getWithdrawHistory:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isLoading=!0,this.withdrawHistoryData=[],e=d()(this.filters),e.date_from=b()(this.filters.date_from)/1e3,e.date_to=b()(this.filters.date_to)/1e3,t.next=8,s["a"].getWalletHistory(201,e);case 8:a=t.sent,r=a.data,this.totalPage=r.last_page,n=r.data||[],this.withdrawHistoryData=n.map((function(t){return{time:t.create_time,token:t.currency,amount:t.amount,state:t.state,txid:t.txid,address:t.address,expanded:!1,id:t.id,fee:t.fee}})),this.isLoading=!1,t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),this.showErrMsg(t.t0.msg);case 19:case"end":return t.stop()}}),t,this,[[0,16]])})));function e(){return t.apply(this,arguments)}return e}(),getDepositHistory:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isLoading=!0,this.depositHistoryData=[],e=d()(this.filters),e.date_from=b()(this.filters.date_from)/1e3,e.date_to=b()(this.filters.date_to)/1e3,t.next=8,s["a"].getWalletHistory(200,e);case 8:a=t.sent,r=a.data,this.totalPage=r.last_page,n=r.data||[],this.depositHistoryData=n.map((function(t){return{time:t.create_time,token:t.currency,amount:t.amount,state:t.state,confirmations:Number(t.confirmations),totalConfirmations:Number(t.need_confirmations),txid:t.txid,address:t.address,expanded:!1}})),this.isLoading=!1,t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),this.showErrMsg(t.t0.msg);case 19:case"end":return t.stop()}}),t,this,[[0,16]])})));function e(){return t.apply(this,arguments)}return e}(),cancelWithdraw:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s["a"].cancelWithdraw(e);case 3:a=t.sent,r=a.msg,this.showSucMsg(r),this.getWithdrawHistory(),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),this.showErrMsg(t.t0.msg);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(e){return t.apply(this,arguments)}return e}()}},$=H,P=(a("e56c"),Object(y["a"])($,r,n,!1,null,"5c739542",null));e["default"]=P.exports},"65f6":function(t,e,a){},"6eeb":function(t,e,a){},"6f6c":function(t,e){var a=/\w*$/;function r(t){var e=new t.constructor(t.source,a.exec(t));return e.lastIndex=t.lastIndex,e}t.exports=r},7530:function(t,e,a){var r=a("1a8c"),n=Object.create,o=function(){function t(){}return function(e){if(!r(e))return{};if(n)return n(e);t.prototype=e;var a=new t;return t.prototype=void 0,a}}();t.exports=o},8057:function(t,e){function a(t,e){var a=-1,r=null==t?0:t.length;while(++a<r)if(!1===e(t[a],a,t))break;return t}t.exports=a},"872a":function(t,e,a){var r=a("3b4a");function n(t,e,a){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:a,writable:!0}):t[e]=a}t.exports=n},"8eeb":function(t,e,a){var r=a("32b3"),n=a("872a");function o(t,e,a,o){var i=!a;a||(a={});var s=-1,c=e.length;while(++s<c){var u=e[s],l=o?o(a[u],t[u],u,a,t):void 0;void 0===l&&(l=t[u]),i?n(a,u,l):r(a,u,l)}return a}t.exports=o},"983b":function(t,e,a){},9934:function(t,e,a){var r=a("6fcd"),n=a("41c3"),o=a("30c9");function i(t){return o(t)?r(t,!0):n(t)}t.exports=i},a029:function(t,e,a){var r=a("087d"),n=a("2dcb"),o=a("32f4"),i=a("d327"),s=Object.getOwnPropertySymbols,c=s?function(t){var e=[];while(t)r(e,o(t)),t=n(t);return e}:i;t.exports=c},a2db:function(t,e,a){var r=a("9e69"),n=r?r.prototype:void 0,o=n?n.valueOf:void 0;function i(t){return o?Object(o.call(t)):{}}t.exports=i},b56d:function(t,e,a){"use strict";var r=a("65f6"),n=a.n(r);n.a},b8ce:function(t,e,a){var r=a("3818"),n=4;function o(t){return r(t,n)}t.exports=o},c2b6:function(t,e,a){var r=a("f8af"),n=a("5d89"),o=a("6f6c"),i=a("a2db"),s=a("c8fe"),c="[object Boolean]",u="[object Date]",l="[object Map]",d="[object Number]",f="[object RegExp]",b="[object Set]",p="[object String]",v="[object Symbol]",h="[object ArrayBuffer]",_="[object DataView]",m="[object Float32Array]",y="[object Float64Array]",g="[object Int8Array]",x="[object Int16Array]",w="[object Int32Array]",j="[object Uint8Array]",C="[object Uint8ClampedArray]",D="[object Uint16Array]",k="[object Uint32Array]";function T(t,e,a){var T=t.constructor;switch(e){case h:return r(t);case c:case u:return new T(+t);case _:return n(t,a);case m:case y:case g:case x:case w:case j:case C:case D:case k:return s(t,a);case l:return new T;case d:case p:return new T(t);case f:return o(t);case b:return new T;case v:return i(t)}}t.exports=T},c3fc:function(t,e,a){var r=a("42a2"),n=a("1310"),o="[object Set]";function i(t){return n(t)&&r(t)==o}t.exports=i},c87c:function(t,e){var a=Object.prototype,r=a.hasOwnProperty;function n(t){var e=t.length,a=new t.constructor(e);return e&&"string"==typeof t[0]&&r.call(t,"index")&&(a.index=t.index,a.input=t.input),a}t.exports=n},c8fe:function(t,e,a){var r=a("f8af");function n(t,e){var a=e?r(t.buffer):t.buffer;return new t.constructor(a,t.byteOffset,t.length)}t.exports=n},cc45:function(t,e,a){var r=a("1a2d"),n=a("b047"),o=a("99d3"),i=o&&o.isMap,s=i?n(i):r;t.exports=s},d7ee:function(t,e,a){var r=a("c3fc"),n=a("b047"),o=a("99d3"),i=o&&o.isSet,s=i?n(i):r;t.exports=s},e538:function(t,e,a){(function(t){var r=a("2b3e"),n=e&&!e.nodeType&&e,o=n&&"object"==typeof t&&t&&!t.nodeType&&t,i=o&&o.exports===n,s=i?r.Buffer:void 0,c=s?s.allocUnsafe:void 0;function u(t,e){if(e)return t.slice();var a=t.length,r=c?c(a):new t.constructor(a);return t.copy(r),r}t.exports=u}).call(this,a("62e4")(t))},e56c:function(t,e,a){"use strict";var r=a("983b"),n=a.n(r);n.a},ec8c:function(t,e){function a(t){var e=[];if(null!=t)for(var a in Object(t))e.push(a);return e}t.exports=a},f8af:function(t,e,a){var r=a("2474");function n(t){var e=new t.constructor(t.byteLength);return new r(e).set(new r(t)),e}t.exports=n},fa21:function(t,e,a){var r=a("7530"),n=a("2dcb"),o=a("eac5");function i(t){return"function"!=typeof t.constructor||o(t)?{}:r(n(t))}t.exports=i}}]);
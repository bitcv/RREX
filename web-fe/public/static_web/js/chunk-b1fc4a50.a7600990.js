(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1fc4a50"],{3787:function(t,s,e){"use strict";var n=e("39b3"),i=e.n(n);i.a},"39b3":function(t,s,e){},5985:function(t,s,e){"use strict";var n=e("8661"),i=e.n(n);i.a},8661:function(t,s,e){},"92e4":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("cfd-content",t._b({},"cfd-content",t.contentOptions,!1),[e("template",{slot:"left-content"},[e("div",{staticClass:"asset-detail"},[e("div",{staticClass:"line"},[e("div",[e("div",{staticClass:"label"},[t._v("\n            "+t._s(t.$t("cfd.Asset.AccountValue"))+"\n            "),e("br"),t._v("\n            (USDT)\n          ")]),e("div",{staticClass:"value large"},[t._v(t._s(t._f("fixed")(t.userAssets.equity,2,!0)))])])]),e("div",{staticClass:"line"},[e("div",[e("div",{staticClass:"label"},[t._v("\n            "+t._s(t.$t("cfd.Asset.FreeFunds"))+"\n            "),e("br"),t._v("\n            (USDT)\n          ")]),e("div",{staticClass:"value"},[t._v(t._s(t._f("fixed")(t.freeFunds,2,!0)))])]),e("div",[e("div",{staticClass:"label"},[t._v("\n            "+t._s(t.$t("cfd.Asset.BlockedFunds"))+"\n            "),e("br"),t._v("\n            (USDT)\n          ")]),e("div",{staticClass:"value"},[t._v(t._s(t._f("fixed")(t.userAssets.maintenanceMargin,2,!0)))])])]),e("div",{staticClass:"line"},[e("div",[e("div",{staticClass:"label"},[t._v("\n            "+t._s(t.$t("cfd.Asset.UsedMagin"))+"\n            "),e("br"),t._v("\n            (USDT)\n          ")]),e("div",{staticClass:"value"},[t._v(t._s(t._f("fixed")(t.userAssets.initMargin,2,!0)))])]),e("div",[e("div",{staticClass:"label"},[t._v("\n            "+t._s(t.$t("cfd.Asset.LiveResult"))+"\n            "),e("br"),t._v("\n            (USDT)\n          ")]),e("div",{staticClass:"value",class:{rise:t.userAssets.isProfit,fall:!t.userAssets.isProfit}},[t._v(t._s(t._f("fixed")(t.userAssets.profitLoss,2,!0)))])])])]),e("div",{staticClass:"options"},[t.isVm?e("button",{staticClass:"cfd-btn",on:{click:t.openResetVirtualAccountDialog}},[t._v(t._s(t.$t("cfd.Asset.ResetVirtualAccountFunds")))]):e("button",{staticClass:"cfd-btn",on:{click:t.openCfdTransferDialog}},[t._v(t._s(t.$t("cfd.Asset.CFDTransfer")))]),e("v-dialog",{attrs:{width:"336"},model:{value:t.resetVirtualAccountDialog,callback:function(s){t.resetVirtualAccountDialog=s},expression:"resetVirtualAccountDialog"}},[e("div",{staticClass:"confirm-reset-account-dialog"},[e("div",{staticClass:"dialog-title"},[t._v("\n            "+t._s(t.$t("cfd.Asset.ResetVirtualAccountDialogTitle"))+"\n            "),e("i",{staticClass:"icon-close",on:{click:t.closeResetVirtualAccountDialog}})]),e("div",{staticClass:"dialog-content"},[e("div",{staticClass:"confirm-text"},[t._v(t._s(t.$t("cfd.Asset.ConfirmResetVirtualAccountFunds")))]),e("div",{staticClass:"operation"},[e("v-btn",{staticClass:"confirm",attrs:{depressed:!0,ripple:!1,loading:t.isResetVirtualAccountConfirmLoading},on:{click:t.handleResetVirtualAccountConfirm}},[t._v("\n                "+t._s(t.$t("cfd.Order.Confirm"))+"\n              ")]),e("button",{staticClass:"cancel",on:{click:t.closeResetVirtualAccountDialog}},[t._v("\n                "+t._s(t.$t("cfd.Order.Cancel"))+"\n              ")])],1)])])]),e("v-dialog",{attrs:{width:"380"},model:{value:t.cfdTransferDialog,callback:function(s){t.cfdTransferDialog=s},expression:"cfdTransferDialog"}},[e("div",{staticClass:"cfd-transfer-dialog"},[e("div",{staticClass:"dialog-title"},[t._v("\n            "+t._s(t.$t("cfd.Asset.CFDTransferDialogTitle"))+"\n            "),e("i",{staticClass:"icon-close",on:{click:t.closeCfdTransferDialog}})]),e("div",{staticClass:"dialog-content cfd-transfer-dialog-content"},[e("div",{staticClass:"set-account"},[e("div",{staticClass:"accounts"},[t._v("\n                "+t._s(t.$t("cfd.Asset.CoinAccount"))+"(USDT)\n                "),e("i",{staticClass:"icon-direction",class:{from:t.isFromMainAccount,to:!t.isFromMainAccount}}),t._v("\n                "+t._s(t.$t("cfd.Asset.CFDAccount"))+"\n              ")]),e("i",{staticClass:"icon-reverse",on:{click:t.switchTransferAccount}})]),e("input-quantity",{attrs:{max:t.available},model:{value:t.quantity,callback:function(s){t.quantity=s},expression:"quantity"}}),e("v-btn",{staticClass:"confirm",attrs:{depressed:!0,ripple:!1,loading:t.isConfirmTransferLoading},on:{click:t.handleConfirmTransfer}},[t._v("\n              "+t._s(t.$t("cfd.Asset.Confirm"))+"\n            ")])],1)])])],1)])],2)},i=[],a=(e("8e6e"),e("ac6a"),e("456d"),e("6b54"),e("96cf"),e("3b8d")),c=(e("c5f6"),e("7514"),e("bd86")),r=e("2f62"),o=e("9dcd"),l=e.n(o),u=e("ad0f"),f=e("7b2e"),d=e("ed08"),v=e("a480");function A(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?A(e,!0).forEach((function(s){Object(c["a"])(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):A(e).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var g={components:{CfdContent:u["a"],InputQuantity:f["a"]},data:function(){return{isFromMainAccount:!0,defaultCurrency:"USDT",isConfirmTransferLoading:!1,cfdTransferDialog:!1,resetVirtualAccountDialog:!1,isResetVirtualAccountConfirmLoading:!1,contentOptions:{title:this.$t("cfd.Asset.Title")},quantity:null}},created:function(){this.getExRecordAssetList()},computed:h({},Object(r["e"])(v["a"],["isVm","userAssets"]),{},Object(r["c"])(["exRecordAssetList"]),{mainAmount:function(){var t=this,s=this.exRecordAssetList.find((function(s){return s.currency===t.defaultCurrency}));return!s||Number(s.amount)<0?l()(0):l()(s.amount)},cfdAmount:function(){return l()(this.userAssets.canUseMoney)},available:function(){return this.isFromMainAccount?this.mainAmount:this.cfdAmount},freeFunds:function(){return this.userAssets.canUseMoney<0?0:this.userAssets.canUseMoney}}),methods:h({},Object(r["b"])(["getExRecordAssetList"]),{},Object(r["b"])(v["a"],["transferFunds","resetVirtualAccount"]),{closeCfdTransferDialog:function(){this.cfdTransferDialog=!1},openCfdTransferDialog:function(){this.cfdTransferDialog=!0},openResetVirtualAccountDialog:function(){this.resetVirtualAccountDialog=!0},closeResetVirtualAccountDialog:function(){this.resetVirtualAccountDialog=!1},switchTransferAccount:function(){this.isFromMainAccount=!this.isFromMainAccount},handleConfirmTransfer:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var s,e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s=this.quantity,/^\d+(\.\d{1,4})?$/.test(s)){t.next=4;break}return this.showErrMsg(this.$t("cfd.Asset.PleaseEnterCorrectQuantity")),t.abrupt("return");case 4:if(s=l()(s),!s.eq(l()(0))){t.next=8;break}return this.showErrMsg(this.$t("cfd.Asset.PleaseEnterCorrectQuantity")),t.abrupt("return");case 8:if(!s.gt(this.available)){t.next=11;break}return this.showErrMsg(this.$t("cfd.Asset.InsufficientQuantityAvailable")),t.abrupt("return");case 11:return e={from_wallet:this.isFromMainAccount?"main":"cfd",to_wallet:this.isFromMainAccount?"cfd":"main",currency:this.defaultCurrency,amount:s.toString()},this.isConfirmTransferLoading=!0,t.next=15,this.transferFunds(e);case 15:n=t.sent,this.isConfirmTransferLoading=!1,n&&(this.showSucMsg(this.$t("cfd.Asset.TransferSuccess")),this.cfdTransferDialog=!1,this.quantity=null,this.isFromMainAccount=!0);case 18:case"end":return t.stop()}}),t,this)})));function s(){return t.apply(this,arguments)}return s}(),handleResetVirtualAccountConfirm:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isResetVirtualAccountConfirmLoading=!0,t.next=3,this.resetVirtualAccount();case 3:s=t.sent,this.isResetVirtualAccountConfirmLoading=!1,s&&(this.showSucMsg(this.$t("cfd.Asset.ResetVirtualAccountFundsSuccess")),this.closeResetVirtualAccountDialog());case 6:case"end":return t.stop()}}),t,this)})));function s(){return t.apply(this,arguments)}return s}()}),watch:{cfdTransferDialog:function(t){t&&this.getExRecordAssetList()}},filters:{fixed:d["e"]}},C=g,b=(e("3787"),e("2877")),m=Object(b["a"])(C,n,i,!1,null,"b846cc0e",null);s["default"]=m.exports},ad0f:function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"left"},[e("div",{staticClass:"left-title"},[e("h3",{staticClass:"left-title-name"},[t._v("\n      "+t._s(t.title)+"\n    ")]),e("div",{staticClass:"left-title-options"},[t._t("left-title-options")],2)]),e("div",{staticClass:"left-content"},[t._t("left-content")],2)])},i=[],a={props:{title:{type:String,default:"Page title"}},data:function(){return{}}},c=a,r=(e("5985"),e("2877")),o=Object(r["a"])(c,n,i,!1,null,"e0d74458",null);s["a"]=o.exports}}]);
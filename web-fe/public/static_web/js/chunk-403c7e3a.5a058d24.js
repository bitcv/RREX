(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-403c7e3a"],{"0a0d":function(t,e,a){"use strict";var s=a("a0ed"),n=a.n(s);n.a},"590d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("ul",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"bw-table record-list"},[a("li",{staticClass:"bw-table__tr bw-table__header"},[a("p",{staticClass:"record-item__token"},[t._v(t._s(t.$t("balance.Token")))]),t.balanceType?a("p",{staticClass:"record-item__type"},[t._v("类型")]):t._e(),a("p",{staticClass:"record-item__time"},[t._v(t._s(t.$t("balance.Amount")))]),a("p",{staticClass:"record-item__amount"},[t._v(t._s(t.$t("balance.ProcessingTime")))]),a("p",{staticClass:"record-item__status"},[t._v(t._s(t.$t("balance.Status")))]),a("p",{staticClass:"record-item__operation"},[t._v("操作")])]),t.tableData&&t.tableData.length?[t._l(t.tableData,(function(e,s){return[a("li",{key:s,staticClass:"bw-table__tr bw-table__body"},[a("p",{staticClass:"record-item__token text-hidden-one"},[t._v(t._s(e.token))]),t.balanceType?a("p",{staticClass:"record-item__type text-hidden-one"},[t._v(t._s("deposit"===t.balanceType?"充币":"提币"))]):t._e(),a("p",{staticClass:"record-item__amount text-hidden-one"},[t._v(t._s(e.amount))]),a("p",{staticClass:"record-item__time text-hidden-one"},[t._v(t._s(e.time))]),"deposit"===t.balanceType?a("el-tooltip",{attrs:{placement:"top"}},[[0,1,3,4].includes(e.state)?a("p",{staticClass:"record-item__status record-item__status--yellow"},[t._v(t._s(t.$t("balance.Processing")))]):t._e(),2===e.state?a("p",{staticClass:"record-item__status record-item__status--green"},[t._v(t._s(t.$t("balance.Processed")))]):t._e(),0===e.state?a("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("balance.DefaultTip")))]):t._e(),1===e.state?a("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("balance.ProcessingTip")))]):t._e(),2===e.state?a("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("balance.ProcessedTip")))]):t._e(),3===e.state?a("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("balance.DeclinedTip")))]):t._e(),4===e.state?a("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("balance.DataErrorTip")))]):t._e()]):"withdraw"===t.balanceType?a("el-tooltip",{attrs:{placement:"top"}},[[0,5,6].includes(e.state)?a("p",{staticClass:"record-item__status record-item__status--yellow"},[t._v(t._s(t.$t("balance.Processing")))]):t._e(),2===e.state?a("p",{staticClass:"record-item__status record-item__status--green"},[t._v(t._s(t.$t("balance.Completed")))]):t._e(),[1,3,4].includes(e.state)?a("p",{staticClass:"record-item__status record-item__status--red"},[t._v(t._s(t.$t("balance.Failed")))]):t._e(),0===e.state?a("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("balance.WithdrawProcessingTip")))]):t._e(),1===e.state?a("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("balance.WithdrawCanceledByUserTip")))]):t._e(),2===e.state?a("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("balance.WithdrawCompletedTip")))]):t._e(),3===e.state?a("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("balance.WithdrawDeclinedTip")))]):t._e(),4===e.state?a("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("balance.WithdrawAbnormalDataTip")))]):t._e(),5===e.state?a("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("balance.WithdrawAwaitingBlockConfirmationTip")))]):t._e(),6===e.state?a("span",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("balance.WithdrawAwaitingEmailConfirmationTip")))]):t._e()]):t._e(),a("div",{staticClass:"record-item__operation"},[[0,6].includes(e.state)?a("a",{staticClass:"record-item__operation-btn record-item__operation-btn--red",attrs:{href:"javascript:;"},on:{click:function(a){return t.$emit("cancel",e.id)}}},[t._v("取消")]):t._e(),a("a",{staticClass:"record-item__operation-btn",attrs:{href:"javascript:;"},on:{click:function(t){e.expanded=!e.expanded}}},[t._v("\n              详情\n              "),a("i",{class:[e.expanded?"el-icon-caret-top":"el-icon-caret-bottom"]})])])],1),a("li",{directives:[{name:"show",rawName:"v-show",value:e.expanded,expression:"item.expanded"}],key:"s-"+s,staticClass:"bw-table__tr record-item__extra"},[a("div",{staticClass:"record-item__extra-item"},[a("p",{staticClass:"record-item__extra-item-field"},[t._v("Txid:")]),a("p",{staticClass:"record-item__extra-item-value"},[t._v(t._s(e.txid))])]),a("div",{staticClass:"record-item__extra-item"},[a("p",{staticClass:"record-item__extra-item-field"},[t._v(t._s(t.$t("balance.Address"))+":")]),a("p",{staticClass:"record-item__extra-item-value"},[t._v(t._s(e.address))])]),e.fee?a("div",{staticClass:"record-item__extra-item"},[a("p",{staticClass:"record-item__extra-item-field"},[t._v(t._s(t.$t("balance.Fee"))+":")]),a("p",{staticClass:"record-item__extra-item-value"},[t._v(t._s(e.fee))])]):t._e()])]}))]:a("noData")],2)])},n=[],i={props:{tableData:{required:!0,type:Array},loading:{required:!0,type:Boolean},balanceType:{type:String,default:""}},computed:{}},c=i,_=(a("0a0d"),a("2877")),o=Object(_["a"])(c,s,n,!1,null,"6fb995ac",null);e["a"]=o.exports},a0ed:function(t,e,a){}}]);
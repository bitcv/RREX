(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42ba95ae"],{"0f6a":function(t,e,n){"use strict";var s=n("e09f"),a=n.n(s);a.a},"17e1":function(t,e,n){t.exports=n.p+"img/ee_install_note_1.2.04699734.png"},"261a":function(t,e,n){t.exports=n.p+"img/logo.1a2319ea.png"},"732f":function(t,e,n){"use strict";var s=n("d225"),a=n("b0b4"),i=n("308d"),o=n("6bb5"),c=n("4e2b"),l=n("aa6b"),r=function(t){function e(){return Object(s["a"])(this,e),Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),Object(a["a"])(e,[{key:"getDownload",value:function(){return this.post("app_version/download")}},{key:"getSiteInfo",value:function(){return this.get("billboard/lists")}}]),e}(l["a"]);e["a"]=new r},7889:function(t,e,n){t.exports=n.p+"img/ee_install_note_2.1.e18447fb.png"},b239:function(t,e,n){"use strict";var s=n("e80e"),a=n.n(s);a.a},c35e:function(t,e,n){t.exports=n.p+"img/ee_install_note_2.2.a5e83a4f.png"},cc2a:function(t,e,n){t.exports=n.p+"img/ee_install_note_1.1.1cf51684.png"},ce3c:function(t,e,n){t.exports=n.p+"img/ee_install_note_3.239ea860.png"},d1fa:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-container"},[s("section",{staticClass:"introduce"},[s("img",{staticClass:"bg-el",attrs:{src:n("fc33"),alt:""}}),t._m(0),s("popupEeInstallNote",{attrs:{status:t.eeInstallNoteVisible},on:{closePopup:function(e){t.eeInstallNoteVisible=!1},confirmInstallIosEe:t.confirmInstallIosEe}}),"ios"===t.env.platform?s("div",{staticClass:"download-btns download-btns-android"},[s("a",{staticClass:"btn-item btn-blue",attrs:{href:"javascript:;"},on:{click:t.handleInstallIosTf}},[t._v("下载 TestFlight 版")])]):s("div",{staticClass:"download-btns download-btns-android"},[s("a",{staticClass:"btn-item btn-blue",attrs:{href:"javascript:;"},on:{click:t.handleInstallAndroid}},[t._v("下载 RREx 客户端")])])],1),t.openInBrowserVisible?s("section",{staticClass:"openInBrowser",on:{click:function(e){t.openInBrowserVisible=!1}}},[s("img",{staticClass:"tips",attrs:{src:n("fea4"),alt:""}})]):t._e()])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ctn"},[s("img",{staticClass:"logo",attrs:{src:n("261a"),alt:""}}),s("p",{staticClass:"app-name"},[t._v("RREx")]),s("h2",{staticClass:"app-title"},[t._v("全球第一家公链社群自治"),s("br"),t._v("创新运营数字资产交易平台")]),s("p",{staticClass:"app-img"})])}],i=(n("96cf"),n("3b8d")),o=n("ed08"),c=n("732f"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"popup"},[s("transition",{attrs:{name:"slideInUp"},on:{"before-enter":t.beforeEnter,"after-leave":t.afterLeave}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],staticClass:"popup-content-wrap"},[s("div",{staticClass:"popup-close",on:{click:t.closePopup}}),s("div",{staticClass:"popup-content"},[s("div",{staticClass:"note-ctn"},[s("h2",{staticClass:"note-title"},[t._v("企业版 App 如何安装？")]),s("p",{staticClass:"note-text"},[t._v("安装后若出现"),s("span",[t._v("“未受信任的企业级开发者”")]),t._v("提示，请前往手机"),s("span",[t._v("“设置”")]),t._v("中授权即可正常使用")]),s("img",{staticClass:"note-img",attrs:{src:n("e979"),alt:""}}),s("p",{staticClass:"note-index"},[t._v("STEP "),s("span",[t._v("01")])]),s("p",{staticClass:"note-text"},[t._v("请前往手机"),s("span",[t._v("“设置 — 通用 — 设备管理”")])]),s("img",{staticClass:"note-img",attrs:{src:n("cc2a"),alt:""}}),s("img",{staticClass:"note-img",attrs:{src:n("17e1"),alt:""}}),s("p",{staticClass:"note-index"},[t._v("STEP "),s("span",[t._v("02")])]),s("p",{staticClass:"note-text"},[t._v("请在"),s("span",[t._v("“设备管理”")]),t._v("列表中找到并点击信任")]),s("img",{staticClass:"note-img",attrs:{src:n("7889"),alt:""}}),s("img",{staticClass:"note-img",attrs:{src:n("c35e"),alt:""}}),s("p",{staticClass:"note-index"},[t._v("STEP "),s("span",[t._v("03")])]),s("p",{staticClass:"note-text"},[t._v("在弹窗中继续点击"),s("span",[t._v("“信任”")]),t._v("回到桌面即可")]),s("img",{staticClass:"note-img",attrs:{src:n("ce3c"),alt:""}})]),s("div",{staticClass:"btn-wrap"},[s("a",{staticClass:"btn-confirm",attrs:{href:"javascript:;"},on:{click:t.confirmInstallIosEe}},[t._v("我已知晓安装过程，跳过")])])])])])],1)},r=[],v={name:"popupEeInstallNote",data:function(){return{wrapStatus:!1}},props:{status:Boolean},computed:{},mounted:function(){},methods:{beforeEnter:function(){this.wrapStatus=!0},afterLeave:function(){this.wrapStatus=!1},closePopup:function(){this.$emit("closePopup")},confirmInstallIosEe:function(){this.$emit("confirmInstallIosEe")}}},f=v,u=(n("b239"),n("2877")),d=Object(u["a"])(f,l,r,!1,null,"0c330248",null),p=d.exports,m={name:"appDownload",data:function(){return{appInfo:{},env:Object(o["i"])(),openInBrowserVisible:!1,eeInstallNoteVisible:!1}},components:{popupEeInstallNote:p},beforeRouteEnter:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,n,s){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].getDownload();case 3:a=t.sent,i=a.data,s((function(t){t.appInfo=i,t.$route.query.action&&"autoDownload"===t.$route.query.action&&t.autoDownload()})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(e,n,s){return t.apply(this,arguments)}return e}(),created:function(){},methods:{handleInstallIosEe:function(){this.env.isInWx?this.openInBrowserVisible=!0:this.eeInstallNoteVisible=!0},confirmInstallIosEe:function(){var t="https://api.rrex.com/app_version/rrexwallet.plist",e="itms-services://?action=download-manifest&url=".concat(encodeURIComponent(t));console.log(e),window.location.href=e},handleInstallIosTf:function(){window.location.href="https://testflight.apple.com/join/GNW3ESRx"},handleInstallAndroid:function(){this.env.isInWx?this.openInBrowserVisible=!0:window.location.href=this.appInfo.Android.download},autoDownload:function(){"ios"===this.env.platform?this.env.isInWx?this.openInBrowserVisible=!0:this.handleInstallIosTf():this.handleInstallAndroid()}}},b=m,z=(n("0f6a"),Object(u["a"])(b,s,a,!1,null,"8e4bda88",null));e["default"]=z.exports},e09f:function(t,e,n){},e80e:function(t,e,n){},e979:function(t,e,n){t.exports=n.p+"img/ee_install_note_0.3a9aa4d3.png"},fc33:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAKFBAMAAABhAHFgAAAAElBMVEVHcExZgOWoqq2HlLIxb+g1cedcsbUZAAAABnRSTlMABhxA1YJ0SkSAAAAIk0lEQVR42u3dQW7bSBQEULYm3nfT9l5KkAMYQfYxMNnHwOT+VxnS8i6DARdU/xb/6xNYhZdikVbMaXIcx3Ecx3Ecx3Ec5+5PEYHjOHrGcQ56qp5xHN794/NR5Q6Bjyp3CHxUuUPAu9x5Dz1V7o6ekbvDu9xdVxGTO+//80HLSMln+cdXp1JG+rRpSq9MrZShIORIvdZW68R7789ZSlvAF957e2+8h3hvfw+VfA7vS7svuQ8Uexrva+5Nv/f+lO0998Y777zzfrPzkbtnkp1jv/bMOIOm1Ezea0UwwnvjPXu/10zePScI8j5Oz9gz+l2/H3XPTHIP2e/DBJ+r3wd6PsO7ntHvB/Re9Tvvmfr9H95jvBf9znuePfNTv/OeqN955z1Tv/92vxri/SfvvOfp9/k377xPvPOu34+4Z9bceQ/x7vtiQd4r77m9J+v3Ind7Jo93+5133uXO+/G8V96DvBfeI/r9O++88y533nmXu/1+596/8c4773K/beztuz3T/2MW3kM+5nVH8s57Gu/feLdnEu133sO8+35kjHffFwvw/sX3I0PuV3mP2e+8x+z3L7yHefd94P7eP9vvId4/u18NGTS8x3l3Xe2f+8x7SM/MI72/KZf3ynt/8LN+D/Be2mkg7mm8ry8CHel9w2l6pta58t499aVpTnWg11Gm8b52/EB/LjNPv5fTUAjyeD9NVc/0/pjvufMecmUd6Y8hp+oZ3uWeaEfKnfcmd97lLne5H/K6qt95l7vc5a7feedd7nKX+/3kfpI773KXu9z1u9x5l7vc5a7f5c673OUud/3Ou9zlLne563fe5S73+8v9LHfe5S53e4Z3ufPOu9x5513uvPMud94P5L3KnXf9Lvc/cj/rmYDUF++F9/6xT+0yNtKDel//eKueiQj+XLM0zWmc0BfvreiZgOTbedd3eOmZTSmtf4y+1lp57829XQZ6uU4a77u/bETPbAlp8T5fWtMzAd737RneN/V729u73DdeVtfcC+8hPcN7f++PvMd4f5F799Ou3vVMwHWV95CeeXzhPWK/r7k33vvG/uFdz/Cewnvj3XU12X5fc+e9u/eHtWd45513ud/wOcHjG+8RQ3L13njvf7/6Zr+HeZd7d+/P7ldDvK89w3uA91+8R3n3fKZ77O/e7ff+Dwoe3tyv8p5ov/Mes2c8nwnx/sw777zLnXfe5c4773Ln/a68N957x37tGd77nqVnvvp9U//De5j3J79vCvNuz8R4t98775l1R77yHjEkeXe/msr7q/vVCO9rz0y8d/f+ifcY7z/0e4T3dUfaMwHe7fewPcM777zLnXfe5c4773LnnXe588673HmP9d5yeJ9H8z7xHuLd98U6nw/vvh8Z5D1H7uP0eym8h5x3794TF9TvO6Yl943BJ/I+jxN7KfNl16h433RhXRbNpZQkPTOO9yX4uXmffP/Ul4I/Tzu+T77wvjH403niPeKHWdaMPRMwaHiPuWM975oV75t7hveQS+uuPWPP8J7Ju37nXb/zzrt+5513/Z7G+5l3PZPHu+eRMafpdz1jz+h3e4Z3/a7feeddv/POu37nnXf9zjvvvPPOO++82+//dc6865mRvfv96iG8n3nnXb/zfmPv9gzvvPPOuz3Du/3OO++888477/vkXnnnnXfeebdneOddv/POO++8884777zb77zzrt955z2V98I774n2DO+82zO839p74f0A3v/iXc/snLs9E7Mj7RneebdnMnu3Z/SMftfv+l2/63f9rt/1u37X7/pdv/Ou3zN4l7uecV3l3X7XM3pGz8jdfj9az/DOu363Z/Q773pGv7tf1e/6Xb/rGf2u3/U77/pdv8tdv/Mud955lzvvvMudd97lzjvvvMudd97lzjvvcuedd7nzzrvceedd7rzzzrvceedd7rzzLnfeeZc777zfd+6Nd97lLve7yt3/K+Nd7nK3Z3iXu9ztGf3Ou56Ru9z1u37nXc/IXe76Xb/LXc/wzrvceedd7rwfIfeT3PVMmtzL4r3IvXfudSql7PmXzeW+1fs81cp759zL4r3tGLvctxZNXb3rmd79vnBvrexX8HLf1jNr7K0W3jt7r21ectczId4b7729t9V7471v7iv3955xXe28I3kP837R7929t4/c9Ux3748XPROyZ3gP6RneI+6brrnz3rnfK+9h3l945513ud/Qe7vmznv//c570H7nPcT7A++8J/PeeA/x7vl7wJ55W8KXe3fvz7zH9bvc+96vFt5DvJdrv/seR2fv9erdfu/v/eHN/SrvvMv9xt5/8R7lvfEe4n3infcs3t/cr0Z4f/Y8kvdk3j2fifFuv8d4d7/a2XvjPcT7xDvvufr9K+/2TDLvjXf3q0m8P3k+w3umfn9tns8EeH+yZ0K8f7LfY7y/8h7h/fmV9xDvPw7rfR6633nnPdOe4d2eSdTvT7zznqjfeeddv/POO++8884777zfl/fGe4j3ifcQ775P0Dn3D++F9xjvE+9d+70U3iO8T+/evZ8vqN8P+h7Qgb1X3kO8lzLveFXlfXvys/cN998zC/hTnSrv/b2fpj2D530j+Gkue/5svG9GsV5dee+9I9fceQ/xXo6a+2ns3HmXO++8y5133uXOO+9y55133uXOO+9y5513ufPOu9x5H937Re6863e588673Mf0XuRuz+h3uet3/a7fedfvvMtdv/POu37nXe76nXe563fe5Z6r3x95592e4Z13/c477/qdd971O++8884777zzzjvvvPPOO++8884777zzzjvvvP/xw/DOu37nnXf9zvt+H+3Mu37X77zrd9551++8867feeddv/POu37nXb/zzrt+5513/c477/qdd971O++863feedfvvPOu33nnnXfeeeedd95555133nnnnXfeeeedd955572H938B8kwjGXHfh4sAAAAASUVORK5CYII="},fea4:function(t,e,n){t.exports=n.p+"img/popup_tips.4d108781.png"}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72832d80"],{"4abe":function(t,e,n){},"699b":function(t,e,n){"use strict";var r=n("4abe"),i=n.n(r);i.a},"7b2e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"quantity"},[n("div",[t._v("\n      "+t._s(t.$t("cfd.Asset.Quantity"))+"\n    ")]),n("div",[t._v("\n      "+t._s(t.$t("cfd.Asset.QuantityAvailable",{quantity:t.max}))+"\n    ")])]),n("div",{staticClass:"set-quantity"},[n("input",{staticClass:"input-quantity",attrs:{type:"text",disabled:t.disabled,placeholder:t.$t("cfd.Asset.PleaseEnterTokenQuantity",{token:t.token})},domProps:{value:t.value},on:{input:t.onQuantityInput}}),n("div",{staticClass:"set-all-quantity",on:{click:t.allQuantity}},[t._v(t._s(t.$t("cfd.Asset.All")))])])])},i=[],s=(n("6b54"),n("9dcd")),o=n.n(s),u={props:{max:{type:o.a,default:function(){return o()(0)}},token:{type:String,default:""},value:{type:String,default:null,event:"input"},disabled:{type:Boolean,default:!1}},data:function(){return{}},methods:{onQuantityInput:function(t){var e=t.target.value;if(""!==e&&null!==e)return/^\d+(\.\d{0,4})?$/.test(e)?void this.$emit("input",e):(t.target.value=this.value,void this.$emit("input",this.value));this.$emit("input",null)},allQuantity:function(){this.disabled||this.$emit("input",this.max.toString())}}},c=u,f=(n("699b"),n("2877")),l=Object(f["a"])(c,r,i,!1,null,"51d5e8ab",null);e["a"]=l.exports},"9dcd":function(t,e,n){var r;(function(i){"use strict";var s,o=20,u=1,c=1e6,f=1e6,l=-7,a=21,h="[big.js] ",d=h+"Invalid ",p=d+"decimal places",v=d+"rounding mode",g=h+"Division by zero",w={},m=void 0,b=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function y(){function t(e){var n=this;if(!(n instanceof t))return e===m?y():new t(e);e instanceof t?(n.s=e.s,n.e=e.e,n.c=e.c.slice()):E(n,e),n.constructor=t}return t.prototype=w,t.DP=o,t.RM=u,t.NE=l,t.PE=a,t.version="5.2.2",t}function E(t,e){var n,r,i;if(0===e&&1/e<0)e="-0";else if(!b.test(e+=""))throw Error(d+"number");for(t.s="-"==e.charAt(0)?(e=e.slice(1),-1):1,(n=e.indexOf("."))>-1&&(e=e.replace(".","")),(r=e.search(/e/i))>0?(n<0&&(n=r),n+=+e.slice(r+1),e=e.substring(0,r)):n<0&&(n=e.length),i=e.length,r=0;r<i&&"0"==e.charAt(r);)++r;if(r==i)t.c=[t.e=0];else{for(;i>0&&"0"==e.charAt(--i););for(t.e=n-r-1,t.c=[],n=0;r<=i;)t.c[n++]=+e.charAt(r++)}return t}function A(t,e,n,r){var i=t.c,s=t.e+e+1;if(s<i.length){if(1===n)r=i[s]>=5;else if(2===n)r=i[s]>5||5==i[s]&&(r||s<0||i[s+1]!==m||1&i[s-1]);else if(3===n)r=r||!!i[0];else if(r=!1,0!==n)throw Error(v);if(s<1)i.length=1,r?(t.e=-e,i[0]=1):i[0]=t.e=0;else{if(i.length=s--,r)for(;++i[s]>9;)i[s]=0,s--||(++t.e,i.unshift(1));for(s=i.length;!i[--s];)i.pop()}}else if(n<0||n>3||n!==~~n)throw Error(v);return t}function k(t,e,n,r){var i,s,o=t.constructor,u=!t.c[0];if(n!==m){if(n!==~~n||n<(3==e)||n>c)throw Error(3==e?d+"precision":p);for(t=new o(t),n=r-t.e,t.c.length>++r&&A(t,n,o.RM),2==e&&(r=t.e+n+1);t.c.length<r;)t.c.push(0)}if(i=t.e,s=t.c.join(""),n=s.length,2!=e&&(1==e||3==e&&r<=i||i<=o.NE||i>=o.PE))s=s.charAt(0)+(n>1?"."+s.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)s="0"+s;s="0."+s}else if(i>0)if(++i>n)for(i-=n;i--;)s+="0";else i<n&&(s=s.slice(0,i)+"."+s.slice(i));else n>1&&(s=s.charAt(0)+"."+s.slice(1));return t.s<0&&(!u||4==e)?"-"+s:s}w.abs=function(){var t=new this.constructor(this);return t.s=1,t},w.cmp=function(t){var e,n=this,r=n.c,i=(t=new n.constructor(t)).c,s=n.s,o=t.s,u=n.e,c=t.e;if(!r[0]||!i[0])return r[0]?s:i[0]?-o:0;if(s!=o)return s;if(e=s<0,u!=c)return u>c^e?1:-1;for(o=(u=r.length)<(c=i.length)?u:c,s=-1;++s<o;)if(r[s]!=i[s])return r[s]>i[s]^e?1:-1;return u==c?0:u>c^e?1:-1},w.div=function(t){var e=this,n=e.constructor,r=e.c,i=(t=new n(t)).c,s=e.s==t.s?1:-1,o=n.DP;if(o!==~~o||o<0||o>c)throw Error(p);if(!i[0])throw Error(g);if(!r[0])return new n(0*s);var u,f,l,a,h,d=i.slice(),v=u=i.length,w=r.length,b=r.slice(0,u),y=b.length,E=t,k=E.c=[],x=0,P=o+(E.e=e.e-t.e)+1;for(E.s=s,s=P<0?0:P,d.unshift(0);y++<u;)b.push(0);do{for(l=0;l<10;l++){if(u!=(y=b.length))a=u>y?1:-1;else for(h=-1,a=0;++h<u;)if(i[h]!=b[h]){a=i[h]>b[h]?1:-1;break}if(!(a<0))break;for(f=y==u?i:d;y;){if(b[--y]<f[y]){for(h=y;h&&!b[--h];)b[h]=9;--b[h],b[y]+=10}b[y]-=f[y]}for(;!b[0];)b.shift()}k[x++]=a?l:++l,b[0]&&a?b[y]=r[v]||0:b=[r[v]]}while((v++<w||b[0]!==m)&&s--);return k[0]||1==x||(k.shift(),E.e--),x>P&&A(E,o,n.RM,b[0]!==m),E},w.eq=function(t){return!this.cmp(t)},w.gt=function(t){return this.cmp(t)>0},w.gte=function(t){return this.cmp(t)>-1},w.lt=function(t){return this.cmp(t)<0},w.lte=function(t){return this.cmp(t)<1},w.minus=w.sub=function(t){var e,n,r,i,s=this,o=s.constructor,u=s.s,c=(t=new o(t)).s;if(u!=c)return t.s=-c,s.plus(t);var f=s.c.slice(),l=s.e,a=t.c,h=t.e;if(!f[0]||!a[0])return a[0]?(t.s=-c,t):new o(f[0]?s:0);if(u=l-h){for((i=u<0)?(u=-u,r=f):(h=l,r=a),r.reverse(),c=u;c--;)r.push(0);r.reverse()}else for(n=((i=f.length<a.length)?f:a).length,u=c=0;c<n;c++)if(f[c]!=a[c]){i=f[c]<a[c];break}if(i&&(r=f,f=a,a=r,t.s=-t.s),(c=(n=a.length)-(e=f.length))>0)for(;c--;)f[e++]=0;for(c=e;n>u;){if(f[--n]<a[n]){for(e=n;e&&!f[--e];)f[e]=9;--f[e],f[n]+=10}f[n]-=a[n]}for(;0===f[--c];)f.pop();for(;0===f[0];)f.shift(),--h;return f[0]||(t.s=1,f=[h=0]),t.c=f,t.e=h,t},w.mod=function(t){var e,n=this,r=n.constructor,i=n.s,s=(t=new r(t)).s;if(!t.c[0])throw Error(g);return n.s=t.s=1,e=1==t.cmp(n),n.s=i,t.s=s,e?new r(n):(i=r.DP,s=r.RM,r.DP=r.RM=0,n=n.div(t),r.DP=i,r.RM=s,this.minus(n.times(t)))},w.plus=w.add=function(t){var e,n=this,r=n.constructor,i=n.s,s=(t=new r(t)).s;if(i!=s)return t.s=-s,n.minus(t);var o=n.e,u=n.c,c=t.e,f=t.c;if(!u[0]||!f[0])return f[0]?t:new r(u[0]?n:0*i);if(u=u.slice(),i=o-c){for(i>0?(c=o,e=f):(i=-i,e=u),e.reverse();i--;)e.push(0);e.reverse()}for(u.length-f.length<0&&(e=f,f=u,u=e),i=f.length,s=0;i;u[i]%=10)s=(u[--i]=u[i]+f[i]+s)/10|0;for(s&&(u.unshift(s),++c),i=u.length;0===u[--i];)u.pop();return t.c=u,t.e=c,t},w.pow=function(t){var e=this,n=new e.constructor(1),r=n,i=t<0;if(t!==~~t||t<-f||t>f)throw Error(d+"exponent");for(i&&(t=-t);;){if(1&t&&(r=r.times(e)),t>>=1,!t)break;e=e.times(e)}return i?n.div(r):r},w.round=function(t,e){var n=this.constructor;if(t===m)t=0;else if(t!==~~t||t<-c||t>c)throw Error(p);return A(new n(this),t,e===m?n.RM:e)},w.sqrt=function(){var t,e,n,r=this,i=r.constructor,s=r.s,o=r.e,u=new i(.5);if(!r.c[0])return new i(r);if(s<0)throw Error(h+"No square root");s=Math.sqrt(r+""),0===s||s===1/0?(e=r.c.join(""),e.length+o&1||(e+="0"),s=Math.sqrt(e),o=((o+1)/2|0)-(o<0||1&o),t=new i((s==1/0?"1e":(s=s.toExponential()).slice(0,s.indexOf("e")+1))+o)):t=new i(s),o=t.e+(i.DP+=4);do{n=t,t=u.times(n.plus(r.div(n)))}while(n.c.slice(0,o).join("")!==t.c.slice(0,o).join(""));return A(t,i.DP-=4,i.RM)},w.times=w.mul=function(t){var e,n=this,r=n.constructor,i=n.c,s=(t=new r(t)).c,o=i.length,u=s.length,c=n.e,f=t.e;if(t.s=n.s==t.s?1:-1,!i[0]||!s[0])return new r(0*t.s);for(t.e=c+f,o<u&&(e=i,i=s,s=e,f=o,o=u,u=f),e=new Array(f=o+u);f--;)e[f]=0;for(c=u;c--;){for(u=0,f=o+c;f>c;)u=e[f]+s[c]*i[f-c-1]+u,e[f--]=u%10,u=u/10|0;e[f]=(e[f]+u)%10}for(u?++t.e:e.shift(),c=e.length;!e[--c];)e.pop();return t.c=e,t},w.toExponential=function(t){return k(this,1,t,t)},w.toFixed=function(t){return k(this,2,t,this.e+t)},w.toPrecision=function(t){return k(this,3,t,t-1)},w.toString=function(){return k(this)},w.valueOf=w.toJSON=function(){return k(this,4)},s=y(),s["default"]=s.Big=s,r=function(){return s}.call(e,n,e,t),void 0===r||(t.exports=r)})()}}]);
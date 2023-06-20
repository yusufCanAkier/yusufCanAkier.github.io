/*! For license information please see 2670.d347d438.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2670],{62670:function(t,e,r){r.r(e);var n=r(74165),o=r(15861),i=r(29439),a=r(72791),c=r(78983),u=r(26238),l=r(1645),s=r(80184);e.default=function(){var t=(0,a.useState)(""),e=(0,i.Z)(t,2),r=e[0],h=e[1],f=(0,a.useState)(""),d=(0,i.Z)(f,2),p=d[0],v=d[1],m=(0,a.useState)(""),y=(0,i.Z)(m,2),g=y[0],x=y[1],w=(0,a.useState)(""),j=(0,i.Z)(w,2),b=j[0],L=j[1],_=(0,a.useState)(""),E=(0,i.Z)(_,2),N=E[0],O=E[1],S=(0,a.useState)(""),C=(0,i.Z)(S,2),k=C[0],Z=C[1],P=(0,a.useContext)(l.Z).userID,G=(0,a.useState)(!1),Y=(0,i.Z)(G,2),R=Y[0],T=Y[1],A=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var e,o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={resourceGroupName:r,vmName:p,vmSize:g,adminUsername:b,adminPassword:b,location:k},o="http://localhost:7070/vm/createazure/"+P,t.next=4,fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){if(t.ok)return T(!R),t.json();console.log("olmadi")})).then((function(t){console.log(t)})).catch((function(t){console.error("Hata:",t)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,s.jsx)(c.rb,{children:(0,s.jsx)(c.b7,{xs:12,children:(0,s.jsxs)(c.xH,{className:"mb-4",children:[(0,s.jsx)(c.bn,{children:(0,s.jsx)("strong",{children:"Create Azure Virtual Machine"})}),(0,s.jsx)(c.sl,{children:(0,s.jsxs)(u.q3,{href:"forms/input-group",children:[(0,s.jsx)(c.YR,{className:"mb-3",children:(0,s.jsx)(c.jO,{placeholder:"Resource Group Name","aria-label":"Resource Group Name",value:r,onChange:function(t){return h(t.target.value)}})}),(0,s.jsx)(c.YR,{className:"mb-3",children:(0,s.jsx)(c.jO,{placeholder:"Virtual Machine Name","aria-label":"Virtual Machine Name",value:p,onChange:function(t){return v(t.target.value)}})}),(0,s.jsx)(c.YR,{className:"mb-3",children:(0,s.jsx)(c.jO,{placeholder:"Virtual Machine Size","aria-label":"Virtual Machine Size",value:g,onChange:function(t){return x(t.target.value)}})}),(0,s.jsx)(c.YR,{className:"mb-3",children:(0,s.jsx)(c.jO,{placeholder:"Admin Username","aria-label":"Admin Username",value:b,onChange:function(t){return L(t.target.value)}})}),(0,s.jsx)(c.YR,{className:"mb-3",children:(0,s.jsx)(c.jO,{type:"password",placeholder:"Admin Password","aria-label":"Admin Password",value:N,onChange:function(t){return O(t.target.value)}})}),(0,s.jsx)(c.YR,{className:"mb-3",children:(0,s.jsx)(c.jO,{placeholder:"Location","aria-label":"Location",value:k,onChange:function(t){return Z(t.target.value)}})}),(0,s.jsx)(c.u5,{onClick:A,children:"Create"}),(0,s.jsxs)(c.Tk,{visible:R,onClose:function(){return T(!1)},children:[(0,s.jsx)(c.p0,{onClose:function(){return T(!1)},children:(0,s.jsx)(c.fl,{children:"Successfully"})}),(0,s.jsx)(c.sD,{children:"VM Successfully Created !"}),(0,s.jsx)(c.Ym,{children:(0,s.jsx)(c.u5,{color:"secondary",onClick:function(){return T(!1)},children:"Close"})})]})]})})]})})})}},15861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},74165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(71002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(k){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new O(n||[]);return i(a,"_invoke",{value:L(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=h;var d={};function p(){}function v(){}function m(){}var y={};s(y,c,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(S([])));x&&x!==e&&r.call(x,c)&&(y=x);var w=m.prototype=p.prototype=Object.create(y);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(i,a,c,u){var l=f(t[i],t,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return o("throw",t,c,u)}))}u(l.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=m,i(w,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=s(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},j(b.prototype),s(b.prototype,u,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(h(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(w),s(w,l,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}}}]);
//# sourceMappingURL=2670.d347d438.chunk.js.map
(()=>{"use strict";var t={771:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"body {\r\n  background: #4ca1af;\r\n  background: -webkit-linear-gradient(to right, #c4e0e5, #4ca1af);\r\n  background: linear-gradient(to right, #c4e0e5, #4ca1af);\r\n}\r\n",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<t.length;d++){var u=[].concat(t[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var h=n(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var y=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:y,references:1})}i.push(l)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),d=0;d<a.length;d++){var u=n(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),u=n.n(d),l=n(589),h=n.n(l),p=n(771),y={};y.styleTagTransform=h(),y.setAttributes=s(),y.insert=i().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=u(),e()(p.Z,y),p.Z&&p.Z.locals&&p.Z.locals;const f=new class{constructor(){this.city,this.countryCode,this.defaultCity="New York",this.defaultCountry="us"}getLocationData(){let t=localStorage.getItem("city"),e=localStorage.getItem("countryCode");return null===t||null===e?(this.city=this.defaultCity,this.countryCode=this.defaultCountry):(this.city=t,this.countryCode=e),{city:this.city,countryCode:this.countryCode}}setLocationData(t,e){localStorage.setItem("city",t),localStorage.setItem("countryCode",e)}},{city:m,countryCode:v}=f.getLocationData(),g=new class{constructor(t,e){this.apikey="5d38bd50fb2f84c3c7421dd326b4d3ab",this.city=t,this.countryCode=e}async getWeather(){const t=`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`,e=await fetch(t);return await e.json()}changeLocation(t,e){this.city=t,this.countryCode=e}}(m,v),w=new class{constructor(){this.location=document.getElementById("weather-location"),this.desc=document.getElementById("weather-description"),this.temp=document.getElementById("weather-string"),this.humidity=document.getElementById("weather-humidity"),this.wind=document.getElementById("weather-wind")}render(t){this.location.textContent=`${t.name} / ${t.sys.country}`,this.desc.textContent=t.weather[0].description,this.temp.textContent=`${t.main.temp}°C`,this.humidity.innerHTML=`<strong>Humidity</strong>: ${t.main.humidity}%`,this.wind.innerHTML=`<strong>Wind</strong>: ${t.wind.speed} m/s`}},C=async()=>{const t=await g.getWeather();w.render(t)};document.getElementById("weather-change-btn").addEventListener("click",(t=>{const e=document.getElementById("city").value,n=document.getElementById("country-code").value;g.changeLocation(e,n),f.setLocationData(e,n),C(),t.preventDefault()})),document.addEventListener("DOMContentLoaded",C)})()})();
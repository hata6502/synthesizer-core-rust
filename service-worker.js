if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const o={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return o;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-fa316fc2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"0ba680d8054fec03ed21.module.wasm",revision:null},{url:"865.js",revision:"16dc2a6fd41f76150ed644d4e5bc4b6c"},{url:"CNAME",revision:"598b2cc709f84d7a2383014a33c00f61"},{url:"favicon.png",revision:"2350d190bbb1a0c64970cb95d0a5f1c4"},{url:"index.html",revision:"bb867fe0fa0f2d22424606d6c6090027"},{url:"main.js",revision:"048d32d5db971558378ad49bb06725d7"},{url:"main.js.LICENSE.txt",revision:"d1146f1c6277525ad071ff7c9eb58800"},{url:"manifest.json",revision:"9e7d15c0fb026a23f825e3015d39b8db"}],{})}));

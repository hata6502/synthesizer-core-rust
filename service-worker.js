if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return c;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-fa316fc2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"865.js",revision:"b5842209c1a551c64027a64d1f53ecf5"},{url:"CNAME",revision:"598b2cc709f84d7a2383014a33c00f61"},{url:"d2ce172ace7b8b5f647a.module.wasm",revision:null},{url:"favicon.png",revision:"2350d190bbb1a0c64970cb95d0a5f1c4"},{url:"index.html",revision:"f5f4754f1ebd2fc91d430df254c108b2"},{url:"main.js",revision:"f55571033166067ccf9ac8260819cfde"},{url:"main.js.LICENSE.txt",revision:"d1146f1c6277525ad071ff7c9eb58800"},{url:"manifest.json",revision:"e1599705d0383931a9326d5da2f4f5f6"}],{})}));

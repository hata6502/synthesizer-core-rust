if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,c)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=c(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-fa316fc2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"255fe8ff56c79760f80c.module.wasm",revision:null},{url:"542.js",revision:"583ccde5acc13716d10eff514dcccfee"},{url:"CNAME",revision:"598b2cc709f84d7a2383014a33c00f61"},{url:"favicon.png",revision:"2350d190bbb1a0c64970cb95d0a5f1c4"},{url:"index.html",revision:"f5f4754f1ebd2fc91d430df254c108b2"},{url:"main.js",revision:"46cf4151b56bd4819741abc0c6eb7478"},{url:"main.js.LICENSE.txt",revision:"28679b9d74ae82b8deef889bea05d04a"},{url:"manifest.json",revision:"e1599705d0383931a9326d5da2f4f5f6"}],{})}));
(()=>{"use strict";var c={314:(c,n,l)=>{l.d(n,{Z:()=>i});var e=l(645),t=l.n(e)()((function(c){return c[1]}));t.push([c.id,"html, body {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\nheader, footer {\n  height: 96px;\n  background-color: #fff;\n}\n\nheader ul,\nfooter ul {\n  display: flex;\n  padding: 16px 32px;\n  line-height: 64px;\n  margin: 0;\n  list-style: none;\n}\n\nheader ul li:not(:last-child),\nfooter ul li:not(:last-child) {\n  margin-right: 32px;\n}\n\nheader ul li:last-child {\n  margin-left: auto;\n}\n\nmain {\n  display: flex;\n  align-items: center;\n  height: calc(100% - 192px);\n  background-color: #ffdcdc;\n}\n\nmain > div {\n  padding-left: 32px;\n  flex-basis: 50%;\n}\n\n#avatar svg {\n  border-radius: 50%;\n  box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),\n  -12px -12px 24px 0 rgba(255, 255, 255, 0.5);\n}\n\n.text {\n  font-size: 48px;\n  text-align: center;\n}\n\n.input-wrapper {\n  position: relative;\n  width: 60%;\n  margin: 0 auto;\n}\n\n.input-wrapper input,\n.input-wrapper .focus-input {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 62px;\n  box-sizing: border-box;\n  background: #fff;\n  border-radius: 31px;\n}\n\n.input-wrapper input {\n  z-index: 1;\n  padding: 0 35px 0 35px;\n  line-height: 1.2;\n  border: none;\n  outline: none;\n  font-size: 18px;\n  color: #8f8fa1;\n}\n\n.input-wrapper .focus-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 300ms ease;\n}\n\n.input-wrapper input:focus + .focus-input,\n.input-wrapper input:active + .focus-input {\n  transform: scaleX(1.05);\n}\n",""]);const i=t},645:c=>{c.exports=function(c){var n=[];return n.toString=function(){return this.map((function(n){var l=c(n);return n[2]?"@media ".concat(n[2]," {").concat(l,"}"):l})).join("")},n.i=function(c,l,e){"string"==typeof c&&(c=[[null,c,""]]);var t={};if(e)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(t[a]=!0)}for(var r=0;r<c.length;r++){var f=[].concat(c[r]);e&&t[f[0]]||(l&&(f[2]?f[2]="".concat(l," and ").concat(f[2]):f[2]=l),n.push(f))}},n}},379:(c,n,l)=>{var e,t=function(){var c={};return function(n){if(void 0===c[n]){var l=document.querySelector(n);if(window.HTMLIFrameElement&&l instanceof window.HTMLIFrameElement)try{l=l.contentDocument.head}catch(c){l=null}c[n]=l}return c[n]}}(),i=[];function a(c){for(var n=-1,l=0;l<i.length;l++)if(i[l].identifier===c){n=l;break}return n}function r(c,n){for(var l={},e=[],t=0;t<c.length;t++){var r=c[t],f=n.base?r[0]+n.base:r[0],p=l[f]||0,d="".concat(f," ").concat(p);l[f]=p+1;var g=a(d),o={css:r[1],media:r[2],sourceMap:r[3]};-1!==g?(i[g].references++,i[g].updater(o)):i.push({identifier:d,updater:u(o,n),references:1}),e.push(d)}return e}function f(c){var n=document.createElement("style"),e=c.attributes||{};if(void 0===e.nonce){var i=l.nc;i&&(e.nonce=i)}if(Object.keys(e).forEach((function(c){n.setAttribute(c,e[c])})),"function"==typeof c.insert)c.insert(n);else{var a=t(c.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var p,d=(p=[],function(c,n){return p[c]=n,p.filter(Boolean).join("\n")});function g(c,n,l,e){var t=l?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(c.styleSheet)c.styleSheet.cssText=d(n,t);else{var i=document.createTextNode(t),a=c.childNodes;a[n]&&c.removeChild(a[n]),a.length?c.insertBefore(i,a[n]):c.appendChild(i)}}function o(c,n,l){var e=l.css,t=l.media,i=l.sourceMap;if(t?c.setAttribute("media",t):c.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),c.styleSheet)c.styleSheet.cssText=e;else{for(;c.firstChild;)c.removeChild(c.firstChild);c.appendChild(document.createTextNode(e))}}var s=null,h=0;function u(c,n){var l,e,t;if(n.singleton){var i=h++;l=s||(s=f(n)),e=g.bind(null,l,i,!1),t=g.bind(null,l,i,!0)}else l=f(n),e=o.bind(null,l,n),t=function(){!function(c){if(null===c.parentNode)return!1;c.parentNode.removeChild(c)}(l)};return e(c),function(n){if(n){if(n.css===c.css&&n.media===c.media&&n.sourceMap===c.sourceMap)return;e(c=n)}else t()}}c.exports=function(c,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var l=r(c=c||[],n);return function(c){if(c=c||[],"[object Array]"===Object.prototype.toString.call(c)){for(var e=0;e<l.length;e++){var t=a(l[e]);i[t].references--}for(var f=r(c,n),p=0;p<l.length;p++){var d=a(l[p]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}l=f}}}}},n={};function l(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={id:e,exports:{}};return c[e](i,i.exports,l),i.exports}l.n=c=>{var n=c&&c.__esModule?()=>c.default:()=>c;return l.d(n,{a:n}),n},l.d=(c,n)=>{for(var e in n)l.o(n,e)&&!l.o(c,e)&&Object.defineProperty(c,e,{enumerable:!0,get:n[e]})},l.o=(c,n)=>Object.prototype.hasOwnProperty.call(c,n),(()=>{const c=(c,l)=>c[n(l,0,c.length-1)],n=(c,n,l)=>Math.floor((c- -2147483648)/4294967295*(l+1-n)+n),e=c=>t(i(t(c,13),17),5),t=(c,n)=>c^c<<n,i=(c,n)=>c^c>>n,a=c=>c.split("").map((c=>c.charCodeAt(0))).reduce(((c,n)=>r((c<<5)-c+n)),0),r=c=>0|c,f=["#ece2e1"],p=["#d291bc","#ea8a8a","#ee9595","#fa9579","#b1bed5","#a0c1b8","#7e8a97","#9dad7f"],d=[c=>'\n    <g>\n      <ellipse transform="matrix(0.5378 -0.8431 0.8431 0.5378 0.1403 381.5061)" cx="348.02" cy="190.63" rx="8.26" ry="19.4"/>\n      <ellipse transform="matrix(0.8431 -0.5378 0.5378 0.8431 -86.4473 113.9357)" cx="152" cy="205.09" rx="19.4" ry="8.26"/>\n    </g>\n  ',c=>'\n    <g>\n      <path d="M332.96,196.65c-0.12,0-0.25,0-0.38-0.01l-27.54-2.04c-2.75-0.2-4.82-2.6-4.62-5.36s2.59-4.82,5.36-4.62l27.54,2.04c2.75,0.2,4.82,2.6,4.62,5.36C337.75,194.65,335.56,196.65,332.96,196.65z"/>\n      <path d="M166.61,196.65c0.12,0,0.25,0,0.38-0.01l27.54-2.04c2.75-0.2,4.82-2.6,4.62-5.36s-2.59-4.82-5.36-4.62l-27.54,2.04c-2.75,0.2-4.82,2.6-4.62,5.36C161.83,194.65,164.02,196.65,166.61,196.65z"/>\n    </g>\n  ',c=>'\n    <g>\n      <path d="M139.81,202.96c-0.96,0-1.93-0.28-2.79-0.85c-2.29-1.54-2.9-4.65-1.36-6.94c10.49-15.58,25.86-20.49,45.7-14.6c2.65,0.79,4.16,3.57,3.37,6.22s-3.57,4.16-6.22,3.37c-15.59-4.63-26.57-1.27-34.56,10.59C143,202.19,141.42,202.96,139.81,202.96z"/>\n      <path d="M361.4,202.96c-1.61,0-3.19-0.77-4.15-2.21c-7.98-11.86-18.96-15.23-34.56-10.59c-2.65,0.79-5.43-0.72-6.22-3.37c-0.79-2.65,0.72-5.43,3.37-6.22c19.84-5.9,35.21-0.98,45.7,14.6c1.54,2.29,0.93,5.4-1.36,6.94C363.33,202.69,362.36,202.96,361.4,202.96z"/>\n    </g>\n  '],g=(c,n)=>s(o(c).map((c=>h(c-n,0,255)))),o=c=>c.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,((c,n,l,e)=>"#"+n+n+l+l+e+e)).substring(1).match(/.{2}/g).map((c=>parseInt(c,16))),s=c=>"#"+c.map((c=>`0${c.toString(16)}`.substr(-2))).join(""),h=(c,n,l)=>Math.min(l,Math.max(n,c)),u=[c=>`\n    <g>\n      <g>\n        <path fill="${c}" d="M169,122.37c-6.82,2.93-13.41,6.21-19.76,9.82c-23.92,13.63-44.3,31.96-59.58,53.58c-6.45,9.12-11.99,18.83-16.5,29.02c-8.51-36.86-26.61-129.35,5.73-130.71C105.82,82.95,145.51,106.52,169,122.37z"/>\n        <path fill="#fec3aa" d="M149.24,132.19c-23.92,13.63-44.3,31.96-59.58,53.58c-5.68-26.93-13.13-74.86,5.52-75.65C111.09,109.45,133.94,122.22,149.24,132.19z"/>\n      </g>\n      <g>\n        <path fill="${c}" d="M426.7,214.48c-3.86-8.67-8.46-16.98-13.73-24.88c-16.18-24.24-38.65-44.6-65.35-59.15c-5.41-2.96-11-5.67-16.74-8.14c23.5-15.85,63.13-39.36,90.02-38.23C453.15,85.44,435.24,177.41,426.7,214.48z"/>\n        <path fill="#fec3aa" d="M412.97,189.6c-16.18-24.24-38.65-44.6-65.35-59.15c16.67-10.93,42.02-25.24,59.6-24.51C427.83,106.81,419.18,160.51,412.97,189.6z"/>\n      </g>\n    </g>\n  `,c=>`\n    <g>\n      <g>\n        <path fill="${g(c,30)}" d="M71.43,144.78c-7.58-15.77,70.38-53.22,77.96-37.45c8.76,22.89,7.8,42.95-1.61,60.58c-6.54,12.26-20.12,18.9-33.82,16.54C92.56,180.75,78.2,167.78,71.43,144.78z"/>\n      </g>\n      <g>\n        <path fill="${g(c,30)}" d="M423.44,144.78c7.58-15.77-70.38-53.22-77.96-37.45c-8.76,22.89-7.8,42.95,1.61,60.58c6.54,12.26,20.12,18.9,33.82,16.54C402.31,180.75,416.68,167.78,423.44,144.78z"/>\n      </g>\n    </g>\n  `,c=>`\n    <g>\n      <g>\n        <path fill="${g(c,30)}" d="M168.96,122.39c-44.82-64.85-131.4,5.71-112,54.39c22.14,31.31,49.5,25.6,82.55-20.4c4.69-6.52,7.07-14.42,6.74-22.45v0C153.75,129.52,161.32,125.62,168.96,122.39z"/>\n        <path d="M146.24,133.94c-0.88-14.03-5.04-23.82-13.54-28.02c11.19-0.95,21.55,4.63,30.78,18.9L146.24,133.94z"/>\n      </g>\n      <g>\n        <path fill="${g(c,30)}" d="M331.04,122.39c44.82-64.85,131.4,5.71,112,54.39c-22.14,31.31-49.5,25.6-82.55-20.4c-4.69-6.52-7.07-14.42-6.74-22.45v0C346.24,129.52,338.68,125.62,331.04,122.39z"/>\n        <path d="M353.75,133.94c0.88-14.03,5.04-23.82,13.54-28.02c-11.19-0.95-21.55,4.63-30.78,18.9L353.75,133.94z"/>\n      </g>\n    </g>\n  `,c=>`\n    <g>\n      <g>\n        <path fill="${c}" d="M168.93,122.41c-7.02,3.01-13.81,6.4-20.33,10.15c-12.31,7.07-23.67,15.39-33.87,24.76c-0.75,0.69-1.48,1.38-2.21,2.07c-29.45-10.66-40.36-32.36-41.09-60.11C108.42,93.89,148.17,96.28,168.93,122.41z"/>\n        <path fill="#fec3aa" d="M148.6,132.56c-12.31,7.07-23.67,15.39-33.87,24.76c-20.72-8.3-28.47-24.32-29.01-44.64C112.9,108.72,135.09,113.26,148.6,132.56z"/>\n      </g>\n      <g>\n        <path fill="${c}" d="M331.04,122.41c7.02,3.01,13.81,6.4,20.33,10.15c12.31,7.07,23.67,15.39,33.87,24.76c0.75,0.69,1.48,1.38,2.21,2.07c29.45-10.66,40.36-32.36,41.09-60.11C391.55,93.89,351.8,96.28,331.04,122.41z"/>\n        <path fill="#fec3aa" d="M351.37,132.56c12.31,7.07,23.67,15.39,33.87,24.76c20.72-8.3,28.47-24.32,29.01-44.64C387.07,108.72,364.88,113.26,351.37,132.56z"/>\n      </g>\n    </g>\n  `,c=>`\n    <g>\n      <path fill="${g(c,60)}" d="M107.11,128.21c-47.43,23.06-20.79,59.05,31.73,51.65c7.2-1.01,13.18-6.16,15.26-13.13C169.2,116,137.02,84.78,107.11,128.21z"/>\n      <path fill="${g(c,60)}" d="M392.16,128.21c47.43,23.06,20.79,59.05-31.73,51.65c-7.2-1.01-13.18-6.16-15.26-13.13C330.08,116,362.26,84.78,392.16,128.21z"/>\n    </g>\n  `,c=>`\n    <g>\n      <g>\n        <path fill="${c}" d="M168.96,122.39c-4.56,1.95-9.01,4.07-13.36,6.34c-20.02,10.44-37.77,24.09-52.41,40.19c-0.77,0.85-1.53,1.71-2.28,2.57c-24.46-29.45-19.55-46.46,9.15-83.55C141.72,87.94,168.28,92.02,168.96,122.39z"/>\n        <path fill="#fec3aa" d="M155.6,128.73c-20.02,10.44-37.77,24.09-52.41,40.19c-16.6-20.52-20.27-33.36,0.41-60.07C125.11,108.85,150.57,111.36,155.6,128.73z"/>\n      </g>\n      <g>\n        <path fill="${c}" d="M331.04,122.39c4.56,1.95,9.01,4.07,13.36,6.34c20.02,10.44,37.77,24.09,52.41,40.19c0.77,0.85,1.53,1.71,2.28,2.57c24.46-29.45,19.55-46.46-9.15-83.55C358.28,87.94,331.72,92.02,331.04,122.39z"/>\n        <path fill="#fec3aa" d="M344.4,128.73c20.02,10.44,37.77,24.09,52.41,40.19c16.6-20.52,20.27-33.36-0.41-60.07C374.89,108.85,349.43,111.36,344.4,128.73z"/>\n      </g>\n    </g>\n  `,c=>`\n    <g>\n      <g>\n        <g>\n          <path fill="${c}" d="M104.29,167.8c-4.66,5.04-9.01,10.32-13.03,15.83c-3.06,4.19-5.93,8.51-8.59,12.95c-6.49-1.81-15.39-5.44-24.4-12.75c-10.31-8.38-13.7-19.11-14.12-29.39c-0.32-7.01,0.75-13.83,1.88-19.57C48.63,121.62,98.23,162.73,104.29,167.8z"/>\n          <path fill="#fec3aa" d="M91.26,183.63c-3.06,4.19-5.93,8.51-8.59,12.95c-6.49-1.81-15.39-5.44-24.4-12.75c-10.31-8.38-13.7-19.11-14.12-29.39c6.69,0.3,22.01,1.93,30.34,10.87C79.92,171.11,86.27,178.1,91.26,183.63z"/>\n        </g>\n        <g>\n          <path fill="${c}" d="M395.78,167.8c4.66,5.04,9.01,10.32,13.03,15.83c3.06,4.19,5.93,8.51,8.59,12.95c6.49-1.81,15.39-5.44,24.4-12.75c10.31-8.38,13.7-19.11,14.12-29.39c0.32-7.01-0.75-13.83-1.88-19.57C451.44,121.62,401.84,162.73,395.78,167.8z"/>\n          <path fill="#fec3aa" d="M408.81,183.63c3.06,4.19,5.93,8.51,8.59,12.95c6.49-1.81,15.39-5.44,24.4-12.75c10.31-8.38,13.7-19.11,14.12-29.39c-6.69,0.3-22.01,1.93-30.34,10.87C420.15,171.11,413.8,178.1,408.81,183.63z"/>\n        </g>\n      </g>\n      <g>\n        <path fill="${g(c,30)}" d="M114.09,61.81c0,0,6.58-1,9.37,6.78s1,20.33,8.37,24.12c7.37,3.79,17.14,1.2,16.74-9.77c-0.4-10.96,3.19-19.33,10.76-14.95c7.57,4.39,10.56,13.55,9.37,30.1s-1,36.28-5.18,41.66c-4.19,5.38-20.13,5.38-25.51-2.19c-5.38-7.57-7.97-10.96-16.34-15.95c-8.37-4.98-20.73-17.74-24.12-29.3C94.16,80.75,96.35,59.62,114.09,61.81z"/>\n        <path fill="${g(c,30)}" d="M385.79,61.81c0,0-6.58-1-9.37,6.78s-1,20.33-8.37,24.12c-7.37,3.79-17.14,1.2-16.74-9.77c0.4-10.96-3.19-19.33-10.76-14.95c-7.57,4.39-10.56,13.55-9.37,30.1s1,36.28,5.18,41.66c4.19,5.38,20.13,5.38,25.51-2.19c5.38-7.57,7.97-10.96,16.34-15.95c8.37-4.98,20.73-17.74,24.12-29.3C405.72,80.75,403.53,59.62,385.79,61.81z"/>\n      </g>\n    </g>\n  `,c=>`\n    <g>\n      <path fill="${g(c,60)}" d="M46.14,205.54c1.87-34.24,73.46-80.31,97.43-80.31s-24.59,109.88-36.42,118.29S44.27,239.78,46.14,205.54z"/>\n      <path fill="${g(c,60)}" d="M453.94,205.54c-1.87-34.24-73.46-80.31-97.43-80.31c-23.97,0,24.59,109.88,36.42,118.29S455.8,239.78,453.94,205.54z"/>\n    </g>\n  `,c=>`\n    <g>\n      <g>\n        <path fill="${c}" d="M132.29,143.05c-10.4,7.47-19.93,15.9-28.43,25.15c-5.09,5.54-9.81,11.37-14.12,17.46c-28.39-20.73-36.5-43.03-31.42-66.35c1.57-7.27,4.44-14.66,8.4-22.11C100.24,101.25,123.48,115.19,132.29,143.05z"/>\n        <path fill="#fec3aa" d="M103.86,168.2c-5.09,5.54-9.81,11.37-14.12,17.46c-28.39-20.73-36.5-43.03-31.42-66.35c6.82,2.38,16.16,6.65,26.9,14.34C98.39,143.06,102.62,157.69,103.86,168.2z"/>\n      </g>\n      <g>\n        <path fill="${c}" d="M409.88,185.11c-4.49-6.29-9.41-12.29-14.73-17.98c-8.5-9.1-18.01-17.4-28.36-24.73c8.97-27.43,32.11-41.18,65.37-45.2c3.95,7.45,6.83,14.84,8.39,22.11C445.6,142.42,437.67,164.54,409.88,185.11z"/>\n        <path fill="#fec3aa" d="M409.88,185.11c-4.49-6.29-9.41-12.29-14.73-17.98c1.4-10.41,5.77-24.38,18.5-33.48c10.74-7.69,20.08-11.96,26.9-14.34C445.6,142.42,437.67,164.54,409.88,185.11z"/>\n      </g>\n    </g>\n  `,c=>`\n    <g>\n      <path fill="${c}" d="M396.44,168.52c-1.32-1.45-2.67-2.87-4.05-4.27c-16.12-16.53-35.65-30.23-57.57-40.19c-5.42-2.46-10.97-4.69-16.66-6.68c9.71-15.8,38.63-48.24,59.6-54.3c4.64-1.34,9.63,0.68,12.04,4.86C412.2,106.75,401.41,152.41,396.44,168.52z"/>\n      <path fill="#fec3aa" d="M392.39,164.25c-16.12-16.53-35.65-30.23-57.57-40.19c8.37-12.44,28.55-34.38,43.41-38.67c3.49-1.01,7.24,0.5,9.06,3.65C403.95,117.9,396.18,151.81,392.39,164.25z"/>\n      <path fill="${c}" d="M103.56,168.52c1.32-1.45,2.67-2.87,4.05-4.27c16.12-16.53,35.65-30.23,57.57-40.19c5.42-2.46,10.97-4.69,16.66-6.68c-9.71-15.8-38.63-48.24-59.6-54.3c-4.64-1.34-9.63,0.68-12.04,4.86C87.8,106.75,98.59,152.41,103.56,168.52z"/>\n      <path fill="#fec3aa" d="M107.61,164.25c16.12-16.53,35.65-30.23,57.57-40.19c-8.37-12.44-28.55-34.38-43.41-38.67c-3.49-1.01-7.24,0.5-9.06,3.65C96.05,117.9,103.82,151.81,107.61,164.25z"/>\n    </g>\n  `,c=>`\n    <g>\n      <path fill="#813d14" d="M399.89,72.35c-2.11,5.62-4.48,11.28-7.75,16.78l-0.6,1.04l-0.68,1.01l-1.38,2.02c-0.43,0.69-0.98,1.33-1.5,1.98l-1.58,1.94c-0.55,0.63-1.17,1.22-1.76,1.83c-0.61,0.6-1.16,1.24-1.82,1.79l-1.98,1.65l-1,0.82l-1.06,0.73c-5.67,3.99-12.11,6.44-18.34,7.98c-5.08,1.26-10.11,2.01-15.08,2.56c-1,4.28-2.36,8.52-4.09,12.65c-4.91-2.45-9.95-4.71-15.11-6.76c1.99-3.79,3.6-7.83,4.8-12.06c1.8-6.45,2.72-13.3,2.96-20.28c0.23-6.99-0.17-14.11-1.06-21.23c-0.92-7.12-2.28-14.24-3.9-21.34l-0.02-0.07c-0.61-2.7,1.08-5.38,3.77-5.99c2.55-0.58,5.1,0.92,5.88,3.37c2.28,7.23,4.31,14.57,5.9,22.08c1.56,7.52,2.65,15.22,3.02,23.07c0.15,3.37,0.16,6.78,0.01,10.2c3.38-0.13,6.71-0.38,9.91-0.85c5.17-0.77,9.96-2.15,14.11-4.5l0.8-0.42l0.74-0.51l1.49-1.01c0.51-0.33,0.93-0.77,1.41-1.15c0.46-0.4,0.95-0.76,1.4-1.19l1.31-1.34c0.44-0.44,0.9-0.87,1.29-1.39l1.24-1.48l0.61-0.75l0.58-0.81c3.12-4.26,5.79-9.18,8.27-14.27l0.02-0.05c1.21-2.48,4.21-3.52,6.69-2.31C399.73,67.23,400.78,69.96,399.89,72.35z"/>\n      <path fill="#813d14" d="M100.25,72.35c2.11,5.62,4.48,11.28,7.75,16.78l0.6,1.04l0.68,1.01l1.38,2.02c0.43,0.69,0.98,1.33,1.5,1.98l1.58,1.94c0.55,0.63,1.17,1.22,1.76,1.83c0.61,0.6,1.16,1.24,1.82,1.79l1.98,1.65l1,0.82l1.06,0.73c5.67,3.99,12.11,6.44,18.34,7.98c5.08,1.26,10.11,2.01,15.08,2.56c1,4.28,2.36,8.52,4.09,12.65c4.91-2.45,9.95-4.71,15.11-6.76c-1.99-3.79-3.6-7.83-4.8-12.06c-1.8-6.45-2.72-13.3-2.96-20.28c-0.23-6.99,0.17-14.11,1.06-21.23c0.92-7.12,2.28-14.24,3.9-21.34l0.02-0.07c0.61-2.7-1.08-5.38-3.77-5.99c-2.55-0.58-5.1,0.92-5.88,3.37c-2.28,7.23-4.31,14.57-5.9,22.08c-1.56,7.52-2.65,15.22-3.02,23.07c-0.15,3.37-0.16,6.78-0.01,10.2c-3.38-0.13-6.71-0.38-9.91-0.85c-5.17-0.77-9.96-2.15-14.11-4.5l-0.8-0.42l-0.74-0.51l-1.49-1.01c-0.51-0.33-0.93-0.77-1.41-1.15c-0.46-0.4-0.95-0.76-1.4-1.19l-1.31-1.34c-0.44-0.44-0.9-0.87-1.29-1.39l-1.24-1.48l-0.61-0.75l-0.58-0.81c-3.12-4.26-5.79-9.18-8.27-14.27l-0.02-0.05c-1.21-2.48-4.21-3.52-6.69-2.31C100.41,67.23,99.36,69.96,100.25,72.35z"/>\n      <g>\n        <path fill="${c}" d="M408.03,148.46c-5.91,3.75-13.46,6.75-22.58,9.03c-10.83-9.98-22.97-18.77-36.17-26.13c10.44-11.19,23.51-16.91,38.76-18.1c10.76-0.85,22.61,0.57,35.37,3.91C425.04,130.67,419.75,141.03,408.03,148.46z"/>\n        <path d="M408.03,148.46c19.69-24.45,3.23-31.46-20.01-35.19l0.02-0.01c10.76-0.85,22.61,0.57,35.37,3.91C425.04,130.67,419.75,141.03,408.03,148.46z"/>\n      </g>\n      <g>\n        <path fill="${c}" d="M92.01,148.46c5.91,3.75,13.46,6.75,22.58,9.03c10.83-9.98,22.97-18.77,36.17-26.13c-10.44-11.19-23.51-16.91-38.76-18.1c-10.76-0.85-22.61,0.57-35.37,3.91C75,130.67,80.29,141.03,92.01,148.46z"/>\n        <path d="M92.01,148.46c-19.69-24.45-3.23-31.46,20.01-35.19l-0.02-0.01c-10.76-0.85-22.61,0.57-35.37,3.91C75,130.67,80.29,141.03,92.01,148.46z"/>\n      </g>\n    </g>\n  `,c=>`\n    <g>\n      <path fill="${c}" d="M401.47,174.27c-1.89-2.27-3.85-4.48-5.86-6.65c-8.75-9.44-18.58-18.02-29.31-25.57c-3.22-2.27-6.52-4.44-9.9-6.52C380.95,91.93,454.34,130.21,401.47,174.27z"/>\n      <path fill="#fec3aa" d="M395.61,167.62c-8.75-9.44-18.58-18.02-29.31-25.57C382.61,115.2,428.62,139.46,395.61,167.62z"/>\n      <path fill="${c}" d="M98.55,174.27c1.89-2.27,3.85-4.48,5.86-6.65c8.75-9.44,18.58-18.02,29.31-25.57c3.22-2.27,6.52-4.44,9.9-6.52C119.07,91.93,45.68,130.21,98.55,174.27z"/>\n      <path fill="#fec3aa" d="M104.41,167.62c8.75-9.44,18.58-18.02,29.31-25.57C117.41,115.2,71.4,139.46,104.41,167.62z"/>\n      <g>\n        <path fill="#fec3aa" d="M359.91,71.14l-0.89,14.69l-1.69,27.82l-0.38,6.31l-0.93,15.34c-3.51-2.15-7.11-4.2-10.78-6.13c-18.63-9.83-39.24-16.86-61.16-20.47l18.57-28.84l10.95-16.99l4.25-6.6c2.35-3.65,6.93-5.17,11-3.66l25.04,9.29C357.71,63.32,360.15,67.07,359.91,71.14z"/>\n        <path fill="${c}" d="M337.5,71.94c0,5-10.52,9.06-23.49,9.06c-4.12,0-7.99-0.41-11.36-1.14l10.95-16.99h0.41C326.98,62.87,337.5,66.93,337.5,71.94z"/>\n        <path fill="${c}" d="M359.02,85.83l-1.69,27.82c-11.88-1.24-20.85-6.96-20.85-13.84C336.48,92.62,346.32,86.68,359.02,85.83z"/>\n      </g>\n      <g>\n        <path fill="#fec3aa" d="M216.14,108.7c-21.92,3.61-42.53,10.64-61.16,20.47c-3.67,1.93-7.27,3.98-10.78,6.13l-0.93-15.34l-0.38-6.31l-1.69-27.82l-0.89-14.69c-0.24-4.07,2.2-7.82,6.02-9.24l25.04-9.29c4.07-1.51,8.65,0.01,11,3.66l4.25,6.6l10.32,16.01l0.63,0.98l10.23,15.88L216.14,108.7z"/>\n        <path fill="${c}" d="M207.8,95.74c-3.81,1.54-8.26,2.86-13.07,3.81c-15.49,3.06-28.92,1.12-30-4.32c-1.07-5.44,10.62-12.33,26.11-15.39c2.08-0.41,4.12-0.73,6.1-0.96l0.63,0.98L207.8,95.74z"/>\n      </g>\n    </g>\n  `],M=[c=>'\n    <g>\n      <g>\n        <circle cx="168.96" cy="250" r="20.43"/>\n        <circle fill="#fff" cx="175.39" cy="255.78" r="9.62"/>\n        <circle fill="#fff" cx="159.37" cy="241.04" r="4.23"/>\n      </g>\n      <g>\n        <circle cx="331.04" cy="250" r="20.43"/>\n        <circle fill="#fff" cx="324.61" cy="255.78" r="9.62"/>\n        <circle fill="#fff" cx="340.63" cy="241.04" r="4.23"/>\n      </g>\n    </g>\n  ',c=>'\n    <g>\n      <g>\n        <circle cx="168.96" cy="254.23" r="18.89"/>\n        <circle fill="#fff" cx="175.94" cy="258.32" r="6.3"/>\n      </g>\n      <g>\n        <circle cx="331.04" cy="254.23" r="18.89"/>\n        <circle fill="#fff" cx="324.06" cy="258.32" r="6.3"/>\n      </g>\n    </g>\n  ',c=>'\n    <g>\n      <g>\n        <circle cx="168.96" cy="254.49" r="17.23"/>\n        <circle fill="#fff" cx="175.26" cy="247.77" r="5.87"/>\n      </g>\n      <g>\n        <circle cx="331.04" cy="254.49" r="17.23"/>\n        <circle fill="#fff" cx="324.74" cy="247.77" r="5.87"/>\n      </g>\n    </g>\n  ',c=>'\n    <g>\n      <g>\n        <circle cx="331.04" cy="253.21" r="22.21"/>\n        <circle fill="#fff" cx="338.81" cy="246.07" r="8.97"/>\n        <circle fill="#fff" cx="322.5" cy="263.97" r="5.01"/>\n      </g>\n      <g>\n        <circle cx="168.96" cy="253.21" r="22.21"/>\n        <circle fill="#fff" cx="161.19" cy="246.07" r="8.97"/>\n        <circle fill="#fff" cx="177.5" cy="263.97" r="5.01"/>\n      </g>\n    </g>\n  ',c=>'\n    <g>\n      <g>\n        <circle cx="168.62" cy="248.28" r="15.49"/>\n        <circle fill="#fff" cx="163.62" cy="242.97" r="4.95"/>\n      </g>\n      <g>\n        <circle cx="331.04" cy="248.28" r="15.49"/>\n        <circle fill="#fff" cx="336.04" cy="242.97" r="4.95"/>\n      </g>\n    </g>\n  ',c=>'\n    <g>\n      <path d="M339.29,256.81c0,15.33-8,15.14-17.87,15.14c-9.87,0-17.87,0.19-17.87-15.14c0-15.33,8-27.76,17.87-27.76C331.29,229.05,339.29,241.48,339.29,256.81z"/>\n      <ellipse fill="#fff" transform="matrix(0.927 -0.375 0.375 0.927 -66.7051 141.1201)" cx="329.23" cy="241.94" rx="5.11" ry="7.47"/>\n      <path d="M196.46,256.81c0,15.33-8,15.14-17.87,15.14s-17.87,0.19-17.87-15.14c0-15.33,8-27.76,17.87-27.76S196.46,241.48,196.46,256.81z"/>\n      <ellipse fill="#fff" transform="matrix(0.927 -0.375 0.375 0.927 -77.1287 87.5573)" cx="186.4" cy="241.94" rx="5.11" ry="7.47"/>\n    </g>\n  ',c=>'\n    <g>\n      <g>\n        <circle cx="180.11" cy="258.32" r="17.11"/>\n        <circle fill="#fff" cx="174.66" cy="252.88" r="5.44"/>\n      </g>\n      <g>\n        <circle cx="320.02" cy="258.32" r="17.11"/>\n        <circle fill="#fff" cx="314.58" cy="252.88" r="5.44"/>\n      </g>\n    </g>\n  ',c=>'\n    <g>\n      <g>\n        <circle cx="168.96" cy="262.77" r="18.38"/>\n        <circle fill="#fff" cx="163.12" cy="256.93" r="5.84"/>\n      </g>\n      <g>\n        <circle cx="331.04" cy="262.77" r="18.38"/>\n        <circle fill="#fff" cx="325.2" cy="256.93" r="5.84"/>\n      </g>\n    </g>\n  ',c=>'\n    <g>\n      <g>\n        <circle cx="160.53" cy="239.6" r="15.32"/>\n        <circle fill="#fff" cx="154.07" cy="232.53" r="4.6"/>\n      </g>\n      <g>\n        <circle cx="339" cy="239.6" r="15.32"/>\n        <circle fill="#fff" cx="346.78" cy="242.87" r="4.6"/>\n      </g>\n    </g>\n  '],x=[c=>`\n    <g>\n      <path fill="${c}" d="M440.72,280.16c0,6.78-0.42,13.17-1.24,19.2c-1.09,7.91-2.86,15.19-5.27,21.89l-0.01,0.01c-4.63,12.92-11.65,23.67-20.66,32.61c-20.58,20.41-51.59,31.32-88.62,36.68c-23,3.34-48.32,4.53-74.92,4.53c-26.59,0-51.92-1.19-74.92-4.53c-68.09-9.86-115.8-38.47-115.8-110.39c0-96.23,85.39-174.24,190.72-174.24c95.69,0,174.92,64.38,188.62,148.31C440,262.69,440.72,271.35,440.72,280.16z"/>\n    </g>\n  `],z=[c=>'\n    <g>\n      <path fill="#fef6f4" d="M331.94,100.68c-10.14-27.49-29.79-29.85-53.51-21.45c-5.27-6.73-12.55-12.3-28.43-12.92c-15.88,0.63-23.16,6.2-28.43,12.92c-23.72-8.39-43.36-6.03-53.51,21.45c-38.91,19.86-5.83,84.69,33.09,64.83c10.85,12.03,24.36,19.13,48.85,5.73c24.49,13.39,38,6.3,48.85-5.73C337.76,185.37,370.85,120.53,331.94,100.68z"/>\n    </g>\n  ',c=>'\n    <g>\n      <path fill="#eabf9f" d="M202.23,99.58c34.04-8.03,67.49-7.6,100.38,0.87c9.29,2.39,14.88,8.11,13.74,14.1c-7.53,39.66-60.18,79.18-70.09,71.59c-10.72-8.21,2.3-31.48-9.45-33.16c-10.44-1.49-25.88,15.91-37.83,11.87c-2.73-0.92-4.27-2.74-4.18-4.61c0.68-14.78-2.04-35.12-5.58-46.62C187.41,107.69,192.82,101.8,202.23,99.58z"/>\n    </g>\n  '],C=[c=>'\n    <g>\n      <path fill="#fff" d="M299.89,307.23c0,34.96-22.34,63.29-49.89,63.29s-49.89-28.34-49.89-63.29s22.34-46.76,49.89-46.76S299.89,272.27,299.89,307.23z"/>\n      <path fill="#f3252f" d="M250,315.06l12.26,7.75c0,23.05-24.12,23.17-24.37,0.36c0-0.12,0-0.24,0-0.36L250,315.06z"/>\n      <path d="M285.22,315.94c-0.8-0.23-1.63,0.23-1.86,1.03c-0.83,2.89-3.06,4.81-6.63,5.7c-7.18,1.79-17.58-1.2-22.71-6.52c-0.52-0.54-0.96-1.09-1.34-1.64v-7.22c14.96-1.06,26.68-10.9,26.68-22.88c0-12.69-13.15-11.23-29.36-11.23s-29.36-1.46-29.36,11.23c0,12.01,11.77,21.86,26.77,22.88v7.06c-0.4,0.61-0.88,1.21-1.45,1.8c-5.14,5.32-15.54,8.3-22.71,6.52c-3.57-0.89-5.8-2.81-6.63-5.7c-0.23-0.79-1.06-1.26-1.86-1.03c-0.8,0.23-1.26,1.06-1.03,1.86c1.13,3.94,4.17,6.63,8.79,7.78c1.66,0.41,3.45,0.61,5.3,0.61c7.33,0,15.6-3.08,20.3-7.95c0.74-0.76,1.35-1.55,1.87-2.36c0.52,0.81,1.13,1.6,1.87,2.36c4.7,4.87,12.97,7.95,20.3,7.95c1.85,0,3.64-0.2,5.3-0.61c4.62-1.15,7.66-3.84,8.79-7.78C286.47,317,286.01,316.17,285.22,315.94z"/>\n    </g>\n  ',c=>'\n    <g>\n      <path fill="#fff" d="M324.74,343.45c0,34.41-33.46,29.75-74.74,29.75s-74.74,4.66-74.74-29.75s33.46-62.3,74.74-62.3S324.74,309.04,324.74,343.45z"/>\n      <path d="M274.36,312.31c-0.83,0-1.5,0.67-1.5,1.5c0,5.95-5.54,8.66-10.68,8.66c-4.88,0-10.09-2.44-10.63-7.75v-14.36c13.02-0.09,23.34-1.46,23.34-10.08c0-8.95-11.15-16.21-24.89-16.21s-24.89,7.26-24.89,16.21c0,8.61,10.31,9.98,23.32,10.08v14.45h0.02c-0.59,5.25-5.78,7.66-10.62,7.66c-5.14,0-10.68-2.71-10.68-8.66c0-0.83-0.67-1.5-1.5-1.5s-1.5,0.67-1.5,1.5c0,3.63,1.53,6.68,4.41,8.82c2.47,1.83,5.76,2.83,9.27,2.83c4.87,0,9.78-2.07,12.17-6.06c0.72,1.22,1.69,2.31,2.92,3.22c2.47,1.83,5.76,2.83,9.27,2.83c6.8,0,13.68-4,13.68-11.66C275.86,312.98,275.19,312.31,274.36,312.31z"/>\n    </g>\n  ',c=>`\n    <g>\n      <ellipse fill="${g(c,30)}" cx="250" cy="299.34" rx="39.68" ry="27.57"/>\n      <path fill="${g(c,60)}" d="M229.14,315.35c-1.25,1.4-3.37,1.68-5.46,0.91c-0.93-0.32-1.85-0.86-2.69-1.6c-0.89-0.79-1.57-1.72-2.01-2.67c-0.9-1.93-0.83-3.98,0.37-5.34c1.32-1.48,3.61-1.71,5.81-0.78c0.81,0.33,1.6,0.82,2.33,1.47c0.76,0.67,1.37,1.44,1.8,2.23C230.41,311.63,230.43,313.89,229.14,315.35z"/>\n      <path fill="${g(c,60)}" d="M281.06,312.05c-0.45,0.93-1.12,1.83-1.99,2.61c-0.85,0.76-1.79,1.3-2.74,1.62c-2.07,0.74-4.17,0.45-5.4-0.93c-1.28-1.44-1.28-3.66-0.2-5.69c0.44-0.83,1.06-1.62,1.84-2.32c0.72-0.64,1.5-1.13,2.3-1.46c2.21-0.94,4.53-0.71,5.84,0.77C281.93,308.02,281.98,310.1,281.06,312.05z"/>\n      <path d="M281.06,312.05c-1.43-2.09-3.25-4-5.39-5.71c-0.25-0.2-0.52-0.35-0.8-0.46c-0.8,0.33-1.58,0.82-2.3,1.46c-0.78,0.7-1.4,1.49-1.84,2.32c0.17,0.59,0.53,1.13,1.05,1.54c1.9,1.51,3.44,3.22,4.55,5.08c1.27,2.13,1.97,4.44,1.97,6.85c0,10.31-12.7,18.7-28.3,18.7s-28.3-8.39-28.3-18.7c0-2.42,0.7-4.74,1.98-6.87c1.11-1.85,2.64-3.55,4.54-5.06c0.55-0.43,0.91-1.01,1.07-1.63c-0.43-0.79-1.04-1.56-1.8-2.23c-0.73-0.65-1.52-1.14-2.33-1.47c-0.29,0.11-0.57,0.27-0.83,0.47c-2.12,1.69-3.93,3.59-5.35,5.65c-2.31,3.36-3.62,7.14-3.62,11.14c0,13.81,15.54,25.05,34.64,25.05s34.64-11.24,34.64-25.05C284.64,319.16,283.35,315.39,281.06,312.05z"/>\n    </g>\n  `,c=>'\n    <g>\n      <ellipse fill="#fff" class="st29" cx="250" cy="314.96" rx="73.68" ry="48.26"/>\n      <path d="M270.06,272c0,11.09-8.99,20.09-20.09,20.09c-11.09,0-20.09-8.99-20.09-20.09s8.99-13.68,20.09-13.68C261.07,258.32,270.06,260.91,270.06,272z"/>\n      <path fill="#f3252f" d="M240.19,306.02c0,21.33,19.57,21.33,19.57,0l-7.26-3.6l-3.38-3.48l-3.32,6.03L240.19,306.02z"/>\n      <path d="M270.21,291.93c-0.82-0.05-1.54,0.57-1.6,1.4c-0.33,4.91-2.36,8.63-5.57,10.21c-2.39,1.17-5.14,0.99-7.36-0.49c-2.54-1.7-4.01-4.85-4.18-8.79c0.01-0.3-0.01-0.61-0.01-0.91c0-0.38,0-0.76,0.02-1.16c0.06-0.83-0.57-1.54-1.4-1.6c-0.04,0-0.07,0-0.11,0c-0.05,0-0.09-0.01-0.14,0c-0.83,0.06-1.45,0.77-1.4,1.6c0.03,0.4,0.02,0.78,0.02,1.17c0,0.3-0.02,0.61-0.01,0.9c-0.17,3.94-1.64,7.08-4.18,8.79c-2.21,1.48-4.96,1.67-7.36,0.49c-3.21-1.58-5.24-5.3-5.57-10.21c-0.06-0.83-0.77-1.45-1.6-1.4c-0.83,0.06-1.45,0.77-1.4,1.6c0.4,6.01,3.04,10.64,7.24,12.7c1.47,0.72,3.04,1.08,4.59,1.08c2.01,0,4-0.59,5.76-1.77c1.74-1.17,3.08-2.82,4.02-4.81c0.94,1.99,2.28,3.64,4.02,4.81c1.75,1.18,3.75,1.77,5.76,1.77c1.56,0,3.12-0.36,4.59-1.08c4.2-2.07,6.84-6.69,7.24-12.7C271.66,292.7,271.04,291.98,270.21,291.93z"/>\n    </g>\n  ',c=>'\n    <g>\n      <path d="M278.25,286.24c-1.1,0-2,0.9-2,2c0,9.44-12.1,14.57-24.57,14.99v-13.25h-3.4v13.25c-12.46-0.43-24.53-5.56-24.53-14.99c0-1.1-0.9-2-2-2s-2,0.9-2,2c0,6.04,3.42,11.07,9.89,14.53c5.41,2.9,12.64,4.49,20.37,4.49c14.57,0,30.26-5.95,30.26-19.02C280.25,287.14,279.36,286.24,278.25,286.24z"/>\n      <path d="M272.36,274.91c0-6.35-10.06-11.49-22.47-11.49s-22.47,5.14-22.47,11.49c0,2.08,1.08,4.02,2.97,5.71h0l0,0c0.92,0.82,1.96,1.73,3.22,2.4l8.69,5.74c4.58,3.13,10.6,3.14,15.19,0.04l9.74-6.58c0.36-0.22,0.7-0.45,1.02-0.69l0.04-0.02l0,0C270.86,279.63,272.36,277.36,272.36,274.91z"/>\n    </g>\n  ',c=>'\n    <g>\n      <path fill="#fefaf0" d="M250,258.32c-33.05,0-59.85,19.09-59.85,42.64c0,7.6,2.79,14.74,7.69,20.92c2.01,2.47,4.81,5.31,7.46,7.43c4.66,3.42,9.51,4.92,14.23,4.92c15.16,0,28.96-15.51,30.47-33.27c1.98,23.29,25.1,42.72,44.7,28.35c2.65-2.12,5.02-4.43,7.03-6.9c0.15-0.17,0.28-0.35,0.43-0.53c4.9-6.18,7.69-13.32,7.69-20.92C309.85,277.41,283.05,258.32,250,258.32z"/>\n      <path d="M282.54,299.61C282.54,299.61,282.53,299.61,282.54,299.61c-0.83,0-1.5,0.67-1.51,1.49c-0.01,1.92-1.16,3.55-3.43,4.84c-5.75,3.28-17,3.23-22.71-0.11c-2.26-1.32-3.4-2.96-3.39-4.88c0,0,0,0,0-0.01c0,0,0-0.01,0-0.01c0-0.05-0.01-0.09-0.02-0.14c0-0.02,0-0.05-0.01-0.07c0.16-0.09,0.32-0.19,0.47-0.3l13.73-10.8c2.35-1.85,1.04-5.63-1.95-5.63H250h-13.73c-2.99,0-4.3,3.78-1.95,5.63l13.73,10.8c0.15,0.12,0.31,0.22,0.47,0.3c0,0.02,0,0.05-0.01,0.07c0,0.05-0.01,0.09-0.02,0.14c0,0,0,0.01,0,0.01c0,0,0,0,0,0.01c0.01,1.92-1.13,3.56-3.39,4.88c-5.72,3.33-16.97,3.39-22.71,0.11c-2.27-1.3-3.42-2.93-3.43-4.84c0-0.83-0.67-1.49-1.5-1.49c0,0,0,0-0.01,0c-0.83,0-1.5,0.68-1.49,1.51c0.01,3.02,1.72,5.6,4.95,7.44c3.33,1.91,8.02,2.85,12.71,2.85c4.8,0,9.61-0.99,13-2.97c1.45-0.84,2.57-1.84,3.38-2.95c0.81,1.11,1.93,2.11,3.38,2.95c3.39,1.98,8.2,2.97,13,2.97c4.69,0,9.37-0.95,12.71-2.85c3.22-1.84,4.93-4.41,4.95-7.44C284.04,300.29,283.37,299.61,282.54,299.61z"/>\n    </g>\n  ',c=>'\n    <g>\n      <path d="M288.56,308.71c-0.61-1.31-2.15-1.89-3.5-1.38c-5.72,2.17-12.26,4.59-18.41,6.89c-0.09-0.09-0.19-0.17-0.3-0.23c-6.67-3.82-11.51-11.62-14.8-23.83c9.51,0.09,16.98,0.71,16.98-9.01c0-10.24-8.3-18.54-18.54-18.54s-18.54,8.3-18.54,18.54c0,9.74,7.51,9.09,17.05,9.01c0,0.12,0.01,0.25,0.04,0.38c3.24,12.24,8.04,20.43,14.64,24.99c-11.9,4.48-21.38,8.24-18.94,8.45c0,0,30.66-5.14,39.73-8.68C289.35,313.19,289.41,310.53,288.56,308.71z"/>\n    </g>\n  ',c=>`\n    <g>\n      <path fill="#fff" d="M250,327.96v25.9c-8.21,0.68-16.53,1-25.04,0.44c-4.64-0.29-9.37-0.89-14.1-1.96c-4.73-1.07-9.51-2.61-14.07-5c-4.56-2.33-8.83-5.77-12.08-9.92c-3.25-4.18-5.3-9.03-6.34-13.76c-1.02-4.75-1.19-9.42-0.93-13.92c0.27-4.51,0.99-8.86,1.94-13.11c0.32-1.44,1.74-2.34,3.18-2.02c1.26,0.28,2.12,1.41,2.09,2.65v0.01c-0.17,8.24,0.68,16.55,3.65,23.25c1.5,3.32,3.52,6.1,5.98,8.17c2.5,2.04,5.34,3.52,8.59,4.39c6.49,1.79,14.03,1.68,21.61,0.63c7.6-1.02,15.32-2.97,22.97-5.27C248.3,328.19,249.15,328.03,250,327.96z"/>\n      <path fill="#fff" d="M250,327.96v25.9c8.21,0.68,16.53,1,25.04,0.44c4.64-0.29,9.37-0.89,14.1-1.96c4.73-1.07,9.51-2.61,14.07-5 c4.56-2.33,8.83-5.77,12.08-9.92c3.25-4.18,5.3-9.03,6.34-13.76c1.02-4.75,1.19-9.42,0.93-13.92c-0.27-4.51-0.99-8.86-1.94-13.11 c-0.32-1.44-1.74-2.34-3.18-2.02c-1.26,0.28-2.12,1.41-2.09,2.65v0.01c0.17,8.24-0.68,16.55-3.65,23.25 c-1.5,3.32-3.52,6.1-5.98,8.17c-2.5,2.04-5.34,3.52-8.59,4.39c-6.49,1.79-14.03,1.68-21.61,0.63c-7.6-1.02-15.32-2.97-22.97-5.27 C251.7,328.19,250.85,328.03,250,327.96z"/>\n      <path fill="${g(c,30)}" d="M292.83,330.65c0,1.12-0.07,2.24-0.22,3.34c0,0.01,0,0.01,0,0.02c-2.19,16.59-20.44,24.39-42.61,24.39c-22.07,0-40.25-7.69-42.58-24.16c-0.17-1.18-0.26-2.38-0.26-3.59c0-0.66,0.02-1.32,0.08-1.98c1.33-17.24,19.96-44.31,42.75-44.31c22.9,0,41.61,27.22,42.77,44.57c0,0.01,0,0.01,0,0.02C292.81,329.52,292.83,330.08,292.83,330.65z"/>\n      <circle cx="270.57" cy="335.65" r="8.09"/>\n      <circle cx="229.43" cy="335.65" r="8.09"/>\n    </g>\n  `,c=>`\n    <g>\n      <path fill="#fff" d="M210.25,362.02l-17.24-3.15c-1.62-0.3-2.75-1.75-2.65-3.39l1.15-17.93c0.12-1.93,1.91-3.33,3.81-2.98l22.02,4.02c1.95,0.36,3.13,2.37,2.48,4.25l-5.93,17.06C213.37,361.4,211.82,362.3,210.25,362.02z"/>\n      <path fill="#fff" d="M289.75,362.02l17.24-3.15c1.62-0.3,2.75-1.75,2.65-3.39l-1.15-17.93c-0.12-1.93-1.91-3.33-3.81-2.98l-22.02,4.02c-1.95,0.36-3.13,2.37-2.48,4.25l5.93,17.06C286.63,361.4,288.18,362.3,289.75,362.02z"/>\n      <path fill="${g(c,30)}" d="M275.68,273.13c-9.37,0-18.15-1.52-25.68,1.91c-7.53-3.43-16.31-1.91-25.68-1.91c-27.9,0-50.51,17.41-50.51,38.89c0,21.48,22.61,38.9,50.51,38.9c9.37,0,18.15-6.78,25.68-10.21c7.53,3.43,16.31,10.21,25.68,10.21c27.9,0,50.51-17.42,50.51-38.9C326.19,290.54,303.58,273.13,275.68,273.13z"/>\n      <path d="M219.86,307.1c-0.83,0-1.7-0.06-2.59-0.18c-2.2-0.3-3.76-2.34-3.47-4.55c0.26-2.01,1.98-3.53,4-3.53c0.17,0,0.35,0.01,0.53,0.04c0.55,0.07,1.08,0.11,1.55,0.11c2.66,0,4.61-1,5.53-5.88c0.36-1.91,2.03-3.3,3.96-3.3c0.26,0,0.51,0.02,0.77,0.07c2.18,0.42,3.61,2.55,3.2,4.74C231.83,302.67,227.04,307.1,219.86,307.1z"/>\n      <path d="M281.14,307.1c0.83,0,1.7-0.06,2.59-0.18c2.2-0.3,3.76-2.34,3.47-4.55c-0.26-2.01-1.98-3.53-4-3.53c-0.17,0-0.35,0.01-0.53,0.04c-0.55,0.07-1.08,0.11-1.55,0.11c-2.66,0-4.61-1-5.53-5.88c-0.36-1.91-2.03-3.3-3.96-3.3c-0.26,0-0.51,0.02-0.77,0.07c-2.18,0.42-3.61,2.55-3.2,4.74C269.17,302.67,273.96,307.1,281.14,307.1z"/>\n    </g>\n  `,c=>'\n    <g>\n      <path d="M286.02,305.38c2.91-0.56,5.65-0.6,8.2-0.13c-4.99,17.35-18.54,26.6-42.01,28.87v-16.16c0-8.14,4.87-15.62,12.48-18.52c10.03-3.81,16.64-11.6,17.27-21.33c0.5-7.8-5.29-14.83-13.11-15.02c-6.8-0.17-12.5,4.7-13.64,11.14c-2.62,1.04-7.81,1.04-10.43,0c-1.13-6.44-6.84-11.31-13.64-11.14c-7.65,0.19-13.5,7.01-13.12,14.65c0.39,8.07,4.92,15.13,12.55,19.5c1.36,0.78,2.82,1.47,4.36,2.06c7.73,2.99,12.86,10.37,12.86,18.66v16.5v3.53v0.41c27.75-1.59,44.48-12.04,50.27-32.01c2.38,1.01,4.58,2.54,6.61,4.59C300.77,302.81,294.32,301.6,286.02,305.38z"/>\n    </g>\n  '],y=[c=>`\n    <g>\n      <path fill="${g(c,-30)}" d="M155.95,387.14c-57.73-12.38-96.67-42.01-96.67-106.98c0-9.41,0.82-18.64,2.39-27.64c19.16,3.37,39.38,16.95,53.68,38.13c1.82,2.69,3.48,5.43,5,8.19c5.13,9.35,12.36,17.39,20.95,23.72c4.9,3.62,9.46,8.33,13.29,14C166.92,354.82,167.24,376.53,155.95,387.14z"/>\n    </g>\n  `,c=>`\n    <g>\n      <ellipse fill="${g(c,-30)}" transform="matrix(0.8435 -0.5371 0.5371 0.8435 -66.1077 207.9553)" cx="323.84" cy="217.43" rx="52.25" ry="77.62"/>\n    </g>\n  `,c=>`\n    <g>\n      <path fill="${g(c,-30)}" d="M235.05,161.3c14.39,27.54,0,70.98-41.15,115.15c-31.82,34.16-86.59,16.82-100.98-10.72s7.48-67.4,48.86-89.02S220.66,133.75,235.05,161.3z"/>\n    </g>\n  `],v=c=>"",m=(n,l=500)=>{const t=(c=>{let n=a(c);return()=>n=e(n)})(n),i=c(f,t()),r=c(p,t()),g=c=>c.map((c=>t()%2?c:v));return((c,...n)=>`\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    version="1.1"\n    width="${c}"\n    height="${c}"\n    viewBox="0 0 500 500"\n  >\n    ${n.join("")}\n  </svg>\n`)(l,`\n  <circle\n    cx="250"\n    cy="250"\n    r="250"\n    fill="${i}"\n  />\n`,[x,g(y),u,g(z),C,M,d].map((n=>c(n,t()))).map((c=>c(r))).join(""),'\n  <path\n    d="M250,0a250,250 0 1,1 0,500"\n    fill-opacity="0.08"\n  />\n')};var b=l(379),$=l.n(b),w=l(314);$()(w.Z,{insert:"head",singleton:!1}),w.Z.locals;const S=c=>{document.getElementById("avatar").innerHTML=m(c||"Your custom seed")};S(),document.getElementById("seed").addEventListener("input",(c=>S(c.target.value)))})()})();
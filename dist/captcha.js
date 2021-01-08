/*! For license information please see captcha.js.LICENSE.txt */
!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.agiCaptcha=r():t.agiCaptcha=r()}(self,(function(){return t={487:t=>{var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var r=[],e=0;e<t.length;e++)r.push(255&t.charCodeAt(e));return r},bytesToString:function(t){for(var r=[],e=0;e<t.length;e++)r.push(String.fromCharCode(t[e]));return r.join("")}}};t.exports=r},12:t=>{var r,e;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e={rotl:function(t,r){return t<<r|t>>>32-r},rotr:function(t,r){return t<<32-r|t>>>r},endian:function(t){if(t.constructor==Number)return 16711935&e.rotl(t,8)|4278255360&e.rotl(t,24);for(var r=0;r<t.length;r++)t[r]=e.endian(t[r]);return t},randomBytes:function(t){for(var r=[];t>0;t--)r.push(Math.floor(256*Math.random()));return r},bytesToWords:function(t){for(var r=[],e=0,n=0;e<t.length;e++,n+=8)r[n>>>5]|=t[e]<<24-n%32;return r},wordsToBytes:function(t){for(var r=[],e=0;e<32*t.length;e+=8)r.push(t[e>>>5]>>>24-e%32&255);return r},bytesToHex:function(t){for(var r=[],e=0;e<t.length;e++)r.push((t[e]>>>4).toString(16)),r.push((15&t[e]).toString(16));return r.join("")},hexToBytes:function(t){for(var r=[],e=0;e<t.length;e+=2)r.push(parseInt(t.substr(e,2),16));return r},bytesToBase64:function(t){for(var e=[],n=0;n<t.length;n+=3)for(var o=t[n]<<16|t[n+1]<<8|t[n+2],a=0;a<4;a++)8*n+6*a<=8*t.length?e.push(r.charAt(o>>>6*(3-a)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],n=0,o=0;n<t.length;o=++n%4)0!=o&&e.push((r.indexOf(t.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|r.indexOf(t.charAt(n))>>>6-2*o);return e}},t.exports=e},738:t=>{function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(r(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}(t)||!!t._isBuffer)}},568:(t,r,e)=>{var n,o,a,i,s;n=e(12),o=e(487).utf8,a=e(738),i=e(487).bin,(s=function(t,r){t.constructor==String?t=r&&"binary"===r.encoding?i.stringToBytes(t):o.stringToBytes(t):a(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var e=n.bytesToWords(t),u=8*t.length,c=1732584193,h=-271733879,d=-1732584194,p=271733878,f=0;f<e.length;f++)e[f]=16711935&(e[f]<<8|e[f]>>>24)|4278255360&(e[f]<<24|e[f]>>>8);e[u>>>5]|=128<<u%32,e[14+(u+64>>>9<<4)]=u;var l=s._ff,g=s._gg,m=s._hh,y=s._ii;for(f=0;f<e.length;f+=16){var v=c,b=h,x=d,I=p;c=l(c,h,d,p,e[f+0],7,-680876936),p=l(p,c,h,d,e[f+1],12,-389564586),d=l(d,p,c,h,e[f+2],17,606105819),h=l(h,d,p,c,e[f+3],22,-1044525330),c=l(c,h,d,p,e[f+4],7,-176418897),p=l(p,c,h,d,e[f+5],12,1200080426),d=l(d,p,c,h,e[f+6],17,-1473231341),h=l(h,d,p,c,e[f+7],22,-45705983),c=l(c,h,d,p,e[f+8],7,1770035416),p=l(p,c,h,d,e[f+9],12,-1958414417),d=l(d,p,c,h,e[f+10],17,-42063),h=l(h,d,p,c,e[f+11],22,-1990404162),c=l(c,h,d,p,e[f+12],7,1804603682),p=l(p,c,h,d,e[f+13],12,-40341101),d=l(d,p,c,h,e[f+14],17,-1502002290),c=g(c,h=l(h,d,p,c,e[f+15],22,1236535329),d,p,e[f+1],5,-165796510),p=g(p,c,h,d,e[f+6],9,-1069501632),d=g(d,p,c,h,e[f+11],14,643717713),h=g(h,d,p,c,e[f+0],20,-373897302),c=g(c,h,d,p,e[f+5],5,-701558691),p=g(p,c,h,d,e[f+10],9,38016083),d=g(d,p,c,h,e[f+15],14,-660478335),h=g(h,d,p,c,e[f+4],20,-405537848),c=g(c,h,d,p,e[f+9],5,568446438),p=g(p,c,h,d,e[f+14],9,-1019803690),d=g(d,p,c,h,e[f+3],14,-187363961),h=g(h,d,p,c,e[f+8],20,1163531501),c=g(c,h,d,p,e[f+13],5,-1444681467),p=g(p,c,h,d,e[f+2],9,-51403784),d=g(d,p,c,h,e[f+7],14,1735328473),c=m(c,h=g(h,d,p,c,e[f+12],20,-1926607734),d,p,e[f+5],4,-378558),p=m(p,c,h,d,e[f+8],11,-2022574463),d=m(d,p,c,h,e[f+11],16,1839030562),h=m(h,d,p,c,e[f+14],23,-35309556),c=m(c,h,d,p,e[f+1],4,-1530992060),p=m(p,c,h,d,e[f+4],11,1272893353),d=m(d,p,c,h,e[f+7],16,-155497632),h=m(h,d,p,c,e[f+10],23,-1094730640),c=m(c,h,d,p,e[f+13],4,681279174),p=m(p,c,h,d,e[f+0],11,-358537222),d=m(d,p,c,h,e[f+3],16,-722521979),h=m(h,d,p,c,e[f+6],23,76029189),c=m(c,h,d,p,e[f+9],4,-640364487),p=m(p,c,h,d,e[f+12],11,-421815835),d=m(d,p,c,h,e[f+15],16,530742520),c=y(c,h=m(h,d,p,c,e[f+2],23,-995338651),d,p,e[f+0],6,-198630844),p=y(p,c,h,d,e[f+7],10,1126891415),d=y(d,p,c,h,e[f+14],15,-1416354905),h=y(h,d,p,c,e[f+5],21,-57434055),c=y(c,h,d,p,e[f+12],6,1700485571),p=y(p,c,h,d,e[f+3],10,-1894986606),d=y(d,p,c,h,e[f+10],15,-1051523),h=y(h,d,p,c,e[f+1],21,-2054922799),c=y(c,h,d,p,e[f+8],6,1873313359),p=y(p,c,h,d,e[f+15],10,-30611744),d=y(d,p,c,h,e[f+6],15,-1560198380),h=y(h,d,p,c,e[f+13],21,1309151649),c=y(c,h,d,p,e[f+4],6,-145523070),p=y(p,c,h,d,e[f+11],10,-1120210379),d=y(d,p,c,h,e[f+2],15,718787259),h=y(h,d,p,c,e[f+9],21,-343485551),c=c+v>>>0,h=h+b>>>0,d=d+x>>>0,p=p+I>>>0}return n.endian([c,h,d,p])})._ff=function(t,r,e,n,o,a,i){var s=t+(r&e|~r&n)+(o>>>0)+i;return(s<<a|s>>>32-a)+r},s._gg=function(t,r,e,n,o,a,i){var s=t+(r&n|e&~n)+(o>>>0)+i;return(s<<a|s>>>32-a)+r},s._hh=function(t,r,e,n,o,a,i){var s=t+(r^e^n)+(o>>>0)+i;return(s<<a|s>>>32-a)+r},s._ii=function(t,r,e,n,o,a,i){var s=t+(e^(r|~n))+(o>>>0)+i;return(s<<a|s>>>32-a)+r},s._blocksize=16,s._digestsize=16,t.exports=function(t,r){if(null==t)throw new Error("Illegal argument "+t);var e=n.wordsToBytes(s(t,r));return r&&r.asBytes?e:r&&r.asString?i.bytesToString(e):n.bytesToHex(e)}},246:(t,r,e)=>{"use strict";const n=e(568);t.exports=class{constructor(){this.params={hash:"k5G0cx321dfk",backgroundColor:"#000000",color:"#e8e8e8",width:"auto",canvasID:"agi-captcha-canvas",hiddenId:"agi-captcha-hidden",hiddenInputName:"password-captcha",font:"32px Arial",textPosition:[10,35],parentDivId:"cp"}}createCanvas(){let t=this.params.width;if("auto"===this.params.width)try{t=document.getElementById(this.params.parentDivId).clientWidth}catch(t){return console.log("agicaptcha error: parent div id not exists: #"+this.params.parentDivId),!1}const r=Math.round(t/10),e=document.createElement("canvas");e.setAttribute("id",this.params.canvasID),e.setAttribute("width",t),e.setAttribute("height",r),e.style.backgroundColor=this.params.backgroundColor;const o=e.getContext("2d"),a=n(Math.random()).substr(0,6);o.font=this.params.font,o.fillStyle=this.params.color,o.fillText(a,this.params.textPosition[0],this.params.textPosition[1],t-this.params.textPosition[0]);const i=document.createElement("input");i.setAttribute("id",this.params.hiddenId),i.setAttribute("type","hidden"),i.setAttribute("name",this.params.hiddenInputName),i.setAttribute("value",n(a+this.params.hash));try{document.getElementById(this.params.canvasID)?document.getElementById(this.params.canvasID).replaceWith(e):document.getElementById(this.params.parentDivId).appendChild(e),document.getElementById(this.params.hiddenId)?document.getElementById(this.params.hiddenId).replaceWith(i):document.getElementById(this.params.parentDivId).appendChild(i)}catch(t){console.log("agicaptcha error: parent div id not exists: #"+this.params.parentDivId)}}}}},r={},function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return t[n](o,o.exports,e),o.exports}(246);var t,r}));
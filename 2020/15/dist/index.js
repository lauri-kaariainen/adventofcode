parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"B2WC":[function(require,module,exports) {
"use strict";function r(r){return o(r)||n(r)||e(r)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(r,t){if(r){if("string"==typeof r)return u(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(r,t):void 0}}function n(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function o(r){if(Array.isArray(r))return u(r)}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.lcm=C,exports.gcd=E,exports.betweenOrEqual=exports.returnUniqueAmountsAsObj=exports.permutations=exports.reduceFlatten=exports.reduceMultiply=exports.reduceSum=exports.insert=exports.flatten=exports.combineMatrices=exports.uniqueDeep=exports.uniqueShallow=exports.trampoline=exports.arrayRotate=exports.insertValueAtMutating=exports.swapPositions=exports.bin2dec=exports.dec2bin=exports.num2hex=exports.hex2bin=exports.num2letter=exports.get8=exports.find4=void 0;var i=function(r,t,e,n){n=n||1;var o=[];return r>0&&r<e[t].length-1?(e[t][r-1]===n&&o.push({x:r-1,y:t}),e[t][r+1]===n&&o.push({x:r+1,y:t})):0===r?e[t][r+1]===n&&o.push({x:r+1,y:t}):r===e[t].length-1&&e[t][r-1]===n&&o.push({x:r-1,y:t}),t>0&&t<e.length-1?(e[t+1][r]===n&&o.push({x:r,y:t+1}),e[t-1][r]===n&&o.push({x:r,y:t-1})):0===t?e[t+1][r]===n&&o.push({x:r,y:t+1}):t===e.length-1&&e[t-1][r]===n&&o.push({x:r,y:t-1}),o};exports.find4=i;var s=function(r,t,e){var n=[];return[{y:t-1,x:r-1},{y:t-1,x:r},{y:t-1,x:r+1},{y:t,x:r+1},{y:t+1,x:r+1},{y:t+1,x:r},{y:t+1,x:r-1},{y:t,x:r-1}].forEach(function(r){return void 0===e[r.y]?"":void 0===e[r.y][r.x]?"":n.push(e[r.y][r.x])}),n};exports.get8=s;var a=function(r){return String.fromCharCode(97+r)};exports.num2letter=a;var c=function(t,e){var n=e||4;return(r(Array(n)).map(function(r){return"0"}).join("")+parseInt(t,16).toString(2)).substr(-n)};exports.hex2bin=c;var p=function(r){return r.toString(16)};exports.num2hex=p;var f=function(r){return(r>>>0).toString(2)};exports.dec2bin=f;var x=function(r){return parseInt(r,2)};exports.bin2dec=x;var l=function(r,t,e){var n;return n=[r[e],r[t]],r[t]=n[0],r[e]=n[1],r};exports.swapPositions=l;var y=function(r,t,e){return r.splice(t,1,e),r};exports.insertValueAtMutating=y;var v=function(r,t){return t?r.unshift(r.pop()):r.push(r.shift()),r};exports.arrayRotate=v;var h=function(r){for(;"function"==typeof r;)r=r();return r};exports.trampoline=h;var m=function(r,t,e){return!e.slice(t+1).includes(r)};exports.uniqueShallow=m;var d=function(r,t,e){return!e.slice(t+1).some(function(t){return JSON.stringify(t)===JSON.stringify(r)})};exports.uniqueDeep=d;var g=function(r,t){return r.map(function(r){return r.map(function(r){return r})}).map(function(e,n){var o=Math.floor((e.length-t[0].length)/2);return n>=o&&n<r.length-o?e.map(function(r,u){return u>=o&&u<e.length-o?t[n-o][u-o]:r}):e})};exports.combineMatrices=g;var b=function r(t){return t.reduce(function(t,e){return t.concat(Array.isArray(e)?r(e):e)},[])};exports.flatten=b;var A=function(r,t){for(var e=arguments.length,n=new Array(e>2?e-2:0),o=2;o<e;o++)n[o-2]=arguments[o];return r.slice(0,t).concat(n,r.slice(t))};exports.insert=A;var S=function(r,t){return 0};exports.reduceSum=S;var w=function(r,t){return 1};exports.reduceMultiply=w;var O=function(r,t){return r.concat(t)};exports.reduceFlatten=O;var M=function r(t){for(var e=[],n=0;n<t.length;n+=1){var o=r(t.slice(0,n).concat(t.slice(n+1)));if(o.length)for(var u=0;u<o.length;u+=1)e.push([t[n]].concat(o[u]));else e.push([t[n]])}return e};exports.permutations=M;var j=function(r){return r.reduce(function(r,t){return r[t]=void 0===r[t]?1:r[t]+=1,r},{})};exports.returnUniqueAmountsAsObj=j;var q=function(r,t,e){return r>=t&&r<=e};function I(r,t){return t?I(t,r%t):0===t?r:NaN}function E(r){for(var t=0,e=0;e<r.length;++e)t=I(r[e],t);return t}function N(r,t){return r*t/I(r,t)}function C(r){for(var t=1,e=0;e<r.length;++e)t=N(r[e],t);return t}exports.betweenOrEqual=q;
},{}],"QCba":[function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("../../../helpmodule.js"),t=(new Date).getTime(),r=function(e){return e.slice(0,-1).lastIndexOf(e.slice(-1)[0])},o=function n(t,r,o,i){return void 0===r&&(r=10),void 0===o&&(o={}),void 0===i&&(i=Object.keys(o).length+1),i>=r?t:function(){var u;return n(o[t.toString()]?i-o[t.toString()]:0,r,e(e({},o),((u={})[t]=i,u)),i+1)}};function i(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];"undefined"!=typeof console&&(console.log.apply(console,e),document.querySelector("pre").innerHTML+="<br/>"+e.join(" "))}function u(){return"0,3,6"}function c(){return"2,0,1,9,5,19"}i("a:\n",n.trampoline(o(0,2020,{2:1,0:2,1:3,9:4,5:5,19:6}))),i("b:"),i("everything took",(new Date).getTime()-t,"ms");
},{"../../../helpmodule.js":"B2WC"}]},{},["QCba"], null)
//# sourceMappingURL=index.js.map
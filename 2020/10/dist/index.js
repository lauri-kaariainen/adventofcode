parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=function(n){return n.split(/\n/).map(function(n){return parseInt(n.trim())}).sort(function(n,t){return n-t}).reduce(function(n,t,e,r){return e!==r.length-1?n.concat(t):n.concat(t).concat(t+3)},[])},t=function(n){return n.reduce(function(n,t,e,r){return 0===e?n.concat(t):n.concat(t-r[e-1])},[])},e=t(n(c()));function r(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];"undefined"!=typeof console&&(console.log.apply(console,n),document.querySelector("pre").innerHTML+="<br/>"+n.join(" "))}function o(){return"16\n    10\n    15\n    5\n    1\n    11\n    7\n    19\n    6\n    12\n    4"}function c(){return"151\n        94\n        14\n        118\n        25\n        143\n        33\n        23\n        80\n        95\n        87\n        44\n        150\n        39\n        148\n        51\n        138\n        121\n        70\n        69\n        90\n        155\n        144\n        40\n        77\n        8\n        97\n        45\n        152\n        58\n        65\n        63\n        128\n        101\n        31\n        112\n        140\n        86\n        30\n        55\n        104\n        135\n        115\n        16\n        26\n        60\n        96\n        85\n        84\n        48\n        4\n        131\n        54\n        52\n        139\n        76\n        91\n        46\n        15\n        17\n        37\n        156\n        134\n        98\n        83\n        111\n        72\n        34\n        7\n        108\n        149\n        116\n        32\n        110\n        47\n        157\n        75\n        13\n        10\n        145\n        1\n        127\n        41\n        53\n        2\n        3\n        117\n        71\n        109\n        105\n        64\n        27\n        38\n        59\n        24\n        20\n        124\n        9\n        66"}r("a:",e.filter(function(n){return 3===n}).length*e.filter(function(n){return 1===n}).length),r("b:");
},{}]},{},["QCba"], null)
//# sourceMappingURL=index.js.map
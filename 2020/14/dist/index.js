parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"B2WC":[function(require,module,exports) {
"use strict";function r(r){return o(r)||n(r)||e(r)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(r,t){if(r){if("string"==typeof r)return u(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(r,t):void 0}}function n(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function o(r){if(Array.isArray(r))return u(r)}function u(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.lcm=C,exports.gcd=E,exports.betweenOrEqual=exports.returnUniqueAmountsAsObj=exports.permutations=exports.reduceFlatten=exports.reduceMultiply=exports.reduceSum=exports.insert=exports.flatten=exports.combineMatrices=exports.uniqueDeep=exports.uniqueShallow=exports.trampoline=exports.arrayRotate=exports.insertValueAtMutating=exports.swapPositions=exports.bin2dec=exports.dec2bin=exports.num2hex=exports.hex2bin=exports.num2letter=exports.get8=exports.find4=void 0;var i=function(r,t,e,n){n=n||1;var o=[];return r>0&&r<e[t].length-1?(e[t][r-1]===n&&o.push({x:r-1,y:t}),e[t][r+1]===n&&o.push({x:r+1,y:t})):0===r?e[t][r+1]===n&&o.push({x:r+1,y:t}):r===e[t].length-1&&e[t][r-1]===n&&o.push({x:r-1,y:t}),t>0&&t<e.length-1?(e[t+1][r]===n&&o.push({x:r,y:t+1}),e[t-1][r]===n&&o.push({x:r,y:t-1})):0===t?e[t+1][r]===n&&o.push({x:r,y:t+1}):t===e.length-1&&e[t-1][r]===n&&o.push({x:r,y:t-1}),o};exports.find4=i;var s=function(r,t,e){var n=[];return[{y:t-1,x:r-1},{y:t-1,x:r},{y:t-1,x:r+1},{y:t,x:r+1},{y:t+1,x:r+1},{y:t+1,x:r},{y:t+1,x:r-1},{y:t,x:r-1}].forEach(function(r){return void 0===e[r.y]?"":void 0===e[r.y][r.x]?"":n.push(e[r.y][r.x])}),n};exports.get8=s;var a=function(r){return String.fromCharCode(97+r)};exports.num2letter=a;var c=function(t,e){var n=e||4;return(r(Array(n)).map(function(r){return"0"}).join("")+parseInt(t,16).toString(2)).substr(-n)};exports.hex2bin=c;var p=function(r){return r.toString(16)};exports.num2hex=p;var f=function(r){return(r>>>0).toString(2)};exports.dec2bin=f;var x=function(r){return parseInt(r,2)};exports.bin2dec=x;var l=function(r,t,e){var n;return n=[r[e],r[t]],r[t]=n[0],r[e]=n[1],r};exports.swapPositions=l;var y=function(r,t,e){return r.splice(t,1,e),r};exports.insertValueAtMutating=y;var v=function(r,t){return t?r.unshift(r.pop()):r.push(r.shift()),r};exports.arrayRotate=v;var h=function(r){for(;"function"==typeof r;)r=r();return r};exports.trampoline=h;var m=function(r,t,e){return!e.slice(t+1).includes(r)};exports.uniqueShallow=m;var d=function(r,t,e){return!e.slice(t+1).some(function(t){return JSON.stringify(t)===JSON.stringify(r)})};exports.uniqueDeep=d;var g=function(r,t){return r.map(function(r){return r.map(function(r){return r})}).map(function(e,n){var o=Math.floor((e.length-t[0].length)/2);return n>=o&&n<r.length-o?e.map(function(r,u){return u>=o&&u<e.length-o?t[n-o][u-o]:r}):e})};exports.combineMatrices=g;var b=function r(t){return t.reduce(function(t,e){return t.concat(Array.isArray(e)?r(e):e)},[])};exports.flatten=b;var A=function(r,t){for(var e=arguments.length,n=new Array(e>2?e-2:0),o=2;o<e;o++)n[o-2]=arguments[o];return r.slice(0,t).concat(n,r.slice(t))};exports.insert=A;var S=function(r,t){return 0};exports.reduceSum=S;var w=function(r,t){return 1};exports.reduceMultiply=w;var O=function(r,t){return r.concat(t)};exports.reduceFlatten=O;var M=function r(t){for(var e=[],n=0;n<t.length;n+=1){var o=r(t.slice(0,n).concat(t.slice(n+1)));if(o.length)for(var u=0;u<o.length;u+=1)e.push([t[n]].concat(o[u]));else e.push([t[n]])}return e};exports.permutations=M;var j=function(r){return r.reduce(function(r,t){return r[t]=void 0===r[t]?1:r[t]+=1,r},{})};exports.returnUniqueAmountsAsObj=j;var q=function(r,t,e){return r>=t&&r<=e};function I(r,t){return t?I(t,r%t):0===t?r:NaN}function E(r){for(var t=0,e=0;e<r.length;++e)t=I(r[e],t);return t}function N(r,t){return r*t/I(r,t)}function C(r){for(var t=1,e=0;e<r.length;++e)t=N(r[e],t);return t}exports.betweenOrEqual=q;
},{}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var m=require("../../../helpmodule.js"),X=(new Date).getTime(),n=function(m){return Array.from(new Array(36-m.length)).map(function(m){return 0}).join("")+m},e=function(X){return X.split(/\s*mask = /g).slice(1).map(function(X){return{bitMask:X.split(/\n\s*/)[0],writes:X.split(/\s*\n\s*/g).slice(1).map(function(X){return{address:parseInt(X.match(/\[(\d+)\]/)[1]),binary:n(m.dec2bin(parseInt(X.match(/= (\d+)/)[1])))}})}})},a=function(m,X){return m.split("").map(function(m,n){return"X"===X[n]?m:X[n]}).join("")},s=r();function k(){for(var m=[],X=0;X<arguments.length;X++)m[X]=arguments[X];"undefined"!=typeof console&&(console.log.apply(console,m),document.querySelector("pre").innerHTML+="<br/>"+m.join(" "))}function t(){return"mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X\n    mem[8] = 11\n    mem[7] = 101\n    mem[8] = 0"}function r(){return"mask = X101011X011X10101011000001X00XX0X000\n        mem[60126] = 9674686\n        mem[39254] = 523988\n        mem[54849] = 40771927\n        mem[29690] = 10110\n        mem[10782] = 975308\n        mem[43128] = 4347\n        mask = 1X0X00101111100010100X001010XX0X0XXX\n        mem[60704] = 43881206\n        mem[63842] = 12369309\n        mem[45876] = 33941457\n        mem[7001] = 347\n        mem[57168] = 5484326\n        mem[9010] = 1526598\n        mask = XX0X0111X1101X1X101X110001100X101X00\n        mem[64667] = 9335\n        mem[557] = 103838228\n        mask = 01110111011110X0101X110000100X10100X\n        mem[37083] = 252803732\n        mem[38441] = 264510\n        mem[10471] = 6258763\n        mem[6599] = 7469003\n        mem[31917] = 4440673\n        mask = X011X01000X110X1X00X0100X0X000100011\n        mem[34590] = 1012\n        mem[45359] = 8432\n        mem[3178] = 33474\n        mem[3722] = 3556\n        mem[49428] = 9026812\n        mem[10938] = 35041698\n        mask = 01X1X11X011X1X0X11X0100X11101X010011\n        mem[42766] = 6617\n        mem[49563] = 960913\n        mem[47263] = 269\n        mem[31711] = 43288638\n        mem[41482] = 64610360\n        mem[16665] = 600\n        mem[32730] = 37650\n        mask = 00XX0X101111XXX1101X0X0X001000101100\n        mem[34707] = 40982522\n        mem[9182] = 545101093\n        mem[46509] = 44467432\n        mem[14087] = 1863\n        mem[40214] = 126903285\n        mem[60120] = 56379991\n        mask = 01XX10110110100010X100X0X10111100000\n        mem[30183] = 134656354\n        mem[49417] = 78985543\n        mem[14770] = 18142096\n        mem[61486] = 39482\n        mem[52941] = 98022933\n        mem[46433] = 952154\n        mask = 00010X10X1110010101001011001X100X101\n        mem[20851] = 938875\n        mem[42517] = 2746639\n        mem[18095] = 623480\n        mem[45359] = 554\n        mem[52625] = 9537360\n        mem[3178] = 634749644\n        mem[11612] = 1338\n        mask = 01000X1X111XX110101X10000X0XX11011X1\n        mem[33690] = 133806\n        mem[11082] = 47091974\n        mem[18025] = 716988\n        mem[1627] = 3080902\n        mask = 010101X1111XX11010X00000XX11XX0X0010\n        mem[1839] = 55761\n        mem[34016] = 19521\n        mem[32399] = 2550\n        mem[56670] = 486944499\n        mask = 0100101101110XX01011X100101111X10011\n        mem[57556] = 1980\n        mem[15099] = 1000\n        mem[2248] = 11713417\n        mask = 0X0X011X1111X110101X0000001000101X00\n        mem[28478] = 2335\n        mem[49509] = 262\n        mem[18296] = 16275\n        mem[3851] = 228035\n        mem[30877] = 53163521\n        mask = 000X01X010100X1010101101100000X0X100\n        mem[38075] = 79529\n        mem[42738] = 45415\n        mem[24109] = 1567958\n        mem[17143] = 93137\n        mem[45101] = 814797986\n        mask = XX01XX1X011X10X0101011000000010000X1\n        mem[1576] = 443528583\n        mem[36865] = 148\n        mem[46509] = 482\n        mem[62388] = 15\n        mem[63623] = 539909442\n        mem[41370] = 128\n        mem[44715] = 22308\n        mask = 11011X1000101X00XXX001X110X00100010X\n        mem[35152] = 34820483\n        mem[16033] = 65763\n        mem[1882] = 1027800\n        mask = 00010X10111110X0X010X0110010X01X1X01\n        mem[59815] = 2490477\n        mem[49157] = 6507122\n        mem[30800] = 590164239\n        mem[59044] = 165654579\n        mask = 01010X1111111X101010011X0011X0001011\n        mem[10137] = 228\n        mem[2311] = 13276802\n        mask = XX01X1X101101010101100001X000010000X\n        mem[34583] = 1655642\n        mem[11286] = 132679008\n        mem[22109] = 157717238\n        mask = 0001001011111X1X0X101XX11X1X101100X1\n        mem[57742] = 26691\n        mem[6874] = 10458032\n        mem[53037] = 2388387\n        mem[12331] = 5770\n        mem[51728] = 2135\n        mem[9580] = 487489805\n        mask = 01001X11011110X0X0X01X1100000111XXX1\n        mem[53769] = 55803305\n        mem[56229] = 24695063\n        mem[19171] = 48736390\n        mem[64782] = 735\n        mem[3081] = 280948\n        mem[57365] = 846847157\n        mask = 0X000110X1X11X1X10111000X010000XXX00\n        mem[61422] = 1126\n        mem[22207] = 67628317\n        mem[9539] = 61546790\n        mem[1131] = 130904490\n        mem[52684] = 8379637\n        mem[24366] = 383662099\n        mask = 010X1111011X1000X0X11X101X00101X1010\n        mem[18109] = 6735\n        mem[32797] = 531499843\n        mem[53585] = 432\n        mask = 100000X0111X100X1XX000X0101100110000\n        mem[7943] = 196928\n        mem[22176] = 12548\n        mem[30990] = 446363\n        mem[160] = 22025\n        mem[4615] = 566343\n        mask = 0X11011101X1X0011X011101111101001001\n        mem[39520] = 714461\n        mem[45101] = 3821808\n        mem[62323] = 6386948\n        mask = 01X0110X01XX100010110010011001000X01\n        mem[37344] = 447\n        mem[3023] = 855524337\n        mem[23128] = 112513310\n        mem[6564] = 11\n        mask = 0100X01XX111XX1X10111100001110001X10\n        mem[62178] = 63123\n        mem[55172] = 153103\n        mem[51929] = 181344\n        mem[34661] = 1972\n        mem[54999] = 1068\n        mem[59358] = 992\n        mask = 1001011XX0111XX010100X0001001X11X0X0\n        mem[41893] = 479\n        mem[6599] = 1981844\n        mem[46760] = 216449\n        mem[50221] = 811\n        mask = X0X10010111X101001100X01X01X11101X10\n        mem[25689] = 136\n        mem[10938] = 28382\n        mem[16643] = 197364\n        mem[51281] = 617\n        mem[16153] = 3676\n        mem[26490] = 384\n        mask = 010001X00X11100011100010111010X010X0\n        mem[64133] = 208\n        mem[24062] = 903539668\n        mem[36044] = 2001\n        mem[23144] = 1011029\n        mem[22716] = 11499\n        mem[59581] = 17899405\n        mem[26171] = 111934167\n        mask = 010010110X101000101XXX00000111001101\n        mem[43291] = 3112\n        mem[19446] = 5600478\n        mem[62398] = 341768545\n        mem[30567] = 465047\n        mem[38317] = 22125824\n        mask = 00X101101111101000X011X1X00X10X0X101\n        mem[53713] = 409555\n        mem[55388] = 65118\n        mem[54952] = 133834612\n        mem[25132] = 42713528\n        mem[16165] = 2107530\n        mask = 101101111111101100X0X111X1000X101X1X\n        mem[46469] = 6516\n        mem[58152] = 331216697\n        mem[1931] = 23454\n        mem[63623] = 304198968\n        mem[5559] = 32986355\n        mask = 0X0111XX01111X00101X10000X10010010X1\n        mem[54268] = 619\n        mem[50248] = 882\n        mem[12816] = 850402\n        mask = 010X0110011X100X1X10X1101X1XX0X11101\n        mem[37158] = 8631\n        mem[5913] = 1852245\n        mem[39724] = 809871\n        mem[27706] = 2649386\n        mem[53037] = 187717225\n        mask = 00011X110110101010X0X11100X11X1X1000\n        mem[22063] = 97071\n        mem[62330] = 777\n        mem[13645] = 8634786\n        mask = 0XXXX111011110X0101X100X010001X0X000\n        mem[3609] = 1585\n        mem[55533] = 3654\n        mem[46561] = 27985772\n        mem[49761] = 1723550\n        mem[9580] = 123963\n        mem[30529] = 15486580\n        mask = 01011111011X101X1011100X001101100X00\n        mem[386] = 5196729\n        mem[26441] = 930769\n        mem[51597] = 160686\n        mem[34426] = 89786878\n        mem[7046] = 1642552\n        mem[58359] = 19998\n        mask = X01110X1X11X1X0X100110XXX11101000011\n        mem[52684] = 413134467\n        mem[41057] = 237240996\n        mem[4615] = 1050604472\n        mem[37298] = 464\n        mem[10624] = 166667\n        mem[51214] = 189464\n        mask = 0011111101X01000101111XXX101X1101001\n        mem[57892] = 4128\n        mem[23904] = 1230477\n        mem[37354] = 295321\n        mem[9213] = 18002\n        mem[19975] = 93077192\n        mask = 1101011101X01111100010XX01X001000010\n        mem[9629] = 585\n        mem[14618] = 414\n        mem[46327] = 110854046\n        mem[24296] = 101\n        mem[15485] = 3005564\n        mask = X001XX1X0010X010101X1101100011000X01\n        mem[41309] = 445635\n        mem[48838] = 55661\n        mem[46592] = 765710\n        mem[18993] = 4196275\n        mask = 10010011X0100010X0100X01000X10001001\n        mem[56025] = 1496\n        mem[41771] = 3244\n        mem[19132] = 888\n        mem[65367] = 208629904\n        mem[59728] = 9087603\n        mask = 0101X1X0011010011X1001X111111XX11X01\n        mem[58407] = 87107553\n        mem[28815] = 68182\n        mem[28313] = 2239\n        mem[39552] = 101470\n        mask = 0111011101101X01X001001111010111XXXX\n        mem[8813] = 400372\n        mem[45602] = 32028274\n        mem[24857] = 114\n        mem[61754] = 95\n        mem[30298] = 580278\n        mask = 11011X110X1010X010X001010X0XX10X0011\n        mem[55] = 1059\n        mem[52684] = 56819312\n        mem[51597] = 2017\n        mem[39454] = 931156481\n        mem[62166] = 62175870\n        mem[36867] = 470\n        mem[47415] = 1746\n        mask = 11010010XX1X10X0101XX1X001000110000X\n        mem[1579] = 483360842\n        mem[28054] = 6824\n        mem[2134] = 7557\n        mem[47741] = 701257\n        mem[51788] = 731562\n        mem[61220] = 6536939\n        mem[46561] = 882\n        mask = 010X0110X110X11010101X0X011101001001\n        mem[34992] = 709195313\n        mem[629] = 47845214\n        mem[5317] = 14225\n        mem[12844] = 723\n        mem[41998] = 7106433\n        mem[9010] = 425846\n        mask = XX11111101111010X0XX1010010X10100XX1\n        mem[4161] = 30022\n        mem[47290] = 14778\n        mem[46760] = 483\n        mem[42376] = 1286\n        mem[9346] = 8742\n        mask = 1101001011X1100010XX11011X0001010X00\n        mem[5481] = 17524\n        mem[45359] = 5898\n        mem[34562] = 1689874\n        mem[23144] = 250958525\n        mem[55571] = 7375458\n        mem[38757] = 370\n        mask = 01010X101111X1X01011010000010001100X\n        mem[17410] = 85534302\n        mem[12631] = 253750\n        mem[61106] = 613785883\n        mem[18024] = 34275\n        mem[48546] = 680\n        mem[41751] = 140\n        mask = 1X01X010X01010X0101X10011X0001010100\n        mem[20073] = 8549591\n        mem[28358] = 12445\n        mem[49845] = 8275\n        mem[23873] = 20426966\n        mem[18109] = 378612521\n        mem[55852] = 52955029\n        mask = X10101110XX0111110XX100X011001101X00\n        mem[16969] = 474\n        mem[28358] = 2430\n        mem[34229] = 51117\n        mask = 01101111011110XX1X10X0010X01000X1000\n        mem[20344] = 4618\n        mem[45257] = 226807155\n        mem[61651] = 2271\n        mask = 01XXX1X00110100X10X0111100X100101101\n        mem[43924] = 1467\n        mem[34016] = 15\n        mem[35565] = 97087604\n        mem[28171] = 595\n        mem[65534] = 4049200\n        mask = 100000101111100XX0100000101000001X0X\n        mem[5481] = 1424699\n        mem[27180] = 36197\n        mem[34669] = 131477593\n        mem[8450] = 37506\n        mem[4928] = 11393\n        mask = 01110111011110001X11010010111XX010X0\n        mem[18923] = 17613\n        mem[55846] = 20954445\n        mem[39254] = 51926728\n        mem[38075] = 130\n        mem[15418] = 44585145\n        mask = X00101101111X0101010001X1X01000001X1\n        mem[35199] = 312510765\n        mem[62398] = 999656\n        mem[55533] = 37897408\n        mem[5648] = 1036966443\n        mask = 010011110111101XXX1011101000011X1000\n        mem[19738] = 151629\n        mem[56289] = 189790\n        mem[35953] = 15255399\n        mem[52671] = 396\n        mem[11845] = 993740\n        mask = 1101001000111X1X101XX100010001001001\n        mem[34411] = 295\n        mem[56671] = 2362723\n        mask = 1101XX110X10XX1X10101100000001011100\n        mem[7337] = 8237094\n        mem[7031] = 118473\n        mem[39047] = 2581731\n        mem[51238] = 451786815\n        mem[18409] = 243\n        mask = X00101101X10X0101X10011X10X000101000\n        mem[46760] = 244623\n        mem[40204] = 3603820\n        mem[52129] = 3506\n        mem[16653] = 21230148\n        mem[41485] = 33094\n        mem[60015] = 107\n        mask = X101011001111000101X0X111000X0X00X0X\n        mem[42738] = 3889911\n        mem[61025] = 3996\n        mem[30822] = 319759319\n        mem[53445] = 6639088\n        mem[29654] = 4338\n        mem[21504] = 57158603\n        mask = X0111111XX11X000101101X1101001100001\n        mem[5225] = 6975\n        mem[30877] = 1878\n        mem[46079] = 1189855\n        mem[19002] = 3809\n        mem[18908] = 28205\n        mem[42747] = 159071873\n        mem[19144] = 899748\n        mask = 0101X1110100111X0XX1X1001X1001100000\n        mem[34377] = 5331828\n        mem[52109] = 3671\n        mem[9629] = 10211687\n        mask = 0101X100XX10X00X111X000111X11X1X0001\n        mem[62093] = 4555750\n        mem[22728] = 1902\n        mem[25369] = 21501187\n        mem[38470] = 1713\n        mem[18034] = 9033\n        mask = X0X101111111X0X1X01011100100000X1110\n        mem[16231] = 25595\n        mem[7337] = 64222006\n        mem[38717] = 17998107\n        mem[17143] = 56331\n        mem[3851] = 17\n        mem[36652] = 810070\n        mask = 1X00X11111X011101X1111110110X0110010\n        mem[40873] = 245915859\n        mem[38090] = 328774\n        mem[45602] = 361242\n        mem[40307] = 189025934\n        mem[55533] = 902335450\n        mem[48681] = 3398403\n        mask = 0X011111011010111XX1100001X100001000\n        mem[27200] = 7180\n        mem[41393] = 197862524\n        mem[35565] = 6433\n        mask = 00111X1X011X100X10X10X0010100X100000\n        mem[22127] = 2039\n        mem[49761] = 2974\n        mem[32236] = 133316\n        mem[36465] = 233114\n        mask = 1X0101111X11101X10100100011100001X01\n        mem[61195] = 12674536\n        mem[16732] = 11908077\n        mem[5648] = 46490\n        mem[15994] = 87271\n        mem[34229] = 53000\n        mem[22063] = 966438\n        mem[59044] = 1966845\n        mask = 0X01X11101X01X1XXX111000X11001101001\n        mem[16961] = 3007244\n        mem[24296] = 229759353\n        mem[5240] = 248972\n        mem[33165] = 870504\n        mask = 110X11110110101X1000X1110100XX0X0111\n        mem[43104] = 394289736\n        mem[50640] = 8371\n        mem[19002] = 22263052\n        mask = X00X01X0X01X10001X1X1010010110X11001\n        mem[52725] = 3596\n        mem[1830] = 852\n        mem[17859] = 5145419\n        mem[24109] = 3266\n        mask = 01001XX1011X1000X0X100X000X11100XX01\n        mem[2939] = 21652\n        mem[31549] = 6146\n        mem[46081] = 89954225\n        mem[56499] = 566\n        mem[46561] = 523763\n        mask = 001X001X111X011110X1X11XX1X01X101100\n        mem[9682] = 1883\n        mem[24602] = 937546207\n        mem[24588] = 2933\n        mem[11845] = 7846310\n        mem[33451] = 177708\n        mem[25861] = 52153\n        mem[60126] = 6178305\n        mask = 0100001011111X1110XXX1X0000001101010\n        mem[32925] = 124064771\n        mem[47229] = 470344\n        mem[19578] = 14298\n        mem[5024] = 281\n        mem[34016] = 4572362\n        mask = XX01X1X1011010111011X1111X1011011011\n        mem[41309] = 6227\n        mem[23647] = 137\n        mem[17469] = 322208\n        mem[55172] = 193476\n        mem[65367] = 98630465\n        mem[23822] = 127119\n        mask = 0101011001111X00X010X0011110X1100101\n        mem[59963] = 124947188\n        mem[42597] = 1283704\n        mem[18482] = 7915\n        mem[47413] = 471406\n        mem[43629] = 128188581\n        mem[63257] = 228254709\n        mask = 0X11X111011X100X10X10X0111X001101XX1\n        mem[55436] = 131315318\n        mem[24551] = 243\n        mem[4711] = 2883\n        mem[48157] = 2508\n        mem[37030] = 21555\n        mem[34562] = 1589005\n        mem[11550] = 5293\n        mask = 0X01011001111X0011100000X10000101X01\n        mem[14335] = 3968288\n        mem[44150] = 10819878\n        mem[29244] = 165332\n        mask = 01110111011110X01011X10X1X0110101110\n        mem[59329] = 39829777\n        mem[34766] = 196214\n        mem[39624] = 6080817\n        mem[28054] = 6964\n        mask = 10010X1011111X001X1X1010101100100X01\n        mem[37665] = 326246393\n        mem[43120] = 10019762\n        mask = 000101XX10111X10101X0100001X1X001X01\n        mem[51388] = 2236803\n        mem[18177] = 14993\n        mem[61543] = 16001841\n        mem[56229] = 342151958\n        mask = 0011101XXX111001X001100X111X001X0X01\n        mem[63605] = 1204\n        mem[56106] = 24425\n        mem[8823] = 624\n        mem[33297] = 24751311\n        mask = 1101001011XX10101X100X10110011X10X00\n        mem[1528] = 367894\n        mem[51697] = 8167\n        mem[20699] = 149242307\n        mem[40307] = 3205\n        mem[10690] = 961\n        mem[54699] = 10574\n        mem[57137] = 731\n        mask = 0X0101001011X1X0101X0000101010101000\n        mem[53249] = 23260\n        mem[59520] = 75723443\n        mem[17105] = 115182\n        mem[30275] = 6131848\n        mem[3023] = 400948\n        mask = 110X101X101010101011X10XX000X100X0X1\n        mem[11133] = 20188322\n        mem[21781] = 56747\n        mem[8420] = 22379\n        mask = 0100X11101111010101000X010X0001X1X0X\n        mem[36172] = 53\n        mem[8450] = 3013\n        mem[37952] = 3403\n        mem[16191] = 81318477\n        mem[13470] = 240413938\n        mask = 0100X11101111000000X10X00101011X0111\n        mem[40021] = 57554\n        mem[64773] = 3803\n        mask = X001011X1X1X1010101011X0XXXX00101100\n        mem[41393] = 9033\n        mem[9481] = 966953\n        mask = 0100X1X101111000101101X00110010X1000\n        mem[58752] = 26939\n        mem[33793] = 109959\n        mem[22716] = 107238\n        mask = 1X11X01X0X01100100X101000X00X011X0X0\n        mem[33454] = 9482389\n        mem[10379] = 2432\n        mem[57658] = 265\n        mem[40140] = 130152807\n        mask = 01X111100110100X100010010X0110011X0X\n        mem[27458] = 80396810\n        mem[37241] = 175138597\n        mem[12313] = 65106019\n        mem[27189] = 5555493\n        mem[15622] = 7712357\n        mask = X10111110X101X101X110X00X11000101X01\n        mem[26165] = 623840421\n        mem[49256] = 9368652\n        mem[14770] = 544947\n        mem[31629] = 13938\n        mask = 000100101111111X011011010X1X101100X1\n        mem[56248] = 21501\n        mem[51232] = 61595\n        mask = 10111001111111XX100X1001110101000X11\n        mem[29008] = 440\n        mem[29652] = 270482\n        mem[38470] = 495\n        mem[33132] = 1675\n        mem[17078] = 5234\n        mem[5001] = 2458\n        mask = 1X000010111110X010XX0X00X010X00X00X0\n        mem[30147] = 497416\n        mem[31711] = 353388\n        mem[5024] = 51391\n        mem[42787] = 48397\n        mem[8066] = 54115\n        mem[27040] = 754\n        mask = 0X11111X01X01X0110000101010101100001\n        mem[55892] = 24149471\n        mem[42124] = 178547303\n        mask = X1010101X111X1XX10X01000101X0010XX00\n        mem[36025] = 95\n        mem[30529] = 881\n        mem[64696] = 210812\n        mem[60217] = 4509\n        mem[37727] = 14972\n        mem[3394] = 1633"}k("a:\n",e(s).map(function(X){return{keys:X.writes.map(function(m){return m.address}),values:X.writes.map(function(m){return a(m.binary,X.bitMask)}).map(m.bin2dec)}}).flatMap(function(m){return m.keys.map(function(X,n){return{key:X,value:m.values[n]}})}).filter(function(m,X,n){return!n.slice(X+1).find(function(X){return X.key===m.key})}).map(function(m){return m.value}).reduce(function(m,X){return m+X})),k("b:"),k("everything took",(new Date).getTime()-X,"ms");
},{"../../../helpmodule.js":"B2WC"}]},{},["QCba"], null)
//# sourceMappingURL=index.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QCba":[function(require,module,exports) {
"use strict";var n,F=this&&this.__assign||function(){return(F=Object.assign||function(n){for(var F,E=1,S=arguments.length;E<S;E++)for(var L in F=arguments[E])Object.prototype.hasOwnProperty.call(F,L)&&(n[L]=F[L]);return n}).apply(this,arguments)};!function(n){n.North="N",n.East="E",n.South="S",n.West="W"}(n||(n={}));var E=function(E,S){return E[0]===n.North?F(F({},S),{y:S.y-parseInt(E.substr(1))}):E[0]===n.South?F(F({},S),{y:S.y+parseInt(E.substr(1))}):E[0]===n.East?F(F({},S),{x:S.x-parseInt(E.substr(1))}):E[0]===n.West?F(F({},S),{x:S.x+parseInt(E.substr(1))}):"R"===E[0]?F(F({},S),{degrees:(S.degrees+parseInt(E.substr(1)))%360}):"L"===E[0]?F(F({},S),{degrees:(S.degrees-parseInt(E.substr(1)))%360}):F(F({},S),{x:90===S.degrees?S.x+parseInt(E.substr(1)):270===S.degrees?S.x-parseInt(E.substr(1)):S.x,y:0===S.degrees?S.y-parseInt(E.substr(1)):180===S.degrees?S.y+parseInt(E.substr(1)):S.y})},S=function F(S,L,R){return void 0===L&&(L={x:0,y:0,degrees:90}),void 0===R&&(R=n.East),S.length?F(S.slice(1),E(S[0],L)):L},L=(new Date).getTime();function R(){for(var n=[],F=0;F<arguments.length;F++)n[F]=arguments[F];"undefined"!=typeof console&&(console.log.apply(console,n),document.querySelector("pre").innerHTML+="<br/>"+n.join(" "))}function W(){return"F10\n    N3\n    F7\n    R90\n    F11"}function N(){return"W5\n        F66\n        S4\n        E1\n        F78\n        L90\n        F79\n        S4\n        F64\n        R180\n        F24\n        N4\n        L90\n        N3\n        R180\n        E5\n        N5\n        F68\n        E3\n        L180\n        F56\n        E3\n        S5\n        F75\n        E1\n        L90\n        F53\n        S2\n        E3\n        S4\n        L180\n        W4\n        L90\n        S1\n        F51\n        L90\n        W3\n        L90\n        W3\n        F39\n        W2\n        R90\n        E1\n        R90\n        W4\n        R180\n        N1\n        E5\n        R90\n        F63\n        L90\n        N4\n        R180\n        N3\n        F25\n        W3\n        L90\n        N4\n        W3\n        S5\n        E3\n        R90\n        E5\n        F17\n        S5\n        F20\n        E2\n        L90\n        E1\n        S5\n        R90\n        F13\n        E3\n        N4\n        W1\n        L90\n        N3\n        F95\n        N1\n        F37\n        N2\n        E5\n        L90\n        W2\n        N5\n        F8\n        S4\n        E4\n        L90\n        E1\n        F92\n        S2\n        F26\n        S1\n        F97\n        E4\n        L90\n        W1\n        R270\n        F28\n        R90\n        S3\n        N2\n        F93\n        N1\n        E4\n        S1\n        E5\n        S1\n        W2\n        F70\n        N4\n        W5\n        F74\n        N1\n        L90\n        S2\n        L180\n        S1\n        E3\n        R180\n        W3\n        N5\n        L90\n        W3\n        F20\n        E5\n        R90\n        E2\n        F52\n        L270\n        E3\n        R90\n        E3\n        R90\n        F8\n        E5\n        F26\n        E1\n        F87\n        N1\n        F77\n        W4\n        F60\n        S2\n        F39\n        R90\n        S1\n        F5\n        N4\n        F98\n        W5\n        R90\n        W1\n        R90\n        S4\n        L90\n        N5\n        F19\n        S2\n        L270\n        F44\n        E1\n        F90\n        R90\n        F11\n        S4\n        R90\n        E2\n        L90\n        N4\n        R180\n        E5\n        F66\n        S5\n        F11\n        L180\n        E1\n        N1\n        L180\n        S3\n        E5\n        N2\n        W5\n        F75\n        E3\n        N1\n        W5\n        L90\n        S5\n        R90\n        S5\n        F2\n        W2\n        N4\n        F15\n        S5\n        L90\n        E1\n        F49\n        W5\n        F48\n        R90\n        N4\n        W5\n        L90\n        E4\n        L270\n        F77\n        E2\n        F33\n        E1\n        N2\n        L90\n        F75\n        E5\n        L90\n        F16\n        L90\n        F82\n        E4\n        S5\n        F72\n        S3\n        R270\n        F88\n        W1\n        L90\n        N5\n        L180\n        W1\n        R90\n        E1\n        F39\n        R90\n        F27\n        R90\n        W3\n        R90\n        F55\n        R180\n        W5\n        S2\n        F18\n        E3\n        F1\n        E5\n        N1\n        W4\n        F10\n        L90\n        F76\n        N4\n        F40\n        R180\n        E4\n        R90\n        F69\n        W5\n        R90\n        W3\n        F67\n        W5\n        N4\n        E5\n        N4\n        W2\n        L90\n        E5\n        F26\n        R180\n        F48\n        W3\n        E2\n        F84\n        E1\n        R90\n        F51\n        L180\n        S3\n        W5\n        R90\n        N1\n        F69\n        W2\n        S5\n        R180\n        F57\n        W2\n        F45\n        R90\n        N2\n        L90\n        N4\n        R180\n        F8\n        L180\n        F48\n        W5\n        L90\n        S5\n        F52\n        L90\n        S5\n        R90\n        E4\n        L90\n        N4\n        L90\n        W5\n        F80\n        R90\n        W1\n        F38\n        R90\n        F25\n        W1\n        F31\n        N4\n        S4\n        F91\n        R180\n        S2\n        L90\n        F30\n        S3\n        W3\n        S4\n        W1\n        N4\n        F25\n        R90\n        W3\n        F10\n        N3\n        R90\n        N3\n        L90\n        E1\n        S4\n        R90\n        L90\n        F36\n        E4\n        R180\n        F27\n        R270\n        F57\n        L180\n        F72\n        S2\n        R90\n        W1\n        F19\n        S3\n        F27\n        N4\n        W5\n        R90\n        F42\n        L180\n        F57\n        E5\n        F63\n        N3\n        F97\n        L90\n        S5\n        F11\n        L90\n        W1\n        F71\n        W3\n        R90\n        W4\n        F43\n        F71\n        W3\n        F20\n        N1\n        F75\n        E5\n        F15\n        N3\n        F3\n        W2\n        F13\n        W5\n        F88\n        E5\n        L90\n        N4\n        L90\n        F11\n        L90\n        F58\n        W2\n        R90\n        S5\n        F55\n        S4\n        F83\n        F8\n        N1\n        R90\n        F36\n        W2\n        F57\n        N4\n        L180\n        W2\n        F37\n        S1\n        F18\n        E1\n        F82\n        S5\n        E4\n        R90\n        E2\n        S5\n        R90\n        S5\n        R180\n        F91\n        E2\n        N3\n        F43\n        E2\n        R90\n        S4\n        E1\n        R90\n        S3\n        L180\n        F48\n        F57\n        E5\n        F87\n        S4\n        R90\n        N4\n        E2\n        N4\n        W5\n        R270\n        F31\n        N5\n        W5\n        N1\n        F92\n        S5\n        F40\n        W3\n        F79\n        L180\n        E5\n        F83\n        L180\n        N1\n        F30\n        N2\n        E1\n        S3\n        L90\n        E5\n        F56\n        R180\n        E4\n        F17\n        W4\n        L180\n        S5\n        E1\n        F57\n        E3\n        F99\n        S3\n        F29\n        L90\n        F61\n        S5\n        W2\n        S3\n        F83\n        R180\n        F83\n        E1\n        R90\n        E4\n        N3\n        W5\n        N3\n        N2\n        F21\n        L90\n        L90\n        F72\n        S3\n        L90\n        E3\n        F16\n        R180\n        F75\n        S3\n        R90\n        S3\n        L90\n        F82\n        R90\n        W5\n        R90\n        N4\n        R90\n        F14\n        N1\n        F59\n        E5\n        S2\n        W3\n        N3\n        S5\n        E4\n        F43\n        E2\n        F31\n        S2\n        F59\n        N2\n        R90\n        S3\n        L90\n        N3\n        F88\n        N2\n        F22\n        N4\n        L90\n        N2\n        L90\n        F21\n        W4\n        F97\n        R90\n        F29\n        S5\n        W4\n        F40\n        N3\n        L90\n        F63\n        N5\n        F56\n        R90\n        L90\n        S3\n        R90\n        S5\n        F53\n        N1\n        W3\n        R90\n        F1\n        S2\n        E4\n        N4\n        F68\n        R90\n        W3\n        S5\n        S1\n        E4\n        L180\n        F8\n        E5\n        L180\n        W5\n        N1\n        F42\n        S3\n        F61\n        L90\n        S3\n        F29\n        S4\n        E3\n        F6\n        R90\n        N2\n        L180\n        W3\n        F48\n        S5\n        E3\n        R90\n        E4\n        R180\n        F87\n        L90\n        F73\n        S2\n        W1\n        S5\n        E5\n        S4\n        E2\n        S4\n        F93\n        L90\n        W3\n        S3\n        F17\n        N5\n        F42\n        S5\n        R90\n        E1\n        S2\n        F7\n        S3\n        W2\n        L180\n        W4\n        F99\n        E5\n        S5\n        F93\n        L270\n        F20\n        N4\n        L90\n        F1\n        N1\n        L90\n        S2\n        F96\n        L180\n        S2\n        F8\n        L90\n        S4\n        R90\n        F70\n        W1\n        R180\n        S2\n        R180\n        N3\n        L90\n        E4\n        R90\n        F40\n        E1\n        S4\n        R90\n        W2\n        R90\n        L90\n        N5\n        L180\n        F5\n        E5\n        S3\n        F43\n        E2\n        E2\n        F79\n        E5\n        F66\n        E5\n        S4\n        E5\n        S4\n        W2\n        S2\n        F41\n        L90\n        N5\n        F60\n        W5\n        N4\n        E2\n        S5\n        R90\n        W2\n        F98\n        W3\n        S2\n        W5\n        L90\n        W5\n        F16\n        S5\n        L90\n        F85\n        R90\n        F56\n        W4\n        R90\n        E1\n        R90\n        F5\n        N5\n        E5\n        R90\n        E4\n        F77\n        S1\n        E5\n        F24\n        L180\n        W1\n        S3\n        F31\n        E5\n        S5\n        W4\n        F83\n        W3\n        N4\n        L90\n        N3\n        L90\n        E2\n        R180\n        S1\n        F17\n        R90\n        R180\n        S4\n        F100\n        E2\n        L180\n        N2\n        L90\n        E3\n        N5\n        W2\n        F19\n        W4\n        R180\n        F56\n        R90\n        W1\n        R90\n        E4\n        S2\n        R90\n        F10\n        E4\n        E2\n        F61\n        E1\n        S3\n        F33\n        N4\n        F95\n        S3\n        F84\n        L180\n        S1\n        L90\n        N1\n        E3\n        F40\n        L90\n        E3\n        S2\n        F56\n        L180\n        W5\n        S5\n        R90\n        E3\n        N1\n        F60\n        L90\n        F62"}R("a:\n",S(W().split(/\s*\n*\s/g))),R("b:"),R("everything took",(new Date).getTime()-L,"ms");
},{}]},{},["QCba"], null)
//# sourceMappingURL=index.js.map
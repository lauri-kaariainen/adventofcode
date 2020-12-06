"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.betweenOrEqual = exports.returnUniqueAmountsAsObj = exports.permutations = exports.reduceFlatten = exports.reduceMultiply = exports.reduceSum = exports.insert = exports.flatten = exports.combineMatrices = exports.uniqueDeep = exports.uniqueShallow = exports.trampoline = exports.arrayRotate = exports.insertValueAtMutating = exports.swapPositions = exports.num2hex = exports.hex2bin = exports.num2letter = exports.get8 = exports.find4 = void 0;
var find4 = function (x, y, matrix, wantedChar) {
    wantedChar = wantedChar || 1;
    var returnable = [];
    if (x > 0 && x < matrix[y].length - 1) {
        matrix[y][x - 1] === wantedChar
            ? returnable.push({ x: x - 1, y: y })
            : false;
        matrix[y][x + 1] === wantedChar
            ? returnable.push({ x: x + 1, y: y })
            : false;
    }
    else if (x === 0) {
        matrix[y][x + 1] === wantedChar
            ? returnable.push({ x: x + 1, y: y })
            : false;
    }
    else if (x === matrix[y].length - 1) {
        matrix[y][x - 1] === wantedChar
            ? returnable.push({ x: x - 1, y: y })
            : false;
    }
    if (y > 0 && y < matrix.length - 1) {
        matrix[y + 1][x] === wantedChar
            ? returnable.push({ x: x, y: y + 1 })
            : false;
        matrix[y - 1][x] === wantedChar
            ? returnable.push({ x: x, y: y - 1 })
            : false;
    }
    else if (y === 0) {
        matrix[y + 1][x] === wantedChar
            ? returnable.push({ x: x, y: y + 1 })
            : false;
    }
    else if (y === matrix.length - 1) {
        matrix[y - 1][x] === wantedChar
            ? returnable.push({ x: x, y: y - 1 })
            : false;
    }
    return returnable;
};
exports.find4 = find4;
var get8 = function (x, y, matrix) {
    var positions = [
        { y: y - 1, x: x - 1 },
        { y: y - 1, x: x },
        { y: y - 1, x: x + 1 },
        { y: y, x: x + 1 },
        { y: y + 1, x: x + 1 },
        { y: y + 1, x: x },
        { y: y + 1, x: x - 1 },
        { y: y, x: x - 1 },
    ];
    var returnable = [];
    positions.forEach(function (pos) {
        return matrix[pos.y] === undefined ? "" :
            matrix[pos.y][pos.x] === undefined ? "" :
                returnable
                    .push(matrix[pos.y][pos.x]);
    });
    return returnable;
};
exports.get8 = get8;
var num2letter = function (chr) { return String.fromCharCode(97 + chr); };
exports.num2letter = num2letter;
var hex2bin = function (hex, nulls) {
    var nullAmount = nulls || 4;
    return (__spreadArrays(Array(nullAmount)).map(function (e) { return "0"; }).join("") +
        parseInt(hex, 16).toString(2)).substr(-nullAmount);
};
exports.hex2bin = hex2bin;
var num2hex = function (num) { return num.toString(16); };
exports.num2hex = num2hex;
var swapPositions = function (arr, index1, index2) {
    var _a;
    return (
    //console.log(arr, index1, index2),
    (_a = [arr[index2], arr[index1]], arr[index1] = _a[0], arr[index2] = _a[1]), arr);
};
exports.swapPositions = swapPositions;
var insertValueAtMutating = function (arr, index, newValue) {
    arr
        .splice(index, 1, newValue);
    // .map(e => e.map ? e.map(i => i) : e) //clone
    return arr;
};
exports.insertValueAtMutating = insertValueAtMutating;
var arrayRotate = function (arr, reverse) { return (reverse ? arr.unshift(arr.pop()) : arr.push(arr.shift()), arr); };
exports.arrayRotate = arrayRotate;
var trampoline = function (fn) {
    while (typeof fn === "function") {
        fn = fn();
    }
    return fn;
};
exports.trampoline = trampoline;
var uniqueShallow = function (item, i, arr) { return !arr.slice(i + 1).includes(item); };
exports.uniqueShallow = uniqueShallow;
var uniqueDeep = function (item, i, arr) {
    return !arr
        .slice(i + 1)
        .some(function (other) { return JSON.stringify(other) === JSON.stringify(item); });
};
exports.uniqueDeep = uniqueDeep;
var combineMatrices = function (larger, smaller) {
    return larger
        //clone
        .map(function (e) { return e.map(function (i) { return i; }); })
        .map(function (largerLine, lineNum) {
        var startPoint = Math.floor((largerLine.length - smaller[0].length) / 2);
        if (lineNum >= startPoint && lineNum < larger.length - startPoint) {
            return largerLine.map(function (char, charNum) {
                if (charNum >= startPoint &&
                    charNum < largerLine.length - startPoint) {
                    return smaller[lineNum - startPoint][charNum - startPoint];
                }
                else {
                    return char;
                }
            });
        }
        else {
            return largerLine;
        }
    });
};
exports.combineMatrices = combineMatrices;
var flatten = function (arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
};
exports.flatten = flatten;
var insert = function (array, i) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return array.slice(0, i).concat(rest, array.slice(i));
};
exports.insert = insert;
var reduceSum = function (acc, next) {
    return acc + next;
};
exports.reduceSum = reduceSum;
var reduceMultiply = function (acc, next) {
    return acc * next;
};
exports.reduceMultiply = reduceMultiply;
var reduceFlatten = function (acc, next) {
    return acc.concat(next);
};
exports.reduceFlatten = reduceFlatten;
var permutations = function (xs) {
    var ret = [];
    for (var i = 0; i < xs.length; i = i + 1) {
        var rest = permutations(xs.slice(0, i).concat(xs.slice(i + 1)));
        if (!rest.length) {
            ret.push([xs[i]]);
        }
        else {
            for (var j = 0; j < rest.length; j = j + 1) {
                ret.push([xs[i]].concat(rest[j]));
            }
        }
    }
    return ret;
};
exports.permutations = permutations;
var returnUniqueAmountsAsObj = function (array) {
    return array.reduce(function (acc, val) {
        acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
        return acc;
    }, {});
};
exports.returnUniqueAmountsAsObj = returnUniqueAmountsAsObj;
var betweenOrEqual = function (number, min, max) {
    return number >= min && number <= max;
};
exports.betweenOrEqual = betweenOrEqual;
//# sourceMappingURL=helpmodule.js.map
// @ts-check
"use strict";
import { reduceMultiply, trampoline } from "../../helpmodule.js";




const getLowestTimeOverLimit = (time, limit, lastTried = 0) => {
    if ((time - lastTried) * lastTried > limit) {
        return lastTried;
    }
    return (
        () => getLowestTimeOverLimit(time, limit, lastTried + 1)
    )

};
const array = getInput()

/**
 * @type {number[]}
 */
const times = array
    .split("\n")[0]
    .trim()
    .split(/\s+/)
    .slice(1)
    .map(str => parseInt(str))

/**
* @type {number[]}
*/
const distances = array
    .split("\n")[1]
    .trim()
    .split(/\s+/)
    .slice(1)
    .map(str => parseInt(str))

const getWinningWayAmount = (time, distanceLimit) =>
    time + 1 - (trampoline(getLowestTimeOverLimit(time, distanceLimit))) * 2
//console.log(time + 1 - (getLowestTimeOverLimit(time, limit)) * 2)


console.log("A:",
    times
        .map(
            (time, i) =>
                getWinningWayAmount(time, distances[i]))
        .reduce(reduceMultiply)

)



console.log("B:",
    getWinningWayAmount(
        parseInt(times.join("")),
        parseInt(distances.join(""))
    ))


/**
 * @returns {string}
 */

function getTestInput() {
    return (
        `Time:      7  15   30
Distance:  9  40  200`);
}
/**
 * 
 * @returns {string}
 */
function getInput() {
    return (
        `Time:        48     87     69     81
Distance:   255   1288   1117   1623`);
}


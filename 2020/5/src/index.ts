// import { betweenOrEqual } from "../../../helpmodule.js";

type Seat = {
    row: number,
    column: number,
    seatId: number
}

const findSeat = (binary: string): Seat => {
    const row: number = parseInt(binary.slice(0, 7), 2);
    const column: number = parseInt(binary.slice(7), 2);

    return ({
        row: row,
        column: column,
        seatId: row * 8 + column
    })
}

const getHighestId = (seats: Seat[]): number =>
    Math.max(...seats.map((seat: Seat) => seat.seatId))

const getLowestId = (seats: Seat[]): number =>
    Math.min(...seats.map((seat: Seat) => seat.seatId))


const findOwnPlace = (seats: Seat[]): number =>
    Array.from(new Array(getHighestId(seats)))
        .map((_, i) => i < getLowestId(seats) ? 0 : i)
        .filter((e: number) => e !== 0)
        .filter((orderNum: number) => !seats.map(seat => seat.seatId).includes(orderNum))[0]


log("test a:",
    getHighestId(getTestInput().map(findSeat))

)

log("a:",
    getHighestId(getInput().map(findSeat))
)

log("b:",
    findOwnPlace(getInput().map(findSeat))
)

log("short version answers:")
const seatIds: number[] =
    getInput()
        // .replace(/[BR]/g, "1")
        // .replace(/[FL]/g, "0")
        // .split("\n")
        // .map(line => line.trim())
        .map(line => ({ row: parseInt(line.slice(0, 7), 2), column: parseInt(line.slice(7), 2) }))
        .map(obj => ({ ...obj, seatId: obj.row * 8 + obj.column }))
        .map(e => e.seatId) || []
//A:        
log(
    "A:", Math.max(...seatIds)
)

//B:
log(
    "B:",

    seatIds
        .sort((a, b) => a - b)
        .find((num, i, arr) => arr[i + 1] !== num + 1)! + 1 //typescript: exclamation mark denotes that this surely can't be undefined, otherwise input is wrong

)



function log(...args: any[]): void {
    if (typeof (console) !== 'undefined') {
        console.log(...args);
        document.querySelector('pre')!.innerHTML += "<br/>" + args.join(" ");
    }
}

function handleInputStr(str: string): string[] {
    return str.split(/\n/)
        .map(e => e.trim().split("").map(char => char === "B" || char === "R" ? 1 : 0).join(""))
}


function getTestInput(): string[] {
    return handleInputStr(`BFFFBBFRRR
    FFFBBBFRRR
    BBFFBBFRLL`)
}

function getInput(): string[] {
    return handleInputStr(
        `BFFFFFFRLL
        FFBFBBBRLL
        FBBFBFBRLR
        BBFBBBBLLL
        BBFBBBBLLR
        BBBFBBBLLR
        FFBBBFBRLR
        BBFBFBFLRL
        FBBFFBBLRL
        BBBFBBFRRL
        BBFBBFFRRL
        BFBBFBFLRL
        BBFFFBBRLL
        FBFFFBBLLR
        FBFBFBFLRR
        FBBFBFFRLL
        FFBBFFFRRR
        BFBFBFBRLL
        FBBFFBBRLL
        BBBFFBBRLL
        BFBFFFFLLR
        FBBBBFBRRR
        BBFBBFFLRR
        BFFBFBFRRR
        FBFBBBBRLR
        BFBFBFFRLL
        BFFFFFBRLL
        FBBBFBFLLR
        BFFBFBBRRR
        BFFBBFBLLR
        FBBBFFBLLL
        BFFFBFBLRR
        FFFFBFFLRR
        BBFFFBFLLR
        FBFBFFFLLR
        FBFFFFFLLL
        FFFFFFBRLL
        BFFBFBBLRR
        BFBFFBBLRR
        BFFBFFBRLR
        FFBFBBBLLR
        FBFFFBFRRR
        BFBFBFFRLR
        BBBBFFBRRR
        FBBFBBBLLL
        FBBBBFBLRR
        BFBBFFFRRL
        FBBBBBBLRL
        FBBFFFFLLL
        FFBBBFFLLR
        FBBBBBBRRR
        BBBBFFBRLR
        BBBFBFBLRL
        FFBFFBFLLL
        FBBBBBFLLL
        FFBBBBBRLR
        FBBFFFFLRL
        BBFBBFBLLR
        FFFBBFFRLR
        FFFBBBFLLL
        BFFFFFFLRL
        BFFFBFFLRL
        FBBFFFFRLR
        FBFFFBBLLL
        FFFFFBFRLR
        BBBBFBFLLL
        FBFBFFBLLR
        FFBFBFBRLR
        FBBBFBBLLR
        FFBBBBFRLR
        FBBBFBBRLL
        FFFBFBFLLL
        FFFFFBFRRL
        FFFBFFBLRR
        BFBFBBFRLL
        BFBFFFBLLL
        FFFBFBFRLL
        FBFBBBFRLL
        FFFBFBFLLR
        BFBBFBFRRL
        BBFFBFFRLR
        FFFBBFFRLL
        BBBBFFFLRL
        BFFBFBBLLL
        BBFFFFFLRL
        BBFFBBBRLL
        FFBFFFFLRR
        FFBBFFFRLR
        BBFFBBBRLR
        FBFBFFBRRL
        FFFFBBBLRL
        BBFBFFFRRL
        BFBBBFBRRL
        FFBFBFBLRR
        BBBFBFFRLR
        BFBBBBBRRL
        FBFFFFFLRR
        BFFFFFBLRR
        FFBBBFBLLL
        FBBBFFFLRL
        BBFFBBFRRL
        FBFFFFBRRR
        BFBFBBBRRL
        BBFFBBBLRL
        FBBFBFBRLL
        FBFBBBFLLL
        FFFFBBBLRR
        FBBFBBFLLR
        FBFFBBFLRL
        FFBBFBFRRR
        BFFBBBFLRL
        FFFBBBFRRL
        FFBBBFFLRL
        BFBBFFBRLL
        BFFBFFFLLL
        FBFFFFBLRR
        BFBFFBFLRL
        FBBFFBFLLR
        FBBFBBBRRL
        BBFBFFFLLL
        FBBBBFFLRR
        FBBBFBBRRR
        FFFBFFFLLR
        BBFFBBFLRL
        FFFFBFFRLL
        BFBBBFFRRR
        BFFFFBFRRL
        BBFFBBBLLR
        BFBBBBFRRR
        BFBBBFFLLL
        BBFBFFFLRL
        BBBFFFBRRL
        BBBBFFBRLL
        FBFFFFFLRL
        BFFFBBFLLR
        FFFFBBFRRL
        BBFFBFBLLR
        BFFBBFFRRL
        BBBFFBBLLL
        BFFBFBFLLL
        BFBFBFBRRL
        BBFFFFBRRL
        FBBBFBFRRR
        FFBFBBFRLR
        FFFBBBBLRR
        FFBBFBBRRL
        BBFBBFBRLL
        FFBBBBBRLL
        BFBBBBFLRR
        FBFBBFBLLL
        FBBFFFFRLL
        BFFBFFFLRL
        BBBFBBFLLL
        BFBFBBBRRR
        FBFBBFFLRL
        FBBBFFFLLR
        FBBBFFBLLR
        BBFFBBFRLL
        FBBFFBFLRL
        BFFBBBFRRR
        BFBBBBBRLL
        FFBBBBFRLL
        BBBFFFFLLL
        BBFBFFBRRR
        FBBBBFFLLL
        BBBFFFFRRR
        FBBFBFBLLL
        BBBFBBFLRR
        FFBFFBBRLL
        FFBBFBFLLL
        FBFFFFFRLL
        FBFBFFBLRR
        BBFFBBBRRL
        BFFBBBFRRL
        FFBBBFBRLL
        FBBBBFBRRL
        BBFBBBBRLR
        BFFBFFBRRL
        BBFBFBBRRL
        FFFBFBFRLR
        FFBBFBFRLR
        FFFBBFBRLL
        BFFFFBBRLL
        FBFBBFBLLR
        FBFFBBFLLL
        BBFBFBBRLR
        BBFBFBBLLL
        FBBBFBBRRL
        BFFFBBBRLR
        BBFFBBBRRR
        BFFBFFBLRL
        BBFBFFBLLR
        FFFFFFBRRL
        BFBFBFFLLR
        BBBBFFBLLL
        FBBBFBFRRL
        FBBFFBFLLL
        FFBFBFFRLL
        BFBBFFFLLL
        FBFFFBBLRL
        FFFBFFBLRL
        BFFFBBBLRR
        BBBFFBFRRL
        FBBBFFFRLR
        FFBBFFBRRR
        FBBBBBBLLL
        BFFBBFFLLR
        FFFFFBBLLR
        FBBFBFBRRR
        BBBFBFFLLL
        FFFFBBFRRR
        FBFFFFBRLL
        FFBBFFFLRR
        FFFFFBBLRL
        BBBBFFFLLL
        FFFFBFBLLR
        BBBBFFFRRR
        FBBFBBFRRR
        BFFBFFFRLR
        FBFFBBFLRR
        BFBBFBBRLR
        BFFBBBFLLL
        BFBFBBBLLL
        BBFBBBFRRL
        FBBFBBFRRL
        FFFBFFFLRL
        FBFFBFBLRR
        FFBFFFFRLL
        FFFFBBFLRR
        BFBFFBFLRR
        FBBFBBBRLR
        BFBBBFFLRL
        BBFBFBFRLR
        FFFFFBBRRL
        BBFFBFFLRR
        FBBBFFBRLR
        BBBFFBBRRL
        FFFFFBBRLR
        FFFBBFFRRL
        FFBFFFFRLR
        BFFBFBBLLR
        BFBFBFFLLL
        FFBFBBBLRL
        BBFBBBBLRR
        BFFFFFBRLR
        BBFBFBBLLR
        FBBBBFBRLL
        BBFFBFBLRR
        BBFBFBBRRR
        BBBFBBBLLL
        FBFBBBBRLL
        BFFBFBBRLL
        BFBBBBBRLR
        BBFFFFBRLL
        FBFBBBBRRR
        FBBFFFBRRL
        BFFBBFFLLL
        BBFBBFBLRL
        FBBFBBBLRR
        FBBFBBFLLL
        FFFFBBFLRL
        BFFFBBBRLL
        FFFBBBFLRL
        BFFFBBFRLR
        FFFFBBBLLR
        FFFFBFFRLR
        FFFFBBBRRR
        BFBFBFBRRR
        BBFFBBFRRR
        FBBFBFFLLR
        BFBBBFBRLL
        BFBFFFFRLR
        BFBFFFBLLR
        BFBBBFBRRR
        BFFBBBFRLL
        FBFFBBFRLR
        FBFBBFFLLL
        FBFBFFFRLR
        FFFBFBBLRR
        FFBBBFFRRL
        BBFBFFBLRL
        FBBBBBFRLR
        BBBFBFBLLR
        FFFBBFFLRL
        BFFBBFFLRR
        BBFBFFFLRR
        FFBFFFBRRR
        BFFBBFBLRL
        FFBBFFBRLL
        BFBFFBFRLL
        FFBFBFFRLR
        FBFFFBFRLR
        BFBBFBFRLL
        BFFBFBFRRL
        FFBBFFBRRL
        FBFFFFBLLL
        BFFFBBBLLL
        FBBFBFFRRL
        BFBFBBBRLL
        FFFBFFFLLL
        BFFFBFFRRL
        FBBBBBFRLL
        FFBFBBFRRR
        FBFBFFFLLL
        FFFBFBBRRR
        BFBBFFFLRR
        FFFFFBFLRR
        FBFBFFBRLR
        FBFFBBFLLR
        BBBFFFBLLR
        FBFFFBBRLL
        BFFBFBBLRL
        FFFFFFBRRR
        FFBFBFBRLL
        BBFBBFFLLR
        BBBFFFFRLR
        BFBFBFBLRL
        FBFFBFBRLR
        FBBFFFBRRR
        BBFFFFFLRR
        BFBFBFBLRR
        BFBBBBBLLR
        FFBFFBFRRR
        FFFFBBBRLL
        FBBBBBFLRR
        FFBBFBFRLL
        FBFBBFFLRR
        FFBFBBBLLL
        FBFFBFFRRL
        BBBFFBBLRR
        BFFFFFFRRL
        FBFFBFFRLL
        FBBBBFBRLR
        FBBBFBFLRL
        FBBBFFBLRL
        FFBBFBBLLR
        BBFFFBBRLR
        BBBBFFBLLR
        BFFFFBFLRR
        BBFFBFFRLL
        FFBFBFFRRR
        BFFFFFFRLR
        FFFFBFFLRL
        BFBBFFFRLR
        BBFFBFFLLL
        FFFFFBFRRR
        FFFBFBBLRL
        BFFBBBBRRL
        FBFBBFFLLR
        FFFBBFFLLL
        FFFFBFBLRL
        BBFBFBBLRR
        BBFFBFFLRL
        BBBFFFBLRL
        BFFBFBFRLL
        FFFBFFFLRR
        FBFFFBBRLR
        BFFFBBFRRR
        FBBBBBFLRL
        BFFFBBBLLR
        BFFFBBFLRL
        BFFFFBFLLR
        FBFFFBBLRR
        FBBFFFBRLR
        BBFFBFBLRL
        BBFBFBFLLR
        FBBBFBFRLR
        FBFFFBFRRL
        BFFFBFFLRR
        FFFFBFBLRR
        FBFFBFFLLL
        FFBFFBBRLR
        BBFBBBFLLL
        FBFFBFBRRL
        BFFBFFBRLL
        BFBFFFFLRR
        FFBFBBBRLR
        BFFBFBBRRL
        FBFBBBBLRR
        BFFFFFBLLL
        FBFFBFBRRR
        FBFBBFFRLR
        BFBFBBFLLL
        BFBBBFFRRL
        FFBBBFBLLR
        FBBFFFBLRL
        BFFFFFFLLR
        FBFFFFBLRL
        FFBBFFFLRL
        FFBBBFBLRL
        BFFFBFBLLR
        BFFBBBFLRR
        FBFFFBBRRR
        FFBFFFBRLL
        FBFBFBBLLR
        BFBBBBFRLL
        FBBBBFFRLL
        BFBFFBFRRL
        FBBBBFFRLR
        FFBFFFFRRR
        BFFFBBFLRR
        BBFBFBFRLL
        BFFBFFBRRR
        FFFFFBFLLL
        BFBFFFBRRL
        BFFBBFBRRL
        BFBBFFBRRL
        FFFBBBBRLR
        FFFBBBBLRL
        BFBBBFFLLR
        BFBFFFFRRR
        BBBFBFFRRR
        FFFBFFFRRR
        FFFBFBBLLR
        BBBFBFFRRL
        BBFFBFFLLR
        FFFBBFFLLR
        FFFBFBBLLL
        FBFBFBFLRL
        FFFFFBBLLL
        FBBBBBBRLR
        FFBBFBFLRL
        BFFFFBBRLR
        BFFFBFBLLL
        BBFBBBFRRR
        FBBBFFBRRL
        FFBFFBFLRL
        FFBFFFFLRL
        BBFFFFBLLL
        BFBBFBBRLL
        FFFFBFFRRR
        BFFBFBBRLR
        BFFBFBFLRR
        BFFBBFBRLL
        FBBBFBBLRR
        FBFBFFFRLL
        BFBFFFBRLL
        FBBBBBFRRL
        FBFBFBBRLL
        FBBFFBBRRR
        BFFFBBFRRL
        BBFFFFFRRR
        BFFBFBFLRL
        BBBFFBBLRL
        FFBFBBFLRR
        BBFFFBFRLR
        FBFBBBFRRR
        BBFBBBBRLL
        FBFFBFFRLR
        BFBBBFFRLR
        FBFFBBBLRR
        BFBFFBFRRR
        FFBFFBFRRL
        FFBBBBBLLL
        BBFBBBFRLL
        BFBBFBBLLL
        BFBBBFBLRL
        FBBBFBFLLL
        FBBFBFFLRL
        FBFBFBFLLL
        BBFFBBFRLR
        FBFBBBFLRL
        BBFBBFBLRR
        FFFFBFFLLL
        FFFBBBBRRL
        BBBFBBBRLL
        BBFFFFFLLR
        FBBFFBBRLR
        FBBFBBFRLR
        BFFFBFBLRL
        BFFFFBBRRR
        FBFFFFFLLR
        FBBFBBFLRL
        BBFFFBFRRR
        BBBFFBFLLR
        BFFBBFBRLR
        BBFBFFFRLL
        FFFBBFBLRR
        BBBFBFFLLR
        FBFFBFBLRL
        FBBFBFFLRR
        FBBBFFFLRR
        FBBFBBBRRR
        BBFFFBFRLL
        FFBFBBFLRL
        FBBFFFBLLR
        BFFFFBFRRR
        BBFBBFFRLL
        FFBFBBBLRR
        BFBFFFBLRL
        FBBFFBFRRL
        FFFFBBBRRL
        FFFBBFBRRR
        FFFBBBFRLL
        BBFFBBFLLR
        FFBFBFFRRL
        BFBFFFBRLR
        FFBBBFFRLL
        FFFFBBFLLL
        BFFFFFBLLR
        FBBFFFFRRR
        FFFFFFBLRL
        BBFBFFFLLR
        BBBFBFFLRL
        BBBFFFFRLL
        BBFFFFBRLR
        FBFBBFFRRL
        FFFFFBFLLR
        BFFFBFBRLR
        BFFFFFFRRR
        FBFBFBBRLR
        BBBBFFFRLR
        FBBFBFBLRL
        BBFFBFFRRR
        BFFBBBBRLR
        BBBBFFBLRR
        BFBBFBBRRL
        BFFFFBBLLL
        BFFFBFBRLL
        FBBFFFFLLR
        BFBBFFFRLL
        BBFBBBFRLR
        FBFBFBFRRR
        BFBFBFFLRR
        BBFBBBBRRL
        BFFFBFFRLR
        BBBFBFBLLL
        FBFBFFFRRL
        FBBBFFFRLL
        FBFBBFBRRR
        FBFFFFFRRR
        FBBBBBBRRL
        BBBBFFFLLR
        BFFFBFFLLR
        BFBBFBBLRL
        BBBFFFBRLR
        FFFBBFBLRL
        BFBFBFFRRR
        BBFFFBBLLR
        FBFBBFFRLL
        FFFBBBFRLR
        BFFFFBFRLL
        FFBBFBBRLL
        FFFBFFBRRL
        BBBBFFFRLL
        FBFFBBBRLL
        FFBFBFFLLL
        BBBFBBFLRL
        FBFBBFBLRL
        FFBFBFFLRR
        FFFBFFBLLR
        FBBFBFFRRR
        FFBFBFBLLR
        FFFFFFBLLR
        BBBFFFFLRR
        BBFBBFFRLR
        FFFFBBBLLL
        FBBFFFBLRR
        BFFFFBFLLL
        BFBBBFBLRR
        FBFFFBFLLR
        FBFBBFBRRL
        BFBFBBFRRR
        FBFBFFFLRR
        FFBFFBFLLR
        FBFBFBFRRL
        FFFBBBFLRR
        FFFBBBBLLR
        BBBFBBFRRR
        BFFBBBBLRR
        BBBFFBFLRR
        FFBBBFFRRR
        FBFFBFFRRR
        BFFFFBBLRR
        BFFBFFFRLL
        BFFBFFBLRR
        FBBBFBBRLR
        BFBFFBBRLR
        FBFFBBFRRR
        FFBBBFFRLR
        BBFFFFFRRL
        BFFBBBBLRL
        FBBFFFFLRR
        FFBFBBFLLL
        BFFFBBBRRR
        BBFFFFBLRR
        FFFFBFBLLL
        FBFFBFFLRR
        BFBFBFFLRL
        BBFFFFFRLR
        BBBFFBBRLR
        BBFFBFBRRR
        FBFFBBBLLR
        BBFBFBFRRR
        BFBBFBFRRR
        BFFFBBBLRL
        BFBBFBBLRR
        BBBFBBBRRR
        FFFBBFBRRL
        FFBFFFBRRL
        FFBFBFBLRL
        BFFFFFBRRR
        BFBFBBBLLR
        BFFFBFFRRR
        FBFBFFFLRL
        BFBBBBBRRR
        FFFBFBFLRL
        FFFFBFFRRL
        FBFBFBBLLL
        FFFFBBBRLR
        FBBFBBBLRL
        BFBBFBBRRR
        FFFBFBFLRR
        BBBBFFBRRL
        FFBBFBFLLR
        FFFBFBBRLR
        BBFFFBFLRL
        FFBBBFBRRL
        FFBFBBBRRR
        BFBBBBFLLR
        BBFBBBFLRL
        BFBBFBBLLR
        BBFFFBBLRR
        FFBBFFBLRL
        BBBFFFFRRL
        BFFFBFFRLL
        BBBBFFFLRR
        FFBBBBFLRR
        FBBFFBFLRR
        BBBFFFFLLR
        BFFBFFFRRL
        FBFBFBBLRL
        BFBFFBFLLR
        BFFBFBFLLR
        BFBFFFBRRR
        FFBBFFFRRL
        BBFBBFBLLL
        FBBBFBFRLL
        BBFBBBFLRR
        BBBFFFBLRR
        BBFFFFBLLR
        FBBFBFFRLR
        FBFBFFBLLL
        BFFBBBFRLR
        BFFFFBBRRL
        BBBFFBFLLL
        FFFBFBFRRR
        FBFFBFFLRL
        FFBBBBBLLR
        BFFBBFBRRR
        FBBBBFBLRL
        BFBFBBBRLR
        BBFBBFFLLL
        BFFFFFBLRL
        FBBFBFBRRL
        FBBBFFFLLL
        BFFFBFBRRR
        FFBFBFFLRL
        FFBFBFBRRL
        FFBBBBBRRR
        FFFFBFBRLR
        BFBBFFBLLL
        BFFBBBFLLR
        FBBBFFBRLL
        FBFFBBBLRL
        BFFBBBBRRR
        FFBFFBBRRL
        BFBFFBBRLL
        FFFFFBFLRL
        FFBBBBFRRR
        FFBFFFFLLR
        BBBFBBBRRL
        FFFFFBBRLL
        FBFBBBBRRL
        FBBBFBFLRR
        FFFBBFFLRR
        FBFFFBFLRL
        FFBFFBFRLL
        FFFBFFFRRL
        FFFFBFBRLL
        BBFBFBBRLL
        FFBBBBFLLR
        FBFFFBBRRL
        BFBBBBBLLL
        BFBFFBBLLL
        FFFFBFBRRL
        FFBBFFBLRR
        BFBBFFFRRR
        FFBFFBFRLR
        BBFBBBBLRL
        FBBFBBBLLR
        BFFFBBFLLL
        FFFFBFFLLR
        BFFFFBFRLR
        FBBFBFBLRR
        BBBFFFFLRL
        BBFFFBBLRL
        BBFBFFBRLL
        FBBBBFBLLR
        FBFFBBFRLL
        BBFFBFBLLL
        FBBFFFBRLL
        BBBFBFBRRL
        FBFBBFBRLR
        BFBBBBFLLL
        FBFBFBFRLL
        FBFBBBFLLR
        BBFBFBFLLL
        BBFFFBFLLL
        BBBFFFBLLL
        BFBBBFBLLL
        FFBBBFFLLL
        FFBFFFFRRL
        FBBBBBFLLR
        FBBFFBBLRR
        BBFFFFFRLL
        FFFFFBBLRR
        BFBBFFBLRL
        BFFFFFBRRL
        BFBBFFFLLR
        FFFBFBBRRL
        FFBFFBBLRL
        BFFFFBBLRL
        FBFBBBBLRL
        FBBBFFBRRR
        FFBBFBBRLR
        BFBBFFBLRR
        FBBBFFBLRR
        FBFBFFBRLL
        FBFBFBFLLR
        BBFFFBBRRL
        BBBFBFBRLL
        BBFBBFFRRR
        BFBBFFFLRL
        BFBFBFFRRL
        BBFBBFFLRL
        BBFBFBFLRR
        BBFBFFFRRR
        BBBFFBFRLR
        BFFBBFFLRL
        FBBBBBBRLL
        BBFFFBBLLL
        FFFBBBBLLL
        BBFFFFBLRL
        FFBBFFBRLR
        BFBBBBBLRR
        BBFBBFBRRR
        FFFFFFBRLR
        FFFFBBFRLL
        FFFFBBFRLR
        FBFBBFFRRR
        FFFFBFBRRR
        FBFBFBBRRR
        FFFFFBBRRR
        BFBBBBBLRL
        BBBFBBFLLR
        BFBFFBBRRL
        BBBFFFBRLL
        BBFBBBBRRR
        FBFBBBFRRL
        BFBBFBFLLL
        FFFBBFBLLL
        BBFFBFBRRL
        FFBFFBBLLR
        FFBFBBFLLR
        BBBFBBFRLL
        FBBFFFFRRL
        FBBFFBFRRR
        BFFBFFBLLL
        FBFBFFBLRL
        BBBFBBFRLR
        FFBFBBBRRL
        FFBBBBFLLL
        FBFBBBFLRR
        FFBBFBFLRR
        FBFFBBFRRL
        FFBBFFFLLR
        FBFBFBBLRR
        BBBFBBBRLR
        BFFBFFFLLR
        BFFFBFBRRL
        FFBBBFBRRR
        BFFBFFFRRR
        BBBFBFFLRR
        FFFFFFBLRR
        BFBFBBFRRL
        FBFBBFBRLL
        FBBBBFFLLR
        BFBBBBFLRL
        FBBBBFBLLL
        FFBBFFBLLR
        BBBFFBBRRR
        BFBFFFFRRL
        FFBFFBBRRR
        BFFBBFFRRR
        FBFFBFFLLR
        BBFFFFFLLL
        BBBBFFBLRL
        BFBBBBFRRL
        FBBFBFFLLL
        FFFFFBFRLL
        FBBBBBFRRR
        BBBFBFFRLL
        BFBBBFFRLL
        FFBBBFFLRR
        BBFFFBFLRR
        BBFFFBFRRL
        BBFBFFBRLR
        FFBFFFBLRR
        FBFBFBBRRL
        FFFBBFFRRR
        FBBBBBBLLR
        FBBFFBBLLL
        FBBBBFFRRL
        BFBFFFFLRL
        BFBBBFBLLR
        FFFBFFBRLL
        FBFBBFBLRR
        FFBBFBBLRR
        BBBFBBBLRR
        BBFBBBFLLR
        BFBFBBBLRR
        BFBFBBFLRL
        FFFBBBBRRR
        BFBFFBBRRR
        FBBBBFFRRR
        FFFBBFBRLR
        FBFFFBFRLL
        BFBFFBBLRL
        FFBFBBFRRL
        BFFFFFFLLL
        BFBFFFFLLL
        BBFFBFFRRL
        BFFBBFFRLR
        FFFBFFBLLL
        BBFBFFBLLL
        FBFFBBBRLR
        FBBBBFFLRL
        FBFFBBBRRR
        BFFBBFBLLL
        BFBFBFBLLR
        FBFFFFBRLR
        BBFFFBBRRR
        BFBBFFBLLR
        FFFBFBBRLL
        BBFFFFBRRR
        BFFBBFBLRR
        FBFBFBFRLR
        FBFFFBFLRR
        FFBBBBBRRL
        FBFFBBBRRL
        BBBFFFBRRR
        FBFFFFBLLR
        BBFBFBFRRL
        BBFBFFFRLR
        BFFFFBFLRL
        BBBBFFFRRL
        FBBFBBFRLL
        BFBFBFBLLL
        FBBBBBBLRR
        FFBBBBBLRR
        BFFBBFFRLL
        FFFFBBFLLR
        FFBBFFBLLL
        FFBFBBFRLL
        BBBFBFBRRR
        BFBBFBFRLR
        FFBBFFFRLL
        FBFFFBFLLL
        FFBFFBBLRR
        BFBFBBFLRR
        FBBFFBFRLR
        BBBFBFBLRR
        BBFFBBBLLL
        FFFBBBFRRR
        BFFBBBBLLL
        FFFBBFBLLR
        BFBBBBFRLR
        FBFFBFBRLL
        FFBFFBFLRR
        FFFBFFBRLR
        BFBFFBFRLR
        BFBBBFFLRR
        BFBBFBFLLR
        BBFBBFBRRL
        FBFBFFBRRR
        BFBBFFBRRR
        BBFBFFBLRR
        FBFFFFBRRL
        FFFBBBBRLL
        FFBBFFFLLL
        BFBFBBFLLR
        FBBBFBBLLL
        BBFFBBFLRR
        FBFFFFFRRL
        BFBFFBBLLR
        FBBFFBBLLR
        BBBFBFBRLR
        BFFFFFFLRR
        BBFFBFBRLR
        FBBFFBBRRL
        BFFFFBBLLR
        BBFBBFBRLR
        FFBBBBFRRL
        BFFBBBBLLR
        FFBBFBBLRL
        BFBFFFFRLL
        BFFFBBFRLL
        BFBFBBFRLR
        BBFFBBFLLL
        FFBBBFBLRR
        FBFFBBBLLL
        FFBFFFBLLL
        FBBFFFBLLL
        FFBBBBBLRL
        FBBFFBFRLL
        FFFBBBFLLR
        BBBFBBBLRL
        BFFBFFBLLR
        BFBFBBBLRL
        FFBFFFBRLR
        BBBFFBFRRR
        BFFBFBFRLR
        FFBBBBFLRL
        FBBFBBFLRR
        FBBBFFFRRR
        FBFBFFFRRR
        FFFBFFFRLR
        BFBBFBFLRR
        FFBFFBBLLL
        FFBFFFFLLL
        FBFFBFBLLL
        BFBFFFBLRR
        FBFFFFFRLR
        BBFBFBBLRL
        FFBFBFBRRR
        FFBFFFBLRL
        FFBBFBBRRR
        BBFFBFBRLL
        FFFBFBFRRL
        FFBFFFBLLR
        FFFBFFFRLL
        FFBFBFBLLL
        FFFBFFBRRR
        BBBFFBFRLL
        FFBFBFFLLR
        BBBFFBFLRL
        FBFBBBBLLR
        FBBFBFBLLR
        FFBBFBBLLL
        BFFBFFFLRR
        BBFFBBBLRR
        FBBFBBBRLL
        FBFBBBFRLR
        BFFFBBBRRL
        BFBBFFBRLR
        FBBBFFFRRL
        BFBFFBFLLL
        FBBBFBBLRL
        FBFBBBBLLL
        FBFFBFBLLR
        FFBBFBFRRL
        BFFBBBBRLL
        BBBFFBBLLR
        BBFBFFBRRL
        FFFFFFBLLL
        BFBBBFBRLR
        BFFFBFFLLL`
    );
}
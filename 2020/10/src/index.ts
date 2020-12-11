import { trampoline } from "../../../helpmodule.js";

const getAdaptersSortedArr = (input: string): number[] =>
    input
        .split(/\n/)
        .map((e: string) => parseInt(e.trim()))
        .sort((a: number, b: number) => a - b)
        .reduce((newArr: number[], next: number, i, arr) =>
            i !== arr.length - 1 ?
                newArr.concat(next) :
                newArr.concat(next).concat(next + 3)
            , [])


const getDifferencesFromSortedArr = (sortedAdapters: number[]) =>
    sortedAdapters
        .reduce((listOfDifferences: number[], next: number, i: number, arr: number[]): number[] =>
            i === 0 ?
                listOfDifferences.concat(next) :
                listOfDifferences.concat(next - arr[i - 1])
            , [])

const adapterDifferences: number[] =
    getDifferencesFromSortedArr(
        getAdaptersSortedArr(
            getInput()))

log("a:",
    adapterDifferences.filter((num: number) => num === 3).length
    * adapterDifferences.filter((num: number) => num === 1).length

)

log("b:",

)


function log(...args: any[]): void {
    if (typeof (console) !== 'undefined') {
        console.log(...args);
        document.querySelector('pre')!.innerHTML += "<br/>" + args.join(" ");
    }
}


function getTestInput(): string {
    return (`16
    10
    15
    5
    1
    11
    7
    19
    6
    12
    4`)
}

function getInput(): string {
    return (
        `151
        94
        14
        118
        25
        143
        33
        23
        80
        95
        87
        44
        150
        39
        148
        51
        138
        121
        70
        69
        90
        155
        144
        40
        77
        8
        97
        45
        152
        58
        65
        63
        128
        101
        31
        112
        140
        86
        30
        55
        104
        135
        115
        16
        26
        60
        96
        85
        84
        48
        4
        131
        54
        52
        139
        76
        91
        46
        15
        17
        37
        156
        134
        98
        83
        111
        72
        34
        7
        108
        149
        116
        32
        110
        47
        157
        75
        13
        10
        145
        1
        127
        41
        53
        2
        3
        117
        71
        109
        105
        64
        27
        38
        59
        24
        20
        124
        9
        66`
    );
}

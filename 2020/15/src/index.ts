import { trampoline } from "../../../helpmodule.js";

const startTime = new Date().getTime()


// type SpokenNumber =
//     {
//         number: number,
//         spokeTurn: number
//     }

// const checkWhenLastSpoken = (number: number, list: SpokenNumber[]): SpokenNumber[] =>
//     list
//         .filter((spkn: SpokenNumber) => spkn.number === number)
//         .slice(-1)
const getLastIndexBeforeLatest = (list: number[]) =>
    list.slice(0, -1).lastIndexOf(list.slice(-1)[0])

const recursivelyGetNextNumber = (
    // numberList: number[],
    nextNumber: number,
    targetTurn: number = 10,
    resultObj: any = {},
    step: number = Object.keys(resultObj).length + 1
): Function | number =>
    step >= targetTurn ?
        nextNumber :
        // (console.log("step:", step, "next:", nextNumber, "obj:", JSON.stringify(resultObj)),
        () => recursivelyGetNextNumber(
            resultObj[nextNumber.toString()] ? step - resultObj[nextNumber.toString()] : 0,
            targetTurn,
            { ...resultObj, [nextNumber]: step },
            step + 1
        )
// )
// numberList :
// (
//     step % 10000 === 0 ? console.log(numberList.length, step) : true,
//     () => recursivelyGetNextNumber(
//         numberList
//             .concat(getLastIndexBeforeLatest(numberList) === -1 ? 0 :
//                 step - (getLastIndexBeforeLatest(numberList) + 1)
//             ),
//         targetTurn,
//         step + 1
//     ))


// const inputUsed = getTestInput()

log("a:\n",
    trampoline(
        recursivelyGetNextNumber(
            0,
            2020,
            // { 0: 1, 3: 2, 6: 3 }
            { 2: 1, 0: 2, 1: 3, 9: 4, 5: 5, 19: 6 }


            // inputUsed
            //     .split(",")
            //     .map((num: string) => parseInt(num))

            // , 10)
        )

    )
)


log("b:",
    // trampoline(recursivelyGetNextNumber(
    //     inputUsed
    //         .split(",")
    //         .map((num: string) => parseInt(num))
    //     // .map((num: number, i): SpokenNumber => ({
    //     //     number: num,
    //     //     spokeTurn: i
    //     // }))
    //     , 30000000)

)




log(
    "everything took",
    new Date().getTime() - startTime,
    "ms"
)

function log(...args: any[]): void {
    if (typeof (console) !== 'undefined') {
        console.log(...args);
        document.querySelector('pre')!.innerHTML += "<br/>" + args.join(" ");
    }
}


function getTestInput(): string {
    return (`0,3,6`)
}



function getInput(): string {
    return (
        `2,0,1,9,5,19`
    );
}

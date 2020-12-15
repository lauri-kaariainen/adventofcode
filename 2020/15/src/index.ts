import { trampoline } from "../../../helpmodule.js";

const startTime = new Date().getTime()

const recursivelyGetNextNumber = (
    nextNumber: number,
    targetTurn: number = 10,
    resultObj: any = {},
    step: number = Object.keys(resultObj).length + 1
): Function | number =>
    step >= targetTurn ?
        nextNumber :
        ((step % 1000000 === 0 ? console.log("step:", step, "next:", nextNumber, "obj-len:", Object.keys(resultObj).length) : true),
            () => recursivelyGetNextNumber(
                resultObj[nextNumber.toString()] ? step - resultObj[nextNumber.toString()] : 0,
                targetTurn,
                // { ...resultObj, [nextNumber]: step }, 
                //cheap out on creating a new object... save 99% on runtime
                (resultObj[nextNumber.toString()] = step, resultObj),
                step + 1
            )
        )

log("a:\n",
    trampoline(
        recursivelyGetNextNumber(
            0,
            2020,
            // { 0: 1, 3: 2, 6: 3 }
            { 2: 1, 0: 2, 1: 3, 9: 4, 5: 5, 19: 6 }
        )

    )
)


log("b:",
    trampoline(
        recursivelyGetNextNumber(
            0,
            30000000,
            { 2: 1, 0: 2, 1: 3, 9: 4, 5: 5, 19: 6 }))
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

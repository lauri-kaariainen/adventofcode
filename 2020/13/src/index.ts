import { trampoline } from "../../../helpmodule.js";

const startTime = new Date().getTime()

// const checkIfNumIsCorrect = (
//     leaveTime: number,
//     item: { id: number, position: number }): boolean =>
//     leaveTime + item.position %


const recursivelyFindCorrectTimeB = (
    inputObjs: { id: number, position: number }[],
    multiplicator: number = 1,
    step: number = 0
): Function | number =>
    inputObjs.find((obj: any) =>
        (inputObjs[0].id * multiplicator + obj.position) % obj.id !== 0) ?
        //note extra function, for the trampoline
        () => recursivelyFindCorrectTimeB(inputObjs, multiplicator + 1, step + 1) :
        multiplicator

const inputUsed = getTestInput3()

const departTime = parseInt(inputUsed.split("\n")[0])

log("a:\n",
    inputUsed
        .split("\n")[1]
        .split(",")
        .map(e => parseInt(e))
        .map((id: number) => ({ id: id, closest: Math.ceil(departTime / id) * id - departTime }))
        .filter((obj: { id: number, closest: number }) => !isNaN(obj.id))
        .sort((a: any, b: any) => a.closest - b.closest)
        .map((item): number => item.id * item.closest)[0]


)

const firstDepartureId = parseInt(inputUsed.split("\n")[1])

log("b:",
    trampoline(
        recursivelyFindCorrectTimeB(

            inputUsed
                .split("\n")[1]
                .split(",")
                .map(e => parseInt(e))
                .map((id: number, i: number) => ({ id: id, position: i }))
                .filter((obj: any) => !isNaN(obj.id))
        )
    ) * firstDepartureId
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
    return (`939
    7,13,x,x,59,x,31,19`)
}

function getTestInput2(): string {
    return (`939
    67,7,59,61`)
}
function getTestInput3(): string {
    return (`939
    1789,37,47,1889`)
}



function getInput(): string {
    return (
        `1002461
        29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,521,x,x,x,x,x,x,x,23,x,x,x,x,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,x,x,601,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,19`
    );
}

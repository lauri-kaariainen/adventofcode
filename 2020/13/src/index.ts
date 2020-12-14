import { trampoline } from "../../../helpmodule.js";

const startTime = new Date().getTime()


const calculateTimeToCorrectRemainder = (
    minutes: number,
    offset: number,
    divisioner: number): number => {
    while ((minutes + offset) % divisioner > 0)
        minutes += divisioner
    return minutes
}


const recursivelyFindCorrectTimeB = (
    inputObjs: { id: number, position: number }[],
    // multiplicator: number = 1,
    minutes: number = 0,
    step: number = 0
): Function | number => {
    // console.log(multiplicator)
    if (!inputObjs.length)
        return minutes
    console.log(minutes)
    return (
        //note extra function, for the trampoline
        () => recursivelyFindCorrectTimeB(
            inputObjs.slice(1),
            calculateTimeToCorrectRemainder(
                minutes,
                inputObjs[0].position,
                inputObjs[0].id) * inputObjs[0].id,
            step + 1)
    )
}




const inputUsed = getTestInput()

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


log("b: DOESN'T WORK, WRONG ANSWER",
    trampoline(
        recursivelyFindCorrectTimeB(

            inputUsed
                .split("\n")[1]
                .split(",")
                .map(e => parseInt(e))
                .map((id: number, i: number) => ({ id: id, position: i }))
                .filter((obj: any) => !isNaN(obj.id))
        )
    )
    * firstDepartureId
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
function getTestInput4(): string {
    return (`939
    x,3,x,x,x,11,7`)
}



function getInput(): string {
    return (
        `1002461
        29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,521,x,x,x,x,x,x,x,23,x,x,x,x,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,x,x,601,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,19`
    );
}

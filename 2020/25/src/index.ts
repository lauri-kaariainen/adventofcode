import { trampoline } from "../../../helpmodule.js";


const startTime = new Date().getTime()

const findLoopSize = (
    target: number,
    step: number = 1,
    result: number = 7
): Function => () =>
        result === target ?
            step :
            findLoopSize(
                target,
                step + 1,
                (result * 7) % 20201227
            )
const findKey = (
    targetPublicKey: number,
    otherLoopSizeLeft: number,
    result: number = 1
): Function => () =>

        otherLoopSizeLeft === 0 ?
            result :
            findKey(
                targetPublicKey,
                otherLoopSizeLeft - 1,
                (result * targetPublicKey) % 20201227,
            )

const input = getInput()
    .split("\n")
    .map((n: string): number => parseInt(n))

log("a:\n",
    trampoline(findKey(
        input[0],
        trampoline(findLoopSize(
            input[1]))
    ))
    // .map((num: number) => trampoline(findLoopSize(num)))
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
    return (`5764801
17807724`)
}

function getInput(): string {
    return (
        `16616892
14505727`
    );
}

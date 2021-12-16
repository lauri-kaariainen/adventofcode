import { get8Positions, range } from "../../../helpmodule.js";
console.log(getInput().length);
console.log(getTESTInput().length);

function log(...args: any[]): void {
    if (typeof (console) !== 'undefined' && typeof (document) !== 'undefined') {
        console.log(...args);
        document.querySelector('pre')!.innerHTML += "<br/>" + args.join(" ");
    }
}

const testInputArr: string = getTESTInput();
const inputArr: string = getInput();


const parseInput = (input: string): number[][] =>
    input
        .split("\n")
        .map((line: string) => line.split("").map((chr: string): number => parseInt(chr)))


const doSteps = (input: number[][], stepsLeft: number = 1, totalFlashes: number = 0): number => {
    if (!stepsLeft)
        return totalFlashes;
    const alreadyFlashedArr: { x: number, y: number }[] = [];
    const newInput =
        input.map((line: number[], y: number): number[] =>
            line.map((octopussy: number, x: number): number => octopussy + 1))

    doFlashing(
        newInput,
        alreadyFlashedArr)

    return doSteps(newInput, stepsLeft - 1, totalFlashes + alreadyFlashedArr.length)

}

const doFlashing = (input: number[][], alreadyFlashed: { x: number, y: number }[] = []): number[][] => {
    input.forEach((line: number[], y) =>
        line.forEach((octopussy: number, x) => {
            if (octopussy > 9 && alreadyFlashed.every(el => el.x !== x || el.y !== y)) {
                input[y][x] = 0;
                alreadyFlashed.push({ x: x, y: y })
                get8Positions(x, y, input)
                    .forEach((obj: { x: number, y: number }, i, arr) => {
                        if (alreadyFlashed.every(el => el.x !== obj.x || el.y !== obj.y))
                            input[obj.y][obj.x] += 1
                        doFlashing(input, alreadyFlashed)
                    })
            }
        }
        )
    )

    return input
}




const arrInUse =
    getInput();

log("a:",
    log(

        doSteps(parseInput(arrInUse), 100)
        // .map(line => line.join("")).join("\n")
    )

)

log("b:",

)
function getMiniTESTInput(): string {
    return (
        `11111
19991
19191
19991
11111`
    )
};

function getTESTInput(): string {
    return (
        `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`)
}

function getInput(): string {
    return (

        `8624818384
3725473343
6618341827
4573826616
8357322142
6846358317
7286886112
8138685117
6161124267
3848415383`
    );
}

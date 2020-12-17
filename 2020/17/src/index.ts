import { get8, betweenOrEqual } from "../../../helpmodule.js";

const get8Typed = (x: number, y: number, matrix: string[][]): string[] => get8(x, y, matrix)

enum Position {
    Active = "#",
    InActive = "."
}

const getSeenActivePositions = (x: number, y: number, z: number, arr: string[][][]): number =>
    get8Typed(x, y, arr[z])
        .filter((anotherPosition: string) => anotherPosition === Position.Active).length
    +
    (arr[z - 1] ?
        (get8Typed(x, y, arr[z - 1])
            .filter((anotherPosition: string) => anotherPosition === Position.Active).length +
            (arr[z - 1][y][x] === Position.Active ? 1 : 0)) :
        0)
    +
    (arr[z + 1] ?
        (get8Typed(x, y, arr[z + 1])
            .filter((anotherPosition: string) => anotherPosition === Position.Active).length +
            (arr[z + 1][y][x] === Position.Active ? 1 : 0)) :
        0)


const recursivelyChangePositions = (
    matrixIn3D: string[][][],
    targetSteps: number,
    step: number = 0,
): string[][][] =>
    step >= targetSteps ?
        matrixIn3D :
        recursivelyChangePositions(
            matrixIn3D.map(
                (matrix2D: string[][], z: number, matrix3D): string[][] =>
                    matrix2D.map((line: string[], y: number): string[] =>
                        line.map((char: string, x: number): Position =>
                            char === Position.Active ?
                                (betweenOrEqual(
                                    getSeenActivePositions(x, y, z, matrix3D),
                                    2,
                                    3) ?
                                    Position.Active :
                                    Position.InActive) :
                                //char === Position.InActive ?
                                getSeenActivePositions(x, y, z, matrix3D) === 3 ?
                                    Position.Active :
                                    Position.InActive
                        )
                    )
            ),
            targetSteps,
            step + 1
        )



const startTime = new Date().getTime()

const cycleLimit = 6;

const createWhole3DMatrix = (inputMatrix: string[][], extraLength: number): string[][][] => {

    const addableArray: string[][] = Array.from(new Array(inputMatrix.length + (extraLength * 2)))
        .map((_, i) =>
            Array.from(new Array(inputMatrix.length + (extraLength * 2))).map(e => Position.InActive))


    inputMatrix.forEach((line: string[], i: number) =>
        addableArray[Math.floor(extraLength) + i].splice(
            Math.floor(extraLength), line.length, ...line
        )
    )

    const new3dArray: string[][][] =    //create Z-axis
        Array.from(new Array(inputMatrix.length + (extraLength * 2)))
            .map((_: undefined, i: number) =>
                i === extraLength ? addableArray :
                    Array.from(new Array(inputMatrix.length + (extraLength * 2)))
                        .map((_, i) =>
                            Array.from(new Array(inputMatrix.length + (extraLength * 2))).map(e => Position.InActive)))

    return new3dArray
}



const usedInput = getInput();

log("a:\n",

    // recursivelyTakeSeats(
    recursivelyChangePositions(
        createWhole3DMatrix(
            usedInput
                .split(/\s*\n\s*/)
                .map(line => line.split(""))
            , cycleLimit)
        ,
        6),
    recursivelyChangePositions(
        createWhole3DMatrix(
            usedInput
                .split(/\s*\n\s*/)
                .map(line => line.split(""))
            , cycleLimit)
        ,
        6)
        .map(matrix =>
            matrix
                .flatMap(line =>
                    line.filter(char => char === "#")))
        .map(e => e.length)
        .reduce((a, b) => a + b)
    // ,
    // createWhole3DMatrix(
    //     usedInput
    //         .split(/\s*\n\s*/)
    //         .map(line => line.split(""))
    //     , cycleLimit)
)

log("b:",

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
    return (`.#.
    ..#
    ###`)
}

function getInput(): string {
    return (
        `....###.
        #...####
        ##.#.###
        ..#.#...
        ##.#.#.#
        #.######
        ..#..#.#
        ######.#`
    );
}

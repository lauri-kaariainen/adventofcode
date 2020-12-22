// import { arrayRotateLeft } from "../../../helpmodule.js";


const startTime = new Date().getTime()

const usedInput = getInput();

const goThroughGame =
    (deck1: number[],
        deck2: number[],
        step: number = 0): number[][] =>
        !deck1.length || !deck2.length ?
            [deck1, deck2] :
            goThroughGame(
                deck1[0] > deck2[0] ?
                    deck1.slice(1).concat([deck1[0], deck2[0]]) :
                    deck1.slice(1),
                deck2[0] > deck1[0] ?
                    deck2.slice(1).concat([deck2[0], deck1[0]]) :
                    deck2.slice(1),
                step + 1
            )



// const goThroughCards =
const deck1 =
    usedInput
        .split(/\s*\n\s*\n\s*/)[0]
        .split("\n")
        .slice(1)
        .map((e: string): number => parseInt(e))

const deck2 =
    usedInput
        .split(/\s*\n\s*\n\s*/)[1]
        .split("\n")
        .slice(1)
        .map((e: string): number => parseInt(e))

log("a:\n",
    Math.max(
        ...
        goThroughGame(
            deck1,
            deck2
        )
            .map((resultDeck: number[]) => resultDeck
                .map((num: number, i, arr) => (arr.length - i) * num)
                .reduce((a, b) => a + b, 0)
            )))
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
    return (`Player 1:
    9
    2
    6
    3
    1
    
    Player 2:
    5
    8
    4
    7
    10`)
}

function getInput(): string {
    return (
        `Player 1:
        15
        31
        26
        4
        36
        30
        43
        39
        50
        21
        25
        46
        6
        44
        12
        20
        23
        9
        48
        11
        16
        42
        17
        13
        10
        
        Player 2:
        34
        49
        19
        24
        45
        28
        7
        41
        18
        38
        2
        3
        33
        14
        35
        40
        32
        47
        22
        29
        8
        37
        5
        1
        27`
    );
}

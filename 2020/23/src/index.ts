// import { arrayRotateLeft } from "../../../helpmodule.js";


const startTime = new Date().getTime()


const getDestination = (
    cups: number[],
    pickedUpCups: number[],
    possibleDestination: number
): number =>
    pickedUpCups.includes(possibleDestination) ?
        getDestination(cups, pickedUpCups, possibleDestination - 1) :
        possibleDestination < 1 ?
            getDestination(cups, pickedUpCups, Math.max(...cups)) :
            possibleDestination

const removeCups = (cups: number[], index: number, cupsLeftToRemove: number = 3)
    : number[] =>
    !cupsLeftToRemove ?
        cups :
        index >= cups.length ?
            removeCups(cups, 0, cupsLeftToRemove) :
            removeCups(
                cups
                    .slice(0, index)
                    .concat(
                        cups.slice(index + 1)),
                index,
                cupsLeftToRemove - 1
            )

const addCups = (cups: number[], cupsToAdd: number[], index: number): number[] =>
    !cupsToAdd.length ?
        cups :
        index >= cups.length ?
            addCups(cups, cupsToAdd, 0) :
            addCups(
                cups
                    .slice(0, index + 1)
                    .concat(
                        cupsToAdd[0]
                    )
                    .concat(cups.slice(index + 1)),
                cupsToAdd.slice(1),
                index + 1
            )


const usedInput = getTestInput();

const goThroughGame = (
    cups: number[],
    targetSteps: number = 10,
    step: number = 0,
    positionValue: number = cups[0]
)
    : number[] => {
    if (step >= targetSteps)
        return cups

    const index = cups.indexOf(positionValue)

    const pickedUp =
        cups.length - (index + 1) >= 3 ?
            cups.slice(index + 1, (index + 1) + 3) :
            cups
                .slice(index + 1)
                .concat(cups.slice(0, 3 - (cups.length - (index + 1))))

    const destination =
        getDestination(
            cups,
            pickedUp,
            cups[index] - 1
        )


    const cupsWithoutPickedUps = removeCups(cups, index + 1)

    const newCups = addCups(
        cupsWithoutPickedUps,
        pickedUp,
        cupsWithoutPickedUps.indexOf(destination)
    )


    // console.log(
    //     cups,
    //     cupsWithoutPickedUps,
    //     `index:${index}`,
    //     `cups[${cups.indexOf(destination)}]:${destination}`,
    //     pickedUp)

    return goThroughGame(
        newCups,
        targetSteps,
        step + 1,
        newCups[newCups.indexOf(positionValue) + 1]
    )


}

log("a:\n",

    goThroughGame(
        usedInput.split("").map((n: string): number => parseInt(n)),
        100
    )
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
    return (`389125467`)
}

function getInput(): string {
    return (
        `156794823`
    );
}

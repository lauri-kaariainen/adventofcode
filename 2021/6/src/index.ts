import { returnUniqueAmountsAsObj } from "../../../helpmodule.js";
console.log(getInput().length);
console.log(getTESTInput().length);

function log(...args: any[]): void {
    if (typeof (console) !== 'undefined' && typeof (document) !== 'undefined') {
        console.log(...args);
        document.querySelector('pre')!.innerHTML += "<br/>" + args.join(" ");
    }
}

const testInputArr: string[] = getTESTInput();
const inputArr: string[] = getInput();



// const parseInput = (arr: string[]): { origin: { x: number, y: number }, target: { x: number, y: number } }[] =>
//     arr.map((line: string) => {
//         const matches = line.match(/(\d+),(\d+) -> (\d+),(\d+)/)
//         return ({
//             origin: { x: parseInt(matches![1]), y: parseInt(matches![2]) },
//             target: { x: parseInt(matches![3]), y: parseInt(matches![4]) },
//         })
//     })
const advanceNumDays = (list: number[], dayLimit: number, day: number = 0): number[] | Function => {
    const newChildrenMutating: number[] = [];
    if (day % 10 === 0)
        console.log(day, ":", list.length)
    if (day >= dayLimit)
        return list;
    return advanceNumDays(
        list
            .map((lanternfish: number): number =>
                lanternfish > 0 ? lanternfish - 1 :
                    (newChildrenMutating.push(8), 6))
            .concat(newChildrenMutating),
        dayLimit,
        day + 1
    )
}
const advanceNumDaysForB = (
    listObj: any, // = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
    dayLimit: number,
    day: number = 0): any | Function => {
    if (day % 10 === 0)
        console.log(day, ":", JSON.stringify(listObj))
    if (day >= dayLimit)
        return listObj;
    const tempValueFor8 = listObj[8]
    Object.keys(listObj)
        .forEach((key: string, i: number): any =>
            i === 0 ?
                listObj[8] = listObj[key] :
                listObj["" + (parseInt(key) - 1)] = listObj[key])

    listObj[7] = tempValueFor8;
    listObj[6] += listObj[8]
    return advanceNumDaysForB(
        listObj,
        dayLimit,
        day + 1
    )
}


const arrInUse = inputArr;

log("a:",
    advanceNumDays(

        arrInUse
            .join("\n")
            .split(",")
            .map((e: string): number => parseInt(e)),
        80
    ).length
)


const objForB =
    returnUniqueAmountsAsObj(
        arrInUse
            .join("\n")
            .split(",")
            .map((e: string): number => parseInt(e)))
objForB[0] = 0;
objForB[6] = 0;
objForB[7] = 0;
objForB[8] = 0;


log("b:",
    Object.values(

        advanceNumDaysForB(
            objForB,
            256
        ))
        .reduce((acc: number, next: any): number => acc + next, 0)
)


function getTESTInput(): string[] {
    return (
        `3,4,3,1,2`.split("\n"))
}

function getInput(): string[] {
    return (

        `4,1,1,4,1,2,1,4,1,3,4,4,1,5,5,1,3,1,1,1,4,4,3,1,5,3,1,2,5,1,1,5,1,1,4,1,1,1,1,2,1,5,3,4,4,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,5,1,1,1,4,1,2,3,5,1,2,2,4,1,4,4,4,1,2,5,1,2,1,1,1,1,1,1,4,1,1,4,3,4,2,1,3,1,1,1,3,5,5,4,3,4,1,5,1,1,1,2,2,1,3,1,2,4,1,1,3,3,1,3,3,1,1,3,1,5,1,1,3,1,1,1,5,4,1,1,1,1,4,1,1,3,5,4,3,1,1,5,4,1,1,2,5,4,2,1,4,1,1,1,1,3,1,1,1,1,4,1,1,1,1,2,4,1,1,1,1,3,1,1,5,1,1,1,1,1,1,4,2,1,3,1,1,1,2,4,2,3,1,4,1,2,1,4,2,1,4,4,1,5,1,1,4,4,1,2,2,1,1,1,1,1,1,1,1,1,1,1,4,5,4,1,3,1,3,1,1,1,5,3,5,5,2,2,1,4,1,4,2,1,4,1,2,1,1,2,1,1,5,4,2,1,1,1,2,4,1,1,1,1,2,1,1,5,1,1,2,2,5,1,1,1,1,1,2,4,2,3,1,2,1,5,4,5,1,4`.split("\n")
    );
}

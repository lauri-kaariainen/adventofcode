// import { get8 } from "../../../helpmodule.js";

const startTime = new Date().getTime()


const departTime = parseInt(getInput().split("\n")[0])

log("a:\n",
    getInput()
        .split("\n")[1]
        .split(",")
        .map(e => parseInt(e))
        .map((id: number) => ({ id: id, closest: Math.ceil(departTime / id) * id - departTime }))
        .filter((obj: { id: number, closest: number }) => !isNaN(obj.id))
        .sort((a: any, b: any) => a.closest - b.closest)
        .map((item): number => item.id * item.closest)[0]


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
    return (`939
    7,13,x,x,59,x,31,19`)
}

function getInput(): string {
    return (
        `1002461
        29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,521,x,x,x,x,x,x,x,23,x,x,x,x,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,x,x,601,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,19`
    );
}

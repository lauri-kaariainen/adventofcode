// import { get8 } from "../../../helpmodule.js";

type ShipPosition = {
    x: number,
    y: number,
    degrees: number
}

enum Direction {
    North = "N",
    East = "E",
    South = "S",
    West = "W",
}


const getNextPosition = (
    input: string,
    position: ShipPosition
): ShipPosition =>
    input[0] === Direction.North ?
        { ...position, y: position.y - parseInt(input.substr(1)) } :
        input[0] === Direction.South ?
            { ...position, y: position.y + parseInt(input.substr(1)) } :
            input[0] === Direction.East ?
                { ...position, x: position.x + parseInt(input.substr(1)) } :
                input[0] === Direction.West ?
                    { ...position, x: position.x - parseInt(input.substr(1)) } :
                    input[0] === "R" ?
                        {
                            ...position,
                            degrees: (position.degrees + parseInt(input.substr(1))) % 360,
                        } :
                        input[0] === "L" ?
                            {
                                ...position,
                                degrees:
                                    position.degrees - parseInt(input.substr(1)) >= 0 ?
                                        (position.degrees - parseInt(input.substr(1))) % 360 :
                                        (position.degrees - parseInt(input.substr(1))) % 360 + 360
                            } :
                            //input[0] === "F" ? 
                            {
                                ...position,
                                x: position.degrees === 90 ?
                                    position.x + parseInt(input.substr(1)) :
                                    position.degrees === 270 ?
                                        position.x - parseInt(input.substr(1)) :
                                        position.x,
                                y: position.degrees === 0 || position.degrees === 360 ?
                                    position.y - parseInt(input.substr(1)) :
                                    position.degrees === 180 ?
                                        position.y + parseInt(input.substr(1)) :
                                        position.y
                            }




const recursivelyFollowInstructions =
    (inputLeft: string[],
        currPosition: ShipPosition = { x: 0, y: 0, degrees: 90 }
        // currDirection: Direction = Direction.East
    ): ShipPosition =>
        !inputLeft.length ?
            currPosition :
            // (console.log(inputLeft[0], currPosition.x, currPosition.y, currPosition.degrees),
            recursivelyFollowInstructions(
                inputLeft.slice(1),
                getNextPosition(
                    inputLeft[0],
                    currPosition
                )

            )








const startTime = new Date().getTime()

const resultForA =
    recursivelyFollowInstructions(
        getInput()
            .split(/\s*\n*\s/g))

log("a:\n",
    Math.abs(resultForA.x) + Math.abs(resultForA.y)

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
    return (`F10
    N3
    F7
    R90
    F11`)
}

function getInput(): string {
    return (
        `W5
        F66
        S4
        E1
        F78
        L90
        F79
        S4
        F64
        R180
        F24
        N4
        L90
        N3
        R180
        E5
        N5
        F68
        E3
        L180
        F56
        E3
        S5
        F75
        E1
        L90
        F53
        S2
        E3
        S4
        L180
        W4
        L90
        S1
        F51
        L90
        W3
        L90
        W3
        F39
        W2
        R90
        E1
        R90
        W4
        R180
        N1
        E5
        R90
        F63
        L90
        N4
        R180
        N3
        F25
        W3
        L90
        N4
        W3
        S5
        E3
        R90
        E5
        F17
        S5
        F20
        E2
        L90
        E1
        S5
        R90
        F13
        E3
        N4
        W1
        L90
        N3
        F95
        N1
        F37
        N2
        E5
        L90
        W2
        N5
        F8
        S4
        E4
        L90
        E1
        F92
        S2
        F26
        S1
        F97
        E4
        L90
        W1
        R270
        F28
        R90
        S3
        N2
        F93
        N1
        E4
        S1
        E5
        S1
        W2
        F70
        N4
        W5
        F74
        N1
        L90
        S2
        L180
        S1
        E3
        R180
        W3
        N5
        L90
        W3
        F20
        E5
        R90
        E2
        F52
        L270
        E3
        R90
        E3
        R90
        F8
        E5
        F26
        E1
        F87
        N1
        F77
        W4
        F60
        S2
        F39
        R90
        S1
        F5
        N4
        F98
        W5
        R90
        W1
        R90
        S4
        L90
        N5
        F19
        S2
        L270
        F44
        E1
        F90
        R90
        F11
        S4
        R90
        E2
        L90
        N4
        R180
        E5
        F66
        S5
        F11
        L180
        E1
        N1
        L180
        S3
        E5
        N2
        W5
        F75
        E3
        N1
        W5
        L90
        S5
        R90
        S5
        F2
        W2
        N4
        F15
        S5
        L90
        E1
        F49
        W5
        F48
        R90
        N4
        W5
        L90
        E4
        L270
        F77
        E2
        F33
        E1
        N2
        L90
        F75
        E5
        L90
        F16
        L90
        F82
        E4
        S5
        F72
        S3
        R270
        F88
        W1
        L90
        N5
        L180
        W1
        R90
        E1
        F39
        R90
        F27
        R90
        W3
        R90
        F55
        R180
        W5
        S2
        F18
        E3
        F1
        E5
        N1
        W4
        F10
        L90
        F76
        N4
        F40
        R180
        E4
        R90
        F69
        W5
        R90
        W3
        F67
        W5
        N4
        E5
        N4
        W2
        L90
        E5
        F26
        R180
        F48
        W3
        E2
        F84
        E1
        R90
        F51
        L180
        S3
        W5
        R90
        N1
        F69
        W2
        S5
        R180
        F57
        W2
        F45
        R90
        N2
        L90
        N4
        R180
        F8
        L180
        F48
        W5
        L90
        S5
        F52
        L90
        S5
        R90
        E4
        L90
        N4
        L90
        W5
        F80
        R90
        W1
        F38
        R90
        F25
        W1
        F31
        N4
        S4
        F91
        R180
        S2
        L90
        F30
        S3
        W3
        S4
        W1
        N4
        F25
        R90
        W3
        F10
        N3
        R90
        N3
        L90
        E1
        S4
        R90
        L90
        F36
        E4
        R180
        F27
        R270
        F57
        L180
        F72
        S2
        R90
        W1
        F19
        S3
        F27
        N4
        W5
        R90
        F42
        L180
        F57
        E5
        F63
        N3
        F97
        L90
        S5
        F11
        L90
        W1
        F71
        W3
        R90
        W4
        F43
        F71
        W3
        F20
        N1
        F75
        E5
        F15
        N3
        F3
        W2
        F13
        W5
        F88
        E5
        L90
        N4
        L90
        F11
        L90
        F58
        W2
        R90
        S5
        F55
        S4
        F83
        F8
        N1
        R90
        F36
        W2
        F57
        N4
        L180
        W2
        F37
        S1
        F18
        E1
        F82
        S5
        E4
        R90
        E2
        S5
        R90
        S5
        R180
        F91
        E2
        N3
        F43
        E2
        R90
        S4
        E1
        R90
        S3
        L180
        F48
        F57
        E5
        F87
        S4
        R90
        N4
        E2
        N4
        W5
        R270
        F31
        N5
        W5
        N1
        F92
        S5
        F40
        W3
        F79
        L180
        E5
        F83
        L180
        N1
        F30
        N2
        E1
        S3
        L90
        E5
        F56
        R180
        E4
        F17
        W4
        L180
        S5
        E1
        F57
        E3
        F99
        S3
        F29
        L90
        F61
        S5
        W2
        S3
        F83
        R180
        F83
        E1
        R90
        E4
        N3
        W5
        N3
        N2
        F21
        L90
        L90
        F72
        S3
        L90
        E3
        F16
        R180
        F75
        S3
        R90
        S3
        L90
        F82
        R90
        W5
        R90
        N4
        R90
        F14
        N1
        F59
        E5
        S2
        W3
        N3
        S5
        E4
        F43
        E2
        F31
        S2
        F59
        N2
        R90
        S3
        L90
        N3
        F88
        N2
        F22
        N4
        L90
        N2
        L90
        F21
        W4
        F97
        R90
        F29
        S5
        W4
        F40
        N3
        L90
        F63
        N5
        F56
        R90
        L90
        S3
        R90
        S5
        F53
        N1
        W3
        R90
        F1
        S2
        E4
        N4
        F68
        R90
        W3
        S5
        S1
        E4
        L180
        F8
        E5
        L180
        W5
        N1
        F42
        S3
        F61
        L90
        S3
        F29
        S4
        E3
        F6
        R90
        N2
        L180
        W3
        F48
        S5
        E3
        R90
        E4
        R180
        F87
        L90
        F73
        S2
        W1
        S5
        E5
        S4
        E2
        S4
        F93
        L90
        W3
        S3
        F17
        N5
        F42
        S5
        R90
        E1
        S2
        F7
        S3
        W2
        L180
        W4
        F99
        E5
        S5
        F93
        L270
        F20
        N4
        L90
        F1
        N1
        L90
        S2
        F96
        L180
        S2
        F8
        L90
        S4
        R90
        F70
        W1
        R180
        S2
        R180
        N3
        L90
        E4
        R90
        F40
        E1
        S4
        R90
        W2
        R90
        L90
        N5
        L180
        F5
        E5
        S3
        F43
        E2
        E2
        F79
        E5
        F66
        E5
        S4
        E5
        S4
        W2
        S2
        F41
        L90
        N5
        F60
        W5
        N4
        E2
        S5
        R90
        W2
        F98
        W3
        S2
        W5
        L90
        W5
        F16
        S5
        L90
        F85
        R90
        F56
        W4
        R90
        E1
        R90
        F5
        N5
        E5
        R90
        E4
        F77
        S1
        E5
        F24
        L180
        W1
        S3
        F31
        E5
        S5
        W4
        F83
        W3
        N4
        L90
        N3
        L90
        E2
        R180
        S1
        F17
        R90
        R180
        S4
        F100
        E2
        L180
        N2
        L90
        E3
        N5
        W2
        F19
        W4
        R180
        F56
        R90
        W1
        R90
        E4
        S2
        R90
        F10
        E4
        E2
        F61
        E1
        S3
        F33
        N4
        F95
        S3
        F84
        L180
        S1
        L90
        N1
        E3
        F40
        L90
        E3
        S2
        F56
        L180
        W5
        S5
        R90
        E3
        N1
        F60
        L90
        F62`
    );
}

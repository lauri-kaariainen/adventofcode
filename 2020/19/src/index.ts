// import { get8, betweenOrEqual } from "../../../helpmodule.js";



const startTime = new Date().getTime()

const usedInput = getInput();

const rules: string[] = usedInput
    .split(/\s*\n\s*\n\s*/)[0]
    .split("\n").map((line: string) => line.trim())

const isRuleSolved = (string: string): boolean =>
    string.split(":")[1].match(/[0-9]/) === null

const getLetterPosition = (input: string, letter: string) =>
    (input
        .split(/\s*\n\s*\n\s*/)[0]
        .split("\n")
        .find((line: string) => line.match('' + letter)) || "")
        .split(":")[0].trim()


const goThroughRules = (
    input: string[],
    lastSolvedRules: any[] = [
        { index: getLetterPosition(input.join("\n"), '"a"'), value: "a" },
        { index: getLetterPosition(input.join("\n"), '"b"'), value: "b" }
    ]
): string[] => {

    console.log(input, lastSolvedRules) === undefined;

    const newLines = input
        .filter((line: string) =>
            !lastSolvedRules.find((rule: any) => rule.index === line.split(":")[0]))
        .map((line: string) =>
            lastSolvedRules
                .reduce((finalString: string, rule: any) =>
                    finalString
                        .replace(new RegExp(
                            " " + rule.index + "( |\n)??", 'gi'), " " + rule.value + " ")
                    , line
                ))



    return input.length <= 1 ?
        input :
        goThroughRules(
            newLines
            ,
            newLines
                .filter(isRuleSolved)
                .map((string: string) => ({
                    index: string.split(":")[0],
                    value: string.split(":")[1]
                })))

}


log("a:\n",
    goThroughRules(
        rules
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
    return (`0: 4 1 5
    1: 2 3 | 3 2
    2: 4 4 | 5 5
    3: 4 5 | 5 4
    4: "a"
    5: "b"
    
    ababbb
    bababa
    abbbab
    aaabbb
    aaaabbb`)
}

function getInput(): string {
    return (
        `53: 21 35 | 84 72
        129: 72 68 | 35 97
        29: 110 35 | 45 72
        12: 26 72 | 2 35
        101: 72 103 | 35 52
        5: 40 35 | 49 72
        94: 35 57 | 72 58
        87: 86 72 | 69 35
        1: 63 35 | 61 72
        119: 96 35
        59: 35 96 | 72 118
        14: 96 35 | 74 72
        20: 78 72 | 26 35
        120: 72 35 | 72 72
        82: 51 72 | 93 35
        104: 35 36 | 72 106
        96: 35 72 | 72 72
        25: 89 35
        130: 56 35 | 14 72
        57: 35 112 | 72 21
        24: 38 35 | 95 72
        126: 72 35 | 35 35
        39: 35 41 | 72 46
        113: 127 35 | 22 72
        114: 72 87 | 35 129
        3: 72 107 | 35 132
        64: 72 98 | 35 9
        124: 80 35 | 126 72
        117: 35 80 | 72 120
        122: 72 1 | 35 43
        11: 42 31
        76: 58 72 | 71 35
        52: 99 96
        84: 35 35
        88: 35 37 | 72 106
        67: 118 72 | 80 35
        43: 19 72 | 91 35
        4: 113 72 | 23 35
        85: 72 80 | 35 15
        36: 112 35 | 118 72
        32: 72 112 | 35 79
        62: 35 77 | 72 81
        23: 25 35 | 6 72
        116: 96 35 | 112 72
        8: 42
        105: 131 35 | 15 72
        27: 84 72 | 15 35
        133: 72 104 | 35 76
        16: 72 72
        22: 72 112 | 35 80
        37: 15 35
        41: 120 35 | 112 72
        91: 72 82 | 35 88
        109: 35 100 | 72 34
        15: 35 72 | 35 35
        92: 35 18 | 72 50
        110: 35 4 | 72 114
        123: 35 112 | 72 120
        46: 72 16 | 35 120
        26: 120 72 | 96 35
        83: 123 72 | 33 35
        111: 90 35 | 94 72
        10: 72 101 | 35 130
        45: 133 72 | 111 35
        77: 10 72 | 125 35
        90: 35 44 | 72 105
        99: 72 | 35
        93: 112 35 | 112 72
        13: 32 35 | 124 72
        56: 72 96 | 35 15
        61: 72 73 | 35 28
        6: 99 74
        58: 72 120 | 35 16
        95: 72 80 | 35 96
        60: 99 21
        63: 72 20 | 35 83
        42: 72 122 | 35 29
        38: 120 72 | 16 35
        51: 131 35 | 16 72
        17: 35 84 | 72 84
        131: 99 99
        100: 115 35 | 117 72
        55: 35 2 | 72 116
        21: 99 72 | 35 35
        89: 72 72 | 35 35
        34: 22 72 | 85 35
        18: 96 35 | 131 72
        75: 5 72 | 108 35
        108: 3 72 | 102 35
        49: 72 117 | 35 127
        102: 35 132 | 72 41
        0: 8 11
        79: 72 35
        19: 72 12 | 35 92
        71: 21 35
        98: 35 15 | 72 131
        81: 35 109 | 72 70
        106: 72 131 | 35 16
        30: 67 35 | 115 72
        50: 15 99
        86: 35 112
        69: 72 21 | 35 89
        2: 35 21 | 72 80
        73: 35 60 | 72 59
        33: 72 15 | 35 118
        70: 72 121 | 35 30
        31: 35 62 | 72 54
        65: 24 72 | 55 35
        127: 35 15 | 72 74
        118: 35 35 | 72 99
        78: 15 72 | 96 35
        68: 72 89 | 35 120
        112: 35 72
        7: 65 35 | 48 72
        44: 74 72 | 80 35
        115: 35 128 | 72 74
        74: 35 72 | 99 35
        125: 35 64 | 72 47
        40: 98 35 | 17 72
        121: 72 53 | 35 119
        103: 72 15 | 35 126
        9: 35 16 | 72 84
        97: 84 35 | 16 72
        80: 35 72 | 72 35
        47: 35 66 | 72 106
        28: 50 35 | 27 72
        107: 80 72 | 126 35
        128: 72 35 | 99 72
        132: 35 80 | 72 118
        54: 75 35 | 7 72
        66: 72 84 | 35 89
        48: 39 35 | 13 72
        35: "a"
        72: "b"
        
        bababbaaaabbaaaaabbbbaab
        bbbaaaaabababaabbbbaabab
        bbaaababbaaaaaaaaabbabba
        baaabbbaabaabbabbabbbbaaaabbabab
        bbbabbbaaababbbaaaabaaababababbabbabbbabbbabaaabbbaabbbb
        aaaaaaaabbabbabaabbabbab
        bbaabbababbabaaaababababaabbbaab
        bbabbababbaabaabaabbaaab
        baaabbbbaababbabaaabaaba
        baabbabaaaabbaabbaaabaaa
        babbbbaabbabbbabbbabbabbbbbbbabb
        aabbaaaabababbabbabbaababbaababa
        babbabbbbaabaaabaaaaabbb
        bbbabbbababaaababbababab
        ababaaabbabbbabaaaabbbba
        aabbaaaaabbbbbabbbbbabbbbbbaaaaaaabbabba
        abbbaabbaabbabaaaabbaaab
        babbaababbaaaabbaaaaabab
        babbbbbaabaababbaaabbabb
        aaabbaabaabaababbaabaaba
        abaaaaabbbbaaaaaaaaaabbb
        aabbbaabaabbabbbbaaababababaabaaabaababbabbababbaabaabbababaaaba
        bbaabaaabaaabbbbbaaaaaab
        abbbbbaaaabaaababbbbabba
        aabbbbababbbaabbabaabbab
        aaaaaabbabbabbaabaaabbaa
        aaabbbbbbbabbabaabaaaaba
        bbababaabaababbbbabababbbababaabbbbaaaba
        aaaaaababbaabbababbaabbb
        babbababaaaabbabbabbbaabbbbbbbaabbaababa
        bbbaabbbabbbaaaaabbbaaba
        bbbaabbaaabaabababababab
        bbbbbaaaaabbbbbbaabbbaab
        aababaababbabbbbbabbabba
        bbbaabbbaaaaabbabbbbabba
        abbaaaabbbbbbaaababababbbabbbabaaababaaa
        aaaabaababbabbaababbbbaa
        aaaaaabbbbbbabbbbaababaa
        baabbbabababbbbbbababaababaabaabbaababaaabbbbbaabbabaabbbbabbaab
        ababbbbabaaabbbbbabbaaab
        babaababababbbababbbbbba
        baaababbbaabbababbabaaaaaaaabbbaabaabbbabbbaabbbaababaaabababbbbabaaaabb
        baabaaabaabbbbababaabaaa
        aabbaababbbaabababaaabaaabbabbbbabbaabaababaabbb
        bbbbabbbbaabababbbbbbbabaaaaabba
        babbabbbbababaaaabaaabaa
        aababbbaaababababbbbaaaa
        babbbaabbaababbbbbbababbbaabbabbaaabbaaa
        baababaaaaabbbbbaabbabbbabbbbabaabbbaababbabbbbaabaaabaa
        bbaabbaababbbabbabaabaaa
        aabaaabaabaabbaaabbbbbba
        aaabaaabbaabbbbabbabaaab
        babbbbbabaababbbbaababbbbabbaaab
        ababbaaabaaababbbabaabaa
        aaabbaababbbbbabababaaaa
        ababbbababaaaaabbbaaaaba
        abbbbbbbaaaaabaaabaaaaba
        bbaaababababbaabbaabababbaaabbababbabaaabbbbabaa
        abababbaabbbaaababaabbaa
        babbbbbaabaaabbbabbabbaabbaaaaaa
        baaaabbbbabbbbbbaabababb
        abbbbbabaababbababaaabab
        babbaabaaabbbbabbbbabaabaaababbaabaababaabbbbbba
        aabababaaaaabbbaaabbabab
        abbbbbabaaaabbaaaabbbbaa
        babbbbbabbbbbaaababbbbaa
        bbbabbbbbbbaabbbbaabaaba
        aababbbabaaaabbbabbbbbabababbaaaaabaabab
        bbbbbababbbabbbaaabbbbaa
        bbababaabaaaabaabaaaaaba
        bbaabbaaababbbabbbabbbbb
        babaaaabaabaabaabbaaaaaaaabbaaab
        aaababaabababbabbbabaabb
        aaababaaaaabbaababaaabaa
        bbabbbbaaaabaabbaabababb
        bbaaabbabbaabbaabbaabbba
        babbbabaabbabbaababbbaaa
        aaaaaaaabaaaababbbbbabba
        bbbbabbbabaaababababbbaa
        aabbbbbbabbbaabbabaaabba
        baaaaabbbbabbbbababaabaa
        abbbabbbbaabbbbaabbaabbb
        aabaabaabababaaaaaaabaaa
        bbbbbabaaabaaabaaaaaabbb
        bbbababbbbbabbbabaabababbababababbbbbaabbbabaaba
        baaaaaaabbaaaabbabbbbbba
        bbbaabbabaaaaaaaaabababb
        bbabaaaaababbaababababbbaaabbbba
        bbbbaabbbabbbbbaaaaaabbb
        abbabbaaabbbaaababbababb
        abbabbbbaababaabbbabbbbababbaaab
        abbbbabbbbbaaabbabbabbba
        babaaaabbabbabbbbaaabaaa
        babbaaaaaabaabbabbbaaaba
        aababababbbbbbabaabababb
        abbbbbbbbbaabaabbbabaaba
        baaabbbbaabbaaaaabababbbbbabbabaaabaaaaa
        abaabbbabbbbbbaaaabbbabb
        bbbbbaaaabbbbbbbbaaaabaababababbbaaaababababbabaaababaaa
        aaaabababaababbbaaaaabba
        bababbababbbaaaabbbaaaaa
        bbabaaaabbbababaaabbbbaa
        baababbbababaaabbbbbbbabbabababbaababbaaaaabaaaa
        abaababbaabaaabaaaababaabbabbbaaababaaaa
        baabbaaabbbabbabbbbbbbaababbaaaabbbbbbbbabaababbbabbabbaabbbbbba
        babaabaabbbababbbbbbabaaabaabbaaabbbbababaabbabaababbbaa
        aaaaabaabababbabbaaaaaba
        bababbabbabbaabaaabbabaaaaaabbab
        abbaaaaabbaabaaaabbaaabb
        bbbbbbabbaaaabbbbaabaaaa
        bbbabbbbbaababbaaabababb
        bababbaabbbababbbaaaaabbbabbabbbbbaaaaaaababbaba
        aaaabbaaabbbbabbaaaaaaab
        baaabbbbbbaabbaabababbba
        aaabaaabbaabbaaabbaaaaba
        baaabbbbabbbbbbbbaaaaaaabbbaaaba
        aabaaaabbabbbabaabbaabab
        ababaaababbbababbaaaaaab
        abaaaaabbbbbbaaaabaaabba
        bbbababaabbbaaababaabbaa
        abbabbabaaaabbbabaabaaabaaabbbbaabbbaaabaaabababbbabbbbaaababbaaaaabaaaa
        aaaaabaaaababbbaabbbbbbbbbbbabba
        bababbaabbbababbbbaabbbb
        bbbabaaabbaaaaaabbaabbaaaaaaabba
        baabbaaaabbbabaaaaabbbab
        baabbababbaabaaaaaaaabba
        bababbabbbbbaabbaaabaabababbbabaabbabbbababaaabb
        babbbbbaabaaaaaabaaabbba
        ababababbabbabbbbaaaaaaabbbbbbbbbbbbabbbbbababbaababbabbabaabbbbabababbabbaaabbbabbabbba
        aabaababbbaaaaabababaaba
        baabbbbabbaaabbabbabbaab
        aaabaaaabaaababbaaaaaabaaaabaaaaaaabbbaabbabbbaabbbabaaaabbbaabaaaabbabb
        baabababbbbabbbaaaaabbbb
        abbbaaaabaabababababaabb
        babaabababababbbaabaaabb
        abbbababbbaaababbbbbaaaa
        aababaabbaaabbabbabaaabb
        bbbbabbbabbaabbabbaaaaaaabbbbaababaababaabaaababaabbaaabbbbabbab
        ababbbbbabbabbaabbbabbbbbaababaaabbbbaba
        bbbaabbabaaaabbbaaaabaaa
        bbbababaaabbabaaaabaaaaa
        ababbbabbbbbabbbbbaaabbaabababab
        baabaaabbbbbbbabaaaabaabbbaaaaab
        baaaabaabbababaaabaabbbabaaabbabbbbababbababaaba
        abababbbabbbbbabbababbaababbbbba
        babababbaababbbabbabaaab
        aabaaabaaaabbaabbbbabbaa
        abababbaaaabaabbbbabbbbb
        baabbbaaaababbabababbaba
        babbbbbaaabaaabaaabbbbabbbbababbaabbaaaabbbbaaba
        babbababbabbbabbbbbabbaa
        bbaabaaaaaabaabbbaabbaaaabaaabaa
        aabbaabbbababaaabbbabbbabbaabaabaaaaabababbbbaaa
        babaababbaaaaabbbabbaaaa
        aababbbabbbbbaabbaaababa
        abbaaaabbbabbababbabbbaa
        abbbabaaabababaabbabbbab
        abaabaabaaaabbaabbaaaaaabbaaaababaaaaaba
        bbbaabbaabbbaaabbbbbaabbbbbbaaab
        bbaaaabbaaaabbbaaabbabbbababbaabbbbaaaba
        aababaabaabbabaabbaaaaabaaababbaabbbbaaa
        bbaaaabbbabababababaabbb
        bbbabaabbaaababbaabbbbbbbaaababaabaaabab
        bbbbbaabaabbbbbbabbabbab
        bbbbabbabbabbaaabbbabbaa
        aababaabbaabababbbaaabbbabaabaaa
        abbbbbbbaababaabbbbbaaab
        bbbaabbbaabbaabbabbabbab
        aaaaaababbbbabaaabbaaaabbabaababaaaabbaaaaaaabbbaaabbaaaaaaababbabaababa
        aabbbbabaaaabbaaaaabbbab
        bbaaabbbaaaabbbababaabba
        aabbaaaabaabababaaaabaaa
        babaababbabaababababaabb
        aabbaababaababbabbabbbab
        babbbabaabbbaaaaaaaababaaaabaaabababbaaa
        bbabbbbaaababbbaabaaabbbbbbabaabaabbbbaa
        aabbbbbbbbbaaabbabbababa
        aaaabaabbabbbabbbbbabbab
        aabaaabaaaabaaabaabbbabb
        bbabbabaaababbaaabbabaaa
        aabbaabbaabaababbaaaabbaabaababbbabaaaaa
        bbbbbbaabbbabaaaabaaabab
        aabbbbababbbababbaaaaabbbaababbbbbabaabb
        baababbbbaabbbaaabbaabbb
        aabbaabbbbaaabbababbbbab
        bababaaabaabbbbaabbaabbb
        bbbabaaabbbbbbaabbbbaaab
        aababababbaabbabbbababaabbbaabbaaaaabbaabaabbaabaababbbbbbabbbaaaabbbbaa
        aaaaabaabaabaabbbaaaaabbbaabaabbbbaaaabbbbbabaabbaaababa
        bbaaababaaabbaabbbbbaaab
        aabbaaaabbabaaaabbbaaaabbbbabaaaababbaababaabbbababaabbb
        babbbbbaabbbaabbaaaaaababaabbbbb
        bbaabbbbbbaabbabbaabbbabbabaaaaabaaabaaabaabbbaa
        babaababababbaaaaaabbaaa
        bbbaabbaaaababbababababbbbbbaaab
        aaababaabbbbbbaaabbbbaab
        bbaaababababaaabaaaaaaab
        aaababaaabaaabbbbabaaababbbabababababbbbaaaabaaa
        babaabbbaaabbaaabaabbbab
        abbbbbaaaaaaabaaababbabb
        babaababaabbbbabababaabb
        baaabbbbabaaaaabbaaabaaa
        bababaaabbbaaaabbbbbabba
        baabababbaaababbbbbabbab
        bababaaaababbbabaabababb
        bbabbbbabbbbbbbbbaaaababbbbbabbbaabbbabaabaababa
        aaabbbbbbaaababbbbaabbba
        abbbaaaaababbaabaabaaaaa
        bababaaaaabaaaabbabaabababbbaaaaabaababa
        baaaaaaaaaaabababbabbaaa
        baaaabbbbbbababbaabbbaba
        bbbbbbbbbabbbaababbaaaba
        baaaaaaabababbaabbbabaabbaaabbbaaaaabaaa
        bbbbabbbbaabababaabbbaaaaababbbbbbababbbbabaaaabbbabbaabbabbbbbb
        abaababbbbaaaaaabaaabbaa
        babbaabaabbbbbaabbabbbbaabbbbabbbbababbb
        baaaabaababbbaabbbaabbba
        aabaaabababbaabaabaaabba
        abbbabababbaaaaabaaaabbbbbaababbbabbabbbbbaabbbb
        babbababbabbbaababbbababbbaaaaba
        baababbabbbababbbbaaabbbaabbabababababab
        ababbaaabaabababbbabbabaabbbabba
        bbbaaabbbbaabaabbbbbbaaabbabbabaaaaaabbababaaabb
        babbababbaabbbbabbbaaaaa
        bbaabbaababababaaabaaabb
        ababbaabbbbbbaaabbaaabbbababbbbbaaabbbaaabaaabab
        aaabbaabaaaaaabbbabbaabaaabaaababbaaabbaaabaaabb
        abbbaabbbbabaaaaabaaaaba
        abaaabaaaabababbbababbbababbabba
        bbaaaaababaabbbabbbbabba
        bbaabaaaaaaaaabbbbaaabbbaababbbaaaabbaba
        abababbbaababbaababbbababbbabaabbbabaaababbaaabb
        bbaaaaabbbbbbaaaabaaaabb
        bbaabbaabbabaaaabaabbaab
        bbbaaaabbaaaabaaababbaba
        abbbaaababbbbbaabaabbbaaaabbbbbbbaaaabaaababaaba
        aababbaaabbbbbaabaaabbba
        baaaabbbabaaaaaaaabbabbaabaaaabbabaabbab
        bbaababbabbabbaababbaabababaaaaa
        aabbaaaaaaaabbabbaabbabaabababbbbaababaa
        abbabbaaaabbbbbbbbbabaababababaaabbbabbbabaabbaa
        baabbbbabaaababbabababbbabbbbaaabbbbababaaaaaaabbbababaa
        bbaaababaabaabaaaaabaaaa
        bbbbbbabbabbabbbbbababba
        baababbabbaabbabbbababbb
        bbabbbbbaaaabbbbaaabbabbababaaaaaaabbbaa
        bbabbbbababaabababaabbaa
        bbbaaaabaaababbaababbabb
        abbaabbaaaaabbaaaabaabbb
        abaaaaababababbbbbaababa
        aabbbbabaabbaabbbaababbabaaababbabbaababbbabaabb
        baaababbaaaababaaaabbaba
        bbbbaabbaaaabbbaabbbbabbbaaabbabbbbaabbbaaaaaabababbaaabbaabbabb
        abbbbbaabbaabbaaabbaabbb
        bbababaaababbbbbbbbbabab
        babbbbbaabaaaaabbaababaa
        bbababbaababbabaaaaaaababababbbaabaaaabaabbabbaaabbbaaaabaabbbbbbababababaabaabb
        bbaabaabbababbaabbbaaaaa
        abbaaaabaaaaaababbbbbabb
        aababbaaababbbbabababbba
        bbaaaaababbababbbaababbbbaaabbbaaabaabbbabbbaabaaabbbbaa
        aaaabbabaabbabaaabaabbbabbbaabbbbababbbabbabbabb
        aababbbabaabaabbbbbaaaababbbbaab
        bababababbbabababaababaa
        baabbaaaababbaaaabbabbab
        aabbaabaaabaabaaababbbaa
        ababbaabababbaabbbbabbab
        aaaabaabababbaaaabbbaaba
        bbbaabbbababbbbabbbabbab
        aaababaabbbaaabbbbabbaab
        ababbbabbbaabaaaaaabbbaa
        abbbbabbbaabbbaabbbaaabbbaaabbababaabbaa
        aabababababaaaabbbbabbbbbbbbbaaababbbbbabbbababaaabbabab
        baaaabbbabbaabbabbbabababaabbababaabbbab
        babaaabbbbbbabbbababbbbbbaaaaabbaababbbbbbabaababbbaabbaaababbababbbaaabaaaaaaaa
        abbbbbababaaaaabbbbbabab
        bbaaaaabbabaaabababaaabbabaaabba
        ababbbbabbababaaabababab
        baababbabaaaabbbaaaabbbb
        bbabbabababbbabbbbabbbaa
        abbaaaaaababaaabababbbaa
        aabaababbababbabaabbbbaa
        bbbbbbababaabbaaaaaaabababbbbbba
        bbbbabbbbaababbbbabbbbbaababbbbabbababab
        baaaaaaabbaabaababbabbba
        babbbabbaabbbbbbababaaba
        aabaabababbbbabbaaaaabba
        baabaabbbaaabbabaaabbbbbbbaaabbababaabbbbbababbbaaaabaaa
        bbbabababbaabbabbaaabbbabbaaaababbabbbaaabbaabaa
        baaaaaaababababbbbaaaaaaaabbbbabbbbaaabaaaaabbbbaaaaaaab
        ababaaabbbbbabbbbaabbbab
        aabbaabbabaaaaabaababaaa
        abbbbbabbbbabaaabaaabbabaabbabba
        babbbbbbbbbaabbabaaaabba
        aaaabbaaaabaababaabaabba
        baabbabaabbbabaabbbaaaaa
        abbabbaabaaaabaabbaabaabbbaabaaaaabbbabb
        bbbaaaababbbaabbabaabaaa
        babbbbababaaabaabaaababaababaaaabbbaaabbabbabbabaababbba
        aaaababababbbaabaaaaabba
        aaaababababbababbababbba
        bbaababbbaababbabbabaabb
        baababbaaabbaaaaaabbbbbbbababbba
        bababbabaaaaaabbbbababbb
        aaaabaabaabaabaaabbbbaaa
        abbbabbbbabbabaaaaabbaaaaaaaabbaaaaaaaabbaabbbbbbabbbaaabaaaabababaaabaaaabaaaaa
        bbbababbbbabbabaaabbaaaababaaaababbaaabaababaabb
        babababbaaabbaabaaabbbba
        baaabbabbaabaaabbbbabbbbabbbaaaaaabaaabb
        aabaaababbaaaaabbbbbaabbbbaaabababbaabbabbbabbab
        bbbbbaababaabbbaababbbbbabbaabaa
        abaaaaaabaaabbabbbbbaaab
        aababbbaabbbabbbabaababa
        bbaabbaabbaabaabbabbbabbbaaabbbbaababaaabbbabbaabababbbb
        babbbbbbababbbbababababaaaabbbba
        baaabaaaabbbaabbbabbaaabaabbbaaaabbaabbbbaabbbabbbababaabaaaaaaabbbbaabb
        bbbabbbaaaaaaaaabbbbabba
        bbbabbbaaabbaababbabaaaaaabaabba
        aabaaaababbbbababbbaabab
        aabbbbaaababababbbbabbababbbbbbabbaabbbb
        baaaaabbbbbbbbbbaabaabba
        aabaaabaaababaababbabbab
        abaaabaabababbbaabaabaaa
        abbbababababaaabbabaabbb
        aabaaaababbbbbbbabaababbaaababaabbbababbbababaabaaabaaba
        bababaaabbbabbbbababbbababaabaaa
        abaaaaabbbbabaaabaababbaaabbaaaaaabaabbbabbbbaba
        baabbababbababaaaabbabba
        aaababbabababbaabbbbaabbaaaaabaaaabbbbbbbbbabbaa
        abaabbbabaabaabbabbaabaa
        bbaabaaaababbbbbababbbbbbaabaaabaabbaaab
        ababbbbabaababbaaaaabaaa
        aabbbbbaaaabbaabbbbbabaaaaaababbaababbbaaaaababbbbbbbbaaabbbbaab
        aaabaaabbbaabaaabaaaaabbabbababb
        abbabbaaaaaabbabbbababab
        aabaababbababbabbaabbbbb
        abbabbaaababbaabbaabbbab
        ababbbbabaabbbbabbbaaabbabbaaabaabaabbab
        aabbaaaabaaabbbbaabaabbb
        aababbaabaaabbbbbbaaabaa
        bbabaaaabaabbbaaaaaaaaab
        bbbbbaaaabbbbbaabaabaaba
        aaaaaabbababbbabaabbaaaabaabaaba
        bbaaabbbaabaababbababbabbbbbaabbbabababaabaabbbb
        bbaaaaaabbaabbabaaabbbaa
        baabbbaabbbbbaaabbaaaaba
        abbaaaaabababbaaabaaaaba
        baabbbaabbaaabbbbbbbaabbbaabaaaaababbbaa
        abaababbaaaabaababbbbbba
        abbbaabbabaababbbbbbaaab
        babbbabaaaababaaaaaaaaab
        baaaaaaababbababaabbabbbaababaaa
        ababaaabbbbbbabaabaaabab
        baababbabbaaaaaaababaaaa
        ababaaabbabbbabbaabbbaaa
        abaaaaabaabaaabaaabaabbb
        aababbaabbabbbbabaaaabba
        bbbabaaaabbbaaababbababb
        baaaaabbaabbaabababaaaaa
        bbaaababbababaaabbbbabba
        aabbaabaabbaaaaabbaaabbbbabbbabbbbabbbbbabaaabbaaaaabaaa
        aaaaabaaabbbbbaababbbbbbbbbbabba
        baaaabbbabababaabaabababbbbabaaabbbbbbbb
        bbbabbbbbbbbaabbbbababba
        abbbaaaaabbbabaaaabbabaababaabaa
        bbbbbbabbabbbbbaaabaaabb
        ababbbabababaaabaababaaa
        baabaaababaaaaabbbbaaaba
        babbbaabbaabbbaaababbaabbbababba
        abaaababbbbbbbbaaabbbaaababaabbabbaabbbb
        aaabaaabbbaabaabbabbbaaa
        babbbaababbaaaababbbbaba
        bababbabababbbbbbbbbaaab
        abbbbbaaababbaaabbababab
        babbbbabaabbababbabaaabbababbababbbaaababaaaaaba
        bbaaabbabaabbababbbaaabbaabaaabaaabababbbaaabbbaabbaababaabaaaaaabbaabaabbaababa
        aabaabaaaaabaabbabbabababaaaaabaaaabbabb
        abaababbbbbaaaababaaaaababbabbab
        bbaaababaaababbabbabaabb
        babaaaabbaaabbbbabaaaaba
        abababbbbbbababaabaabbaa
        baabbaaabaabbbaabbbabaabaaabbaba
        babbbaabaaaabbbababbaaaa
        ababbbabaabbbbabaabaaabb
        aabaaaabbbababbabbaabbbaabaaaaababaaaaaabbbbabbbbaaaabaabbababaababbaabb
        ababbaabababbbababbbababaabbabaaaabaababbbbbbbba
        abaaabbbbbbabaabbbabbabaababbbabaaaaaaabbaaaaaba
        bababbabbabababbbbbbbbaaaababaababbaabbb
        bbbbabaaabababbbaaabbbba
        bbbbaabbbabbaabaaaababaaaaababaaabbabbabaaaababbabaabbab
        bbabbbbabaabaabbabaabbbb
        babbbbbaabababaababbbbab
        aaaabbababbaaaaaaabbbaaa
        aabbaabbbabbbbbbbbabbaaa
        baaaabbbbbbabaaabaabaaba
        bababbbbabbbbababababaab
        abbabbbbabbbbbbbabababbaabaabaaabbaabbbb
        aaaaabbbabbabaabbabbbabbaabaaaabbbbabaababbbbbbbbbaabbbbaababaabaabbaaaa
        bbaababbabbbabaaabbabbba
        babbbbbbbbaababbababbbabaaabaaba
        aaaaaabbaabbaaaaabaabbab
        bbababbbaaaaaaabbaabbbbababbabbabbbaaabbbaabbaaabbababab
        abaaabbbbbabbababbaaabaa
        abbbbbbbbbaabaaabaaaabababaabbbaabbaabbabaabbbababbbabba
        babaaabaabababbbaaaababb
        abababbaababbbbbabbbbaba
        aaaaabababaaaaaaabbaaabaabbbaabb
        baababababaaabbbbbbabaababbaaaabbbaababa
        aababaabbaabbbaabaababbbabbbaaba
        abababbbaaababaababaaabb
        bbaabaabaaaaabaabbbbbbab
        ababbaaabbbaabbbaaababab
        baabababbaaaaabbbbbbabbbabaabbbb
        abababbabbbbaabbbabaabbb
        aababbababbbabbbbabbbaaa
        baaabbbbabbbbbbbabaaabab
        bbbabaabaabbaabbbaabaaaa
        ababbbbaaabaababbaababaa
        abbbbbaaaababbabbbabbabaaabbabbaaaabbbba
        bbbbabaaaabbbbbbabaabbabbababbbbabbabaabbbabbaab`
    );
}

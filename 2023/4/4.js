// @ts-check
"use strict";
import {intersection} from "../../helpmodule.js";


console.log("A:",
    getInput()
        .split("\n")
        .map(line =>
            line
                .slice(8)
                .split(" | ")
                .map(half => half.trim().split(/\s+/)))
        .map(halfs => intersection(...halfs))
        .map(arr => arr.length ? Math.pow(2, arr.length - 1) : 0)
        .reduce((a, b) => a + b)
)


const array = getInput()

/*
[ 4,2,2,1,0,0]
->
[15,7,4,2,1,1]
*/


const traverseArrayRecursively = (mutatingArray, position = mutatingArray.length - 1) => {
    if (position === -1)
        return mutatingArray
    if (mutatingArray[position] === 0) {
        mutatingArray[position] = 1;
        return traverseArrayRecursively(mutatingArray, position - 1);
    }
    mutatingArray[position] = 1 + mutatingArray.slice(position + 1, position + 1 + mutatingArray[position]).reduce((a, b) => a + b)
    return traverseArrayRecursively(mutatingArray, position - 1)
}


console.log("B:",
    traverseArrayRecursively(
        array
            .split("\n")
            .map(line =>
                line
                    .slice(8)
                    .split(" | ")
                    .map(half => half.trim().split(/\s+/)))
            .map(halfs => intersection(...halfs))
            .map(arr => arr.length))
        .reduce((a, b) => a + b)

)


/**
 * @returns {string}
 */

function getTestInput() {
    return (
        `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`);
}
/**
 * 
 * @returns {string}
 */
function getInput() {
    return (
        `Card   1:  8 86 59 90 68 52 55 24 37 69 | 10 55  8 86  6 62 69 68 59 37 91 90 24 22 78 61 58 89 52 96 95 94 13 36 81
Card   2:  6 42 98  5 17 31 13 36 63 61 | 99 88 14 20 63  5 56 33  6 21 92 13 17  7 31 93 30 74 98 15 11 36 61 42 47
Card   3: 16 58 72 77  1 67 33 82 68  7 | 16 37 15 75 78  1 49 82 22 45 83 58 77 79 50 88 98 67 33 72 42 29 35  7 68
Card   4: 75 35 37  6 29 54 64 57 82  4 |  8 33 27 85 84 54 75 37  4 57 70 29 64 94 17  6 38 41 82 81 71 35 47 51 19
Card   5: 23 85 52 77 81 50 28 59 87 82 | 70 65 12 35  9 41 62 31 47 66 58 15 76 46 68 67 55 86 17 38 18  1 75 79 13
Card   6: 77 64 13 36 68 88 16 75 25 95 | 25 64 55 58 75 66 23 16 27 68 69 88 13  9 39 42 29 65 83 97 32 89 53 96 94
Card   7: 31 12 76 29 48 96 41 49 21 37 | 94 81 65 82 15 33 53 91 88 37 46 29  3 80 95 67 11 27 31 30 49 89 78 41 90
Card   8: 20  5 52 31 46 25 88 95 39 83 | 36 62 48 39 69  3 81 11 61 95 43 85 34 46  5  8 13 45 10 17  2 88 70 52 89
Card   9:  8 85 89 55 77  9 40  5 57 37 | 56 84 62 42 49 50 51 35 75 25 13 74 68  1 99 48 41 94 45 66 17 69 23 29 67
Card  10: 74  1  7 89 97 82 75  9 11 42 | 94 71 41 30 50 58 23 81 35  6 97 57 67 85 98 10 87 43 96 77 31  8 54 72 65
Card  11: 38 29  6  5  4 84 34  1 94 23 | 89 48 51 84 49 33 50 65 79 53 12  8  5  1 35 69 83 57 11 42 67 26  9  6 55
Card  12: 35 83 44 75 36 65 85 87 60 72 |  8  3 91 33 59 29 56 26 21 60 80 88 25  5 51 47 46 44 41 31 62 79 76 89 55
Card  13:  8 56 97 66 32 70 25 76 18 20 | 15 50 91 65  3 67 98 81  9 44 18 92 13 64 96 47 87 46  7 33 66 71 82 88 90
Card  14: 37 52 63 28 19 89 44 76 98 24 | 70 13 59 31 17 84 90  6 62 19 74 36 94  1 15 12 29 95 47 92 23 67 60 58 53
Card  15: 71 70 25 51 95 86 66 37 27 53 | 14 20 30 17 59 96 11 68 46 13 75 44 40 62 32  7 81 91 73 64 93 83 35 80 49
Card  16: 97  4 63 22 75 73  5 52 34 26 | 33 98 64 47 90 94 28 35 43 30 73 51  7 27 10 40 97 37 34 32 22 71 63 21 80
Card  17: 15 18 29 55 14 25 69  4 59 75 | 66  4 82 23 94 22 26 16 55 69 75 20 76 25 29 59 15 18 70  2 28 39 95 14 40
Card  18: 26 40 70 42 37 68 25 76 56 97 | 33 97 28 13 24 50 66 53 67 84 26 68 42 56 92 40 65 76 25 32 70 93 85 37 94
Card  19: 56 61  7 53 48 88 77 73 27 79 | 50 81 29 15 46 19 33 89 54 85 58 73 68 34 84  2 40 27 44 94 88 62 14  1 56
Card  20: 34 89 62 72  6 30 16 53 78  2 |  2 78 73 89 85 40 47 30 34  8 60 23 72 26 62 96  6 91 29 16 57 46 59 53 94
Card  21: 65 18 22 53  8 31 32 84 39  9 | 75 16 70  3 14 61 34  9 38 71  8 49 53 52 81 18 45 82 41 44 32 63 65 51 69
Card  22: 44 80 76 71 36  1 50 87 23 27 |  1 76 83 67 87 68 25 80  8 23 57 29 52  4 50 64 24 44 77 45 27 32 36 73 71
Card  23: 68 90 10 43 73 63 85 47 11 96 |  9 29 53 84  4  6 25 82 11 21 73 83 20 95 66 27 80 26 70 33 85 47 17 74 98
Card  24: 51 68  2 69 39 86 55 70  6 54 | 72 17 14 26 91 52 96 86 66 64 51  2 92 53 36 39 89 42 40 68 55 37  6 54  7
Card  25: 74 92 43 35 29 93 39 53 10 54 | 86 35 10 18 92 43 56 25 44 53 93 39 29 54 11 12 55 61 83 41 21 69 81  4 74
Card  26: 80 19 99 93 76 67 70 60 39  9 | 98  2 26 95 21 49 44  9 31 58 83 46 14 99  4 78 12 56 89 71 66 29 47 64 96
Card  27: 92 52  5 46 49 62 74 72 44 87 | 37 93 24 29  5 88 72 81 62 50 69 33 52 19 23  8 84  1 70 87 95 96 61 63 49
Card  28: 79 80 98 59 54 45 91 16 11  4 | 80 10 98 45 78 91  1 65 12 11  4 82 88 79 54 55  8 99 59 67 68 16 25  3 70
Card  29: 52 30  9 13 44 71 48 63 65 27 | 90 31 17 80 44 39 85 93 58 65  8 63 16 35 40  1 73 68 52  6 97 99 13 10 61
Card  30: 12 19 35  9 82 20 72 61 50 67 | 11 84 77 14 46 29 62 28 81 98 43 12 15 72 35 99 19 97 75  1 20  7 82 60 52
Card  31: 21 58 93 11 50 25 88 77 64 29 | 42  1 31 30 99 69 54 32 88 24 95 15 55 56 14 45 19 33 87 34  7 93 79 23 74
Card  32: 39 87 70 22 46 95 69  3 58 80 | 85 95 24 45 84 22 37 12 33 43 93 96 27 56 70 67 91 58 10 68 69 40 97 82 13
Card  33: 91 42 78 76 77 27 22 98 94 70 | 80 17 63 21 37 52 46 44  2  7 73 86 49 40 23  4 92 60 43 76 29 22 24 69 42
Card  34: 11 50 70 95 32 81 26 57  7 76 | 83 64 65 46 87 56 28 98 90 11 96 40 99  3 16 12 61 19 97 76 51 92 93 34 15
Card  35: 80 28 55 51 98  5 92 54 73 78 | 78 66 10 38 36 51  1 83 94 33 42 17 62 56 59 21 86 25 46 48 63 12 45 31 65
Card  36: 63 76 16 74 10 14 50 73 81 35 |  3 68  1 76 62 53 67 97 13 85 28 65 32 72 34 98 57 20 71 17 64 48  8 56 44
Card  37: 37  1 38 62 56 27 17  8 21 98 | 78 31 14 23 18 62  4  2 97 88 59 34 57 46 81 16 36 58 86 35 72 61  7 80 28
Card  38: 56 30 92 44 33 11 16 45 72 60 | 74 86 59 87 22 81 46 32 52 21 78 10 57  1 13 85 49 75 95 29  8 38 77 54 50
Card  39: 66 83 99 18 79 70 57 25 86 55 |  8 41 50 87 77  7 78 84 53 35 43 26 13 29 30 69 91 65 32 59 31 45 56 15 48
Card  40: 64 46 22 83 33 38 95 75 69 89 | 82 65 45 68 75 33 69 49 22 95 89 74 53 46 38 25 83 64  8 59 81 16 94 27 60
Card  41: 90 26 49  5 76 98 92 64 19 32 | 47 35 49 45 13 67 73 55  4 64 79 63 89 57  5 75 85 91 25 88 74 70 28 68 86
Card  42: 45 52 92 43 76 96  4 86 53 62 | 96 53 55 18 95 44 25 45 47 66 62  2 52 60 10  3  1 37 87 92 98 70  9 86 23
Card  43:  9 64 57 76 21 30 38 98 85  1 | 11 22 92 81 58 59 48 75  2 32 15 84 27 56 86 99 98 66 54 96 20 37 67 12 29
Card  44: 11 41 84  1 76  6 64  8 31 44 | 11  1 33 58 55  6 84 44 70 20 64 41 90 98 72 42  8 38  4 39 76 17 18 69 31
Card  45: 88 12 95  1 24 71 70 49 79  8 | 86 57 43 12 90 78 70 76 24 95 39  8  1 13 47 71 49 75 15 32  2 77 58 79 21
Card  46: 84 91 96 41 17 76  9 36 81  1 | 82  5 99 19 43 20 86 69 37 44 95 41 55 65 96 70 24 47 77 15 31 36  2 79 22
Card  47: 48 80 18  4 40 11 90 17 27 68 | 33 40 15 99 48 12 25 27 44 17 50 94 68 63 11 29 80  4 18 42 32 90 19  2 91
Card  48: 44 30 51 97 22 57 87 17 53 11 | 35 17 81 22 11 30 75 80 74 54 79 16 78 97 89 87 51 37 43 72 53 57 27 94 23
Card  49: 31  2  7 13  9 33 95 41 57 34 | 25 90 77 13  1 95 18 17 34 92 10 33 80  2 82 66 91 73 70 86 21  7 42 47 19
Card  50: 16 44 77 76 23 81 47 29 62 22 | 35 27 83 47 88 76 98 64 31 86 48 42 95 67 25 44 17 51 18 26 12  1 90 99 62
Card  51: 55 68 41 17 28 83 64 62 22 13 | 24  6 23 22 64  7 83 74 44 34 28 68 13 32 26 50 62 17 12 41 97 55 16  1  9
Card  52: 96 79 43 83 37 25 86 24 66 34 | 79 18  6  2 64 62 86 48 65 34 29 68  9 87 76 71  3 69 61 41 40 35 37 55 32
Card  53: 46  1 10 43 47 17 62 52 58 75 | 58 14 52 71 31 75 55 50  8 99 63 23  4 13 10 62 16 17 82 43 56 46 76 83 65
Card  54: 75 33 27 30 87 32 68 89 44 17 | 73 28 31 97 27  9 57 14 15 20 39 82 38 36 43 58 75  4 44 30 33 80 16 48 17
Card  55: 70 11  9 44 14 32 83 10 99 71 | 65 48 21 75 83 71 92  2 34 22 11 14 39 31 63 25 88 15 80 76 96 90 52 70 99
Card  56: 17 38  6 13  3 67 87 64 37 68 | 41  7 53 11  5 62 93 28 65  8 56 32  1 69 47 18 82 40 20 12 80 37 89 43  2
Card  57: 64 29 46 22 61 56 32 20 97 72 | 31 14 29 44 74 22  1 56  4 52 58 45 50 78 67 11 97 72 16 20 27 57 61 83 85
Card  58: 62 85 13 46 79 37 99 81 91  8 | 98 17 85 23 33 94 35  2 47 20  3 11 36 96 43 46 25 60 59 10 22 55 87 58 28
Card  59: 58 36 55 31 69 91 21 51 56 10 | 19 49 73  6 34 27 40 65 11 55 44 67 37 97 14 85 84 89 72 29 64 15 70 68 94
Card  60: 46 40 95 45 75 74  7 38 10 81 | 32 38  4 61 78  5 39 99 86 33  2 98 83 42 11 75 27 73 81  9 54 37 40 12 80
Card  61: 40 29 73 56 91 44 24 77  1  5 | 87 52 80 45 70 48 47 44 69 17 16  6 82 66 37 42 39  3 10 15 97 13 40 99 62
Card  62: 54 55 29 80 70 50 97 89 33 68 | 21  3 76 73  6 42  2 91 19 18 72 92 94 11 77 32 52  8 81 48 35 16 27 12 84
Card  63: 19 45 77 86  6 33 83 91 52 36 | 18 68 60 58 84 29  9 67 21 99 24 80 69 96 25 85 46 50 95 27 61  4 90 63 88
Card  64: 88 23 57  8 93 17 20 42 54 51 | 12 78 82 80 85 43 73 44 84 89 15 36 30 10 25 29  7 99 61 60 86 14 26 28 83
Card  65: 92 13  3 54  4 95 28 72  8 15 | 15 60 66 33 82 95 94 69 71 59 54 99 40 31 83 17 13 80 28 72  4 92 45 87 46
Card  66:  1 42 10 66 94 21 46 95 73 32 | 64 99  3 86 69 71 95 78 60 28  5 19 35 85 67  7 32 16 39 66 89 42 31 43 58
Card  67: 87 50 23 52  5 22 88 82 59 72 | 26 59 48 90 82 55 50 37 87 35  2 52 72 11 40 23 54 88 19 33  5 97 86 22 30
Card  68: 21 89 80 14 73 61  9  7 68 48 | 18 89 38 26 32 21 79 15 14 86 44 55 95 41 80  7  9 29 73  1 13 48 68 28 61
Card  69:  9 82 65 50 57 40 96 36 83 60 | 96 17 88 60 40 74 33 19 41 23 82 89 92 72 50 83  4  7 56 34  9 36 52 57 65
Card  70: 40 63 61 64  3 21 52 11 66 53 | 82 42 13 30 44 72 74 83 45 70 38 33 80  8 64 48 49 73 19 51 85 47 90 84 92
Card  71: 92 24 98 94 89 41  1 93 28 32 | 28 61 92 13 53 89 43 23 32 66 81 93 94 38 90 36 24 68  1 91 98 41 29 67 64
Card  72: 29 61 68  1 78 69 33 45 39 18 | 81 12 36 28 73 75 18 35 42 33 95 68  3 79 39  8 24 82 87 45 11 91 23 51  1
Card  73: 15 33 51 46 80 95 67 71 97 16 | 23  7 93 94 55 33  5 84 28 32 15 59 98  6 46 17 86 43 39 81 36 42 63 71 82
Card  74: 95  9 16 72 30 20 41 97 45 90 | 30 72 49 66 36  9 82 98 95 16 48 57 46 86 47 90 20 85 54 74 73  4 22 60 32
Card  75: 82 55 49 44 75 57 19 59 38  4 | 21 78 35  6 93 75 28 41 83 72 55 22 64 89 70 47 23 29 20 99 48 53 27 65 13
Card  76: 19 31 41 50 27 43 74 21 51 44 | 24 79 71 16 49 37 60 14  8 33 52 40 98  6 34 62 56  4 10 30 39 48 99 67 22
Card  77: 39 23 28 96 98 50 40 34 79 74 | 85 68 79 33 48 23 56 10 89 38 50 71 17 28  6 74 53  4 98 26  8 22 39 31 66
Card  78: 80 31 82 32 70 17 68 44 22 97 | 72  6 95 57 13 94 37 44 70 46 32 69 22 56 40 15 77 88 17 82 31 47 71 18 68
Card  79: 37 53 75 59 72 43 65 74 81 26 | 37 23 11 48 45 86 74  2 59 58 92 12 65 78 16 97 57 76 67 26 18 41 43 54 49
Card  80: 63 41 23 39 40 10 26 93 24 73 | 30 19 74 40 49 90 22 65 78 10 24 93 73 41 51  7 61 15 29 39 63 16 64 23 37
Card  81: 88 68 74  9 97 46 11 87 39 10 | 40  3 14 85 64 43 42 97 90  9 39 13 29 72 47 10 48  4 68 96 99 25 98 65 57
Card  82: 81 48 21 57 65 39 12 66 95 33 | 16 33 79 85 92 52 50 34 15 22  9 45 74 17 24 63 28 72 84 62 58 77 41 64 83
Card  83: 45 33 86 43 63 96 25 88 53 15 | 73 93 79 18  2 26 21 65 28 57 52 88  1 80 33 38 76  3 56 35  6 23 34 24 13
Card  84: 31 74 96 40 36 99 91 92 63 10 | 78 38 59 27 84 34 31 72 19 91 12 45 57 92 32 44 70 50 10 24 87 33 49 65 61
Card  85: 24 20 39 42 78 57 12 64 40 44 | 68 34 77 20 21 12 35 23 97  3 50 65 42 18 84 41 43 69 94 37 76 57 31 45 79
Card  86: 51 48 14 80  3 72 92 15 35 43 | 50 69 18 76 63 30 58 19 65 16 70 55 54 12 87 62 60 68 93 83  1 44 26 98 27
Card  87: 11  4 31 73  5 81  2 32 29 51 |  3 47  9 18 16 19 66 36 23 70 91 64 69 87 51 84 43 65 35 42 63 72 82 54 93
Card  88: 94 10 52 17 78 45 99 66  8 81 | 11 31 71 59 41 88 67 30 47 98 33 21 37 15 53 20 36 58 57 91 39 28 49 70 86
Card  89: 28 68 50 39 98 57 78 71 11 48 | 95 67 79 86 53 17 66 60 77  6 44 54 19 31 74 80 63 99 47 12 91 21 70  8 10
Card  90: 36 90 94 26 59 84 63 38 48 39 | 69 56 39 88 89 97 26 38 83 55 87 13 33 68 95 94 18 48 36 44 59 84 63 90 66
Card  91: 89  3 61 68 53 85 66 81 11 78 | 29 10 81 58 22 47 19  3 36 98 61 85 89 78 39 17 50 53 11 66 68 24  4 86 25
Card  92: 57  5 56 91 64 38 89 47 55 74 | 73 51 48 19 57 98 64  9 74 65 53 47 54 72 69 38 56  1 21  6 91 40 55  5 89
Card  93:  6 86 18 53  9 82 70 81 89 26 | 21 69 75 10  8 86 89 70 47 23 78 96 98 53  6  9  2 81 31 56 39 55 18  1 42
Card  94: 86 78 79 57  3  2  5 69 30 53 | 80  2 53 90  3 30 48 79  5 78 19 35 62 59 97 56 13 12 70 86 10 69 51 55 57
Card  95: 64 51 15 84 25 94 88 80 20 33 |  1 90 50 47 32 15 20 51 84 65 64 55 39 94 19 66 40 25 88 43 80 34 29  3 92
Card  96: 83 88 94 87 79 45 49 91 99 33 | 91 53 72 37 87 40 26 88 33 49 89 99 24 59 94 52 75 83 79 71 62 50 92 28  6
Card  97: 51 91 36  6 68  9 97 78 39 80 | 18 97 68 34 91 61 78  3 23 84  8 16 36 96 65 99 59 80 58 90 14 32  1 41 74
Card  98: 92 41  9  7 52 86 83 40  8 63 | 47 17 14 35 34 22 19 52 79  7 81 92  1 82 93 73 25 58 60 39 59 27  3 16 41
Card  99: 72 47 22  4 62 58 31 91 34 50 | 49 65 94 71 82 25 24  9 64 62 50 60 14 84 16 93  1 46  8 19 47 44 21 10 11
Card 100: 96 18 53 37 54 98 30 84 58 45 | 30 59 89 23  8 35 85  6 36 54 37 17 92 79 27 39  4 61 11 80 19 58 72 51 47
Card 101: 67 26 23 99 78 60 55 82 83 11 | 60 22 91 21 18 29 67 62 34 93 56 59 49 52 38 79 28 11 17 77 76 20  2 99 92
Card 102: 28 94  4 54 77 42 17 44 59 48 | 24 13 61  6  5 83 50 77 76 37 90 71 79 47  8 98 41 75 59 70 89 16 30 17 45
Card 103: 65 69 32 77 64 99 24 71 73 90 | 20 26 72 17 16 46 86  2 28 13 88 45  5 70 95 55 33 65 49 68 50 58 85 83 22
Card 104: 78 17 88 26 65 79  8 18 47 25 | 31 86 76 30 84 44 62 97 81 42 14 72 25 32 82  5 54 69 98 52 68 13 92  3 58
Card 105: 72 63 74 24 23 67 34 26 50 73 | 11 70 76 89 84 92 79 33 82 44 71 48 35  8 59 14 93 15 29 18 55  3 38 77 28
Card 106: 36 40 51 81 60 96 34 49 85 89 | 72 15  7 40 60 97 68 52 36 55 87 96 85 89 49 61 78 34 37 27 76  5 51 81 12
Card 107: 56  6 20 66 35 45 14 19 62 52 | 15 27 93 17 77 19 35 43 80 72 47 88  8 70 71 92 83 82 10 97 25 90 44 69 87
Card 108: 33 44 49 78 10 26 20 65 77 13 | 33 54  2 24 17 20 26  7 93  5  3 77 81 46 92 78 49 65 32 51 44 95 13 29 10
Card 109: 51 25 49 60 83 75 46 43 50 41 | 96 12 53 50 78 92 60 15 76  6  5 34 41 23 25 70 20 75 86 73 30 39 32 48 95
Card 110: 13 22 99 91 47 53 35 34 37 77 | 79 35  1 13 88 57 76 89 81 15 53 56 99 34  6 68 77 32 91 47 87 37  4 24 16
Card 111: 17 21 92 30 95  1 52  5 27 46 | 86 24  6 51 99 68 16 34 19 76 31 10 56 63 58 97 87 26 40 73  8 54 69 18 90
Card 112: 52 83 38 39 95 12 57 14 46 85 | 12 95 85 14 89 50 52 17 92 18 38 34 55 83 16 66 19 88  4 20 46 57 77 39 11
Card 113:  6 25 93  3 52 46  2 13 70  7 | 67 46 40  2  3 77 35 50 57 52 55 75 53 72 97 89 34 84 15 31 23  7 58 25 21
Card 114: 24 53 25 12 17 82 14 50  3 74 | 91 83 57 50 96 68 52 11 56 44 89 95 15 13 54 20 76 48 30 88 53 55 93 65 47
Card 115: 95 81 49 37 80 70  7 60 75 99 | 29 74 98 94 49 59 60 86 75 93 72 56 87 82 76 32 33  4 46 70 27 83  1 35  2
Card 116: 80 67 54 68 98 47 12 56 77 60 | 45 81 47 78 29 39 56 42 80 54 68 90 37  2 16 96  5 38 14 59  7 30  6 67 20
Card 117:  6 59 84 35  1 53 28 77 94 24 | 97 62 40 54 93 44 90 63 26 64 91 75  6  4 22 82 80  2 69 12 77 21 53 49 10
Card 118: 86 30 39 49 32 29 27 68 97 50 |  2 48 36 99 83  4 38  5 47 77 66  1 20 10 14 15 63 78 89 91 85 80 41 28 54
Card 119: 87 78 77 15 85 99  2 35 45 11 | 58 51 62 42 63 90 37 22  8 83 34 31 67 35 72 17 91  7 88 49 13 39 59  4 18
Card 120: 80 21 33 94 26 68 73 35 83  3 | 67  9 94 49 27 50 40 30 60 90 86 91 98 69  6 15 36 71 38 31 17 33 41 70 84
Card 121: 81 17 27 59 99 69 49 14 83 91 | 20 77 55 73 87 36 25 56 54 58 45 68 80 18  3 15 65 31 96 40 75 30 92 42 23
Card 122: 22 44 29 27 77 20 86 34  5 99 | 63 19 97 74  4 39  7 52 87 31 81 45 23 18 53 47 50 73 80  2 70 94 26 66 14
Card 123: 39 40 61 53 56 60 96  5 68 25 | 97 98  6 79 81 32 51 26 59 13 10  2  3 77 88 80 63 90 52 12 87 29 49 18 76
Card 124: 78 19 92 75 56 95  2 16 43 44 | 95  2 56  4 92 66 53 88 21 16 43 78 17 44 85 48 12 19 52 40 69 75 59 82 26
Card 125: 14 43 38  9  8 62 17 28 12 11 | 80 19 38 43 11 34 29  9 32 12 62 28 77 72 17 69 33 96 94 78 67  8 93 90  4
Card 126: 60 95 93 99 11 49 20 75 37 54 | 54 42 19 49 92 95 11 34 74 93 60 52 99  5  7 75 20 12 68 98 43 50 36 37 56
Card 127: 73 24 71 80 58 62 17 41 61 43 | 68 43 79 58 87 67  6 62 20 41 93 71 27 88 23 17 24 42 52 13 61 80 81 84 73
Card 128: 99 10 91 58 70 47 80 30 96 57 | 46 57  3 72  4 87 70 10 59  7 96 48 28 97 91 58 47 76 36 80  8 23 19 30 99
Card 129: 50  3 78  8 80 11 57 52 94 47 | 63 60 38 92 50 65 91 88 53 17 96 42 66 28  1 25 75 76 73 87 90 36 82 24 68
Card 130: 38 42 33 70 61 58 73 88 74 29 | 83 92 77 58 56 74 55 93 38 46 29 28 37 68 33 73 91 61 12 64 25 88 42 31 70
Card 131: 92 46 42 96 12 14 95 84 57 78 | 11  6 82 41 73 55  8 93 76 98 99 86 31 21 78 29 32 70 62 23 95 15  9 77 52
Card 132: 40 97 45  2 19 99 29 98 37 20 |  5 56 36 21 33 83 32 98 66 20 16 37 97 93 40 78 43 77 99 29 87 96  2 30 39
Card 133: 97 81 10 23 75  6 53 27 35 47 | 37 93  8 92 68 65 15 85 25 67 61 56  5 42 88 18 76 87 60 46 59 94 86 57 91
Card 134: 96 66 54 61 10 85 98 40 13 41 | 90 58  9 38 28 24 57 52  5 81 80 62 34 54 79 49  2 95  1 18 41 65 82 32 42
Card 135: 54 79 66 83 45 35 10 27 41 94 | 67 42  4 89 51 95  1 63 90 40 65 23 98  7 86  9 97  3 11 61 92 69 77 80  2
Card 136: 37 86 74 45 70 95 33 28 82 32 | 67 13 62  8 63 41 78 40 24 91 11 48  7 85 59 81 44 37 45 90 66 70 35 33 94
Card 137: 75 89  5 18 91 57 37 63 85 40 | 27 34  9 51 76 41 69 86 95 81 36 82  1 38 10 99  7 47 21 77  8 30 19 71 60
Card 138:  9 67 82 54  5 98  7  6 40 96 | 13 83 90 88 44 17 82 24 47 84 23 85 62 45 72 91 58 46 38 32 25 79 70 59 33
Card 139:  1  6 65 80 35 91 63 22 60 50 | 79 84 81 92 75 36 88 90 86 16 53 17 44 43 15 94 73 51 14 42 33 98 74 57  4
Card 140: 24 43  8 76 91 79 42 68 81 70 | 65 36 56 57 16 69 38 86 85 37 22  9 98 33 45 25 95 28 52  2 27  6 14 46 55
Card 141: 62 32 78  2 21 45 75 48 91 85 | 38 42  3 20 21 56 48 75 86 45 40 91 33 73 25 85 16 78  2 24 72 26 32 61 62
Card 142: 90 10 32 43 65 91 24 22 34 62 | 91 26 72 81  7 11 32 10 90 33 34 87 35 24 29  3 59 62  2 65 22 43 57 74 79
Card 143: 16 52 66 56 50 57 77 71 73 40 | 71 43 80 59 36 39 77 40 11  4 64 16 85 52 49 73 56 57 10  9 86 46 66  6 50
Card 144: 61 56 14 66  2 73 39  8 33 97 | 26  8 47 67 16 18 37 39 14  9 61 33 97  2 66 56 73  4 75 11 62 68 49 44 34
Card 145: 75 65 92 85 73 18 70 95 49 22 | 25  8 49  2 16 13 97 33 93 66 75 85 73 71 65 18 22 53 92 38 44 50 62 70 95
Card 146: 78 62 86 83 26 23 80  2 77 87 | 23 96 38 63 83 22 20 86 77 21 67 66 75  5 36 47 26 61 80 87 82 16 78 46  2
Card 147: 84 36 18 42 50 12 64 61 99 91 | 18 75 61 76 74 12  1 41 28 91 64 24 55 36 27  3 84 99 42 50 95 83 31  7 22
Card 148: 61 91 60 18 68 50 73 29 23 87 | 18 76 33  5 27 97 31 37 21 38 56 91 60 87 23 55 58 61 50 45 14 29 72 68 73
Card 149: 46 97 81 18 85 95 91 43 72 87 | 32 23  1 49 66 96 24 16 42 22 81 51 72  8 20 37 44 71 45 25 90 88  5 94 74
Card 150: 17 99 20 36 33 78  9 87 81 84 | 37  8 79 65 31 99 45 36 81 90 73 11 49 46 87 84  3 33 19 12 57  9 20 48 17
Card 151: 35 46 49 80 66 75 99 77  8 53 | 75 24  5 67  4 53 49 61 19 23 26 97 93 77 46 66 35 40 99 39 30 80 76 25  8
Card 152: 11 80 39  1 30 36 16 85 33 66 | 26 66 60  2 94 16 81 48 80 43 85 96 51 68 33 63 88 54  6 36 37 59  5  1 47
Card 153: 49 86 25 83 96  8 93 88 24 57 | 66 60 51 33 57 95 49 79 63  2 93 58 65 70 55 76 87 27  1 46 11 52 80 84 54
Card 154: 38 41 75 30 91  6 14 66 47 57 | 34 56 11 70 71 60 22 81 41 74 39 67 79 98 87 42 62  3 32 57 55 46 33 16 51
Card 155: 25 31 45 21 68 57 73 20 71 32 | 20 18 98 53 60  7 38 10 12 19 77 64 79 74 17 33 83 88 28 16 32 21 89 69 65
Card 156: 19 35 39 37 84 50 62 95 96 56 | 89 24 92 67  4 47 54 59 72 84  3  5 76 96 23  1 58 86 32 21 78 88 68 44 48
Card 157: 24 68 39 72 23 93 81 51 45 25 | 96 33 76 99  5 70 93 18 24 68  6 64 49 92 45 80 15 77  4 57 25 13 44 28  2
Card 158: 51 18 46 75  2 80 20 72 17 29 | 97 55 47 23 20  4 39 24 64 11 31 16 90 29 93 72 18 45 27 46 61 70 80 68 67
Card 159: 34 10 70 56 51  9 99 32 15 74 | 13 31 44 56 63 20 99 81 40 78 84 90 50 52 85 19 41 10 45 71 22 28 26  8 14
Card 160: 69 49 13 23 36 64 24 18 57  7 | 54 62 96 36  7 10 28 64  1 85  3 63 73 21 27 37 49 47 75 34 97 30 77 32  9
Card 161: 35 16 44 25 42 62 95 77 89 34 | 29 26 11 78 97 23 28 36 10 96 54 81 17 22 80 27 77 44 41 34 20 51 76 24 75
Card 162: 60 17 28 76 67 12 41 15 53 70 | 41 19 35 64 65 15 37 22 80 66 55 40 45 81 17 98 85 74 57  4 16 91 49  5 68
Card 163: 57  3 82 45 28 70 50 17 85 48 | 68 87 47 62 58 31 88 92 98 90 46 29  5 85 93 24 95 99 39 75 55 33 65 49 14
Card 164: 33 81 13 87 53 48 79 70 17 91 | 92 57 21  4 36 27 62  1 46 80 31 72  5 94 58 99 75 67 83 25 51  9 26 52 63
Card 165: 55 70 45 36 72 59 81 16 69 98 | 60  7 43 54 66 78 83 23 25 94 48 67 26 56 53 58  2  4 27 31 34 39 49 85 74
Card 166: 94 64 48 15 36 35 79 23 77 33 | 78 80 25  5 18 34 92 69 84 86 26 13 89 65 29  3  7 39 71 31 42 21 51 48 55
Card 167: 13 34 54  2 20 16 89 79 88  9 | 47 75 25 82 72 76 51 37 95 22 71 55 54 74  9 33 97 83 27  2 79 28 17 91 24
Card 168: 33 82 70 88  7 46 96 67 26 89 | 73  8 22  1 59 45 92 24 43 41 15 64  3 58 83 63 57 82 20 18 91 13 77 60 19
Card 169: 91  4 32 45 55 98 80 52  9 33 | 20 45 37 28 69 61 60 81 12 33 51 74 15 97 50 86 72 99  2 41 70 58 19 40 39
Card 170: 45 72 63 87 70 33 89 41  4 18 | 25  9 19 49 26 63 11 73 54 64 70 37 45 82 30  1 90 24 87 42  4 40 91 71 18
Card 171: 74 99 84 26 66 10 95  8 75 68 | 34 62 37 97 57 65 75 74  6 67 68 96  4  1 95 55 52 82 13 47 63 48 94 26 77
Card 172: 62 99 47 83 94  8 51 70  9 76 | 94 99 83 26 57 76 18 67 22 80 61 34  8 39 65 78 13 81 70 51 62 93  9  3 33
Card 173: 42 99  9 18 48 61 36 83 13 84 |  7 69 44 61 35 54 27  3 60 55 99 84 32 48 18 19 72 42 89 65  4 92 79 75 13
Card 174: 48 34 46 43 53 51 72 35 19  3 | 72 43 57 51 14 34  2 36 53 25 94 81 87 61 19 35 23  4 99 26 48 46  7 90 86
Card 175: 46 59 27 28 82 13 99 35 18  6 | 36 90 70 87 64 31 42 71 50 27 76 45 99 32 21 20  9 88 23 93 17 46 80 85 59
Card 176: 92 44  3 29 10  7 66  4 57 21 | 36 68 61 87 65  1 53 95 60  2 34 47 75 42 82  8 83 79 54 74 93 26 69 22 32
Card 177: 89 23 17 80 22 65 98 11 94  3 | 91 28 37 99 63 60 42 87 23 98 71 39 82 93 57 68 62 13 75 77 22 26 53 48 90
Card 178: 11 75 56 47 64 88 91 66 59 12 | 41 97 40 26 42 67 23 28 31 99 85 30 11 94 81 55 74 89 52 64 65 69  3 38 43
Card 179: 31 97 46 27 96 57 45 30 64 82 | 36 42 81 54 85 31  1 29  8 84 28 50 64 76 10 67 77 39 21  4 75 78 99 47 12
Card 180: 10 32 84 45 87 16 82 14 95  8 | 21  8 41 66 56 42 77 83 90  9 55 61 19 38 23 50 28 62 99 58 33 11 84 39 98
Card 181: 90 54 11 49 95 88 15 75 18  2 | 30  5 68 41 71 52 56 10 50 60 81 51 27 94 42 55  6 87 78 66 72 96 36 12 62
Card 182: 73  1 91  2 99 75 30 29 48 89 | 46 51 34  7 18 57 64  9 23 68 16 19 85 70 66 72  5 87 12  4 25 97 10 89 60
Card 183: 16 20 31 39 75 36 78 33 88 69 | 57 17  8 70 79 37  6 48 51 85 30 45 98 26  3 83 29 58 87 54 61 35 74 43 66
Card 184: 69 50 38 49  9 96 75 82 80 14 | 23 99 30 83 78  9 50 40 14 74 75  8 37 69 82 42 26 49 96  1 38 58 80 84  7
Card 185: 44 66 49 89 36 28 30 85 32 68 | 44 28 66 72 33 65 31 67 36 30 99 89 12 25 32 76 68 85 48 90 78 92 13 49 82
Card 186: 46 48  6 52 24 19 51 76 11 47 | 93 63 78 33 31 86 68 10 74 70  3 83 36  4 54 79  8 77 38 57 97 27 22 29 53
Card 187: 49 12 70 83 40 68 15 78 88 95 | 72 31 40 69 37 65 71 35  9 44 49 95 89 68 50 41 20 58 16 60 90 22 28 96 10
Card 188: 86 47 96 63 55 29 91 31 59 23 | 55 77 30 23 91 75 86 47 29 31 78 67  4 92 96 26 63 37 80 54  1 11 32 15 98
Card 189: 40 97 46 63 66 58 54 35 33 59 | 75 17 57 71 55 62 43 96 85 98 83 37 40 23 65 94 93 25 72 78 46 47 28 33 56
Card 190: 94 41 57 47  6 24 65 59 44 20 | 95 86 26 77 87 47 18 27 16 85 57 61 66 37 35 38 23 42 50 60 98 71 62  8 25
Card 191: 57 32 39 19 48 77 27 96 10 61 | 68 82 86 70 75 35 11 24 69 56 45 95 67 44 25 36 90 47 74 39 27 55 66 87 12
Card 192: 50 94 12 32 88 76 95 23 46 49 | 60  9  6 37 42 50 96 15 95 66 34 94 91  4 33 29 14 92 16 80 98 64 12 57 36
Card 193: 32 25 53  7 71 31 80 42 92 63 | 84 78 28 90 27 24  5 67 63 75 81 12 31 55 46 60 89 98 37 16 86 23 72 43 22
Card 194: 79 47 88  9 97 76 62 23 72 84 | 77 78 67 65 91 79 64 38 41 26 89 16 10 71 86 82 47 75 61 11 34 66  7  3 70
Card 195: 22 47 95 56 66 98 44 73 50 30 | 92 33 28 65 16 60  8 45 56  2 47 84 25 55 58 17 35 88 38 95 81 63 43 57 98
Card 196: 76 23 10 43  9 32 46 62 84 79 | 22  4 49 42 23 55 13 35 90  9 24 52 65 26 95 94 18 37 47 79 56 59 54 86 48
Card 197: 65 44 24 84 49 62  6 54 42 20 | 25 72 90 58 77 60 59 73 11 39 91 19 21 28 62  8 41 66 87 56 64 52 80 82 24
Card 198: 63 44 64 86 78 25 92 90 99 70 | 62 29 51 81 21  6 75 58 54 90 18 10 59 98 97 41  4 52 53 64 80 28 92 11  9
Card 199:  7 15 47 28 44 22 74 76 40 56 | 78 24 95 38 25 36 77 46 89 45 18 42  3 75 62 90 52 81 83 85 80 26  4 23 71
Card 200: 85 88  3 44 54 19  9 71 29 53 | 72 42 56 55 33 68 65 86 58  3 57 83 12 31 96  9 13 62 70 80 17 29 41 27  6
Card 201: 10 51 69 82 56 40 94  9 90 78 | 57 92 89  1 99 87  5 73 80 28  2  6 67 70 33 18 17 78 16 95 69 44 38 24 55
Card 202: 44 47 79 75 24 50 86 80 62 87 | 66 91 36 15 28 81 57 69 30 14 10 20 27 18 77 46 95 72 39 23 38 34 60 37 26
Card 203: 59 31 79 81  4 21 24 54 48 62 | 37 90 25 51 70 77 18 17 97 52 40 75 43  3 91 50 87 67 42 15 14 63  6 13  5`);
}


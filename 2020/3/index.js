// import { find4 } from "../../helpmodule.js";
"use strict";
var testInputArr = getTESTInput();
var inputArr = getInput();
var iterateOverForest = function (forest, stepY, stepX, positionY, positionX, treesEncountered) {
    if (stepY === void 0) { stepY = 1; }
    if (stepX === void 0) { stepX = 1; }
    if (positionY === void 0) { positionY = 0; }
    if (positionX === void 0) { positionX = 0; }
    if (treesEncountered === void 0) { treesEncountered = 0; }
    return positionY >= forest.length ?
        treesEncountered :
        iterateOverForest(forest, stepY, stepX, positionY + stepY, positionX + stepX, forest[positionY][positionX % (forest[positionY].length)] == "#" ? treesEncountered + 1 : treesEncountered);
};
log("test a:", iterateOverForest(testInputArr, 1, 3));
log("a:", iterateOverForest(inputArr, 1, 3));
log("test b:", iterateOverForest(testInputArr, 1, 1) *
    iterateOverForest(testInputArr, 1, 3) *
    iterateOverForest(testInputArr, 1, 5) *
    iterateOverForest(testInputArr, 1, 7) *
    iterateOverForest(testInputArr, 2, 1));
log("b:", iterateOverForest(inputArr, 1, 1) *
    iterateOverForest(inputArr, 1, 3) *
    iterateOverForest(inputArr, 1, 5) *
    iterateOverForest(inputArr, 1, 7) *
    iterateOverForest(inputArr, 2, 1));
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (typeof (console) !== 'undefined') {
        console.log.apply(console, args);
        document.querySelector('pre').innerHTML += "<br/>" + args.join(" ");
    }
}
function getTESTInput() {
    return ("..##.......\n    #...#...#..\n    .#....#..#.\n    ..#.#...#.#\n    .#...##..#.\n    ..#.##.....\n    .#.#.#....#\n    .#........#\n    #.##...#...\n    #...##....#\n    .#..#...#.#".split("\n").map(function (line) { return line.trim(); }));
}
function getInput() {
    return (".##.............##......#.....#\n        .#.#................#..........\n        ...#..#.##..#.#......#.#.#.#..#\n        ..#......#........#..#..#.#.#..\n        .......#....#..#..#.......#....\n        ..#..#..##.#...#........#.###..\n        ..#...#..#.....#.##....#.......\n        ....#..###.#......#.##..#...##.\n        ..#..........#.##.#...#........\n        #...#............##....#..##...\n        .......##....#.....##..#.#..#.#\n        ..#..#..#...#....#....#....#...\n        .#...#.##........#####........#\n        ..#..#......#.....##...#.......\n        ....#......##....#.#....#.#..##\n        #.#.##....##..#.........#.###..\n        ##..###..#..#.......###.......#\n        ...#.#......#.........#....#...\n        .....#..........#.....##..#.#..\n        ....##......#.#..#....#.#......\n        ..#.....#..##.......##......#..\n        .........##.##.#..##...........\n        ....#...#.....#....#.#.###....#\n        .##.#..#...##..#.......#......#\n        ##..#..#..####..#.#..#...#.....\n        ..###..#..#..#.###..#....#.##..\n        ......#...###.#.#.....#........\n        .....#...#.#...#.......#.....#.\n        #........#..##...........#..#..\n        .#.##.##...#.....#.#....#..#...\n        ..##.##....#.....#....#....##..\n        #.........##...##..#.....#..#..\n        ........#.####....#...##.....#.\n        .#.#...#..#..#.#......##.....#.\n        ..#..........##..#.#.#....#...#\n        #.......#...#...#.....#.##.#...\n        ..#.....#..#.....####.#..#.#.##\n        ...#.#..#...#.....#...#.#.#.#.#\n        .#..##....##.....#..#....###...\n        ....#......##.#.#.....#......#.\n        ..#.#...#......#.....##.......#\n        ..#...###...#..#.#...#..#.....#\n        #..............#.....#....##..#\n        .#...#.......#.............#...\n        ..###....#.##........#.#.......\n        #.##.......#..#............###.\n        #...#..##.#.#............######\n        ..##..#....#.#.###...#..##.##..\n        .#...#.###.#....#...#....#...#.\n        #...#.......#...........#...##.\n        ##.#......#####.............#..\n        ....#..#......##..#..........#.\n        #.....#.....#.#.......#...#...#\n        ....#...#.#..##........#.#..##.\n        ..##.....##............#.#.###.\n        #.........#........#..###......\n        ............#..................\n        .#.###...####...#.#..#......#..\n        ...##.###.#....##.#..####..#.##\n        ..#####.#.##...#.#...##.##....#\n        ........##...#...#....##.....##\n        #...........###...#.#...##.#...\n        ##......#...#.......###........\n        ..#..#.##.#..###....#..#.###.#.\n        ...#.#.#...#....#.##..#...#....\n        ........#.##...##.#.....##...##\n        .#..........##..#..#..#.#...#..\n        #.#...#.##.#....#.##..#........\n        .#.#.#....##..##.####.....###..\n        ..#....##....#..#..#..##.......\n        ..##...#.......#...##.#....#...\n        ...####.#.#...........#.#...#..\n        ....####.....#.#.....#....##.##\n        ..#.....#.#.............##....#\n        #.#....#####.##..####.#...#.#..\n        #.#....#.##.#.#.##..#.#...#....\n        ......#.......#.......#.....#..\n        ..#.....#....###.###..#..#..#..\n        #..#....##.###...##.....#......\n        ..#..#...#..#.##..........#....\n        ...#.#.#......#....#.##..#..##.\n        ....##.#....#..#...##....###...\n        ##.#.###.....#..#.#.#..#.....##\n        ##..#.#........#...#..#.#......\n        ....#.#.......##.#...........#.\n        .......##...#...#...#.....#....\n        .....#....#..#..###.#...#......\n        ............#.#..#......#.#....\n        ...##..#.##....##..##.#......#.\n        #.#.#......#.#.....#.#.#..#.#.#\n        ...###..........#..#..#.##.....\n        ......#......#......###..##....\n        #...##...#....#....#..#...#.#..\n        .......#..#......##.......#....\n        ...#..#..#.....#.....#......##.\n        ..#....###..........##..#...#..\n        ..........#..#.#...#......#..#.\n        #...#....#.##.........#.#.#...#\n        .#.#.#...#.#...#.#..#..#....#.#\n        #.##....#..#.........#.##.##..#\n        ..#.#..##.#....#.###.#...#....#\n        .#.......#...#.#.........#....#\n        .......#...#..........#.#..#...\n        ...#.....##..#....#...###...#.#\n        #....##.##..........#.......#..\n        .##..##......#...#....#.##....#\n        ....#.....##...##.#..#.........\n        ...#.#..##.#.#..#.......#....#.\n        .#...#.#.#.#..#..#.##.......#..\n        ..#..##...#.#..#.......#.#####.\n        .......#.#...........#....#.#..\n        .#.###..........#...#..#...#...\n        ..#.#............##......##....\n        ...##..#...###...##....#.#.##..\n        ....#.##...#..#.#.#...........#\n        ....#..#....##.....#.##.#.....#\n        ..##......##.#.........#....#.#\n        ###...#...#..#.#...#...........\n        .####.....#.....#.#....#..#....\n        .#....#..#..#..#...##.....###.#\n        #....##.#....#.##..#......##..#\n        .........#..#.#.....#.#....##.#\n        .....#.#...#....#.#...#....#..#\n        .#...#.#.....#.#......#.#......\n        #....##.......#.............#..\n        #..#...#........##..#..#......#\n        ####..##.#..##..#.........####.\n        .#.##..#.#..#.#.#.##...#..#.#.#\n        .##.#..#............#......#...\n        ###....#.##....#..#...#........\n        .....#..###..........#..#......\n        .##..##.....#..##....#...#.....\n        #...##...........#..#...###..#.\n        #..##....#...#.##.##....#......\n        ...#...#..#.#.......##.......##\n        ....#.....#..#...#.........#.#.\n        .#...##.#......#.#..#..#...##..\n        ...##...##.##...##...#..#......\n        #..##.#..#..#............#...#.\n        ..#.....#.........#........#.#.\n        #.#...#...#......#.#......#....\n        .##.....##.#.#....#.##...##.#..\n        .##..##.#.#....#.##............\n        .#.##.....##.#...#...###....#..\n        .#..............#.#....###.###.\n        ....#..#...#.#.#..........#.#.#\n        .#.#..#.#.#...###..#...##......\n        .#.#.....###......#..........#.\n        ........#.##...............#.#.\n        ...#.#.#......#..#..##........#\n        ..#.##......#.......#..#......#\n        ...#...#...#...#..#..#........#\n        ..#....#.....#....#..##........\n        .....#..#...##....#......##....\n        ...##..##..#..........##....#.#\n        ..#....#..#...#.##..#.....##...\n        ###...#.#....#........#.......#\n        ......#...#..#....###.........#\n        ..###.#...#...#...#.#..###.#...\n        .##.#.......#.#..#..#......#.#.\n        ...##...........#.#..#.#..#....\n        .......#.....####.#.....#...#.#\n        ......##......##.#.#.#...#.#..#\n        ..###.#####..#....#.#...#..##..\n        .....#..#......#........#......\n        #..##....#.#.##....#....#......\n        .#....#.##.####.##..#..#......#\n        #...##...#.#...##.#.##.##...#..\n        ........#.#........#.#...#..#..\n        .#....###..#......#.##.###..#..\n        .#..#..#..#..#...#.#.........##\n        ....#...#..#..............#....\n        ........#...##.....#.......#...\n        ..#......#.#..#.#..#.#.#...###.\n        ....#...####....###....#......#\n        #...#.#...................#.##.\n        ..#.#.###...#....##....##......\n        #..##..#.........#....#....####\n        .#....###...#.#...#......#...#.\n        ......#..#.#..#.##...#.#.#..#..\n        .#...#.#.....#..##......#..#...\n        ##.#..##.....##.#.#.......##...\n        .##.##.##..#...#.#.##.##.......\n        .#.#......#.....#...#.#..#.....\n        ...#...........#..#.##..##..#..\n        .....#...##......#........#.#..\n        ....#..............##.........#\n        ..####.#....##..##......##.#.#.\n        .#.#..#...#..........#...###..#\n        ....#.#.##.....###.#..#.##.....\n        .......##.#.#..#...#...##.#....\n        ...#.##.....#....#...#...#.....\n        ##.#.##..#..#.#.....#.#..#.....\n        ..#..##........#....###..#..#..\n        ..#.........##.....#......#...#\n        ...##..........##......#.#.#...\n        #.....#..#..#......#......#....\n        .##...#..##....#.......##..#.#.\n        .#...##...##......####.##.#....\n        .....#.........#.#.####......#.\n        ...#.....#.#.........##..#.....\n        ##.#.###.#..#.#..#............#\n        ...##..#.#....#....#..#........\n        ..#.###......#...#.#.....#...#.\n        ....##.##..#.....#...#.#.#....#\n        .......#.#..#...........#.#....\n        .#.#..##.#.......#.#..#.....###\n        ...#.#.....#.#..#.##..#...#.#..\n        ...#......##....#..............\n        ......#...#....................\n        ..#........#...##.##.#..#.#.#..\n        .#.###.#.##..##..#....##....#..\n        .....#..#.#...#.#..#..#.......#\n        ..........#.##.#..##..####.....\n        ............#.#......#.........\n        .#....#..#......#.....##.......\n        .....#........#.....##.#..#.#..\n        #..#.##...#.#.....#...#.####...\n        ......#...#....#.##..##.#...#..\n        .#.#.##......##....#.#....#.##.\n        #.#.#....#.###....##....##.....\n        .##..#...#.##......#..#..#...##\n        ...#....###....#...........#.#.\n        #.#.##.##...##....#....##.#...#\n        .#.#######.......#......#......\n        #......#...#.#.#.###....#.##..#\n        ......##..#..##.........##.#.##\n        ....##...#.#....##.....#.....#.\n        ..#.#........##........#.#..##.\n        .....#..#.##.....#.....#..#.#..\n        .#..............#.......#......\n        .............#..#..........#...\n        .#..#.##....##.#..#...##.......\n        ...........#..#.......#.#....#.\n        .#..#..........##...#.#.#...#..\n        ......#....#..###....#......#..\n        .#...#...##..#..#..##..#..#.#..\n        #.#.........#....#..........##.\n        ...##..#..##...#....##...##.##.\n        ..#....#.####.........#.....##.\n        .....#.#...#.#...#.##.#...##..#\n        #...#.....#..#.......#...#..#..\n        ..#.......#..##.#.....#....#...\n        .#.....#..##.#.....#...#.#...#.\n        .....#.##..........##....#...#.\n        ...#....#...#........##...#...#\n        ....##...#....#..........#.....\n        ...#....##..#..####..##.#...#.#\n        #...###.###..#....##.#.........\n        .#.......#......#.........#....\n        ..#..##..#.........##..........\n        #......#.#.##...#...#####......\n        ......#.....####......#....#...\n        .........#..#..#...#....#.#....\n        ....#........#...##....#.......\n        ...##.#...#..........#....#....\n        ........#.......#.##..#..#...#.\n        ....#..##...........#.....#..#.\n        #....#...............#.#....#..\n        .#........#....#.#...#.......#.\n        #.......##..........#.......#..\n        ...#....#...##.#..#.......#....\n        #..#.##...#.#...#...#...#....#.\n        ###...#...#....#....#....#...#.\n        ##......#.#.......#....#..#....\n        ......#......#....#.#.#..###..#\n        .#.#.##.....#..#..........#....\n        ##...#.#.#..##....#.....#.#....\n        #.##...#...#.#...####..#.......\n        .....##..#.#.#....#..##..#.#...\n        ....###.#.........##.....#.....\n        ......##...........#........#.#\n        .#.........##..................\n        .........##...#.............#.#\n        ......##...#...#.........#..##.\n        #..#.......#..##.......###.....\n        ....#.#.....#............##....\n        .....#..#......#....#.....##...\n        ##......##...................#.\n        #....#............#.#.###.##...\n        .#.....#........#.....#...#....\n        ......##.......######......##..\n        .#....##....#..###....#.......#\n        ..............##.#..#.......#.#\n        .#..#..........#..#.##.........\n        ......##.#..#......#.#....##.#.\n        #.....#.##...#.....#...#..#...#\n        .#....#..##.....#.....#.#.#....\n        ..#......#.##..#.........#.#.#.\n        .#..##...#...#.....#..#..#.#..#\n        #.#.##.##.................#.#.#\n        .#..#.#..##.#.......#.......##.\n        #...#...#..##...#...##...#...#.\n        ....#......#..#...#.....##..#..\n        ..............##......#...#.#..\n        ..##..#.......#..#..###.#.#....\n        .#..#..#...#.......#...#...##.#\n        .#...#.......###..#.##.###.....\n        ##.#...#......#.....#..#.......\n        ##....##............#.....#..#.\n        .....#...##......##.....#....##\n        #...##..#....#..##....###.#...#\n        .....#..#.#.....#.##..##....#..\n        .#.....#.#........#...#.#......\n        ......#....#.#........#.#......\n        .##..#...............###...##.#\n        .......###.#.#......###.....#..\n        .......#..##...#....#.##..#.##.\n        ..#.......##.......#.....#....#\n        .#......#....#..##..#.#.#..##..\n        ###......#...#..#.............#\n        .#....#..#.#......##...........\n        .#....#.##.....#..#.......#..##\n        ....#...#...#..#.....#..##..#.#\n        #.#.#.......##.#..#.#....#.....\n        ##.#.......#...#...#.#......##.\n        #....#.#...........#######.....\n        ...#.#.##.#......##..###.......\n        ..#.#....#..#.................#\n        ........#..##..#.....#....#.##.\n        ...#.#..#..#..#..............##\n        .##.......###.#......#....#..##\n        ..##.##.#......#....#..#...#..#".split("\n").map(function (line) { return line.trim(); }));
}
//# sourceMappingURL=index.js.map
const find4 = (x, y, matrix, wantedChar) => {
  wantedChar = wantedChar || 1;
  let returnable = [];
  if (x > 0 && x < matrix[y].length - 1) {
    matrix[y][x - 1] === wantedChar
      ? returnable.push({ x: x - 1, y: y })
      : false;
    matrix[y][x + 1] === wantedChar
      ? returnable.push({ x: x + 1, y: y })
      : false;
  } else if (x === 0) {
    matrix[y][x + 1] === wantedChar
      ? returnable.push({ x: x + 1, y: y })
      : false;
  } else if (x === matrix[y].length - 1) {
    matrix[y][x - 1] === wantedChar
      ? returnable.push({ x: x - 1, y: y })
      : false;
  }
  if (y > 0 && y < matrix.length - 1) {
    matrix[y + 1][x] === wantedChar
      ? returnable.push({ x: x, y: y + 1 })
      : false;
    matrix[y - 1][x] === wantedChar
      ? returnable.push({ x: x, y: y - 1 })
      : false;
  } else if (y === 0) {
    matrix[y + 1][x] === wantedChar
      ? returnable.push({ x: x, y: y + 1 })
      : false;
  } else if (y === matrix.length - 1) {
    matrix[y - 1][x] === wantedChar
      ? returnable.push({ x: x, y: y - 1 })
      : false;
  }
  return returnable;
};

const get8 = (x, y, matrix) => {
  const positions = [
    { y: y - 1, x: x - 1 },
    { y: y - 1, x: x },
    { y: y - 1, x: x + 1 },
    { y: y, x: x + 1 },
    { y: y + 1, x: x + 1 },
    { y: y + 1, x: x },
    { y: y + 1, x: x - 1 },
    { y: y, x: x - 1 },
  ]
  const returnable = [];
  positions.forEach(pos =>
    matrix[pos.y] === undefined ? "" :
      matrix[pos.y][pos.x] === undefined ? "" :
        returnable
          .push(matrix[pos.y][pos.x]));
  return returnable;
}



const num2letter = chr => String.fromCharCode(97 + chr);

const hex2bin = (hex, nulls) => {
  const nullAmount = nulls || 4;
  return (
    [...Array(nullAmount)].map(e => "0").join("") +
    parseInt(hex, 16).toString(2)
  ).substr(-nullAmount);
};

const num2hex = num => num.toString(16);

const swapPositions = (arr, index1, index2) => (
  ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]), arr
);

const arrayRotate = (arr, reverse) => (
  reverse ? arr.unshift(arr.pop()) : arr.push(arr.shift()), arr
);

const trampoline = fn => {
  while (typeof fn === "function") {
    fn = fn();
  }
  return fn;
};

const uniqueShallow = (item, i, arr) => !arr.slice(i + 1).includes(item);

const uniqueDeep = (item, i, arr) =>
  !arr
    .slice(i + 1)
    .some(other => JSON.stringify(other) === JSON.stringify(item));

const combineMatrices = (larger, smaller) =>
  larger
    //clone
    .map(e => e)
    .map((largerLine, lineNum) => {
      const startPoint = Math.floor(
        (largerLine.length - smaller[0].length) / 2
      );
      if (lineNum >= startPoint && lineNum < larger.length - startPoint) {
        return largerLine.map((char, charNum) => {
          if (
            charNum >= startPoint &&
            charNum < largerLine.length - startPoint
          ) {
            return smaller[lineNum - startPoint][charNum - startPoint];
          } else {
            return char;
          }
        });
      } else {
        return largerLine;
      }
    });

const flatten = arr =>
  arr.reduce(
    (flat, toFlatten) =>
      flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
    []
  );

const insert = function (array, i, ...rest) {
  return array.slice(0, i).concat(rest, array.slice(i));
}

const reduceSum = (acc, next) =>
  acc + next;

const reduceMultiply = (acc, next) =>
  acc * next;

const reduceFlatten = (acc, next) =>
  acc.concat(next);


const permutations = xs => {
  let ret = [];

  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = permutations(xs.slice(0, i).concat(xs.slice(i + 1)));

    if (!rest.length) {
      ret.push([xs[i]])
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        ret.push([xs[i]].concat(rest[j]))
      }
    }
  }
  return ret;
}
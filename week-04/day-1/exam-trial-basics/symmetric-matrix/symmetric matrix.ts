'use strict'

function isSymmetric(array: number[][]) {

  let isItSymmetric: boolean = undefined;

  for (let i: number = 0; i < array.length; i++) {
    if (isItSymmetric === false) {
      break;
    }
    for (let j: number = 0; j < array.length; j++) {
      if (array[i][j] === array[j][i]) {
        isItSymmetric = true;
      } else {
        isItSymmetric = false;
        break;
      }
    }
  }

  return isItSymmetric;

}

let newArray: number[][] = [
  [1, 2, 3],
  [2, 5, 6],
  [3, 6, 9]
];

console.log(isSymmetric(newArray));

//console.log(newArray.length);
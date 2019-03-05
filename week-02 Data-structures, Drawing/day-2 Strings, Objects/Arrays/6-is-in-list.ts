'use strict';

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(anArray) {

  //works with 'filter' too?
  let howMany: number[] = [];
  for (let i: number = 0; i < anArray.length; i++) {
    if (anArray[i] === 4 || anArray[i] === 8 || anArray[i] === 12 || anArray[i] === 16) {
      howMany.push(anArray[i]);
    }
  }
  console.log(howMany.join('') === '481216');
}

checkNums(listOfNumbers);
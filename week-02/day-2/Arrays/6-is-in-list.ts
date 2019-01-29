'use strict';

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 17];

function checkNums(anArray) {

  //works with 'filter' too?
  let howMany: number[] = [];
  for (let i: number = 0; i < anArray.length; i++) {
    if (anArray[i] === 4 || anArray[i] === 8 || anArray[i] === 12 || anArray[i] === 16) {
      howMany.push(anArray[i]);
      console.log(howMany);
    }
  }
  
  //This will always return false, but why?
  if (howMany === [4, 8, 12, 16]) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkNums(listOfNumbers);
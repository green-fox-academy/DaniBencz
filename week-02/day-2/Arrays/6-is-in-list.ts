'use strict';

// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

function checkNums(anArray){
  
  for(let i: number = 0; i < anArray.length; i++){
    if(anArray[i] === 4 || 8 || 12 || 16){
      console.log(anArray[i]);
    }
  }
}

checkNums(listOfNumbers);
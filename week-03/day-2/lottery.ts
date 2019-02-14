'use strict';
// Create a method that find the 5 most common lottery numbers in lottery.csv
let fs = require('fs');

function mostCommon(fileName) {

  let newString = fs.readFileSync(fileName, 'utf-8');
  let lines: string[] = [];
  let numbers: number[] = [];

  lines = newString.split('\r\n');

  lines.forEach(line => {

    let lineArray: string[] = line.split(';');
    //let deleteIndex: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i: number = 10; i >= 0; i--) {
      lineArray.splice(i, 1);
    }
    lineArray.forEach(number => {
      numbers.push(Number(number));
    })
    //console.log(lineArray);
  })
  console.log(numbers);
}

mostCommon('lottery2.csv');

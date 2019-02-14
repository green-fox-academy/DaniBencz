'use strict';
// Create a method that find the 5 most common lottery numbers in lottery.csv
let fs = require('fs');

function mostCommon(fileName) {
  let lines = fs.readFileSync(fileName, 'utf-8').split('\r\n');
  let numbers: number[] = [];
  lines.forEach(line => {
    let lineArray: string[] = line.split(';');
    for (let i: number = 10; i >= 0; i--) {
      lineArray.splice(i, 1);
    }
    lineArray.forEach(number => {
      numbers.push(Number(number));
    })
  })
  //console.log(numbers);

  let counts: {} = {};
  let compare: number = 0;
  let mostFrequent: number;

  numbers.forEach((number, index) => {

    if (counts[number] === undefined) {
      counts[number] = 1;
    } else {
      counts[number]++;
    }

    if (counts[number] > compare) {
      compare = counts[number];
      mostFrequent = numbers[index];
    }
  })
  console.log('most popular number is: ' + mostFrequent);
}

mostCommon('lottery.csv');

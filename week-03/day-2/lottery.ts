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

  let mostFrequent1: number;
  let mostFrequent2: number;
  let mostFrequent3: number;
  let mostFrequent4: number;
  let mostFrequent5: number;
  let counts: {} = {};
  let compare1: number = 5;
  let compare2: number = 4;
  let compare3: number = 3;
  let compare4: number = 2;
  let compare5: number = 1;
  
  numbers.forEach((number, index) => {

    if (counts[number] === undefined) {
      counts[number] = 1;
    } else {
      counts[number]++;
    }
    if (counts[number] > compare1) {
      compare1 = counts[number];
      mostFrequent5 = numbers[index];
    } 
  })
  console.log('most popular number is: ' + mostFrequent);
}

mostCommon('lottery.csv');

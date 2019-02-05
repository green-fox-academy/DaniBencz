'use strict';

let fs = require('fs');
let mostUsed: string = '';
let max: number = 0;

function findChar(fileName) {
  try {

    let newString = fs.readFileSync(fileName, 'utf-8');

    newString.split('').forEach((char) => {
      if (newString.split(char).length > max) {
        console.log(newString.split(char));
        max = newString.split(char).length;
        mostUsed = char;
      }
    });

    return (`The most used character is: '${mostUsed}'.`);

  } catch {
    return ('File does not exist!');
  }
}

console.log(findChar('countchar.txt'));

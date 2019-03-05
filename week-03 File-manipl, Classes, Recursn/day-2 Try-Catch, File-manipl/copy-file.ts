'use strict';

export { }

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

let fs = require('fs');

function copyFile(fileName) {

  try {
    let newString = fs.readFileSync(fileName, 'utf-8');
    fs.appendFileSync('copiedFile.txt', newString);
    console.log(true);
  } catch (e) {
    console.log(false);
  }
}

copyFile('my-file.txt');
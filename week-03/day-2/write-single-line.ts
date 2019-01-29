'use strict'

export { }

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

let fs = require('fs');

function writeMyName(fileName, newContent) {
  try {
    fs.readFileSync(fileName);
    fs.appendFileSync(fileName, '\r\n' + newContent);
    console.log('done');
  } catch (e) {
    console.log('Unable to write file: ' + fileName);
  }
}
writeMyName('my-file.txt', 'Dani');



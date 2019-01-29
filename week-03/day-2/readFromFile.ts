'use strict';
export { }

let fs = require('fs');

try {
  let fileContent = fs.readFileSync('emptyFile.txt', 'utf-8');
  if (fileContent) {
    console.log(fileContent);
  } else {
    throw new Error('Your file is empty');
  }
  console.log(fileContent);
} catch (error) {
  console.log(error.message);
} finally {
  console.log('I am still here!');
}
'use strict';

import { fileURLToPath } from "url";

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

let fs = require('fs');

function numberOfLines(fileName: string): number {
  try {
    return fs.readFileSync(fileName, 'utf-8').split('\r\n').length;
  } catch (x) {
    return 0;
  }
}
console.log(numberOfLines('my-file.txt'));
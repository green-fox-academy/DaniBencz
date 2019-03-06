'use strict';

// The mapWith() function should iterate over the given array and call the callback function on every element.
// It stores the callback return values in the output.
// The mapWith() should return with the output array.
const mapWith = (array, callback) => {
  let output = array.map(callback);
  return output;
}

//expected result: [2, 3, 4]
const addOne = (number) => {
  return number + 1;
}
console.log(mapWith([1, 2, 3], addOne));

// Create a callback function which removes every second character from a string
const words = ['map', 'reduce', 'filter'];
const removeSecondLetter = (word) => {
  return word.replace(word.substring(1, 2), '');
}
console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
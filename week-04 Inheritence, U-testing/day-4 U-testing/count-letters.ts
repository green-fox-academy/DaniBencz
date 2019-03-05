'use strict';

export function countLetters(myString: string): object {
  let dictionary = {};
  myString.split('').sort().forEach((letter) => {
    if (dictionary[letter] === undefined) {
      dictionary[letter] = 1;
    } else {
      dictionary[letter]++;
    }
  });
  return dictionary;
}

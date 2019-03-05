'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

function containsSeven(anArray): string {

  let answer: string = 'Nooooo';
  numbers.forEach(function (element) {
    if (element === 7) {
      answer = 'Hoorray';
    }
  });
  console.log(answer);
  return answer;
}

containsSeven(numbers);

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];
let newWords: any[] = ['Croissant', 'Ice cream'];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(targetArray, sourceArray) {

  let n: number = 0;
  for (let i: number = 0; i < targetArray.length; i++) {
    if (typeof targetArray[i] !== 'string') {
      targetArray.splice(i, 1, sourceArray[n]);
      n++;
    }

  }

  console.log(targetArray);

}

sweets(shopItems, newWords);
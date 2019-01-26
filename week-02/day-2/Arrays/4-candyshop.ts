'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];
let newWords: any [] = ['Croissant', 'Ice cream'];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets (targetArray, sourceArray){

  map1 = sourceArray.map(function(element){

  });

  shopItems.splice(1, 1, "Croissant");


}

console.log(shopItems);

sweets(shopItems, newWords);
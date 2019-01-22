'use strict';
export{}

let drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];

drinks.forEach(function(element, index){
    drinks[index] = element + element;

});

console.log(drinks);

// -  Create an array variable named `drinks` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`
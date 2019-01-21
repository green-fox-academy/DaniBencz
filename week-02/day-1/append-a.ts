'use strict'
export{}

let animals = ["koal", "pand", "zebr"];

animals.forEach(function(element, index){
    animals[index] = element + "a";
});

console.log(animals);

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end
'use strict';
export{}

let numList = [1, 2, 3, 8, 5, 6];

let newList = numList.map(function(element){
    if (element === 8){
        return 4;
    } else{
        return element;
    }

})

console.log(newList);

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test
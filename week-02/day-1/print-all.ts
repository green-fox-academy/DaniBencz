'use strict'
export{}

let integers = [4, 5, 6, 7];

integers.forEach(element => {
    console.log(element);    
});

console.log("or like this:");

for (let i :number = 0; i < integers.length; i++){
    console.log(integers[i]);
}


// -  Create a variable named `integers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `integers` to the console*
// *hint: use a loop, console.log(integers) won't cut it
// -  bonus for using the correct built in array method
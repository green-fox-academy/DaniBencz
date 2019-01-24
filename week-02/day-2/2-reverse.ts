'use strict';
export{}

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

/*This was my line of thought...
function reverse(a: string): string{
    let someArray: string[] = a.split("");
    let newArray: string[] = someArray.reverse();
    let newString: string = newArray.join("");
    return newString;
}*/

function reverse(a: string): string{
    return a.split("").reverse().join(""); 
}

/*This on works too:
function reverse(a){
    let s2 = "";
    for(let i :number = a.length -1; i>= 0; i--){
        s2 += a[i];
    }
    return s2;
}*/

console.log(reverse(reversed));

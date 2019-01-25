'use strict';
export{}


// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(a, b): string[]{
    let matches: string[] = [];

    if(a.length > b.length){
        for(let i:number = 0; i < a.length; i++){
            if(a[i] !== undefined){
                matches.push(b[i]);
            }
            matches.push(a[i]);
        }

    } else{
        for(let i:number = 0; i < b.length; i++){
            if(a[i] !== undefined){
                matches.push(a[i]);
            }
            matches.push(b[i]); 
        }
    }
    return matches; 
}

console.log(makingMatches(girls, boys));

export = makingMatches;
'use strict'
export{}

function factorio (a){

    let b :number = 1;
    for(let i :number = 1; i <= a; i++){
        b = b * i;
    }
    return b;
}

console.log(factorio(4));

// -  Create a function called `factorio`
//    that returns it's input's factorial


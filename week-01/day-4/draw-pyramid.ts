'use strict'

let Count: number = 4;
let x :string = "";
let y :string = "";

for (let i :number = 1; i <= Count; i++){

    for (let j :number = 0; j <= Count-i; j++){
        x = x + " ";
    }

    for (let j :number = 0; j < i + (i - 1); j++){
        y = y + "*";
    }

    console.log(x + y);
    x = "";
    y = "";
}

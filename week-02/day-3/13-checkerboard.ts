'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let x :number = 20;
let y :number = 20;
let w :number = 40;
let z :number = 40;

for(let i :number = 0; i < 5; i++){
    for(let j :number = 0; j < 5; j++){
        ctx.fillRect(x, y, 20, 20);
        ctx.fillStyle = "black";
        ctx.fillRect(w, z, 20, 20);
        ctx.fillStyle = "black";
        console.log(x, y, w, z);
        x += 40
        w += 40
    }
    x = 20;
    y += 40;
    w = 40;
    z += 40;
}
// Fill the canvas with a checkerboard pattern.
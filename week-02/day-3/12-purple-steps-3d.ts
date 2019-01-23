'use strict';
export {}

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let x :number = 10;
let s :number = 0;

for(let i: number = 1; i < 9; i ++){
    ctx.fillStyle = "purple";
    s = 10*i;
    ctx.fillRect(x, x, s, s);
    x += s;
}

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
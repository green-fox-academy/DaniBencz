'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

for(let i: number = 1; i < 20; i ++){
    ctx.fillStyle = "purple";
    ctx.fillRect(10*i, 10*i, 10, 10);
}

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]
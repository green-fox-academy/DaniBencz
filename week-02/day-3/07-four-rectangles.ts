'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Draw four different size and color rectangles.
// Avoid code duplication.


let colors: string[]= ["blue", "yellow", "orange", "purple", "green", "pink"] 
function drawRect(x, y, w, h){
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
}

for(let i: number = 0; i < 4; i ++){
    let a = Math.floor(Math.random() * 400) + 1;
    let b = Math.floor(Math.random() * 400) + 1;
    let c = Math.floor(Math.random() * 400) + 1;
    let d = Math.floor(Math.random() * 400) + 1;
    drawRect(a, b, c, d);
}

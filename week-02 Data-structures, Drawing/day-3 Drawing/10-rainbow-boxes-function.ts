'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

function colorRect2(s, c) {
    ctx.fillRect(300 - (s / 2), 200 - (s / 2), s, s);
    ctx.fillStyle = c;
}
for (let i: number = 400; i > 10; i -= 20) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    console.log(rgb);
    colorRect2(i, rgb);
}
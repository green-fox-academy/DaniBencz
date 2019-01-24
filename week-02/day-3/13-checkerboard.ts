'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let x: number = 40;
let y: number = 40;

for (let i: number = 20; i <= 180; i += 40) {
    for (let j: number = 20; j <= 180; j += 40) {
        ctx.fillRect(j, i, 20, 20);
        ctx.fillStyle = "black";
        ctx.fillRect(x, y, 20, 20);
        ctx.fillStyle = "black";
        x += 40
    }
    x = 40;
    y += 40;
}
// Fill the canvas with a checkerboard pattern.
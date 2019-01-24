'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawRect2(x, y) {
    ctx.fillRect(x, y, 50, 50);
}

for (let i: number = 0; i < 3; i++) {
    let a = Math.floor(Math.random() * 400) + 1;
    let b = Math.floor(Math.random() * 400) + 1;
    drawRect2(a, b);
}

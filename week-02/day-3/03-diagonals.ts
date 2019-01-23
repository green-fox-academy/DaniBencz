'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function diagonals(x1, y1, x2, y2, color): any{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
}

diagonals(0, 0, 600, 400, "green");
diagonals(600, 0, 0, 400, "red");

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.
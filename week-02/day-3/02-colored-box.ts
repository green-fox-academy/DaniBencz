'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function colorBox(x1, y1, x2, y2, color): any{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
}

//Top Side
colorBox(100, 100, 500, 100, "ff0000");

//Right Side
colorBox(500, 100, 500, 300, "yellow");

//Bottom Side
colorBox(500, 300, 100, 300, "blue");

//Left Side
colorBox(100, 300, 100, 100, "rgb(155, 102, 102)");

// draw a box that has different colored lines on each edge.
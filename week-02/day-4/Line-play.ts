'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


let x: number = 20;

for (let i: number = 0; i < 20; i++) {
    ctx.moveTo(x, 0);
    ctx.lineTo(400, x);
    ctx.strokeStyle = "purple";
    ctx.stroke();
    x += 20;
}

x = 0;

function drawLines(){
    for (let i: number = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 400 - x);
        ctx.lineTo(400 - x, 400);
        ctx.strokeStyle = "green";
        ctx.stroke();
        x += 20;
    }
}
setTimeout(() => {
    drawLines();
}, 1000);
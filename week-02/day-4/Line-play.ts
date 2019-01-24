'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let i: number = 20;
let density :number = 30;

for (i; i < canvas.width; i += density) {
    ctx.moveTo(i, 0);
    ctx.lineTo(canvas.height, i);
    ctx.strokeStyle = "purple";
    ctx.stroke();
}   i = 0;

function drawLines(){
    for (i; i < canvas.width; i += density) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - i);
        ctx.lineTo(canvas.height - i, canvas.width);
        ctx.strokeStyle = "green";
        ctx.stroke();
    }
}

setTimeout(() => {
    drawLines();
}, 1000);
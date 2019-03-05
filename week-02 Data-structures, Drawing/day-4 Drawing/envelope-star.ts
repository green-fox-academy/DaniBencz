'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let i: number = 0;
let density: number = 20;

//Top Left
for (i; i < canvas.width/2; i += density) {
  ctx.moveTo(i, canvas.width/2);
  ctx.lineTo(canvas.height/2, canvas.width/2 - 10 - i);
  ctx.strokeStyle = "green";
  ctx.stroke();
} i = 0;

//Top Right
for (i; i < canvas.width/2; i+= density) {
    ctx.beginPath();
    ctx.moveTo(canvas.height/2, canvas.width/2 - i - 10);
    ctx.lineTo(canvas.height - i, canvas.width/2);
    ctx.stroke();
} i = 0;

//Bottom Left
for (i; i < canvas.width/2; i += density) {
    ctx.moveTo(i, canvas.width/2);
    ctx.lineTo(canvas.height/2, i + 10 + canvas.width/2);
    ctx.stroke();
} i = 0;

//Bottom Right
for (i; i < canvas.width/2; i += density) {
  ctx.moveTo(canvas.height/2, canvas.width/2 + i + 10);
  ctx.lineTo(canvas.height - i, canvas.width/2);
  ctx.stroke();
}

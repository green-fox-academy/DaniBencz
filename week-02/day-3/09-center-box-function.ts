'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let colors2: string[]= ["blue", "yellow", "orange", "purple", "green", "pink"] 
function rectCenter(x){
    ctx.fillRect(300-(x/2), 200-(x/2), x, x);
    ctx.fillStyle = colors2[Math.floor(Math.random() * colors2.length)];
}

for(let i: number = 90; i >= 50; i -= 20){
    rectCenter(i);
}

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
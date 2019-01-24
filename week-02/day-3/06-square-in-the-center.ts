'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// Draw a green 10x10 square to the center of the canvas.

ctx.fillRect(295, 195, 10, 10);

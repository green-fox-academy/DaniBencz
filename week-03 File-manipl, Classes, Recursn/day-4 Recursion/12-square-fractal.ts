'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function fractal(x, y, size) {

  ctx.strokeRect(x, y, size, size);

  if (size >= 10) {
    setTimeout(function () {
      fractal(x + (size / 3), y, size / 3); //top
      fractal(x, y + (size / 3), size / 3); //left
      fractal(x + (size / 3) * 2, y + (size / 3), size / 3); //right
      fractal(x + (size / 3), y + (size / 3) * 2, size / 3); //bottom
    }, 1000);
  }
}
fractal(0, 0, 600);

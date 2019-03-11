'use strict';

/* Here is an image inspector, but the buttons are not implemented yet, that will be your task!
- the nav buttons (up, down, left, right) move the background by 10px
- the zoom buttons increase/decrease the image by 20%
- attach only two event listeners to the nav element, one for navigation, one for zooming */

const nav = document.querySelector('nav');
let img = document.querySelector('.img-inspector');
let size = 200;
let counterX = 0;
let counterY = 0;

const navigate = (e) => {
  if (e.target.getAttribute('data-direction') === 'up') {
    counterY -= 10;
  };
  if (e.target.getAttribute('data-direction') === 'down') {
    counterY += 10;
  };
  if (e.target.getAttribute('data-direction') === 'left') {
    counterX -= 10;
  };
  if (e.target.getAttribute('data-direction') === 'right') {
    counterX += 10;
  };
  img.setAttribute('style', `background-position :${counterX}px ${counterY}px; background-size : ${size}%`);
};

const zoom = (e) => {
  if (e.target.getAttribute('data-direction') === 'in') {
    size += 20;
  }
  if (e.target.getAttribute('data-direction') === 'out') {
    size -= 20;
  }
  img.setAttribute('style', `background-position :${counterX}px ${counterY}px; background-size : ${size}%`);
};

nav.addEventListener('click', navigate);
nav.addEventListener('click', zoom);
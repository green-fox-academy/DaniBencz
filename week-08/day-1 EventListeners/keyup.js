'use strict';

//1) Subscibe to keyup events on the global window object
//2) Console log the event object and peek inside
//3) Display the last pressed key's code as "Last pressed key code is: __"

const text = document.querySelector('h1');
const keyup = (e) => {
  text.textContent = e.code;
};
document.addEventListener('keyup', keyup);
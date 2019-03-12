'use strict';

const button = document.querySelector('button');
const script = document.querySelector('script');
let counter = 0;

setTimeout(() => {
  console.log('time to click');
  let click = (e) => {
    counter++;
    if (counter % 3 === 0) {
      let newp = document.createElement('p');
      newp.textContent = `3 seconds ellapsed and clicked ${counter} times`;
      document.body.insertBefore(newp, script);
    }
  }
  button.addEventListener('click', click);
}, 3000);

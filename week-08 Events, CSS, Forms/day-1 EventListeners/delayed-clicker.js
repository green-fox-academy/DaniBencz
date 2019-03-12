'use strict';

const button = document.querySelector('button');
const script = document.querySelector('script');

let click = (e) => {
  setTimeout(() => {
    console.log('click');
    let newp = document.createElement('p');
    newp.textContent = '2 seconds ellapsed';
    document.body.insertBefore(newp, script);
  } ,2000);
}

button.addEventListener('click', click);
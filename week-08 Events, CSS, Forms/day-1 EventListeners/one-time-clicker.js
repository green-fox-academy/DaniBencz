'use strict';

//Create an event listener which logs the current timestamp to the console once the button is clicked.
//When the button is clicked for the second or any other times no event listener should be called.
//Try to solve this two different ways.
//hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

const button = document.querySelector('button');
//let clicked = false;

let click = (e) => {
  
  //option 1
  /*if (!clicked) {
    console.log(e.timeStamp);
    clicked = true;
  } */
  
  console.log(e.timeStamp);
  //option 2
  //button.setAttribute('disabled','');
  
  //option3
  button.removeEventListener('click', click);
};

button.addEventListener('click', click);

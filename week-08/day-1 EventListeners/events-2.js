'use strict';

//On the click of the button count the items in the list
//Display the result in the result element.

const button = document.querySelector('button');
const result = document.querySelector('.result');
const list = document.querySelectorAll('li');

const countElements = () => {
  for (let i = 1; i <= list.length; i++) {
    result.textContent = i;
  };
};
button.addEventListener('click', countElements);


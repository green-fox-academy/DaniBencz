'use strict';

//On the click of the button count the items in the list
//Display the result in the result element.

const button = document.querySelector('button');
const result = document.querySelector('.result');
const list = document.querySelectorAll('li');

const countElements = () => {
  let answer = 0;
  list.forEach(li => {
    answer++;
  });
  result.textContent = answer;
};
button.addEventListener('click', countElements);


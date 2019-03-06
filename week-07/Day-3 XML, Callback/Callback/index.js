'use strict';

// 1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//  - the timer should fire every 100ms
//  - the timer should stop when there are no more elements left to be colored

let section = document.querySelector('section');
for (let i = 2; i < 12; i++) {
  let div = document.createElement('div');
  div.innerText = i;
  section.appendChild(div);
}

let divtags = document.getElementsByTagName('div');
let index = 0;
let isEven = function (array) {
  if (array.length > index) {
    if (Number(array[index].innerText) % 2 === 0) {
      array[index].className = 'even';
    } else {
      array[index].className = 'odd';
    }
    index++;
  } else{
    console.log('timer sopped');
    clearInterval(timer);
  }
}

let timer = setInterval(() => { isEven(divtags) }, 1000);


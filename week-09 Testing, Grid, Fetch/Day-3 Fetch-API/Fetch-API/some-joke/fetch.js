'use strict';

let btn = document.querySelector('button');
let p = document.querySelector('p');

let writeToDOM = (res) => {
  //if want parse here, not in main fetch function:
  res.json().then(res => p.innerText = res.value.joke);
}

let makeMeLaugh = () => {
  fetch('http://api.icndb.com/jokes/random')
    //.then(writeToDOM)
    .then(res => res.json())
    .then(res => p.innerText = res.value.joke)
    .catch((err) => {
      console.log("Something went wrong!", err);
    });
};

//if () after function name, it gets called rightaway
btn.addEventListener('click', makeMeLaugh);
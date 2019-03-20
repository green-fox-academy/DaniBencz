'use strict';

let btn = document.querySelector('button');

let writeToDOM = () => {}

let makeMeLaugh = (event) => {

  fetch('http://api.icndb.com/jokes/random')
    .then(function (response) {
      console.log(response.json());
    })
    .catch(function (err) {
      console.log("Something went wrong!", err);
    });
};

btn.addEventListener('click', makeMeLaugh);







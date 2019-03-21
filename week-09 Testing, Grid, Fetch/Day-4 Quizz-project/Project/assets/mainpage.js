'use strict';

let answers = document.querySelector('.answers');
let question = document.querySelector('.question')
let buttons = document.querySelectorAll('.button');
let score = 0;

let fillpage = () => {
  let http = new XMLHttpRequest();
  http.open('GET', 'http://localhost:3000/api/game', true);
  http.send();
  console.log('submitted');

  http.onload = (loadEvent) => {
    let data = JSON.parse(http.responseText);
    question.textContent = data[0].question;
    for(let i = 0; i < buttons.length; i++){
      buttons[i].textContent = data[i].answer;
      buttons[i].setAttribute(name, data[i].is_correct);
    }
  };
}

answers.addEventListener('click', (sendEvent) => {
  console.log('click');
  //colors button green if goog answer, red if bad
  //increments csore
  //after 3 sec puts new answer
  fillpage();
});

fillpage();

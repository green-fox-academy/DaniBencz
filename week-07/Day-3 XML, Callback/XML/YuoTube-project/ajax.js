'use strict';

//helps make url dynamic
let pageCounter = 1;

//grabbing the right <div>
let animalContainer = document.getElementById('animal-info');

//set up button
let btn = document.getElementById('btn');
btn.onclick = () => {

  let http = new XMLHttpRequest();

  //define request details
  http.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`, true);

  http.onload = function () {
    //like this, it will remain a string
    //let ourData = http.responseText;
    //to turn it into .json
    let ourData = JSON.parse(http.responseText);
    renderHTML(ourData);
  };

  //sending request
  http.send();

  //incrementing page counter
  //when out of content, button gets inactive
  if (pageCounter < 3) {
    pageCounter++;
  } else {
    btn.onclick = () => {
    }
  }
};

//creating .html content based on the .json data
function renderHTML(data) {
  let htmlString = '';
  for (let i = 0; i < data.length; i++) {
    //could go deeper based on video, this will do for now
    htmlString = htmlString.concat(`<p>${data[i].name} is a ${data[i].species}.</p>`);
  };

  //inserting content btwn the <div> tags
  animalContainer.insertAdjacentHTML('beforeend', htmlString);
};
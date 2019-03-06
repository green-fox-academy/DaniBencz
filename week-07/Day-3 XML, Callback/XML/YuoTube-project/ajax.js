'use strict';

//gabbing the right <div>
let animalContainer = document.getElementById('animal-info');

//set up button
let btn = document.getElementById('btn');
btn.onclick = () => {

  let http = new XMLHttpRequest();

  //define request details
  http.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json', true);
  
  http.onload = function(){
    //like this, it will remain a string
    //let ourData = http.responseText;
    //to turn it into .json
    let ourData = JSON.parse(http.responseText);
    renderHTML(http);
  };

  //sending request
  http.send();

};

function renderHTML(data){
  let htmlString = 'test';

  for(i=0; i < data.length; i++){}
    htmlString += '<p>'+data[]
  }

  //inserting content btwn the <div> tags
  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
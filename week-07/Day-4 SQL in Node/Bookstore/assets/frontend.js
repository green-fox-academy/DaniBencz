'use strict';
let http = new XMLHttpRequest();

http.open('GET', 'http://localhost:3000/author', true);

let ul = document.querySelector('ul');

http.onload = (data) =>{
  //data is the entire response received from the server
  //console.log(data);

  //this filters 'data' for the useful info
  let myArray = JSON.parse(http.responseText);

  //received an array as response to mySQL query
  myArray.forEach(row => {
    let li = document.createElement('li');
    li.innerText = `${row.aut_name} is from ${row.home_city}\n`;
    ul.appendChild(li);
  });

};
http.send();

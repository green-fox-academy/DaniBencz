'use strict';

let div = document.querySelector('.giphs');
let http = new XMLHttpRequest();

http.open('GET',
  'https://api.giphy.com/v1/stickers/search?q=spaceship&api_key=udaeAkvhx5NCotUJ70BCWc2khKVVZx5T&limit=16', true);
http.send();

http.onload = () => {
  let data = JSON.parse(http.responseText);
  renderHTML(data);
}

function renderHTML(data) {
  console.log('foo');
  console.log(data.data[0].images.downsized.url);
  for (let i = 0; i < data.data.length; i++) {
    //create new <img>
    let img = document.createElement('img');
    //assigns 'src' to it from data
    img.setAttribute('src', data.data[i].images.downsized.url);
    //insert in html
    div.appendChild(img);
  }
}
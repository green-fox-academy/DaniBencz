'use strict';

let div = document.querySelector('.articles');
let http = new XMLHttpRequest();

http.open('GET',
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon&fq=apollo11&api-key=FLh1erqEo2iGza1D1tkoGg8kAeNFXAOh', true);
http.send();

http.onload = () => {
  let data = JSON.parse(http.responseText);
  console.log(data);
  renderHTML(data);
}

function renderHTML(data) {
  for (let i = 0; i < data.response.docs.length; i++) {
    let headline = document.createElement('h3');
    let snippet = document.createElement('p');
    let date = document.createElement('h5');
    let url = document.createElement('a');

    headline.innerText = `${data.response.docs[i].headline.main}`;
    snippet.innerText = `${data.response.docs[i].snippet}`;
    date.innerText = `${data.response.docs[i].pub_date}`;
    url.href = `${data.response.docs[i].web_url}`;
    url.target = `_blank`;
    url.innerText = `Go To Article`;
    div.appendChild(headline);
    div.appendChild(snippet);
    div.appendChild(date);
    div.appendChild(url);
  }
}
'use strict';
let http = new XMLHttpRequest();
let ul = document.querySelector('ul');

//authors button
let authors = document.getElementById('authors');
authors.onclick = () => {
  http.open('GET', 'http://localhost:3000/authors', true);
  http.onload = (data) => {
    //data is the entire response received from the server
    //console.log(data);
    //this filters 'data' to array with the useful info
    let myArray = JSON.parse(http.responseText);
    //inserting array elements to DOM
    ul.innerHTML = null;
    myArray.forEach(row => {
      let li = document.createElement('li');
      li.innerText = `${row.aut_name} is from ${row.home_city}\n`;
      ul.appendChild(li);
    });
  };
  http.send();
}

//books button
let books = document.getElementById('books');
books.onclick = () => {
  http.open('GET', 'http://localhost:3000/books', true);
  http.onload = (data) => {
    console.log(data);
    let myArray = JSON.parse(http.responseText);
    ul.innerHTML = null;
    myArray.forEach(row => {
      let li = document.createElement('li');
      li.innerText = `${row.book_name} costs ${row.book_price}\n`;
      ul.appendChild(li);
    });
  };
  http.send();
};
'use strict';
let http = new XMLHttpRequest();

// = = = "Reddit" Frontend = = = 

let newPostBtn = document.getElementById('postBtn');
let upvoteBtn = document.querySelectorAll('.upvote');
let downvoteBtn = document.querySelectorAll('.downvote');

// upvoting
let upvote = (e) => {
  //retrieve post id
  let id = e.target.parentElement.parentElement.getAttribute('data-postID');
  http.open('PUT', `http://localhost:3000/posts/${id}/upvote`, true);
  http.setRequestHeader('Content-type', 'application/json');
  http.send();
  http.onload = () => {
    let data = JSON.parse(http.responseText);
    e.target.src = "../assets/upvoted.png";
    e.target.parentElement.children[1].textContent = data[0].score;
    e.target.parentElement.children[2].src="../assets/downvote.png";
  }
}

//downvoting
let downvote = (e) => {
  let id = e.target.parentElement.parentElement.getAttribute('data-postID');
  http.open('PUT', `http://localhost:3000/posts/${id}/downvote`, true);
  http.setRequestHeader('Content-type', 'application/json');
  http.send();
  http.onload = () => {
    let data = JSON.parse(http.responseText);
    console.log(data[0].score);
    e.target.src = "../assets/downvoted.png";
    e.target.parentElement.children[1].textContent = data[0].score;
    e.target.parentElement.children[0].src="../assets/upvote.png";
  }
}

upvoteBtn.forEach(element => {
  element.addEventListener('click', upvote);
});

downvoteBtn.forEach(element => {
  element.addEventListener('click', downvote);
});

let newPost = () => {
  alert('new post');
};
newPostBtn.addEventListener('click', newPost);



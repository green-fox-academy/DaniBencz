'use strict';

// = = = "Reddit" Frontend = = = 

let newPostBtn = document.getElementById('postBtn');
let upvoteBtn = document.querySelectorAll('.upvote');
let downvoteBtn = document.querySelectorAll('.downvote');

// upvoting
let upvote = () => {
  alert('upvoted');
}

upvoteBtn.forEach(element => {
  element.addEventListener('click', upvote);
});

//downvoting
let downvote = () => {
  alert('downvoted');
}
downvoteBtn.forEach(element => {
  element.addEventListener('click', downvote);
});

let newPost = () => {
  alert('new post');
};
newPostBtn.addEventListener('click', newPost);



'use strict';
let http = new XMLHttpRequest();

// = = = "Reddit" Frontend = = = 

let content = document.querySelector('.content')
let fillscreen = () => {
  http.open('GET', 'http://localhost:3000/posts', true);
  http.setRequestHeader('Content-type', 'application/json');
  http.send();
  http.onload = () => {
    let data = JSON.parse(http.responseText);
    for (let i = 0; i < data.length; i++) {

      let post = document.createElement('div');
      post.setAttribute('class', 'post');
      post.setAttribute('data-postID', `${data[i].id}`);
      content.appendChild(post);

      let rank = document.createElement('div');
      rank.setAttribute('class', 'rank');
      post.appendChild(rank);

      let upvote = document.createElement('img');
      upvote.setAttribute('src', '../assets/upvote.png');
      upvote.setAttribute('class', 'upvote');
      rank.appendChild(upvote);

      let score = document.createElement('p');
      score.setAttribute('class', 'score');
      score.innerText = `${data[i].score}`;
      rank.appendChild(score);

      let downvote = document.createElement('img');
      downvote.setAttribute('src', '../assets/downvote.png');
      downvote.setAttribute('class', 'downvote');
      rank.appendChild(downvote);

      let postContent = document.createElement('div');
      postContent.setAttribute('class', 'postContent');
      post.appendChild(postContent);

      let postTitle = document.createElement('p');
      postTitle.setAttribute('class', 'post-title');
      postTitle.innerHTML = `<strong>${data[i].title}</strong>`;
      postContent.appendChild(postTitle);

      let postURL = document.createElement('p');
      postURL.setAttribute('class', 'post-url');
      postURL.innerText = `${data[i].url}`;
      postContent.appendChild(postURL);

      let links = document.createElement('div');
      links.setAttribute('class', 'links');
      postContent.appendChild(links);

      let modify = document.createElement('a');
      modify.setAttribute('class', 'modify');
      modify.setAttribute('href', '');
      modify.innerText = 'modify';
      links.appendChild(modify);

      let remove = document.createElement('a');
      remove.setAttribute('class', 'remove');
      remove.setAttribute('href', '');
      remove.innerText = 'remove';
      links.appendChild(remove);
    };
  };
};

fillscreen();

//they don't work without timeout because of asynchronous execution...
setTimeout(() => {
  let postBtn = document.querySelector('#postBtn');
  let upvoteBtn = document.querySelectorAll('.upvote');
  console.log(upvoteBtn);
  let downvoteBtn = document.querySelectorAll('.downvote');
  let modifyLink = document.querySelectorAll('.remove');
  let removeLink = document.querySelectorAll('.remove');


  let newPost = () => {
    http.open('POST', 'http://localhost:3000/json', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(JSON.stringify({ "name": user.value, "title": title.value, "url": url.value }));

    http.onload = () => {
      let data = JSON.parse(http.responseText);
      alert(data[0].title);
    };
  };

  postBtn.addEventListener('click', newPost);

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
      e.target.parentElement.children[2].src = "../assets/downvote.png";
    };
  };

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
      e.target.parentElement.children[0].src = "../assets/upvote.png";
    };
  };

  upvoteBtn.forEach(element => {
    element.addEventListener('click', upvote);
  });

  downvoteBtn.forEach(element => {
    element.addEventListener('click', downvote);
  });
}, 1000);
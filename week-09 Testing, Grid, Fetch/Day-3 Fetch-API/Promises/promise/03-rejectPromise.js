'use strict';

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //error object constructor first item is message
    reject(new Error('REJECTED!'));
  }, 300);
});

let onReject = (error) => {
  console.log(error.message);
}
//takes 2 callbeck, 1st if fulfilled, 2nd rejected
//or .catch can take rejected too
promise.then(null, onReject);
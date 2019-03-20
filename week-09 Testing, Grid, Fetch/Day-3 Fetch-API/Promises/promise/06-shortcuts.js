'use strict';

let promise = Promise.resolve('YEEY!');
let promise2 = Promise.reject(new Error('REJECTED!'));

let onReject = (error) => {
  console.log(error.message);
}

promise.then(console.log);
promise2.catch(onReject);
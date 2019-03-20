'use strict';

//this to demonstrate .then() always gets executed a loop later
let promise = new Promise((resolve, reject) => {
  resolve('PROMISE VALUE');
});
promise.then(console.log);

console.log('MAIN PROGRAM');

'use strict';

var promise = new Promise(function(resolve, reject){
  setTimeout(() => {
    resolve('FULFILLED!');
  }, 300);
});

promise.then(console.log);

/* var promise = new Promise(function (resolve, reject) {
setTimeout(function () {
    resolve( adder(2,3));
  }, 300);
});

promise.then(console.log);

function adder (a, b){
  return (a+b);
} */
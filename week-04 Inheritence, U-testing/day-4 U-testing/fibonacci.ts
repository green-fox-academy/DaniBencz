'use strict';

//Write a function that computes a member of the fibonacci sequence by a given index

export function fibonacci(n) {

  let a = -1
  let b = 1
  let c = 0

  for (let i: number = 0; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

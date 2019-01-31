// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function adder(n: number): number {
  if (n <= 0) {
    return 0;
  } else {
    return n + adder(n - 1);
  }
}
console.log(adder(5));
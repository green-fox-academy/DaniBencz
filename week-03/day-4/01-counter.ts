// Write a recursive function that takes one parameter: n and counts down from n.

function counter(n: number): number {
  if (n <= 0) {
    return 1;
  } else {
    console.log(n - 1);
    counter(n - 1);
  }
}
counter(10);
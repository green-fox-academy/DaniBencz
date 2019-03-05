// Write a recursive function that takes one parameter: n and counts down from n.

function counter(n: number) {
  if (n <= 0) {
    console.log(n);
    return;
  } else {
    console.log(n);
    counter(n - 1);
    return;
  }
}
counter(5);

//for future referrence: this does same, but cleaner
function counter2(n: number) {
  console.log(n);
  if (n > -1) {
    counter(n - 1);
  }
  return;
}
counter2(10);
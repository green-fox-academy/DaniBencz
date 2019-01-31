
function expon(base: number, power: number): number {
  if (power <= 1) {
    return base;
  } else {
    return base * expon(base, power - 1);
  }
}
console.log(expon(4, 5));
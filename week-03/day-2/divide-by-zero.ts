// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideByTen(number) {
  try {
    if (number === 0) {
      throw new Error('fail');
    }
    return number / 10;
  } catch (error) {
    return (error.message);
  }
}
console.log(divideByTen(0));

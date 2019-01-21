
function factorial(number) {
  return (number * factorial(number - 1));     // function invokes itself
};

console.log(factorial(6));      // outputs 720 
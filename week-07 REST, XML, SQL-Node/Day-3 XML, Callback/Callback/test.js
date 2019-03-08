const timeoutId = setTimeout(() => {
  console.log('Yeeey!'); // not going to run
}, 1000);

//clearTimeout(timeoutId);
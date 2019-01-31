// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function xToY(text: string): string {

  let a: string = text.substring(0, 1);
  if (text === '') {
    return text;
  } else {
    if (a === 'x') {
      a = 'y';
    }
  }
  return a.concat(xToY(text.substring(1)));
}

console.log(xToY('xerxes and xavier went to mexico'));
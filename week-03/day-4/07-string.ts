// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function xToY(text: string): string {

  let firstChar: string = text.substring(0, 1);
  if (text === '') {
    return text;
  } else {
    if (firstChar === 'x') {
      firstChar = 'y';
    } else if (firstChar === 'X') {
      firstChar = 'Y'
    }
  }
  return firstChar.concat(xToY(text.substring(1)));
}

console.log(xToY('Xerxes and Xavier went to Mexico.'));
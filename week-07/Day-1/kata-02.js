'use strict';

module.exports = { chop };

function chop(index, myArray) {
  let toReturn = -2;
  if (typeof index !== 'number' || Array.isArray(myArray) !== true) {
  } else {
    toReturn = -1;
    myArray.forEach((element, i) => {
      if (element === index) {
        toReturn = i;
      }
    })
  }
  return toReturn;
}





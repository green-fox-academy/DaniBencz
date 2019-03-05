'use strict';

/* 1) replace the list items' content with items from this list: ['apple', 'banana', 'cat', 'dog']*/

var myArray = ['apple', 'banana', 'cat', 'dog'];
for (var i = 0; i < myArray.length; i++) {
  document.getElementsByTagName('li')[i].textContent = myArray[i];
}

/*2) change the < ul > element's background color to 'limegreen'*/

/* document.getElementsByTagName('ul')[0].setAttribute('style','background:limegreen;'); */

/*use css class to change the color instead of the style property */

document.querySelector('ul').classList.add("limegreen");
'use strict';

//1)  Fill every paragraph with the last one's content.

/* var lastContent = document.getElementsByClassName('animals')[0].textContent;

for (var i = 0; i < document.querySelectorAll('p').length; i++) {
  document.querySelectorAll('p')[i].textContent = lastContent;
} */

//2)  Do the same again, but you should keep the cat strong.

var lastContent = document.getElementsByClassName('animals')[0].innerHTML;

for (var i = 0; i < document.querySelectorAll('p').length; i++) {
  document.querySelectorAll('p')[i].innerHTML = lastContent;
}
'use strict';

/* 1. store the element that says 'The King' in the 'king' variable.
console.log it. */

var king = document.getElementById('b325');
console.log(king.textContent);

/* 2. store 'The Businessman' and 'The Lamplighter'
in the 'businessLamp' variable.
console.log each of them. */

var businessLamp = document.getElementsByClassName('big');
console.log(`businessLamp:
${businessLamp[0].textContent}
${businessLamp[1].textContent}`);

/* 3. store 'The King' and 'The Conceited Man'
in the 'conceitedKing' variable.
alert them one by one. */

var conceitedKing = document.getElementsByTagName('section');
console.log(`conceitedKing:
${conceitedKing[0].innerText}`);

/* 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
in the 'noBusiness' variable.
console.log each of them. */

var noBusiness = document.getElementsByTagName('div');
console.log(`noBusiness:
${noBusiness[0].textContent}
${noBusiness[1].textContent}
${noBusiness[2].textContent}`);
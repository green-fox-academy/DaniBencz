'use strict';

console.log('foo');

//Add an item that says 'The Green Fox' to the asteroid list.
var greenFox = document.createElement('li');
greenFox.innerText = 'The Green Fox';
document.getElementsByClassName('asteroids')[0].appendChild(greenFox);

//Add an item that says 'The Lamplighter' to the asteroid list.
var lamplighter = document.createElement('li');
lamplighter.textContent = 'The Lamplighter';
document.querySelector('.asteroids').appendChild(lamplighter);

//Add a heading saying 'I can add elements to the DOM!' to the.container.
var newHeading = document.createElement('p');
newHeading.id='heading';
newHeading.textContent="Yo, I'm da headin'!";
document.getElementsByTagName('body')[0].insertBefore(newHeading, document.querySelector('.asteroids'));

//Add an image, any image, to the container.
var newImage = document.createElement('img');
newImage.id='flowres';
newImage.src='./flowers.jpg';
document.querySelector('.container').appendChild(newImage);


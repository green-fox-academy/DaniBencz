'use strict';

//Write the image's url to the console.
console.log(document.getElementsByTagName('img')[0].getAttribute('src'));

//Replace the image with a picture of your favorite animal.
document.querySelector('img').setAttribute('src', './flowers.jpg');

//Make the link point to the Green Fox Academy website.
document.getElementsByTagName('a')[0].setAttribute('href', 'https://www.greenfoxacademy.com/');

//Disable the second button.
document.querySelector('.this-one').setAttribute('disabled', 'true');

//Replace its text with 'Don't click me!'. //
document.querySelector('.this-one').textContent = "Don't click me!";
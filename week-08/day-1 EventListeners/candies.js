'use strict';

/* Gather 10.000 candies!
Clicking the ‘Create candies’ button gives you 1 candy.
You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
=======10 lollipops generate 1 candy per second.
Use the lollipop emoji to display the lollipops you have
=======Display the candy producton rate in the Candies / Second row
=======If you press the "make candy rain" button, the candy generation should speed up 10x */

let candies = 0;
let lollies = 0;
let lollyElm = document.querySelector('.lollypops');
let candyElm = document.querySelector('.candies');
let candyBtn = document.querySelector('.create-candies');
let lollyBtn = document.querySelector('.buy-lollypops');
let machineBtn = document.querySelector('.candy-machine');
let lollyImage = String.fromCodePoint(0x1F36D);

let clickCandy = (e) => {
  candies++;
  candyElm.innerText = candies;
};

let buyLolly = (e) => {
  if (candies > 10) {
    candies -= 10;
    lollies++;
    lollyElm.innerText += lollyImage;
    candyElm.innerText = candies;
  }
};

let machine = () => {
  console.log('rain');
};

candyBtn.addEventListener('click', clickCandy);
lollyBtn.addEventListener('click', buyLolly);
machineBtn.addEventListener('click', machine);
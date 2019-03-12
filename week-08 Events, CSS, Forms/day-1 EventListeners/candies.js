'use strict';

/* Gather 10.000 candies!
Clicking the ‘Create candies’ button gives you 1 candy.
You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
10 lollipops generate 1 candy per second.
Use the lollipop emoji to display the lollipops you have
Display the candy producton rate in the Candies / Second row
If you press the "make candy rain" button, the candy generation should speed up 10x */

let candies = 0;
let lollies = 0;
let lollyElm = document.querySelector('.lollypops');
let candyElm = document.querySelector('.candies');
let speedElm = document.querySelector('.speed');
let candyBtn = document.querySelector('.create-candies');
let lollyBtn = document.querySelector('.buy-lollypops');
let machineBtn = document.querySelector('.candy-machine');
let lollyImage = String.fromCodePoint(0x1F36D);
let prodRate = 1;

let clickCandy = (e) => {
  candies++;
  candyElm.innerText = candies;

  //refreshes only if candy button clicked
  if (lollies > 9) {
    setInterval(() => {
      candies += Math.floor(lollies / 10);
      candyElm.innerText = candies;
      console.log('got candy');
      speedElm.innerText = (Math.floor(lollies / 10) * prodRate);
    }, 1000 / prodRate);
  }
};

let buyLolly = (e) => {
  if (candies > 99) {
    candies -= 100;
    lollies++;
    lollyElm.innerText += lollyImage;
    candyElm.innerText = candies;
  }
};

let machine = () => {
  if (prodRate < 101) {
    prodRate *= 10;
    console.log(prodRate);
  }
};

candyBtn.addEventListener('click', clickCandy);
lollyBtn.addEventListener('click', buyLolly);
machineBtn.addEventListener('click', machine);
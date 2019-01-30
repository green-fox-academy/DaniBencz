/*  -  Create an `Animal` class
     -  Every animal has a `hunger` value, which is a whole number
     -  Every animal has a `thirst` value, which is a whole number
     -  when creating a new animal object these values are created with the default `50` value
     -  Every animal can `eat()` which decreases their hunger by one
     -  Every animal can `drink()` which decreases their thirst by one
     -  Every animal can `play()` which increases both by one
 */

class Animal {

  hunger: number;
  thirst: number;

  constructor(hger: number = 50, trst: number = 50) {
    this.hunger = hger;
    this.thirst = trst;
  }

  eat() {
    this.hunger -= 1;
  }

  drink() {
    this.thirst -= 1;
  }

  play() {
    this.hunger++;
    this.thirst++;
  }
}

const animal1 = new Animal();

animal1.drink();
animal1.drink();
animal1.play();

console.log(animal1);
//console.log(animal1.play());
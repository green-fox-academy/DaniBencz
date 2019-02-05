/* Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies */

import { Sharpie } from "./sharpie";

class SharpieSet {

  sharpieList: Sharpie[];

  constructor() {
    this.sharpieList = [];
  }

  countUsable() {
    //could be done with forEach too
    for (let i: number = 0; i < this.sharpieList.length; i++) {
      if (this.sharpieList[i].inkAmount <= 0) {
        this.sharpieList[i].usable = false;
        console.log('a sharpie got empty...')
      } else {
        this.sharpieList[i].usable = true;
      }
    }
  }

  add(sharpie: Sharpie) {
    this.sharpieList.push(sharpie);
  }

  removeTrash() {
    this.sharpieList.forEach((element, index) => {
      if (element.usable === false) {
        this.sharpieList.splice(index, 1);
      }
    });
  }
}

const SharpieSet1 = new SharpieSet;

const sharpie1 = new Sharpie('blue', 5);
const sharpie2 = new Sharpie('pink', 5, 2);
const sharpie3 = new Sharpie('yellow', 4, 4);

//console.log(sharpie1);
//Why does it execute commands from other file, but don't take declared variables?
SharpieSet1.add(sharpie1);
SharpieSet1.add(sharpie2);
SharpieSet1.add(sharpie3);
console.log(SharpieSet1);
sharpie2.use();
SharpieSet1.countUsable();
SharpieSet1.removeTrash();
console.log(SharpieSet1);

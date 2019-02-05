
/*  -  Create `Sharpie` class
     -  We should know about each sharpie their `color` (which should be a string), `width` (which will be a floating point number), `inkAmount` (another floating point number)
     -  When creating one, we need to specify the `color` and the `width`
     -  Every sharpie is created with a default 100 as `inkAmount`
     -  We can `use()` the sharpie objects
     -  which decreases inkAmount */

class Sharpie {

  color: string;
  width: number;
  inkAmount: number;
  usable: boolean = undefined;

  constructor(clr: string, wdh: number, ink: number = 100, use?: boolean) {
    this.color = clr;
    this.width = wdh;
    this.inkAmount = ink;
    this.usable = use;
  }

  use() {
    this.inkAmount -= 2;
    console.log('a sharpie has been used');
  }

}

const sharpie1 = new Sharpie('blue', 5);
const sharpie2 = new Sharpie('pink', 5, 2);
const sharpie3 = new Sharpie('yellow', 4, 4);

//sharpie1.use();
//sharpie1.use();

//console.log(sharpie1);

export { Sharpie };
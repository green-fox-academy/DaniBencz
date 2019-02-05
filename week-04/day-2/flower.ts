import { Plant } from './plant';

class Flower extends Plant {

  constructor(clr: string, wlevel: number) {
    super(clr, wlevel);
  }

  determineWaterNeed() {
    if (this.waterLevel < 5) {
      this.needsWater = true;
      console.log(`The ${this.color} Flower needs water`);
    } else {
      this.needsWater = false;
      console.log(`The ${this.color} Flower doesn't need water`);
    }
  }
}

export { Flower };
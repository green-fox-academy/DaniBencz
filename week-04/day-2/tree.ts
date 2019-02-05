
import { Plant } from './plant';

class Tree extends Plant {

  constructor(clr: string, wlevel: number) {
    super(clr, wlevel);
  }

  determineWaterNeed() {
    if (this.waterLevel < 10) {
      this.needsWater = true;
      console.log(`The ${this.color} Tree needs water`);
    } else {
      this.needsWater = false;
      console.log(`The ${this.color} Tree doesn't need water`);
    }
  }
}

export { Tree }
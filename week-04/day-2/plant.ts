'use strict';

class Plant {

  color: string;
  waterLevel: number;
  needsWater: boolean;

  constructor(clr: string, wlevel: number) {
    this.color = clr;
    this.waterLevel = wlevel;
  }
}

export { Plant };
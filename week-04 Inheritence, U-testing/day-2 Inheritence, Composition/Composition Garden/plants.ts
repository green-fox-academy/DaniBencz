'use strict';

class Irrigation {

  retainsWater: number;
  criticalLevel: number;
  hydrationLevel: number;
  plantNeedsWater: boolean;

  constructor(HL: number, RW: number, CL) {
    this.hydrationLevel = HL;
    this.retainsWater = RW;
    this.criticalLevel = CL;
    this.plantNeedsWater = true;
  }

  irrigate(units) {
    this.hydrationLevel += (units * this.retainsWater);
    this.criticalLevel > this.hydrationLevel ? this.plantNeedsWater = true : this.plantNeedsWater = false;
  }
}

export class Tree {

  irrigation: Irrigation;
  color: string;

  constructor(clr: string) {
    this.irrigation = new Irrigation(0, 0.4, 10);
    this.color = clr;
  }

  irrigate(units: number) {
    this.irrigation.irrigate(units);
  }
}

export class Flower {

  irrigation: Irrigation;
  color: string;

  constructor(clr: string) {
    this.irrigation = new Irrigation(0, 0.75, 5);
    this.color = clr;
  }

  irrigate(units: number) {
    this.irrigation.irrigate(units);
  }
}


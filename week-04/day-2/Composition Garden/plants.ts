'use strict';

class Irrigation {

  hydrationLevel: number = 0;

  irrigate(units?: number) {
    this.hydrationLevel += units;
  }
}

export class Tree {
  
  irrigation = new Irrigation();

  color: string;
  retainsWater: number = 0.4;
  criticalLevel: number = 10;
  hydrationLevel = this.irrigation.hydrationLevel;

  constructor(clr: string) {
    this.color = clr;
  }

  //how solve water retention?
  irrigate() {
    this.irrigation.irrigate();
  }
}

export class Flower {

  irrigation = new Irrigation();

  color: string;
  retainsWater: number = 7.5;
  criticalLevel: number = 5;
  hydrationLevel = this.irrigation.hydrationLevel;

  constructor(clr: string) {
    this.color = clr;
  }

  //how solve water retention?
  irrigate() {
    this.irrigation.irrigate();
  }
}


'use strict';

abstract class AirCraft {

  ammunition: number;
  maxAmmo: number;
  baseDamage: number;

  fight(): number {
    let doneDamage = this.ammunition * this.baseDamage;
    this.ammunition = 0;
    return doneDamage;
  }

  refill() {

  }
}

export class F16 extends AirCraft {

  constructor() {
    super();
    this.ammunition = 0;
    this.maxAmmo = 8;
    this.baseDamage = 30;
  }
}

export class F35 extends AirCraft {

  constructor() {
    super();
    this.ammunition = 0;
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }
}


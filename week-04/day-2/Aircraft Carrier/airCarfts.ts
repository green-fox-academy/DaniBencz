'use strict';

abstract class AirCraft {

  ammunition: number;
  maxAmmo: number;
  baseDamage: number;
  doneDamage: number;

  fight(): number {
    this.doneDamage = this.ammunition * this.baseDamage;
    this.ammunition = 0;
    return this.doneDamage;
  }

  refill(ammo: number): number {
    let tookAmmo: number = ammo - (this.maxAmmo - this.ammunition);
    this.ammunition += tookAmmo;
    return ammo - tookAmmo;
  }

  getType() { }

  getStatus(): string {
    return `Type ${this.getType}, Ammo: ${this.ammunition}, Base Damage: ${this.baseDamage}, All Damage: ${this.doneDamage}`;
  }

  isPriority() { }
}

export class F16 extends AirCraft {

  constructor() {
    super();
    this.ammunition = 0;
    this.maxAmmo = 8;
    this.baseDamage = 30;
  }

  getType(){
    return 'F16';
  }

  isPriority(){
    return false;
  }
}

export class F35 extends AirCraft {
  
  constructor() {
    super();
    this.ammunition = 0;
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }
  
  getType(){
    return 'F35';
  }

  isPriority(){
    return true;
  }
}

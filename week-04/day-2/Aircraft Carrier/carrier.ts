'use strict';

import { F16, F35 } from './airCarfts'

export class Carrier {

  airCrafts: F16[];
  ammoStore: number;
  health: number;
  totalDamage: number;

  constructor(ammo: number) {
    this.airCrafts;
    this.ammoStore;
    this.health = 5000;
    this.totalDamage;
  }

  //oops...
  add(aircraft?: F16, F35) {
    this.airCrafts.push();
  }

  fill(ammo): void {
    try {
      let ammoUsed: number = 0;
      this.airCrafts.forEach(aircraft => {
        if (aircraft.ammunition < aircraft.maxAmmo
          && aircraft.isPriority
          && this.ammoStore > 0) {
          ammoUsed = ammo - aircraft.refill(ammo);
          this.ammoStore -= ammoUsed;
        }
      });
      this.airCrafts.forEach(aircraft => {
        if (this.ammoStore > 0) {
          aircraft.refill(ammo);
          this.ammoStore -= ammoUsed;
        }
      });
      if (this.ammoStore === 0) {
        throw 'Oops, no ammo...'
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  getStatus() {
    this.totalDamage = 0;
    this.airCrafts.forEach(aircraft =>{
      this.totalDamage += aircraft.doneDamage;
    });
    return `HP: ${this.health}, Aircraft count: ${this.airCrafts.length}, Ammo Storage: ${this.ammoStore}, Total damage ${this.totalDamage}` + `Aircraft:
    ${this.airCrafts}`;
  }
}



'use strict';

import { F16, F35, AirCraft } from './airCarfts'

export class Carrier {

  airCrafts: AirCraft[];
  ammoStore: number;
  health: number;
  totalDamage: number;

  constructor(ammo: number) {
    this.airCrafts = [];
    this.ammoStore = ammo;
    this.health = 5000;
    this.totalDamage = 0;
  }

  add(aircraft: AirCraft) {
    this.airCrafts.push(aircraft);
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
      ammoUsed = 0;
      this.airCrafts.forEach(aircraft => {
        if (this.ammoStore > 0) {
          aircraft.refill(ammo);
          ammoUsed = ammo - aircraft.refill(ammo);
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

  fight() {
    this.airCrafts.forEach(aircraft => {
      aircraft.fight();
      this.totalDamage += aircraft.doneDamage;
    })
  }

  getStatus() {
    let inventoryArr: string[] = [];
    let inventoryStr: string = '';
    this.totalDamage = 0;
    this.airCrafts.forEach(aircraft => {
      this.totalDamage += aircraft.doneDamage;
      inventoryArr.push(aircraft.getStatus());
      inventoryStr = inventoryArr.join('\n')
    });

    return `HP: ${this.health}, Aircraft count: ${this.airCrafts.length}, Ammo Storage: ${this.ammoStore}, Total damage ${this.totalDamage}, Aircraft:
${inventoryStr}`;
  }
}



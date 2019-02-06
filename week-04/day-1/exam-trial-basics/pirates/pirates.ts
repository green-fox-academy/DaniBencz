'use strict';

//this is the updated version, corrected after exam day

class Pirate {

  //removed '?' from optional variable in fileds
  name: string;
  gold: number;
  captain: boolean;
  woodenLeg: boolean;
  health: number;

  //moved default values of parameters here
  constructor(pName: string, GD: number = 10, leg?: boolean, rank?: boolean, HP: number = 10) {
    this.name = pName;
    this.gold = GD;
    this.health = HP;
    this.captain = rank;
    this.woodenLeg = leg;
  }

  //added return type void
  work(): void {
    if (this.captain) {
      this.health -= 5;
      this.gold += 10;
    } else {
      this.health -= 1;
      this.gold += 1;
    }
  }

  party(): void {
    if (this.captain) {
      this.health += 10;
    } else {
      this.health += 1;
    }
  }

  greet() {
    if (this.woodenLeg) {
      return `Hello, I'm ${this.name}. I have a wooden leg and ${this.gold} golds.`
    } else {
      return `Hello, I'm ${this.name}. I still have my real legs and ${this.gold} golds.`
    }
  }
}

const pirate1 = new Pirate('Jack', 5);
const pirate2 = new Pirate('Francis', 10, false, true);
const pirate3 = new Pirate('Zheng', 10, true);
const pirate4 = new Pirate('Anne', 15);

class Ship {

  pirateList: Pirate[] = [];

  //adding crew to ship, only 1 captain allowed, needs further implementation
  addNewPirate(pirate: Pirate): void {
    if (this.isThereCaptain() && pirate.captain) {
      this.pirateList.push(pirate);
    }
  }

  //filtering for captain, needs further implementation
  isThereCaptain(): boolean {
    const result = this.pirateList.some(function (pirate: Pirate): boolean {
      return pirate.captain === true;
    })
  }

  constructor(pirates: Pirate[] = []) {
    this.pirateList = pirates;
  }

  getPoorPirates(): string[] {
    let poorPirates: string[] = [];
    this.pirateList.forEach((pirate) => {
      if (pirate.gold < 15 && pirate.woodenLeg) {
        poorPirates.push(pirate.name);
      }
    });
    return poorPirates;
  }

  getGolds(): number {
    let allGold: number = 0;
    this.pirateList.forEach((pirate) => {
      allGold += pirate.gold;
    });
    return allGold;
  }

  lastDayOnTheShip(): string {
    this.pirateList.forEach(element => {
      element.party();
    });
    return ('Pirates went to party after last day aboard!');
  }

  prepareForBattle(): string {
    this.pirateList.forEach(pirate => {
      for (let i: number = 1; i < 6; i++) {
        pirate.work();
      }
    });
    this.lastDayOnTheShip();
    return ('Pirates went to work.');
  }
}

const blcakPearl = new Ship([pirate1, pirate2, pirate3, pirate4]);

pirate1.work();
console.log(pirate1.greet());
console.log(blcakPearl.getPoorPirates());
console.log(blcakPearl.getGolds());
console.log(blcakPearl.lastDayOnTheShip(pirate1));
console.log(blcakPearl.prepareForBattle(pirate2));
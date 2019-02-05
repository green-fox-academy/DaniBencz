'use strict';

class Pirate {

  name: string;
  gold: number;
  captain?: boolean;
  woodenLeg?: boolean;
  health: number = 10;

  constructor(pName: string, GD: number, leg?: boolean, rank?: boolean, HP?: number) {
    this.name = pName;
    this.gold = GD;
    this.health = HP;
    this.captain = rank;
    this.woodenLeg = leg;
  }

  work() {
    if (this.captain) {
      this.health -= 5;
      this.gold += 10;
    } else {
      this.health -= 1;
      this.gold += 1;
    }
  }

  party() {
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

  constructor(pirates: Pirate[] = []) {
    this.pirateList = pirates;
  }

  getPoorPirates(): string[] {
    let poorPirates: string[] = [];
    this.pirateList.forEach((element) => {
      if (element.gold < 15 && element.woodenLeg) {
        poorPirates.push(element.name);
      }
    });
    return poorPirates;
  }

  getGolds(): number {
    let allGold: number = 0;
    this.pirateList.forEach((element) => {
      allGold += element.gold;
    });
    return allGold;
  }

  lastDayOnTheShip(): string {
    this.pirateList.forEach(element => {
      element.party();
    });
    return ('Pirates went to party after last day aboard!');
  }

  prepareForBattle() {
    this.pirateList.forEach(element => {
      element.work();
      element.work();
      element.work();
      element.work();
      element.work();
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
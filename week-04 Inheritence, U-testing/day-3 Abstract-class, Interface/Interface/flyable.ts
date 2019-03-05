'use strict';

interface Flyable {

  land(): void;
  fly(): void;
  takeOff(): void;
}

abstract class Vehicle {

  idNumber: number;
  color: string;
  canFly: boolean;
}

class Helicopter extends Vehicle implements Flyable {

  canFly = true;

  constructor(clr: string = 'green', ID?: number) {
    super();
    this.idNumber = ID;
    this.color = clr;
    this.canFly
  }

  land() {
    console.log('Helicopter lands');
  }

  fly() {
    console.log('Helicopter flies');
  }

  takeOff() {
    console.log('Helicopter takes off');
  }
}

let helicopter1 = new Helicopter('black');

helicopter1.takeOff();


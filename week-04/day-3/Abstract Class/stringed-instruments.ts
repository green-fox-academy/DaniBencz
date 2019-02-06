'use strict';

abstract class Instrument {
  abstract name: string;
  abstract play();
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  abstract sound();
}

class ElectricGuitar extends StringedInstrument {
  name: string = 'ElectricGuitar';
  constructor(strings: number = 6) {
    super();
    this.numberOfStrings = strings;
  }

  sound() {
    return 'Twang';
  }

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings} instrument that goes ${this.sound()}`);
  }
}

class BassGuitar extends StringedInstrument {
  name: string = 'BassGuitar';
  constructor(strings: number = 4) {
    super();
    this.numberOfStrings = strings;
  }

  sound() {
    return 'Duum-duum-duum';
  }
  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings} instrument that goes ${this.sound()}`);
  }
}

class Violin extends StringedInstrument {
  name: string = 'Violin';
  constructor(strings: number = 4) {
    super();
    this.numberOfStrings = strings;
  }

  sound() {
    return 'Screech';
  }
  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings} instrument that goes ${this.sound()}`);
  }
}

export { ElectricGuitar, BassGuitar, Violin };

'use strict';

abstract class Instrument {
  abstract play();
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  abstract sound();
  play() {
    return this.sound();
  }
}

class ElectricGuitar extends StringedInstrument {

  constructor(strings: number = 6) {
    super();
    this.numberOfStrings = strings;
  }

  sound() {
    return 'Twang';
  }
}

class BassGuitar extends StringedInstrument {

  constructor(strings: number = 4) {
    super();
    this.numberOfStrings = strings;
  }

  sound() {
    return 'Duum-duum-duum';
  }
}

class Violin extends StringedInstrument {

  constructor(strings: number = 4) {
    super();
    this.numberOfStrings = strings;
  }

  sound() {
    return 'Screech';
  }
}

export { ElectricGuitar, BassGuitar, Violin };

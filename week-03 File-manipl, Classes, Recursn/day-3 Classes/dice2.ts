// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll()
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

export { }

class DiceSet {
  private dice: number[];
  readonly numOfDices: number = 6;

  roll(): number[] {
    this.dice = [];
    for (var i = 0; i < this.numOfDices; i++) {
      this.dice.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dice;
  }

  reroll(index?: number) {
    if (index == undefined) {
      for (var i = 0; i < this.numOfDices; i++) {
        this.dice[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dice[index] = Math.floor(Math.random() * 6 + 1);
    }
  }

  getCurrent(index?: number) {
    if (index == undefined) {
      return this.dice;
    } else {
      return this.dice[index];
    }
  }
}

let diceSet = new DiceSet();

//for this below, to make sense, had to set 'dice' to protected first
function rollControl() {
  diceSet.roll();

  for (let i: number = 0; i < diceSet.numOfDices; i++) {

    if (diceSet.getCurrent(i) != 6) {
      while (diceSet.getCurrent(i) != 6) {
        diceSet.reroll(i);
      }
    }
  }
  console.log(diceSet.getCurrent());
}

rollControl();

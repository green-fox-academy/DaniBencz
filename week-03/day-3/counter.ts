/* Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */

class Counter {

  input: number;
  origi: number;

  constructor(num: number = 0) {
    this.input = num;
    this.origi = num;
  }

  add(int: number = undefined) {
    if (int !== undefined) {
      this.input += int;
    } else {
      this.input++;
    }
  }

  get() {
    console.log('value is ' + `${this.input}` + ' now');
  }

  reset() {
    this.input = this.origi;
    console.log('value is reset to ' + this.origi);
  }
}

const first = new Counter(2);
const second = new Counter(4);

first.add(2);
first.get();
first.reset();
first.get();
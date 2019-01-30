
class PostIt {

  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(bgColor: string = 'szoveg', txt: string = 'szoveg', txtColor: string = 'szoveg') {
    this.backgroundColor = bgColor;
    this.text = txt;
    this.textColor = txtColor;
  }
}

const object1 = new PostIt('orange', 'Idea1', 'blue');
const object2 = new PostIt('pink', 'Awesome', 'black');
const object3 = new PostIt('yellow', 'Superb', 'green');
const object4 = new PostIt();

console.log(object4);
console.log();

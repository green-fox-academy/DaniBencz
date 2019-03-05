
import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

const thing1 = new Thing('Get milk');
const thing2 = new Thing('Remove the obstacles');
const thing3 = new Thing('Stand up');
const thing4 = new Thing('Eat lunch');

thing3.complete();
thing4.complete();

fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);

function print(some) {
  for (let i: number = 0; i < some.things.length; i++) {
    if (some.things[i].completed) {
      console.log(i + 1 + '. [x] ' + some.things[i].name);
    } else {
      console.log(i + 1 + '. [ ] ' + some.things[i].name);
    }
  }
}

print(fleet);

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */
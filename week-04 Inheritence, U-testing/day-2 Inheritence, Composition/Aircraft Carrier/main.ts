'use strict';

import { Carrier } from './carrier'
import { F35, F16 } from './airCarfts';

let lightning1 = new F35;
let lightning2 = new F35;
let lightning3 = new F35;
let falcon1 = new F16;
let falcon2 = new F16;
let falcon3 = new F16;
let nimitz = new Carrier(2300);

nimitz.add(lightning1);
nimitz.add(lightning2);
nimitz.add(lightning3);
nimitz.add(falcon1);
nimitz.add(falcon2);
nimitz.add(falcon3);


console.log(nimitz.getStatus());
nimitz.fill(100);
console.log(nimitz.getStatus());
nimitz.fight();
//lightning1.fight();
//falcon1.fight();
console.log(nimitz.getStatus());

'use strict';

import {Carrier} from './carrier'
import { F35, F16 } from './airCarfts';

let lightning1 = new F35;
let lightning2 = new F35;
let lightning3 = new F35;
let falcon1 = new F16;
let falcon2 = new F16;
let falcon3 = new F16;
let nimitz = new Carrier(2300);


console.log(nimitz.getStatus);
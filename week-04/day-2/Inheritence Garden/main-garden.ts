'use strict';

import { Tree } from './tree';
import { Flower } from './flower';
import { Garden } from './garden';

let yellowFlower = new Flower('yellow', 0);
let blueFlower = new Flower('blue', 0);
let purpleTree = new Tree('purple', 0);
let orangeTree = new Tree('orange', 0);
let eden = new Garden();

eden.addFlower(blueFlower);
eden.addFlower(yellowFlower);
eden.addTree(purpleTree);
eden.addTree(orangeTree);

eden.determineWaterNeed();
eden.irigating(40);
eden.determineWaterNeed();
eden.irigating(70);
eden.determineWaterNeed();
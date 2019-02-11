'use strict';

import { Tree, Flower } from './plants';
import { Garden } from './garden';

let yellowFlower = new Flower('yellow');
let blueFlower = new Flower('blue');
let purpleTree = new Tree('purple');
let orangeTree = new Tree('orange');
let eden = new Garden();

eden.addFlower(blueFlower);
eden.addFlower(yellowFlower);
eden.addTree(purpleTree);
eden.addTree(orangeTree);

eden.irrigating(100);
eden.irrigating(50);
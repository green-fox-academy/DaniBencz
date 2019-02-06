'use strict';

import { Tree } from './tree';
import { Flower } from './flower';

class Garden {

  trees: Tree[] = [];
  flowers: Flower[] = [];

  constructor(trees: Tree[] = [], flowers: Flower[] = []) {
    this.trees = trees;
    this.flowers = flowers;
  }

  addTree(tree: Tree): void {
    this.trees.push(tree);
  }

  addFlower(flower: Flower): void {
    this.trees.push(flower);
  }

  //this checks which one need irrigation
  determineWaterNeed() {
    this.trees.forEach(tree => {
      tree.determineWaterNeed();
    });
    this.flowers.forEach(flower => {
      flower.determineWaterNeed();
    });
    console.log('');
  }

  irigating(units: number) {

    let plantsThatNeedWater: number = 0;

    //this check how many plants need water
    this.trees.forEach(tree => {
      if (tree.needsWater) {
        plantsThatNeedWater++;
      }
    });
    this.flowers.forEach(flower => {
      if (flower.needsWater) {
        plantsThatNeedWater++;
      }
    });

    console.log(`Watering with ${units}`);
    let availableForPlant: number = (units / plantsThatNeedWater);

    //this waters them equally
    this.trees.forEach(tree => {
      if (tree.needsWater) {
        tree.waterLevel += (0.4 * availableForPlant);
      }
    });
    this.flowers.forEach(flower => {
      if (flower.needsWater) {
        flower.waterLevel += (0.75 * availableForPlant);
      }
    });
    console.log(`Plants got ${availableForPlant} units of water each`);
  }
}

export { Garden };

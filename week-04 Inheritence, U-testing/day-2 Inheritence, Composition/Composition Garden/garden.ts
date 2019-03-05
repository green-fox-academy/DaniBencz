'use strict;'

import { Tree, Flower } from './plants'

export class Garden {

  trees: Tree[] = [];
  flowers: Flower[] = [];

  addTree(tree: Tree): void {
    this.trees.push(tree);
  }

  addFlower(flower: Flower): void {
    this.flowers.push(flower);
  }

  irrigating(units: number) {

    let plantsThatNeedWater: number = 0;
    console.log(`=========Watering with ${units} units`);

    //this checks how many plants need water
    this.trees.forEach(tree => {
      if (tree.irrigation.plantNeedsWater) {
        plantsThatNeedWater++;
        console.log(`The ${tree.color} tree needs water`);
      }
      else {
        console.log(`The ${tree.color} tree doesn't need water`);
      }
    });

    this.flowers.forEach(flower => {
      if (flower.irrigation.plantNeedsWater) {
        plantsThatNeedWater++;
        console.log(`The ${flower.color} flower needs water`);
      }
      else {
        console.log(`The ${flower.color} flower doesn't need water`);
      }
    });

    console.log(`=========plants that need water: ${plantsThatNeedWater}`);
    let availableForPlant: number = (units / plantsThatNeedWater);

    //this waters them equally
    this.trees.forEach(tree => {
      if (tree.irrigation.plantNeedsWater) {
        tree.irrigate(availableForPlant);
      }
    });
    this.flowers.forEach(flower => {
      if (flower.irrigation.plantNeedsWater) {
        flower.irrigate(availableForPlant);
      }
    });
  }
}
'use strict';

let height: number = 10;
let width: number = 10;
let depth: number = 10;

let surfaceArea: number = 2 * (width * depth + width * height + height * depth);
let volume: number = depth * width * height;

console.log("Surface Area: " + surfaceArea);
console.log("Volume: " + volume);

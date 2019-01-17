'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let remainingSecs: number = 86400 - (currentHours * currentMinutes * currentSeconds);
console.log(remainingSecs);

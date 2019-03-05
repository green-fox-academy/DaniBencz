'use strict';

let daily = 6;
let daysPerWeek= 5;
let weeks = 17;

let percent = daily*daysPerWeek/0.52;
let p = percent.toFixed(1);

console.log ("A Greenfox attendee codes on average " + daily * daysPerWeek * weeks + " hours during a semester.");
console.log ("That is, they spend " + p + " percent of their weekly work-time coding.");

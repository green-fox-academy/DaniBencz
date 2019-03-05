'use strict';

let a: number = 3;
a += 10;

console.log(a);

let b: number = 100;
b -= 7;

console.log(b);

let c: number = 44;
c *= 2;

console.log(c);

let d: number = 125;
d /= 5;

console.log(d);

let e: number = 8;
e **= 3;

console.log(e);

let f1: number = 123;
let f2: number = 345;
console.log(f1 > f2);

let g1: number = 350;
let g2: number = 200;
console.log(2 * 2 > g1);

let h: number = 1357988018575474;
h %= 11;
console.log(h === 0)

let i1: number = 10;
let i2: number = 3;
let I:Boolean = i1 > i2**2 && i1 < i2**3;
console.log(I);

let j: number = 1521;
let j3: number = j % 3;
let j5: number = j % 5;
let J: Boolean = j3 === 0 && j5 === 0;
console.log(J);

let k: string = 'Apple';
k = k + k + k + k;
console.log(k);
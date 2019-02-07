'use strict';

import { Sum } from './sum'

let test1 = require('tape');
let test2 = require('tape');
let test3 = require('tape');
let test4 = require('tape');
let test5 = require('tape');

let sum1 = new Sum;

test1('testing sum', t => {
  let anArray: number[] = [1, 2, 3, 4];
  t.equal(sum1.sum(anArray), 10);
  t.end();
});

test2('test empty array', t => {
  let anArray: number[] = [];
  t.equal(sum1.sum(anArray), 0);
  t.end();

});

test3('testing 1 element array', t => {
  let anArray: number[] = [1];
  t.equal(sum1.sum(anArray), 1);
  t.end();
});

test4('testing array with null in it', t => {
  let anArray: number[] = [null];
  t.equal(sum1.sum(anArray), 0);
  t.end();
});

//can't be tested: won't compile, since string in not number
test5('testing array with string in it', t => {
  let anArray: number[] = ['foo'];
  t.equal(sum1.sum(anArray), NaN);
  t.end();
});

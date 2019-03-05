'use strict';

import { anagram } from './anagram'
let test = require('tape');

test('testing anagram', t => {
  let string1 = 'csapba szarni';
  let string2 = 'szarba csapni';
  t.equal(anagram(string1, string2), true);
  t.end();
});
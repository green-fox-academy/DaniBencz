'use strict';
const kata = require('./kata-02')
const test = require('tape');

test('testing chop', t => {
  let array1 = [1, 3, 5];
  let array2 = [-3, -1, 0, 1, 3, 5, 7];
  let array3 = 'foo';
  t.equal(kata.chop(1, array1), 0);
  t.equal(kata.chop(3, array1), 1);
  t.equal(kata.chop(5, array1), 2);
  t.equal(kata.chop(-1, array2), 1);
  t.equal(kata.chop('efaef', array3), -2);
  t.equal(kata.chop(7, array3), -2);
  t.equal(kata.chop(7, 'sgsgs'), -2);

  t.end();
});

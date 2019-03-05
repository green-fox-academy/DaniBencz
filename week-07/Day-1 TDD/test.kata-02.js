'use strict';
const exported = require('./kata-02')

let test = require('tape');

test('testing chop', t => {
  let array1 = [1, 3, 5];
  let array2 = [-3, -1, 0, 1, 3, 5, 7];
  let array3 = 'foo';
  t.equal(exported.chop(1, array1), 0);
  t.equal(exported.chop(3, array1), 1);
  t.equal(exported.chop(5, array1), 2);
  t.equal(exported.chop(-1, array2), 1);
  t.equal(exported.chop('efaef', array3), -2);
  t.equal(exported.chop(7, array3), -2);
  t.equal(exported.chop(7, 'sgsgs'), -2);

  t.end();
});

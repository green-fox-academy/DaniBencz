
'use strict';

import { Apple } from './apple'

let test = require('tape');

test('testing Apple class', t => {

  let apple1 = new Apple;

  t.equal(apple1.getApple(), 'apple');
  t.end();

});
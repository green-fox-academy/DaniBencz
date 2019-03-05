'use strict';

import { fibonacci } from './fibonacci'

let test = require('tape');

test('testing fibonacci finder', t => {
  t.equal(fibonacci(25), 75025);
  t.end();
});
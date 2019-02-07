'use strict';

import { countLetters } from './count-letters'

let test = require('tape');

test('testing with empty string', t => {
  let myString: string = '';
  t.equal(countLetters(myString), {});
  t.end();
});


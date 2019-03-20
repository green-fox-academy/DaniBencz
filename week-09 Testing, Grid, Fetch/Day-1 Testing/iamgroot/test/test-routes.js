'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('groot endpoint', (t) => {
  request(app)
  .get('/teapot')
  //.expect('Content-Type', /json/)
  //.expect('Content-Length', '10')
  .expect(404)
  .end(function(err, res) {
    t.error(err);
    t.end();
  });
});
/* Write a test where you check:
With giving a parameter the status is ok,
and the given respone is the same as expected
Without giving a parameter the status is not ok,
and the given error respone is the same as expected */
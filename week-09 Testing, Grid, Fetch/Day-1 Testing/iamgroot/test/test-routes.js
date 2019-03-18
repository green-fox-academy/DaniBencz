'use strict';
const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('groot endpoint', (t) => {
  request(app)
  .get('/groot/groot')
  //.expect('Content-Type', /json/)
  //.expect('Content-Length', '5')
  .expect(200)
  .end(function(err, res) {
    t.error(err);
    t.end();
  });
});
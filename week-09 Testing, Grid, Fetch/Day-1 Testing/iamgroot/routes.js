'use strict';

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  res.send('yohoo');
});

app.get('/groot/:any', (req, res) => {
  if (req.params) {
    res.status(200).send();
  }
});

module.exports = app;
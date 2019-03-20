'use strict';

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  let input = req.query;
  res.set('Content-type', 'application/json');
  if(input.message === undefined){
    res.json({
    "error": "I am Groot!"
  });
  } else {
    res.json({
      "received": `${input.message}`,
      "translated": "I am Groot!"
    });
  }
});

app.get('/teapot/:what', (req, res) => {
  if (req.params === null) {
    res.send();
  } else {
    res.status(200).send("I'm Groot!");
  }
});

module.exports = app;
'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let guest = 'Guest';
  if (req.query.name) {
    guest = req.query.name;
  }
  res.render('home', {
    name: guest + '!'
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

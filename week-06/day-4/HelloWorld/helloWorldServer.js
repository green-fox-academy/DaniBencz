'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
//Express will automatically look inside the views/ folder for template files
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('home', {
    //have a middleware!! - see below
    image: 'assets/yawn.jpg',
    title: 'Hello World!',
    name: 'Astral',
    day: 4
  });
});

//middleware is ure friend!
app.use('/assets', express.static('assets'));

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

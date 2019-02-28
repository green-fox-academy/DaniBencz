'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
//server file can be accessed from anywhere
const path = require('path');

//middleware: connects css files with html
app.use('/assets', express.static('assets'));

//creating endpoint, serve our index.html to /
app.get('/', (req, res) => {
  //res.sendFile(__dirname + '/index.html');
  //this is the same, only failsafe
  res.sendFile(path.join(__dirname + '/index.html'));
});

//creating other endpoint
app.get('/about', (req, res) => {
  let data = req.query;
  console.log(data);
  //with templating, use res.render
  res.send(`<h1>This is about ${data.name} and ${data.day}</h1>`);
});

//endpoint with param
app.get('/contact/:id:name', (req, res) =>{
  res.send(`<h1>${req.params.id}, ${req.params.name}</h1>`);
});

//this starts server actually
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
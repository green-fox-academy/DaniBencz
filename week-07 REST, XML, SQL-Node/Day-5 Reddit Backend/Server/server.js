'use strict';

require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;
//const path = require('path');

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// = = = "Reddit" Backend Server = = =

app.get('/hello', (req, res) => {

  res.send('<h1>Hello World!</h1>');
});


app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM post;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

'use strict';
require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

// = = = Bookstore Server = = =

app.get('/', (req, res) => {
  //endpoint with its path
  res.sendFile(path.join(__dirname, './assets/bookstore.html'));
});

app.use('/assets', express.static('assets'));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.get('/authors', (req, res) => {
  conn.query('SELECT * FROM author;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});

app.get('/books', (req, res) => {
  let input = req.query;
  if (input.category === 'Science') {
    console.log(input.category);
    conn.query(`SELECT * FROM book_mast WHERE cate_id = 'CA001';`, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    });
  }
  else {
    conn.query('SELECT * FROM book_mast;', (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
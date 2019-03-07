'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
const path = require('path');

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

/* conn.connect((err) => {
  if (err) {
    console.log('Error connecting to DB');
    console.error();
    return;
  }
  console.log('DB is connected');
});  */
//conn.end();


app.get('/author', (req, res) => {

  conn.query('SELECT * FROM author;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
    //console.log(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
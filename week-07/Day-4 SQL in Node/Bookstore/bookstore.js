'use strict';

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
app.use(express.json());

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
    let myString = '';
    rows.forEach(row => {
      myString = myString.concat(`${row.aut_name} is from ${row.home_city}\n`);
    });

    res.send(myString);
    //console.log(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
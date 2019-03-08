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

app.use(express.json());

app.post('/json', (req, res) => {
  //setting response type
  res.set('Content-type', 'application/json');
  //need to clarify this !!!!
  if (req.get('Content-type') === 'application/json') {
    let title = req.body.title;
    let url = req.body.url;
    //check this before!!!!!!
    let owner = req.body.owner;

    let SQL = `INSERT INTO post (title, url, owner_id) VALUES ('${title}', '${url}', ${owner});`;

    conn.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }

      SQL = `SELECT * FROM post WHERE title='${title}' AND url='${url}' AND owner_id=${owner};`;

      conn.query(SQL, (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).send();
          return;
        }
        res.status(200).json(rows);
      });
    });
  } else {
    res.send('Invalid format!');
  };
});

app.get('/owner', (req, res) => {
  res.set('Content-type', 'application/json');
  conn.query('SELECT * FROM owner;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.status(200).json(rows);
  });
});

app.get('/posts', (req, res) => {
  res.set('Content-type', 'application/json');
  conn.query('SELECT * FROM post;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.status(200).json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

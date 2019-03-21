'use strict';

require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// = = = Orientation Exam Backend = = =

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});

app.get('/questions', (req, res) => {
  //It should render a static HTML, as a manage questions page.
})

app.get('/api/game', (res, req) => {
  //sends data of new random question-answer pair
  res.set('Content-type', 'application/json');
  let random = Math.floor(Math.random() * 40) + 1;
  let SQL = `SELECT * FROM tables;`;
  conn.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.status(200).send(rows);
  });
});

app.get('api/questions', (req, res) => {
  //This endpoint should return all the questions.
})

app.post('api/questions', (req, res) => {
  //If you fill the form and click on the submit button, it should add a new question and its answers
})

app.delete('api/questions/:id', (req, res) => {
  //If you click on the delete link (which is next to the question)
  //It should delete the question and its answers by id
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
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
  database: process.env.DB_DATABASE,
  multipleStatements: true
});

app.use('/assets', express.static('assets'));
app.use(express.json());

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/manage.html'));
})

app.get('/api/game', (req, res) => {
  res.set('Content-type', 'application/json');
  let SQL = `SELECT id FROM questions;`;
  conn.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    let random = Math.floor(Math.random() * rows.length) + 1;
    let id = rows[random].id;
    SQL = `SELECT questions.id, question, answer, is_correct FROM questions LEFT JOIN answers ON questions.id=question_id WHERE question_id=${id}`;
    conn.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      res.send(rows);
    });
  });
});

app.get('/api/questions', (req, res) => {
  res.set('Content-type', 'application/json');
  let SQL = `SELECT * FROM questions;`;
  conn.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});

app.post('/api/questions', (req, res) => {
  let question = req.body.question;
  let a1 = req.body.answers[0].answer_1;
  let a2 = req.body.answers[1].answer_2;
  let a3 = req.body.answers[2].answer_3;
  let a4 = req.body.answers[3].answer_4;
  let ic1 = req.body.answers[0].is_correct;
  let ic2 = req.body.answers[1].is_correct;
  let ic3 = req.body.answers[2].is_correct;
  let ic4 = req.body.answers[3].is_correct;
  let answers = [a1, a2, a3, a4];
  let isCorrect = [ic1, ic2, ic3, ic4];

  let SQL = `INSERT INTO questions (question) VALUES ('${question}');`;
  conn.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    SQL = `SELECT id FROM questions WHERE question='${question}';`;
    conn.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      let id = rows[0].id;
      SQL = `INSERT INTO answers (question_id, answer, is_correct) VALUES (${id}, '${answers[0]}', ${isCorrect[0]});
            INSERT INTO answers (question_id, answer, is_correct) VALUES (${id}, '${answers[1]}', ${isCorrect[1]});
            INSERT INTO answers (question_id, answer, is_correct) VALUES (${id}, '${answers[2]}', ${isCorrect[2]});
            INSERT INTO answers (question_id, answer, is_correct) VALUES (${id}, '${answers[3]}', ${isCorrect[3]});`;
      conn.query(SQL, (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).send();
          return;
        }
        console.log('database updated');
        res.send('database updated');
      });
    });
  });
})

app.delete('/api/questions/:id', (req, res) => {
  let id = req.params.id;
  let SQL = `DELETE FROM questions WHERE id=${id};
            DELETE FROM answers WHERE question_id=${id};`;
  conn.query(SQL, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    console.log('question deleted');
    res.send('question deleted');
  });
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
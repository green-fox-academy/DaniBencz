'use strict';

require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// = = = "Reddit" Backend Server = = =

//seting view engine and middleware
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(express.json());
//this for form data
app.use(express.urlencoded({ extended: true }));

//main page (with ejs)
app.get('/', (req, res) => {
  conn.query('SELECT * FROM post;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    res.render('index', { rows });
  });
})

//posting
app.post('/json', (req, res) => {
  //setting response type
  res.set('Content-type', 'application/json');
  if (req.get('Content-type') === 'application/json') {
    let title = req.body.title;
    let url = req.body.url;
    //=========== this needs better implementation
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

//upvoting
app.put('/posts/:id/upvote', (req, res) => {
  res.set('Content-type', 'application/json');
  if (req.get('Content-type') === 'application/json') {
    let id = req.params.id;
    console.log(id);
    let SQL = `UPDATE post SET score=score+1 WHERE id=${id};`;
    //this to make the update
    conn.query(SQL, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      }
      //this to send updated score to website
      conn.query(`SELECT score FROM post WHERE id=${id}`, (err, rows) => {
        if (err) {
          console.error(err);
          res.status(500).send();
          return;
        }
        res.status(200).json(rows);
      });
    });
  } else {
    console.log('not upvoted');
    res.send('Invalid format!');
  };
});

//downvoting
app.put('/posts/:id/downvote', (req, res) => {
  res.set('Content-type', 'application/json');
  if (req.get('Content-type') === 'application/json') {
    let id = req.params.id;
    console.log(id);
    let SQL = `UPDATE post SET score=score-1 WHERE id=${id};`;
    conn.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
        //this to send updated score to website
      } conn.query(`SELECT score FROM post WHERE id=${id}`, (err, rows) => {
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

//query users
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

//query posts
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

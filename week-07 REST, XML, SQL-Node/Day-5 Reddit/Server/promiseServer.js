'use strict';

require('dotenv').config();
const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  multipleStatements: true
});

// = = = "Reddit" Backend Server = = =

//app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(express.json());
//in case form builtin function
//app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  conn.query('SELECT * FROM post;', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send();
      return;
    }
    //res.render('index', { rows });
    res.sendFile(path.join(__dirname, 'assets/index.html'));
  });
})

//posting
app.post('/json', (req, res) => {
  //setting response type
  res.set('Content-type', 'application/json');
  if (req.get('Content-type') === 'application/json') {
    let title = req.body.title;
    let url = req.body.url;
    let name = req.body.name;
    let SQL = `SELECT name FROM owner WHERE name='${name}';`;
    let ownerID = null;

    conn.query(SQL, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      } else if (rows.length !== 0) {
        res.send({ 'message': 'name in use' });
      } else {
        SQL = `INSERT INTO owner (name) VALUES('${name}');`;
        conn.query(SQL, (err, rows) => {
          if (err) {
            console.error(err);
            res.status(500).send();
            return;
          }
          SQL = `SELECT id FROM owner WHERE name='${name}';`;
          conn.query(SQL, (err, rows) => {
            if (err) {
              console.error(err);
              res.status(500).send();
              return;
            } else {
              ownerID = rows[0].id;
            }
            SQL = `INSERT INTO post (title, url, owner_id) VALUES('${title}', '${url}', ${ownerID});`;
            conn.query(SQL, (err, rows) => {
              if (err) {
                console.error(err);
                res.status(500).send();
                return;
              }
              SQL = `SELECT * FROM post LEFT JOIN owner ON owner_id=owner.id WHERE title='${title}' AND url='${url}' AND name='${name}';`;
              conn.query(SQL, (err, rows) => {
                if (err) {
                  console.error(err);
                  res.status(500).send();
                  return;
                }
                res.status(200).json(rows);
              });
            });
          });
        });
      };
    });
  } else {
    res.send('Invalid format!');
  };
});

//still needs owners' votes incrementation
app.put('/posts/:id/upvote', (req, res) => {
  res.set('Content-type', 'application/json');
  if (req.get('Content-type') === 'application/json') {
    let id = req.params.id;
    upvoteScore(id)
      .then(rows => {
        //return is important here
        return sendScore(id)
      })
      .then(rows => {
        console.log('upvoted');
        res.status(200).json(rows);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send();
      });
  } else {
    console.log('not upvoted');
    res.send('Invalid format!');
  };
});

//still needs owners' votes decrementation
app.put('/posts/:id/downvote', (req, res) => {
  res.set('Content-type', 'application/json');
  if (req.get('Content-type') === 'application/json') {
    let id = req.params.id;
    downvoteScore(id)
      .then(rows => {
        return sendScore(id)
      })
      .then(rows => {
        console.log('downvoted');
        res.status(200).json(rows);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send();
      });
  } else {
    console.log('not upvoted');
    res.send('Invalid format!');
  };
});

const upvoteScore = (id) => {
  return new Promise((resolve, reject) => {
    let SQL = `UPDATE post SET score=score+1 WHERE id=${id};`;
    conn.query(SQL, (err, rows) => {
      if (err) { reject(err); }
      else { resolve(rows); };
    });
  });
};

const downvoteScore = (id) => {
  return new Promise((resolve, reject) => {
    let SQL = `UPDATE post SET score=score-1 WHERE id=${id};`;
    conn.query(SQL, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      };
    });
  });
};

const sendScore = (id) => {
  return new Promise((resolve, reject) => {
    let SQL = `SELECT score FROM post WHERE id=${id};`;
    conn.query(SQL, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      };
    });
  });
};

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
  console.log(`Server is running at port ${PORT}`);
  console.log(`Database is ${conn === null ? 'NOT ' : ''}available`);
});

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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
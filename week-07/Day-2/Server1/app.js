const express = require('express');
const app = express();
const PORT = 8080;
//set path
const path = require('path');

app.get('/', (req, res) => {
  //endpoint with its path
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/assets', express.static('assets'));

app.get('/doubling', (req, res) => {
  let input = req.query;
  console.log(input);
  if (input.input) {
    res.json({
      "received": input.input,
      "result": input.input * 2
    });
  } else {
    res.json({
      "error": "Please provide an input!"
    });
  }
});

app.get('/greeter', (req, res) => {
  let input = req.query;
  if (input.name && input.title) {
    res.json({
      "welcome_message": `Oh, hi there ${input.name}, my dear ${input.title}!`
    });
  } else if (input.name && input.title === undefined) {
    res.json({
      "error": "Please provide a title!"
    });
  } else if (input.name === undefined && input.title) {
    res.json({
      "error": "Please provide a name!"
    });
  } else {
    res.json({
      "error": "Please provide a name and a title!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
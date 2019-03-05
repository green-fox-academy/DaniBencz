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

//e.g. doubling?input=15 should return 30
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

//e.g. greeter?name=Petike&title=student should return "Oh, hi there Petike, my dear student!"
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

//e.g. /appenda/kuty should return kutya
app.get('/appenda/:appendable', (req, res) => {
  if (req.params) {
    res.json({
      "appended": `${req.params.appendable}a`
    });
  } else {
    res.status(404).send();
  }
});

//middleware to parse .json type payload (request with data in it)
app.use(express.json());

//e.g. /dountil/sum:5 should return 15, /dountil/factor:5 should return 120
app.post('/dountil/:action', (req, res) => {
  //a GET request doesn't have a body, whil the POST has
  let until = req.body.until;
  let transf = req.params.action;
  if (transf) {
    //factor
    if (transf === 'factor') {
      let count = 1;
      for (let i = 2; i <= until; i++) {
        count = count * i;
      }
      res.json({
        "result": count
      });
    }

    //summation
    else {
      let count = 1;
      for (let i = 2; i <= until; i++) {
        count += i;
      }
      res.json({
        "result": count
      });
    }
  } 
  else {
    res.json({
      "error": "Please provide a number!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
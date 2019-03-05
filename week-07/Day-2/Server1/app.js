const express = require('express');
const app = express();
const PORT = 3000;
//set path
const path = require('path');

app.get('/', (req, res) => {
  //endpoint with its path
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/assets', express.static('assets'));

/* app.get('/assets', (req, res) => {
  
}); */



app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
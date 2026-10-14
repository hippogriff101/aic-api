const express = require('express');
const app = express();
const port = 3000;
const quotes = require('./data.json');


app.get('/', (req, res) => {
  res.send('Welcome to the An Inspector Calls API! Made by Freddie.');
});

app.get('/quotes', (req, res) => {
  res.json(quotes);

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
const express = require('express');
const app = express();
const port = 3000;
const quotes = require('./data.json');

// The Big Stuff (like routes stuff /something)
app.get('/', (req, res) => {
  res.send('Welcome to the An Inspector Calls API! Made by Freddie.');
});

app.get('/quotes', (req, res) => {
  res.json(quotes);
});

app.get('/quotes/featured', (req, res) => {
  res.json(quotes.filter(quote => quote.featured));
});

app.get('/quotes/random', (req, res) => {
  const index = Math.floor(Math.random() * quotes.length);
  res.json(quotes[index]);
})

// you actualy search / filters smthin 
app.get('/quotes/:name', (req, res) => {
  res.json(quotes.filter(quote => quote.character === req.params.name.toLowerCase()));
});

app.get('/quotes/featured/:name', (req, res) => {
  res.json(quotes.filter(quote => quote.character === req.params.name.toLowerCase() && quote.featured));
});

app.get('/quotes/theme/:theme', (req, res) => {
  res.json(quotes.filter(quote => quote.themes.includes(req.params.theme)));
});

app.get('/quotes/act/:act', (req, res) => {
  res.json(quotes.filter(quote => quote.act === Number(req.params.act)));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
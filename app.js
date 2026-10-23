const express = require('express');
const app = express();
const port = 3000;
const quotes = require('./data.json');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// The Big Stuff (like routes stuff /something)
app.get('/quotes', (req, res) => {
  res.json(quotes);
});

app.get('/quotes/featured', (req, res) => {
  res.json(quotes.filter(quote => quote.featured));
});

app.get('/quotes/random', (req, res) => {
  const index = Math.floor(Math.random() * quotes.length);
  res.json(quotes[index]);
});

app.get('/characters', (req, res) => {
  const name = quotes.map(quote => quote.character);
  res.json(Array.from(new Set(name)));
});

app.get('/themes', (req, res) => {
  const theme = quotes.map(quote => quote.themes).flat();
  res.json(Array.from(new Set(theme)));
});

// you actualy search / filters smthin 
app.get('/quotes/:name', (req, res) => {
  const results = quotes.filter(quote => quote.character === req.params.name.toLowerCase());
  if (results.length === 0) {
    return res.status(404).json({ error: "This character doesn't exist or doesn't have any quotes!" });
  }
  res.json(results);
});

app.get('/quotes/featured/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  const characterQuotes = quotes.filter(quote => quote.character === name);
  if (characterQuotes.length === 0) {
    return res.status(404).json({ error: "This character doesn't exist!" });
  }
  const results = characterQuotes.filter(quote => quote.featured);
  if (results.length === 0) {
    return res.status(404).json({ error: "No featured quotes for this character!" });
  }
  res.json(results);
});

app.get('/quotes/theme/:theme', (req, res) => {
  const results = quotes.filter(quote => quote.themes.includes(req.params.theme.toLowerCase()));
  if (results.length === 0) {
    return res.status(404).json({ error: "This theme doesn't exist!" });
  }
  res.json(results)
});

app.get('/quotes/act/:act', (req, res) => {
  const results = quotes.filter(quote => quote.act === Number(req.params.act));
  if (results.length === 0) {
    return res.status(404).json({ error: "This act doesn't exist!" });
  }
  res.json(results);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
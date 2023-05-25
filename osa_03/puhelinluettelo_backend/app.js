'use strict';

const express = require('express');
const numerot = require('./numerot.json');

const app = express();

app.use(express.json());

app.get('/api/persons', (req, res) => {
  res.json(numerot);
});

app.get('/api/info', (req, res) => {
  res.send(`Phone book has info for ${numerot.length} people. <br />
    ${Date()}`);
});

app.get('/api/persons/:id', (req, res) => {
  //   console.log(req);
  const numero = numerot.find(n => n.id === Number(req.params.id));
  if (numero) res.json(numero);
  else res.status(404).end(`No data found with id '${req.params.id}'`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

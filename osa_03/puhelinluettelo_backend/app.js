'use strict';

const express = require('express');
let numerot = require('./numerot.json');

const app = express();

app.use(express.json());

const generateID = () => {
  return Math.round(Math.random() * 1000000);
};

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

app.post('/api/persons', (req, res) => {
  if (
    numerot.find(
      p =>
        p.name.trim().toLocaleLowerCase() ===
        req.body.name.trim().toLocaleLowerCase()
    )
  ) {
    res.status(406).json({ error: 'name must be unique' });
  }
  if (req.body.name && req.body.number) {
    numerot.push({
      id: generateID(),
      name: req.body.name,
      number: req.body.number,
    });
    res.status(200).end();
  } else
    res.status(400).json({ error: "Missing 'name' and/or 'number' parameter" });
});

app.delete('/api/persons/:id', (req, res) => {
  const updNumerot = numerot.filter(n => n.id !== Number(req.params.id));
  if (numerot.length - updNumerot.length === 1) {
    numerot = updNumerot;
    res.status(204).json(`Id '${Number(req.params.id)} removed'`);
  } else res.status(404).json(`Id '${Number(req.params.id)}' not found`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

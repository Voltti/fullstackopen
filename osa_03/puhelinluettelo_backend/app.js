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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

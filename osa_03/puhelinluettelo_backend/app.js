'use strict';

const express = require('express');
const numerot = require('./numerot.json');

const app = express();

app.use(express.json());

app.get('/api/persons', (req, res) => {
  res.json(numerot);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (req, res, next) => {
  res.status(200).send('AWS Server whooop whooop!')
});

app.get('/hello', (req, res, next) => {
  res.status(200).send('Hello Adrian :)')
});

app.listen(PORT, () => console.log(`we are on port ${PORT}`));

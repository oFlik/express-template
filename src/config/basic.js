require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const client = require('./database');

const app = express();

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;

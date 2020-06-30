const express = require('express');
const morgan = require('morgan');
// eslint-disable-next-line no-unused-vars
const ejs = require('ejs');
const path = require('path');
const errorRoute = require('./routes/404');
const main = require('./routes/main');

const app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('common'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', main);
app.use('*', errorRoute);

module.exports = app;

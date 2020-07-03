const express = require('express');
const morgan = require('morgan');
// eslint-disable-next-line no-unused-vars
const ejs = require('ejs');
const path = require('path');

// routes
const main = require('./routes/main');
const errorRoute = require('./routes/404');
// const errorHandler = require('./utils/error-handler');

const app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('common'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', main);
app.use(errorRoute);

// error handler
// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  response.status(error.status || 500);
  if (error.shouldRedirect) {
    response.render('error/error', {
      errorCode: error.status,
      errorMessage: error.message,
    });
  }
  response.json({
    Message: error.message,
    Error: error,
  });
});

module.exports = app;

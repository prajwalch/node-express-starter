const express = require('express');

const router = express.Router();

router.get('*', (request, response, next) => {
  const error = new Error('The page you are looking for was not found.');
  error.status = 404;
  error.shouldRedirect = true;
  next(error);
});

module.exports = router;

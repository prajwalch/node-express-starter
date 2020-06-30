const express = require('express');
const os = require('os');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home/index', { user: os.hostname });
});

module.exports = router;

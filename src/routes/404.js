const express = require('express');

const router = express.Router();
router.get('*', (req, res) => {
  res.status(404).render('error/404', { error: req.baseUrl });
});

module.exports = router;

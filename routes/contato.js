const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('contato', { title: 'Fale Conosco' });
});

module.exports = router;

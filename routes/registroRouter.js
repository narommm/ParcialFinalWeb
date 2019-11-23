var express = require('express');
var router = express.Router();
var resistenciaController = require('../controllers/ResistenciaController');

router.get('/', function(req, res, next) {
    res.render('registrar', { error:{bad: false} });
  });
  
router.post('/', resistenciaController.register);

  module.exports = router;
  
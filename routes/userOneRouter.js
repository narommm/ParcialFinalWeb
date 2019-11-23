var express = require('express');
var router = express.Router();
var resistenciaController = require('../controllers/ResistenciaController');


router.get('/', function(req, res, next) {
    res.render('mostrarResistencia', { error:{bad: false} });
  });
router.get('/:codigo_color',resistenciaController.getOne);

  module.exports = router;
  
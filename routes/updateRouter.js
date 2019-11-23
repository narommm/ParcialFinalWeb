var express = require('express');
var router = express.Router();
var resistenciaController = require('../controllers/ResistenciaController');


router.get('/', function(req, res, next) {
    res.render('actualizar', { error:{bad: false} });
  });
  
router.put('/:codigo_color',resistenciaController.update);

  module.exports = router;
  
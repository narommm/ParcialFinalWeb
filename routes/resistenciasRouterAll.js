var express = require('express');
var router = express.Router();
var resistenciaController = require('../controllers/ResistenciaController');


router.get('/', function(req, res, next) {
    res.render('mostrarResistencias', {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   });
  });

  router.get('/', resistenciaController.getAll);
                
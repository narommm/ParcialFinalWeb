var express = require('express');
var router = express.Router();
var resistenciaController = require('../controllers/ResistenciaController');
var resistenciasController = require('../controllers/ViewResistenciasController');
/* GET users listing. */

router.get('/:codigo_color', resistenciaController.getOne);
//router.get('/', resistenciaController.getAll);
router.get('/', resistenciasController.list);
router.post('/',resistenciaController.register);
router.put('/:codigo_color', resistenciaController.update);
router.delete('/:codigo_color',resistenciaController.delete);


module.exports = router;


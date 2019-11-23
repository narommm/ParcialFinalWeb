var express = require('express');
var router = express.Router();
var resistenciaController = require('../controllers/ResistenciaController');

router.get('/', function (req, res, next) {
    res.render('borrar', {error: {bad: false}})
});

router.delete('/:codigo_color',resistenciaController.delete);
module.exports = router;
/* GET users listing. */


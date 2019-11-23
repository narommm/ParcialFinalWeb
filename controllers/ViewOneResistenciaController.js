var Resistencia = require('../models/resistencia');
var debug = require('debug')('blog:resistencia_controller');
//var resistenciaController = require('../controllers/ResistenciaController');

var resisController = {};

module.exports.resisController.show = function(req, res){
    Product.findOne({codigo_color: req.params.codigo_color}).exec(function(err, resistencia){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/mostrarResistencia', {resistencia: resistencia} );
    });
    
};


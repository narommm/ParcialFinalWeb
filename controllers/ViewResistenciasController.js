var Resistencia = require('../models/resistencia');
var debug = require('debug')('blog:resistencia_controller');


var resisController = {};

resisController.list = function(req, res){
    
    Resistencia.find({}).exec(function(err, resistencias){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/mostrarResistencias', {resistencias: resistencias} );
        
    });
    
};
resisController.show = function(req, res){
    Resistencia.findOne({codigo_color: req.params.codigo_color}).exec(function(err, codigo_color){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/mostrarResistencia', {codigo_color: codigo_color} );
    });
    
};

module.exports = resisController;
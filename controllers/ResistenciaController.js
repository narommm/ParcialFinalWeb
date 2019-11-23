var Resistencia = require('../models/resistencia');
var debug = require('debug')('blog:resistencia_controller');


module.exports.getOne = (req, res, next) => {
    debug("Search Resistencias", req.params);
    Resistencia.findOne({
            codigo_color: req.params.codigo_color
        })
        .then((foundResistencia) => {
            if (foundResistencia)
                return res.status(200).json(foundResistencia);
                
            else
                return res.status(400).json(null)
        })
        .catch(err => {
            next(err);
        });
}

module.exports.getAll = (req, res, next) => {
    var perPage = Number(req.query.size) || 10,
        page = req.query.page > 0 ? req.query.page : 0;

    var sortProperty = req.query.sortby || "createdAt",
        sort = req.query.sort || "desc";

    debug("Usert List",{size:perPage,page, sortby:sortProperty,sort});
    Resistencia.find({}, "-login_count")
        .limit(perPage)
        .skip(perPage * page)
        .sort({ [sortProperty]: sort})
        .then((resistencias) => {
           return res.status(200).json(resistencias)
        }).catch(err => {
            next(err);
        })

}
module.exports.register = (req, res, next) => {
    debug("New Resistencia", {
        body: req.body
    });
    console.log(req.body.codigo_resistencia);
    Resistencia.findOne({
            codigo_color: req.body.codigo_color
        }, "-login_count")
        .then((foundResistencia) => {
            if (foundResistencia) {
                debug("Resistencia duplicado");
                throw new Error(`Resistencia duplicado ${req.body.codigo_color}`);
            } else {
                let newResistencia = new Resistencia({
                    codigo_color: req.body.codigo_color,
                    valor_resistencia: req.body.valor_resistencia || "",
                    marca: req.body.marca || "",
                    precio: req.body.precio
                    
                });
                return newResistencia.save(); // Retornamos la promesa para poder concater una sola linea de then
            }
        }).then(resistencia => { // Con el usario almacenado retornamos que ha sido creado con exito
            return res
                .header('Location', '/resistencias/' + resistencia._id)
                .status(201)
                .render('opciones')
                .json({
                    codigo_color: resistencia.codigo_color
                });
        }).catch(err => {
            next(err);
        });
}

module.exports.update = (req, res, next) => {
    console.log("update");
    debug("Update resistencia", {
        codigo_color: req.params.codigo_color,      
        ...req.body
    });
    
    let update = {
        ...req.body
    };
    console.log("----------------");
    
    console.log(req.body);
    console.log("----------------");
    
    Resistencia.findOneAndUpdate({
            codigo_color: req.params.codigo_color,
        },update)
        .then((updated) => {
            if (updated)
                return res.status(200).json(updated);
            else
                return res.status(400).json(null);
        }).catch(err => {
            next(err);
        });
}

module.exports.delete = (req, res, next) => {

    debug("Delete resistencia", {
        codigo_color: req.params.codigo_color,
    });

    Resistencia.findOneAndDelete({codigo_color: req.params.codigo_color})
    .then((data) =>{
        if (data) res.status(200).json(data);
        else res.status(404).send();
    }).catch( err => {
        next(err);
    })
}


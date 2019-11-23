const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ResistenciaSchema = Schema({
    codigo_color: {
        type: String,
        required: true,
        unique: true
    },
    valor_resistencia: String,
    marca: String,
    precio: {
        type: String,
        required: true
    },
    login_count: Number
}, {
    timestamps: true
});

module.exports = mongoose.model("Resistencia", ResistenciaSchema);
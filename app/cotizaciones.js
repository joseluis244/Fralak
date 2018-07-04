const mongoose = require('mongoose');

const cotizaciones = mongoose.Schema({
    ejecutivo:Object,
    cliente:Object,
    razon:String,
    fecha_sol:Date,
    fecha_ent:Date,
    estado:String
});

module.exports = mongoose.model('Cotizaciones',cotizaciones);
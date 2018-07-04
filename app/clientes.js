const mongoose = require('mongoose');

const clientes = mongoose.Schema({
        codigo:String,
        nombre:String,
        tipo:String,
        ciudad:String,
        estado:String,
        GPS:[],
        visitas:[{
            fecha:Date,
            ejecutivo:Object,
            motivo:String
        }],
        ultima_visita:Date
})

module.exports = mongoose.model('Clientes',clientes);
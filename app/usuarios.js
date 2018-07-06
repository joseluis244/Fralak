const mongoose = require('mongoose');

const usuarios = mongoose.Schema({
    nombre: String,
    usuario: String,
    clave: String,
    rol: String,
    email: String,
    regional: String,
    visitas: [{
        fecha: Date,
        cliente: Object
    }],
    agenda: [{
        fecha_registro: Date,
        fecha_inicio: Date,
        fecha_final: Date,
        clientes: []//_id,codigocliente,nombre,GPS
    }],
    estado: String
})

module.exports = mongoose.model('Usuarios', usuarios);
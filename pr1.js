const mongoose = require('mongoose');
const Clientes = require('./app/clientes');

mongoose.connect("mongodb://localhost:27017/FRALAK");
var fecha = new Date();
var usu = {
    nombre: "jose",
    email: "aaa",
    nuevo: "sssss"
}

var cliente = new Clientes({
    codigo: "String2",
    nombre: "String2",
    tipo: "String2",
    ciudad: "String2",
    estado: "String2",
    GPS: [12.22, 12.33],
    visitas: [{
        fecha: fecha,
        ejecutivo: usu,
        motivo: "String"
    }],
    ultima_visita:fecha
})
cliente.save(function (err) { console.log("guardado") })
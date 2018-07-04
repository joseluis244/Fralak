const mongoose = require('mongoose');
const Esquemas = require('./app/esquemas');

mongoose.connect("mongodb://localhost:27017/FRALAK");
var fecha = new Date();
var usu = {
    nombre: "jose",
    email: "aaa",
    nuevo: "sssss"
}

var cliente = new Esquemas.Usr({
    codigo: "String3",
    nombre: "String3",
    tipo: "String3",
    ciudad: "String3",
    estado: "String3",
    GPS: [12.22, 12.33],
    visitas: [{
        fecha: fecha,
        ejecutivo: usu,
        motivo: "String"
    }],
    ultima_visita:fecha
})
cliente.save(function (err) { console.log("guardado") })
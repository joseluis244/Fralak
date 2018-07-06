const mongoose = require('mongoose');
const Usuarios = require('./app/clientes');

mongoose.connect("mongodb://localhost:27017/FRALAK");

var cliente = new Usuarios({
    codigo: "123",
    nombre: "cl1",
    tipo: "gabinete",
    ciudad: "Santa Cruz",
    estado: "activo",
    GPS: [-17.098,-63.7584]
})

cliente.save(function (err) { console.log('guardado') })
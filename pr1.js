const mongoose = require('mongoose');
const Usuarios = require('./app/usuarios');
const Clientes = require('./app/clientes');

mongoose.connect("mongodb://localhost:27017/FRALAK");
var db_usu,db_cli;

Usuarios.find({},function(err,usu){
    db_usu = usu;
})
Clientes.find({},function(err,cli){
    db_cli = cli;
})

    setTimeout(function(){
            console.log(db_cli);
            console.log(db_usu);
    },1000)
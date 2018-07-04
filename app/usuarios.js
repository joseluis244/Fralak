const mongoose = require('mongoose');

const usuarios = mongoose.Schema({
    usuarios:{
        nombre:String,
        usuario:String,
        clave:String,
        rol:String,
        email:String,
        regional:String,
        visitas:[{
            fecha:Date,
            cliente:Object
        }]
    }
})

module.exports = mongoose.model('Usuarios',usuarios);
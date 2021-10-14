const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const usuarioSchema= new Schema({
    nombre:{type: String, 
        required:[true,'Nombre obligatorio'], maxlength: 30, minlength:3},

    correo:{
        type: String,
        required: true,
        maxlength: 50,
        trim: true,
        lowercase:true,
        unique:true,
        match: [/.+\@.+\..+/, 'Por favor ingrese un correo válido']
    },
    password:{
        type:String,
        required:[true,'password obligatorio'], maxlength: 100, minlength:8
    },
    rol:{
        type:String,
        required:true,
        enum:["administrador", "gestor"]
    },
    
    date:{type: Date, default: Date.now},
    activo:{type: Boolean,default:true}
});

const usuario = mongoose.model('usuario',usuarioSchema);
module.exports = usuario;
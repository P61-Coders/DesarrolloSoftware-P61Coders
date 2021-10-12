const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const categoriaSchema= new Schema({
    nombre:{type: String, 
        required:[true,'Nombre obligatorio'], 
        maxlength: 50,
        minlength:3,
        unique:true }, 
    descripcion:{
        type:String,
        required:true ,
        maxlength: 250,
        minlength:10,
    },
    date:{type: Date, default: Date.now},
    activo:{type: Boolean,default:true}
});

const categoria= mongoose.model('categoria',categoriaSchema);
module.exports = categoria;
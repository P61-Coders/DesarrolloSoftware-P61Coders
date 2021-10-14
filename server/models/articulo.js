 const mongoose = require('mongoose');
 const Schema= mongoose.Schema;

 const articuloSchema= new Schema({
     categoria: {type:Schema.ObjectId  ,  ref:'categoria', required:[true, 'categoria obligatorio']},
     codigo:{type: String, 
         required:[true,'codigo obligatorio'], 
         maxlength: 50,
         unique:true }, 
     nombre:{type: String, 
         required:[true,'Nombre obligatorio'], 
         maxlength: 100,
         minlength:3,
         }, 
     descripcion:{
         type:String,
         required:true ,
         maxlength: 250,
         minlength:7,
     },
     precioXkilo:{
         type:Number, required:true
     },
     date:{type: Date, default: Date.now},
     
 });

 const articulo= mongoose.model('articulo',articuloSchema);
 module.exports = articulo;
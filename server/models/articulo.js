 const mongoose = require('mongoose');
 const Schema= mongoose.Schema;

 const articuloSchema= new Schema({
     category: {type:Schema.ObjectId  ,  ref:'categoria'},
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
         minlength:10,
     },
     precioXkilo:{
         type:Number, required:true
     },
     date:{type: Date, default: Date.now},
     activo:{type: Boolean,default:true}
 });

 const articulo= mongoose.model('articulo',articuloSchema);
 module.exports = articulo;
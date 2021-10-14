const models = require('../models'); //este es el indez de carpeta 'models'
const bcrypt = require('bcryptjs');
const token = require('../services/token.js');

module.exports= {
    add: async(req, res, next) =>{
        try {
            //validacion de correo
            const checkEmail = await models.usuario.findOne({correo:req.body.correo});
            
           
            if (!checkEmail ) {
                req.body.password = await bcrypt.hash(req.body.password,10); //encriptar contraseña
                const registro = await models.usuario.create(req.body);
                res.status(200).json(registro);
            }else res.status(400).send("correo ya existe") 
            
        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
                
            });
            next(error);
        }
    },

    login: async (req,res,next)=>{
        try {
            let checkUser = await models.usuario.findOne({
                correo: req.body.correo,
                activo: true});
            if (checkUser) {
                let match = await bcrypt.compare(req.body.password, checkUser.password );
                if (match) {
                    let tokenreturn = await token.encode(checkUser);
                    res.status(200).json({checkUser,tokenreturn})
                } else {
                    res.status(401).send({
                        message:"datos incorrectos"
                    })                }
                
            }else{
                res.status(404).send({
                    message: "usuario no encontrado"
                })
            }
        } catch (error) {
            
        }
    },
    //metodo select
    list: async (req,res,next)=>{
        try {
            let valorBusqueda= req.query.valor; // se le puede poner .valor o cualquier otra cosa,
            const registros = await models.usuario.find({$or:[
                {nombre:new RegExp(valorBusqueda,'i') },  //esta expresion regular encuentra por nombre o rol, y busca coincidencias 'i'=includes
                {rol:new RegExp(valorBusqueda,'i')}
            ]}).sort({date: -1 });
            res.status(200).json(registros);

            
        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
                
            });
            next(error);
        }

    },
    //metodos activar o desactivar el usuario
    activate: async (req,res,next)=>{
        try {
            const registro = await models.usuario.findByIdAndUpdate({_id:req.body._id},{activo:true})
            res.status(200).json(registro)
            
            
        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
                
            });
            next(error);
        }

    },

    desactivate: async (req,res,next)=>{
        try {
            const registro = await models.usuario.findByIdAndUpdate({_id:req.body._id},{activo:false})
            res.status(200).json(registro)
            
            
        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
                
            });
            next(error);
        }

    },

    //metodo actualizar datos
    update: async (req,res,next)=>{
        try {
            let passwordFormulario = req.body.password;
            const registro= await models.usuario.findOne({correo:req.body.correo});
            //si la contraseña que me llega por formulario es diferente a la de la base de datos, quiere decir que se quiere actualizar la contraseña
            if(passwordFormulario !== registro.password){
                req.body.password= await bcrypt.hash(req.body.password,10);
            }

            const actualizar = await models.usuario.updateOne({correo:req.body.correo},{
                nombre: req.body.nombre,
                rol: req.body.rol,
                password: req.body.password
            })
            res.status(200).json(actualizar)
            
            
        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
                
            });
            next(error);
        }

    },



}
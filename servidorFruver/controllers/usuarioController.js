const models = require('../models');
const bcrypt = require('bcryptjs');
const token = require('../services/token.js');

module.exports= {
    add: async(req, res, next) =>{
        try {
            //validacion de correo
            const checkEmail = await models.usuario.findOne({correo:req.body.correo});
           
            if (!checkEmail) {
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

    }



}
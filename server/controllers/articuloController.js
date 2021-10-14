const models = require('../models'); //este es el indez de carpeta 'models'


module.exports= {
    add: async(req, res, next) =>{
        try {
            //validacion de nombre articulo, que no exista
            const checkCodigo = await models.articulo.findOne({codigo:req.body.codigo});
            
           
            if (!checkCodigo ) {
                const registro = await models.articulo.create(req.body);
                res.status(200).json(registro);
            }else res.status(400).send("articulo ya existe") 
            
        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
            });
            next(error);
        }
    },

  
    //metodo select
    list: async (req,res,next)=>{
        try {
            let valorBusqueda= req.query.valor; // se le puede poner .valor o cualquier otra cosa,
            const registros = await models.articulo.find({$or:[
                {nombre:new RegExp(valorBusqueda,'i') }  //esta expresion regular encuentra por nombre o rol, y busca coincidencias 'i'=includes
                
            ]}).populate('categoria',{//metodo para traer info de la tabla categorias
                nombre:1, descripcion:1, activo:1
            }).sort({date: -1 });
            res.status(200).json(registros);

            
        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
                
            });
            next(error);
        }

    },
    //metodos eliminar el articulo
    remove: async (req,res,next)=>{
        try {
            const registro = await models.articulo.findByIdAndDelete({_id:req.body._id})
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
            const checkCodigo = await models.articulo.findOne({codigo:req.body.codigo});
            if (!checkCodigo ){
                const actualizar = await models.articulo.updateOne({_id:req.body._id},{
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                precioXkilo: req.body.precioXkilo,
                categoria: req.body.categoria,
                codigo: req.body.codigo})
                res.status(200).json(actualizar)
            }else {
                const actualizar = await models.articulo.updateOne({_id:req.body._id},{
                descripcion: req.body.descripcion,
                precioXkilo: req.body.precioXkilo})
                res.status(200).json(actualizar)

            }



            
        } catch (error) {
            res.status(500).send({
                message: "ocurrio un error interno"
                
            });
            next(error);
        }

    },



}
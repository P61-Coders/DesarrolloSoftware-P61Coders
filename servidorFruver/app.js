const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const apiRouter = require('./routes/index')
const app = express();

//Conexión bd
const mongoose = require('mongoose');
// const url= 'mongodb://localhost:27017/fruver'
const url= 'mongodb+srv://santi1596:1030669458@cluster0.c9vt3.mongodb.net/fruver?retryWrites=true&w=majority'
const options = {useNewUrlParser: true, useUnifiedTopology: true};
mongoose.Promise = global.Promise;
mongoose.connect(url,options).then(
    ()=>console.log('Conectado a mongo')).catch(err => console.log(err));

//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//rutas
app.get('/',function(req,res){
    res.send('SERVIDOR DONDE SE ALOJARA NUESTRO PROYECTO --------> ###### FRUVER #########')
});

//middleware para vue.js
app.use('/api',apiRouter);
const history= require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));


//puerto
app.set('puerto',process.env.PORT || 3000);
app.listen(app.get('puerto'),function(){
    console.log('Escuchando el puerto '+app.get('puerto'));
});
const express = require("express");
const router = express.Router();

const articuloController = require('../controllers/articuloController');
//privados
router.post('/add', articuloController.add );
router.get('/list',articuloController.list);
router.put('/update',articuloController.update);
router.delete('/remove',articuloController.remove);




module.exports = router;
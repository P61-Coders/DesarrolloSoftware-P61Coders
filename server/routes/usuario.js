const express = require("express");
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');
//privados
router.post('/add', usuarioController.add );
router.get('/list',usuarioController.list);
router.put('/update',usuarioController.update);
router.put('/activate',usuarioController.activate);
router.put('/desactivate',usuarioController.desactivate);

//publicos
router.post('/login', usuarioController.login);

module.exports = router;
const express = require("express");
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.post('/add', usuarioController.add );

router.post('/login', usuarioController.login)

module.exports = router;
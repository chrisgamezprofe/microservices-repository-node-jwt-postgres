const express = require('express');
const verificarToken = require('./../utils/verificarToken');

const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.post("/usuario/register", usuarioController.add);
router.post("/usuario/login", usuarioController.login);
router.get("/usuario/list", verificarToken, usuarioController.list);
router.get("/usuario/:id", verificarToken, usuarioController.getById);

module.exports = router
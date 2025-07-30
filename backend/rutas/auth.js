const express = require('express');
const router = express.Router();
const { registrarUsuario, iniciarSesion } = require('../controladores/authController');

router.post('/registrar', registrarUsuario);
router.post('/iniciar-sesion', iniciarSesion);

module.exports = router;

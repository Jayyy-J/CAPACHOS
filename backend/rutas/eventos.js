const express = require('express');
const router = express.Router();
const {
  crearEvento,
  obtenerEventos,
  obtenerEvento,
  actualizarEvento,
  eliminarEvento,
} = require('../controladores/eventoController');
const auth = require('../middleware/auth'); // Suponiendo que tienes un middleware de autenticación

router.post('/', auth, crearEvento);
router.get('/', obtenerEventos);
router.get('/:id', obtenerEvento);
router.put('/:id', auth, actualizarEvento);
router.delete('/:id', auth, eliminarEvento);

module.exports = router;

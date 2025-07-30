const express = require('express');
const router = express.Router();
const {
  crearReserva,
  obtenerReservas,
  actualizarReserva,
  cancelarReserva,
} = require('../controladores/reservaController');
const auth = require('../middleware/auth');

router.post('/', auth, crearReserva);
router.get('/', auth, obtenerReservas);
router.put('/:id', auth, actualizarReserva);
router.patch('/:id/cancelar', auth, cancelarReserva);

module.exports = router;

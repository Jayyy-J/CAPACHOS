const Reserva = require('../modelos/Reserva');

exports.crearReserva = async (req, res) => {
  try {
    const reserva = new Reserva({
      ...req.body,
      usuario: req.usuario.id,
    });
    await reserva.save();
    res.status(201).json(reserva);
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};

exports.obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find({ usuario: req.usuario.id });
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};

exports.actualizarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reserva) {
      return res.status(404).json({ msg: 'Reserva no encontrada' });
    }
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};

exports.cancelarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndUpdate(req.params.id, { estado: 'cancelada' }, { new: true });
    if (!reserva) {
      return res.status(404).json({ msg: 'Reserva no encontrada' });
    }
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};

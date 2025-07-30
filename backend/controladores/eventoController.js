const Evento = require('../modelos/Evento');

exports.crearEvento = async (req, res) => {
  try {
    const evento = new Evento(req.body);
    await evento.save();
    res.status(201).json(evento);
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};

exports.obtenerEventos = async (req, res) => {
  try {
    const eventos = await Evento.find();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};

exports.obtenerEvento = async (req, res) => {
  try {
    const evento = await Evento.findById(req.params.id);
    if (!evento) {
      return res.status(404).json({ msg: 'Evento no encontrado' });
    }
    res.json(evento);
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};

exports.actualizarEvento = async (req, res) => {
  try {
    const evento = await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!evento) {
      return res.status(404).json({ msg: 'Evento no encontrado' });
    }
    res.json(evento);
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};

exports.eliminarEvento = async (req, res) => {
  try {
    const evento = await Evento.findByIdAndDelete(req.params.id);
    if (!evento) {
      return res.status(404).json({ msg: 'Evento no encontrado' });
    }
    res.json({ msg: 'Evento eliminado' });
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
};

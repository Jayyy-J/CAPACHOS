const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
  nombreCompleto: {
    type: String,
    required: true,
  },
  numeroPersonas: {
    type: Number,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    default: 'pendiente',
    enum: ['pendiente', 'confirmada', 'cancelada'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Reserva', ReservaSchema);

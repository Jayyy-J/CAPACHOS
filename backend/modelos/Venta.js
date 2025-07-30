const mongoose = require('mongoose');

const VentaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
  },
  productos: [{
    producto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Producto',
    },
    cantidad: {
      type: Number,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
  }],
  total: {
    type: Number,
    required: true,
  },
  tipoPago: {
    type: String,
    required: true,
    enum: ['efectivo', 'tarjeta', 'transferencia'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Venta', VentaSchema);

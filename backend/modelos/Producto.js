const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
    enum: ['licor', 'comida', 'servicio'],
  },
  imagen: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Producto', ProductoSchema);

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    default: 'usuario',
    enum: ['usuario', 'admin'],
  },
}, {
  timestamps: true,
});

UsuarioSchema.pre('save', async function (next) {
  if (!this.isModified('contrasena')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.contrasena = await bcrypt.hash(this.contrasena, salt);
  next();
});

UsuarioSchema.methods.compararContrasena = async function (contrasena) {
  return await bcrypt.compare(contrasena, this.contrasena);
};

module.exports = mongoose.model('Usuario', UsuarioSchema);

const express = require('express');
const cors = require('cors');
const conectarDB = require('./db');
require('dotenv').config();

const app = express();

conectarDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./rutas/auth'));
app.use('/api/eventos', require('./rutas/eventos'));

app.get('/', (req, res) => {
  res.send('API de LOS CAPACHOS funcionando');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

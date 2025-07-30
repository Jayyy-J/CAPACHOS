const Usuario = require('../modelos/Usuario');
const jwt = require('jsonwebtoken');

exports.registrarUsuario = async (req, res) => {
  const { nombre, correo, contrasena } = req.body;

  try {
    let usuario = await Usuario.findOne({ correo });

    if (usuario) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    usuario = new Usuario({
      nombre,
      correo,
      contrasena,
    });

    await usuario.save();

    const payload = {
      usuario: {
        id: usuario.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: 3600,
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error en el servidor');
  }
};

exports.iniciarSesion = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    let usuario = await Usuario.findOne({ correo });

    if (!usuario) {
      return res.status(400).json({ msg: 'Credenciales no válidas' });
    }

    const contrasenaCorrecta = await usuario.compararContrasena(contrasena);

    if (!contrasenaCorrecta) {
      return res.status(400).json({ msg: 'Credenciales no válidas' });
    }

    const payload = {
      usuario: {
        id: usuario.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: 3600,
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error en el servidor');
  }
};

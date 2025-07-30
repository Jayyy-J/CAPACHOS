import React, { useState } from 'react';
import './FormularioReserva.css';
import Boton from './Boton';
import { crearReserva } from '../servicios/reservaService';

const FormularioReserva: React.FC = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    numeroPersonas: 1,
    fecha: '',
    hora: '',
    telefono: '',
    correo: '',
  });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Suponiendo que el token se guarda en localStorage
      if (!token) {
        setMensaje('Debes iniciar sesión para reservar');
        return;
      }
      await crearReserva(formData, token);
      setMensaje('Reserva creada con éxito');
      setFormData({
        nombreCompleto: '',
        numeroPersonas: 1,
        fecha: '',
        hora: '',
        telefono: '',
        correo: '',
      });
    } catch (error) {
      setMensaje('Error al crear la reserva');
    }
  };

  return (
    <form className="formulario-reserva" onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombreCompleto"
        placeholder="Nombre completo"
        value={formData.nombreCompleto}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="numeroPersonas"
        placeholder="Número de personas"
        value={formData.numeroPersonas}
        onChange={handleChange}
        min="1"
        required
      />
      <input
        type="date"
        name="fecha"
        value={formData.fecha}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="hora"
        value={formData.hora}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        value={formData.telefono}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="correo"
        placeholder="Correo electrónico"
        value={formData.correo}
        onChange={handleChange}
        required
      />
      <Boton tipo="primario">Reservar</Boton>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
};

export default FormularioReserva;

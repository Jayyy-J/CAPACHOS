import React, { useState } from 'react';
import './FormularioReserva.css';
import Boton from './Boton';

const FormularioReserva: React.FC = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    numeroPersonas: 1,
    fecha: '',
    hora: '',
    telefono: '',
    correo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar la reserva al backend
    console.log(formData);
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
    </form>
  );
};

export default FormularioReserva;

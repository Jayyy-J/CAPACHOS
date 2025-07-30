import React, { useState, useEffect } from 'react';
import Boton from './Boton';

interface Evento {
  _id?: string;
  nombre: string;
  descripcion: string;
  fecha: string;
  imagen: string;
}

interface FormularioEventoProps {
  evento?: Evento;
  onSubmit: (evento: Evento) => void;
}

const FormularioEvento: React.FC<FormularioEventoProps> = ({ evento, onSubmit }) => {
  const [formData, setFormData] = useState<Evento>({
    nombre: '',
    descripcion: '',
    fecha: '',
    imagen: '',
  });

  useEffect(() => {
    if (evento) {
      setFormData(evento);
    }
  }, [evento]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del evento"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="descripcion"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={handleChange}
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
        type="text"
        name="imagen"
        placeholder="URL de la imagen"
        value={formData.imagen}
        onChange={handleChange}
        required
      />
      <Boton tipo="primario">{evento ? 'Actualizar' : 'Crear'}</Boton>
    </form>
  );
};

export default FormularioEvento;

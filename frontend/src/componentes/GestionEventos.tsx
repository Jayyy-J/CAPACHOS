import React, { useState, useEffect } from 'react';
import {
  obtenerEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} from '../servicios/eventoService';
import FormularioEvento from './FormularioEvento';

interface Evento {
  _id: string;
  nombre: string;
  descripcion: string;
  fecha: string;
  imagen: string;
}

const GestionEventos: React.FC = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [eventoSeleccionado, setEventoSeleccionado] = useState<Evento | undefined>();

  useEffect(() => {
    fetchEventos();
  }, []);

  const fetchEventos = async () => {
    const data = await obtenerEventos();
    setEventos(data);
  };

  const handleFormSubmit = async (evento: Evento) => {
    const token = localStorage.getItem('token') || '';
    if (evento._id) {
      await actualizarEvento(evento._id, evento, token);
    } else {
      await crearEvento(evento, token);
    }
    fetchEventos();
    setEventoSeleccionado(undefined);
  };

  const handleEliminar = async (id: string) => {
    const token = localStorage.getItem('token') || '';
    await eliminarEvento(id, token);
    fetchEventos();
  };

  return (
    <div>
      <h2>Gestionar Eventos</h2>
      <FormularioEvento evento={eventoSeleccionado} onSubmit={handleFormSubmit} />
      <ul>
        {eventos.map((evento) => (
          <li key={evento._id}>
            {evento.nombre}
            <button onClick={() => setEventoSeleccionado(evento)}>Editar</button>
            <button onClick={() => handleEliminar(evento._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GestionEventos;

import React, { useState, useEffect } from 'react';
import './Inicio.css';
import Boton from '../componentes/Boton';
import Tarjeta from '../componentes/Tarjeta';
import FormularioReserva from '../componentes/FormularioReserva';
import { obtenerEventos } from '../servicios/eventoService';

interface Evento {
  _id: string;
  nombre: string;
  descripcion: string;
  fecha: string;
  imagen: string;
}

const Inicio: React.FC = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const data = await obtenerEventos();
        setEventos(data);
      } catch (error) {
        console.error('Error al obtener los eventos:', error);
      }
    };
    fetchEventos();
  }, []);

  return (
    <div>
      <section className="hero">
        <div className="hero-contenido">
          <h1>Vive la experiencia LOS CAPACHOS</h1>
          <p>La mejor rumba de Villavicencio</p>
          <div className="hero-indicadores">
            <span>📍 Villavicencio / Colombia</span>
            <span>⏰ De 6:00 a 7:00</span>
            <span>⭐ 4.9 / 5.0</span>
          </div>
          <div>
            <Boton tipo="primario">Reservar mesa</Boton>
            <Boton tipo="secundario">Ver video ▶</Boton>
          </div>
        </div>
      </section>

      <section id="ambientes" className="seccion">
        <h2 className="seccion-titulo">Nuestros Ambientes</h2>
        <div className="grid-ambientes">
          <Tarjeta
            imagen="https://via.placeholder.com/300"
            titulo="El Patio Lounge"
            descripcion="Relájate y disfruta de nuestros cócteles de autor."
          />
          <Tarjeta
            imagen="https://via.placeholder.com/300"
            titulo="La Cantina"
            descripcion="Música popular y los mejores licores nacionales."
          />
          <Tarjeta
            imagen="https://via.placeholder.com/300"
            titulo="El Patio"
            descripcion="El mejor ambiente al aire libre para disfrutar con amigos."
          />
          <Tarjeta
            imagen="https://via.placeholder.com/300"
            titulo="La Discoteca"
            descripcion="Baila hasta el amanecer con los mejores DJs."
          />
        </div>
      </section>

      <section id="eventos" className="seccion">
        <h2 className="seccion-titulo">Próximos Eventos</h2>
        <div className="grid-ambientes">
          {eventos.map((evento) => (
            <Tarjeta
              key={evento._id}
              imagen={evento.imagen}
              titulo={evento.nombre}
              descripcion={`${new Date(evento.fecha).toLocaleDateString()} - ${evento.descripcion}`}
            />
          ))}
        </div>
      </section>

      <section id="reservas" className="seccion">
        <h2 className="seccion-titulo">Haz tu reserva</h2>
        <FormularioReserva />
      </section>
    </div>
  );
};

export default Inicio;

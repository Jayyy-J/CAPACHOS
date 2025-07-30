import React from 'react';
import './Tarjeta.css';

interface TarjetaProps {
  imagen: string;
  titulo: string;
  descripcion: string;
}

const Tarjeta: React.FC<TarjetaProps> = ({ imagen, titulo, descripcion }) => {
  return (
    <div className="tarjeta glassmorphism">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
      </div>
    </div>
  );
};

export default Tarjeta;

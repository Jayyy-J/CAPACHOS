import React from 'react';
import './Boton.css';

interface BotonProps {
  children: React.ReactNode;
  onClick?: () => void;
  tipo: 'primario' | 'secundario';
  className?: string;
}

const Boton: React.FC<BotonProps> = ({ children, onClick, tipo, className }) => {
  return (
    <button className={`btn btn-${tipo} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Boton;

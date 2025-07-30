import React, { useState } from 'react';
import './Admin.css';
import GestionEventos from '../componentes/GestionEventos';

type Seccion = 'usuarios' | 'eventos' | 'reservas' | 'productos' | 'caja';

const Admin: React.FC = () => {
  const [seccionActiva, setSeccionActiva] = useState<Seccion>('usuarios');

  const renderizarSeccion = () => {
    switch (seccionActiva) {
      case 'usuarios':
        return <div>Gestionar Usuarios</div>;
      case 'eventos':
        return <GestionEventos />;
      case 'reservas':
        return <div>Gestionar Reservas</div>;
      case 'productos':
        return <div>Gestionar Productos</div>;
      case 'caja':
        return <div>Cierre de Caja</div>;
      default:
        return null;
    }
  };

  return (
    <div className="admin-panel">
      <h1>Panel de Administración</h1>
      <nav>
        <button
          className={seccionActiva === 'usuarios' ? 'activo' : ''}
          onClick={() => setSeccionActiva('usuarios')}
        >
          Usuarios
        </button>
        <button
          className={seccionActiva === 'eventos' ? 'activo' : ''}
          onClick={() => setSeccionActiva('eventos')}
        >
          Eventos
        </button>
        <button
          className={seccionActiva === 'reservas' ? 'activo' : ''}
          onClick={() => setSeccionActiva('reservas')}
        >
          Reservas
        </button>
        <button
          className={seccionActiva === 'productos' ? 'activo' : ''}
          onClick={() => setSeccionActiva('productos')}
        >
          Productos
        </button>
        <button
          className={seccionActiva === 'caja' ? 'activo' : ''}
          onClick={() => setSeccionActiva('caja')}
        >
          Caja
        </button>
      </nav>
      <div>{renderizarSeccion()}</div>
    </div>
  );
};

export default Admin;

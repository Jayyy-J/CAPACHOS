import React from 'react';
import './Carrito.css';
import { useCarrito } from '../contexto/CarritoContext';
import Boton from './Boton';

interface CarritoProps {
  abierto: boolean;
  onClose: () => void;
}

const Carrito: React.FC<CarritoProps> = ({ abierto, onClose }) => {
  const { state, dispatch } = useCarrito();

  const total = state.productos.reduce(
    (acc, p) => acc + p.precio * p.cantidad,
    0
  );

  return (
    <div className={`carrito ${abierto ? 'abierto' : ''}`}>
      <div className="carrito-header">
        <h3>Carrito de compras</h3>
        <button onClick={onClose}>&times;</button>
      </div>
      <div className="carrito-items">
        {state.productos.map((producto) => (
          <div key={producto._id} className="carrito-item">
            <span>{producto.nombre}</span>
            <span>
              {producto.cantidad} x ${producto.precio}
            </span>
            <button
              onClick={() =>
                dispatch({ type: 'ELIMINAR_PRODUCTO', payload: producto._id })
              }
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <div className="carrito-total">
        <h4>Total: ${total.toFixed(2)}</h4>
      </div>
      <Boton tipo="primario">Confirmar y pagar</Boton>
    </div>
  );
};

export default Carrito;

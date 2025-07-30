import React, { createContext, useReducer, useContext } from 'react';

interface Producto {
  _id: string;
  nombre: string;
  precio: number;
  cantidad: number;
}

interface CarritoState {
  productos: Producto[];
}

type CarritoAction =
  | { type: 'AGREGAR_PRODUCTO'; payload: Producto }
  | { type: 'ELIMINAR_PRODUCTO'; payload: string }
  | { type: 'LIMPIAR_CARRITO' };

const CarritoContext = createContext<{
  state: CarritoState;
  dispatch: React.Dispatch<CarritoAction>;
}>({
  state: { productos: [] },
  dispatch: () => null,
});

const carritoReducer = (state: CarritoState, action: CarritoAction): CarritoState => {
  switch (action.type) {
    case 'AGREGAR_PRODUCTO':
      const productoExistente = state.productos.find(
        (p) => p._id === action.payload._id
      );
      if (productoExistente) {
        return {
          ...state,
          productos: state.productos.map((p) =>
            p._id === action.payload._id ? { ...p, cantidad: p.cantidad + 1 } : p
          ),
        };
      }
      return {
        ...state,
        productos: [...state.productos, { ...action.payload, cantidad: 1 }],
      };
    case 'ELIMINAR_PRODUCTO':
      return {
        ...state,
        productos: state.productos.filter((p) => p._id !== action.payload),
      };
    case 'LIMPIAR_CARRITO':
      return { ...state, productos: [] };
    default:
      return state;
  }
};

export const CarritoProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(carritoReducer, { productos: [] });

  return (
    <CarritoContext.Provider value={{ state, dispatch }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);

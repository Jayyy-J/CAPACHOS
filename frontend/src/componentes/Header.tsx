import React, { useState, useEffect } from 'react';
import './Header.css';
import Carrito from './Carrito';
import { useCarrito } from '../contexto/CarritoContext';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const { state } = useCarrito();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-logo">LOS CAPACHOS</div>
        <nav className="header-nav">
          <a href="#inicio">Inicio</a>
          <a href="#ambientes">Ambientes</a>
          <a href="#menu-licores">Menú de licores</a>
          <a href="#menu-comida">Menú de comida</a>
          <a href="#servicios">Servicios</a>
          <a href="#eventos">Eventos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="header-actions">
          <div className="header-social">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
          <div className="header-carrito" onClick={() => setCarritoAbierto(true)}>
            <i className="fas fa-shopping-cart"></i>
            <span>{state.productos.length}</span>
          </div>
          <button className="btn btn-secundario">Iniciar sesión</button>
          <button className="btn btn-primario">Registrarse</button>
        </div>
        <div className="menu-hamburguesa">
          <i className="fas fa-bars"></i>
        </div>
      </header>
      <Carrito abierto={carritoAbierto} onClose={() => setCarritoAbierto(false)} />
    </>
  );
};

export default Header;

import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-seccion">
        <h3>Redes Sociales</h3>
        <div className="footer-social">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div className="footer-seccion">
        <h3>Enlaces rápidos</h3>
        <a href="#inicio">Inicio</a>
        <a href="#ambientes">Ambientes</a>
        <a href="#eventos">Eventos</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div className="footer-seccion">
        <h3>Contacto</h3>
        <p>📍 Villavicencio / Colombia</p>
        <p>📧 contacto@loscapachos.com</p>
        <p>📞 +57 123 456 7890</p>
      </div>
      <div className="footer-seccion footer-newsletter">
        <h3>Suscríbete a nuestro newsletter</h3>
        <input type="email" placeholder="Tu correo electrónico" />
        <button className="btn btn-primario">Suscribirse</button>
      </div>
    </footer>
  );
};

export default Footer;

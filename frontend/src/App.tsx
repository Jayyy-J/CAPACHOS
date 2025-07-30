import React from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Inicio from './paginas/Inicio';
import { CarritoProvider } from './contexto/CarritoContext';

const App: React.FC = () => {
  return (
    <CarritoProvider>
      <div>
        <Header />
        <main>
          <Inicio />
        </main>
        <Footer />
      </div>
    </CarritoProvider>
  );
};

export default App;

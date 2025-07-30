import React from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Inicio from './paginas/Inicio';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Inicio />
      </main>
      <Footer />
    </div>
  );
};

export default App;

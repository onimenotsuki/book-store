import React from 'react';

/* Componentes */
import Header from './Shared/Components/Header';
import Footer from './Shared/Components/Footer';

/* Estilos */
import '@material/layout-grid/dist/mdc.layout-grid.min.css';
import '@material/icon-button/dist/mdc.icon-button.min.css';

const App = () => (
  <div>
    <Header />

    <div className="mdc-layout-grid">
      <div className="mdc-layout-grid__inner">
        <div className="mdc-layout-grid__cell">
          Amet justo donec enim diam!
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default App;

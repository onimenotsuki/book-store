import React from 'react';

/* Componentes */
import Header from './Shared/Components/Header';
import Footer from './Shared/Components/Footer';
import IndexPage from './Pages/Components/IndexPage';

/* Estilos */
import '@material/layout-grid/dist/mdc.layout-grid.min.css';
import '@material/icon-button/dist/mdc.icon-button.min.css';

const App = () => (
  <div>
    <Header />
    <IndexPage />
    <Footer />
  </div>
);

export default App;

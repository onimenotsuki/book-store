import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Componentes */
import Header from './Shared/Components/Header';
import Footer from './Shared/Components/Footer';
import IndexPage from './Pages/Components/IndexPage';
import BookPage from './Pages/Components/BookPage';
import ProfilePage from './Pages/Components/ProfilePage';

/* Estilos */
import '@material/layout-grid/dist/mdc.layout-grid.min.css';
import '@material/icon-button/dist/mdc.icon-button.min.css';

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={IndexPage} />
      <Route path="/usuarios/:id" component={ProfilePage} />
      <Route path="/books/:id" component={BookPage} />
      <Footer />
    </div>
  </Router>
);

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

/* Estilos */
import '@material/top-app-bar/dist/mdc.top-app-bar.min.css';

const Header = () => (
  <header
    className="mdc-top-app-bar"
  >
    <div className="mdc-top-app-bar__row">
      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <a className="material-icons mdc-top-app-bar__navigation-icon">menu</a>
        <Link to="/">
          <span className="mdc-top-app-bar__title">BookStore</span>
        </Link>

        <Link to="/usuarios/5">
          <span>Autor</span>
        </Link>
      </section>
    </div>
  </header>
);

export default Header;

import React from 'react';

/* Estilos */
import '@material/top-app-bar/dist/mdc.top-app-bar.min.css';

const Header = () => (
  <header
    className="mdc-top-app-bar"
  >
    <div className="mdc-top-app-bar__row">
      <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <a href="#" className="material-icons mdc-top-app-bar__navigation-icon">menu</a>
        <span className="mdc-top-app-bar__title">BookStore</span>
      </section>
    </div>
  </header>
);

export default Header;

import React from 'react';

/* Estilos */
import '@material/top-app-bar/dist/mdc.top-app-bar.min.css';

const Header = () => (
  <header
    class="mdc-top-app-bar"
  >
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
        <span class="mdc-top-app-bar__title">BookStore</span>
      </section>
    </div>
  </header>
);

export default Header;

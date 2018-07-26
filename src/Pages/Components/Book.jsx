import React from 'react';

import '@material/card/dist/mdc.card.min.css';

// Componentes
import Ranking from './Ranking';

const Book = (props) => (
  <div className="mdc-layout-grid__cell">
    <div
      className="mdc-card book-card"
      style={{ marginTop: 80, padding: 20 }}
    >
      <div className="mdc-card__media">
        <h1 className="title">
          {props.title}
        </h1>

        <p className={props.existences === 0 ? 'no-existences' : 'existences'}>
          {props.existences === 0 ? 'no hay disponibles' : props.existences}
        </p>

        <p className="author">
          {props.author}
        </p>

        <p className="description">
          {props.description || props.children}
        </p>

        <Ranking />
      </div>
    </div>
  </div>
);

export default Book;

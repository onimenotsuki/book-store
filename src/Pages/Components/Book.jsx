import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser'

import '@material/card/dist/mdc.card.min.css';

// Componentes
import Ranking from './Ranking';

class Book extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="mdc-layout-grid__cell">
        <div
          className="mdc-card book-card"
          style={{ marginTop: 80, padding: 20 }}
        >
          <div className="mdc-card__media">
            <h1 className="title">
              <Link to={`/books/${this.props.id}`}>{this.props.title}</Link>
            </h1>

            <p className={this.props.existences === 0 ? 'no-existences' : 'existences'}>
              {this.props.existences === 0 ? 'no hay disponibles' : this.props.existences}
            </p>

            <p className="author">
              <strong>
                <em>{this.props.author}</em>
              </strong>
            </p>

            <p className="description">
              {!this.props.description ? ReactHtmlParser(this.props.children) : ReactHtmlParser(this.props.description)}
            </p>

            <Ranking />
          </div>
        </div>
      </div>
    );
  }
}

export default Book;

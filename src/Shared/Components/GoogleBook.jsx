import React, { Component } from 'react';
import axios from 'axios';

/* Componentes */
import Book from '../../Pages/Components/Book.jsx';

class GoogleBook extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <Book
          title={this.props.title}
          id={this.props.id}
          author={this.props.author}
          description={this.props.description}
        />
      </div>
    );
  }
}

export default GoogleBook;

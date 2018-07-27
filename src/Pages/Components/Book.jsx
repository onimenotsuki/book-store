import React, { Component } from 'react';
import axios from 'axios';

import '@material/card/dist/mdc.card.min.css';

// Componentes
import Ranking from './Ranking';

class Book extends Component {
  constructor() {
    super();
    this.state = {
      author: {}
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.authorId)
      .then(response => {
        this.setState({
          author: response.data,
        });
      });
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
              {this.props.title}
            </h1>

            <p className={this.props.existences === 0 ? 'no-existences' : 'existences'}>
              {this.props.existences === 0 ? 'no hay disponibles' : this.props.existences}
            </p>

            <p className="author">
              {this.state.author.name}
            </p>

            <p className="description">
              {this.props.description || this.props.children}
            </p>

            <Ranking />
          </div>
        </div>
      </div>
    );
  }
}

export default Book;

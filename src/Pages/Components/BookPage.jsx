import React, { Component } from 'react';
import axios from 'axios';

/* Componentes */
import Book from './Book';

class BookPage extends Component {
  constructor() {
    super();
    this.state = {
      book: {},
      id: null,
      authors: [],
    }
  }

  componentDidMount() {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${this.props.match.params.id}`)
      .then(response => {
        console.log(response);
        this.setState({
          book: response.data.volumeInfo,
          id: response.data.id,
          authors: response.data.volumeInfo.authors,
        });
      });
  }

  render() {
    return (
      <div className="mdc-layout-grid">
        <Book
          title={this.state.book.title}
          id={this.state.id}
          key={this.state.id}
          author={this.state.authors}
          description={this.state.book.description}
        />
      </div>
    );
  }
}

export default BookPage;

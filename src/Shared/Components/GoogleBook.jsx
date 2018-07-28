import React, { Component } from 'react';
import axios from 'axios';

/* Componentes */
import Book from '../../Pages/Components/Book.jsx';

class GoogleBook extends Component {
  constructor() {
    super();
    this.state = {
      book: {},
    };
  }

  componentDidMount() {
    axios.get('https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC')
      .then(response => {
        this.setState({
          book: response.data.volumeInfo,
        });
      });
  }

  render() {
    console.log(this.state.book);

    return (
      <Book
        title={this.state.book.title}
        id={this.state.book.pageCount}
        description={this.state.book.subtitle}
      />
    );
  }
}

export default GoogleBook;

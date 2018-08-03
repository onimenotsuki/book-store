import React, { Component } from 'react';
import axios from 'axios';

import Book from './Book';

class BookList extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=jorge+luis+borges')
      .then(response => {
        console.log(response);

        this.setState({
          books: response.data.items,
        });
      });
  }

  render() {
    return (
      <div className="mdc-layout-grid__inner">
        {this.state.books.map((book, index) => {
           return (
             <Book
               id={book.id}
               title={book.volumeInfo.title}
               key={book.id}
               authorId={1}
               description={book.volumeInfo.description}
             />
           );
        })}
      </div>
    );
  }
}

export default BookList;

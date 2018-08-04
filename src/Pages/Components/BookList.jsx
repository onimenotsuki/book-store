import React, { Component } from 'react';
import axios from 'axios';

import Book from './Book';
import GoogleBook from '../../Shared/Components/GoogleBook';

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
        this.setState({
          books: response.data.items,
        });
      });
  }

  render() {
    console.log(this.state.books);
    const { books } = this.state;

    return (
      <div className="mdc-layout-grid__inner">
        {books.map((book, index) => {
           if (index === 0) {
             return (
               <GoogleBook
                 id={book.id}
                 title={book.volumeInfo.title}
                 key={book.id}
                 author={book.volumeInfo.authors}
                 description={book.volumeInfo.description}
               />
             );
           }

           return (
             <div className="mdc-layout-grid__cell">
               <Book
                 id={book.id}
                 title={book.volumeInfo.title}
                 key={book.id}
                 author={book.volumeInfo.authors}
                 description={book.volumeInfo.description}
               />
             </div>
           );
        })}
             </div>
    );
  }
}

export default BookList;

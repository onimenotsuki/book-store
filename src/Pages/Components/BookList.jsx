import React, { Component } from 'react';

import Book from './Book';

class BookList extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          authorId: 1,
          description: 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed diam.',
        },
      ],
    };
  }

  render() {
    return (
      <div className="mdc-layout-grid__inner">
        {this.state.books.map((book, index) => {
           return (
             <Book
               title={book.title}
               key={index}
               position={index}
               authorId={book.authorId}
               description={book.description}
             />
           );
        })}
      </div>
    );
  }
}

export default BookList;

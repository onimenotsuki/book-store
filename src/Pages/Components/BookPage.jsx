import React, { Component } from 'react';

/* Componentes */
import Book from './Book';

class BookPage extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          authorId: 1,
          description: 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed diam.',
        },
        {
          title: 'Lorem adipiscing elit.',
          authorId: 5,
          description: 'Tincidunt et, mattis eget, convallis nec, purus.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed diam.',
        },
        {
          title: 'Adipiscing lorem elit.',
          authorId: 10,
          description: 'Mattis Tincidunt, et eget, nec purus, Fusce.  convallis sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed diam.',
        },
      ],
    }
  }

  render() {
    const { params } = this.props.match;

    return (
      <div className="mdc-layout-grid__inner">
        <Book
          title={this.state.books[params.id].title}
          id={params.id}
          key={params.id}
          position={params.id}
          authorId={this.state.books[params.id].authorId}
          description={this.state.books[params.id].description}
        />
      </div>
    );
  }
}

export default BookPage;

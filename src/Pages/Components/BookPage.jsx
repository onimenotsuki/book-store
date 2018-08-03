import React, { Component } from 'react';
import axios from 'axios';

/* Componentes */
import Book from './Book';

class BookPage extends Component {
  constructor() {
    super();
    this.state = {
      book: {}
    }
  }

  componentDidMount() {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${this.props.match.params.id}`)
      .then(response => {
        console.log(response);
        this.setState({
          book: response.data.volumeInfo,
          id: response.data.id,
        });
      });
  }

  render() {
    return (
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <Book
            title={this.state.book.title}
            id={this.state.id}
            key={'asndasdkjaslkdjasd'}
            position={1}
            authorId={1}
            description={'askdlajsldkjaskldj'}
          />
        </div>
      </div>
    );
  }
}

export default BookPage;

import React from 'react';

import Book from './Book';

const LastBook = (props) => (
  <Book
    position={0}
    title={props.title}
    author={props.author}
    description={props.description}
    existences={props.existences}
  />
);

export default LastBook;

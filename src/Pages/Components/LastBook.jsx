import React from 'react';

import Book from './Book';

const LastBook = (props) => (
    <Book
        title={props.title}
        author={props.author}
        description={props.description}
    />
);

export default LastBook;
import React from 'react';

const Book = (props) => (
    <div
        key={props.id}
        className="mdc-layout-grid__cell"
    >
        <h1>
            {props.title}
        </h1>

        <p className="author">
            {props.author}
        </p>

        <p className="description">
            {props.description || props.children}
        </p>
    </div>
);

export default Book;
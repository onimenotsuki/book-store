import React from 'react';

const Book = (props) => (
    <div
        key={props.id}
        className="mdc-layout-grid__cell"
        position={props.position}
    >
        <h1>
            {props.title}
        </h1>

        <p className={props.existences == 0 ? 'no-existences' : 'existences'}>
            {props.existences == 0 ? 'no hay disponibles' : props.existences}
        </p>

        <p className="author">
            {props.author}
        </p>

        <p className="description">
            {props.description || props.children}
        </p>
    </div>
);

export default Book;
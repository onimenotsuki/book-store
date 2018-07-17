import React from 'react';

import '@material/card/dist/mdc.card.min.css';

const Book = (props) => (
    <div
        key={props.id}
        className="mdc-layout-grid__cell"
        position={props.position}
    >
        <div className="mdc-card">
            <div className="mdc-card__media mdc-card__media--square">
                <div className="mdc-card__media-content">
                    <h1>
                        {props.title}
                    </h1>

                    <p className={props.existences === 0 ? 'no-existences' : 'existences'}>
                        {props.existences === 0 ? 'no hay disponibles' : props.existences}
                    </p>

                    <p className="author">
                        {props.author}
                    </p>

                    <p className="description">
                        {props.description || props.children}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default Book;
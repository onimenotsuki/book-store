import React from 'react';

import Book from './Book';
import LastBook from './LastBook';

const BookList = () => (
    <div className="mdc-layout-grid__inner">
        <div>Estamos en Book List</div>
        <LastBook 
            title="Este es el título del último libro"
            author="Algún Autor"
            existences={1}
        />

       <Book
            title="Este es el título"
            author="Edgar Talledos"
            existences={1}
        >
            Esto es el contenido
        </Book>

        <Book
            title="Este el titulo 2"
            author="Segundo autor"
            existences={2}
            description="Esta es una descripción"
        />
    </div>
);

export default BookList;
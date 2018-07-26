import React from 'react';

import Book from './Book';
import LastBook from './LastBook';

const books = [
  {
    title: 'El aleph',
    author: 'Jorge Luis Borges',
    existences: 7,
    description: 'El Aleph es uno de los libros de cuentos más representativos del escritor argentino Jorge Luis Borges. Publicado en 1949, fue reeditado por el autor en 1974. Sus textos remiten a una infinidad de fuentes y bibliografías en torno a las cuales se articulan mitos y metáforas de la tradición literaria universal. ',
  }, {
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    existences: 0,
    description: 'Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español.1​ Fue catalogada como una de las obras más importantes de la lengua castellana durante el IV Congreso Internacional de la Lengua Española celebrado en Cartagena de Indias en marzo de 2007.',
  }, {
    title: 'The Long Tail',
    author: 'Chris Anderson',
    existences: 1,
    description: 'The book argues that products in low demand or that have a low sales volume can collectively build a better market share than their rivals, or exceed the relatively few current bestsellers and blockbusters, provided the store or distribution channel is large enough.',
  },
];

const BookList = () => (
  <div className="mdc-layout-grid__inner">
    {books.map((book, index) => {
       return (
         <Book
           title={book.title}
           key={index}
           position={index}
           author={book.author}
           description={book.description}
         />
       );
    })}
  </div>
);

export default BookList;

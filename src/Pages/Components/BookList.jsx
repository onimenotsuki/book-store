import React from 'react';

import Book from './Book';
import LastBook from './LastBook';

const books = [
  {
    title: "El Conde de Montecristo",
    author: "Alejandro Dumás",
    existences: 0,
    description: "El conde de Montecristo (en francés, Le comte de Monte-Cristo) es una novela de aventuras clásica de Alexandre Dumas (padre) y Auguste Maquet. Este último no figuró en los títulos de la obra ya que Alexandre Dumas pagó una elevada suma de dinero para que así fuera. Maquet era un colaborador muy activo en las novelas de Dumas, llegó a escribir obras enteras que Dumas reescribió más tarde. Esta obra se suele considerar como el mejor trabajo de Dumas, y a menudo se incluye en las listas de las mejores novelas de todos los tiempos. El libro se terminó de escribir en 1844, y fue publicado en una serie de 18 entregas, como folletín, durante los dos años siguientes.",
  }, {
    title: "La metamorfosis",
    author: "Franz Kafka",
    existences: 5,
    description: "La metamorfosis o La transformación (Die Verwandlung, en su título original en alemán) es un relato de Franz Kafka publicado en 1915 que narra la historia de Gregorio Samsa, un comerciante de telas que vive con su familia a la que él mantiene con su sueldo, quien un día amanece convertido en un enorme insecto.",
  }, {
    title: "El aleph",
    author: "Jorge Luis Borges",
    existences: 7,
    description: "El Aleph es uno de los libros de cuentos más representativos del escritor argentino Jorge Luis Borges. Publicado en 1949, fue reeditado por el autor en 1974. Sus textos remiten a una infinidad de fuentes y bibliografías en torno a las cuales se articulan mitos y metáforas de la tradición literaria universal. ",
  }, {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    existences: 0,
    description: "Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español.1​ Fue catalogada como una de las obras más importantes de la lengua castellana durante el IV Congreso Internacional de la Lengua Española celebrado en Cartagena de Indias en marzo de 2007.",
  }, {
    title: "The Long Tail",
    author: "Chris Anderson",
    existences: 1,
    description: "The book argues that products in low demand or that have a low sales volume can collectively build a better market share than their rivals, or exceed the relatively few current bestsellers and blockbusters, provided the store or distribution channel is large enough. The term long tail has gained popularity as describing the retailing strategy of selling a large number of different items which each sell in relatively small quantities, usually in addition to selling large quantities of a small number of popular items."
  },
];

const BookList = () => (
  <div className="mdc-layout-grid__inner">
    <div>Estamos en Book List</div>

    {books.map((book, index) => {
       if (index === 0) {
         return (
           <LastBook
             title={book.title}
             key={index}
             author={book.author}
             description={book.description}
           />
         );
       }

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

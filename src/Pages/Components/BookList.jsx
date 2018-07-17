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
    }
];

const BookList = () => (
    <div className="mdc-layout-grid__inner">
        <div>Estamos en Book List</div>
        <LastBook 
            title={books[0].title}
            author={books[0].author}
            existences={books[0].existences}
            description={books[2].description}
        />

       <Book
            title={books[1].title}
            author={books[1].author}
            existences={books[1].existences}
        >
            {books[1].description}
        </Book>

        <Book
            title={books[2].title}
            author={books[2].author}
            existences={books[2].existences}
            description={books[2].description}
        />
    </div>
);

export default BookList;
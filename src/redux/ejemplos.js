const getBook = require('./actions/getBook');

// Aprendiendo a modificar objetos en javascript
const reducer = (state = {}, { type, payload }) => {
  switch(type) {
  case 'ADD_BOOK':
    return {
      books: [
        ...state.books,
      ],
    };
    // store.getState()
    // case 'GET_BOOKS':
    /* TODO: Corregir action para manejar promesas asincronas */
    case 'GET_BOOK':
      return getBook(payload);
  default:
    return state;
  }
};

// switch(type) {
// case 'ADD_BOOK':
//   return 'ejecuntando ADD_BOOK';
// default:
//   return state;
// }
//
// if(type === 'ADD_BOOK') {
//   return 'ejecuntando ADD_BOOK';
// } else {
//   return state;
// }

console.log(reducer({ books: [
  { book: {
    id: '12312asdas',
    title: 'Donec hendrerit tempor tellus.',
    description: 'Sed id ligula quis est convallis tempor.  Praesent augue.'
  } }
] }, { type: 'ADD_BOOK' }));

console.log(reducer(
  {},
  {
    type: 'GET_BOOK', payload: { bookId: 'bJEfjl2INGMC' }
  }
));

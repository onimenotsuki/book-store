// import getBook from './actions/getBook';
const getBook = require('./actions/getBook');
const getBooks = require('./actions/getBooks');

// Aprendiendo a modificar objetos en javascript
const reducer = (state = {}, { type, payload }) => {
  switch(type) {
  case 'GET_BOOKS':
    return getBooks();
  case 'GET_BOOK':
    return getBook(payload);
  default:
    return state;
  }
};

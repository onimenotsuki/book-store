// import getBook from './actions/getBook';
const getBook = require('./actions/getBook');
const getBooks = require('./actions/getBooks');
const getRankingAverage = require('./actions/getUsersRanking');

// Aprendiendo a modificar objetos en javascript
const reducer = (state = {}, { type, payload }) => {
  switch(type) {
  case 'GET_BOOKS':
    return getBooks();
  case 'GET_BOOK':
    return getBook(payload);
  case 'GET_RANKING_AVERAGE':
    return getRankingAverage(payload)
  default:
    return state;
  }
};

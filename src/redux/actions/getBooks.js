const axios = require('axios');

const googleAPIUrl = 'https://www.googleapis.com/books/v1/volumes?q=jorge+luis+borges';

const fetchBooks = () => {
  axios.get(googleAPIUrl)
    .then(response => {
      return response.data.items;
    });
};

const getBooks = () => {
  return {
    books: [
      ...fetchBooks(),
    ],
  };
};

module.exports = getBooks;

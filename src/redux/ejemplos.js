const prevState = require('./schema.json');
const book = [{
  name: "Donec vitae dolor.",
  description: "Cum sociis natoque penatibus et magnis dis parturient.",
}];

// Aprendiendo a modificar objetos en javascript
const reducer = (state = book, { type }) => {
  switch(type) {
  case 'ADD_BOOK':
    return [book, {...state}];
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

console.log(reducer({book: { name: "sdsad", description: "adasdas" }}, { type: 'ADD_BOOK' }));

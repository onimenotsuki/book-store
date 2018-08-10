import { createStore } from 'redux';

const store = createStore((state = 1, action) => {
  if (action.type === 'TEST') {
    return state * 2;
  }
});

export default store;

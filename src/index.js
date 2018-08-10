import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/* Components and store */
import store from './redux/store/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

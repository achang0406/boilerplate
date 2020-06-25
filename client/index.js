import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';

import { Provider } from 'react-redux';
import store from './js/store';

import './css/style.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app') // eslint-disable-line no-undef
);

if (module.hot)
  // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef

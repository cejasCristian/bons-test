import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './app/App';
import Store from './model/Store';

const store = Store();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);

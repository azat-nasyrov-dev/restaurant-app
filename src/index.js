import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import './index.css';

import App from './components/app';

import store from './redux/store';
import history from './history';

// DEV ONLY!!!
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

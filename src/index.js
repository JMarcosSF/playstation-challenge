import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// import { fetchTrees } from "./actions";

import './index.css';
import App from './App';

const store = configureStore();
// store.dispatch(fetchTrees());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

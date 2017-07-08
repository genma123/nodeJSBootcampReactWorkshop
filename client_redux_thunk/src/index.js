import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { List } from 'immutable';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// import App from './App';
import { WrappedApp } from './containers';
import configureStore from './store/configureStore';
import './index.css';

const initAppState = { tasks: List([]) };

const store = configureStore(initAppState);

ReactDOM.render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>,
  document.getElementById('root')
);

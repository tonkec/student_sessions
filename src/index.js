import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addSession } from './actions/sessions';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';

const store = configureStore();

store.dispatch(addSession({studentEmail: "mail@a.com"}))
console.log(store.getState())

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

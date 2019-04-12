import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startGetSessions } from './actions/sessions';
import './App.css';
import './index.css';
import App from './App';
import {firebase} from './firebase/firebase';
import {history} from './App.js';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in');
    store.dispatch(startGetSessions()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push('/dashboard')
      }
    })
  } else {
    renderApp();
    history.push('/')
  }
});

ReactDOM.render(<p> Loading... </p>, document.getElementById('root'));

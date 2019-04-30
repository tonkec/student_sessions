import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startGetSessions } from './actions/sessions';
import {login, logout} from './actions/auth';
import './App.css';
import './index.css';
import AppRouter, {history} from './routers/AppRouter';
import {firebase} from './firebase/firebase';
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
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
    store.dispatch(login(user.uid))
    store.dispatch(startGetSessions()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/')
  }
});

ReactDOM.render(<p> Loading... </p>, document.getElementById('root'));

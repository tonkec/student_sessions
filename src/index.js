import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startGetSessions } from './actions/sessions';
import './App.css';
import './index.css';
import App from './App';
import {firebase} from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

firebase.auth().onAuthStateChanged((user) => {
  console.log(user)
  if (user) {
    console.log('log in');
  } else {
    console.log('log out');
  }
});

ReactDOM.render(<p> Loading... </p>, document.getElementById('root'));

store.dispatch(startGetSessions()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'));
})

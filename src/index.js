import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { startGetSessions } from "./actions/sessions";
import { login, logout, loginAsGuest } from "./actions/auth";
import "./App.scss";
import AppRouter, { history } from "./routers/AppRouter";
import { firebase } from "./firebase/firebase";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
let value = localStorage.getItem("user");
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid, user.email));
    store.dispatch(startGetSessions()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else if (value === "guest") {
    // console.log("Logging you in as guest...");
    store.dispatch(loginAsGuest(value));
    store.dispatch(startGetSessions()).then(() => {
      renderApp();
    });
  } else {
    // console.log("I don't recognize this user...");
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});

ReactDOM.render(<p> Loading... </p>, document.getElementById("root"));

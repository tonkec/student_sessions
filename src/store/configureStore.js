import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionsReducer from "../reducers/sessions";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";
import messagesReducer from "../reducers/messages";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({
      sessions: sessionsReducer,
      filters: filtersReducer,
      auth: authReducer,
      messages: messagesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

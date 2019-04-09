import {createStore, combineReducers} from "redux";
import sessionsReducer from '../reducers/sessions';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      sessions: sessionsReducer,
      filters: filtersReducer
    })
  );

  return store;
}

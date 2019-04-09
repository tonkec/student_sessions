import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({ // ako nije zadan, incrementBy ce bit {},
  // ako je incrementBy prazan onda ce bit 1
  type: "INCREMENT",
  incrementBy: typeof payload.incrementBy === "number" ? payload.incrementBy : 1
});

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
         count: state.count + action.incrementBy
       }
    default:
      return state;
  }
}

const store = createStore(countReducer);
const trackState = store.subscribe(()=> {
  console.log(store.getState())
});

store.dispatch(incrementCount({incrementBy: 10}))

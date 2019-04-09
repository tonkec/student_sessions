const sessionsReducerDefaultState = [];
const sessionsReducer = (state = sessionsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_SESSION":
      return [
        ...state,
        action.session
      ];
  default:
      return state;
  }
}

export default sessionsReducer;

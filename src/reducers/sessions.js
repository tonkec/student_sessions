const sessionsReducerDefaultState = [];
const sessionsReducer = (state = sessionsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_SESSION":
      return [
        ...state,
        action.session
      ];
    case "GET_SESSIONS":
      return action.sessions
  default:
      return state;
  }
}

export default sessionsReducer;

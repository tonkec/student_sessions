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
    case "REMOVE_SESSION":
      console.log(action.id)
      return state.filter(({ id }) => id !== action.id);
  default:
      return state;
  }
}

export default sessionsReducer;

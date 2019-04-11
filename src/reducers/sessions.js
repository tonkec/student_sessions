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
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((session) => {
        if (session.id === action.id) {
          return {
            ...session,
            ...action.newData
          }
        } else {
          return session;
        }
      })
  default:
      return state;
  }
}

export default sessionsReducer;

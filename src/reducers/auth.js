export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid: action.uid,
        email: action.email
      };
    case "LOGOUT":
      return {};
    case "LOGIN_AS_GUEST":
      return {
        id: action.id
      };
    default:
      return state;
  }
};

export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid: action.uid,
        email: action.email
      };
    case "LOGOUT":
      return {};
    case "LOGIN_WITHOUT_GOOGLE":
      return {
        uid: action.uid,
        email: action.email,
        password: action.password
      };
    default:
      return state;
  }
};

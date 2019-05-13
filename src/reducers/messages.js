export default (state = {}, action) => {
  switch (action.type) {
    case "SHOW_MESSAGE":
      console.log(action);
      return {
        show: action.show,
        message: action.message
      };
    default:
      return state;
  }
};

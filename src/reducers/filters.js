const filtersReducerDefaultState = {
  sortBy: "date",
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      }
    case "SORT_BY_EMAIL":
      return {
        ...state,
        sortBy: "email"
      }
    default:
      return state;
  }
}

export default filtersReducer;

const filtersReducerDefaultState = {
  sortBy: "date",
  sortDirection: "ascending"
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
    case "SORT_ASCENDING":
      return {
        ...state,
        sortDirection: "ascending"
      }
    case "SORT_DESCENDING":
      return {
        ...state,
        sortDirection: "descending"
      }
    default:
      return state;
  }
}

export default filtersReducer;

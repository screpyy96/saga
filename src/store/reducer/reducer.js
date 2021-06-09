const postReducer = (state = [], action) => {
  switch (action.type) {
    case "INITIALIZE_LIST_SUCCESS":
      return action.list;

    default:
      return state;
  }
};

export default postReducer;

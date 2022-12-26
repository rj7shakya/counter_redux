const initialState = {
  counter: 0,
};

const countReducer = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "INCREMENT":
      console.log("increment call");
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

export default countReducer;

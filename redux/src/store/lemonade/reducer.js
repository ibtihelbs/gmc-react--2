import { BUY_LEMONADE, RESTOCK_LEMONADE } from "./actions";
const initialState = {
  numberOfLemonade: 0,
  cash: 10,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LEMONADE:
      return {
        ...state,
        numberOfLemonade: state.numberOfLemonade - action.payload,
      };
    case RESTOCK_LEMONADE:
      return {
        ...state,
        numberOfLemonade: state.numberOfLemonade + action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

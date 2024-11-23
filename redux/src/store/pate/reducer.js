import { BUY_PATE, RESTOCK_PATE } from "./actions";
const initialState = {
  numberOfPate: 0,
  cash: 10,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PATE:
      return { ...state, numberOfPate: state.numberOfPate - action.payload };
    case RESTOCK_PATE:
      return { ...state, numberOfPate: state.numberOfPate + action.payload };

    default:
      return state;
  }
};

export default reducer;

import pateReducer from "./pate/reducer";
import lemonadeReducer from "./lemonade/reducer";
import { combineReducers, createStore } from "redux";
const RootReducers = combineReducers({
  pate: pateReducer,
  lemonade: lemonadeReducer,
});
const store = createStore(RootReducers);

export default store;

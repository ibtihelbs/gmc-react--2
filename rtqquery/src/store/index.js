import { configureStore } from "@reduxjs/toolkit";
import cart from "./api";

const store = configureStore({
  reducer: { cart },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import cake from "./cakeSlice";

const store = configureStore({
  reducer: {
    cake,
  },
});
export default store;

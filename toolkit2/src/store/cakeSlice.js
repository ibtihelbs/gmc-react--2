import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    numberOfCakes: 0,
    profit: 100,
    className: "Restock",
  },
  reducers: {
    buyCake: (state, action) => {
      state.numberOfCakes -= action.payload.number;
      state.profit += action.payload.price * action.payload.number;
    },
    restockCake: (state, action) => {
      state.numberOfCakes += action.payload.number;
      state.profit -= action.payload.price * action.payload.number;
    },
    setTheme: (state, action) => {
      state.className = action.payload ? "Buy" : "Restock";
    },
  },
});

export const { buyCake, restockCake, setTheme } = cakeSlice.actions;
export default cakeSlice.reducer;

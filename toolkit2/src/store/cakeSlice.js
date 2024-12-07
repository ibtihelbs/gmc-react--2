import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
  name: "cake",
  initialState: {
    numberOfCakes: 0,
    profit: 100,
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
  },
});

export const { buyCake, restockCake } = cakeSlice.actions;
export default cakeSlice.reducer;

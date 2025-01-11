import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const getCart = createAsyncThunk("cart/getcart", async () => {
  const res = await axios.get("http://localhost:3000/cart");
  return res.data;
});
const addToCart = createAsyncThunk("cart/addToCart", async (body) => {
  const res = await axios.post("http://localhost:3000/cart", body);
  return res.data;
});
const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.loading = false;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export default apiSlice.reducer;
export { getCart, addToCart };

import { configureStore } from "@reduxjs/toolkit";
import cake from "./cakeSlice"
import pate from "./pateSlice"
const store = configureStore({
    reducer:{
      cake, pate
    }
})

export default store
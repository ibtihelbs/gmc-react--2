import { createSlice } from "@reduxjs/toolkit";

const pateSlice = createSlice({
    name:"pate",
    initialState:{
        pateNumber: 10,
        pateTotalPrice: 500
    },
    reducers:{
        buypate :(state, action)=>{
           if (state.pateNumber == 0) return
           state.pateNumber -= action.payload,
           state.pateTotalPrice += action.payload * 3
        },
        restockpate: (state, action)=>{
           state.pateNumber += action.payload,
           state.pateTotalPrice -= action.payload 
        }
    }
})

export default pateSlice.reducer
export const {buypate, restockpate} = pateSlice.actions
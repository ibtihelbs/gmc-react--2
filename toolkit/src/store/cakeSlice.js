import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
    name:"cake",
    initialState:{
        cakeNumber: 0,
        cakeTotalPrice: 20
    },
    reducers:{
        buycake :(state, action)=>{
           if (state.cakeNumber == 0) return
           state.cakeNumber -= action.payload,
           state.cakeTotalPrice += action.payload * 3
        },
        restockcake: (state, action)=>{
           state.cakeNumber += action.payload,
           state.cakeTotalPrice -= action.payload 
        }
    }
})

export default cakeSlice.reducer
export const {buycake, restockcake} = cakeSlice.actions
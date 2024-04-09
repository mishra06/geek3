import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    DATA:[],
    CHART:[]
};

const cryptoSlice = createSlice({
    name : "conis",
    initialState,
    reducers : {
        SetData:(state,action)=>{
            state.DATA = action.payload;
        },
        SetChart:(state,action)=>{
            state.CHART = action.payload
        }
    }

});

export const {SetData,SetChart} = cryptoSlice.actions;
export default cryptoSlice.reducer;
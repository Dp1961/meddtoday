import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Helper from "../helper/axiosHelper"

const initialState = {
    loader:false,
    isLogin:false,
    
};


export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        loader: (state,action) => {
            state.loader = action.payload;
        },
        isLogin: (state,action) => {
            state.isLogin = action.payload;
        }
        
   
    }
});

export const {loader,isLogin} = counterSlice.actions;

export default counterSlice.reducer;




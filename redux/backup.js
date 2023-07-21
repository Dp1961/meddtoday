import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Helper from "../helper/axiosHelper"

const initialState = {
    currentProductList: [],
    checkedPrice: {},
    labelFilterArray: [],
    favoriteProductsBadgeValue: 0,
    favoriteProductIdObject: {},
    addedProductIncartCount: 0,
    accesCode: "",
    encrpCode: "",
};


export const backupSlice = createSlice({
    name: "backup",
    initialState,
    reducers: {
        setCurrentProductList: (state, action) => {
            state.currentProductList = action.payload;
        },
        setCheckedPrice: (state, action) => {
            state.checkedPrice = action.payload;
        },
        setlabelFilterArray: (state, action) => {
            state.labelFilterArray = action.payload
        },
        setFavoriteProductsBadgeValue: (state, action) => {
            state.favoriteProductsBadgeValue = action.payload
        },
        setfavoriteProductIdObject: (state, action) => {
            state.favoriteProductIdObject = action.payload;

        },
        setAddedProductIncartCount: (state, action) => {
            state.addedProductIncartCount = action.payload
        },
        setAccesCode: (state, action) => {
            state.accesCode = action.payload
        },
        setEncrpCode: (state, action) => {
            state.encrpCode = action.payload
        }

    }
});

export const { setCurrentProductList, setAccesCode, setEncrpCode, setCheckedPrice, setlabelFilterArray, setFavoriteProductsBadgeValue, setfavoriteProductIdObject, setAddedProductIncartCount } = backupSlice.actions;

export default backupSlice.reducer;




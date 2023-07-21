import { createSlice } from "@reduxjs/toolkit";
import Helper from "../helper/axiosHelper"
import { setAddedProductIncartCount } from "./backup";
const baseUrl = Helper.baseUrl();

const initialState = {    
    getCartList:[],
    
};


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getCartList: (state,action) => {
            state.getCartList = action.payload;
        },
        
    }
});

export const {getCartList} = cartSlice.actions;

export default cartSlice.reducer;



export const addtoCartCb = (data,callback = () => {}) =>async (dispatch) => {
    var result = await Helper.postData(baseUrl+"cart/addToCart",data)
    .then((response) => response.data);
    dispatch(setAddedProductIncartCount(result.data.totalItems))
    callback(result);
};

export const getCartListCb = (callback = () => {}) =>async (dispatch) => {
    var result = await Helper.getData(baseUrl+"cart/cartItemList")
    .then((response) => response.data);
    callback(result);  
    dispatch(getCartList(result))      
};

    
export const deleteToCartCb = (data,callback = () => {}) =>async (dispatch) => {
    var result = await Helper.patchData(baseUrl+"cart/removeProductFromCart",data)
    .then((response) => response.data);
    console.log("see deleted cart response", result);
    dispatch(setAddedProductIncartCount(result.data.totalItems))
    callback(result);
};


export const getbillingSumCb = (callback = () => {}) =>async (dispatch) => {
    var result = await Helper.getData(baseUrl+"cart/billingSummary")
    .then((response) => response.data);
    callback(result);       
};

export const editCartCb = (data,callback = () => {}) =>async (dispatch) => {
    var result = await Helper.patchData(baseUrl+"cart/editCart",data)
    .then((response) => response.data);
    callback(result);       
};

export const myOrderCb = (type, callback = () => {}) =>async (dispatch) => {  
    var result = await Helper.getData(baseUrl+"order/listOfOrderPlacedByUser/"+type)
    .then((response) => response.data);
    callback(result);       
};

export const placePriCb = (data,callback = () => {}) =>async (dispatch) => {
    var result = await Helper.postData(baseUrl+"order/placePriscriptionOrder",data)
    .then((response) => response.data);
    callback(result);       
};

export const viewOrderCb = (data,callback = () => {}) =>async (dispatch) => {
    var result = await Helper.postData(baseUrl+"order/viewOrder",data)
    .then((response) => response.data);
    callback(result);       
};

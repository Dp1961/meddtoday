import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Helper from "../helper/axiosHelper"
import { setFavoriteProductsBadgeValue, setfavoriteProductIdObject } from "./backup";
const baseUrl = Helper.baseUrl();

const initialState = {    
    authToken:"",
    getCustomerData:[],
    getAddressList:[]
    
};


export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        authToken: (state,action) => {
            state.authToken = action.payload;
        },
        getCustomerData: (state,action) => {
            state.getCustomerData = action.payload;
        },
        getAddressList: (state,action) => {
            state.getAddressList = action.payload;
        },
    }
});

export const {authToken,getCustomerData,getAddressList} = customerSlice.actions;

export default customerSlice.reducer;


export const sendOtpcb = (data,apiUrl,callback = () => {}) =>async (dispatch) => {

    var result = await Helper.postData(baseUrl+apiUrl,data)
    .then((response) => response.data);
    callback(result);
};

export const verifyOtpcb = (data,callback = () => {}) =>async (dispatch) => {

    var result = await Helper.postData(baseUrl+"customer/verifyOtpAndLogin",data)
    .then((response) => response.data);
    callback(result);
    dispatch(authToken(result));
};

export const getCustomerDatacb = (callback = () => {}) =>async (dispatch) => {
    var result = await Helper.getData(baseUrl+"customer/getCustomer")
    .then((response) => response.data);
    callback(result);
    dispatch(getCustomerData(result));

}

export const getAddressListcb = (callback = () => {}) =>async (dispatch) => {
    var result = await Helper.getData(baseUrl+"customer/AddressList")
    .then((response) => response.data);
    callback(result);
    dispatch(getAddressList(result));

}


export const editProfileCb = (data,callback = () => {}) =>async (dispatch) => {

    var result = await Helper.patchData(baseUrl+"customer/editCustomer",data)
    .then((response) => response.data);
    callback(result);
    
};

export const addNewArsCb = (data,callback = () => {}) =>async (dispatch) => {

    var result = await Helper.postData(baseUrl+"customer/addAddress",data)
    .then((response) => response.data);
    callback(result);
   
};

export const editAddressCb = (data,url,callback = () => {}) =>async (dispatch) => {

    var result = await Helper.patchData(baseUrl+"customer/editAddress/"+url,data)
    .then((response) => response.data);
    callback(result);
   
};



export const delAddressCb = (url,callback = () => {}) =>async (dispatch) => {
    var result = await Helper.deleteData(baseUrl+"customer/deleteAddress/"+url)
    .then((response) => response.data);
    callback(result);
   
};


export const makeAsDefaultAddrCb = (data,callback = () => {}) =>async (dispatch) => {
    var result = await Helper.postData(baseUrl+"customer/makeAsADefaultAddress",data)
    .then((response) => response.data);
    callback(result);
   
};


export const addRmvFavCb = (data,callback = () => {}) =>async (dispatch) => {
    var result = await Helper.postData(baseUrl+"customer/addToFavoriteOrRemoveFromFavorite",data)
    .then((response) => response.data);
    dispatch(setFavoriteProductsBadgeValue(result.data.length))
    callback(result);
    
};

export const uploadPresCb = (data,callback = () => {}) =>async (dispatch) => {
    var result = await Helper.formData(baseUrl+"customer/uploadPrescription",data)
    .then((response) => response.data);
    callback(result);       
};


export const delPrescriptionCb = (data,callback = () => {}) =>async (dispatch) => {
    var result = await Helper.patchData(baseUrl+"customer/deletePrescription",data)
    .then((response) => response.data);
    callback(result);
   
};

export const cusFavLstCb = (callback = () => {}) =>async (dispatch) => {
    var result = await Helper.getData(baseUrl+"customer/favoriteList")
    .then((response) => response.data);
    // console.log(result,"result");
    if(result.status){
        dispatch(setFavoriteProductsBadgeValue(result.data.length))
        dispatch(setfavoriteProductIdObject(result.data))
        callback(result);
    }
    
   
};

export const sendRegiOtpcb = (data,apiUrl,callback = () => {}) =>async (dispatch) => {

    var result = await Helper.postData(baseUrl+apiUrl,data)
    .then((response) => response.data);
    callback(result);
};
export const verifyregOtpcb = (data,callback = () => {}) =>async (dispatch) => {

    var result = await Helper.postData(baseUrl+"customer/verifyReg",data)
    .then((response) => response.data);
    callback(result);
    dispatch(authToken(result));
};

import { createSlice } from "@reduxjs/toolkit";
import Helper from "../helper/axiosHelper"
import { setAddedProductIncartCount, setCurrentProductList } from "./backup";
const baseUrl = Helper.baseUrl();

const initialState = {
    getProductList: [],
    getMedicineData: [],
    getProductSearch: [],
    getMedicine: [],
    getNewArrivals: [],
    getSimilar: [],
    getblogs: [],
    getblogsDetail: [],
    getsearchProduct:[],

  


};


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProductList: (state, action) => {
            state.getProductList = action.payload;
        },
        getMedicineData: (state, action) => {
            state.getMedicineData = action.payload;
        },
        getProductSearch: (state, action) => {
            state.getProductSearch = action.payload;
        },
        getMedicine: (state, action) => {
            state.getMedicine = action.payload;
        },
        getNewArrivals: (state, action) => {
            state.getNewArrivals = action.payload;
        },
        getSimilar: (state, action) => {
            state.getSimilar = action.payload;
        },
        getblogs: (state, action) => {
            state.getblogs = action.payload;
        },
        getblogsDetail: (state, action) => {
            state.getblogs = action.payload;
        },
        getsearchProduct: (state, action) => {
            state.getsearchProduct = action.payload;
        },
        

    }
});

export const { getProductList, getMedicineData, getProductSearch, getMedicine, getNewArrivals, getSimilar, getblogs, getblogsDetail, getsearchProduct } = productSlice.actions;

export default productSlice.reducer;


export const rename = (data, callback = () => { }) => async (dispatch) => {
    console.log("reduxdata", data)
    callback(data);

};



export const getProductListCb = (data, callback = () => { }) => async (dispatch) => {
    console.log("reduxdata", data)
    var result = await Helper.queryData(baseUrl + "product/productFilter&SortBy", { params: data },)
        .then((response) => response.data)
    dispatch(setCurrentProductList(result));
    callback(result);
    dispatch(getProductList(result))

};

export const getProductByTypeCb = (data, callback = () => { }) => async (dispatch) => {
    console.log("reduxdata", data)
    var result = await Helper.postData(baseUrl + "product/productTypes", data)
        .then((response) => response.data);
    dispatch(setCurrentProductList(result));
    callback(result);

};

export const getFilterParamsCb = (callback = () => { }) => async (dispatch) => {
    var result = await Helper.getData(baseUrl + "product/productFilter&SortBy")
        .then((response) => response.data);
    callback(result);
};

export const getMedicineDataCb = (data, callback = () => { }) => async (dispatch) => {
    var result = await Helper.postData(baseUrl + "product/viewProduct", data)
        .then((response) => response.data)
    callback(result);
};

export const getProductSearchCb = (data, callback = () => { }) => async (dispatch) => {
    var result = await Helper.postData(baseUrl + "product/searchProducts", data)
        .then((response) => response.data);
    callback(result);
    dispatch(getProductSearch(result))

};
// medicine
export const getMedicinehCb = (data, callback = () => { }) => async (dispatch) => {
    var result = await Helper.postData(baseUrl + "customer/getProductWrittenReviewPbiFbiFAQ", data)
        .then((response) => response.data);
    callback(result);
    dispatch(getMedicine(result))

};

export const placeOrderCb = (data,callback = () => { }) => async (dispatch) => {
    var result = await Helper.postData(baseUrl + "order/placeAnOrder", data)
        .then((response) => response.data)
        dispatch(setAddedProductIncartCount(0));
    callback(result);
};


export const todayDealCb = (callback = () => { }) => async (dispatch) => {

    var result = await Helper.getData(baseUrl + "product/dealsOfTheDay")
        .then((response) => response.data)
    callback(result);
};


//New Arrivals home page
export const getNewArrivalsCb = (callback = () => { }) => async (dispatch) => {
    var result = await Helper.getData(baseUrl + "product/newArrivals")
        .then((response) => response.data);
    callback(result);


};



// All speciallity catagries page
export const getAllSpecialityFilter = (callback = () => { }) => async (dispatch) => {
    var result = await Helper.getData(baseUrl + "product/listOfCategoriesAndspecialities")
        .then((response) => response.data);
    callback(result);

};


//Similar product
export const getSimilarCb = (data, callback = () => { }) => async (dispatch) => {
    var result = await Helper.postData(baseUrl + "product/similarProducts", data)
        .then((response) => response.data);
    callback(result);
    dispatch(getSimilar(result))

};

//Similar product
export const sendEmail = (data, callback = () => { }) => async (dispatch) => {
    var result = await Helper.postData(baseUrl + "customer/subscribe", data)
        .then((response) => response.data);
    callback(result);
    dispatch(getSimilar(result))

};

// blogs for home page
export const getblogsCb = (callback = () => { }) => async (dispatch) => {
    var result = await Helper.getData(baseUrl + "blog/list")
        .then((response) => response.data);
    callback(result);


};

// blog detail page
export const getblogsDetailCb = (data, callback = () => { }) => async (dispatch) => {
    var result = await Helper.getData(baseUrl + "blog/view/" + data)
        .then((response) => response.data);
    callback(result);

};

//writer
export const getwriterCb = (data, callback = () => { }) => async (dispatch) => {
    var result = await Helper.getData(baseUrl + "product/getWritter/" + data)
        .then((response) => response.data);
    callback(result);

};

//review
export const getreviewCb = (data, callback = () => { }) => async (dispatch) => {
    var result = await Helper.getData(baseUrl + "product/getReviewer/" + data)
        .then((response) => response.data);
    callback(result);

};
//search products

export const getsearchProductCb = (data, callback = () => { }) => async (dispatch) => {
    var result = await Helper.postData(baseUrl + "product/search", data)
        .then((response) => response.data);
    callback(result);
    dispatch(getsearchProduct(result))

};

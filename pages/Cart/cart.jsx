import React, { useEffect, useState } from 'react'
import './cart.css'
import dolo from "../../assets/images/dolo.png"
import dropdown from "../../assets/images/dropdown.png"
import downArrow from "../../assets/images/downArrow.png"
import percent from "../../assets/images/percent.png"
import offer1 from "../../assets/images/offer1.png"
import sonic from "../../assets/images/sonic.png"
import likeButton from "../../assets/images/likeButton.png"
import returns from "../../assets/images/returns.png"
import checkout from "../../assets/images/checkout.png"
import delivery from "../../assets/images/delivery.png"
import support from "../../assets/images/support.png"
import rightArrrow from '../../assets/images/rightArrrow.png'
import sugar from "../../assets/images/sugar.png"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import leftArrow from '../../assets/images/leftArrow.png'
import rightArroww from '../../assets/images/rightArroww.png'
import heater from "../../assets/images/heater.png"
import layermask from "../../assets/images/layermask.png"
import tonic from "../../assets/images/tonic.png"
import leftbgWhite from "../../assets/images/leftbgWhite.png"
import rightbgwhite from "../../assets/images/rightbgwhite.png"
import { getCartListCb, } from "../../redux/cart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import { useDispatch, useSelector } from 'react-redux';
import Modal from "react-bootstrap/Modal";
import { loader } from "../../redux/common";
import { useForm } from "react-hook-form";
import { placeOrderCb } from "../../redux/product";
import { getAddressListcb, addNewArsCb, delAddressCb, editAddressCb, makeAsDefaultAddrCb, addRmvFavCb } from "../../redux/customerApi";
import { deleteToCartCb, getbillingSumCb, editCartCb } from "../../redux/cart";
import Slider from "react-slick";
import { getNewArrivalsCb } from "../../redux/product"
import { addtoCartCb } from "../../redux/cart";
import { HiLocationMarker } from 'react-icons/hi'
import{AiOutlineShoppingCart} from "react-icons/ai"
function Cart() {


  // const isLoginStatus = useSelector(state => state.apiReducer.isLogin);
  const isLoginStatus = localStorage.getItem("isLogin");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addressDetails, setAddressDetails] = useState([]);
  const [flag, setFlag] = useState();
  const [quantity, setQuantity] = useState(1);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register: register2, formState: { errors: errors2 }, reset, handleSubmit: handleSubmit2, } = useForm({ mode: "onBlur" });
  const { register: register3, formState: { errors: errors3 }, reset3, handleSubmit: handleSubmit3, } = useForm({ mode: "onBlur" });

  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const [showing, setShowing] = useState(new Set());

  const [addressType, setaddressType] = useState("Home");
  const [addressList, setAddressList] = useState([]);
  const [getCartList, setGetCartListList] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  const [deliverToSt, setDeliverToSt] = useState("");
  const [mobileNumberSt, setMobileNumberSt] = useState("");
  const [pincodeSt, setPincodeSt] = useState("");
  const [houseToSt, setHouseToSt] = useState("");
  const [streetNameoSt, setStreetNameoSt] = useState("");
  const [editAddIdSt, setEditAddIdSt] = useState("");
  const [arrivalsData, setArrivalsData] = useState([]);

  const [showEdt, setShowEdt] = useState(false);
  const handleShowEdt = () => setShowEdt(true);
  const handleCloseEdt = () => setShowEdt(false);


  const [billingData, setBillingData] = useState([]);

  const [makeAsDefault, setMakeAsDefault] = useState("");

  let { favoriteProductIdObject } = useSelector(state => state.backupReducer);

  let proceedToBuyPath = true;

  let validaterForPrescription = false;


  const handleRedirect = (url) => {
    navigate(url);
    window.scrollTo(0, 0);
  }

  const addCartFn = (e) => {
    if (isLoginStatus) {
      if (quantity == 0) {
        toast.error("Please add quantity");
      } else {
        dispatch(loader(true));
        var data = {
          productId: e._id,
          quantity: quantity,
        };

        dispatch(
          addtoCartCb(data, (resp) => {
            dispatch(loader(false));
            if (resp.status) {
              toast.success("Product Added successfully");
            } else {
              toast.error(resp.message);
            }
          })
        );
      }
    } else {
      toast.error("Please Login to add cart");
    }
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };


  useEffect(() => {
    if (!isLoginStatus) {
      navigate("/");
      toast.error("Please Login to view cart");
    } else {
      dispatch(loader(true));
      dispatch(getCartListCb((resp) => {
        if (resp.status) {
          if (resp.data != undefined) {
            setGetCartListList(resp.data);
            setCartLength(resp.data.length)

          }
        } else {
          toast.error(resp.message);
        }
      }));
      dispatch(getAddressListcb((resp) => {
        dispatch(loader(false));
        if (resp.status) {
          if (resp.data != undefined) {
            setAddressList(resp.data);
            var defaultAddress = resp.data.filter((data => data.defaultAddress == true))
            // console.log(defaultAddress, "defaultAddress")
            if (defaultAddress.length != 0) {
              setAddressDetails(defaultAddress[0])
              setShowing(showing => { showing.add(defaultAddress[0]._id); return showing; })
            }

          }
        } else {
          toast.error(resp.message)
        }
      }))
      dispatch(getbillingSumCb((resp) => {
        // console.log("billing status", resp)

        dispatch(loader(false));
        if (resp.status) {
          setBillingData(resp.data)
        } else {
          toast.error(resp.message)
        }
      }))


      dispatch(getNewArrivalsCb((resp) => {
        dispatch(loader(false));
        if (resp && resp.status) {
          // console.log(resp.data, "resp");
          var arr = [];
          arr.push(resp.data);
          setArrivalsData(resp.data);
        } else {
          // console.log(resp);
          toast.error(resp ? resp.message : "Error occurred while searching");
        }
      }));

    }

  }, [flag])

  const rmvCartFn = (e) => {
    // console.log(e, "e");
    dispatch(loader(true));
    var data = {
      "productId": e.items.productId
    }
    dispatch(deleteToCartCb(data, (resp) => {
      dispatch(loader(false));
      if (resp.status) {
        // console.log("checking", resp);
        toast.success(resp.message);
        setFlag(!flag);
      } else {
        toast.error(resp.message);
      }
    }))

  }

  const deleteAdrFn = (data) => {
    dispatch(loader(true));
    dispatch(delAddressCb(data._id, (resp) => {
      if (resp.status) {
        dispatch(loader(false));
        toast.success(resp.message);
        setFlag(!flag);
      } else {
        dispatch(loader(false));
        toast.error(resp.message)
      }


    }))
  }

  const proceedToBuy = () => {
    if (proceedToBuyPath == true) {
      dispatch(loader(true));
      dispatch(placeOrderCb((resp) => {
        dispatch(loader(false));
        if (resp.status) {
          toast.success(resp.message);
          navigate("/Success")
          setFlag(!flag);
        } else {
          toast.error(resp.message);
        }
      }))
    } else {
      navigate(`/cartPrescription`)
    }

  }

  const addNewFn = (data) => {
    // console.log(JSON.stringify(data));

    data["AddressType"] = addressType;
    dispatch(loader(true));
    dispatch(addNewArsCb(data, (resp) => {

      if (resp.status) {
        dispatch(loader(false));
        reset();
        toast.success(resp.message);
        handleCloseAdd();
        handleClose();
        setFlag(!flag);
      } else {
        dispatch(loader(false));
        toast.error(resp.message)
      }
    }))
  };

  const check = (e, id) => {
    //     console.log(event.currentTarget.id,"id");
    // setEnable();
    // event.currentTarget.classList.toggle('colSix');
    // console.log(id, "id")
    e.preventDefault()
    setShowing(showing => {
      showing = new Set(showing);
      if (showing.has(id)) {
        showing.delete(id);
      } else {
        showing.clear();
        showing.add(id);
        setMakeAsDefault(id)
      }
      return showing;
    });
  };

  const editQuantityFn = (e, quan) => {

    dispatch(loader(true));
    var data = {
      "productId": e.products[0]._id,
      "quantity": parseInt(quan)
    }
    dispatch(editCartCb(data, (resp) => {
      dispatch(loader(false));
      if (resp.status) {
        setFlag(!flag)
        toast.success(resp.message);

      } else {
        toast.error(resp.message);
      }
    }));

  }
  const editIconFn = (data) => {
    // console.log(data, "data");
    setDeliverToSt(data.DeliverTo)
    setMobileNumberSt(data.MobileNo)
    setPincodeSt(data.PinCode)
    setHouseToSt(data.HouseNo)
    setStreetNameoSt(data.StreetName)
    setEditAddIdSt(data._id)

    handleShowEdt();
  };

  const editOldAdd = (data) => {
    for (let k in data) data[k] == "" && delete data[k];
    data["AddressType"] = addressType;
    dispatch(loader(true));
    dispatch(editAddressCb(data, editAddIdSt, (resp) => {
      if (resp.status) {

        dispatch(loader(false));
        handleCloseEdt();

        toast.success(resp.message);
        setFlag(!flag);
      } else {
        dispatch(loader(false));
        toast.error(resp.message)
      }
    }))
  };

  const makeUsDefaultAddFn = () => {
    dispatch(loader(true));
    var data = {
      "addressId": makeAsDefault,
      "defaultAddress": true
    }
    dispatch(makeAsDefaultAddrCb(data, (resp) => {
      if (resp.status) {
        dispatch(loader(false));
        toast.success(resp.message);
        setFlag(!flag);
        handleClose();
      } else {
        dispatch(loader(false));
        toast.error(resp.message);
      }
    }
    ))
  }

  const wiseList = (e) => {
    dispatch(loader(true));
    if (localStorage.getItem(e._id) === "true") {
      localStorage.removeItem(e._id);
    }
    var data = { "productId": e._id }
    dispatch(addRmvFavCb(data, (res) => {
      if (res.status) {
        dispatch(loader(false));
        toast.success(res.message);
      } else {
        dispatch(loader(false));
        toast.error(res.message);
      }
    }))
  }

  useEffect(() => {
    for (let i = 0; i < favoriteProductIdObject.length; i++) {
      localStorage.setItem(favoriteProductIdObject[i]._id, true);
    }
  }, [favoriteProductIdObject]);


  return (
    <div>

      {/* Home and Medicine Start */}
      <div className='pt-0'>
        <div className="container bgLightYellow">
          <div className='d-flex px-md-4 py-3'>
            <a className='text-decoration-none text-dark'><p className='fw6 results mb-0'>Home <img src={rightArrrow} alt="" className='img-fluid mx-1' /></p></a>
            <a className='text-decoration-none text-dark'><p className='fw6 results mb-0'
            // onClick={()=>{whiteList({"_id":"64268484d74e892b91379ba4"})}}
            >Cart</p></a>
          </div>
        </div>
      </div>
      {/* Home and Medicine end */}

      {/* Cart Start */}
      <section className='cart'>
        <div className="container">
        {
                  getCartList.length != 0 ?
                
          <div className="row">

            <div className="col-lg-8 col-md-12">
              <p className='btn bTnPAra bgYellow w-100 fw6 text-start cartText'>{cartLength == 0 ? "No Items in your cart" : cartLength + " Items in your Cart"}</p>
              <div className='bgGray d-sm-flex justify-content-between p-2 mt-4'>
                <div className='d-flex mt-1'>
                  <div className='align-self-center'>
                    <span >
                      <HiLocationMarker className="locationFnt" />
                    </span>
                  </div>
                  <a className='text-decoration-none text-dark fw6'>
                    {addressDetails.length != 0 ?
                      <p className='locatioPara'>Delivery To: {addressDetails?.DeliverTo} Plot no: {addressDetails?.HouseNo} ,{addressDetails?.StreetName}, {addressDetails?.PinCode}</p>
                      :
                      <p className="locatioPara mt-1">Please add Address</p>
                    }
                  </a>
                </div>
                <div className='align-self-center'>
                  <button className='btn bgRed text-white editSize' onClick={handleShow}>Edit / Select Adress</button>
                </div>
              </div>
              {/* First Results */}
              <div className='prescriptionNeededContainer'>
                {
                  getCartList.length != 0 ? <p className='mb-3 mt-4 fw7 doloMed'>Prescription needed products</p> : false
                }

                {getCartList && getCartList.length == 0 ? <h3>No Product Added in cart</h3> :
                  getCartList.map((item, i) => {
                    if (item.products[0].prescriptionNeeded == false) {
                      validaterForPrescription = true
                    }
                    if (item.products[0].prescriptionNeeded == true) {
                      proceedToBuyPath = false;
                      return (
                        <div className="card saveCost1 px-2 px-lg-0 px-md-0 px-xl-0 px-xxl-0 mb-5">
                          <div className="row">
                            <div className="col-sm-2 align-self-center IMgclaSS">
                              <img src={item?.products[0].imgUrls[0]} alt="dolo" className='img-fluid px-xl-3 py-4' />
                            </div>
                            <div className="col-sm-10 align-self-center">
                              <div className='d-sm-flex justify-content-between'>
                                {/* Content */}
                                <div className='pb-2'>
                                  <p className='mb-0 fw7 doloMed'>{item?.products[0]?.nameOfMedicine}</p>
                                  <span className='text-muted'>By {item?.products[0]?.manufacturer}</span>
                                  <p className='fw6'>{item?.products[0]?.packingForm}</p>
                                  <p className='mb-0'><span className='fw8  mb-0'>₹  {Date.now() > item?.products[0]?.dealExpiresIn ? item?.products[0]?.priceToCustomer : item?.products[0]?.newPriceToCustomer}</span><span className='px-2 text-muted'>MRP<s className='px-1 mt-1'>₹{item?.products[0].mrp}</s></span></p>
                                  <span className='text-muted fortax '>Include {item?.products[0]?.tax}% Tax</span>
                                </div>
                                {/* Quantity */}

                                <div className="mx-2 delQuantityWrap">
                                  <div className=' d-flex d-lg-flex d-md-flex d-sm-flex justify-content-end mx-2 delAlign d-sm-block d-none' onClick={() => { rmvCartFn(item) }}>
                                    <a className='text-dark'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                      </svg>
                                    </a>
                                  </div>
                                  <div class="select mt-sm-5">
                                    <select onChange={(e) => { editQuantityFn(item, e.target.value) }}>
                                      <option className='fw6'>{item?.items.quantity} Quantity selected <img src={dropdown} alt="" /></option>
                                      <option value="1" >1</option>
                                      <option value="2">2 </option>
                                      <option value="3">3 </option>
                                      <option value="4">4 </option>
                                      <option value="5">5 </option>
                                      <option value="6">6 </option>
                                      <option value="7">7 </option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>

                                    </select>
                                    <div class="select_arrow">
                                    </div>
                                  </div>
                                  <div className='d-flex justify-content-end mx-2 delAlign d-block d-sm-none'>
                                    <a className='text-dark'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                    </a>
                                  </div>
                                </div>
                                <p className='saveCost2 bgYellow px-1'>Save  {Date.now() > item?.products[0]?.dealExpiresIn ? item?.products[0]?.discountPercentage : item?.products[0]?.newDiscountPercentage} %</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })}
              </div>
              {/* First Results */}
              <div className='prescriptionNeededContainer'>
                {
                  validaterForPrescription ? <p className='mb-0 fw7 doloMed'>Prescription not needed products</p> : false
                }
                {getCartList && getCartList.length == 0 ? false :
                  getCartList.map((item, i) => {
                    if (item.products[0].prescriptionNeeded == false) {
                      return (
                        <div className="card saveCost1 px-2 px-lg-0 px-md-0 px-xl-0 px-xxl-0 mt-5">
                          <div className="row">
                            <div className="col-sm-2 align-self-center">
                              <img src={item?.products[0].imgUrls[0]} alt="dolo" className='img-fluid px-xl-3 py-4' />
                            </div>
                            <div className="col-sm-10 align-self-center">
                              <div className='d-sm-flex justify-content-between'>
                                {/* Content */}
                                <div>
                                  <p className='mb-0 fw7 doloMed'>{item?.products[0]?.nameOfMedicine}</p>
                                  <span className='text-muted'>By {item?.products[0]?.manufacturer}</span>
                                  <p className='fw6'>{item?.products[0]?.packingForm}</p>
                                  <p className=''><span className='fw8 '>₹  {Date.now() > item?.products[0]?.dealExpiresIn ? item?.products[0]?.priceToCustomer : item?.products[0]?.newPriceToCustomer}</span><span className='px-2 text-muted'>MRP<s className='px-1 mt-1'>₹{item?.products[0].mrp}</s></span></p>
                                </div>
                                {/* Quantity */}

                                <div className="mx-2 delQuantityWrap">
                                  <div className=' d-flex d-lg-flex d-md-flex d-sm-flex justify-content-end mx-2 delAlign d-sm-block d-none' onClick={() => { rmvCartFn(item) }}>
                                    <a className='text-dark'>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                      </svg>
                                    </a>
                                  </div>
                                  <div class="select mt-sm-5">
                                    <select onChange={(e) => { editQuantityFn(item, e.target.value) }}>
                                      <option className='fw6'>{item?.items.quantity} Quantity selected <img src={dropdown} alt="" /></option>
                                      <option value="1" >1</option>
                                      <option value="2">2 </option>
                                      <option value="3">3 </option>
                                      <option value="4">4 </option>
                                      <option value="5">5 </option>
                                      <option value="6">6 </option>
                                      <option value="7">7 </option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>

                                    </select>
                                    <div class="select_arrow">
                                    </div>
                                  </div>
                                  <div className='d-flex justify-content-end mx-2 delAlign d-block d-sm-none'>
                                    <a className='text-dark'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                    </a>
                                  </div>
                                </div>
                                <p className='saveCost2 bgYellow px-1'>Save  {Date.now() > item?.products[0]?.dealExpiresIn ? item?.products[0]?.discountPercentage : item?.products[0]?.newDiscountPercentage} %</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })}
              </div>

            </div>

            <div className="col-lg-4 col-md-12 fourCol">
              <button className='btn bTnPAra bgYellow w-100 fw6 text-start cartText mt-4 mt-lg-0'>Cart total: ₹{billingData?.cartValue}</button>
              <div className="card cardBG p-2 mt-3">

                {/* <div className='d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <div className='percent'>
                                            <img src={percent} alt="percent" className='img-fluid' />
                                        </div>
                                        <h5 className='mx-2'>Apply Coupons</h5>
                                    </div>
                                    <div className='p-0 downArrow mt-0'>
                                        <img src={downArrow} alt="down" className='img-fluid ' />
                                    </div>
                                </div>
                                
                                <div className='mt-4'>
                                    <form className='applyBtnPstn'>
                                        <div class="mb-3">
                                            <input type="text" class="form-control" id="textSearch" aria-describedby="emailHelp" placeholder='AB45CV' />
                                        </div>
                                        <button className='btn bgRed fw5 text-white applyBtn applyFnt'>Apply</button>
                                    </form>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-6 col-lg-12 col-sm-6">
                                        <div className="card offercartCard mt-4 p-2">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 align-self-center ">
                                                    <img src={offer1} alt="offer" className='img-fluid mx-3' />
                                                </div>
                                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                                    <h5 className='px-3 offerPara'>Get FLAT Rs.350 OFF on orders above Rs 1499</h5>
                                                    <p className='fontMontserrat fw6 px-3 mb-0'>Code : AB54C1</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-6 col-lg-12 col-sm-6">
                                        <div className="card offercartCard mt-4 p-2">
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 align-self-center ">
                                                    <img src={offer1} alt="offer" className='img-fluid mx-3' />
                                                </div>
                                                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                                    <h5 className='px-3 offerPara'>Get FLAT Rs.350 OFF on orders above Rs 1499</h5>
                                                    <p className='fontMontserrat fw6 px-3  mb-0'>Code : AB54C1</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                <button className='btn bgRed mt-4 text-white fw5' onClick={proceedToBuy}>PROCEED TO CHECKOUT</button>

                <div className="card p-3 mt-4 billSummary">
                  <h4>Bill Summary</h4>
                  <div className='mt-3'>
                    <div className='d-flex justify-content-between'>
                      <p className='fw6'>Cart Value</p>
                      <p className='fw6'>₹{billingData?.cartValue}<s className='strike'>₹{billingData?.orderTotal}</s></p>
                    </div>
                    <div className='d-flex justify-content-between brdCLR'>
                      <p className='fw6'>Delivery charges</p>
                      <p className='fw6'>₹{billingData?.deliveryCharge}</p>
                    </div>
                   
                  </div>
                 
                  <div className='mt-3'>
                    <div className='d-flex justify-content-between'>
                      <p className='fw6' >Amount to be paid</p>
                      <p className='fw6' >₹{billingData?.amountTobePaid}</p>
                    </div>
                    <span className='deivoff'> Order above ₹ 700 for free delivery</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          : <div className="empty-CArt pt-5 pb-5">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-8">
                      <div className="emptyContent">
                          <i><AiOutlineShoppingCart /></i>
                          <h3>No Items in your Cart</h3>
                          <a onClick={() => { navigate("/popularity/?type=category&subtype=all&page=1", { state: { "type": "category", "category": "All category" } }) }}>Continue Shopping</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
}
        </div>
      </section>
      {/* Cart End */}


      {/* Similar Medicine Start */}
      <section className="newArrivalsNew newArrivalRct">
        <div className="container">
          <h1 className="text-center mt-3 fw-bold">New arrivals</h1>
          <Slider {...settings}>
            {arrivalsData.map((item, i) => {
              return (
                <div>
                  <div className="card crd h-100 pstnHelth mx-2" >
                    {/* Like button */}
                    <div className="likeHghtArrivals">
                      <div className="heartRoundArrivals">
                        <i className="healthmedIConsArrivals likdDiv" onClick={() => {
                          wiseList(item);
                        }}>
                          {
                            localStorage.getItem(item._id) == "true" ? < AiFillHeart /> : <AiOutlineHeart />
                          }
                          {/* <AiOutlineHeart /> */}
                        </i>
                      </div>
                    </div>
                    {/* Product Image */}

                    <div onClick={() => { handleRedirect(`/medicine/${item._id}`); }}>
                      <div className="heightProduct" >
                        <img
                          src={item?.imgUrls[0]}
                          alt="thermometer"
                          className="img-fluid d-block mx-auto"
                        />
                      </div>
                      {/* Product Content */}
                      <div class="card-body">
                        <div className="saltCompFnt" >
                          <h6 className="mb-0 fw6">{item?.nameOfMedicine}</h6>
                          <p className="mb-0 rateArrivals">
                            <span className="textRed fw7 mainlRate">
                              ₹ {Date.now() > item?.dealExpiresIn ? item?.priceToCustomer : item?.newPriceToCustomer}
                            </span>{" "}
                            <s>₹ {item?.mrp}</s>
                          </p>
                          <p className='PerPara'>Save upto {item?.discountPercentage} %</p>
                        </div>
                        <div className="btncartHght">
                          <button class="btn bg-warning fw-bold crdBtnArrivals" onClick={() => {
                            addCartFn(item);
                          }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="black"
                              className="bi bi-cart3 mx-2"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          </Slider>
        </div>
      </section>
      {/* Similar Medicine end */}

      {/* Delivery Start */}
      <section className='pb-5'>
        <div class="container">
          {/* <!-- Medicine and Wellness --> */}
          <div class="row justify-content-center rwColorDelivery py-5">
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 d-block mx-auto mt-3 mt-lg-0 mt-md-0 mt-xl-0">
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-3 mx-auto ">
                  <img src={returns} alt="medicine" />
                </div>
                <div class="col-xl-9 col-lg-8 col-md-9 col-sm-8 col-9 align-self-center medConTent">
                  <h4 class="mt-2 mt-lg-0 mt-md-0 mt-xl-0 mb-0 medicineHead">Easy Returns</h4>
                  <p class="text-muted mb-0 medicinePara fontMontserrat">Call us to know more</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt-3 mt-lg-0 mt-md-0 mt-xl-0 ">
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-3">
                  <img src={checkout} alt="wellness" />
                </div>
                <div class="col-xl-9 col-lg-8 col-md-9 col-sm-8 col-9 align-self-center medConTent">
                  <h4 class="mt-2 mt-lg-0 mt-md-0 mt-xl-0 mb-0 medicineHead">Free Delivery</h4>
                  <p class="text-muted mb-0 medicinePara fontMontserrat">Orders Over 700 </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt-3 mt-lg-0 mt-md-4 mt-xl-0" data-aos="fade-up"
              data-aos-duration="1750">
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-3">
                  <img src={delivery} alt="healthblog" />
                </div>
                <div class="col-xl-9 col-lg-8 col-md-9 col-sm-8 col-9 align-self-center medConTent">
                  <h4 class="mt-2 mt-lg-0 mt-md-0 mt-xl-0 mb-0 medicineHead">All Day Support</h4>
                  <p class="text-muted mb-0 medicinePara fontMontserrat">cc@meddtoday.com</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt-3 mt-lg-0 mt-md-4 mt-xl-0" data-aos="fade-up"
              data-aos-duration="2000">
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-3">
                  <img src={support} alt="plan" />
                </div>
                <div class="col-xl-9 col-lg-8 col-md-9 col-sm-8 col-9 align-self-center medConTent">
                  <h4 class="mt-2 mt-lg-0 mt-md-0 mt-xl-0 mb-0 medicineHead">Secure Checkout </h4>
                  <p class="text-muted mb-0 medicinePara fontMontserrat">100% Protected by CC Avenue </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Delivery end */}

      {/* Lichensed Pharmacy Start */}
      {/* <section>
        <div className="container">
          <p className='lichensed fw6'> Your order once received will be verified and processed by a licensed pharmacist. You will be contacted by our representative if there is need of any clarification.  </p>
        </div>
      </section> */}
      {/* Lichensed Pharmacy End */}

      <Modal show={show} onHide={handleClose}>
        <div className="modalCnt">
          <Modal.Header closeButton>
            <Modal.Title>
              <h5 class="modal-title d-block text-center fw7 selectAdd" id="exampleModalLabel">
                Select Address
              </h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <div className="card py-3">
              <div className="row justify-content-center">
                <div className="col-6">
                  <div className="row">
                    <button className="btn newAdd" onClick={handleShowAdd}>Add New Address</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-4">
              <div className="row p-3">
                {addressList && addressList.map((item, i) => {
                  return (
                    <div id={i} onClick={(e) => check(e, item._id)} className={showing.has(item._id) ? "colSix" : null} >
                      <div className="card px-3 py-4 formCard mt-3">
                        <div className="">
                          <h5 className="fw6">{item?.AddressType}</h5>
                          <p className="fw5 text-muted mb-0">{item?.DeliverTo}</p>
                          <p className="fw5 text-muted mb-0">
                            Plot no {item?.HouseNo}, {item?.StreetName} - {item?.PinCode}
                          </p>
                          <p className="fw5 text-muted mb-0">{item?.MobileNo}</p>
                        </div>
                        <div className="d-flex bgRed trashEdit p-1">
                          <a className="brdrTrash" onClick={() => { editIconFn(item) }} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-2 bi bi-pencil-square text-white" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </a>
                          <a className="text-dark" onClick={() => { deleteAdrFn(item) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-2 bi bi-trash text-white" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      {/* <div className="d-flex justify-content-center">
                      <div className="bgLightRose p-1 brdrBtm">
                        <label for="checkboxNoLabel" className="fw6">
                          Select
                        </label>
                        <input className="form-check-input mx-2"type="checkbox"id="checkboxNoLabel"value=""aria-label="..."/>                      
                      </div>
                    </div> */}
                    </div>
                  )
                })}
                {/*                   
                  <div className="col-sm-6 mt-4 mt-sm-0">
                    <div className="card px-3 py-4 formCard">
                      <div className="">
                        <h5 className="fw6">Office</h5>
                        <p className="fw5 text-muted mb-0">G.Sathish Kumar</p>
                        <p className="fw5 text-muted mb-0">
                          Plot no 10 , kK Nagar , 2nd layout , Adam street ,
                          kajamalai, Chennai - 689236
                        </p>
                        <p className="fw5 text-muted mb-0">9876543210</p>
                      </div>
                      <div className="d-flex bgRed trashEdit p-1">
                        <a className="brdrTrash">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="mx-2 bi bi-pencil-square text-white"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </a>
                        <a className="text-dark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="mx-2 bi bi-trash text-white"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="bgGray p-1 brdrBtm">
                        <label for="checkboxNoLabel2" className="fw6">
                          Select
                        </label>
                        <input
                          className="form-check-input mx-2"
                          type="checkbox"
                          id="checkboxNoLabel2"
                          value=""
                          aria-label="..."
                        />
                      </div>
                    </div>
                  </div> */}

              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div class=" d-block mx-auto mb-3">
              <button type="button" class="btn bgRed fw5 text-white" onClick={makeUsDefaultAddFn}>
                Continue
              </button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>

      {/* Add Address */}

      <Modal show={showAdd} onHide={handleCloseAdd} className="modalReact">
        <div className="modalCnt ">
          <Modal.Header closeButton>
            <Modal.Title>
              <h5 class="modal-title fw7" id="exampleModalLabel">
                Add Address
              </h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card p-3">
              <form key={1} onSubmit={handleSubmit2(addNewFn)}>

                <div className="row">

                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-md-4 align-self-center">
                        <p className="text-muted fw5">Name</p>
                      </div>
                      <div className="col-md-8">
                        <div class="mb-3">
                          <input
                            type="text"
                            name="DeliverTo"
                            class="form-control"
                            id="exampleInputName"
                            {...register2("DeliverTo")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-md-4 align-self-center">
                        <p className="text-muted fw5 mx-2">MobileNo</p>
                      </div>
                      <div className="col-md-8">
                        <div class="mb-3">
                          <input
                            type="text"
                            name="MobileNo"
                            class="form-control"
                            id="exampleInputNumber"
                            {...register2("MobileNo")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="row">

                      <div className="col-md-4">
                        <p className="fw5 text-muted">Pincode</p>
                      </div>
                      <div className="col-md-8">

                        <div class="mb-3">
                          <input
                            type="text"
                            name="PinCode"
                            class="form-control"
                            id="exampleInputName"
                            {...register2("PinCode")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-md-4 align-self-center">
                        <p className="text-muted fw5 mx-2">House No</p>
                      </div>
                      <div className="col-md-8">
                        <div class="mb-3">
                          <input
                            type="text"
                            name="HouseNo"
                            class="form-control"
                            id="exampleInputName"
                            {...register2("HouseNo")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-2">
                        <p className="text-muted fw5">Address</p>
                      </div>
                      <div className="col-md-10">
                        <div class="mb-3">
                          <input
                            type="text"
                            name="StreetName"
                            class="form-control"
                            id="exampleInputNumber"
                            {...register2("StreetName")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-4 col-md-2">
                    <span className='btn addressBtnAdd fw5' onClick={() => { setaddressType("Home") }}>Home</span>
                  </div>
                  <div className="col-4 col-md-2">
                    <span className='btn addressBtnAdd fw5 ' onClick={() => { setaddressType("Office") }}>Office</span>
                  </div>
                  <div className="col-4 col-md-2">
                    <span className='btn addressBtnAdd fw5 ' onClick={() => { setaddressType("Others") }} >Others</span>
                  </div>
                </div>

                <button type="submit" class=" d-block mx-auto mb-3 btn bgRed fw5 text-white mt-4" >
                  Save and Continue
                </button>


              </form>
            </div>
          </Modal.Body>

        </div>
      </Modal>

      {/* Edit Address */}

      <Modal show={showEdt} onHide={handleCloseEdt} className="modalReact">
        <div className="modalCnt ">
          <Modal.Header closeButton>
            <Modal.Title>
              <h5 class="modal-title fw7" id="exampleModalLabel">
                Edit Address
              </h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card p-3">
              <form key={1} onSubmit={handleSubmit3(editOldAdd)} className='cartAddress'>

                <div className="row">

                  <div className="col-sm-6">
                    <div className="row ">
                      <div className="col-md-4 align-self-center">
                        <p className="text-muted fw5">Deliver to</p>
                      </div>
                      <div className="col-md-8">
                        <div class="mb-3">
                          <input
                            type="text"
                            name="DeliverTo"
                            class="form-control"
                            id="exampleInputName"
                            {...register3("DeliverTo")}
                            placeholder={deliverToSt}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-md-4 align-self-center">
                        <p className="text-muted fw5 mx-2">Mobile to</p>
                      </div>
                      <div className="col-md-8">
                        <div class="mb-3">
                          <input
                            type="text"
                            name="MobileNo"
                            class="form-control"
                            id="exampleInputNumber"
                            {...register3("MobileNo")}
                            placeholder={mobileNumberSt}
                          />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-md-4">
                        <p className="fw5 text-muted">Pincode</p>
                      </div>
                      <div className="col-md-8">
                        <div class="mb-3">
                          <input
                            type="text"
                            name="PinCode"
                            class="form-control"
                            id="exampleInputName"
                            {...register3("PinCode")}
                            placeholder={pincodeSt}
                          />
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-md-4 align-self-center">
                        <p className="text-muted fw5 mx-2">House to</p>
                      </div>
                      <div className="col-md-8">
                        <div class="mb-3">
                          <input
                            type="text"
                            name="HouseNo"
                            class="form-control"
                            id="exampleInputName"
                            {...register3("HouseNo")}
                            placeholder={houseToSt}

                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-2">
                        <p className="text-muted fw5">Street name</p>
                      </div>
                      <div className="col-md-10">
                        <div class="mb-3">
                          <input
                            type="text"
                            name="StreetName"
                            class="form-control"
                            id="exampleInputNumber"
                            {...register3("StreetName")}
                            placeholder={streetNameoSt}

                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-4 col-md-2">
                    <span className='btn addressBtnAdd fw5' onClick={() => { setaddressType("Home") }}>Home</span>
                  </div>
                  <div className="col-4 col-md-2">
                    <span className='btn addressBtnAdd fw5 ' onClick={() => { setaddressType("Office") }}>Office</span>
                  </div>
                  <div className="col-4 col-md-2">
                    <span className='btn addressBtnAdd fw5 ' onClick={() => { setaddressType("Others") }}>Others</span>
                  </div>
                </div>

                <button type="submit" class=" d-block mx-auto mb-3 btn bgRed fw5 text-white mt-4">
                  Save and Continue
                </button>


              </form>
            </div>
          </Modal.Body>

        </div>
      </Modal>

    </div>
  )
}

export default Cart
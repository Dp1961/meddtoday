import React, { useState, useEffect } from 'react'
import './prescription.css'
import upLoadImg from '../../assets/images/upLoadImg.png'
import prescription from '../../assets/images/prescription.jpeg'
import author2 from "../../assets/images/author2.png"
import rx from "../../assets/images/rx.png"
import medications from "../../assets/images/medications.png"
import get from "../../assets/images/get.png"
import upLoad from "../../assets/images/upLoad.png"
import withstar from "../../assets/images/withstar.png"
import withoutStar from "../../assets/images/withoutStar.png"
import leftbgWhite from "../../assets/images/leftbgWhite.png"
import rightbgwhite from "../../assets/images/rightbgwhite.png"
import returns from "../../assets/images/returns.png"
import checkout from "../../assets/images/checkout.png"
import delivery from "../../assets/images/delivery.png"
import support from "../../assets/images/support.png"
import mob from "../../assets/images/meddmobilee.png"
import { HiLocationMarker } from 'react-icons/hi'
import playstore from "../../assets/images/playstore.png"
import apple from "../../assets/images/apple.png"
import dd from "../../assets/images/dd.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import coming from '../../assets/images/coming.svg';
import { uploadPresCb, getCustomerDatacb, delPrescriptionCb } from "../../redux/customerApi"
import { useDispatch, useSelector } from 'react-redux';
import { loader } from "../../redux/common";
import { toast } from "react-toastify"
import { placePriCb } from "../../redux/cart"
import { useNavigate } from "react-router-dom";
import onLine from "../../assets/images/onLine.png";
import { getAddressListcb, addNewArsCb, delAddressCb, editAddressCb, makeAsDefaultAddrCb, addRmvFavCb } from "../../redux/customerApi";
import uploadPresImg from '../../assets/images/uploadPresImg.png'
import { useForm } from "react-hook-form";
function Prescription() {

    var reView = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
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
                    arrows: false,
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
                breakpoint: 575,
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
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [addressDetails, setAddressDetails] = useState([]);
    const [showing, setShowing] = useState(new Set());
    const [addressList, setAddressList] = useState([]);
    const [makeAsDefault, setMakeAsDefault] = useState("");
    const [deliverToSt, setDeliverToSt] = useState("");
  const [mobileNumberSt, setMobileNumberSt] = useState("");
  const [pincodeSt, setPincodeSt] = useState("");
  const [houseToSt, setHouseToSt] = useState("");
  const [streetNameoSt, setStreetNameoSt] = useState("");
  const [editAddIdSt, setEditAddIdSt] = useState("");
  const handleShowEdt = () => setShowEdt(true);
  const [addressType, setaddressType] = useState("Home");

  const [showEdt, setShowEdt] = useState(false);
  const handleCloseEdt = () => setShowEdt(false);

  const { register: register2, formState: { errors: errors2 }, reset, handleSubmit: handleSubmit2, } = useForm({ mode: "onBlur" });
  const { register: register3, formState: { errors: errors3 }, reset3, handleSubmit: handleSubmit3, } = useForm({ mode: "onBlur" });



    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const [formData, setFormData] = useState();

    const [enable, setEnable] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState([]);
    const [customerData, setCustomerData] = useState([]);
    const [flag, setFlag] = useState(true);
    const [selectPres, setSelectPres] = useState([]);
    const [prescriptionChecker, setPrescriptionChecker] = useState(false);
    let prescriptionRef = React.useRef();

    const changeGate = () => {
        setPrescriptionChecker(prescriptionRef.current.checked)
    }

    // useEffect(() => {
    //     dispatch(loader(true));
    //     dispatch(getCustomerDatacb((res) => {
    //         console.log(res, "dispatch")
    //         dispatch(loader(false));
    //         if (res.status) {
    //             setCustomerData(res.data.presImg)
    //         } else {
    //             toast.error(res.message)
    //         }
    //     }))
    // }, [flag]);
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

    const presUploadFn = (e) => {
        var reqBody = {
            "file": e,

        };
        dispatch(loader(true));
        dispatch(uploadPresCb(reqBody, (resp) => {
            dispatch(loader(false));
            if (resp.status) {

                setImageUrl((preVal) => [...preVal, { "url": resp.data.url }]);
                setSelectPres([...selectPres, resp.data._id])
                setFlag(!flag)
                toast.success("Prescription uploaded successfully.Please proceed to checkout");
                setPrescriptionChecker(true);
            } else {
                toast.error(resp.message)
                setPrescriptionChecker(false);
            }
        }))
    }
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

      
    const proceedFn = () => {
        if (selectPres.length == 0) {
            toast.error("please select or upload prescription")
        } else {
            var data = {
                "presId": selectPres
            }
            console.log(data, "presid")
            dispatch(loader(true));
            dispatch(placePriCb(data, (res) => {
                dispatch(loader(false));
                if (res.status) {
                    navigate("/");
                    setImageUrl([]);
                    setSelectPres([])
                    toast.success(res.message);
                } else {
                    toast.error(res.message)
                }
            }))
        }
    }

    const removePres = (e) => {
        console.log(e, "eeee")
        var data = {
            "prscId": e._id
        }

        dispatch(delPrescriptionCb(data, (res) => {
            if (res.status) {
                setFlag(!flag)
            } else {
                toast.error(res.message)
            }
            console.log("remove,res", res)
        }))
    }
    return (
        <div>
            {/* Home and Medicine Start */}
            <div className='pt-0'>
                <div className="container bgLightYellow">
                    <div className='d-md-flex justify-content-between px-md-4 py-3'>
                        <div className='d-flex'>
                            <a className='text-decoration-none text-dark'><p className='fw6 results  mb-0'>Upload image of your prescription </p></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Home and Medicine end */}

            {/* Upload Button Start */}
            <div>
                <div className="container">
                    <div className="row my-3">
                        <div className="col-xl-8 col-lg-7 col-md-12">
                            <div className="row uploadBg">
                                <div className='bgGray d-sm-flex justify-content-between p-2  mb-4'>
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

                                <div className="col-sm-4 uploadPrecriptionCustom" onClick={() => { setEnable(1) }} >
                                    <div className="card p-2 cardPrescptn">
                                        <div className='d-flex justify-content-between'>
                                            <p className='fw6 align-self-center uploadText'>Click to Upload</p>

                                            <label for="file-upload" className="custom-file-upload ">
                                                <img src={upLoadImg} alt="" className='img-fluid crdPointer' />
                                            </label>

                                            <input id="file-upload" type="file" className='fileUpload' onChange={(e) => { setFormData(e.target.files[0]); presUploadFn(e.target.files[0]) }} />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-sm-4 mt-sm-0 uploadPrecriptionCustom ppnSpc" onClick={() => { setEnable(2) }}>
                                    <div className="card p-2 cardPrescptn">
                                        <div className='d-flex justify-content-between'>
                                            <p className='fw6 align-self-center uploadText'>Uploaded prescription</p>

                                            <label for="file-upload" className="custom-file-upload ">
                                            <img src={upLoadImg} alt="" className='img-fluid crdPointer' />
                                            </label>

                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-sm-4 mt-sm-0 uploadPrecriptionCustom ppnSpc" onClick={handleShow}>
                                    <div className="card p-2 cardPrescptn">
                                        <div className='d-flex justify-content-between'>
                                            <p className='fw6 align-self-center uploadText'>Prescriptions from Meddtoday</p>


                                            <img src={dd} alt="" className='img-fluid crdPointerdd ' />


                                        </div>
                                    </div>
                                </div> */}
                                <p className='fw6 mt-3'>
                                    <li>A licensed pharmacist will evaluate your prescription and reach out to you in case of any queries.s</li>
                                </p>
                            </div>
                            {/* Prescriptions uploaded by you */}

                            {enable == 0 ?
                                null
                                : enable == 1 ?
                                    <div>
                                        <h5 className='fw6'> Uploaded Prescriptions for this order</h5>
                                        <div className="row uploadBg my-4">

                                            {imageUrl.map((item, i) => {

                                                console.log(imageUrl, "imageUrl", item, "item", i, "i")
                                                return (
                                                    <div className="col-md-3 mt-4">
                                                        <div class="card presimageHeight d-none">
                                                            <img src={item?.url} alt="prescription" className='img-fluid' />
                                                        </div>
                                                        <div className="prescriptionDiv h-100">
                                                            <div className="imgUploadDiv">
                                                                <img
                                                                    src={item?.url}
                                                                    alt="prescription"
                                                                    className="img-fluid py-2"
                                                                // onClick={() => {
                                                                //     setImageUrl(null);
                                                                // }}
                                                                />
                                                            </div>

                                                            <p className="fw6 text-center mb-0">Uploaded</p>
                                                        </div>

                                                    </div>

                                                )
                                            })

                                            }
                                        </div>


                                    </div>
                                    : enable == 2 ?
                                        <div>
                                            <h5 className='fw6'>Prescriptions uploaded by you</h5>
                                            <div className="row uploadBg my-4">

                                                {customerData.map((data, i) => {
                                                    return (
                                                        <div className="col-md-3 mt-4 ">
                                                            <div class="card presimageHeight h-100 presimageClick ">
                                                                <div className="upLoadedImage">
                                                                    <img src={data?.url} alt="prescription" className='img-fluid ' onClick={() => { setSelectPres([...selectPres, data._id]) }} />
                                                                </div>
                                                                <div class="card-body d-flex justify-content-between" onClick={() => { removePres(data) }}>
                                                                    <p className='mb-0 fw5'>Remove</p>
                                                                    <a className='text-dark'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash mx-1" viewBox="0 0 16 16">
                                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                        </svg>
                                                                    </a>

                                                                </div>
                                                            </div>


                                                        </div>
                                                    )
                                                })}

                                            </div>
                                        </div>
                                        :
                                        null}

                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-12 dntHvePrescption">
                            {
                                prescriptionChecker ? <button className='btn bgRed w-100 text-uppercase fw5 text-white' onClick={proceedFn}>PROCEED TO CHECKOUT</button> : <button className='btn bgRed w-100 text-uppercase fw5 text-white disabled' onClick={proceedFn}>PROCEED TO CHECKOUT</button>
                            }
                            {/* Dont have a Prescription */}
                            <div className="card CAPREscr mt-4 p-3">
                                <div className='d-flex'>
                                    <div>
                                        <img src={author2} alt="" className='img-fluid' />
                                    </div>
                                    <div className='align-self-center mx-2'>
                                        <p className='fw6 dntHave'>Don’t have a prescription?</p>
                                    </div>
                                </div>
                                {/* Click Label Card */}
                                <div className="card mt-4">
                                    <div className='d-flex px-3'>
                                        <input className="form-check-input align-self-center inp" type="checkbox" id="Abide" value="" aria-label="..." ref={prescriptionRef} onChange={() => changeGate()} />
                                        <label for="Abide" className='py-2 fw6 mx-3 freeConsult'>Get a free consultation from a qualified 3rd Party doctor </label>
                                    </div>
                                </div>
                                {/* Receive Call */}
                                <div className='mt-4'>
                                    <p className='mb-0 fw5'>You will receive call by</p>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h4 className='fw6'>
                                                2:13 PM Today
                                            </h4>
                                        </div>
                                        <div className='d-flex'>
                                            <s className='fw6 mt-1'>₹499</s>
                                            <p className='bgYellow p-1 mx-2 fw6'>FREE</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Continue Button */}
                                {/* <button className='btn bgRed fw5 text-white py-2 w-auto mx-auto WiDTH' onClick={handleShow}>Continue</button> */}
                                {/* What is a valid prescription? */}

                            </div>
                            <div className="card mt-4 py-2 dataPrescription">
                                <div className='d-flex justify-content-center rxImg px-3 w-auto mx-auto'>
                                    <img src={rx} alt="" className='img-fluid ' />
                                    <p className='fw6 prescription align-self-center mt-3 px-2 crsrpntr text-nowrap' onClick={handleShow1}>What is a valid prescription?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Upload Button End */}

            {/* Passes Online Payments start*/}
            <section className=''>
                <div className="container">
                    <div className="row">
                        {/* UpLoad */}
                        <div className="col-md-4 col-sm-4 text-center">
                            <div className='medicineWidth'>
                                <img src={upLoad} alt="upload" className='img-fluid getaMedicine ' />
                            </div>
                            <p className='mt-4 uploadText'>Upload Prescription </p>
                        </div>
                        {/* Online */}
                        <div className="col-md-4 col-sm-4 text-center">
                            <div className='medicineWidth'>
                                <img src={onLine} alt="upload" className='img-fluid mt-3 getaMedicine' />
                            </div>
                            <p className='mt-4 uploadText'>Make on online Payments</p>
                        </div>
                        {/* Online */}
                        <div className="col-md-4 col-sm-4 text-center">
                            <div className='medicineWidth'>
                                <img src={medications} alt="upload" className='img-fluid mt-3 getaMedicine' />
                            </div>
                            <p className='mt-4 uploadText'>Get Timely Delivery</p>
                        </div>
                    </div>
                    {/* Get */}

                </div>
            </section>
            {/* Passes online Payments end */}

            {/* Latest Reviews start */}
            {/* <section className="review heathSuppleRct">
                <div className="container">
                    <h1 className="text-center fw-bold">Latest reviews</h1>
                    <Slider {...reView}>
                        <div>
                            <div className="card px-3 py-3 mx-2">
                                <p className="fontMontserrat mb-0">
                                    Everything is perfect. I would recommend!
                                </p>

                                <div>
                                    <p className="mb-0 blogName">John D</p>
                                    <div className="d-flex mt-2">
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img
                                                src={withoutStar}
                                                alt="start"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card px-3 py-3 mx-2">
                                <p className="fontMontserrat mb-0">
                                    Everything is perfect. I would recommend!
                                </p>

                                <div>
                                    <p className="mb-0 blogName">John D</p>
                                    <div className="d-flex mt-2">
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img
                                                src={withoutStar}
                                                alt="start"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card px-3 py-3 mx-2">
                                <p className="fontMontserrat mb-0">
                                    Everything is perfect. I would recommend!
                                </p>

                                <div>
                                    <p className="mb-0 blogName">John D</p>
                                    <div className="d-flex mt-2">
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img
                                                src={withoutStar}
                                                alt="start"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card px-3 py-3 mx-2">
                                <p className="fontMontserrat mb-0">
                                    Everything is perfect. I would recommend!
                                </p>

                                <div>
                                    <p className="mb-0 blogName">John D</p>
                                    <div className="d-flex mt-2">
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img
                                                src={withoutStar}
                                                alt="start"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card px-3 py-3 mx-2">
                                <p className="fontMontserrat mb-0">
                                    Everything is perfect. I would recommend!
                                </p>

                                <div>
                                    <p className="mb-0 blogName">John D</p>
                                    <div className="d-flex mt-2">
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img src={withstar} alt="start" className="img-fluid" />
                                        </a>
                                        <a>
                                            <img
                                                src={withoutStar}
                                                alt="start"
                                                className="img-fluid"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section> */}
            {/* Latest Reviews end */}

            {/* Delivery Start */}
            <section className=''>
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
                                    <p class="text-muted mb-0 medicinePara fontMontserrat">Orders Over 700</p>
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

            {/* Simplifying Healthcare Impacting Lives Start */}
            <section className='healthcareImpact '>
                <div className="container">
                    {/* <div className="col-md-4">
                        <img src={mob} alt="mob" className='img-fluid' />
                    </div> */}
                    <div className="row">
                        <div className="col-md-5">
                            <img src={mob} alt="mob" className='img-fluid mobHght' />
                        </div>
                        <div className="col-md-7 align-self-center col7Health">
                            <div className='simplifyWrapCon'>
                                <h3 className='fw5 hlthImpctFnt fw7 text-center text-md-start'>Simplifying Healthcare </h3>
                                <h3 className='fw5 hlthImpctFnt text-center text-md-start'>Impacting Lives</h3>
                                <p className='fontMontserrat fw5 txtAlign'>We are committed in making high quality super speciality medicines affordable and accessible to everyone who is in need.</p>
                                <div className='playStorApple'>
                                    {/* <a ><img src={playstore} alt="img-fluid" className='socialMedia' /></a>
                                    <a className='mx-2'><img src={apple} alt="img-fluid" className='socialMedia' /></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Simplifying Healthcare Impacting Lives end */}







            {/* Blog Content Start */}

            <section className='pt-0 pb-5 blogConTent delivery'>

                <div className="container">

                    <h5 className='fw7 txtAlign'>Welcome to Meddtoday! India’s fast growing Super Speciality Online Pharmacy! </h5>

                    <p className='txtAlign text-muted fw5'> Grand Care Health Technologies is an innovative health tech start up focusing on making healthcare affordable and accessible to every Indian. With a strong belief in ethics and transparency in our everyday practices launched www.meddtoday.com a house of super speciality medicines. Our founders have rich experience in the field of health care and understand the burden of high medicines cost on families where someone suffers from a chronic or terminal illness.  </p>

                    <p className='txtAlign text-muted fw5'>Our primary focus is to bring even rarest of rarest medicines make it available for anyone who might be in need and make it easier in your monthly health care budget. We are committed in bringing all super speciality medicines at your doorstep with highest discounts available. While we emphasize on offering user’s maximum discounts our highest standards ensure the products, we source are of best quality, authentic and delivered to you in the best form. </p>

                    <p className='txtAlign text-muted fw5'>Ordering medicines online at Meddtoday.com is just a simple 4 step process. Browse through our wide range of health care products, add them to your cart, uploading your prescription (if required) and proceed to check out! To further simplify the ordering process, we have launched “Order with prescription” option where you can just upload the prescription and our team will get in touch with you to process the order and safely deliver it to you.  </p>







                    <h5 className='fw7'>Diagnostics & Instruments </h5>

                    <p className='txtAlign text-muted fw5'>

                        With the arrival of covid every Indian household is particularly aware about personal hygiene, immunity and maintaining a healthy life. There is no home which does not have basic instruments like thermometer. With increase in high number low quality devices and laboratories with poorly maintained standard it is our responsibility to bring devices of highest quality and diagnostic tests which follow best protocols. Hence, we have associated with some best of brands which offer varied services to make our user’s life merrier.                                                                               </p>

                    <h5 className='fw7'>Why Choose Meddtoday </h5>

                    <p className='txtAlign text-muted fw5'>With www.meddtoday.com you can be rest assured that you are getting the best of services, it’s a home-grown startup and put the interest of fellow Indians first. Our 4-step quality assurance check gets you the right products at right state. Our cold chain process is best in the industry and all the vendors we associate with shortlisted after thorough analysis of their internal hygiene process so that our users always get the best.  </p>

                </div>

            </section>

            {/* Blog Content end */}

            {/* <Modal show={show1} onHide={handleClose1} className="comingSoon">
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='commingSoon'>
                        <img src={coming} alt="coming" className="img-fluid" />
                    </div>
                    <h4 className="text-center fw6 mt-5">Coming Soon</h4></Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal> */}

            {/* Upload Prescription Modal */}
            <Modal show={show1} onHide={handleClose1} className='uploadPresImg'>
                <Modal.Header closeButton>
                    <Modal.Title className='fw6'>Upload Your Prescritpion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <img src={uploadPresImg} alt="prescription" className='img-fluid' />
                    </div>
                </Modal.Body>

            </Modal>

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
                     
                    </div>
                  )
                })}
                
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


        </div >
    )
}

export default Prescription
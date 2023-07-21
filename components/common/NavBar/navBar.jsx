import React, { useState, useEffect } from 'react'
import './navBar.css'
import axios from "axios"

import logo from "../../../assets/images/logo.png"
import needhelp from "../../../assets/images/needhelp.png"
import mobile from "../../../assets/images/mobile.png"
import like from "../../../assets/images/like.png"
import cart from "../../../assets/images/cart.png"
import account from "../../../assets/images/account.png"
import one from "../../../assets/images/one.png"
import three from "../../../assets/images/three.png"
import hamburger from '../../../assets/images/hamburger.svg'
import LoginIcon from '@mui/icons-material/Login';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useNavigate, createSearchParams } from "react-router-dom";
import { FaMobileAlt } from 'react-icons/fa'
import { MdLogin } from 'react-icons/md'
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from 'react-redux';
import { isLogin, loader, navFlag } from "../../../redux/common";
import { sendOtpcb, verifyOtpcb, sendRegiOtpcb, verifyregOtpcb } from "../../../redux/customerApi"
import { useForm } from "react-hook-form";
import { toast } from "react-toastify"
import Countdown from 'react-countdown';
import OtpInput from 'react-otp-input';
import { FiLogIn } from 'react-icons/fi'
// import { FaMobileAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getCartListCb } from "../../../redux/cart";
import { cusFavLstCb } from "../../../redux/customerApi";


function NavBar(props, args) {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [modal2, setModal2] = useState(false);
    const toggle2 = () => setModal2(!modal2);

    const [loginId, setloginId] = useState("");
    const [otp, setOtp] = useState('');
    const [verify, setVerify] = useState();

    const [regVerify, setRegVerify] = useState();

    let [resetter, setResetter] = useState(true)
    const [otpReg, setOtpReg] = useState('');

    const [cartLength, setCartLength] = useState();
    const [favLength, setFavLength] = useState();


    const [loginType, setLoginType] = useState(false);
    const [resendOtp, setResendOtp] = useState(false);



    const [timer, setTimer] = useState(0);

    const [flag, setFlag] = useState(false);

    const [showPopup, setShowPopup] = useState(false);

    const togglenew = () => {
        setShowPopup(!showPopup);
    };



    const { register: register2, formState: { errors: errors2 }, reset, handleSubmit: handleSubmit2, } = useForm({ mode: "onBlur" });
    const { register: register3, formState: { errors: errors3 }, reset3, handleSubmit: handleSubmit3, } = useForm({ mode: "onBlur" });

    //   Nested Modal
    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false);

    const toggleNested = () => {
        setNestedModal(!nestedModal);
        setCloseAll(false);
    };
    const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
    };


    // console.log('Regiformdata',Regiformdata);

    // useEffect(()=>{
    //     if(localStorage.getItem("isLogin") == null || localStorage.getItem("isLogin") == false ){
    //       dispatch(navFlag(false));
    //     }else{
    //       dispatch(isLogin(true));
    //     }
    //   },[])
    const isLoginStatus = useSelector(state => state.apiReducer.isLogin);

    const { favoriteProductsBadgeValue } = useSelector(state => state.backupReducer);
    const { addedProductIncartCount } = useSelector(state => state.backupReducer);
    let { favoriteProductIdObject } = useSelector(state => state.backupReducer);

    function clearAll() {
        debugger
        for (let i = 0; i < favoriteProductIdObject.length; i++) {
            localStorage.removeItem(favoriteProductIdObject[i]._id);
        }
        localStorage.clear();
        setResetter(!resetter);

        navigate("/");
        dispatch(isLogin(false));
    }


    useEffect(() => {

        if (localStorage.getItem("isLogin") == null || localStorage.getItem("isLogin") == false) {

            dispatch(isLogin(false));
            // setLoginStatus (false)

        } else {

            dispatch(isLogin(true));
            //  setLoginStatus(true);

            dispatch(loader(true));
            dispatch(getCartListCb((resp) => {
                dispatch(loader(false))
                if (resp.status) {
                    if (resp.data != undefined) {
                        setCartLength(resp.data.length)
                    }
                } else {
                    toast.error(resp.message);
                }
            }));

            dispatch(cusFavLstCb((res) => {
                dispatch(loader(false))
                if (res.status) {
                    setFavLength(res.data.length)
                } else {
                    toast.error(res.message)
                }
            }))
        }
        setFavLength(favoriteProductsBadgeValue);
        setCartLength(addedProductIncartCount)

    }, [flag, favoriteProductsBadgeValue, addedProductIncartCount])

    const sendOtpFn = (data) => {
        // console.log(data, "data")
        //toggleNested();
        dispatch(loader(true));
        var reqBody;
        var apiUrl;
        if (loginType) {
            setloginId(data.mobileNumber);
            setVerify({ "MobileNumber": data.mobileNumber })
            reqBody = { "MobileNumber": data.mobileNumber, loginType: loginType };
            apiUrl = "customer/sendOtpToMobile";

        } else {
            setloginId(data.emailId);
            setVerify({ "Email": data.emailId });
            apiUrl = "customer/sendOtpToEmail";
            reqBody = { "Email": data.emailId, loginType: loginType };
        }

        dispatch(sendOtpcb(reqBody, apiUrl, (resp) => {
            if (resp.status) {
                toast.success("please enter the OTP");
                dispatch(loader(false));
                reset();
                toggleNested();
                setTimer(Date.now() + 60000)
                setTimeout(() => {
                    setResendOtp(true);
                }, 60000);

            } else {
                toast.error(resp.message);
                dispatch(loader(false));
            }

        }))

    }
    const sendRegiOtpFn = (data) => {
        // console.log(data, "data")
        //toggleNested();
        dispatch(loader(true));
        // var reqBody = Regiformdata;
        var apiUrl = "customer/regForm";
        data["MobileNumber"] = parseInt(data.MobileNumber)
        setRegVerify(data)
        dispatch(sendRegiOtpcb(data, apiUrl, (resp) => {
            if (resp.status) {

                toast.success(resp.message);
                dispatch(loader(false));
                reset();
                toggleNested();
                setTimer(Date.now() + 60000)


            } else {
                toast.error(resp.message);
                dispatch(loader(false));
            }

        }))

    }

    //signin otp verify
    const verifyOtp = () => {
        if (otp == '') {
            toast.error("Please enter otp");
        } else {
            var reqData = verify;
            reqData["OTP"] = otp;
            // console.log(reqData, "reqData");
            setOtp("");
            dispatch(verifyOtpcb(reqData, (resp) => {
                // console.log(resp, "respppp")
                if (resp.status) {
                    localStorage.setItem("oAuth", "Bearer " + resp.origin);
                    localStorage.setItem("isLogin", true);
                    toast.success(resp.message);
                    setFlag(!flag);
                    dispatch(isLogin(true));
                    dispatch(loader(false));
                    reset();
                    setOtp("");
                    toggleAll();
                } else {
                    toast.error(resp.message);
                    dispatch(loader(false));
                }
            }))
        }
    }

    ///signup otp verify
    const verifyregOtp = () => {
        if (otpReg == '') {
            toast.error("Please enter otp");
        } else {
            var data = regVerify;
            data["OTP"] = otpReg;
            // console.log(data, "reqData");
            setOtpReg("");
            dispatch(verifyregOtpcb(data, (resp) => {
                // console.log(resp, "respppp")
                if (resp.status) {
                    toast.success("Account register successfully");

                    toggleAll();
                } else {
                    toast.error(resp.message);
                    dispatch(loader(false));
                }
            }))
        }
    }
    // /customer/verifyOtpAndLogin

    const onError = (data) => {
        // console.log(data);
    };

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span>0</span>;
        } else {
            // Render a countdown
            return <span>{seconds}</span>;
        }
    };
    const handleRedirect = (url) => {
        navigate(url);
        window.scrollTo(0, 0);
    };

    return (
        <div className='mainNav'>
            <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-none d-xl-block d-xxl-block">
                <div className="container">
                    <span className="logoSize" >
                        <img src={logo} alt="logo" class="img-fluid logo poinTer" onClick={() => { navigate("/") }} />
                    </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-lg-flex ms-auto">
                            <h6 className='fw mt-3 align-self-md-center poinTer' >Toll Free : <Link to="tel:18008909345" >1800 8909 345 </Link></h6>
                            <div>
                                <button className="btn bgYellow fw-bold mx-lg-2 dwnLoadTop"> <span className='dwnLoadText'><FaMobileAlt /> App Launching soon </span></button>
                            </div>
                            <div className='mx-lg-2 d-flex mt-3 mt-md-3 mt-lg-0 align-self-center'>
                                {
                                    !isLoginStatus ?

                                        <button className="btn bgYellow fw-bold  mx-lg-2 "
                                            onClick={() => { setModal(true) }}> <span className='signApp'><FiLogIn /> Login/Signup</span ></button>
                                        :
                                        <>
                                            <div className='buyGet poinTer' onClick={() => { navigate("/wishlist") }}>
                                                <a ><img src={like} alt="man" className="img-fluid acuntWidth" /></a>
                                                <a > <span class="notivOne  badge rounded-pill bgRed">
                                                    {favLength}<span class="visually-hidden">unread messages</span>
                                                </span>
                                                </a>
                                            </div>
                                            <div className='buyGet mx-2 poinTer' onClick={() => { navigate("/cart") }}>
                                                <a ><img src={cart} alt="man" className="img-fluid acuntWidth" /></a>
                                                <a > <span class="notivOne  badge rounded-pill bgRed">
                                                    {cartLength}<span class="visually-hidden">unread messages</span>
                                                </span>
                                                </a>

                                            </div>
                                            <div >
                                                {/* <a ><img src={account} alt="man" class="img-fluid acuntWidth" />
                                                </a> */}
                                                <li class="nav-item dropdown ">
                                                    <a class="nav-profile" href="#" data-bs-toggle="dropdown">
                                                        <img src={account} alt="Profile" class="rounded-circle acuntWidth" />
                                                    </a>

                                                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile profileTab">
                                                        <li className="p-0 " onClick={() => { navigate("/profile/address") }}>
                                                            <a class="dropdown-item d-flex align-items-center" >
                                                                <i class="bi bi-person"></i>
                                                                <span className="fw6">Profile</span>
                                                            </a>
                                                        </li>
                                                        <li className="p-0">
                                                            <hr class="dropdown-divider" />
                                                        </li>
                                                        <li className="p-0" onClick={() => clearAll()}>
                                                            <a class="dropdown-item d-flex align-items-center">
                                                                <i class="bi bi-box-arrow-right"></i>
                                                                <span className="fw6">Sign Out</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </div>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <div className="container-fluid p-0"></div> */}
            <div className=" p-0 d-md-none d-none d-lg-none d-xl-block d-xxl-block">
                <ul className='d-lg-flex justify-content-center list-unstyled parent mb-0'>
                    <li className='text-decoration-none text-white ' >
                        <li className="text-decoration-none text-white brdrRht">
                            <Dropdown className="dropDwn">
                                <Dropdown.Toggle id="dropdown-basic">Medicine</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => { navigate("/popularity/category/all/1", { state: { "type": "category", "category": "All category" } }) }} >
                                        All category</Dropdown.Item>
                                    <Dropdown.Item onClick={() => { navigate("/popularity/category/allSpeciality/1", { state: { "type": "category", "category": "All Speciality" } }) }}>Speciality</Dropdown.Item>
                                    <Dropdown.Item onClick={() => { navigate("/popularity/category/allProducts/1", { state: { "type": "category", "category": "All Products" } }) }}>Products</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                       


                    </li>
                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Anti_Cancer/1", { state: { "type": "category", "category": "Anti-Cancer" } }) }} data-bs-dismiss="offcanvas" aria-label="Close">Anti-Cancer</li>

                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Transplant/1", { state: { "type": "category", "category": "Transplant" } }) }} >Transplant</li>
                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/HIV/1", { state: { "type": "category", "category": "HIV" } }) }}>HIV</li>

                    {/* <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/?type=category&subtype=Anti Retro Viral&page=1", { state: { "type": "category", "category": "Anti Retro Viral" } }) }} >Anti-Viral</li> */}
                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Anitviral/1", { state: { "type": "category", "category": "Anitviral" } }) }} >Anti-Viral</li>
                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Cardiology/1", { state: { "type": "category", "category": "Cardiology" } }) }} >Cardiology</li>
                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Kidney_Disease/1", { state: { "type": "category", "category": "Kidney Disease" } }) }} >Kidney Disease</li>

                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Diabetology/1", { state: { "type": "category", "category": "Diabetology" } }) }}>Diabetology</li>

                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Neurology/1", { state: { "type": "category", "category": "Neurology" } }) }} >Neurology</li>
                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Supplements/1", { state: { "type": "category", "category": "Supplements" } }) }} >Supplements</li>
                    {/* <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/?type=category&subtype=Asthma/COPD&page=1", { state: { "type": "category", "category": "Asthma/COPD" } }) }} >Asthma/COPD</li> */}
                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Immune_disorder/1", { state: { "type": "category", "category": "Immune disorder" } }) }} >Immune disorder</li>
                    <li className='text-decoration-none text-white ' onClick={() => { navigate("/popularity/category/Skin_Care/1", { state: { "type": "category", "category": "Skin Care" } }) }} >Skin Care</li>

                </ul>
            </div>

            <header className='container d-block d-lg-block d-xl-none d-xxl-none mobNav py-2'>
                <div className='d-flex'>
                    {/* Logo */}
                    <div onClick={() => { navigate("/") }} className="logoSize">
                        <img src={logo} alt="logo" class="img-fluid logo" />
                    </div>
                    {/*  */}
                    {/* Hamburger */}
                    <div>
                        <img src={hamburger} alt="" className='hamburGer' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
                    </div>
                </div>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <div className="d-block">
                            <div >
                                <h6 className='fw-bold mt-3 align-self-md-center poinTer'>Need help <img src={needhelp} alt="" class="img-fluid mx-lg-1"></img></h6>
                            </div>
                            <div>
                                <button className="btn bgYellow fw-bold mx-lg-2"><span className="mobileIcn"><MdLogin /></span> App Launching soon </button>
                            </div>
                        </div>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    {
                        !isLoginStatus ?
                            <div>
                                <button className="btn bgYellow MEdiaYellOW fw-bold mx-lg-2 "
                                    onClick={() => { setModal(true) }}> <span className='mobileIcn text-reset' data-bs-dismiss="offcanvas" aria-label="Close"><FiLogIn /> Login/Signup</span ></button>

                            </div>

                            :

                            <div className="">
                                {/* Icons */}
                                <div className='d-flex  align-self-center wrapIcons poinTer' >
                                    <div className='buyGet' onClick={() => { navigate("/wishlist") }}>
                                        <a ><img src={like} alt="man" className="img-fluid acuntWidth" data-bs-dismiss="offcanvas" aria-label="Close" /></a>
                                        <a > <span class="notivOne  badge rounded-pill bgRed">
                                            {favLength}<span class="visually-hidden" data-bs-dismiss="offcanvas" aria-label="Close">unread messages</span>
                                        </span>
                                        </a>
                                    </div>
                                    <div className='buyGet mx-2 poinTer' onClick={() => { navigate("/cart") }}>
                                        <a ><img src={cart} alt="man" className="img-fluid acuntWidth" data-bs-dismiss="offcanvas" aria-label="Close" /></a>
                                        <a >
                                            <a > <span class="notivOne  badge rounded-pill bgRed">
                                                {cartLength}<span class="visually-hidden" data-bs-dismiss="offcanvas" aria-label="Close">unread messages</span>
                                            </span>
                                            </a>
                                        </a>
                                    </div>
                                    <div>
                                        {/* <a ><img src={account} alt="man" class="img-fluid acuntWidth" />
                            </a> */}
                                        <li class="nav-item dropdown " >
                                            <a class="nav-profile" href="#" data-bs-toggle="dropdown">
                                                <img
                                                    src={account}
                                                    alt="Profile"
                                                    class="rounded-circle acuntWidth"
                                                />
                                            </a>

                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile profileTab">
                                                <li className="p-0" onClick={() => { navigate("/profile/address") }} data-bs-dismiss="offcanvas" aria-label="Close">
                                                    <a
                                                        class="dropdown-item d-flex align-items-center"

                                                    >
                                                        <i class="bi bi-person"></i>
                                                        <span className="fw6" data-bs-dismiss="offcanvas" aria-label="Close">Profile</span>
                                                    </a>
                                                </li>
                                                <li className="p-0">
                                                    <hr class="dropdown-divider" />
                                                </li>
                                                <li className="p-0" onClick={() => { localStorage.clear(); navigate("/"); dispatch(isLogin(false)); }}>
                                                    <a
                                                        class="dropdown-item d-flex align-items-center"

                                                    >
                                                        <i class="bi bi-box-arrow-right"></i>
                                                        <span className="fw6" data-bs-dismiss="offcanvas" aria-label="Close">Sign Out</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </div>
                                </div>
                            </div>

                    }

                    <div class="offcanvas-body">
                        <ul className='d-xl-flex justify-content-center list-unstyled parent mb-0'>
                        <li className='text-decoration-none text-white ' >
                        <li className="text-decoration-none text-white brdrRht">
                            <Dropdown className="dropDwn">
                                <Dropdown.Toggle id="dropdown-basic">Medicine</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => { navigate("/popularity/category/all/1", { state: { "type": "category", "category": "All category" } }) }} >
                                        All category</Dropdown.Item>
                                    <Dropdown.Item onClick={() => { navigate("/popularity/category/allSpeciality/1", { state: { "type": "category", "category": "All Speciality" } }) }}>Speciality</Dropdown.Item>
                                    <Dropdown.Item onClick={() => { navigate("/popularity/category/allProducts/1", { state: { "type": "category", "category": "All Products" } }) }}>Products</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                       


                    </li>
                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Anti_Cancer/1", { state: { "type": "category", "category": "Anti-Cancer" } }) }} data-bs-dismiss="offcanvas" aria-label="Close">Anti-Cancer</li>

                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Transplant/1", { state: { "type": "category", "category": "Transplant" } }) }} >Transplant</li>
                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/HIV/1", { state: { "type": "category", "category": "HIV" } }) }}>HIV</li>

                    {/* <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/?type=category&subtype=Anti Retro Viral&page=1", { state: { "type": "category", "category": "Anti Retro Viral" } }) }} >Anti-Viral</li> */}
                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Anitviral/1", { state: { "type": "category", "category": "Anitviral" } }) }} >Anti-Viral</li>
                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Cardiology/1", { state: { "type": "category", "category": "Cardiology" } }) }} >Cardiology</li>
                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Kidney_Disease/1", { state: { "type": "category", "category": "Kidney Disease" } }) }} >Kidney Disease</li>

                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Diabetology/1", { state: { "type": "category", "category": "Diabetology" } }) }}>Diabetology</li>

                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Neurology/1", { state: { "type": "category", "category": "Neurology" } }) }} >Neurology</li>
                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Supplements/1", { state: { "type": "category", "category": "Supplements" } }) }} >Supplements</li>
                    {/* <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/?type=category&subtype=Asthma/COPD&page=1", { state: { "type": "category", "category": "Asthma/COPD" } }) }} >Asthma/COPD</li> */}
                    <li className='text-decoration-none text-white brdrRht' onClick={() => { navigate("/popularity/category/Immune_disorder/1", { state: { "type": "category", "category": "Immune disorder" } }) }} >Immune disorder</li>
                    <li className='text-decoration-none text-white ' onClick={() => { navigate("/popularity/category/Skin_Care/1", { state: { "type": "category", "category": "Skin Care" } }) }} >Skin Care</li>
                        </ul>
                    </div>
                </div>
            </header>


            {/* Modal Nested */}
            <div>
                <Modal isOpen={modal} toggle={toggle} >
                    <div className="bgModalYellow modalCtm">
                        <ModalHeader toggle={toggle} >
                            <h5 class="modal-title text-center fw7" id="exampleModalLabel">
                                Quick Login 
                            </h5>
                        </ModalHeader>

                        <ModalBody>
                            <div className="card px-md-5 py-md-5 p-4">
                                <form key={1} onSubmit={handleSubmit2(sendOtpFn, onError)}  >
                                    <div class="mb-3">
                                        {
                                            loginType ?
                                                <>
                                                    <input 
                                                        type="number"
                                                        name="mobileNumber"
                                                        class="form-control"
                                                        id="exampleInputNumber"
                                                        placeholder="Enter your Mobile number"
                                                        {...register2("mobileNumber", { required: "MobileNumber is required" })}
                                                    />

                                                    {errors2.mobileNumber && (
                                                        <small style={{ color: "red" }}>
                                                            {errors2.mobileNumber.message}
                                                        </small>
                                                    )}
                                                </>
                                                :
                                                <>
                                                    <input
                                                        type="email"
                                                        name="emailId"
                                                        class="form-control"
                                                        id="exampleInputNumber"
                                                        placeholder="Enter your Email Id"
                                                        {...register2("emailId", { required: "Email Id is required" })}
                                                    />

                                                    {errors2.emailId && (
                                                        <small style={{ color: "red" }}>
                                                            {errors2.emailId.message}
                                                        </small>
                                                    )}
                                                </>
                                        }

                                    </div>

                                    <Button className="btn bgRed text-white d-block mx-auto w-100 mt-3 sendOTP">
                                        Send OTP
                                    </Button>

                                    <div className="d-flex justify-content-center mt-3">
                                        <p className="textRed mb-0" onClick={() => { setLoginType(!loginType) }}>Sign in with {loginType ? "Email Id" : "Mobile Number"}</p>
                                    </div>

                                    <div className="d-flex justify-content-center mt-3">
                                        <p className=" mb-0" >Don't have an account? <span className='textRed' onClick={toggle2}>Signup Now</span></p>
                                    </div>
                                    {/* register popup */}
                                    {/* {showPopup && (
                                        <div className="nested-popup bgModalYellow modalCtm">
                                            <Modal isOpen={modal} toggle={toggle} {...args}>
                                                <div className='bgModalYellow modalCtm'>
                                                    <ModalHeader className='regiSTEr' toggle={toggle}>Register</ModalHeader>
                                                    <ModalBody>
                                                        <div className=" card px-md-5 py-md-5 p-4">
                                                            <form key={1} onSubmit={handleSubmit3(sendRegiOtpFn)}>
                                                                <div class="mb-3">

                                                                    <>
                                                                        <input
                                                                            type="text"
                                                                            name="Name"
                                                                            className="form-control mb-2"
                                                                            id="exampleInputNumber"
                                                                            placeholder="Enter your Name"

                                                                            {...register3("Name", { required: "Name is required" })}
                                                                        />

                                                                        {errors3.name && (
                                                                            <small style={{ color: "red" }}>
                                                                                {errors3.name.message}
                                                                            </small>
                                                                        )}
                                                                    </>
                                                                    <>
                                                                        <input

                                                                            type="email"
                                                                            name="Email"
                                                                            class="form-control mb-2"
                                                                            id="exampleInputNumber"
                                                                            placeholder="Enter your Email Id"

                                                                            {...register3("Email", { required: "Email Id is required" })}
                                                                        />

                                                                        {errors3.email && (
                                                                            <small style={{ color: "red" }}>
                                                                                {errors3.email.message}
                                                                            </small>
                                                                        )}
                                                                    </>
                                                                    <>
                                                                        <input
                                                                            type="number"
                                                                            name="MobileNumber"
                                                                            class="form-control mb-2"
                                                                            id="exampleInputNumber"
                                                                            placeholder="Enter your Mobile Number"

                                                                            {...register3("MobileNumber", { required: "Mobile Number is required" })}
                                                                        />

                                                                        {errors3.mobile && (
                                                                            <small style={{ color: "red" }}>
                                                                                {errors3.mobile.message}
                                                                            </small>
                                                                        )}
                                                                    </>



                                                                </div>

                                                                <Button className="btn bgRed text-white d-block mx-auto w-100 mt-3 sendOTP" >
                                                                    Send OTP
                                                                </Button>



                                                            </form>
                                                        </div>
                                                    </ModalBody>
                                                    <ModalFooter>

                                                        <Button color="secondary" onClick={togglenew}>
                                                            Cancel
                                                        </Button>
                                                    </ModalFooter>
                                                </div>

                                            </Modal>

                                        </div>
                                    )} */}
                                </form>
                            </div>
                            {/* otp model */}
                            <Modal
                                isOpen={nestedModal}
                                toggle={toggleNested}
                                onClosed={closeAll ? toggle : undefined}
                            >
                                <div className="bgModalYellow modalCtm">
                                    <ModalHeader>
                                        <h5
                                            class="modal-title text-center fw7"
                                            id="exampleModalLabel" 
                                        >
                                            Login OTP
                                        </h5>
                                    </ModalHeader>
                                    <ModalBody>

                                        <div className="card px-md-5 py-md-5 p-4">
                                            {loginType ?
                                                <p className="text-center fw7">Verify Phone Number</p>
                                                : <p className="text-center fw7">Verify Email Address</p>}

                                            <div className="d-flex justify-content-center">
                                                <div>
                                                    <p>
                                                        Enter the OTP sent on{" "}
                                                        <span className="fw6">{loginId}</span>
                                                    </p>
                                                </div>
                                                {/* <div>
                                                    <a className="textRed text-decoration-none">
                                                        <p>Edit</p>
                                                    </a>
                                                </div> */}
                                            </div>
                                            {/* For OTP */}
                                            <div class="forOtp">
                                                <div class="otp">
                                                    {/* <div class="userInput">
                                                        <input
                                                            type="text"
                                                            id="ist"
                                                            maxlength="1"
                                                            onkeyup="clickEvent(this,'sec')"
                                                        />
                                                        <input
                                                            type="text"
                                                            id="sec"
                                                            maxlength="1"
                                                            onkeyup="clickEvent(this,'third')"
                                                        />
                                                        <input
                                                            type="text"
                                                            id="third"
                                                            maxlength="1"
                                                            onkeyup="clickEvent(this,'fourth')"
                                                        />
                                                        <input
                                                            type="text"
                                                            id="fourth"
                                                            maxlength="1"
                                                            onkeyup="clickEvent(this,'fifth')"
                                                        />
                                                    </div> */}
                                                    <OtpInput
                                                        value={otp}
                                                        onChange={setOtp}
                                                        numInputs={4}
                                                        renderSeparator={<span>-</span>}
                                                        renderInput={(props) => <input {...props} />}
                                                        inputStyle={{ "width": "1.5em" }}
                                                    />
                                                    <button className="btn bgRed text-white mt-4 fontMontserrat py-3"
                                                        onClick={verifyOtp} >
                                                        Submit
                                                    </button>
                                                    <p className="text-muted text-center mb-0 mt-4 fontMontserrat remainingSeconds">
                                                        remaining <Countdown date={timer} renderer={renderer} />second
                                                        {/* <span>Resend OTP</span> */}
                                                    </p>
                                                    {/* <div className="d-flex justify-content-center mt-3" onClick={toggle}>
                                                        {resendOtp && <p>Resend OTP</p>}
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <p className="text-center">
                                            By Signing in you agree to our{" "}
                                            <Link to="/termsandcondition" className="text-dark">

                                                Terms & conditions

                                            </Link>

                                            <br />

                                            <Link to="/privacypolicy" className="text-dark">

                                                Privacy policy

                                            </Link>
                                        </p>
                                    </ModalFooter>
                                </div>
                            </Modal>
                        </ModalBody>
                        <ModalFooter>
                            <p className="text-center">
                                By Signing in you agree to our{" "}
                                <a className="text-dark" onClick={() => {
                                    handleRedirect(`/termsandcondition`);
                                }}>Terms & conditions</a> and{" "}
                                <a className="text-dark" onClick={() => {
                                    handleRedirect(`/privacypolicy`);
                                }}>Privacy policy</a>
                            </p>
                        </ModalFooter>
                    </div>
                </Modal>
            </div>

            <div>
                <Modal isOpen={modal2} toggle={toggle2} >
                    <div className="bgModalYellow modalCtm">
                        <ModalHeader toggle={toggle2}>
                            <h5 class="modal-title text-center fw7" id="exampleModalLabel">
                                Register User
                            </h5>
                        </ModalHeader>

                        <ModalBody>
                            <div className="card px-md-5 py-md-5 p-4">
                                <form key={1} onSubmit={handleSubmit3(sendRegiOtpFn)} 
                                >
                                    <div class="mb-3">

                                        <>
                                            <input
                                                type="text"
                                                name="Name"
                                                className="form-control mb-2"
                                                id="exampleInputNumber"
                                                placeholder="Enter your Name"

                                                {...register3("Name", { required: "Name is required" })}
                                            />

                                            {errors3.name && (
                                                <small style={{ color: "red" }}>
                                                    {errors3.name.message}
                                                </small>
                                            )}
                                        </>
                                        <>
                                            <input

                                                type="email"
                                                name="Email"
                                                class="form-control mb-2"
                                                id="exampleInputNumber"
                                                placeholder="Enter your Email Id"

                                                {...register3("Email", { required: "Email Id is required" })}
                                            />

                                            {errors3.email && (
                                                <small style={{ color: "red" }}>
                                                    {errors3.email.message}
                                                </small>
                                            )}
                                        </>
                                        <>
                                            <input
                                                type="number"
                                                name="MobileNumber"
                                                class="form-control mb-2"
                                                id="exampleInputNumber"
                                                placeholder="Enter your Mobile Number"

                                                {...register3("MobileNumber", { required: "Mobile Number is required" })}
                                            />

                                            {errors3.mobile && (
                                                <small style={{ color: "red" }}>
                                                    {errors3.mobile.message}
                                                </small>
                                            )}
                                        </>

                                    </div>

                                    <Button className="btn bgRed text-white d-block mx-auto w-100 mt-3 sendOTP" >
                                        Send OTP for Register
                                    </Button>
                                    <div className="d-flex justify-content-center mt-3">
                                        <p className=" mb-0" >Already have an account <span className='textRed' onClick={toggle}>Login</span></p>
                                    </div>


                                    

                                </form>
                            </div>
                            {/* otp model */}
                            <Modal
                                isOpen={nestedModal}
                                toggle={toggleNested}
                                onClosed={closeAll ? toggle : undefined}
                            >
                                <div className="bgModalYellow modalCtm">
                                    <ModalHeader>
                                        <h5
                                            class="modal-title text-center fw7"
                                            id="exampleModalLabel"
                                        >
                                            Register OTP
                                        </h5>
                                    </ModalHeader>
                                    <ModalBody>

                                        <div className="card px-md-5 py-md-5 p-4">

                                            <div className="d-flex justify-content-center">
                                                <div>
                                                    <p>
                                                        Enter the OTP  
                                                        {/* <span className="fw6">{loginId}</span> */}
                                                    </p>
                                                </div>
                                                
                                            </div>
                                            {/* For OTP */}
                                            <div class="forOtp">
                                                <div class="otp">
                                                    
                                                    <OtpInput
                                                        value={otpReg}
                                                        onChange={setOtpReg}
                                                        numInputs={4}
                                                        renderSeparator={<span>-</span>}
                                                        renderInput={(props) => <input {...props} />}
                                                        inputStyle={{ "width": "1.5em" }}
                                                    />
                                                    <button className="btn bgRed text-white mt-4 fontMontserrat py-3"
                                                        onClick={verifyregOtp} >
                                                        Submit
                                                    </button>
                                                    <p className="text-muted text-center mb-0 mt-4 fontMontserrat remainingSeconds">
                                                        remaining <Countdown date={timer} renderer={renderer} />second
                                                        {/* <span>Resend OTP</span> */}
                                                    </p>
                                                    {/* <div className="d-flex justify-content-center mt-3" onClick={toggle}>
                                                        {resendOtp && <p>Resend OTP</p>}
                                                    </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <p className="text-center">
                                            By Signing in you agree to our{" "}
                                            <Link to="" className="text-dark">

                                                Terms & conditions

                                            </Link>

                                            <br />

                                            <Link to="/privacypolicy" className="text-dark">

                                                Privacy policy

                                            </Link>
                                        </p>
                                    </ModalFooter>
                                </div>
                            </Modal>
                        </ModalBody>
                        <ModalFooter>
                            <p className="text-center">
                                By Signing in you agree to our{" "}
                                <a className="text-dark" onClick={() => {
                                    handleRedirect(`/termsandcondition`);
                                }}>Terms & conditions</a> and{" "}
                                <a className="text-dark" onClick={() => {
                                    handleRedirect(`/privacypolicy`);
                                }}>Privacy policy</a>
                            </p>
                        </ModalFooter>
                    </div>
                </Modal>
            </div>

        </div>
    )
}

export default NavBar
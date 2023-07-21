import React, { useEffect } from 'react'
import './home.css'
import location from "../../assets/images/location.png"
import chevrondown from "../../assets/images/chevrondown.png"
import search from "../../assets/images/search.png"
import medicine from "../../assets/images/medicine.png"
import wellness from "../../assets/images/wellness.png"
import health from "../../assets/images/health.png"
import plan from "../../assets/images/plan.png"
import heart from "../../assets/images/heart.png"
import brain from "../../assets/images/brain.png"
import kidney from "../../assets/images/kidney.png"
import stomach from "../../assets/images/stomach.png"
import lung from "../../assets/images/lung.png"
import liver from "../../assets/images/liver.png"
import bp from "../../assets/images/bp.png"
import sonic from "../../assets/images/sonic.png"
import heater from "../../assets/images/heater.png"
import layermask from "../../assets/images/layermask.png"
import tonic from "../../assets/images/tonic.png"
import upLoad from "../../assets/images/upLoad.png"
import onLine from "../../assets/images/onLine.png"
import get from "../../assets/images/get.png"
import hospital from "../../assets/images/hospital.png"
import hospital2 from "../../assets/images/hospital2.png"
import neuro from "../../assets/images/neuro.png"
import river from "../../assets/images/river.png"
import drugstore from "../../assets/images/drugstore.png"
import vitamin from "../../assets/images/vitamin.png"
import painkiller from "../../assets/images/painkiller.png"
import like from "../../assets/images/like.png"
import product from "../../assets/images/product.png"
import medication from "../../assets/images/medication.png"
import medlife from "../../assets/images/medlife.png"
import naturally from "../../assets/images/naturally.png"
import file from "../../assets/images/file.png"
import rightarrow from "../../assets/images/rightarrow.png"
import blog1 from "../../assets/images/blog1.png"
import blog2 from "../../assets/images/blog2.png"
import blog3 from "../../assets/images/blog3.png"
import leftbgWhite from "../../assets/images/leftbgWhite.png"
import rightbgwhite from "../../assets/images/rightbgwhite.png"
import withstar from "../../assets/images/withstar.png"
import withoutStar from "../../assets/images/withoutStar.png"
import adcumin from "../../assets/images/adcumin.png"
import cazigel from "../../assets/images/cazigel.png"
import royale from "../../assets/images/royale.png"
import likeButton from "../../assets/images/likeButton.png"
import bpmonitor from "../../assets/images/bpmonitor.png"
import thermometer from "../../assets/images/thermometer.png"
import study from "../../assets/images/study.png"
import mob from "../../assets/images/mob.png"
import playstore from "../../assets/images/playstore.png"
import apple from "../../assets/images/apple.png"
import returns from "../../assets/images/returns.png"
import checkout from "../../assets/images/checkout.png"
import delivery from "../../assets/images/delivery.png"
import support from "../../assets/images/support.png"
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import healthimg2 from '../../assets/images/healthimg2.png'
import leftArrow from '../../assets/images/leftArrow.png'
import rightArroww from '../../assets/images/rightArroww.png'
import sugar from "../../assets/images/sugar.png"
import { BsChevronDown } from 'react-icons/bs';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { loader } from "../../redux/common"
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import time from "../../assets/images/time.png";
import medications from "../../assets/images/medications.png";
import money from "../../assets/images/money.png";
import med from "../../assets/images/med.png";
import { todayDealCb } from "../../redux/product";
import Countdown from 'react-countdown';
import { toast } from "react-toastify";
import { getNewArrivalsCb } from "../../redux/product"
import { addRmvFavCb, cusFavLstCb } from "../../redux/customerApi";
import { addtoCartCb } from "../../redux/cart";
import { getblogsCb } from "../../redux/product"
import { BsArrowRightShort } from 'react-icons/bs'
import tablet from "../../assets/images/tab.png";
import deli from "../../assets/images/van.png";
import tick from "../../assets/images/tick.png";
import phone from "../../assets/images/phone.png";
import meddmobile from "../../assets/images/meddmobilee.png";
import bookdigo from "../../assets/images/bookdigo.png";

import cancer from "../../assets/images/cancer-cell.png";
import intestine from "../../assets/images/intestine.png";
import brainstorm from "../../assets/images/brainstorm.png";
import symptoms from "../../assets/images/symptoms.png";
import Immunology from "../../assets/images/Immunology.png";
import nero from "../../assets/images/nero.png";
import Pulmonology from "../../assets/images/Pulmonology.png";
import Dermatology from "../../assets/images/Dermatology.png";
import Toxicology from "../../assets/images/Toxicology.png";
import Osteopathy from "../../assets/images/physical-therapy.png";
import Nephrology from "../../assets/images/Nephrology.png";
import Ophthalmology from "../../assets/images/Ophthalmology.png";
import Virology from "../../assets/images/Virology.png";
import Hematology from "../../assets/images/Hematology.png";
import urology from "../../assets/images/urology.png";
import Hepatology from "../../assets/images/liver.png";






import {
    getProductListCb,
} from "../../redux/product";
import { BiSearchAlt2 } from 'react-icons/bi'
import ReactGA from  "react-ga";

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const selectedValue = useSelector(state => state.apiReducer.loader);

    const [query, setQuery] = useState('');
    const [todayDeal, setTodayDeal] = useState([]);
    const [blogData, setBlogData] = useState([]);
    const [minutes, setMinutes] = useState();
    const [arrivalsData, setArrivalsData] = useState([]);
    const isLoginStatus = useSelector((state) => state.apiReducer.isLogin);
    const [quantity, setQuantity] = useState(1);
    const [productList, setProductList] = useState([]);

    const [slidersResp, setslidersResp] = useState(0);
    const [sliderblog, setsliderblog] = useState(0);

    const handleSearch = () => {
        navigate(`/Searchmed/${query}?page=1`);
    }

    const handleRedirect = (url) => {
        navigate(url);
        window.scrollTo(0, 0);
    }

    let { favoriteProductIdObject } = useSelector(state => state.backupReducer);


    var deals = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: (slidersResp),
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: (slidersResp),
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
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

    var ourBlog = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: (sliderblog),
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1199,
                settings: {

                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 991,
                settings: {
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
    useEffect(() =>{
        ReactGA.pageview(window.location.pathname);
    }, []);

    useEffect(() => {




        dispatch(todayDealCb((resp) => {
        
            // console.log(resp, "rrr");
            if (resp.status) {
                var arr = [];

                setTodayDeal(resp.data);

                if (resp.data.length >= 2) {

                    setslidersResp(2)
                }
                else if (resp.data.length == 1) {

                    setslidersResp(1)
                }
                else {

                    setslidersResp(0)
                }
               
                } else {
                  setTodayDeal([]);
                }

            
        }))



        dispatch(getNewArrivalsCb((resp) => {
            dispatch(loader(false));
            if (resp && resp.status) {
                // console.log(resp.data, "resp");
                var arr = [];
                arr.push(resp.data);
                setArrivalsData(resp.data);
                // console.log(resp, "new arrivals");
            } else {
                // console.log(resp, "new arrivals");
                toast.error(resp ? resp.message : "Error occurred while searching");
            }
        
            // ga code
            if (resp && resp.data) {
                resp.data.forEach((item) => {
                    ReactGA.event({
                        category: "New Arrivals",
                        action: "Test Action",
                        label: "Text Label",
                        value: item.priceToCustomer
                    });
                });
            }
        }));
        
        dispatch(getblogsCb((resp) => {
            dispatch(loader(false));
            if (resp && resp.status) {
                // console.log(resp.data, "blogs");
                setBlogData(resp.data);

                if (resp.data.length >= 3) {

                    setsliderblog(3)
                }
                else if (resp.data.length == 2) {

                    setsliderblog(2)
                }
                else if (resp.data.length == 1) {

                    setsliderblog(1)
                }

                else {

                    setsliderblog(0)
                }


            }
            else {
                // console.log(resp);
                toast.error(resp ? resp.message : "Error occurred while searching");
            }
        })
        )


        var reqBody = {};

        reqBody["page"] = 1;

        reqBody["category"] = "Supplements";
        dispatch(
            getProductListCb(reqBody, (resp) => {
                if (resp.status) {
                    setProductList(resp.data);
                    // console.log(resp.data, 'health')
                } else {
                    toast.error(resp.message);
                }
            })
        )

        if (isLoginStatus) {
            for (let i = 0; i < favoriteProductIdObject.length; i++) {
                localStorage.setItem(favoriteProductIdObject[i]._id, true);
            }
        } else {
            for (let i = 0; i < favoriteProductIdObject.length; i++) {
                localStorage.removeItem(favoriteProductIdObject[i]._id);
            }
        }


    }, [favoriteProductIdObject]);

    // useEffect(() => {


    // }, []);


    const rendererDays = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span>0</span>;
        } else {
            // Render a countdown
            return <span>{days}</span>;
        }
    };


    const rendererHours = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span>0</span>;
        } else {
            // Render a countdown
            return <span>{hours}</span>;
        }
    };

    const rendererMin = ({ minutes, completed }) => {
        if (completed) {
            // Render a completed state
            return <span>0</span>;
        } else {
            // Render a countdown
            return <span>{minutes}</span>;
        }
    };

    const rendererSec = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <span>0</span>;
        } else {
            // Render a countdown
            return <span>{seconds}</span>;
        }
    };

    const wiseList = (e) => {
        if (isLoginStatus) {
            if (localStorage.getItem(e._id) === "true") {
                localStorage.removeItem(e._id);
            }
            dispatch(loader(true));
            var data = { "productId": e._id }
            dispatch(addRmvFavCb(data, (res) => {
                if (res.status) {
                    dispatch(loader(false));
                } else {
                    dispatch(loader(false));
                    toast.error(res.message);
                }
            }));

            dispatch(cusFavLstCb(() => { }));

        } else {
            toast.error("Please Login to add cart");
        }
    };

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





    return (
        <div className='home'>
            {/* Home Banner Start */}
            <section className='banner'>
                <div className="container">
                    <div className='mt-5'>
                        <h1 className='text-center fw-bold'>What Are You Looking For?</h1>
                        <p className='text-center text-muted fw-bold'>The pharmacy that really delivers</p>
                    </div>
                    {/* <!-- Input --> */}
                    <div class="row justify-content-md-center mt-4">
                        <div class="col-md-7">
                            <div class="form-floating d-flex">
                                {/* <div class="dropdown">
                                    <button class="dropbtn d-flex h-100">
                                        <img src={location} alt="location" className='px-1 citiesNames' /><span className='mt-1 d-flex'>Chennai</span>
                                        <i className='downArw'><BsChevronDown/></i>
                                    </button>
                                    <div class="dropdown-content">
                                        <a >Trichy</a>
                                        <a >Hyderabad</a>
                                        <a >Kochin</a>
                                    </div>
                                </div> */}
                                <form className='w-100 bnrFrm'>
                                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} class="form-control search1 py-3 w-100" placeholder="Search for Medicines and Health Products" id="floatingTextarea2"></input>
                                    {/* <img src={search} alt="" className='search2' onClick={handleSearch} /> */}
                                    <button type='submit' onClick={handleSearch} className='btn bg-transparent ' /><BiSearchAlt2 onClick={handleSearch} className='textRed seacrhIcon curserPointer' />
                                    <button />
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Description button */}
                    <div className='d-flex justify-content-center '>

                        <button className='btn bgRed text-white my-2 ordrBtn' onClick={() => { navigate("/onlinemedicine"); }} > <FileUploadOutlinedIcon />ORDER WITH PRESCRIPTION</button>
                        {/* <label for="file-upload" className="custom-file-upload ">
                            <img src={file} alt="file" className='img-fluid align-self-center' />  <span className='fw6'>Upload File</span>
                        </label>
                        <input id="file-upload" type="file" /> */}
                    </div>
                </div>
            </section>
            {/* Home Banner End  */}

            {/* Medicine, wellness, Healthblog, Plan  Section Start*/}
            <section className=''>
                <div class="container">
                    {/* <!-- Medicine and Wellness --> */}
                    <div class="row mt-lg-5 mt-md-0 justify-content-center">
                        <div class="col-lg-3 col-md-6 d-block mx-auto col-6 mt-3 mt-lg-0 mt-md-0 mt-xl-0 FnCentR"  data-aos="fade-up"
                            data-aos-duration="1250">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 mx-auto ">
                                    <img src={medicine} alt="medicine" />
                                </div>
                                <div class="col-xl-9 col-lg-8 col-md-9 col-sm-8 align-self-center">
                                    <h4 class="mt-2 mt-lg-0 mt-md-0 mt-xl-0 mb-0 medicineHead">Medicine</h4>
                                    <p class="text-muted mb-0 medicinePara fontMontserrat">Over 25000 Products</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-6 mt-3 mt-lg-0 mt-md-0 mt-xl-0 FnCentR">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4">
                                    <img src={wellness} alt="wellness" />
                                </div>
                                <div class="col-xl-9 col-lg-8 col-md-9 col-sm-8 align-self-center">
                                    <h4 class="mt-2 mt-lg-0 mt-md-0 mt-xl-0 mb-0 medicineHead">Wellness</h4>
                                    <p class="text-muted mb-0 medicinePara fontMontserrat">Health Products</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-6 mt-3 mt-lg-0 mt-md-4 mt-xl-0 FnCentR" data-aos="fade-up"
                            data-aos-duration="1750">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4">
                                    <img src={health} alt="healthblog" />
                                </div>
                                <div class="col-xl-9 col-lg-8 col-md-9 col-sm-8 align-self-center">
                                    <h4 class="mt-2 mt-lg-0 mt-md-0 mt-xl-0 mb-0 medicineHead">Health Blog</h4>
                                    <p class="text-muted mb-0 medicinePara fontMontserrat thridPara">Trending from health experts</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-6 mt-3 mt-lg-0 mt-md-4 mt-xl-0 FnCentR" data-aos="fade-up"
                            data-aos-duration="2000">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4">
                                    <img src={bookdigo} alt="plan" />
                                </div>
                                <div class="col-xl-9 col-lg-8 col-md-9 col-sm-8 align-self-center">
                                    <h4 class="mt-2 mt-lg-0 mt-md-0 mt-xl-0 mb-0 medicineHead">Book Diagnostics </h4>
                                    <p class="text-muted mb-0 medicinePara fontMontserrat">Book Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Medicine, wellness, Healthblog, Plan  Section End */}

            {/* <!-- MeddLife Profucts Start --> */}
            <section class="sec2">
                <div class="container">
                    <div class="row">
                        {/* Product 1 */}
                        <div className="col-md-4 productImg mt-4 mt-lg-0 mt-md-0 mt-xl-0 mt-xxl-0 TXtcenTER" >
                            <img src={medication} alt="medication" className='img-fluid imgsforPrduct' />
                            {/* Content */}
                            <div className='prdctcnTnt'>
                                <p class=" px-4 mt-3 text-white text-uppercase fontMontserrat mb-1">GET ALL YOUR</p>
                                <h4 class="px-4 text-white fw7 medText FOnTSiZE">Medication at One Place</h4>
                            </div>
                            {/* Shop now */}
                            <div class="d-flex px-3 shopeNow">
                                <div className=''>
                                    <a ><div className='bgArrow px-2 py-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="red" class="bi bi-arrow-right rightarrow" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                    </a>
                                </div>
                                <h5 class="text-white mx-2 mt-1"><a className='text-decoration-none text-white' onClick={() => { navigate("/popularity/category/all/1", { state: { "type": "category", "category": "All category" } }) }} >SHOP NOW</a></h5>
                            </div>
                        </div>
                        {/* Product 2 */}
                        <div className="col-md-4 productImg mt-4 mt-lg-0 mt-md-0 mt-xl-0 mt-xxl-0 TXtcenTER" >
                            <img src={naturally} alt="medication" className='img-fluid imgsforPrduct' />
                            {/* Content */}
                            <div className='prdctcnTnt'>
                                <p class=" px-4 mt-3 text-white text-uppercase fontMontserrat mb-1">85% OFF </p>
                                <h4 class="px-4 text-white fw7 FOnTSiZE" >Anti Cancer<br />Drugs</h4>
                            </div>
                            {/* Shop now */}
                            <div class="d-flex px-3 shopeNow">
                                <div className=''>
                                    <a ><div className='bgArrow px-2 py-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="red" class="bi bi-arrow-right rightarrow" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                    </a>
                                </div>
                                <h5 class="text-white mx-2 mt-1"><a className='text-decoration-none text-white' onClick={() => {navigate("/popularity/category/Anti_Cancer/1", { state: { "type": "category", "category": "Anti-Cancer" } }) }}>SHOP NOW</a></h5>
                            </div>
                        </div>
                        {/* Product 3 */}
                        <div className="col-md-4 productImg mt-4 mt-lg-0 mt-md-0 mt-xl-0 mt-xxl-0 TXtcenTER" >
                            <img src={medlife} alt="medication" className='img-fluid imgsforPrduct' />
                            {/* Content */}
                            <div className='prdctcnTnt'>
                                <h4 class="px-4 text-white mt-3 mb-1 fw7 FOnTSiZE">Health Supplements<br />Products</h4>
                                <p class=" px-4 mt-2 text-white text-uppercase  fontMontserrat">up to 60% OFF</p>
                            </div>
                            {/* Shop now */}
                            <div class="d-flex px-3 shopeNow">
                                <div className=''>
                                    <a ><div className='bgArrow px-2 py-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="red" class="bi bi-arrow-right rightarrow" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                    </a>
                                </div>
                                <h5 class="text-white mx-2 mt-1"><a className='text-decoration-none text-white' onClick={() => { navigate("/popularity/category/Supplements/1", { state: { "type": "category", "category": "Supplements" } }) }}  >SHOP NOW</a></h5>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- MeddLife Profucts end --> */}


            {/* Popular Categories Start */}
            <section className="popularCategoriesHome py-5 pplCrsl newArrivalRct bg-transparent">
                <div className="container">
                    {/* React Carosouel */}
                    <div>
                        <h1 className="text-center fw-bold mt-md-5 mt-lg-0 mt-xl-0 mt-xxl-0">
                            Popular Categories{" "}
                        </h1>
                        <Slider {...settings}>
                            {/* <div onClick={() => { handleRedirect("/popularity/?type=category&subtype=Heart care&page=1", { state: { "type": "speciality", "speciality": "Heart care" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={heart}
                                        alt="heart"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Heart Care</p>
                            </div> */}
                            {/* <div onClick={() => { handleRedirect("/popularity/?type=category&subtype=Brain care&page=1", { state: { "type": "speciality", "speciality": "Brain care" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={brain}
                                        alt="brain"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Brain Care</p>
                            </div> */}
                            {/* <div onClick={() => { handleRedirect("/popularity/?type=category&subtype=Kidney care&page=1", { state: { "type": "speciality", "speciality": "Kidney care" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={kidney}
                                        alt="kidney"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Kidney Care</p>
                            </div> */}
                            {/* <div onClick={() => { handleRedirect("/popularity/?type=category&subtype=Stomach care&page=1", { state: { "type": "speciality", "speciality": "Stomach care" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={stomach}
                                        alt="stomach"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Stomach Care</p>
                            </div> */}
                            {/* <div onClick={() => { handleRedirect("/popularity/?type=category&subtype=Lung care&page=1", { state: { "type": "speciality", "speciality": "Lung care" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={lung}
                                        alt="lung"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Lung Care</p> */}
                            {/* </div> */}
                            {/* <div onClick={() => { handleRedirect("/popularity/?type=category&subtype=Live care&page=1", { state: { "type": "speciality", "speciality": "Liver care" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={liver}
                                        alt="liver"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Liver Care</p>
                            </div> */}

                            <div onClick={() => { handleRedirect("/popularity/speciality/Oncology/1", { state: { "type": "speciality", "speciality": "Oncology" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={cancer}
                                        alt="cancer"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Oncology</p>
                            </div>

                            <div onClick={() => { handleRedirect("/popularity/speciality/Gastroenterology/1", { state: { "type": "speciality", "speciality": "Gastroenterology" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={intestine}
                                        alt="intestine"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Gastroenterology</p>
                            </div>

                            <div onClick={() => { handleRedirect("/popularity/speciality/Psychiatry/1", { state: { "type": "speciality", "speciality": "Psychiatry" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={brainstorm}
                                        alt="brainstorm"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Psychiatry</p>
                            </div>

                            <div onClick={() => { handleRedirect("/popularity/speciality/Rheumatology/1", { state: { "type": "speciality", "speciality": "Rheumatology" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={symptoms}
                                        alt="symptoms"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Rheumatology</p>
                            </div>

                            <div onClick={() => { handleRedirect("/popularity/speciality/Neurology/1", { state: { "type": "speciality", "speciality": "Neurology" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={nero}
                                        alt="nerology"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Neurology</p>
                            </div>
                            <div onClick={() => { handleRedirect("/popularity/speciality/Immunology/1", { state: { "type": "speciality", "speciality": "Immunology" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={Immunology}
                                        alt="nerology"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Immunology</p>
                            </div>
                            <div onClick={() => { handleRedirect("/popularity/speciality/Pulmonology/1", { state: { "type": "speciality", "speciality": "Pulmonology" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={Pulmonology}
                                        alt="nerology"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Pulmonology</p>
                            </div>
                            <div onClick={() => { handleRedirect("/popularity/speciality/Dermatology/1", { state: { "type": "speciality", "speciality": "Dermatology" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={Dermatology}
                                        alt="Dermatology"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Dermatology</p>
                            </div>
                            <div onClick={() => { handleRedirect("/popularity/speciality/Toxicology/1", { state: { "type": "speciality", "speciality": "Toxicology" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={Toxicology}
                                        alt="Toxicology"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Toxicology</p>
                            </div>
                            <div onClick={() => { handleRedirect("/popularity/speciality/Osteopathy/1", { state: { "type": "speciality", "speciality": "Osteopathy" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={Osteopathy}
                                        alt="Osteopathy"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Osteopathy</p>
                            </div>
                            <div onClick={() => { handleRedirect("/popularity/speciality/Nephrology/1", { state: { "type": "speciality", "speciality": "Nephrology" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={Nephrology}
                                        alt="Nephrology"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Nephrology</p>
                            </div>
                            <div onClick={() => { handleRedirect("/popularity/speciality/Ophthalmology/1", { state: { "type": "speciality", "speciality": "Ophthalmology" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={Ophthalmology}
                                        alt="Ophthalmology"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Ophthalmology</p>
                            </div>
                            <div onClick={() => { handleRedirect("/popularity/speciality/Virology/1", { state: { "type": "speciality", "speciality": "Virology" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={Virology}
                                        alt="Virology"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Virology</p>
                            </div>
                            <div onClick={() => { handleRedirect("/popularity/speciality/Hematology/1", { state: { "type": "speciality", "speciality": "Hematology" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={Hematology}
                                        alt="Hematology"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Hematology</p>
                            </div>
                            <div onClick={() => { handleRedirect("/popularity/speciality/urology/1", { state: { "type": "speciality", "speciality": "urology" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={urology}
                                        alt="urology"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Urology</p>
                            </div>
                            <div onClick={() => { handleRedirect("/popularity/speciality/Hepatology/1", { state: { "type": "speciality", "speciality": "Hepatology" } }) }}>
                                <div className="categoriesBg ">
                                    <img
                                        src={Hepatology}
                                        alt="Hepatology"
                                        className="img-fluid oragnsTop categriesImg"
                                    />
                                </div>
                                <p className="text-center fw6 Sp">Hepatology</p>
                            </div>
                            


                        </Slider>
                    </div>
                </div>
            </section>
            {/* Popular Categories end */}

            {/* Health Supplements Start */}
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
                                                        // refArr.includes(item._id) ? 
                                                        localStorage.getItem(item._id) == "true" ? < AiFillHeart /> : <AiOutlineHeart />
                                                    }

                                                </i>
                                            </div>
                                        </div>
                                        {/* Product Image */}

                                        <div >
                                            <div className="heightProduct" onClick={() => { handleRedirect(`/medicine/${item?.nameOfMedicine.split(' ').join('_').toLowerCase()}/${item._id}`); }}>
                                                <img
                                                    src={item?.imgUrls[0]}
                                                    alt="thermometer"
                                                    className="img-fluid d-block mx-auto"
                                                />
                                            </div>
                                            {/* Product Content */}
                                            <div class="card-body" >
                                                <div className="saltCompFnt" onClick={() => { handleRedirect(`/medicine/${item?.nameOfMedicine.split(' ').join('_').toLowerCase()}/${item._id}`); }} >
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
            {/* Health Supplements end */}



            {/* Upload, Online, Get Section Start */}
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
            {/* Upload, Online, Get Section end */}

            {/* Featured Brands Start */}
            <section className="bgLightYellow featuredBrand">
                <div className="container">
                    <h1 className="text-center fw-bold">Why Choose Us ?</h1>
                    <div className="row mt-5">
                        <div className="col-md-3 col-sm-6">
                            <div className="chseUsHght">
                                <img
                                    src={tablet}
                                    alt="time"
                                    className="img-fluid d-block mx-auto my-auto chseImg"
                                />
                            </div>
                            <p className="fw6 text-center mt-3">Rare Medicines Availability</p>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="chseUsHght">
                                <img
                                    src={phone}
                                    alt="time"
                                    className="img-fluid d-block mx-auto my-auto chseImg2"
                                />
                            </div>
                            <p className="fw6 text-center mt-3">All Speciality Medicines at One Place </p>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-4 mt-md-0">
                            <div className="chseUsHght">
                                <img
                                    src={tick}
                                    alt="time"
                                    className="img-fluid d-block mx-auto my-auto chseImg2"
                                />
                            </div>
                            <p className="fw6 text-center mt-3">Quality Brands with High safety standards</p>
                        </div>
                        <div className="col-md-3 col-sm-6 mt-4 mt-md-0">
                            <div className="chseUsHght">
                                <img
                                    src={deli}
                                    alt="time"
                                    className="img-fluid d-block mx-auto my-auto chseImg"
                                />
                            </div>
                            <p className="fw6 text-center mt-3">World Class Packaging with on time delivery </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Brands end */}

            {/* Deals of the day start */}
            {todayDeal.length > 0 ? <section className='newArrivalRct'>
                <div className="container">
                    <h1 className='text-center fw-bold'>Deals of the day</h1>



                    <Slider {...deals} className="">

                        {
                            todayDeal.map((item, i) => {
                                return (

                                    <div className="">

                                        <div className="bgRed rdus mx-3">

                                            <div className="row dealsSpace px-4">
                                                <div className="col-lg-5 align-self-center">
                                                    <div className="divImgHght">
                                                        <img
                                                            src={item?.imgUrls[0]}
                                                            alt="vitamin"
                                                            className="img-fluid vitamin"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-7">
                                                    <div className="">

                                                        <div className="mb-5">
                                                            <h4 className="text-white dealsf19 mt-3 mt-lg-0" onClick={() => { handleRedirect(`/medicine/${item._id}`); }}>
                                                                {item?.nameOfMedicine}
                                                            </h4>
                                                            <div className="d-flex">
                                                                <s className="text-white strikeRate align-self-center">
                                                                    ₹ {item?.mrp}
                                                                </s>
                                                                <h4 className="text-white mx-2 mt-1">₹ {item?.newPriceToCustomer}</h4>
                                                            </div>


                                                            <div className="d-flex mt-3">
                                                                <div className="bgHeart align-self-center" >
                                                                    <a cla ssName="align-self-center" onClick={() => {
                                                                        wiseList(item);
                                                                    }}>
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="20"
                                                                            height="20"
                                                                            fill="red"
                                                                            className="bi bi-heart mt-1 heartLike"
                                                                            viewBox="0 0 16 16"
                                                                        >
                                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                                        </svg>
                                                                    </a>
                                                                </div>
                                                                <button class="btn fw-bold bg-white textRed mx-2 add2cart textNowrap" onClick={() => {
                                                                    addCartFn(item);
                                                                }}>
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="20"
                                                                        height="20"
                                                                        fill="red"
                                                                        className="bi bi-cart3 mx-2"
                                                                        viewBox="0 0 16 16"
                                                                    >
                                                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                                    </svg>
                                                                    <span className="px-2 dealsCart">Add to Cart</span>
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className="row countDwn justify-content-around">
                                                            <div className="col-xl-2 col-md-2 col-lg-2 col-2 px-0 col-2">
                                                                <div className="bg-white text-center radiusAll">
                                                                    <h4 className="fw-bold mb-0 countDate"><Countdown date={item?.dealExpiresIn} renderer={rendererDays} /></h4>
                                                                    <p className="fw-bold mb-0 countNum">Days</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-2 col-md-2 col-lg-2 col-2 px-0 col-2">
                                                                <div className="bg-white text-center radiusAll">
                                                                    <h4 className="fw-bold mb-0 countDate"><Countdown date={item?.dealExpiresIn} renderer={rendererHours} /></h4>
                                                                    <p className="fw-bold mb-0 countNum">Hours</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-2 col-md-2 col-lg-2 col-2 px-0 col-2">
                                                                <div className="bg-white text-center radiusAll">
                                                                    <h4 className="fw-bold mb-0 countDate"><Countdown date={item?.dealExpiresIn} renderer={rendererMin} /></h4>
                                                                    <p className="fw-bold mb-0 countNum">Mins</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-2 col-md-2 col-lg-2 col-2 px-0 col-2">
                                                                <div className="bg-white text-center radiusAll">
                                                                    <h4 className="fw-bold mb-0 countDate"><Countdown date={item?.dealExpiresIn} renderer={rendererSec} /></h4>
                                                                    <p className="fw-bold mb-0 countNum">Secs</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                )
                            })

                        }




                    </Slider>
                </div>
            </section> : false
            }


            {/* Deals of the day end */}

            {/* Counter medications and products start */}
            <section className='medicationProduct'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-sm-12 align-self-center prdctCol">
                            {/* <p className='text-uppercase fw-bold fontMontserrat'>PRESCRIPTION</p> */}
                            <h3 className='counterText'>Prescription & OTC   <br /> brands now available with</h3>
                            <h5 className='fw-bold mt-4'>UP TO 85% Discount</h5>
                            <div className="d-flex mt-4" onClick={() => { navigate("/popularity/category/all/1", { state: { "type": "category", "category": "All category" } }) }}>
                                <a href="">
                                    <div className="bgArrowWidth">
                                        <span className="bsRight">
                                            <BsArrowRightShort />
                                        </span>
                                    </div>
                                </a>
                                <div className="mx-2 align-self-center">
                                    <p className="mb-0 fw6 curSOR">Shop now</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 prdctCol">
                            <img src={product} alt="product" className='img-fluid mt-4 mt-lg-0 mt-xl-0 mt-xxl-0 mediProduct' />
                        </div>
                    </div>
                </div>
            </section>
            {/* Counter medications and products end */}

            {/* Health Supplements Start */}
            {/* <section className="health heathSuppleRct">
                <div className="container">
                    <h1 className="text-center mt-3 fw-bold">Health Supplements</h1>
                    <Slider {...settings} className="">
                    


                        {
                            productList.map((item, i) => {
                                return (
                                    <div>
                                        <div className="card crd h-100 pstnHelth mx-2">
                                            
                                            <div className="likeHght">
                                                <div className="heartRound" onClick={() => {
                                                    wiseList(item);
                                                }}>
                                                    <i className="healthmedICons likdDiv">
                                                        {
                                                            localStorage.getItem(item._id) == "true" ? < AiFillHeart /> : <AiOutlineHeart />
                                                        }
                                                        
                                                    </i>
                                                </div>
                                            </div>
                                            
                                            <div className="heightProduct" onClick={() => { handleRedirect(`/medicine/${item._id}`); }}>
                                                <img
                                                    src={item.imgUrls[0]}
                                                    alt="thermometer"
                                                    className="img-fluid w-100 d-block mx-auto"
                                                />
                                            </div>
                                           
                                            <div class="card-body compohome">
                                                <div className="saltCompFnt comp" onClick={() => { handleRedirect(`/medicine/${item._id}`); }}>
                                                    <span className="text-center mb-0 saltComp">
                                                        <i className="fw6">{item?.nameOfMedicine}</i>
                                                    </span>
                                                    <span className="pb-2 saltComp">
                                                        <i className="fw6">
                                                            Manufacturer : {item?.manufacturer}
                                                        </i>
                                                    </span>
                                                </div>
                                                <h4 className="fw6 mt-3 bracia ">{item?.saltGroup}</h4>
                                                <div className="d-flex">
                                                    <s className=" strikeRate align-self-center fw5">{item?.mrp}</s>
                                                    <h4 className=" mx-2 mt-1 fw6 textRed">{item?.priceToCustomer}</h4>
                                                </div>
                                                <span className="fw5 ">You Save {item?.discountPercentage}%</span>
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

                                )
                            })

                        }





                    </Slider>
                </div>
            </section> */}
            {/* Health Supplements end */}


            {/* Blog start */}
            <section className="blog blogCrsl">
                <div className="container">
                    <h1 className="text-center fw-bold">From Our Blog</h1>

                    <Slider {...ourBlog}>
                        {
                            blogData && blogData.map((item, i) => {
                                return (
                                    <>
                                        <div onClick={() => { handleRedirect(`/Blogdetails/${item._id}`); }}>
                                            <div class="card mx-2">
                                                <img src={item.imgUrl} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title fw6">
                                                        <div dangerouslySetInnerHTML={{ __html: item.title }} />
                                                        {/* {item.title} */}
                                                    </h5>
                                                    <p class="card-text">
                                                        <div dangerouslySetInnerHTML={{ __html: item?.category }} />
                                                        {/* {item.content} */}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })

                        }
                        {/* <div>
                            <div class="card mx-2">
                                <img src={blog1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fw6">
                                        6 things to include in Diet for high <br />
                                        Blood Pressure
                                    </h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Autem, magni.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card mx-2">
                                <img src={blog1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fw6">
                                        6 things to include in Diet for high <br />
                                        Blood Pressure
                                    </h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Autem, magni.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card mx-2">
                                <img src={blog1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fw6">
                                        6 things to include in Diet for high <br />
                                        Blood Pressure
                                    </h5>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Autem, magni.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </Slider>
                </div>
            </section>
            {/* Blog end */}
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

            {/* Flexible Plans Start */}
            {/* <section className='flexible'>
                <div className="container">
                    <h1 className='text-center fw-bold'>Flexible Plans</h1>
                    <div className="row justify-content-center mt-5">
                   
                        <div className="col-xl-3 col-lg-4 col-md-4 col-9 cardGap">
                            <div class="card h-100 planCrd1">
                                <div className='mx-3  mt-3 text-center' >
                                    <span className='fw6' s>Basic</span>
                                    <h2 className='fw7'>₹129</h2>
                                    <h6 className='fontMontserrat month'>/ Month</h6>
                                </div>
                                <div class="card-body">
                                    <div className='d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <p className='mx-2 fw6'>Cras lobortis orci sed</p>
                                    </div>
                                    <div className='d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <p className='mx-2 fw6 '>Cras lobortis orci sed</p>
                                    </div>
                                    <div className='d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <p className='mx-2 fw6 '>Cras lobortis orci sed</p>
                                    </div>
                                </div>
                                <div className='d-block mx-auto mb-4'>
                                    <button className='btn bgYellow fw5'><p className='mb-0'>Choose a Plan</p></button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-4 col-md-4 col-9 mt-5 mt-xl-0 mt-xxl-0 mt-md-0 mt-lg-0 cardGap">
                            <div class="card h-100">
                                <div className='mx-3  mt-3 text-center' >
                                    <span className='fw6' s>Basic</span>
                                    <h2 className='fw7'>₹129</h2>
                                    <h6 className='fontMontserrat month'>/ Month</h6>
                                </div>
                                <div class="card-body">
                                    <div className='d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <p className='mx-2 fw6'>Cras lobortis orci sed</p>
                                    </div>
                                    <div className='d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <p className='mx-2 fw6'>Cras lobortis orci sed</p>
                                    </div>
                                    <div className='d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <p className='mx-2 fw6'>Cras lobortis orci sed</p>
                                    </div>
                                    <div className='d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <p className='mx-2 fw6'>Cras lobortis orci sed</p>
                                    </div>
                                    <div className='d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <p className='mx-2 fw6'>Cras lobortis orci sed</p>
                                    </div>
                                    <div className='d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <p className='mx-2 fw6'>Cras lobortis orci sed</p>
                                    </div>
                                </div>
                                <div className='d-block mx-auto mb-4'>
                                    
                                    <button type="button" class="btn bgYellow fw5">
                                        <p className='mb-0'>Launch demo modal</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-4 col-md-4 col-9  mt-5 mt-xl-0 mt-xxl-0 mt-md-0 mt-lg-0 cardGap">
                            <div class="card h-100">
                                <div className='mx-3  mt-3 text-center' >
                                    <span className='fw6' s>Basic</span>
                                    <h2 className='fw7'>₹129</h2>
                                    <h6 className='fontMontserrat month'>/ Month</h6>
                                </div>
                                <div class="card-body">
                                    <div className='d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <p className='mx-2 fw6'>Cras lobortis orci sed</p>
                                    </div>
                                    <div className='d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <p className='mx-2 fw6'>Cras lobortis orci sed</p>
                                    </div>
                                    <div className='d-flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                        </svg>
                                        <p className='mx-2 fw6'>Cras lobortis orci sed</p>
                                    </div>
                                </div>
                                <div className='d-block mx-auto mb-4'>
                                    <button className='btn bgYellow fw5'><p className='mb-0'>Choose a Plan</p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Flexible Plans end */}

            {/* Top Selling Products Start */}
            <section>
                <div className="container">
                    <h1 className='fw-bold text-center'>Top Selling Products</h1>
                    <div className="row topSellingRow">
                        {/* Blood Pressure */}
                        <div className="col-lg-3 col-md-6 col-sm-6" onClick={() => { navigate("/popularity/category/all/1", { state: { "type": "category", "category": "All category" } }) }}>
                            <div className="card sellingCardone cardHeight">
                                <div className='mx-3 mt-2'>
                                    <p className='sellingHeadContent'>Blood <br />Pressure Monitor</p>
                                </div>
                                <div className='d-flex justify-content-around '>
                                    <div className='align-self-center productDiv'>
                                        <a className='rightArw'>
                                            <i class="fa-solid fa-angle-right rightArw"></i>
                                        </a>
                                    </div>
                                    <div className=''>
                                        <img src={bpmonitor} alt="" className='img-fluid blogImages prdctimage1 w-50 pb-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Study */}
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mt-sm-0 mt-xl-0 mt-xxl-0 mt-md-0 mt-lg-0" onClick={ () => { navigate("/popularity/category/all/1", { state: { "type": "category", "category": "All category" } }) }} >
                            <div className="card sellingCardTwo cardHeight">
                                <div className='mx-3 mt-2'>
                                    <p className='sellingHeadContent'>Free Parts <br />Program to Study</p>
                                </div>
                                <div className='d-flex justify-content-around '>
                                    <div className='align-self-center productDiv'>
                                        <a className='rightArw'>
                                            <i class="fa-solid fa-angle-right rightArw"></i>
                                        </a>
                                    </div>
                                    <div className=''>
                                        <img src={study} alt="" className='img-fluid blogImages prdctimage2 pb-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Thermometer */}
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mt-xl-0 mt-xxl-0 mt-md-5 mt-lg-0" onClick={ () => { navigate("/popularity/category/all/1", { state: { "type": "category", "category": "All category" } }) }}>
                            <div className="card sellingCardThree cardHeight">
                                <div className='mx-3 mt-2'>
                                    <p className='sellingHeadContent'>App Maintain <br />Thermometer</p>
                                </div>
                                <div className='d-flex justify-content-around '>
                                    <div className='align-self-center productDiv'>
                                        <a className='rightArw'>
                                            <i class="fa-solid fa-angle-right rightArw"></i>
                                        </a>
                                    </div>
                                    <div className=''>
                                        <img src={thermometer} alt="" className='img-fluid blogImages prdctimage3 pb-1' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Blood Pressure */}
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-5 mt-xl-0 mt-xxl-0 mt-md-5 mt-lg-0" onClick={ () => { navigate("/popularity/category/all/1", { state: { "type": "category", "category": "All category" } }) }} >
                            <div className="card sellingCardFour cardHeight">
                                <div className='mx-3 mt-2'>
                                    <p className='sellingHeadContent'>Keep Your Blood <br />Pressure Monitor</p>
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <div className='align-self-center productDiv'>
                                        <a className='rightArw'>
                                            <i class="fa-solid fa-angle-right rightArw"></i>
                                        </a>
                                    </div>
                                    <div className=''></div>
                                    <img src={bpmonitor} alt="" className='img-fluid blogImages prdctimage4 pb-1' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            {/* Top Selling Products end */}

            {/* Simplifying Healthcare Impacting Lives Start */}
            <section className='healthcareImpact '>
                <div className="container">
                    {/* <div className="col-md-4">
                        <img src={mob} alt="mob" className='img-fluid' />
                    </div> */}
                    <div className="row">
                        <div className="col-md-5">
                            <img src={meddmobile} alt="mob" className='img-fluid mobHght' />
                        </div>
                        <div className="col-md-7 align-self-center col7Health">
                            <div className='simplifyWrapCon'>
                                <h3 className='fw5 hlthImpctFnt fw7 text-center text-md-start'>Simplifying Healthcare </h3>
                                <h3 className='fw5 hlthImpctFnt text-center text-md-start'>Impacting Lives</h3>
                                <p className='fontMontserrat fw5 txtAlign'> We are committed in making high quality super speciality medicines affordable and accessible to everyone who is in need.</p>
                                <div className='playStorApple socialMedia'>
                                    {/* <a ><img src={playstore} alt="img-fluid" className='socialMedia' /></a> */}
                                    {/* <a className='mx-2'><img src={apple} alt="img-fluid" className='socialMedia' /></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Simplifying Healthcare Impacting Lives end */}


            {/* Delivery Start */}
            <section className='delivery pt-0'>
                <div class="container">
                    {/* <!-- Medicine and Wellness --> */}
                    <div class="row justify-content-center rwColorDelivery py-5">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12 d-block mx-auto mt-3 mt-lg-0 mt-md-0 mt-xl-0">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-3 mx-auto MEdAliGn">
                                    <img src={returns} alt="medicine" />
                                </div>
                                <div class="col-xl-9 col-lg-8 col-md-9 col-sm-8 col-9  align-self-center medConTent">
                                    <h4 class="mt-2 mt-lg-0 mt-md-0 mt-xl-0 mb-0 medicineHead">Easy Returns</h4>
                                    <p class="text-muted mb-0 medicinePara fontMontserrat">Call us to know more</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt-3 mt-lg-0 mt-md-0 mt-xl-0 ">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-3 MEdAliGn">
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
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-3 MEdAliGn">
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
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-3 MEdAliGn">
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

            {/* Blog Content Start */}

            <section className='pt-0 pb-5'>

                <div className="container">

                    <h5 className='fw7 '>Welcome to Meddtoday! India’s fast growing Super Speciality Online Pharmacy! </h5>

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

            {/* Modal */}
            {/* <!-- Button trigger modal --> */}


            {/* <!-- Modal For Mobile Number --> */}
            <div className="modal fade modaL modalRegister" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content bgModalYellow">
                        <div class="modal-header d-flex justify-content-center">
                            <h5 class="modal-title text-center fw7" id="exampleModalLabel">Quick Login / Register</h5>
                        </div>
                        <div class="modal-body">
                            <div className="card px-md-5 py-md-5 p-4">
                                <form>
                                    <div class="mb-3">
                                        <input type="number" class="form-control" id="exampleInputNumber" aria-describedby="number"
                                            placeholder='91+ Enter your phone number' />
                                    </div>
                                    <button type="submit" class="btn bgRed text-white d-block mx-auto w-100 mt-3" > Sent OTP</button>
                                    <div className='d-flex justify-content-center mt-3'>
                                        <p className='textRed mb-0'>Sign in with email</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <p className='text-center'>By Signing in you agree to our <a className='text-dark'>Terms & conditions</a> and <a className='text-dark'>Privacy policy</a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal For OTP */}
            <div className="modal fade modaL " id="exampleModalOTP" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content bgModalYellow">
                        <div class="modal-header d-flex justify-content-center">
                            <h5 class="modal-title text-center fw7" id="exampleModalLabel">Quick Login / Register</h5>
                        </div>
                        <div class="modal-body">
                            <div className="card px-md-5 py-md-5 p-4">
                                <p className='text-center fw7'>Verify Phone Number</p>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <p>Enter the OTP sent on <span className='fw6'>+91 9876543210</span></p>
                                    </div>
                                    <div>
                                        <a className='textRed text-decoration-none'><p>Edit</p></a>
                                    </div>
                                </div>
                                {/* For OTP */}
                                <div class="forOtp">
                                    <div class="otp">
                                        <div class="userInput">
                                            <input type="text" id='ist' maxlength="1" onkeyup="clickEvent(this,'sec')" />
                                            <input type="text" id="sec" maxlength="1" onkeyup="clickEvent(this,'third')" />
                                            <input type="text" id="third" maxlength="1" onkeyup="clickEvent(this,'fourth')" />
                                            <input type="text" id="fourth" maxlength="1" onkeyup="clickEvent(this,'fifth')" />
                                        </div>
                                        <button className='btn bgRed text-white mt-4 fontMontserrat py-3'>Submit Button</button>
                                        <p className='text-muted text-center mb-0 mt-4 fontMontserrat remainingSeconds'>remaining 24 secs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <p className='text-center'>By Signing in you agree to our <a className='text-dark'>Terms & conditions</a> and <a className='text-dark'>Privacy policy</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
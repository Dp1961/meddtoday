import React, { useEffect, useState } from 'react'
import './Searchmed.css'
import dolo from "../../assets/images/dolo.png"
import dropdown from "../../assets/images/dropdown.png"
import chevronRight from "../../assets/images/chevronRight.png"
import rx from "../../assets/images/rx.png"
import sonic from "../../assets/images/sonic.png"
import likeButton from "../../assets/images/likeButton.png"
import bp from "../../assets/images/bp.png"
import layermask from "../../assets/images/layermask.png"
import heater from "../../assets/images/heater.png"
import tonic from "../../assets/images/tonic.png"
import returns from "../../assets/images/returns.png"
import checkout from "../../assets/images/checkout.png"
import delivery from "../../assets/images/delivery.png"
import support from "../../assets/images/support.png"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import leftbgWhite from "../../assets/images/leftbgWhite.png"
import rightbgwhite from "../../assets/images/rightbgwhite.png"
import sugar from "../../assets/images/sugar.png"
import { useNavigate } from "react-router-dom";
import { FiChevronsRight } from 'react-icons/fi'
import { toast } from "react-toastify"
import { getProductSearchCb, getNewArrivalsCb } from "../../redux/product"
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams, Link } from 'react-router-dom';
import { loader } from "../../redux/common";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { addRmvFavCb } from "../../redux/customerApi";
import { addtoCartCb } from "../../redux/cart";
import { Pagination, Stack } from '@mui/material'
import Modal from 'react-bootstrap/Modal';
import uploadPresImg from '../../assets/images/uploadPresImg.png'

function Searchmed() {

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

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const search = useParams();
    // console.log('Search text:', search);

    let { favoriteProductIdObject } = useSelector(state => state.backupReducer);



    const [searchValue, setSearchValue] = useState("");

    const [searchData, setSearchData] = useState([]);

    const [quantity, setQuantity] = useState(1);

    const [arrivalsData, setArrivalsData] = useState([]);

    const isLoginStatus = useSelector((state) => state.apiReducer.isLogin);

    let [totalPages, setToalPages] = React.useState();

    let [show, setShow] = useState(false);

    const [page, setPage] = useState(null)

    const handleRedirect = (url) => {
        navigate(url);
        window.scrollTo(0, 0);
    }

    function handlePageChange(page) {
        var url = new URL(window.location.href);
        url.searchParams.set("page", page);

        window.history.pushState({}, '', url.toString());
        setPage(page);

        // dispatch(getProductSearchCb({ "search": id.id, "page": page }, (resp) => {
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        var id = search;
        // console.log(id.id, "id")
        setSearchValue(id.id)
        dispatch(loader(true));

        dispatch(getProductSearchCb({ "search": id.id, "page": page || 1 }, (resp) => {
            dispatch(loader(false));
            if (resp && resp.status) {
                // console.log(resp.data, "resp")
                var arr = [];
                arr.push(resp.data)
                setSearchData(resp.data);
                setToalPages(resp.noOfPages)
            } else {
                toast.error(resp ? resp.message : "Error occurred while searching");
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
        setPage(new URL(window.location.href).searchParams.get("page"));

    }, [window.location.search]);

    // useEffect(()=>{
    //     setPage(new URL(window.location.href).searchParams.get("page"));
    // },[window.location.search])



    // const dispatch = useDispatch();

    // const [search, setSearch] = useState([]);

    // useEffect(() => {




    //     var reqBody = {};

    //     dispatch(getProductSearchCb(reqBody, (resp) => {
    //         console.log(resp, "resp")
    //         if (resp.status) {
    //             getProductSearchCb(resp.data);
    //         } else {
    //             toast.error(resp.message)
    //         }
    //     }))

    // }, )
    const wiseList = (e) => {
        if (isLoginStatus) {
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
        } else {
            toast.error("Please Login to add cart");
        }
    };
    const addCartFn = (e) => {
        if (isLoginStatus) {
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
        } else {
            toast.error("Please Login to add cart");
        }
    };



    useEffect(() => {
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


    return (
        <div>
            {/* Results For DOLO Start */}
            <div className='pt-0'>
                <div className="container bgLightYellow">


                    <div className='d-flex justify-content-between px-md-4 py-3'>
                        <a className='text-decoration-none'><p className='fw6 results mb-0'>Showing all results for {searchValue} <span className='text-dark fw7'></span></p></a>
                        <a className='text-decoration-none'><p className='fw6 results mb-0'>Please add item (s) to proceed</p></a>
                    </div>

                </div>
            </div>
            {/* Results For DOLO end */}

            {/* DOLO Quantity Start */}
            <section className='dolo'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 "
                        //  
                        >
                            {
                                searchData && searchData.length != 0 ?
                                    searchData.map((item, i) => {
                                        return (
                                            <div className="card saveCost1 px-2 px-lg-0 px-md-0 px-xl-0 px-xxl-0 productTopSpcae mb-5">


                                                <div className="row">
                                                    <div className="col-sm-2 align-self-center">
                                                        <img src={item?.imgUrls[0]} alt="dolo" className='img-fluid px-xl-3' />
                                                    </div>
                                                    <div className="col-sm-10">

                                                        <div className='d-sm-flex justify-content-between curSOR'>
                                                            {/* Content */}
                                                            <div onClick={() => { navigate(`/medicine/${item?.nameOfMedicine.split(' ').join('_').toLowerCase()}/${item._id}`); }}>
                                                                <p className='mb-0 fw7 doloMed curSOR'>{item?.nameOfMedicine}</p>
                                                                <span className='text-muted'>{item?.manufacturer}</span>
                                                                <p className='fw6'>{item?.packingForm}</p>
                                                                <p className=''><span className='fw8 '> {item?.priceToCustomer}*</span><span className='px-2 text-muted'>MRP<s className='px-1 mt-1'>{item?.mrp}</s></span></p>
                                                            </div>
                                                            {/* Quantity */}
                                                            <div className='d-lg-flex justify-content-center align-self-md-center'>
                                                                <div className="col-md-7 align-self-center">
                                                                    <div class="select">
                                                                        <select onChange={(e) => setQuantity(Number(e.target.value))}>
                                                                            <option className='fw6'>Quantity <img src={dolo} alt="" /></option>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                            <option>4</option>
                                                                            <option>5</option>
                                                                            <option>6</option>
                                                                            <option>7</option>
                                                                            <option>8</option>
                                                                            <option>9</option>
                                                                            <option>10</option>

                                                                        </select>
                                                                        <div class="select_arrow">
                                                                        </div>
                                                                    </div>
                                                                    <button className='btn bgRed w-100 text-white cartFnt' onClick={() => {
                                                                        addCartFn(item);
                                                                    }}>Add to Cart</button>
                                                                </div>
                                                            </div>
                                                            <p className='saveCost2 bgYellow p-1'>Save {item?.discountPercentage}%</p>
                                                        </div>



                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })
                                    :
                                    <p className='MsgTOUnfonD'>Hi, Thank you for searching your medicines in our website. Kindly do not worry if your brand is not featuring here, now you can simply place an order by sending your prescription via WhatsApp <Link to="https://wa.me/+919384842660" target="_blank">93848 42660</Link> or Simply call us at <Link to="tel:18008909345">1800 890 9345</Link></p>
                            }

                        </div>

                        <div className="col-lg-4 col-md-12 cartTopSpace">
                            <Link to="/cart" className='btn cartBg w-100 text-center text-white text-uppercase fw6 py-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0'>View Cart <span><FiChevronsRight /></span>
                            </Link>

                            {/*add new box here*/}
                            <div className="card mt-4 py-2 dataPrescription">
                                <div className='d-flex justify-content-center rxImg px-3 w-auto mx-auto'>
                                    <img src={rx} alt="" className='img-fluid ' />
                                    <p className='fw6 prescription align-self-center mt-3 px-2 crsrpntr text-nowrap' onClick={handleShow}>What is a valid prescription?</p>
                                </div>
                            </div>


                        </div>
                        {/* pageNation Happens Here */}
                        <div className="d-flex justify-content-center mt-5">
                            <Stack spacing={2}>
                                <Pagination count={totalPages} onChange={(event, pageNumber) => handlePageChange(pageNumber)} defaultPage={page} />
                            </Stack>
                        </div>
                    </div>
                </div>
            </section>
            {/* DOLO Quantity end */}



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




            {/* Delivery Start */}
            <div className=''>
                <div class="container">
                    {/* <!-- Medicine and Wellness --> */}
                    <div class="row justify-content-center  py-5">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12 d-block mx-auto mt-3 mt-lg-0 mt-md-0 mt-xl-0">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-3 mx-auto ">
                                    <img src={returns} alt="medicine" />
                                </div>
                                <div class="col-xl-9 col-lg-8 col-md-9 col-sm-8 col-9 align-self-center medConTent">
                                    <h4 class="mt-2 mt-lg-0 mt-md-0 mt-xl-0 mb-0 medicineHead">Free Easy Returns</h4>
                                    <p class="text-muted mb-0 medicinePara fontMontserrat">Return to 7 days</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt-3 mt-lg-0 mt-md-0 mt-xl-0 ">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-3">
                                    <img src={checkout} alt="wellness" />
                                </div>
                                <div class="col-xl-9 col-lg-8 col-md-9 col-sm-8 col-9 align-self-center medConTent">
                                    <h4 class="mt-2 mt-lg-0 mt-md-0 mt-xl-0 mb-0 medicineHead">Free Delivery Monday</h4>
                                    <p class="text-muted mb-0 medicinePara fontMontserrat">Orders over 700</p>
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
                                    <p class="text-muted mb-0 medicinePara fontMontserrat">24/7 Support care</p>
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
                                    <h4 class="mt-2 mt-lg-0 mt-md-0 mt-xl-0 mb-0 medicineHead">Secure Checkout</h4>
                                    <p class="text-muted mb-0 medicinePara fontMontserrat">100% Protected by paypal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Delivery end */}


            {/* Blog Content Start */}

            {/* <section>

                <div className="container">

                    <h5 className='fw7 txtAlign'>Welcome to Meddtoday.com! India's Leading Online Pharmacy!</h5>

                    <p className='txtAlign text-muted fw5'>  With a dynamic legacy of over 100 years in the pharma business, it comes as no surprise that Meddtoday.com is the first choice of over 4 million+ satisfied customers when it comes to an online pharmacy in India. Meddtoday.com has a pan India presence as we deliver health care essentials to every state in the country. We take your health seriously at Meddtoday.com. Be it purchasing medicines online, lab tests or online doctor consultations, we've got it all covered for our customers!</p>

                    <p className='txtAlign text-muted fw5'>Take the Worry Out of Buying Medicines! Purchase Medicines Online Anytime, Anywhere! Get everything you need at Meddtoday.com to take care of your health right from high-quality, affordable, authentic prescription medicines, Over-The-Counter pharmaceuticals products to general health care products, Ayurveda, Unani and Homeopathy medicines.</p>

                    <p className='txtAlign text-muted fw5'>Buy medicines online at Meddtoday.com from the comfort of your home and we will take care of the rest! We will ensure that the life-saving drugs reach your doorstep without a hitch. Do away with the hassle of driving to the medical store, waiting in line, or even remembering your refills! Meddtoday.com will sort out those problems for you effectively so that you can lead a healthy and full life! </p>

                    <p className='txtAlign text-muted fw5'>Ordering medicines online at Meddtoday.com is just a simple 4 step process. Browse through our wide range of health care products, add them to your cart, uploading your prescription (if required) and proceed to checkout!</p>




                    <p className='txtAlign text-muted fw5'>  Just set it up and your medicines will get refilled and delivered automatically every month to your doorstep! Why Choose Meddtoday? 100+ years of experience in the pharma sector Vital medicines delivered across the country Trust of more than 4 million+ loyal customers Our team is made up of highly experienced pharmacists & healthcare professionals A wide array of healthcare services available for your convenience We stock only genuine medicines & healthcare products Our Awards and Recognition We at Meddtoday.com know how crucial medicine is to treating health conditions and we are extremely proud to be at the forefront of the online medicine industry.</p>

                    <h5 className='fw7'>Medicine Subscriptions</h5>

                    <p className='txtAlign text-muted fw5'>

                        Meddtoday.com offers its customers a reliable online pharmacy service and as a testament to our commitment, we are regularly recognized and honoured with awards. We are pleased to highlight some of our awards here and we aim to continue adding more feathers to our cap! We have bagged the 'Health Tech Start-Up of the Year' at the NDTV Unicorn Awards 2016. We are also proud that we have been selected as Asia's Most Promising Brand 2018' by Int+ WCRC International. We have been named as the 'Best Digital Healthcare Start-up' by ET Now World Health and Wellness Congress in 2019. We were also recognized by ET Now World Health and Wellness Congress as the 'Digital Healthcare Company of the year' in 2019.</p>

                    <h5 className='fw7'>Why Choose Mandatory</h5>

                    <p className='txtAlign text-muted fw5'>With Meddtoday.com, rest assured that your health will be in safe hands! Buying medicines online At Meddtoday.com, we ensure that you get high-quality life-saving medicines are delivered to you on time. Order medicines online at your convenience from across the country. We also deliver Ayurvedic, Homeopathic, Unani and Over-The-Counter (OTC) products to over 19,000 pin codes across the country! Medicine Subscription Remembering to refilling medicines month on month to address chronic conditions can be a hassle. Meddtoday subscription service will ensure that you never run out of these vital medicines.</p>

                </div>

            </section> */}

            {/* Blog Content end */}

            {/* Upload Prescription Modal */}
            <Modal show={show} onHide={handleClose} className='uploadPresImg'>
                <Modal.Header closeButton>
                    <Modal.Title className='fw6'>Upload Your Prescritpion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <img src={uploadPresImg} alt="prescription" className='img-fluid' />
                    </div>
                </Modal.Body>

            </Modal>

        </div>
    )
}

export default Searchmed
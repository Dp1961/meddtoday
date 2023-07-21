import React, { useEffect, useState } from "react";
import "./medicine.css";
import dolo from "../../assets/images/dolo.png";
import dropdown from "../../assets/images/dropdown.png";
import chevronRight from "../../assets/images/chevronRight.png";
import offer1 from "../../assets/images/offer1.png";
import offer2 from "../../assets/images/offer2.png";
import layermask from "../../assets/images/layermask.png";
import sonic from "../../assets/images/sonic.png";
import likeButton from "../../assets/images/likeButton.png";
import bp from "../../assets/images/bp.png";
import author1 from "../../assets/images/author1.png";
import author2 from "../../assets/images/author2.png";
import rightArrrow from "../../assets/images/rightArrrow.png";
import sugar from "../../assets/images/sugar.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import leftArrow from "../../assets/images/leftArrow.png";
import rightArroww from "../../assets/images/rightArroww.png";
import tonic from "../../assets/images/tonic.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getMedicineDataCb } from "../../redux/product";
import { addtoCartCb, getCartListCb } from "../../redux/cart";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { FiChevronsRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { loader } from "../../redux/common";
import { getMedicinehCb } from "../../redux/product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { addRmvFavCb } from "../../redux/customerApi";
import SliderImage from "react-zoom-slider";
// import { Link } from "react-router-dom"

const Medicine = () => {


    let { favoriteProductIdObject } = useSelector(state => state.backupReducer);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
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
                    arrows: false,
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

    const [data, setData] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchData, setSearchData] = useState([]);
    const [faqData, setFaqData] = useState([]);
    const [fbiData, setFbiData] = useState([]);
    const [pbiData, setPbiData] = useState([]);
    const [reviewData, setReviewData] = useState([]);
    const [writerData, setWriterData] = useState([]);

    const [nextWeek, setNextWeek] = useState("");
    const [crntWeek, setCurrentWeek] = useState("");

    const [quantity, setQuantity] = useState(1);
    const [flag, setFlag] = useState(true);

    const [cartQual, setCartQual] = useState();


    const search = useParams();

    // const isLoginStatus = useSelector((state) => state.apiReducer.isLogin);
    const isLoginStatus = localStorage.getItem("isLogin");

    useEffect(() => {
        var id = search;
        dispatch(loader(true));


        dispatch(
            getMedicinehCb({ productId: id.id }, (resp) => {
                dispatch(loader(false));
                if (resp && resp.status) {
                    setSearchData([resp.data])
                    setFaqData(resp.FAQs);
                    setFbiData(resp.FBI);
                    setPbiData(resp.PBI);
                    setReviewData([resp.reviewer]);
                    setWriterData([resp.writer]);

                    // console.log(resp.reviewer, "review")
                    // console.log(resp.writer, "writer")


                    var arr4 = []
                    for (var i = 0; i < resp.data.imgUrls.length; i++) {
                        var arr3 = {};
                        arr3["image"] = resp.data.imgUrls[i];
                        arr3["text"] = "img" + i;
                        arr4.push(arr3)
                        if (i + 1 == resp.data.imgUrls.length) {
                            setData(arr4);
                        }
                    }

                    if (isLoginStatus) {
                        dispatch(getCartListCb((resp) => {
                            if (resp.status) {
                                var cartQuantity = resp?.data?.filter((val) => {
                                    if (val.products[0]) {
                                        return val.products[0]._id == id.id
                                    }
                                })
                                if (cartQuantity?.length != 0) { setCartQual(cartQuantity?.[0].totalItems) }

                            } else {
                                toast.error(resp.message);
                            }
                        }));
                    }
                } else {
                    toast.error(resp ? resp.message : "Error occurred while searching");
                }
            })
        );
        var nxt = nextweek();
        setNextWeek(nxt)
        var cur = currentWeek()
        setCurrentWeek(cur)


        window.scrollTo(0, 0)

    }, [flag]);

    const addCartFn = (e) => {
        if (isLoginStatus) {
            if (quantity == 0) {
                toast.error("Please add quantity");
            } else {
                dispatch(loader(true));
                if (e != null) {
                    var data = {
                        productId: e._id,
                        quantity: parseInt(quantity),
                    };
                }
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

    const viewCart = () => {
        if (isLoginStatus) {
        } else {
            toast.error("Please Login to view cart");
        }
    };
    const wiseList = (e) => {
        if (isLoginStatus) {
            dispatch(loader(true));
            if (e != null) {
                if (localStorage.getItem(e._id) === "true") {
                    localStorage.removeItem(e._id);
                }
                var data = { "productId": e._id }
                dispatch(addRmvFavCb(data, (res) => {
                    if (res.status) {
                        dispatch(loader(false));
                        toast.success(res.message)
                    } else {
                        dispatch(loader(false));
                        toast.error(res.message);
                    }
                }))
            }
        } else {
            toast.error("Please Login to add in liked product");
        }

    };

    function nextweek() {
        var today = new Date();
        var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
        return DateToStrng(nextweek);
    }

    function currentWeek() {
        var today = new Date();
        var currentweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
        return DateToStrng(currentweek);

    }
    function DateToStrng(e) {
        var dateString = e;
        dateString = new Date(dateString).toUTCString();
        return dateString = dateString.split(' ').slice(0, 4).join(' ');
    }


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
        <div className="">
            {/* Home and Medicine Start */}
            <div className="pt-0">
                <div className="container bgLightYellow">
                    <div className="d-sm-flex justify-content-between px-md-4 py-3">
                        <div className="d-flex">
                            <Link to="/" className="text-decoration-none text-dark">
                                <p className="fw6 results mb-0">
                                    Home{" "}
                                    <img src={rightArrrow} alt="" className="img-fluid carImg mx-2" />
                                </p>
                            </Link>
                            <a className="text-decoration-none text-dark" onClick={() => { navigate("/popularity/?type=category&subtype=all&page=1", { state: { "type": "category", "category": "All category" } }) }}>
                                <p className="fw6 results mb-0 mx-2">Product 
                                <img src={rightArrrow} alt="" className="img-fluid carImg mx-2" />
                                </p>
                            </a>

                            {searchData.map((item, i) => {
                                return (
                            <p className="text-decoration-none text-dark">
                                <p className="fw6 results mb-0 mx-2">{item?.nameOfMedicine}</p>
                            </p>
                            );
                        })}
                            
                        </div>
                        <p className="fw6 results mb-0 mx-sm-2">
                            Please add item (s) to proceed
                        </p>
                    </div>
                </div>
            </div>
            {/* Home and Medicine end */}

            {/* Col 8 and 4 Start */}
            <section className="medicineProduct py-0">
                <div className="container">
                    <div className="row sliderImage">
                        {/* COl 8 */}

                        <>
                            <div className="col-md-12 col-lg-8 ">
                                <div className="row mt-5 mt-lg-0 mt-sm-0">
                                    <div className="col-md-4 mt-4">
                                        {!data || data.length === 0 ? (
                                            <p>Images not available</p>
                                        ) : (
                                            <SliderImage
                                                className="mt-5 d-none "
                                                data={data}
                                                width="200px"
                                                showDescription={false}
                                                // showArrows={false}
                                                zoomDisabled={false}
                                                disableArrowControls={true}
                                            />
                                        )}
                                        <p className="saveCost">Save  {Date.now() > searchData[0]?.dealExpiresIn ? searchData[0]?.discountPercentage : searchData[0]?.newDiscountPercentage}%</p>
                                        
                                    </div>
                                    {searchData.map((item, i) => {
                                        return (
                                            <div className="col-md-8">


                                                <div className="">
                                                    <div className="mt-3"> 
                                                        <p className="mb-0 fw7 doloMed ">
                                                            {item?.nameOfMedicine}
                                                        </p>
                                                        <span className="text-muted">
                                                            {item?.manufacturer}
                                                        </span>
                                                        <p className="fw6">{item?.packingForm}</p>
                                                        <p className="">
                                                            <span className="fw8 ">
                                                                ₹ {Date.now() > item?.dealExpiresIn ? item?.priceToCustomer : item?.newPriceToCustomer}
                                                            </span>
                                                            <span className="px-2 text-muted">
                                                                MRP<s className="px-1 mt-1">{item?.mrp}</s>
                                                            </span>
                                                        </p>
                                                        <p className='PerPara'>Save upto {item?.discountPercentage} %</p>
                                                    </div>

                                                    <div className="mt-4">
                                                        <p className="mb-0">Delivery by {crntWeek} - {nextWeek}</p>
                                                        <div className="row mt-2">
                                                            <div className="col-md-5 align-self-center">
                                                                <div class="select">
                                                                    <select onChange={(e) => { setQuantity(e.target.value) }}>
                                                                        <option className="fw6">
                                                                            {cartQual} Quantity <img src={dropdown} alt="" />
                                                                        </option>
                                                                        <option value="1" >1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                        <option value="5">5</option>
                                                                        <option value="6">6</option>
                                                                        <option value="7">7</option>
                                                                        <option value="8">8</option>
                                                                        <option value="9">9</option>
                                                                        <option value="10">10</option>
                                                                    </select>
                                                                    <div class="select_arrow"></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <button
                                                                    className="btn bgRed w-100 text-white addCrt py-lg-0 py-lg-2 px-lg-0"
                                                                    onClick={() => {
                                                                        addCartFn(item);
                                                                    }}
                                                                >
                                                                    Add to Cart
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <ul
                                    class="nav nav-pills mb-3 navLeftAlign d-none"
                                    id="pills-tab"
                                    role="tablist"
                                >
                                    <li
                                        class="nav-item navCustom d-flex justify-content-lg-start"
                                        role="presentation"
                                    >
                                        {searchData && searchData.length != 0 ? (
                                            searchData[0].imgUrls.map((item, i) => {
                                                return (
                                                    <img
                                                        src={item}
                                                        alt="dolo"
                                                        className="img-fluid px-xl-3 mt-3 doloTab doloImgMed w-50 tst"
                                                        id="pills-profile"
                                                        data-bs-toggle="pill"
                                                        data-bs-target="#pills-profile"
                                                        type="button"
                                                        role="tab"
                                                        aria-controls="pills-profile"
                                                        aria-selected="false"
                                                    />
                                                );
                                            })
                                        ) : (
                                            <h3>No Data Found</h3>
                                        )}
                                    </li>
                                </ul>

                                {/* Dolo 650 MG Description Start */}
                                {searchData.map((item, i) => {
                                    return (
                                        <div className="mt-5">
                                            <h4 className="fw6" id="description" >{item?.medicineName} Description</h4>
                                            <div
                                                className="editor"
                                                dangerouslySetInnerHTML={{ __html: item?.description }}
                                            />
                                            {/* Nav and Tabs */}
                                        </div>
                                    );
                                })}
                                {/* Dolo 650 MG Description End*/}

                                <hr className="mt-5" />

                                {/* Product Summary Start*/}

                                {searchData[0]?.productType == "Medicine" ?
                                    <>
                                        <h4 className="fw6">Product Summary</h4>
                                        <div className="row mt-3">
                                            {searchData.map((item, i) => {
                                                return (
                                                    <div className="col-md-11 bgLightYellow mx-2 py-3">
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 colBrdr">
                                                                <h5 className="fw6">Price</h5>
                                                            </div>
                                                            <div className="col-lg-6 col-md-8">
                                                                <p className="fw6">₹{item?.priceToCustomer}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 colBrdr">
                                                                <h5 className="fw6">You Save</h5>
                                                            </div>
                                                            <div className="col-lg-6 col-md-8">
                                                                <p className="fw6">{item?.discountPercentage}%</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 colBrdr">
                                                                <h5 className="fw6">Contains</h5>
                                                            </div>

                                                            <div className="col-lg-6 col-md-8">
                                                                <div dangerouslySetInnerHTML={{
                                                                    __html: item?.pSContains,
                                                                }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 colBrdr">
                                                                <h5 className="fw6">Uses</h5>
                                                            </div>
                                                            <div className="col-lg-6 col-md-8">
                                                                <div dangerouslySetInnerHTML={{
                                                                    __html: item?.pSUses,
                                                                }}
                                                                ></div>
                                                            </div>

                                                        </div>
                                                        {/* <div className="row">
                                                            <div className="col-lg-3 col-md-4 colBrdr">
                                                                <h5 className="fw6">Side effects</h5>
                                                            </div>
                                                            <div className="col-lg-6 col-md-8">
                                                                <div dangerouslySetInnerHTML={{
                                                                    __html: item?.pSSideEffects,
                                                                }}
                                                                ></div>
                                                            </div>
                                                        </div> */}
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-4 colBrdr">
                                                                <h5 className="fw6">Therapy</h5>
                                                            </div>
                                                            <div className="col-lg-6 col-md-8">
                                                                <div dangerouslySetInnerHTML={{
                                                                    __html: item?.psTherapy,
                                                                }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </>
                                    :
                                    <section className="">
                                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active text-dark navButnClr" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home1" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Benefits</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link text-dark navButnClr" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile2" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Ingredients</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link text-dark navButnClr" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact3" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Uses</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link text-dark navButnClr" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact4" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">How to Use</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link text-dark navButnClr" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact5" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Safety Information</button>
                                            </li>
                                        </ul>
                                        {searchData.map((item, i) => {
                                            return (
                                                <div class="tab-content" id="pills-tabContent">
                                                    <div class="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab">
                                                        <div dangerouslySetInnerHTML={{
                                                            __html: item?.benefits,
                                                        }}
                                                        ></div>

                                                    </div>
                                                    <div class="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                        <div dangerouslySetInnerHTML={{
                                                            __html: item?.ingredients,
                                                        }}
                                                        ></div>
                                                    </div>
                                                    <div class="tab-pane fade" id="pills-contact3" role="tabpanel" aria-labelledby="pills-contact-tab">
                                                        <div dangerouslySetInnerHTML={{
                                                            __html: item?.uses,
                                                        }}
                                                        ></div>
                                                    </div>
                                                    <div class="tab-pane fade" id="pills-contact4" role="tabpanel" aria-labelledby="pills-contact-tab">
                                                        <div dangerouslySetInnerHTML={{
                                                            __html: item?.howToUse,
                                                        }}
                                                        ></div>
                                                    </div>
                                                    <div class="tab-pane fade" id="pills-contact5" role="tabpanel" aria-labelledby="pills-contact-tab">
                                                        <div dangerouslySetInnerHTML={{
                                                            __html: item?.safetyInformation,
                                                        }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </section>
                                }


                                {/* Product Summary end */}

                                {/* Frequently Bought Together Start */}
                                <div className="mt-5 frequentlyMedicine newArrivalRct noBg medicineCard" id="fbt">
                                    <h4 className="fw6 mt-4">Frequently Bought Together</h4>
                                    <div className="bgGray spcaeCarosouel ">
                                        <Slider {...settings}>
                                            {fbiData.map((item, i) => {
                                                if (item != null) {
                                                    return (
                                                        <div>
                                                            <div className="card crd h-100 pstnHelth mx-2 txt-cntr">
                                                                {/* Like button */}
                                                                <div className="likeHghtArrivals">
                                                                    <div className="heartRoundArrivals">
                                                                        <i className="healthmedIConsArrivals likdDiv" onClick={() => { wiseList(item); }}>
                                                                            {
                                                                                localStorage.getItem(item._id) == "true" ? < AiFillHeart /> : <AiOutlineHeart />
                                                                            }
                                                                            {/* <AiOutlineHeart /> */}
                                                                        </i>
                                                                    </div>
                                                                </div>
                                                                {/* Product Image */}
                                                                <div >
                                                                    <div className="heightProductMedicine" onClick={() => { navigate(`/medicine/${item?.nameOfMedicine.split(' ').join('_').toLowerCase()}/${item._id}`); setFlag(!flag); window.scrollTo(0, 0) }}>
                                                                        <img
                                                                            src={item?.imgUrls[0]}
                                                                            alt="thermometer"
                                                                            className="img-fluid d-block mx-auto heartImages"
                                                                        />
                                                                    </div>
                                                                    {/* Product Content */}
                                                                    <div class="card-body" >

                                                                        <div className="saltCompFnt" onClick={() => { navigate(`/medicine/${item?.nameOfMedicine.split(' ').join('_').toLowerCase()}/${item._id}`); setFlag(!flag); window.scrollTo(0, 0) }}>
                                                                            <h6 className="mb-0 fw6">
                                                                                {item?.nameOfMedicine}
                                                                            </h6>
                                                                            <p className="mb-0 rateArrivals">
                                                                                <span className="textRed fw7 mainlRate">
                                                                                    ₹ {Date.now() > item?.dealExpiresIn ? item?.priceToCustomer : item?.newPriceToCustomer}
                                                                                </span>{" "}
                                                                                <s>₹{item?.mrp}</s>
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
                                                }
                                            })}
                                        </Slider>
                                    </div>
                                </div>
                                {/* Frequently Bought Together end */}

                                {/* Nav and Tabs Start */}

                                {searchData[0]?.productType == "Medicine" ?
                                    <section className="navAndTabs">
                                        <ul
                                            class="nav nav-pills mb-3 navCustomMedicine"
                                            id="pills-tab"
                                            role="tablist"
                                        >
                                            <li class="nav-item" role="presentation">
                                                <button
                                                    class="nav-link active text-dark navButnClr"
                                                    id="pills-homeMed-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-homeMed"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-homeMed"
                                                    aria-selected="true"
                                                >
                                                    Medicine Overview
                                                </button>
                                            </li>
                                            <li class="nav-item mx-3" role="presentation">
                                                <button
                                                    class="nav-link text-dark navButnClr "
                                                    id="pills-profileMed-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-profileMed"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-profileMed"
                                                    aria-selected="false"
                                                >
                                                    Instructions
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button
                                                    class="nav-link text-dark navButnClr"
                                                    id="pills-contactMed-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-contactMed"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-contactMed"
                                                    aria-selected="false"
                                                >
                                                    Side effects
                                                </button>
                                            </li>
                                        </ul>

                                        {searchData.map((item, i) => {
                                            return (
                                                <div class="tab-content" id="pills-tabContent">
                                                    <div
                                                        class="tab-pane fade show active"
                                                        id="pills-homeMed"
                                                        role="tabpanel"
                                                        aria-labelledby="pills-homeMed-tab"
                                                    >
                                                        {/* Tab Content Start */}
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: item?.medicineOverview,
                                                            }}
                                                        ></div>
                                                        {/* Tab Content end */}
                                                    </div>
                                                    <div
                                                        class="tab-pane fade"
                                                        id="pills-profileMed"
                                                        role="tabpanel"
                                                        aria-labelledby="pills-profileMed-tab"
                                                    >
                                                        {/* Tab Content Start */}
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: item?.medicineInstructions,
                                                            }}
                                                        ></div>
                                                        {/* Tab Content end */}
                                                    </div>
                                                    <div
                                                        class="tab-pane fade"
                                                        id="pills-contactMed"
                                                        role="tabpanel"
                                                        aria-labelledby="pills-contactMed-tab"
                                                    >
                                                        {/* Tab Content Start */}
                                                        <div
                                                            dangerouslySetInnerHTML={{
                                                                __html: item?.medicineSideEffects,
                                                            }}
                                                        ></div>
                                                        {/* Tab Content end */}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </section>
                                    :
                                    <section className="navAndTabs">
                                    </section>
                                }






                                {/* Nav and Tabs end */}

                                {/* Nav and Tabs Start */}

                                {/* Nav and Tabs End */}


                                {/* Accordian Start */}
                                <div class="accordion acrdianMEd" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button
                                                class="accordion-button navButnClr"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                Frequently Asked Questions
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            class="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            {faqData && faqData.length != 0 ? (
                                                faqData.map((item, i) => {
                                                    return (
                                                        <div class="accordion-body qans">
                                                            <div>
                                                                {/* <h6 className="qans">Question</h6> */}
                                                                <h6 className="fw6 qans"

                                                                ><span>Q{i + 1} :</span>  &nbsp;<div className="MedFAQ" dangerouslySetInnerHTML={{ __html: `${item?.question}` }}></div></h6>
                                                                {/* <h6 className="qans">Answer</h6> */}
                                                                <p className="text-muted qans"

                                                                ><span>A{i + 1}&nbsp;:</span> &nbsp; <div dangerouslySetInnerHTML={{ __html: `${item?.answer}` }}></div></p>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            ) : (
                                                <h3>No FAQ Found</h3>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* Accordian end */}

                                {/* Author Details Start */}
                                <div className="mt-5 author" id="writerandreviewer">
                                    <h4 className="fw6">Instruction</h4>
                                    <div className="row">
                                        <div
                                            className="col-md-6 col-sm-6"

                                        >
                                            <p className="fw6">Written By</p>
                                            <div className="card authorCard">
                                                {writerData.map((item, i) => {
                                                    if (item != null) {
                                                        return (
                                                            <div className="row" onClick={() => { navigate(`/qualification/?type=writer&id=${item?._id}`) }}>
                                                                <div className="col-md-3 col-sm-3 authorTop">
                                                                    <div className="authorImgWdth">
                                                                        <img
                                                                            src={item?.imageUrl}
                                                                            alt="author"
                                                                            className="img-fluid mx-2"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-9 col-sm-9">
                                                                    <h4 className="textRed authorName">
                                                                        {item?.name}
                                                                    </h4>
                                                                    <p className="fw5">{item?.qualification}</p>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>

                                        <div
                                            className="col-md-6 col-sm-6 rev"

                                        >
                                            <p className="fw6">Reviewed By</p>
                                            <div className="card authorCard" >
                                                {reviewData.map((item, i) => {
                                                    if (item != null) {
                                                        return (
                                                            <div className="row" onClick={() => { navigate(`/qualification/?type=reviewer&id=${item._id}`) }}>
                                                                <div className="col-md-3 col-sm-3 authorTop" >
                                                                    <div className="authorImgWdth">
                                                                        <img
                                                                            src={item?.imageUrl}
                                                                            alt="author"
                                                                            className="img-fluid mx-2"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-9 col-sm-9">
                                                                    <h4 className="textRed authorName">
                                                                        {item?.name}
                                                                    </h4>
                                                                    <p className="fw5 paraHeight">{item?.qualification}</p>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Author Details end */}

                                {/* Disclaimer Start*/}
                                <div className="mt-5">
                                    <h5 className="fw5">Disclaimer</h5>
                                    {searchData.map((item, i) => {
                                        return (
                                            <p
                                                className="text-muted fw4 textJustify"
                                                dangerouslySetInnerHTML={{ __html: item?.desclaimer }}
                                            ></p>
                                        );
                                    })}
                                </div>

                                {/* Frequently Bought Together Start */}
                                <div className="mt-5 frequentlyMedicine newArrivalRct noBg mb-5 previously" id="pbi">
                                    <h4 className="fw6 mt-4">Previously Browsed Items</h4>
                                    <div className="bgGray spcaeCarosouel ">
                                        <Slider {...settings}>
                                            {pbiData.map((item, i) => {
                                                if (item != null) {
                                                    return (
                                                        <div>
                                                            <div className="card crd h-100 pstnHelth mx-2">
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
                                                                <div >
                                                                    {/* Product Image */}
                                                                    <div className="heightProductMedicine" onClick={() => { navigate(`/medicine/${item?.nameOfMedicine.split(' ').join('_').toLowerCase()}/${item._id}`); setFlag(!flag); window.scrollTo(0, 0) }}>
                                                                        <img
                                                                            src={item?.imgUrls[0]}
                                                                            alt="thermometer"
                                                                            className="img-flu100 w-100 d-block mx-auto"
                                                                        />
                                                                    </div>
                                                                    {/* Product Content */}
                                                                    <div class="card-body hgt-100P text-center">
                                                                        <div className="saltCompFnt" onClick={() => { navigate(`/medicine/${item?.nameOfMedicine.split(' ').join('_').toLowerCase()}/${item._id}`); setFlag(!flag); window.scrollTo(0, 0) }}>
                                                                            <h6 className="mb-0 fw6">
                                                                                {item?.nameOfMedicine}
                                                                            </h6>
                                                                            <p className="mb-0 rateArrivals">
                                                                                <span className="textRed fw7 mainlRate">
                                                                                    ₹ {Date.now() > item?.dealExpiresIn ? item?.priceToCustomer : item?.newPriceToCustomer}
                                                                                </span>{" "}
                                                                                <s>₹{item?.mrp}</s>
                                                                            </p>
                                                                            <p className='PerPara'>Save upto {item?.discountPercentage} %</p>
                                                                        </div>
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
                                                    );
                                                }
                                            })}
                                        </Slider>
                                    </div>
                                </div>
                                {/* Frequently Bought Together end */}
                            </div>
                            {/* Disclaimer end*/}

                            {/* Col 4 */}
                            <div className="col-md-12 col-lg-4 mt-md-5">
                                {/* 3 Items in cart */}
                                <div>
                                    {/* <h4 className="fw6">3 Items in Cart</h4> */}
                                    <Link to="/cart"
                                        className="btn bgRed w-100 text-center text-white text-uppercase fw6 py-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0"

                                    >
                                        View Cart{""}
                                        <span>
                                            <FiChevronsRight />
                                        </span>
                                    </Link>
                                </div>
                                {/* Quick Links */}
                                <div className="mt-4">
                                    <h4 className="fw6 ">Quick Links</h4>
                                    <div className="mt-2">
                                        <a href="#description" className="text-decoration-none text-muted">#Description</a>
                                        <a href="#fbt" className="text-decoration-none text-muted px-2">

                                            #FrequentlyBoughtTogether
                                        </a>
                                        <a href="#pills-homeMed-tab" className="text-decoration-none text-muted px-2">
                                            #Overview
                                        </a>
                                        <a href="#accordionExample" className="text-decoration-none text-muted px-2">
                                            #faq
                                        </a>
                                        <br></br>
                                        <a href="#pbi" className="text-decoration-none text-muted px-2">
                                            #PreviouslyBrowsedItems
                                        </a>
                                        <a href="#writerandreviewer" className="text-decoration-none text-muted px-2">
                                            #Writer
                                        </a>
                                        <a href="#writerandreviewer" className="text-decoration-none text-muted px-2">
                                            #Reviewer
                                        </a>


                                    </div>
                                </div>
                                <hr />
                                {/* Offers Just For You */}
                                {/* Offer 1 */}
                                {/* <h4 className='fw6'>Offers Just For You</h4>

                                        <div className="row mt-3 mb-3">
                                            <div className="col-md-6 col-sm-6 col-lg-12">
                                                <div className="card offerCard">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-3 align-self-center ">
                                                            <img src={offer1} alt="offer" className='img-fluid mx-3 mt-xl-0 mt-lg-0' />
                                                        </div>
                                                        <div className="col-xl-9 col-lg-9 col-md-9 col-9 py-2 align-self-center">
                                                            <h5 className='px-3'>Get FLAT Rs.350 OFF on orders above Rs 1499</h5>
                                                            <p className='fontMontserrat fw6 px-3'>Code : AB54C1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-lg-12 offSpcae offSpaceZero">
                                                <div className="card offerCard">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-3 align-self-center ">
                                                            <img src={offer1} alt="offer" className='img-fluid mx-3 mt-xl-0 mt-lg-0' />
                                                        </div>
                                                        <div className="col-xl-9 col-lg-9 col-md-9 col-9 py-2 align-self-center">
                                                            <h5 className='px-3'>Get FLAT Rs.350 OFF on orders above Rs 1499</h5>
                                                            <p className='fontMontserrat fw6 px-3'>Code : AB54C1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-lg-12 offSpcae">
                                                <div className="card offerCard">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-3 align-self-center ">
                                                            <img src={offer1} alt="offer" className='img-fluid mx-3 mt-xl-0 mt-lg-0' />
                                                        </div>
                                                        <div className="col-xl-9 col-lg-9 col-md-9 col-9 py-2 align-self-center">
                                                            <h5 className='px-3'>Get FLAT Rs.350 OFF on orders above Rs 1499</h5>
                                                            <p className='fontMontserrat fw6 px-3'>Code : AB54C1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-lg-12 offSpcae">
                                                <div className="card offerCard">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-3 align-self-center ">
                                                            <img src={offer1} alt="offer" className='img-fluid mx-3 mt-xl-0 mt-lg-0' />
                                                        </div>
                                                        <div className="col-xl-9 col-lg-9 col-md-9 col-9 py-2 align-self-center">
                                                            <h5 className='px-3'>Get FLAT Rs.350 OFF on orders above Rs 1499</h5>
                                                            <p className='fontMontserrat fw6 px-3'>Code : AB54C1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                            </div>
                        </>
                    </div>
                </div>
            </section>
            {/* Col 8 8 and 4 End */}
        </div>
    );
};

export default Medicine;

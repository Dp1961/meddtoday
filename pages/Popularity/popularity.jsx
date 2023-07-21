import React, { useEffect, useState } from "react";
import "./popularity.css";
import search from "../../assets/images/search.png";
import dropdown from "../../assets/images/dropdown.png";
import tonic from "../../assets/images/tonic.png";
import like from "../../assets/images/like.png";
import sonic from "../../assets/images/sonic.png";
import likeButton from "../../assets/images/likeButton.png";
import withstar from "../../assets/images/withstar.png";
import withoutStar from "../../assets/images/withoutStar.png";
import leftbgWhite from "../../assets/images/leftbgWhite.png";
import rightbgwhite from "../../assets/images/rightbgwhite.png";
import returns from "../../assets/images/returns.png";
import checkout from "../../assets/images/checkout.png";
import delivery from "../../assets/images/delivery.png";
import support from "../../assets/images/support.png";
import rightArrrow from "../../assets/images/rightArrrow.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import layermask from "../../assets/images/layermask.png";
import sugar from "../../assets/images/sugar.png";
import heater from "../../assets/images/heater.png";
import Helper from "../../helper/axiosHelper";
import { useLocation } from "react-router-dom";
import {
  getProductListCb,
  getFilterParamsCb,
  getProductByTypeCb,
  getSimilarCb,
  getAllSpecialityFilter,
  rename
} from "../../redux/product";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loader } from "../../redux/common";
import { useNavigate, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { addRmvFavCb } from "../../redux/customerApi";
import { addtoCartCb } from "../../redux/cart";
import { getNewArrivalsCb, getsearchProductCb } from "../../redux/product";
import { Link } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { InputGroup, Input, InputGroupText } from 'reactstrap';
import { AiOutlineSearch } from 'react-icons/ai';


function Popularity() {

  let productReferenceMap = new Map([]);


  const [currentPage, setCurrentPage] = useState(null);
  let [categoryItems, setCategoryItems] = React.useState([]);
  let [specialityItems, setSpecialityItems] = React.useState([]);
  let [popularityAuthStatus, setPopularityAuthStatus] = React.useState(false);
  let [totalPages, setTotalPages] = React.useState();
  let [clearFilter, setClerFilter] = React.useState(false);
  let sortByselector = React.useRef();

  // Price ref
  {/* Below commented codes are price filter code, it is need in future. dont delete these */ }
  // let below99Ref = React.useRef();
  // let price100_199Ref = React.useRef();
  // let price200_299Ref = React.useRef();
  // let price300_399Ref = React.useRef();
  // let price400_499Ref = React.useRef();

  // // Speciality ref
  let CategoryRef = React.useRef();
  let specialityRef = React.useRef();

  let [pagenationChecker, setPagenationChecker] = React.useState(true);
  // let [sortByPopularityBackup]


  let { currentProductList } = useSelector(state => state.backupReducer);

  let { favoriteProductIdObject } = useSelector(state => state.backupReducer);




  // const totalPages = 3;

  const handlePageChange = (page) => {
    var url = new URL(window.location.href);
    url.searchParams.set("page", page);

    window.history.pushState({}, '', url.toString());
    setCurrentPage(page);
    clearAllFilter()
  };



  function clearAllFilter() {
    sortByselector.current.value = "Popularity"
    CategoryRef.current.checked = false
    specialityRef.current.checked = false

    const checkboxes = document.querySelectorAll('.Ref');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    setClerFilter(!clearFilter);
    setPagenationChecker(true)
  }

  // sort methods happens below

  function handleSelectChange(event) {
    let backupArr = [...productList]
    if (event.target.value == "Low to High") {
      // sort in assending
      const assendSortedArray = [...productList].sort((a, b) => a.priceToCustomer - b.priceToCustomer);
      setProductList(assendSortedArray);
    }
    else if (event.target.value == "High to Low") {
      // sort in desending
      const dessendSortedArray = [...productList].sort((a, b) => b.priceToCustomer - a.priceToCustomer);
      setProductList(dessendSortedArray);
    } else if (event.target.value === "A to Z") {
  // Sort in ascending order
  const ascendingSortedArray = [...productList].sort((a, b) => {
    const nameA = a.nameOfMedicine.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
    const nameB = b.nameOfMedicine.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  setProductList(ascendingSortedArray);
} else if (event.target.value === "Z to A") {
  // Sort in descending order
  const descendingSortedArray = [...productList].sort((a, b) => {
    const nameA = a.nameOfMedicine.toUpperCase(); 
    const nameB = b.nameOfMedicine.toUpperCase();
    if (nameA > nameB) {
      return -1; // Return -1 for descending order
    }
    if (nameA < nameB) {
      return 1; // Return 1 for ascending order
    }
    return 0;
  });
  setProductList(descendingSortedArray);
}

    else {
      // sort by Popularity
      // setProductList(backupArr);
      // setClerFilter(!clearFilter);
      clearAllFilter()
    }
  }

  function filterWithPrice(idNumber, event) {
    let labelId = `checkboxNoLabel-${idNumber}`
    let labelEle = document.querySelector("label[for='" + labelId + "']");
    let label = labelEle.innerText
    // console.log(label, "hey sundar check is this you need?")
    if (event.target.checked) {
      filterWithTrue(label);
    } else {
      filterWithFalse(label)
    }
  }

  function filterWithTrue(label) {
    // labelFilterArray = [...labelFilterArray,label];

    setPagenationChecker(false)
    let localStorageArray = localStorage.getItem("globalTrueFilterArray").split(",");
    localStorageArray = [...localStorageArray, label]
    localStorage.setItem("globalTrueFilterArray", localStorageArray);

    let filteredArr = [];
    productReferenceMap = new Map();
    // finding for speciality
    for (let i = 0; i < productList.length; i++) {

      if (productList[i].speciality.includes(label) && productReferenceMap.has(productList[i]._id) == false) {
        filteredArr.push(productList[i])
        productReferenceMap.set(productList[i]._id, true)
      }
    }
    // finding for categry
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].category.includes(label) && productReferenceMap.has(productList[i]._id) == false) {
        filteredArr.push(productList[i])
        productReferenceMap.set(productList[i]._id, true)
      }
    }

    // for price list
    {/* Below commented codes are price filter code, it is need in future. dont delete these */ }

    // if (label === "Below 99") {
    //   for (let i = 0; i < productList.length; i++) {
    //     if (productList[i].priceToCustomer < 99 && productReferenceMap.has(productList[i]._id) == false) {
    //       filteredArr.push(productList[i])
    //       productReferenceMap.set(productList[i]._id, true)
    //     }
    //   }
    // }

    // if (label === "100-199") {
    //   for (let i = 0; i < productList.length; i++) {
    //     if (productList[i].priceToCustomer >= 100 && productList[i].priceToCustomer <= 199 && productReferenceMap.has(productList[i]._id) == false) {
    //       filteredArr.push(productList[i])
    //       productReferenceMap.set(productList[i]._id, true)
    //     }
    //   }
    // }

    // if (label === "200-299") {
    //   for (let i = 0; i < productList.length; i++) {
    //     if (productList[i].priceToCustomer >= 200 && productList[i].priceToCustomer <= 299 && productReferenceMap.has(productList[i]._id) == false) {
    //       filteredArr.push(productList[i])
    //       productReferenceMap.set(productList[i]._id, true)
    //     }
    //   }
    // }
    // if (label === "300-399") {
    //   for (let i = 0; i < productList.length; i++) {
    //     if (productList[i].priceToCustomer >= 300 && productList[i].priceToCustomer <= 399 && productReferenceMap.has(productList[i]._id) == false) {
    //       filteredArr.push(productList[i])
    //       productReferenceMap.set(productList[i]._id, true)
    //     }
    //   }
    // }

    // if (label === "400-499") {
    //   for (let i = 0; i < productList.length; i++) {
    //     if (productList[i].priceToCustomer >= 400 && productList[i].priceToCustomer <= 499 && productReferenceMap.has(productList[i]._id) == false) {
    //       filteredArr.push(productList[i])
    //       productReferenceMap.set(productList[i]._id, true)
    //     }
    //   }
    // }
    setProductList(filteredArr);
    // console.log(filteredArr)
    return
  }

  function filterWithFalse(unmountLabel) {
    let localStorageArray = localStorage.getItem("globalTrueFilterArray").split(",");
    if (localStorageArray[0] == '') {
      localStorageArray.splice(0, 1);
    }
    for (let i = 0; i < localStorageArray.length; i++) {
      if (unmountLabel == localStorageArray[i]) {
        localStorageArray.splice(i, 1);
        localStorage.setItem("globalTrueFilterArray", localStorageArray)
      }
    }
    let filteredArr = [];
    var test = currentProductList.data
    let patch = null;

    for (let j = 0; j < localStorageArray.length; j++) {
      let label = localStorageArray[j];
      // finding speciality
      if (j != 0) {
        test = patch
        filteredArr = [];
        productReferenceMap = new Map([]);
      } else {
        test = currentProductList.data
      }
      for (let i = 0; i < test.length; i++) {
        if (test[i].speciality.includes(label) && productReferenceMap.has(test[i]._id) == false) {
          filteredArr.push(test[i])
          productReferenceMap.set(test[i]._id, true)
        }
      }

      // finding for categry
      for (let i = 0; i < test.length; i++) {
        if (test[i].category.includes(label) && productReferenceMap.has(test[i]._id) == false) {
          filteredArr.push(test[i])
          productReferenceMap.set(test[i]._id, true)
        }
      }

      // for pricing 
      {/* Below commented codes are price filter code, it is need in future. dont delete these */ }

      // if (label === "Below 99") {
      //   for (let i = 0; i < test.length; i++) {
      //     if (test[i].priceToCustomer < 99 && productReferenceMap.has(test[i]._id) == false) {
      //       filteredArr.push(test[i])
      //       productReferenceMap.set(test[i]._id, true)
      //     }
      //   }
      // }


      // if (label === "100-199") {
      //   for (let i = 0; i < test.length; i++) {
      //     if (test[i].priceToCustomer >= 100 && test[i].priceToCustomer <= 199 && productReferenceMap.has(test[i]._id) == false) {
      //       filteredArr.push(test[i])
      //       productReferenceMap.set(test[i]._id, true)
      //     }
      //   }
      // }
      // if (label === "200-299") {
      //   for (let i = 0; i < test.length; i++) {
      //     if (test[i].priceToCustomer >= 200 && test[i].priceToCustomer <= 299 && productReferenceMap.has(test[i]._id) == false) {
      //       filteredArr.push(test[i])
      //       productReferenceMap.set(test[i]._id, true)
      //     }
      //   }
      // }
      // if (label === "300-399") {
      //   for (let i = 0; i < test.length; i++) {
      //     if (test[i].priceToCustomer >= 300 && test[i].priceToCustomer <= 399 && productReferenceMap.has(test[i]._id) == false) {
      //       filteredArr.push(test[i])
      //       productReferenceMap.set(test[i]._id, true)
      //     }
      //   }
      // }
      // if (label === "400-499") {
      //   for (let i = 0; i < test.length; i++) {
      //     console.log(productReferenceMap.has(test[i]._id) == false)
      //     if (test[i].priceToCustomer >= 400 && test[i].priceToCustomer <= 499 && productReferenceMap.has(test[i]._id) == false) {
      //       filteredArr.push(test[i])
      //       productReferenceMap.set(test[i]._id, true)
      //     }
      //   }
      // }
      if (j == 0) {
        patch = filteredArr
      }
    }
    if (localStorageArray.length == 0) {
      setProductList(test)
      setPagenationChecker(true)
      return
    }
    setProductList(filteredArr)
  }





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




  // const location = useLocation();
  const dispatch = useDispatch();
  const [arrivalsData, setArrivalsData] = useState([]);
  const [productList, setProductList] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [filterParams, setFilterParams] = useState([]);
  const isLoginStatus = useSelector((state) => state.apiReducer.isLogin);
  const [similarData, setSimilarData] = useState([]);
  const [query, setQuery] = useState('');
  const { id1, id2, id3 } = useParams()
  const navigate = useNavigate();

  // const [inputValue, setInputValue] = useState('');

  // const wiseList = (e) => {
  //   dispatch(loader(true));
  //   var data = { productId: e._id };
  //   dispatch(
  //     addRmvFavCb(data, (res) => {
  //       if (res.status) {
  //         dispatch(loader(false));
  //       } else {
  //         dispatch(loader(false));
  //         toast.error(res.message);
  //       }
  //     })
  //   );
  // };


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
      // dispatch(cusFavLstCb(()=>{}));

    } else {
      toast.error("Please Login to add cart");
    }
  };

  



  useEffect(() => {
    window.scrollTo(0, 0)
    const mykeysValues = window.location.search;
    // console.log(mykeysValues, "keyValues");

    console.log(id1,'id1');
    // console.log(id2,'id1');
    console.log(id3,'id1');

    const speci = id2.split('_').join(' ')
    console.log(speci,'id1');
    
    var reqBody = {};

    reqBody["page"] = Number(id3);

    if (speci == "all") {
      setFilterType(id1);
      setFilterValue("All category");
      dispatch(
        getProductListCb(reqBody, (resp) => {
          if (resp.status) {
            setProductList(resp.data);
            setTotalPages(resp.noOfPage)
          } else {
            toast.error(resp.message);
          }
        })
      );
    } else if (speci == "allSpeciality") {
      setFilterType(id1);
      setFilterValue("All Speciality");
      reqBody["productType"] = "Medicine";
      dispatch(
        getProductByTypeCb(reqBody, (resp) => {
          if (resp.status) {
            setProductList(resp.data);
            setTotalPages(resp.noOfPage)
          } else {
            toast.error(resp.message);
          }
        })
      );
    } else if (speci == "allProducts") {
      setFilterType(id1);
      setFilterValue("All products");
      reqBody["productType"] = "FMCG";
      dispatch(
        getProductByTypeCb(reqBody, (resp) => {
          if (resp.status) {
            setProductList(resp.data);
            setTotalPages(resp.noOfPage)
          } else {
            toast.error(resp.message);
          }
        })
      );
    }
    else {
      setFilterType(id1);
      setFilterValue(speci);
      reqBody[id1] = speci;

      dispatch(
        getProductListCb(reqBody, (resp) => {
          if (resp.status) {
            setProductList(resp.data);
            setTotalPages(resp.noOfPage)
          } else {
            toast.error(resp.message);
          }
        })
      );
    }
    setCurrentPage(new URL(window.location.href).searchParams.get("page"));
    localStorage.setItem("globalTrueFilterArray", []);
    window.scrollTo(0, 0)

  }, [window.location.search, clearFilter, id2]);

  
  const productSerach = () =>{
    const mykeysValues = window.location.search;
    const urlParams = new URLSearchParams(mykeysValues);
    const params1 = urlParams.get("subtype");
    const params2 = urlParams.get("page");
    
    dispatch(loader(true));
    var data = {
      "category": params1,
      "nameOfMedicine" : query.trim( ),
      "page" : 1

  }
    dispatch(getsearchProductCb(data, (res) =>{

      if (res.status) {
        setProductList(res.data);
        setTotalPages(res.noOfPage)
        dispatch(loader(false));
      } else {
        dispatch(loader(false));
        toast.error(res.message);
      }
      
    }))

  }
 
  useEffect(() => {
    dispatch(
      getFilterParamsCb((resp) => {
        // console.log(resp, "resp");
        if (resp.status) {
          setFilterParams(resp.data);
        } else {
          toast.error(resp.message);
        }
      })
    );
    dispatch(
      getNewArrivalsCb((resp) => {
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
      })
    );

    dispatch(
      getAllSpecialityFilter((resp) => {
        if (resp.status) {
          setSpecialityItems(resp.specialities || []);
          setCategoryItems(resp.categories || []);
          setPopularityAuthStatus(resp.status || false);
        } else {
          setPopularityAuthStatus(false);
        }
      })
    );
    window.scrollTo(0, 0)
  }, [clearFilter]);


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


  const handleRedirect = (url) => {
    navigate(url);
    window.scrollTo(0, 0);
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

  useEffect(() => {
  }, [productList])



  return (
    <div>
      <div className="pt-0 homeMed">
        <div className="container bgLightYellow">
          <div className="d-flex px-md-4 py-3 wrapPPl">
            <Link to="/" className="text-decoration-none text-dark">
              <p className="fw6 results mb-0">
                Home <img src={rightArrrow} alt="" className="img-fluid" />
              </p>
            </Link>
            <a className="text-decoration-none text-dark">
              <p className="fw6 results mb-0 ">
                {filterType}{" "}
                <img src={rightArrrow} alt="" className="img-fluid" />
              </p>
            </a>
            <a className="text-decoration-none text-dark">
              <p className="fw6 results mb-0  mt-sm-0 mt-md-0">{filterValue.split('_').join(' ')}</p>
            </a>
          </div>
        </div>
      </div>
      {/* Home and Medicine end */}

      {/* Filter Start */}
      <section className="filter">
        <div className="container bgGray p-3 py-5">
          {/* ROW ONE */}
          <div className="row">

          
            <div className="col-lg-12 col-md-12  addToCart colTopSpcPpl">
              {/* Covid Essentials and Popularity */}
              <div className="d-sm-flex justify-content-between mt-sm-4 mt-md-0">
                <div className="col-md-3">
                  <h4 className="align-self-sm-center px-sm-1">{filterValue.split('_').join(' ')}</h4>
               
               
                  <InputGroup>


                    <Input className="filterSeach" placeholder="Search Products" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <InputGroupText className="filterSeach" onClick={productSerach} >
                       <AiOutlineSearch />
                    </InputGroupText>

                  </InputGroup>
                 
                  </div>
                <div className="d-sm-flex">
                  <div className="mx-sm-3 pt-2">
                    <p className="fw5">Sort by</p>
                  </div>
                  <div className="">
                    <div class="select">
                      <select onChange={handleSelectChange} ref={sortByselector}>
                        <option className="fw6" >Popularity</option>
                        <option>High to Low</option>
                        <option>Low to High</option>
                        <option>A to Z</option>
                        <option>Z to A</option>
                      </select>
                      <div class="select_arrow"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Produts */}
              <div className="row products justify-content-center justify-content-sm-start">
                {productList && productList.length != 0 ? (
                  productList.map((item, i) => {
                    return (
                      <div
                        className="col-xl-3 col-12 col-lg-4 col-md-4 col-sm-6 popularityCol mt-5"
                      // onClick={() => {
                      //   navigate(`/medicine/${item._id}`, {
                      //     state: { id: item._id },
                      //   });
                      // }}
                      >
                        <div className="card crd h-100 pstnHelth txt-cntr">
                          {/* Like button */}
                          <div className="likeHghtArrivals">
                            <div className="heartRoundArrivals" onClick={() => {
                              wiseList(item);
                            }}>
                              <i className="healthmedIConsArrivals likdDiv">
                                {
                                  localStorage.getItem(item._id) == "true" ? < AiFillHeart /> : <AiOutlineHeart />
                                }
                                {/* <AiOutlineHeart /> */}
                              </i>
                            </div>
                          </div>
                          {/* Product Image */}
                          <div className="heightProduct" onClick={() => { handleRedirect(`/medicine//${item?.nameOfMedicine.split(' ').join('_').toLowerCase()}/${item._id}`); }}>
                            <img
                              src={item?.imgUrls[0]}
                              alt="thermometer"
                              className="img-flu100 w-100 d-block mx-auto"
                            />
                          </div>
                          {/* Product Content */}
                          <div class="card-body crdBdypplrity">
                            <div className="saltCompFnt" onClick={() => { handleRedirect(`/medicine/${item?.nameOfMedicine.split(' ').join('_').toLowerCase()}/${item._id}`); }}>
                              <h6 className="mb-0 fw6">
                                {item?.nameOfMedicine}
                              </h6>
                              <p className="mb-0 rateArrivals">
                                <span className="textRed fw7 mainlRate">
                                  ₹ {item?.priceToCustomer}
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
                          {/* <div class="card-body">
                          <p className="saveCost2 bgYellow p-1">Save 15%</p>
                  <h4 className="fw6 mt-3 bracia ">Bracia Sachet</h4>
                  <div className="d-flex">
                    <s className=" strikeRate align-self-center fw5">₹990</s>
                    <h4 className=" mx-2 mt-1 fw6 textRed">₹400</h4>
                  </div>
                  <button class="btn bg-warning fw-bold crdBtnHealth">
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
                 </div> */}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h3 className="PopPAgeNoPRDuct">No Product Found</h3>
                )}
              </div>
            </div>
          </div>

          {/* pageNation Happens Here */}
          {
            pagenationChecker ? <div className="d-flex justify-content-center mt-5">
              <Stack spacing={2}>
                <Pagination count={totalPages} onChange={(event, pageNumber) => handlePageChange(pageNumber)} defaultPage={currentPage} />
              </Stack>
              {/* <PaginationLink/> */}
            </div> : ""
          }

        </div>
      </section>
      {/* Filter end */}

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

      {/* Health Supplements Start */}
      <section className="newArrivalsNew newArrivalRct">
        <div className="container">
          <h1 className="text-center mt-3 fw-bold">New arrivals</h1>
          <Slider {...settings}>
            {arrivalsData.map((item, i) => {
              return (
                <div>
                  <div className="card crd h-100 pstnHelth mx-2">
                    {/* Like button */}
                    <div className="likeHghtArrivals">
                      <div className="heartRoundArrivals">
                        <i
                          className="healthmedIConsArrivals likdDiv"
                          onClick={() => {
                            wiseList(item);
                          }}
                        >
                          {
                            // refArr.includes(item._id) ? 
                            localStorage.getItem(item._id) == "true" ? < AiFillHeart /> : <AiOutlineHeart />
                          }
                          {/* <AiOutlineHeart /> */}
                        </i>
                      </div>
                    </div>
                    {/* Product Image */}
                    <div>
                      <div
                        className="heightProduct"
                        onClick={() => {
                          handleRedirect(`/medicine/${item?.nameOfMedicine.split(' ').join('_').toLowerCase()}/${item._id}`);
                        }}
                      >
                        <img
                          src={item?.imgUrls[0]}
                          alt="thermometer"
                          className="img-fluid d-block mx-auto"
                        />
                      </div>
                      {/* Product Content */}
                      <div class="card-body">
                        <div className="saltCompFnt" onClick={() => { handleRedirect(`/medicine/${item?.nameOfMedicine.split(' ').join('_').toLowerCase()}/${item._id}`); }}>
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
                          <button
                            class="btn bg-warning fw-bold crdBtnArrivals"
                            onClick={() => {
                              addCartFn(item);
                            }}
                          >
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
      <section className="py-0">
        <div class="container">
          {/* <!-- Medicine and Wellness --> */}
          <div class="row justify-content-center  py-5">
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

      {/* Lichensed Pharmacy Start */}
      {/* <section>
        <div className="container">
          <p className="lichensed fw6">
            A licensed pharmacy would be delivering your order basis
            availability of product & fastest delivery. Prices are indicative
            and may change after billing. PharmEasy is a technology platform to
            connect sellers and buyers and is not involved in sales of any
            product. Offer for sale on the products and services are
            provided/sold by the sellers only. For detail read Terms and
            Conditions
          </p>
        </div>
      </section> */}
      {/* Lichensed Pharmacy End */}
    </div>
  );
}

export default Popularity;

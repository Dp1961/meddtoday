import React from 'react'
import "./onlinemedicine.css"
import location from "../../assets/images/location.png"
import search from "../../assets/images/search.png"
import chevrondown from "../../assets/images/chevrondown.png"
import file from "../../assets/images/file.png"
import medications from "../../assets/images/medications.png"
import get from "../../assets/images/get.png"
import upLoad from "../../assets/images/upLoad.png"
import offer1 from "../../assets/images/offer1.png"
import offer2 from "../../assets/images/offer2.png"
import withstar from "../../assets/images/withstar.png"
import withoutStar from "../../assets/images/withoutStar.png"
import leftbgWhite from "../../assets/images/leftbgWhite.png"
import rightbgwhite from "../../assets/images/rightbgwhite.png"
import returns from "../../assets/images/returns.png"
import checkout from "../../assets/images/checkout.png"
import delivery from "../../assets/images/delivery.png"
import support from "../../assets/images/support.png"
import rightArrrow from '../../assets/images/rightArrrow.png'
import { BsChevronDown } from 'react-icons/bs'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useState } from 'react';
import { BiSearch, BiSearchAlt2 } from 'react-icons/bi';
import onLine from '../../assets/images/onLine.png'
const Onlinemedicine = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    navigate(`/Searchmed/${query}`);
  }



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
  return (
    <div className='onlinemedicine'>
      {/* Banner Start */}
      <section className='pt-0 bannerOnlineMed'>
        <div className="container">
          {/* Banner Start */}
          <div className='d-flex bgLightYellow homeAddress'>
            <h4 className='mx-3'><a className='text-decoration-none text-dark fw6'>Home <img src={rightArrrow} alt="" className='img-fluid mx-1' /> </a></h4>
            <h4 className='fw6'><a className='text-decoration-none text-dark mt-2 '>Order with Prescription</a></h4>
          </div>
          {/* Banner end */}
          <div className='bgYellow pb-5 yellowBg pt-3'>
            <h1 className='text-center fw-bold pt-3 orderMed'>Order Medicines Online</h1>
            <div className='d-flex justify-content-center productOffer'>
              <p className='fw6 bnrOff'>Flat 85% Off</p>
              <p className='hifan hifanSpc1'>-</p>
              <p className='mx-md-5 fw6 bnrOff'>10k + Brands</p>
              <p className='hifan hifanSpc2'>-</p>
              <p className='fw6 bnrOff'>Assured Delivery </p>
            </div>
            {/* <!-- Input --> */}
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div class="row justify-content-center inPut rowSpace">
                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <p className='fw6  fontMontserrat medicinePra'>Search for Medicines / Healthcare Products</p>
                    <div class="form-floating d-flex srchFrm">
                      {/* <div class="dropdown">
                                                <button class="dropbtn d-flex h-100">
                                                    <img src={location} alt="location" className='px-1 citiesNames' /><span className='mt-1 d-flex'>Chennai
                                                    <i className='downArw2'><BsChevronDown/></i> </span>
                                                </button>
                                                <div class="dropdown-content">
                                                    <a >Trichy</a>
                                                    <a >Hyderabad</a>
                                                    <a >Kochin</a>
                                                </div>
                                            </div> */}
                      {/* <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} class="form-control search1" placeholder="Search for Medicines and Health Products" id="floatingTextarea2"></input> */}
                      {/* <input type="text" className='form-control' placeholder='Search for Medicines and Health Products' value={query} onChange={(e) => setQuery(e.target.value)} />

                      <span className='searchOnlineMed '><BiSearch className='srchIcon' onClick={handleSearch} /></span> */}

                      <form className='w-100 bnrFrm'>
                        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} class="form-control search1 py-3 w-100" placeholder="Search for Medicines and Healthcare" id="floatingTextarea2"></input>
                        {/* <img src={search} alt="" className='search2' onClick={handleSearch} /> */}
                        <button type='submit' onClick={handleSearch} className='btn bg-transparent ' /><BiSearchAlt2 className='textRed seacrhIcon curserPointer' onClick={handleSearch} />
                        <button />
                      </form>

                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12 col-sm-12 orderNow mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0">
                    <p className='fw6 fontMontserrat medicinePra mt-md-4 mt-lg-0'>I have Prescription then,</p>
                    <div className='d-flex btn-group topMargin'>
                      <button className='btn bgRed border-0 text-white text-uppercase fontMontserrat describe' onClick={() => { navigate("/prescription") }}>Order with Prescription</button>
                      {/* <label for="file-upload" className="custom-file-upload text-uppercase d-flex">
                                                <img src={file} alt="file" className='img-fluid mx-1 fileImg' /><span className='fw6 uploadFilee align-self-center'>Upload File</span>
                                            </label>
                                            <input id="file-upload" type="file" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* All offers */}
        </div>
      </section>
      {/* Banner end */}

      {/* Offer start */}
      {/* <section className='offers'>
                <div className="container">
                    <h3 className='fw-bold'>All Offers</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row offerRowTop">
                                <div className="col-md-6 col-lg-3 col-xl-3 col-sm-6 allOfrBg">
                                    <div className="card p-2">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-12 col-md-4 col-4 align-self-center ">
                                                <img src={offer1} alt="offer" className='img-fluid mx-3' />
                                            </div>
                                            <div className="col-xl-8 col-lg-12 col-md-8 col-8 py-2 offerRowTop align-self-md-center">
                                                <p className='px-3 fontMontserrat'>Get FLAT Rs.350 OFF on orders above Rs 1499</p>
                                                <h6 className='fontMontserrat fw6 px-3'>Code : AB54C1</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 col-xl-3 col-sm-6 allOfrBg mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0 mt-sm-0">
                                    <div className="card p-2">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-12 col-md-4 col-4 align-self-center ">
                                                <img src={offer2} alt="offer" className='img-fluid mx-3' />
                                            </div>
                                            <div className="col-xl-8 col-lg-12 col-md-8 col-8 py-2 offerRowTop">
                                                <p className='px-3 fontMontserrat'>Get FLAT Rs.350 OFF on orders above Rs 1499</p>
                                                <h6 className='fontMontserrat fw6 px-3'>Code : AB54C1</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 col-xl-3 col-sm-6 allOfrBg mt-3 mt-md-3 mt-lg-0 mt-xl-0 mt-xxl-0">
                                    <div className="card p-2">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-12 col-md-4 col-4 align-self-center ">
                                                <img src={offer1} alt="offer" className='img-fluid mx-3' />
                                            </div>
                                            <div className="col-xl-8 col-lg-12 col-md-8 col-8 py-2 offerRowTop">
                                                <p className='px-3 fontMontserrat'>Get FLAT Rs.350 OFF on orders above Rs 1499</p>
                                                <h6 className='fontMontserrat fw6 px-3'>Code : AB54C1</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 col-xl-3 col-sm-6 allOfrBg mt-3 mt-md-3 mt-lg-0 mt-xl-0 mt-xxl-0 ">
                                    <div className="card p-2">
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-12 col-md-4 col-4 align-self-center ">
                                                <img src={offer2} alt="offer" className='img-fluid mx-3' />
                                            </div>
                                            <div className="col-xl-8 col-lg-12 col-md-8 col-8 py-2 offerRowTop">
                                                <p className='px-3 fontMontserrat'>Get FLAT Rs.350 OFF on orders above Rs 1499</p>
                                                <h6 className='fontMontserrat fw6 px-3'>Code : AB54C1</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
      {/* Offer end */}

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

      {/* Blog Content Start */}

      <section className='pt-0 pb-5'>

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
    </div>
  )
}

export default Onlinemedicine
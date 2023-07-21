import React, { useState } from 'react'
import './profile.css'
import returns from '../../../assets/images/returns.png'
import checkout from "../../../assets/images/checkout.png"
import delivery from "../../../assets/images/delivery.png"
import support from "../../../assets/images/support.png"
import Editprofile from '../../../pages/Editprofile/editprofile';
import { useNavigate } from "react-router-dom";

import Address from '../../../pages/Address/address';
import Orders from '../../../pages/Orders/orders';
import Orderdetails from '../../../pages/OrderDetails/orderdetails';
import Refund from '../../../pages/Refund/refund';
import Records from '../../../pages/Records/records';
import { useLocation } from 'react-router-dom';
import Wishlist from '../../../pages/Wishlist/wishlist';
import Wallet from '../../../pages/Wallet/wallet';
import Referandearn from '../../../pages/ReferandEarn/referandearn';

function Profile() {
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location, "loc");

    const [activeDiv, setActiveDiv] = useState(null);

    const handleDivClick = (divIndex) => {
        setActiveDiv(divIndex);
    };

    const getDivStyle = (divIndex) => {
        return {
            backgroundColor: activeDiv === divIndex ? "#F6AB01" : "transparent",
            color: activeDiv === divIndex ? "white" : "red", // Set text color for active and inactive state
            cursor: "pointer",
        };
    };

    return (
        <div>
            {/* Profile Info Start */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 profileCommon">
                            <div className="card py-4">
                                <div className='bgHoverClr' onClick={() => { navigate("/profile/address"); handleDivClick(1); }} style={getDivStyle(1)}>
                                    <a className='text-decoration-none'><p className='fw6 mb-0 profileInfo px-3 py-2'>Profile</p></a>
                                </div>
                                <div className='bgHoverClr' onClick={() => { navigate("/profile/myOrder"); handleDivClick(2); }} style={getDivStyle(2)}>
                                    <a className='text-decoration-none'><p className='fw6 mb-0 profileInfo px-3 py-2'>Your Orders</p></a>
                                </div>
                                {/* <div className='bgHoverClr' onClick={() => { navigate("/profile/refund"); }} >
                                    <a className='text-decoration-none'><p className='fw6 mb-0 profileInfo px-3 py-2'>Manage Refund</p></a>
                                </div> */}
                                <div className='bgHoverClr' onClick={() => { navigate("/profile/record"); handleDivClick(3); }} style={getDivStyle(3)}>
                                    <a className='text-decoration-none'><p className='fw6 mb-0 profileInfo px-3 py-2'>Medical Records</p></a>
                                </div>
                                {/* <div className='bgHoverClr' onClick={() => { navigate("/profile/Wishlist"); handleDivClick(4); }} style={getDivStyle(4)}>
                                    <a className='text-decoration-none'><p className='fw6 mb-0 profileInfo px-3 py-2'>Wishlist</p></a>
                                </div> */}
                                {/* <div className='bgHoverClr' onClick={() => { navigate("/profile/Wallet"); }} >
                                    <a className='text-decoration-none'><p className='fw6 mb-0 profileInfo px-3 py-2'>Wallet</p></a>
                                </div> */}
                                {/* <div className='bgHoverClr' onClick={() => { navigate("/profile/Referandearn"); handleDivClick(5); }} style={getDivStyle(5)}>
                                    <a className='text-decoration-none'><p className='fw6 mb-0 profileInfo px-3 py-2'>Refer & Earn</p></a>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-sm-8">
                            {location.pathname == "/profile/address" ? <Address /> :
                                location.pathname == "/profile/myOrder" ? <Orders /> :
                                    location.pathname == "/profile/refund" ? <Refund /> :
                                        location.pathname == "/profile/record" ? <Records /> :
                                            location.pathname == "/profile/Wishlist" ? <Wishlist /> :
                                                location.pathname == "/profile/Wallet" ? <Wallet /> :
                                                    location.pathname == "/profile/Referandearn" ? <Referandearn /> :
                                                        < Orderdetails />

                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* Profile Info End */}

            {/* Delivery Start */}
            <section className='py-0'>
                <div class="container">
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

            {/* <div className='py-5'>
                <div className="container">
                    <p className='lichensed fw6'>A licensed pharmacy would be delivering your order basis availability of product & fastest delivery. Prices are indicative and may change after billing. PharmEasy is a technology platform to connect sellers and buyers and is not involved in sales of any product. Offer for sale on the products and services are provided/sold by the sellers only. For detail read Terms and Conditions</p>
                </div>
            </div> */}
        </div>
    )
}

export default Profile
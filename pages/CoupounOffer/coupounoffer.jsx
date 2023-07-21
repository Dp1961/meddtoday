import React from 'react'
import './coupounoffer.css'
import offer1 from "../../assets/images/offer1.png"
import copy from "../../assets/images/copy.png"
import fastforward from "../../assets/images/fastforward.png"
import rightArrrow from '../../assets/images/rightArrrow.png'
import { HiChevronDoubleRight } from 'react-icons/hi'

function Coupounoffer() {
    return (
        <div>
            {/* Home and Medicine Start */}
            <div className='pt-0'>
                <div className="container bgLightYellow">
                    <div className='d-sm-flex py-2' >
                        <a  className='text-decoration-none text-dark px-md-3'><p className='fw6 results mb-0'>Home <img src={rightArrrow} alt="" className='img-fluid' /></p></a>
                        <p className='fw6 results mb-0'>Meddtoday Coupon Codes & Offers</p>
                    </div>
                </div>
            </div>
            {/* Home and Medicine end */}
            <div className='homeandMed mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="card p-3">
                                {/* Split card and Content */}
                                <div className="row">
                                    <div className="col-xl-2 col-lg-3 col-md-3 col-sm-3 align-self-center">
                                        <img src={offer1} alt="offer" className='img-fluid mx-xl-3 mt-lg-3 mt-xl-0 mt-md-3 mt-3' />
                                    </div>
                                    <div className="col-xl-10 col-lg-9 col-md-9 col-sm-9 mt-md-2 mt-lg-0">
                                        <p className='fw6 cardPara mt-2 mt-md-0'>Up to Rs.600 discount on a minimum transaction of Rs.2000</p>
                                        <div className='d-xl-flex justify-content-between btnGrp'>
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn bgRed fw5 text-white codeCoupoun
                                                 ">Code : AB54C1</button>
                                                <button type="button" className="btn btn-primary coPy text-dark fw5 "><img src={copy} alt="copy" className='img-fluid' />Copy</button>
                                            </div>
                                            <div className='align-self-center mt-md-2 mt-2 '>
                                                <a  className='textRed text-decoration-none fw5'>Expiring in 7 days</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="">
                                    <p className='text-muted mb-0 fw5'>Up to Rs.600 discount on a minimum transaction of Rs.2000, valid on a single transaction on CITI Bank Debit & Credit cards.</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-4 copyCodeCpn">
                            <div>
                                <p className='fw6 fw20'>Code : AB54C1</p>
                            </div>
                            <div>
                                <button className='btn bgRed text-white py-2 fw5 copyCode'>COPY CODE & PROCEED <i className='px-2'><HiChevronDoubleRight /></i></button>
                            </div>
                        </div>
                    </div>
                    {/* Nav and Tabs Start */}
                    <section className='navAndTabs navnNTabs'>
                        <div className="row">
                            <div className="col-lg-8">
                                <ul class="nav nav-pills mb-3 navBgCoupoun" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active text-dark navButnClrCpnOfr fw18 fw6" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Eligibility Overview</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link text-dark navButnClrCpnOfr fw18 fw6" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">How do you get it?</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link text-dark navButnClrCpnOfr fw18 fw6" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Conditions of cancellation</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link text-dark navButnClrCpnOfr fw18 fw6" id="pills-terms-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Conditions of cancellation</button>
                                    </li>

                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        {/* Tab Content Start */}
                                        <div>
                                            {/* Content 1 */}
                                            <div>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                            </div>
                                        </div>
                                        {/* Tab Content end */}
                                    </div>
                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        {/* Tab Content Start */}
                                        <div>
                                            {/* Content 1 */}
                                            <div>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                            </div>
                                        </div>
                                        {/* Tab Content end */}
                                    </div>
                                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                        {/* Tab Content Start */}
                                        <div>
                                            {/* Content 1 */}
                                            <div>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                            </div>
                                        </div>
                                        {/* Tab Content end */}
                                    </div>
                                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-terms-tab">
                                        {/* Tab Content Start */}
                                        <div>
                                            {/* Content 1 */}
                                            <div>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                                <p className='fw5 fw18 text-muted'>Log into Meddtoday app or website. </p>
                                            </div>
                                        </div>
                                        {/* Tab Content end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Nav and Tabs end */}
                </div>
            </div>

            <div className='container mt-4 mt-md-0'>
                <p className='text-muted fw5 disclamair'>Disclaimer: The offer/discount rate/cashback are geography specific and may vary in different geographical regions. PharmEasy reserves the right to... discontinue... <a  className='textRed text-decoration-none'>Read More</a></p>
            </div>

            {/* Accordian Start */}
            <div className='accorDian pb-5 pt-3'>
                <div className="container">
                    {/* Accordian end */}
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item mt-4 acrdianMEd">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed text-dark fntAcrdan acrdnFntCo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What are the latest offers & coupon codes applicable on PharmEasy?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body acrdnFntCo text-muted fw6">Visit the Offers section on the PharmEasy website to explore the latest offers and discounts. You can also download the PharmEasy app from Google Play or Apple App Store to receive notifications on offers and discounts.</div>
                            </div>
                        </div>
                        <div class="accordion-item mt-4 acrdianMEd">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed text-dark fntAcrdan acrdnFntCo" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    How to get updates about PharmEasy offers and discounts?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body acrdnFntCo text-muted fw5">Visit the Offers section on the PharmEasy website to explore the latest offers and discounts. You can also download the PharmEasy app from Google Play or Apple App Store to receive notifications on offers and discounts.</div>
                            </div>
                        </div>
                        <div class="accordion-item mt-4 acrdianMEd">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed text-dark fntAcrdan acrdnFntCo" acrdnFntCo type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    What are the latest offers & coupon codes applicable on PharmEasy?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body acrdnFntCo text-muted fw5">Visit the Offers section on the PharmEasy website to explore the latest offers and discounts. You can also download the PharmEasy app from Google Play or Apple App Store to receive notifications on offers and discounts.</div>
                            </div>
                        </div>
                        <div class="accordion-item mt-4 acrdianMEd">
                            <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed text-dark fntAcrdan acrdnFntCo" acrdnFntCo type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    What are the latest offers & coupon codes applicable on PharmEasy?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body acrdnFntCo text-muted fw5">Visit the Offers section on the PharmEasy website to explore the latest offers and discounts. You can also download the PharmEasy app from Google Play or Apple App Store to receive notifications on offers and discounts.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Accordian End */}
        </div>
    )
}

export default Coupounoffer
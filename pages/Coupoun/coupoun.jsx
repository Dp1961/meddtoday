import React from 'react'
import './coupoun.css'
import offer1 from "../../assets/images/offer1.png"
import copy from "../../assets/images/copy.png"
import rightArrrow from '../../assets/images/rightArrrow.png'
function Coupoun() {
    return (
        <div>
            {/* Home and Medicine Start */}
            <div className='pt-0'>
                <div className="container bgLightYellow">
                    <div className='d-sm-flex py-3'>
                        <div className='d-flex'>
                            <a  className='text-decoration-none text-dark'><p className='fw6 results mb-0'>Home <img src={rightArrrow} alt="" className='img-fluid' /></p> </a>
                        </div>
                        <p className='fw6 results mb-0'>Meddtoday Coupon Codes & Offers</p>
                    </div>
                </div>
            </div>
            {/* Home and Medicine end */}

            <section>
                <div className="container">
                    <div>
                        <h4 className='fw6'>Meddtoday Coupon Codes & Offers</h4>
                        <p className='mb-0 text-muted fw5'>Meddtoday is one of India’s leading online healthcare platforms that allows you to make great savings on your medicines and healthcare needs every day.From finding the prescribed medicine you need to the wellness product that is best suitable for you...</p>
                    </div>
                    <div className='mt-4'>
                        <h5 className='fw6'>Download the Meddtoday app today to buy medicines online with great savings.</h5>
                        <h5 className='fw6'>Hurry! Avail these exclusive offers now.</h5>
                    </div>
                    <div className="row coupounOffer mt-5">
                        <div className="col-sm-6">
                            <div className="card p-3">
                                {/* Split card and Content */}
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 align-self-center">
                                        <img src={offer1} alt="offer" className='img-fluid mx-xl-3 mt-lg-3 mt-xl-0 mt-md-3 mt-3' />
                                    </div>
                                    <div className="col-xl-9 col-lg-8 mt-md-2 mt-lg-0">
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
                            </div>
                        </div>
                        <div className="col-sm-6 secondCopoun">
                            <div className="card p-3">
                                {/* Split card and Content */}
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 align-self-center">
                                        <img src={offer1} alt="offer" className='img-fluid mx-xl-3 mt-lg-3 mt-xl-0 mt-md-3 mt-3' />
                                    </div>
                                    <div className="col-xl-9 col-lg-8 mt-md-2 mt-lg-0">
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
                            </div>
                        </div>
                    </div>
                    {/* Second Row */}
                    <div className="row coupounOffer">
                        <div className="col-sm-6">
                            <div className="card p-3">
                                {/* Split card and Content */}
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 align-self-center">
                                        <img src={offer1} alt="offer" className='img-fluid mx-xl-3 mt-lg-3 mt-xl-0 mt-md-3 mt-3' />
                                    </div>
                                    <div className="col-xl-9 col-lg-8 mt-md-2 mt-lg-0">
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
                            </div>
                        </div>
                        <div className="col-sm-6 secondCopoun">
                            <div className="card p-3">
                                {/* Split card and Content */}
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 align-self-center">
                                        <img src={offer1} alt="offer" className='img-fluid mx-xl-3 mt-lg-3 mt-xl-0 mt-md-3 mt-3' />
                                    </div>
                                    <div className="col-xl-9 col-lg-8 mt-md-2 mt-lg-0">
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
                            </div>
                        </div>

                    </div>
                    {/* Third Row */}
                    <div className="row coupounOffer">
                        <div className="col-sm-6">
                            <div className="card p-3">
                                {/* Split card and Content */}
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 align-self-center">
                                        <img src={offer1} alt="offer" className='img-fluid mx-xl-3 mt-lg-3 mt-xl-0 mt-md-3 mt-3' />
                                    </div>
                                    <div className="col-xl-9 col-lg-8 mt-md-2 mt-lg-0">
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
                            </div>
                        </div>
                        <div className="col-sm-6 secondCopoun">
                            <div className="card p-3">
                                {/* Split card and Content */}
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 align-self-center">
                                        <img src={offer1} alt="offer" className='img-fluid mx-xl-3 mt-lg-3 mt-xl-0 mt-md-3 mt-3' />
                                    </div>
                                    <div className="col-xl-9 col-lg-8 mt-md-2 mt-lg-0">
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
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className='container'>
                <p className='text-muted fw5 disclamair'>Disclaimer: The offer/discount rate/cashback are geography specific and may vary in different geographical regions. PharmEasy reserves the right to... discontinue...</p>
            </div>

            {/* Accordian Start */}
            <div className='accorDian pb-5 pt-3'>
                <div className="container">
                    {/* Accordian end */}
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item mt-4 acrdianMEd">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed text-dark fntAcrdan" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What are the latest offers & coupon codes applicable on PharmEasy?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body text-muted fw6">Visit the Offers section on the PharmEasy website to explore the latest offers and discounts. You can also download the PharmEasy app from Google Play or Apple App Store to receive notifications on offers and discounts.</div>
                            </div>
                        </div>
                        <div class="accordion-item mt-4 acrdianMEd">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed text-dark fntAcrdan" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    How to get updates about PharmEasy offers and discounts?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body text-muted fw5">Visit the Offers section on the PharmEasy website to explore the latest offers and discounts. You can also download the PharmEasy app from Google Play or Apple App Store to receive notifications on offers and discounts.</div>
                            </div>
                        </div>
                        <div class="accordion-item mt-4 acrdianMEd">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed text-dark fntAcrdan" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    What are the latest offers & coupon codes applicable on PharmEasy?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body text-muted fw5">Visit the Offers section on the PharmEasy website to explore the latest offers and discounts. You can also download the PharmEasy app from Google Play or Apple App Store to receive notifications on offers and discounts.</div>
                            </div>
                        </div>
                        <div class="accordion-item mt-4 acrdianMEd">
                            <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed text-dark fntAcrdan" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    What are the latest offers & coupon codes applicable on PharmEasy?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body text-muted fw5">Visit the Offers section on the PharmEasy website to explore the latest offers and discounts. You can also download the PharmEasy app from Google Play or Apple App Store to receive notifications on offers and discounts.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Accordian End */}
        </div>
    )
}

export default Coupoun
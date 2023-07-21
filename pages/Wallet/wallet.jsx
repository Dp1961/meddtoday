import React from 'react'
import './wallet.css'
function Wallet() {
    return (
        <div>
            <section className='p-0 mt-5 mt-sm-0'>
                <div className="container p-0">
                    <div className="d-flex bgYellow p-3 justify-content-between">
                        <div className=''>
                            <span className='fw6 checkPrice'>Total Balance</span>
                            <div className='d-flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                </svg>
                                <p className='fw6 fw20'>0.00</p>
                            </div>
                        </div>
                        <div className='align-self-center'>
                            <p className='equal'>=</p>
                        </div>
                        <div className=''>
                            <span className='fw6 checkPrice'>Cashback</span>
                            <div className='d-flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                </svg>
                                <p className='fw6 fw20'>0.00</p>
                            </div>
                        </div>
                        <div className='align-self-center'>
                            <p className='equal'>+</p>
                        </div>
                        <div className=''>
                            <span className='fw6 checkPrice'>Refund</span>
                            <div className='d-flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                </svg>
                                <p className='fw6 fw20'>0.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-0 mt-5'>
                <div className="container p-0 ">
                    <div className="brdrGray">
                        <div className='d-flex justify-content-between bgLightYellow bgyelwhov p-3'>
                            <div>
                                <h5>Cashback Expired</h5>
                                <p className='text-muted mb-0'>31 Oct 22</p>
                                <span className='text-muted mb-0'>Professional</span>
                            </div>
                            <div>
                                <span className='textOrange fw6'>-200.00</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between bgLightYellowClr p-3'>
                            <div>
                                <h5>Cashback Expired</h5>
                                <p className='text-muted mb-0'>31 Oct 22</p>
                                <span className='text-muted mb-0'>Professional</span>
                            </div>
                            <div>
                                <span className='fw6'>-200.00</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between bgLightYellowClr p-3'>
                            <div>
                                <h5>Cashback Expired</h5>
                                <p className='text-muted mb-0'>31 Oct 22</p>
                                <span className='text-muted mb-0'>Professional</span>
                            </div>
                            <div>
                                <span className='fw6 textOrange'>-200.00</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between bgLightYellowClr p-3'>
                            <div>
                                <h5>Cashback Expired</h5>
                                <p className='text-muted mb-0'>31 Oct 22</p>
                                <span className='text-muted mb-0'>Professional</span>
                            </div>
                            <div>
                                <span className='fw6'>-200.00</span>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between bgLightYellowClr p-3'>
                            <div>
                                <h5>Cashback Expired</h5>
                                <p className='text-muted mb-0'>31 Oct 22</p>
                                <span className='text-muted mb-0'>Professional</span>
                            </div>
                            <div>
                                <span className='fw6 textOrange'>-200.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-0'>
                <div className="container p-0">
                    {/* Accordian Start */}
                    <div className='accorDian pb-5 pt-3'>
                        <div className="container p-0">
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
            </section>
        </div>
    )
}

export default Wallet
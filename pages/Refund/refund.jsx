import React from 'react'
import './refund.css'

function Refund() {
    return (
        <div>
            <section className='py-0'>
                <div className="container p-0">
                    <div className="row">
                        
                        <div className="col-sm-12 mt-5 mt-sm-0">
                            <div className="card bgGray px-4 py-4">
                                <h5 className='fw6'>Manage Refund</h5>
                                {/* ----- Refund Option ----- */}
                                <div className='mt-3'>
                                    <h5 className='fw6'>Refund Options</h5>
                                    <div className="card p-3">
                                        <h5 className='fw6'>Online paid Orders</h5>
                                        <hr />
                                        {/* Instant Refund to Meddtoday Wallet */}
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-grid'>
                                                <label for="checkboxNoLabel" className='fw6'>Instant Refund to Meddtoday Wallet</label>
                                                <a  className='textRed text-decoration-none fw5'>Know more about wallet</a>
                                            </div>
                                            <div className='align-self-center'>
                                                <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                            </div>
                                        </div>
                                        <hr />
                                        {/* Refund to Online Source */}
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-grid'>
                                                <label for="checkboxNoLabelOnline" className='fw6'>Refund to Online Source</label>
                                                <a  className='textRed text-decoration-none fw5'>Can take between 5-7 business days</a>
                                            </div>
                                            <div className='align-self-center'>
                                                <input class="form-check-input" type="checkbox" id="checkboxNoLabelOnline" value="" aria-label="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ----- Cash/Card/UPI QR at Delivery Orders ----- */}
                                <div className='mt-4'>
                                    <div className="card p-3">
                                        <h5 className='fw6'>Cash/Card/UPI QR at Delivery Orders</h5>
                                        <hr />
                                        {/* Instant Refund to Meddtoday Wallet */}
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-grid'>
                                                <label for="checkboxNoLabelInstant" className='fw6'>Instant Refund to Meddtoday Wallet</label>
                                                <a  className='textRed text-decoration-none fw5'>Know more about wallet</a>
                                            </div>
                                            <div className='align-self-center'>
                                                <input class="form-check-input" type="checkbox" id="checkboxNoLabelInstant" value="" aria-label="..." />
                                            </div>
                                        </div>
                                        <hr />
                                        {/* Refund to Online Source */}
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-grid'>
                                                <label for="checkboxNoLabelOnlineRefund" className='fw6'>Refund to Bank Account</label>
                                                <a  className='textRed text-decoration-none fw5'>Can take between 5-7 business days</a>
                                            </div>
                                            <div className='align-self-center'>
                                                <input class="form-check-input" type="checkbox" id="checkboxNoLabelOnlineRefund" value="" aria-label="..." />
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-12 d-flex justify-content-center ">
                                                <button className='btn newBank py-3'>ADD NEW BANK ACCOUNT</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-12 d-flex justify-content-center ">
                                        <button type='button' className='btn wdthBTN bgRed py-3 fw6 text-white'>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Refund
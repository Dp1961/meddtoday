import React from 'react'
import './referandearn.css'
import referandearn from '../../assets/images/referandearn.png'
import copy from "../../assets/images/copy.png"

function Referandearn() {
    return (
        <div>
            <section className='referEarn p-0 mt-5 mt-sm-0'>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card p-4  bgGray">
                                <p className='fw6 referEarn'>Refer & Earn</p>
                                <div>
                                    <img src={referandearn} alt="" className='img-fluid' />
                                </div>
                                <div className="card mt-4 pt-3 pb-4 p-3">
                                    <p className='text-center fw6'>REFERRAL CODE</p>
                                    <div className="col-md-12 d-flex jutify-content-center">
                                        <div className="btn-group d-block mx-auto" role="group" aria-label="Basic example">
                                            <button type="button" className="btn bgRed fw5 text-white codeNum h-100">AB54C1</button>
                                            <button type="button" className="btn btn-primary coPy text-dark fw5"><img src={copy} alt="copy" className='img-fluid'/>Copy</button>
                                        </div>
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

export default Referandearn
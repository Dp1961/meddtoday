import React from 'react'
import './editprofile.css'

function Editprofile() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-sm-12">
                            <div className="card bgGray p-3">
                                {/* Button For Edit and Address */}
                                <div className='d-flex justify-content-center'>
                                    <button className='btn editBtn'>Edit Profile</button>
                                    <button className='btn addressBtn mx-2'>Manage Address</button>
                                </div>
                                <div className="row justify-content-center my-3">
                                    <div className="col-md-10">
                                        <div className="card px-3 py-4 formCard">
                                            <form>
                                                <div class="mb-3">
                                                    <label htmlFor="" className='text-muted fw5'>Name*</label>
                                                    <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" required />
                                                </div>
                                                <div class="mb-3">
                                                    <label htmlFor="" className='text-muted fw5'>Number*</label>
                                                    <input type="number" class="form-control" id="exampleInputNumber" required />
                                                </div>
                                                <div class="mb-3">
                                                    <label htmlFor="" className='text-muted fw5'>Email*</label>
                                                    <input type="email" class="form-control" id="exampleInputemail" required />
                                                </div>

                                                <button type="submit" class="btn bgRed w-50 d-block mx-auto fw6 text-white mt-4">Save</button>
                                            </form>
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

export default Editprofile
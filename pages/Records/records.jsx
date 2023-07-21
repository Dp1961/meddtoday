import React, { useEffect, useState } from 'react'
import prescription from '../../assets/images/prescription.jpeg'
import './records.css'
import { getCustomerDatacb, delPrescriptionCb } from "../../redux/customerApi"
import { useDispatch } from 'react-redux';
import { loader } from "../../redux/common";
import { toast } from "react-toastify"


function Records() {

    const [customerData, setCustomerData] = useState([]);

    const dispatch = useDispatch();
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        dispatch(loader(true));
        dispatch(getCustomerDatacb((res) => {
            dispatch(loader(false));
            if (res.status) {
                setCustomerData(res.data.presImg)
            } else {
                toast.error(res.message)
            }
        }))
    }, [flag]);

    const removePres = (e) => {
        console.log(e, "eeee")
        var data = {
            "prscId": e._id
        }

        dispatch(delPrescriptionCb(data, (res) => {
            if (res.status) {
                setFlag(!flag)
            } else {
                toast.error(res.message)
            }
            console.log("remove,res", res)
        }))
    }

    return (
        <div>
            <section className='py-0'>
                <div className="container p-0">
                    <div className="row">

                        <div className="col-sm-12 mt-5 mt-sm-0">
                            <div className="card p-3 bgGray">
                                <h5 className='fw6'>Medical Records</h5>
                                <div className="card p-4 crdBgRecords my-3 ">
                                    <div className='row'>
                                        {/* Prescription 1 */}

                                        {customerData && customerData.map((item, i) => {
                                            var data = new Date(item?.date).toDateString()
                                            return (
                                                <div className='col-md-3 mt-4'>
                                                    <p className='fw7 text-muted mb-0'>  {data}</p>
                                                    <div class="card presimageHeightRecord mt-1">
                                                        <div className='imgPresscription'>
                                                        <img src={item?.url} alt="prescription" className='img-fluid p-3' />
                                                        </div>
                                                        <div class="d-flex justify-content-between px-2" onClick={()=>{removePres(item)}}>
                                                            <p className='mb-0 fw5'>Remove</p>
                                                            <a className='text-dark'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash mx-1" viewBox="0 0 16 16">
                                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                                </svg>
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}


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

export default Records
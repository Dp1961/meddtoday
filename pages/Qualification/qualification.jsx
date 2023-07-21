import React, { useEffect } from 'react'
import './qualification.css';
import returns from "../../assets/images/returns.png"
import checkout from "../../assets/images/checkout.png"
import delivery from "../../assets/images/delivery.png"
import support from "../../assets/images/support.png"
import rightArrrow from '../../assets/images/rightArrrow.png'
import { useDispatch } from 'react-redux'
import { getwriterCb, getreviewCb  } from "../../redux/product"
import { useState } from 'react';
import { loader } from "../../redux/common";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom"

function Qualification() {


    const dispatch = useDispatch()
    const [writerdata, setWriterdata] = useState([]);

    const mykeysValues = window.location.search;
    console.log(mykeysValues, "Keys & Values");

    const urlParams = new URLSearchParams(mykeysValues);
    console.log(urlParams, "URL");

    const params1 = urlParams.get("type");
    const params2 = urlParams.get("id");

    console.log(params1,'params1')
    console.log(params2,'params2')


    useEffect(() => {

        if(params1 == "writer" ){
        dispatch(getwriterCb(params2,(resp) => {
            dispatch(loader(false));
            if (resp && resp.status) {
                setWriterdata([resp.data]);
                console.log(resp, "wirter");
            } else {
                console.log(resp);
               
            }
        }));
    }else{
        dispatch(getreviewCb (params2,(resp) => {
            dispatch(loader(false));
            if (resp && resp.status) {
                setWriterdata([resp.data]);
                console.log(resp, "review");
            } else {
                console.log(resp);
               
            }
        }));
    }

    }, [])




    return (

        
    
        <div>

            {
                writerdata.map((item, i)=>{
                    return(
                       
            <div className='pt-0 qualiFication'>
            <div className="container bgLightYellow">
                <div className='d-sm-flex px-md-4 py-3'>
                    <a  className='text-decoration-none text-dark '><p className='fw6 results mb-0'>Home <img src={rightArrrow} alt="" className='img-fluid'/></p>
                    </a>
                    <a  className='text-decoration-none text-dark'><p className='fw6 results mb-0 mx-sm-1'>Editorial Policy <img src={rightArrrow} alt="" className='img-fluid'/></p></a>
                    <a  className='text-decoration-none text-dark '><p className='fw6 results mb-0'>{item?.name}</p></a>
                </div>
            </div>
        </div>

                    )
                })
            }

            

            {/* Qualifications and Experience Start */}
            <section className='qualification'>
                
            {
                writerdata.map((item, i)=>{
                    return(
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 colEight">
                            <div className="card px-2 pt-3">
                                {/* Qualification */}
                                <div>
                                    <h5 className='textRed'>Qualifications and Experience</h5>
                                    <p className='mb-0 text-muted fw5'>{item?.qualExp}</p>
                                   
                                </div>
                                {/* Research Publications */}
                                <div>
                                    <h5 className='textRed'>Research Publications</h5>
                                    <div>
                                        {/* <h6 className='mb-0 fw7'>Anti-tubercular study on stem bark of Albizia procera (ROXB.) BENTH using Microplate Alamar Blue Assay (MABA)</h6> */}
                                        <p className='mt-1 qualifPara text-muted fw5 textJustify'> <div dangerouslySetInnerHTML={{
                                                            __html: item?.research,
                                                        }}
                                                        ></div></p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 colFour  mt-4 mt-lg-0 mt-xl-0 mt-md-4">
                            <div className="card py-4 px-3 "> 
                                {/* Author Image */}
                                <div className='d-block mx-auto'>
                                    <img src={item?.imageUrl} alt="author" className='img-fluid' />
                                </div>
                                {/* Heading */}
                                <div className='text-center mt-4'>
                                    <h5 className='textRed fw7'>{item?.name}</h5>
                                    {/* <p className='fw6 mb-0'>MBBS</p> */}
                                    <p className='fw5 mb-0'>{item?.qualification}</p>
                                </div>
                                {/* About */}
                                <div className='text-center mt-4'>
                                    <h5 className='textRed fw7'>About</h5>
                                    <p className='fw5 mb-0'> <div dangerouslySetInnerHTML={{
                                                            __html: item?.about,
                                                        }}
                                                        ></div></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                )
            })
        }
            </section >
            {/* Qualifications and Experience end */}

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
                                    <p class="text-muted mb-0 medicinePara fontMontserrat">Orders Over 699</p>
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
            <section>
                <div className="container">
                    <p className='lichensed fw6'>A licensed pharmacy would be delivering your order basis availability of product & fastest delivery. Prices are indicative and may change after billing. PharmEasy is a technology platform to connect sellers and buyers and is not involved in sales of any product. Offer for sale on the products and services are provided/sold by the sellers only. For detail read Terms and Conditions</p>
                </div>
            </section>
            {/* Lichensed Pharmacy End */}
        </div>
    )
}

export default Qualification
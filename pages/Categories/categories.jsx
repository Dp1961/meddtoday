import React from 'react'
import './categories.css'
import dolo from "../../assets/images/dolo.png"
import dropdown from "../../assets/images/dropdown.png"
import chevronRight from "../../assets/images/chevronRight.png"
import offer1 from "../../assets/images/offer1.png"
import offer2 from "../../assets/images/offer2.png"
import layermask from "../../assets/images/layermask.png"
import sonic from "../../assets/images/sonic.png"
import likeButton from "../../assets/images/likeButton.png"
import bp from "../../assets/images/bp.png"
import author1 from "../../assets/images/author1.png"
import author2 from "../../assets/images/author2.png"
import withstar from "../../assets/images/withstar.png"
import withoutStar from "../../assets/images/withoutStar.png"
import ProgressBar from 'react-bootstrap/ProgressBar';
import rightArrrow from '../../assets/images/rightArrrow.png'

function Categories() {
    return (
        <div>
            <div className=''>
                {/* Home and Medicine Start */}
                <div className='pt-0'>
                    <div className="container bgLightYellow">
                        <div className='d-sm-flex justify-content-between px-md-4 py-3'>
                            <div className='d-flex'>
                                <a  className='text-decoration-none text-dark'><p className='fw6 results mb-0'>Home <img src={rightArrrow} alt="" className='img-fluid' /></p></a>
                                <a  className='text-decoration-none text-dark'><p className='fw6 results mb-0 mx-1'>Medicine</p></a>
                            </div>
                            <div>
                                <a  className='text-decoration-none text-dark'><p className='fw6 results mb-0'>Please add item (s) to proceed</p></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Home and Medicine end */}

                {/* Col 8 and 4 Start */}
                <div className='medicineProductCategories py-lg-5 py-md-0'>
                    <div className="container">
                        <div className="row allSpaceCate">
                            {/* COl 8 */}
                            <div className="col-md-12 col-lg-8">
                                {/* Nav and Tabs */}
                                <div class="tab-content" id="pills-tabContent1">
                                    <div class="tab-pane fade show active" id="pills-home-dolo" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div className="row mt-5">
                                            <div className="col-sm-4">
                                                <div className="card saveCost1">
                                                    <img src={dolo} alt="dolo" className='img-fluid px-xl-3 mt-3 doloImageCategories' />
                                                    <p className='saveCost2 bgYellow p-1'>Save 15%</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className=''>
                                                    {/* Content */}
                                                    <div className='mt-3'>
                                                        <p className='mb-0 fw7 doloMed'>Dolo 650mg Strip Of 15 Tablets</p>
                                                        <span className='text-muted'>By MICRO Labs</span>
                                                        <p className='fw6'>15 Tablet(s) in Strip</p>
                                                        <p className=''><span className='fw8 '>₹26.12*</span><span className='px-2 text-muted'>MRP<s className='px-1 mt-1'>₹38.20</s></span></p>
                                                    </div>
                                                    {/* Quantity */}
                                                    <div className='mt-4'>
                                                        <p className='mb-0'>Delivery by 15 Jan - 16 Jan</p>
                                                        <div className='row mt-2'>
                                                            <div className="col-lg-5 col-md-5 col-6 align-self-center">
                                                                <div class="select">
                                                                    <select>
                                                                        <option className='fw6'>Quantity <img src={dropdown} alt="" /></option>
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                    </select>
                                                                    <div class="select_arrow">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 col-6">
                                                                <button className='btn bgRed w-100 text-white addCrt py-md-1 py-lg-0 py-lg-2 px-lg-0'>Add to Cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div className="row mt-md-5">
                                            <div className="col-md-4">
                                                <div className="card saveCost1">
                                                    <img src={dolo} alt="dolo" className='img-fluid px-xl-3 mt-3 doloImageCategories' />
                                                    <p className='saveCost2 bgYellow p-1'>Save 15%</p>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className=''>
                                                    {/* Content */}
                                                    <div className='mt-3'>
                                                        <p className='mb-0 fw7 doloMed'>Dolo 650mg Strip Of 15 Tablets</p>
                                                        <span className='text-muted'>By MICRO Labs</span>
                                                        <p className='fw6'>15 Tablet(s) in Strip</p>
                                                        <p className=''><span className='fw8 '>₹26.12*</span><span className='px-2 text-muted'>MRP<s className='px-1 mt-1'>₹38.20</s></span></p>
                                                    </div>
                                                    {/* Quantity */}
                                                    <div className='mt-4'>
                                                        <p className='mb-0'>Delivery by 15 Jan - 16 Jan</p>
                                                        <div className='row mt-2'>
                                                            <div className="col-lg-5 align-self-center">
                                                                <div class="select">
                                                                    <select>
                                                                        <option className='fw6'>Quantity <img src={dropdown} alt="" /></option>
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                    </select>
                                                                    <div class="select_arrow">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5">
                                                                <button className='btn bgRed w-100 text-white addCrt py-md-3 py-lg-0 py-lg-2 px-lg-0'>Add to Cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                        <div className="row mt-md-5">
                                            <div className="col-md-4">
                                                <div className="card saveCost1">
                                                    <img src={dolo} alt="dolo" className='img-fluid px-xl-3 mt-3 doloImageCategories' />
                                                    <p className='saveCost2 bgYellow p-1'>Save 15%</p>
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                                <div className=''>
                                                    {/* Content */}
                                                    <div className='mt-3'>
                                                        <p className='mb-0 fw7 doloMed'>Dolo 650mg Strip Of 15 Tablets</p>
                                                        <span className='text-muted'>By MICRO Labs</span>
                                                        <p className='fw6'>15 Tablet(s) in Strip</p>
                                                        <p className=''><span className='fw8 '>₹26.12*</span><span className='px-2 text-muted'>MRP<s className='px-1 mt-1'>₹38.20</s></span></p>
                                                    </div>
                                                    {/* Quantity */}
                                                    <div className='mt-4'>
                                                        <p className='mb-0'>Delivery by 15 Jan - 16 Jan</p>
                                                        <div className='row mt-2'>
                                                            <div className="col-md-5 align-self-center">
                                                                <div class="select">
                                                                    <select>
                                                                        <option className='fw6'>Quantity <img src={dropdown} alt="" /></option>
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                    </select>
                                                                    <div class="select_arrow">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <button className='btn bgRed w-100 text-white addCrt py-lg-0 py-lg-2 px-lg-0'>Add to Cart</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item navCustom d-flex justify-content-lg-start" role="presentation">
                                        <img src={dolo} alt="dolo" className='img-fluid px-xl-3 mt-3 doloTab w-50' id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" />

                                    </li>
                                    <li class="nav-item navCustom2" role="presentation">
                                        <a >
                                            <img src={dolo} alt="dolo" className='img-fluid px-xl-3 mt-3 doloTab w-50' id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" />
                                        </a>
                                    </li>
                                    <li class="nav-item navCustom2" role="presentation">
                                        <a >

                                            <img src={dolo} alt="dolo" className='img-fluid px-xl-3 mt-3 doloTab w-50' id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" />
                                        </a>
                                    </li>
                                </ul>

                                {/* Dolo 650 MG Description Start */}
                                <div className='mt-5'>
                                    <h4 className='fw6'>Description</h4>
                                    <p className='text-muted fw5 textJustify'>Dry and dull skin can take all your charm away. Do you want that to happen to you? Your answer will be no. So, apply Venusia Max Intensive Moisturizing lotion on your body to get rid of dry and dull skin and keep your glow intact. Our moisturizing lotion for dry skin contains glycerin, shea butter, aloe butter, mango butter, and cocoa butter, all of which effectively improve the quality of your skin and transform it from dull to lively. It also enhances skin barriers by protecting your skin from dirt and pollution while keeping it hydrated for as long as 12 hours. Our moisturizing lotion is dermatologically tested to be hypoallergenic and safe for your skin. It is entirely paraben, mineral oil, alcohol, and animal origin ingredients free. Apply it daily to get visibly healthy and shiny skin! <a  className='text-decoration-none text-muted'>Read More</a></p>
                                    {/* Nav and Tabs */}
                                </div>
                                {/* Dolo 650 MG Description End*/}

                                <hr className='mt-5' />



                                {/* Nav and Tabs Start */}
                                <section className='navAndTabs'>
                                    <ul class="nav nav-pills mb-3 navButnClr navCustomMedicine" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active text-dark h-100 fw5 " id="pills-homeMed-tabCate" data-bs-toggle="pill" data-bs-target="#pills-homeMed" type="button" role="tab" aria-controls="pills-homeMed" aria-selected="true">Medicine Overview</button>
                                        </li>
                                        <li class="nav-item mx-3" role="presentation">
                                            <button class="nav-link text-dark h-100 fw5  " id="pills-profileMed-tabCateCate" data-bs-toggle="pill" data-bs-target="#pills-profileMed" type="button" role="tab" aria-controls="pills-profileMed" aria-selected="false">Instructions</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link text-dark h-100 fw5 " id="pills-contactMed-tabCate" data-bs-toggle="pill" data-bs-target="#pills-contactMed" type="button" role="tab" aria-controls="pills-contactMed" aria-selected="false">Side effects</button>
                                        </li>

                                    </ul>
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-homeMed" role="tabpanel" aria-labelledby="pills-homeMed-tabCate">
                                            {/* Tab Content Start */}
                                            <div>
                                                <p className='text-muted fw5 textJustify'>Venusia Max Intensive Moisturizing Lotion is your trusted solution to get rid of dry skin. It locks the moisture and hydration, keeping your skin glowing for long It improves skin barrier function to help protect your skin from dirt, dust, pollution, and loss of hydration Its excellent spreadability is a contributing factor to repairing dry skin. A dab of this lotion glides smoothly over the body parts keeping them moisturized throughout It contains Glycerin, Shea Butter, Aloe Butter, Mango Butter, and Cocoa Butter. All these ingredients actively and effectively work towards repairing, smoothening it, moisture retention, and strengthening the skin barrier Venusia Max Intensive Moisturizing Cream is clinically proven to keep skin hydrated for up to 12 hours. It is dermatologically tested to be hypoallergenic, non-irritant, and non-comedogenic It is entirely free from mineral oil, paraben, alcohol, and animal origin products</p>
                                            </div>
                                            {/* Tab Content end */}
                                        </div>
                                        <div class="tab-pane fade" id="pills-profileMed" role="tabpanel" aria-labelledby="pills-profileMed-tabCate">
                                            {/* Tab Content Start */}
                                            <div>
                                                <p className='text-muted fw5 textJustify'>Venusia Max Intensive Moisturizing Lotion is your trusted solution to get rid of dry skin. It locks the moisture and hydration, keeping your skin glowing for long It improves skin barrier function to help protect your skin from dirt, dust, pollution, and loss of hydration Its excellent spreadability is a contributing factor to repairing dry skin. A dab of this lotion glides smoothly over the body parts keeping them moisturized throughout It contains Glycerin, Shea Butter, Aloe Butter, Mango Butter, and Cocoa Butter. All these ingredients actively and effectively work towards repairing, smoothening it, moisture retention, and strengthening the skin barrier Venusia Max Intensive Moisturizing Cream is clinically proven to keep skin hydrated for up to 12 hours. It is dermatologically tested to be hypoallergenic, non-irritant, and non-comedogenic It is entirely free from mineral oil, paraben, alcohol, and animal origin products</p>
                                            </div>
                                            {/* Tab Content end */}
                                        </div>
                                        <div class="tab-pane fade" id="pills-contactMed" role="tabpanel" aria-labelledby="pills-contactMed-tabCate">
                                            {/* Tab Content Start */}
                                            <div>
                                                <p className='text-muted fw5 textJustify'>Venusia Max Intensive Moisturizing Lotion is your trusted solution to get rid of dry skin. It locks the moisture and hydration, keeping your skin glowing for long It improves skin barrier function to help protect your skin from dirt, dust, pollution, and loss of hydration Its excellent spreadability is a contributing factor to repairing dry skin. A dab of this lotion glides smoothly over the body parts keeping them moisturized throughout It contains Glycerin, Shea Butter, Aloe Butter, Mango Butter, and Cocoa Butter. All these ingredients actively and effectively work towards repairing, smoothening it, moisture retention, and strengthening the skin barrier Venusia Max Intensive Moisturizing Cream is clinically proven to keep skin hydrated for up to 12 hours. It is dermatologically tested to be hypoallergenic, non-irritant, and non-comedogenic It is entirely free from mineral oil, paraben, alcohol, and animal origin products</p>
                                            </div>
                                            {/* Tab Content end */}
                                        </div>
                                    </div>
                                </section>
                                {/* Nav and Tabs end */}



                                {/* Accordian Start */}
                                <div class="accordion acrdianMEd" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button navButnClr acdrnFnt text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Frequently Asked Questions
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div>
                                                    <h6 className='fw6'>Q :Can I take the Dolo 650 tablet during pregnancy? </h6>
                                                    <p className='text-muted'>A : Dolo 650 tablet during pregnancy? A:Dolo 650 can be used during pregnancy if the doctor recommends it. Yet, it should be used for a short duration in low doses and should not be used too frequently by pregnant women.</p>
                                                </div>
                                                <div className='mt-4'>
                                                    <h6 className='fw6'>Q :Can I take the Dolo 650 tablet during pregnancy? </h6>
                                                    <p className='text-muted'>A : Dolo 650 tablet during pregnancy? A:Dolo 650 can be used during pregnancy if the doctor recommends it. Yet, it should be used for a short duration in low doses and should not be used too frequently by pregnant women.</p>
                                                </div>
                                                <div className='mt-4'>
                                                    <h6 className='fw6'>Q :Can I take the Dolo 650 tablet during pregnancy? </h6>
                                                    <p className='text-muted'>A : Dolo 650 tablet during pregnancy? A:Dolo 650 can be used during pregnancy if the doctor recommends it. Yet, it should be used for a short duration in low doses and should not be used too frequently by pregnant women.</p>
                                                </div>
                                                <div className='mt-4'>
                                                    <h6 className='fw6'>Q :Can I take the Dolo 650 tablet during pregnancy? </h6>
                                                    <p className='text-muted'>A : Dolo 650 tablet during pregnancy? A:Dolo 650 can be used during pregnancy if the doctor recommends it. Yet, it should be used for a short duration in low doses and should not be used too frequently by pregnant women.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* Accordian end */}

                                {/* Customer Review Start */}
                                <section className='customerReview'>
                                    <div className="">
                                        <div></div>
                                        <h4 className='fw6'>Customer reviews</h4>
                                        {/* Ratings */}
                                        <div className='d-flex'>
                                            <h1 className='mb-0 blogName fw8'>4.5</h1>
                                            <div className='align-self-center mx-2'>
                                                <a >
                                                    <img src={withstar} alt="start" className='img-fluid' />
                                                </a>
                                                <a >
                                                    <img src={withstar} alt="start" className='img-fluid' />
                                                </a>
                                                <a >
                                                    <img src={withstar} alt="start" className='img-fluid' />
                                                </a>
                                                <a >
                                                    <img src={withstar} alt="start" className='img-fluid' />
                                                </a>
                                                <a >
                                                    <img src={withoutStar} alt="start" className='img-fluid' />
                                                </a>
                                            </div>
                                            <div className='align-self-center'>
                                                <p className='mb-0 mt-1 text-muted'>1315 reviews</p>
                                            </div>
                                        </div>
                                        {/* Progress Star */}
                                        <div className='mt-1'>
                                            <div className="row py-2">
                                                <div className="col-sm-10">
                                                    <div class="progress">
                                                        <div class="progressGreen" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2 d-flex mtUp">
                                                    <p className='mb-0 fw6'>75%</p>
                                                    <p className='text-muted mb-0 mx-2'>982</p>
                                                </div>
                                            </div>
                                            <div className="row py-2">
                                                <div className="col-sm-10">
                                                    <div class="progress">
                                                        <div class="progressLightGreen" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2 d-flex mtUp">
                                                    <p className='mb-0 fw6'>25%</p>
                                                    <p className='text-muted mb-0 mx-2'>982</p>
                                                </div>
                                            </div>
                                            <div className="row py-2">
                                                <div className="col-sm-10">
                                                    <div class="progress">
                                                        <div class=" progressYellow" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2 d-flex mtUp">
                                                    <p className='mb-0 fw6'>10%</p>
                                                    <p className='text-muted mb-0 mx-2'>982</p>
                                                </div>
                                            </div>
                                            <div className="row py-2">
                                                <div className="col-sm-10">
                                                    <div class="progress">
                                                        <div class=" progressOrange" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2 d-flex mtUp">
                                                    <p className='mb-0 fw6'>5%</p>
                                                    <p className='text-muted mb-0 mx-2'>982</p>
                                                </div>
                                            </div>
                                            <div className="row py-2">
                                                <div className="col-sm-10">
                                                    <div class="progress">
                                                        <div class="progressBiscuit" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-2 d-flex mtUp">
                                                    <p className='mb-0 fw6'>10%</p>
                                                    <p className='text-muted mb-0 mx-2'>982</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <hr />
                                {/* Customer Review End */}

                                {/* Recent review Start */}
                                <section className='py-3'>
                                    <div>
                                        <h4>Recent Reviews</h4>
                                        <div>
                                            <div className="row brdrRecentReview">
                                                <div className="col-sm-6">
                                                    <h5>Santosh Salaskar</h5>
                                                    <p className='text-muted fw6'>"Effective for skin and scar"</p>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-sm-end">
                                                    <div>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withoutStar} alt="start" className='img-fluid' />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-sm-end reviewDate mt-md-0">
                                                    <h5>15 Jan 2023</h5>
                                                </div>
                                            </div>
                                            <div className="row brdrRecentReview mt-4">
                                                <div className="col-sm-6">
                                                    <h5>Santosh Salaskar</h5>
                                                    <p className='text-muted fw6'>"Effective for skin and scar"</p>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-sm-end">
                                                    <div>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withoutStar} alt="start" className='img-fluid' />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-sm-end reviewDate mt-md-0">
                                                    <h5>15 Jan 2023</h5>
                                                </div>
                                            </div>
                                            <div className="row brdrRecentReview mt-4">
                                                <div className="col-sm-6">
                                                    <h5>Santosh Salaskar</h5>
                                                    <p className='text-muted fw6'>"Effective for skin and scar"</p>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-sm-end">
                                                    <div>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withoutStar} alt="start" className='img-fluid' />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-sm-end reviewDate mt-md-0">
                                                    <h5>15 Jan 2023</h5>
                                                </div>
                                            </div>
                                            <div className="row brdrRecentReview mt-4">
                                                <div className="col-sm-6">
                                                    <h5>Santosh Salaskar</h5>
                                                    <p className='text-muted fw6'>"Effective for skin and scar"</p>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-sm-end">
                                                    <div>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withoutStar} alt="start" className='img-fluid' />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-sm-end reviewDate mt-md-0">
                                                    <h5>15 Jan 2023</h5>
                                                </div>
                                            </div>
                                            <div className="row brdrRecentReview mt-4">
                                                <div className="col-sm-6">
                                                    <h5>Santosh Salaskar</h5>
                                                    <p className='text-muted fw6'>"Effective for skin and scar"</p>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-sm-end">
                                                    <div>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withstar} alt="start" className='img-fluid' />
                                                        </a>
                                                        <a >
                                                            <img src={withoutStar} alt="start" className='img-fluid' />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 d-flex justify-content-sm-end reviewDate mt-md-0">
                                                    <h5>15 Jan 2023</h5>
                                                </div>
                                            </div>
                                            <div className='mt-4 text-center'>
                                                <a  className='text-decoration-none'><p className='textRed fw6'>View More</p></a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Recent Review end */}

                            </div>
                            {/* Disclaimer end*/}



                            {/* Col 4 */}
                            <div className="col-md-12 col-lg-4 py-lg-5 col4mbSpace">
                                {/* 3 Items in cart */}
                                <div>
                                    <h4>3 Items in Cart</h4>
                                    <button className='btn bgRed w-100 text-center text-white text-uppercase fw6 py-3 mt-3 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0'>View Cart <img src={chevronRight} alt="chevronRight" /><img src={chevronRight} alt="chevronRight" /></button>
                                </div>
                                {/* Quick Links */}
                                <div className='mt-4'>
                                    <h4>Quick Links</h4>
                                    <div className='mt-2'>
                                        <a  className='text-decoration-none text-muted'>#Uses</a>
                                        <a  className='text-decoration-none text-muted px-2'> #Contraindications </a>
                                        <a  className='text-decoration-none text-muted px-2'>#Side effects</a>
                                        <a  className='text-decoration-none text-muted px-2'>#Precautions and Warnings</a>
                                        <a  className='text-decoration-none text-muted px-2'>#Directions for Use #Storage and disposal #Quick Tips</a>
                                        <a  className='text-decoration-none text-muted px-2'>#Storage and disposal</a>
                                        <a  className='text-decoration-none text-muted px-2'>#Quick Tips</a>
                                    </div>
                                </div>
                                <hr />
                                {/* Offers Just For You */}
                                {/* Offer 1 */}
                                <div className="row">
                                    <div className="col-sm-6 col-lg-12 offColCustom">
                                        <div className="card offerCard mt-4 p-2">
                                            <div className="row">
                                                <div className="col-sm-3  align-self-center ">
                                                    <img src={offer1} alt="offer" className='img-fluid mx-3' />
                                                </div>
                                                <div className="col-sm-9 py-2">
                                                    <h5 className='px-3'>Get FLAT Rs.350 OFF on orders above Rs 1499</h5>
                                                    <p className='fontMontserrat fw6 px-3 mb-0'>Code : AB54C1</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-12 offColCustom">
                                        <div className="card offerCard mt-4 p-2">
                                            <div className="row">
                                                <div className="col-sm-3  align-self-center ">
                                                    <img src={offer1} alt="offer" className='img-fluid mx-3' />
                                                </div>
                                                <div className="col-sm-9 py-2">
                                                    <h5 className='px-3'>Get FLAT Rs.350 OFF on orders above Rs 1499</h5>
                                                    <p className='fontMontserrat fw6 px-3 mb-0'>Code : AB54C1</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Col 8 and 4 End */}

            </div>
        </div>
    )
}

export default Categories
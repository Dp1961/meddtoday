import React from "react";
import "./footer.css";
import gpay from "../../../assets/images/ccavenue.png";
import mastercard from "../../../assets/images/mastercard.png";
import paytm from "../../../assets/images/paytm.png";
import rupay from "../../../assets/images/rupay.png";
import visa from "../../../assets/images/visa.png";
import phonepe from "../../../assets/images/phonepe.png";
import { Link, useNavigate } from "react-router-dom";
import {FaFacebookF,FaTwitter,FaYoutube,FaLinkedinIn,FaInstagramSquare} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"

import { useDispatch } from "react-redux";
import { getAllSpecialityFilter, sendEmail } from "../../../redux/product";
import { toast } from "react-toastify";

function Footer() {
  let subscribeRef = React.useRef();
  let dispatch  = useDispatch();
  const navigate = useNavigate();
  const handleRedirect = (url) => {
    navigate(url);
    window.scrollTo(0, 0);
  };

  function submitEmail(){
    let emailValue = subscribeRef.current.value
    let reqBody = {};
    reqBody["email"] = emailValue;
    dispatch(
      sendEmail(reqBody, (resp) => {
        if (resp.status) {
          toast.success(resp.message);
        } else {
          toast.error(resp.message);
        }
      })
    );
  }
  return (
    <div>
      {/* <!-- Footer start --> */}
      <footer className="py-5 foot">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-md-3 col-sm-6">
            <h4 className="fw6">Know Us</h4>
              <a className="text-decoration-none" onClick={() => {
                  handleRedirect(`/about`);
                }}>
                <p className="" >About Us</p>
              </a>
              <a className="text-decoration-none" onClick={() => {
                  handleRedirect(`/contactus`);
                }}>
                <p className="">Contact US</p>
              </a>
            </div>
            <div className="col-xl-2 col-md-3 col-sm-6 mt-3 mt-sm-0">
            <h4 className="fw6">Our Policies</h4>
              <a
                className="text-decoration-none"
                onClick={() => {
                  handleRedirect(`/privacypolicy`);
                }}
              >
                <p>Privacy Policy</p>
              </a>
              <a
                className="text-decoration-none"
                onClick={() => {
                  handleRedirect(`/termsandcondition`);
                }}
              >
                <p>Terms and Conditions</p>
              </a>
              {/* <a className="text-decoration-none">
                <p>Editorial Policy</p>
              </a> */}
              <a
                className="text-decoration-none"
                onClick={() => {
                  handleRedirect(`/RefundReturn`);
                }}
              >
                <p>Return Policy</p>
              </a>
              <a
                className="text-decoration-none"
                onClick={() => {
                  handleRedirect(`/fpppolicy`);
                }}
              >
                <p>FPP Policy</p>
              </a>

              <a
                className="text-decoration-none"
                onClick={() => {
                  handleRedirect(`/Shippingdelivery`);
                }}
              >
                <p>Shipping and delivery</p>
              </a>

              {/* <a className="text-decoration-none">
                <p>Fake Jobs and Fraud Disclaimer</p>
              </a> */}
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6 mt-3 mt-sm-0 topSpace topSpaceipad">
            <h4 className="fw6">Quick Links</h4>
              <div className="row">
                <div className="col-md-6">
                  <a className="text-decoration-none" onClick={() => {  handleRedirect("/popularity/category/Anti_Cancer/1", { state: { "type": "category", "category": "Anti-Cancer" } }) }}>
                    <p>Anti-Cancer</p>
                  </a>
                  <a className="text-decoration-none" onClick={() => { handleRedirect("/popularity/category/Transplant/1", { state: { "type": "category", "category": "Transplant" } }) }}>
                    <p>Transplant</p>
                  </a>
                  <a className="text-decoration-none" onClick={() => {  handleRedirect("/popularity/category/Kidney_Disease/1", { state: { "type": "category", "category": "Kidney Disease" } }) }}>
                    <p>Kidney Disease</p>
                  </a>
                  <a className="text-decoration-none" onClick={() => {  handleRedirect("/popularity/category/Anitviral/1", { state: { "type": "category", "category": "Anti Retro Viral" } }) }}>
                    <p>Anti Retro Viral</p>
                  </a>
                  <a className="text-decoration-none" onClick={() => {  handleRedirect("/popularity/category/Anitviral/1", { state: { "type": "category", "category": "Anti-Viral" } }) }}>
                    <p>Anti-Viral</p>
                  </a>
                  <a className="text-decoration-none" onClick={() => { handleRedirect("/popularity/category/Cardiology/1", { state: { "type": "category", "category": "Cardiology" } }) }}>
                    <p>Cardiology</p>
                  </a>
                </div>
                <div className="col-md-6">
                  <a className="text-decoration-none"  onClick={() => {  handleRedirect("/popularity/category/Diabetology/1", { state: { "type": "category", "category": "Diabetology" } }) }}>
                    <p>Diabetology</p>
                  </a>
                  <a className="text-decoration-none" onClick={() => {  handleRedirect("/popularity/category/Neurology/1", { state: { "type": "category", "category": "Neurology" } }) }}>
                    <p>Neurology</p>
                  </a>
                  <a className="text-decoration-none" onClick={() => {  handleRedirect("/popularity/category/Supplements/1", { state: { "type": "category", "category": "Asthma/COPD" } }) }}>
                    <p>Supplements</p>
                  </a>
                  <a className="text-decoration-none" onClick={() => {  handleRedirect("/popularity/category/Skin_Care/1", { state: { "type": "category", "category": "Skin Care" } }) }}>
                    <p>Skin Care</p>
                  </a>
                  <a className="text-decoration-none" onClick={() => {  handleRedirect("/popularity/category/Immune_disorder/1", { state: { "type": "category", "category": "Immune disorder" } }) }}>
                    <p>Immune disorder</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6 mt-3 mt-lg-0 topSpace  topSpaceipad">
            <h4 className="fw6">Subscribe to our newsletter</h4>

              <a className="text-decoration-none">
                <p>
                  Get a free subscription to our health and fitness tip and stay
                  tuned to our latest offers
                </p>
              </a>
              {/* <!-- Email --> */}
              <form className="formPstn">
                <div className="mb-3">
                  <input
                  ref={subscribeRef}
                    type="email"
                    className="form-control py-3 "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email Your address"
                  />
                  <div className="">
                    <a className="rghtArw" onClick={()=>submitEmail()}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="red"
                        class="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="row rwColor mt-5 justify-content-center">
            <div className="col-lg-6 col-sm-6 col-xl-6 align-self-center" >
              <div className="rowpayment mt-3 mt-sm-0">
              <div className="d-flex ">
              <h4 className="">Our Payment Partner </h4>
                 <div className="align-self-center mx-3">
                 <img src={gpay} alt="" className="img-fluid payMent" />
                 </div>
                </div>
              </div>
              
            </div>
            <div className="col-lg-6 col-sm-6 align-self-center mb-md-4 mb-sm-4 mbSpace">
              <div className="row socialConnect">
             
               
                <div className="socialIcons">
                <h4 className="mt-4">Social Connect</h4>
              <div className="align-self-center justify-content-end socialIcons mt-3">
              <Link to="https://www.facebook.com/Meddtoday" className="text-decoration-none ">
                    <p className=" mb-0 "><FaFacebookF/></p>
                  </Link>
                  <Link to="https://twitter.com/GrandCare315959?t=5Ox-fC89e37bBAdB7gxDfA&s=09" className="text-decoration-none">
                    <p className="  mb-0 "><FaTwitter/></p>
                  </Link>
                  <Link to="https://instagram.com/meddtoday?igshid=MzRlODBiNWFlZA==" className="text-decoration-none">
                    <p className=" mb-0 "><AiFillInstagram/></p>
                  </Link>
                  <Link to="https://www.youtube.com/channel/UCHixsiw8X6H6JXNDQlWS2ag" className="text-decoration-none">
                    <p className="mb-0 "><FaYoutube/></p>
                  </Link>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-btn animated zoomIn active ng-scope" data-toggle="popover" data-trigger="hover" data-content="Need Help?" data-placement="left" id="toggle-chat">
					<div class="chat-content">
						<a href="https://wa.me/9384842660" target="_blank"><i class="fab fa-whatsapp" aria-hidden="true"></i></a>
					</div>
				</div>
      </footer>
      {/* <!-- Footer end --> */}
    </div>
  );
}

export default Footer;

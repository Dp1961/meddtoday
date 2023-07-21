import React from "react";
import "./Contactus.css";

const Contactus = () => {
  return (
    <div>
      <div className="container">
        <div className="row contactSpace">
          <div className="col-md-5 align-self-center contactPara">
            <h2 className="fw6">Contact Us</h2>
            <div>
              <p className="text-uppercase">
                Address : GROUND FLOOR, SUBRAMANIA NAGAR CROSS STREET, West
                Mambalam, Chennai, Chennai, Tamil Nadu, 600024
              </p>
              <p>
                Toll free number :{" "}
                <a
                  href="tel:+1800 8909 345"
                  className="text-decoration-none textClr"
                >
                  1800 8909 345
                </a>
              </p>
              <p>
                Customer Support :{" "}
                <a
                  href="mailto:cs@meddtoday.com"
                  className="text-decoration-none textClr"
                >
                  cs@meddtoday.com
                </a>
              </p>
              <p>
                Contact No :{" "}
                <a href="044-40062412" className="text-decoration-none textClr">
                  044-40062412
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-7">
            <form className="contactForm">
              <div class="mb-3">
                <input
                  type="name"
                  class="form-control"
                  id="name1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                />
              </div>
              <div class="mb-3">
                <input
                  type="Email"
                  class="form-control"
                  id="email1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="number1"
                  aria-describedby="number1"
                  placeholder="Mobile"
                />
              </div>
              <div class="mb-3">
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Message"
                />
              </div>

              <button class="button-29" role="button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

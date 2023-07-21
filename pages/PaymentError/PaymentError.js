import React from "react";
import card from "../../assets/images/credit-card.png";
import "./Paymenterror.css";

const Paymenterror = () => {
    return (
        <div className="ERroRPage pt-5 pb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="ErrORBox">
                            <div className="ErroIMG">
                                <img src={card} className="image-fluid" />
                            </div>
                            <div className="ErrORCONt">
                                <h2>Oops, Something went wrong</h2>
                                <p>The payment failed due to a technical error. It happens, just try again now, or after a couple of minutes. If the error persists, please write to <span>Our Support</span>, and we will help.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Paymenterror
import "./orderdetails.css";
import author2 from "../../assets/images/author2.png";
import doloImg from "../../assets/images/doloImg.png";
import prescriptionImg from "../../assets/images/prescriptionImg.png";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import {StepLabel , withStyles}from "@mui/material/StepLabel";
import { Stepper, Step, StepLabel, StepConnector } from '@mui/material';
import { viewOrderCb } from "../../redux/cart"
import { Typography } from "@mui/material";
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";

function Orderdetails(props) {
  const [status, setStatus] = useState(0);

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const steps = ["Order Placed", "Verification", "Order Dispatch", "Order delivered"];
  const regsteps = ["Order Placed", "order rejected"];

  const activeStep = status;
  const stepsl = [];
  const steps2 = [];

  const { classes } = props;


  const [orderInfo, setOrderInfo] = useState([]);
  const [orderInfoAdd, setOrderInfoAdd] = useState([]);
  const [orderItems, setOrderItems] = useState([]);

  const [paymentDetail, setPaymentDetail] = useState([]);


  const getActiveColor = (index) => {
    
    switch (index) {
      case 0:
        return 'red';
      case 1:
        return 'green';
      case 2:
        return 'blue';
      default:
        return 'green';
    }
  };
  // Solution 1
  const StepperSx = {
    "& .MuiStepConnector-root": {
      left: "calc(-50% + 40px)",
      right: "calc(50% + 40px)",
    },
    "& .MuiStepConnector-line": {
      marginTop: "22px",
    },
  };

  const search = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    var id = search;
    var data = { "orderId": id.id }
    dispatch(viewOrderCb(data, (res) => {
      if (res.status) {
        setOrderInfo(res.orderInfo);
        // const order = res.orderInfo[0].items.map(item => item.productdetail);
        setOrderItems(res.orderInfo[0].items);
        // console.log(order,"order")

        setOrderInfoAdd(res.orderInfo[0].Address[0]);
        setPaymentDetail(res.orderInfo[0].paymentInfo);
        // if(res.orderInfo[0].paymentInfo.amount >= 700)
        // {

        // }

        if (res.orderInfo[0].status == "success") {
          setStatus(0);
        } else if (res.orderInfo[0].status == "confirmed" ) {
          setStatus(1);
       
        } else if (res.orderInfo[0].status == "dispatched") {
          setStatus(2);
        }
        else if (res.orderInfo[0].status == "completed") {
          setStatus(3);
        }else if(res.orderInfo[0].status == "rejected"){
          setStatus(4);

        }
      } else {
        navigate(`/profile/myOrder`);
      }
    }))
  }, [])


  return (
    <div className="orderDetails">
      <section className="py-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-12 col-md-12 mt-5 mt-lg-0 mt-md-0">
              <div className="card bgGray px-3 py-4">
                {/* Order details - Order in progress and DOWNLOAD INVOICE */}
                <div className="d-lg-flex justify-content-between">
                  <div className="d-md-flex">
                    <h4 className="mt-1">Order details</h4>
                    <span class="badge bg-warning text-dark fs19 mx-md-2 mt-1">
                      {/* {orderInfo[0].status} */}
                    </span>
                  </div>
                  {/* <div className="mt-4 mt-lg-0">
                    <button className="btn dwnLoad fw5">
                      DOWNLOAD INVOICE
                    </button>
                  </div> */}
                </div>

                {/* Order ID */}
                <div className="card px-3 pt-2 mt-4">
                  <div className="d-md-flex justify-content-between">
                    <div>
                      <p className="mb-0 text-muted fw5 fw18">Order ID</p>
                      <p className="fw6">{orderInfo[0]?._id}</p>
                    </div>
                    <div>
                      <p className="mb-0  fw6">Placed on</p>
                      <p className="fw6">{orderInfo[0]?.createdAt.split('T')[0]}</p>
                    </div>
                  </div>
                </div>

                {/* Shipment */}
                <div className="card pt-2 mt-4">
                  <p className="text-muted mb-0 px-3 fw6 fw18">
                    Shipment {orderItems?.length} of {orderItems?.length}
                  </p>
                  <div className="d-flex justify-content-between">
                    {/* <p className=" fw6 px-3 fw6 ">Delivery on Feb 07</p> */}
                    <span className=" fw6 px-3">Standard Delivery</span>
                  </div>
                  <div className="bgLightYellow d-md-flex justify-content-between px-0 py-2">
                    <div>
                      <img src={author2} alt="" className="img-fluid mx-3" />
                    </div>
                    <p className="fw6 mt-2 px-xl-3 px-md-4 px-4">
                      Our pharmacists might call you to confirm items in your
                      order. You will receive a call by Soon.
                    </p>
                  </div>
                  {/* Storvas 10mg Strip Of 15 Tablets */}

                  { orderItems && orderItems.length != 0 ?(
                      orderItems.map((item, i) => {
                        return (
                          <>
                            <div className="row mt-4 dropDownOD">
                              <div className="col-lg-9 col-md-8">
                                <div className="row">
                                  <div className="col-md-1">
                                    <div className="orderProdutImg">
                                      {/* <img src={item?.imgUrls[0]} alt="" className="mx-4" /> */}
                                    </div>
                                  </div>
                                  <div className="col-md-10 mx-4 mt-md-2 mt-lg-0 align-self-center">
                                    <h5 className="fw6 px-xl-2 storvas FSize">
                                      {item?.productdetail[0]?.nameOfMedicine}
                                    </h5>
                                    <span className="mb-0 px-xl-2 text-muted">
                                      By {item?.productdetail[0]?.manufacturer}
                                    </span>
                                    <br/>
                                    <span className="mb-0 px-xl-2 fw6">
                                      {item?.productdetail[0]?.packingForm}
                                    </span>
                                    <br/>
                                    
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-4">
                                <div className="mt-2 px-4 px-md-0">
                                 
                                    <p className="DATAboRder" value="apple ">{item?.quantity} Quantity</p>
    
                                 
                                </div>
                              </div>
                            </div>
                            <hr className="mx-4" />
                          </>
                        )
                      }
                    )
                  ):(
                    <h3>No Product Found</h3>
                  )
                  }

                  

                  {/* <div className="row mt-4 dropDownOD">
                    <div className="col-lg-9 col-md-8">
                      <div className="row">
                        <div className="col-md-1">
                          <img src={doloImg} alt="" className="mx-4" />
                        </div>
                        <div className="col-md-10 mx-4 mt-md-2 mt-lg-0 align-self-center">
                          <h5 className="fw6 px-xl-2 livePara paraUnqu">
                            Liveasy Foods Healthy Roasted Seed Mix - Blend Of 6
                            Fibre Rich Healthy Roasted Seeds - 200 Gms
                          </h5>
                          <span className="mb-0 px-xl-2">
                            15 Tablet(s) in Strip
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="mt-2 px-4 px-md-0">
                        <select id="fruit" name="fruit">
                          <option value="apple">Quantity</option>
                          <option value="banana">Lorem12</option>
                          <option value="orange">Lorem3</option>
                          <option value="grape">Lorem4</option>
                          <option value="kiwi">Lorem5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <hr className="mx-4" />
                  
                  <div className="row mt-4 dropDownOD">
                    <div className="col-lg-9 col-md-8">
                      <div className="row">
                        <div className="col-md-1">
                          <img src={doloImg} alt="" className="mx-4" />
                        </div>
                        <div className="col-md-10 mx-4 mt-md-2 mt-lg-0 align-self-center">
                          <h5 className="fw6 px-xl-2">
                            Metosartan 25mg Tablet
                          </h5>
                          <span className="mb-0 px-xl-2">
                            15 Tablet(s) in Strip
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="mt-2 px-4 px-md-0">
                        <select id="fruit" name="fruit">
                          <option value="apple">Quantity</option>
                          <option value="banana">Lorem12</option>
                          <option value="orange">Lorem3</option>
                          <option value="grape">Lorem4</option>
                          <option value="kiwi">Lorem5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <hr className="mx-4" /> */}
                </div>

                {/* Bill Summary and Payment Method */}
                <div className="card px-3 pt-2 mt-4">
                  <div className="row">
                    {/* Bill Summary */}
                    <div className="col-md-6 px-4 py-3">
                      <div className="row">
                        <p className="text-muted fw6 fw18">Bill Summary</p>
                        {/* Cart Value */}
                        <div className="d-flex justify-content-between">
                          <p className="text-muted fw6">Cart Value</p>
                          <p className="fw6">₹{paymentDetail?.amount <= 700 ? paymentDetail?.amount - 100 : paymentDetail?.amount}</p>
                        </div>
                        {/* Delivery charges */}
                        <div className="d-flex justify-content-between mt-1">
                          <p className="text-muted fw6">Delivery charges</p>
                          <p className="fw6">₹{paymentDetail?.amount <= 700 ?   100 : 0}</p>
                        </div>
                        <hr className="mx-2 py-0" />
                        {/* Total */}
                        <div className="d-flex justify-content-between mt-1 totalAmount">
                          <p className="text-muted fw6">Total</p>
                          <p className="fw6">₹{paymentDetail?.amount}</p>
                        </div>
                        <hr className="mx-2" />
                      </div>
                    </div>
                    {/* Payment Mode */}
                    <div className="col-md-6 px-4 py-3">
                      <p className="text-muted fw6 fw18">Payment Mode</p>
                      <div className="d-flex justify-content-between">
                        <p className="text-muted fw6">{paymentDetail?.payment_mode}</p>
                        <p className="fw6">₹{paymentDetail?.amount}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="text-muted fw6">Transaction Date</p>
                        <p className="fw6 text-muted">{paymentDetail?.trans_date}</p>

                      </div>
                      {/* <p className="fw6 text-muted">
                        Total savings of{" "}
                        <span className="text-dark">₹341.74</span> on this order
                      </p> */}
                      {/* <div className="d-flex justify-content-between mt-1 totalAmount">
                        <p className="text-muted fw6">MRP Discount 31.48% </p>
                        <p className="fw6">₹266.74</p>
                      </div> */}
                      {/* <div className="d-flex justify-content-between mt-1 totalAmount">
                        <p className="text-muted fw6">
                          Delivery Charges Waiver
                        </p>
                        <p className="fw6">₹75.00</p>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="card px-3 pt-2 mt-4">
                  {/* Shipping Address and Patient Details */}
                  <div className="row">
                    <div className="col-md-6 px-4 py-3">
                      <p className="text-muted fw6 mb-0 fw18">
                        Shipping Address
                      </p>
                      <p className="text-muted mt-1">

                      Delivery: {orderInfoAdd?.DeliverTo} <br></br>Plot no: {orderInfoAdd?.HouseNo},{orderInfoAdd?.StreetName}<br />
                        PinCode: {orderInfoAdd?.PinCode}
                      </p>
                      <p className="fw6"> Mobile Number: {orderInfoAdd?.MobileNo}</p>
                    </div>
                    <div className="col-md-6 px-4 py-3">
                      <p className="text-muted fw6 mb-0 fw18">
                        Patient Details
                      </p>
                      <p className="text-muted mt-1 mb-0">Name : {orderInfoAdd?.DeliverTo}</p>
                      {/* <p className="fw6">Prescriptions Uploaded</p>
                      <img
                        onHide={handleClose}
                        src={prescriptionImg}
                        alt=""
                        className="img-fluid presImg"
                      />
                      <img
                        onHide={handleClose}
                        src={prescriptionImg}
                        alt=""
                        className="img-fluid presImg mx-2"
                      /> */}
                    </div>
                  </div>
                </div>

                {/* Shipment Tracking */}
                <div className="card px-3 pt-2 mt-4 py-5">
                  <p className="text-muted fw6 fw18">Shipment Tracking</p>
                  {/* Tracking Progress Start */}
                  {/* <div class="sizeMeasured trackingProgress">
                    <ol class="progress-meter d-flex progressPstn">
                      <li class="progress-point date done liOne text-muted fw6">
                        Thu, Feb 5
                      </li>
                      <p class="placed2 fw5 text-muted">Order placed</p>
                      <li class="progress-point done liTwo text-muted fw6">
                        Thu, Feb 5
                      </li>
                      <p class="proceesing fw5 text-muted">Order proceesing</p>
                      <li class="progress-point done liThree text-muted fw6">
                        Thu, Feb 5
                      </li>
                      <p class="delivery fw5 text-muted">Out for delivery</p>
                      <li class="progress-point done text-muted fw6">
                        Thu, Feb 5
                      </li>
                      <p class="delivered fw5 text-muted">Order delivered</p>
                    </ol>
                  </div> */}
                  <Box sx={{ width: "100%" }}>
                    {
                      activeStep == 4 ?                  
                         <Stepper activeStep={activeStep} alternativeLabel sx={StepperSx}>
                      {regsteps.map((label, index) => (
                        <Step key={label}>
                          <Typography align="center">{steps2[index]}</Typography>
                          <StepLabel StepIconProps={{ activeColor: getActiveColor(index) }}
                          // classes={{
                          //   active: classes.activeLine,
                          //   completed: classes.completedLine,
                          //   disabled: classes.disabledLine,
                          //   line: classes.line,
                          // }}
                          >{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>:
                    
                    <Stepper activeStep={activeStep} alternativeLabel sx={StepperSx}>
                      {steps.map((label, index) => (
                        <Step key={label}>
                          <Typography align="center">{stepsl[index]}</Typography>
                          <StepLabel StepIconProps={{ activeColor: getActiveColor(index) }}
                          // classes={{
                          //   active: classes.activeLine,
                          //   completed: classes.completedLine,
                          //   disabled: classes.disabledLine,
                          //   line: classes.line,
                          // }}
                          >{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
}
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal 1 */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Orderdetails;

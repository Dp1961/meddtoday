import React, { useState, useEffect } from "react";
import "./succesfull.css";
import { TiTick, TiWarning } from "react-icons/ti";
import { BiChevronRight } from "react-icons/bi";
import author2 from "../../assets/images/author2.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { myOrderCb, viewOrderCb } from "../../redux/cart";
import { useDispatch } from "react-redux";



const Succesfull = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [orderInfo, setOrderInfo] = useState([]);
  let [orderDate, setOrderDate] = React.useState("");
  let [orderTime, setOrderTime] = React.useState("");

  const [contentVisible, setContentVisible] = useState(true);
  const [errorVisible, setErrorVisible] = useState(true);

  const search = useParams();

  const hideContent = () => {
    setContentVisible(false);
  };
  const hideError = () => {
    setErrorVisible(false);
  };

  useEffect(() => {
    if (localStorage.getItem("isLogin") != "true") {
      toast.error("please login with your account");
      navigate("/")
    } else {
      var id = search;
      var data = { "orderId": id.id }
      console.log(data, "datadata")
      dispatch(viewOrderCb(data, (res) => {
        if (res?.status == false) {
          hideContent();
        } else {
          hideError();
          console.log(res, "viewOrderCb Check")
          setOrderInfo(res?.orderInfo[0]);
        }

      }))
      // dispatch(myOrderCb((resp) => {
      //   console.log(resp, "listsofOrders Check")
      //   if (resp.status) {
      //     setRecentOrder(resp.data[0]);


      //     // Input data
      //     const data = resp.data[0].orderedAt

      //     // Create Date object from ISO 8601 formatted string
      //     const dateObj = new Date(data)

      //     // Format the date and time as per desired format
      //     const formattedDate = dateObj.toLocaleDateString();
      //     const formattedTime = dateObj.toLocaleTimeString();
      //     console.log(formattedDate,"formattedDate",formattedTime,"formattedTime")

      //     // Print the formatted date and time
      //     setOrderDate(formattedDate);
      //     setOrderTime(formattedTime);




      //   } else {
      //     toast.error(resp.message)
      //   }
      // }))
    }
  }, [])

  return (
    <div>
      <div className="succesFull">
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-7">
              <div className=" yelllowBg">
                {
                  contentVisible && (
                    <div className="text-center py-4">
                      <div className="orderReach mx-auto d-block">
                        <TiTick className="text-center tick" />
                      </div>
                      <h4 className="fw6 mt-2">Order Placed Succesfully</h4>
                    </div>

                  )
                }

              </div>
              {
                  errorVisible && (
                    <div className=" yelllowBg mb-5">
                
                    <div className="text-center py-3">
                      <div className="orderReach mx-auto d-block">
                        <TiWarning className="text-center tick" />
                      </div>
                      <h4 className="fw6 mt-2">No Order Found</h4>
                    </div>

               

              </div>
                  )
              }
             
            </div>
            <div className="col-md-5 align-self-center mt-3 mt-md-0">
              <div className="yelllowBg py-3">
                <h5 className="text-center"><Link className="text-decoration-none text-dark" to="/">Go Back To Home</Link></h5>
              </div>
            </div>
          </div>
          {
            contentVisible && (
              <div className="row pb-5">
              <div className="col-md-7">
                <div className="lightYellow">
                  <div className="row">
                    <div className="col-lg-1 col-md-2">
                      <div className="orderComplete">
                        <img src={author2} alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-6 align-self-center">
                      <p className="fw6 mb-0 reachedOrder mt-2 mt-md-0">
                        Thank you for your order! We will be in touch with you
                        shortly.
                      </p>
                    </div>
                    <div className="col-lg-2 col-md-4 mt-2 mt-md-0">
                      <p className="mb-0 fw6">{orderTime}</p>
                      <p className="mb-0 fw6 ">{orderDate}</p>
                    </div>
                  </div>
                </div>
                <div className="bgGrayyellow">
                  <div className="d-flex fw6 ">
                    <p className="total mb-0">Order Total {orderInfo?.totalPrice}</p>
                    {/* <span className="mx-2 mt-1 mb-0">{recentOrder.totalPrice == 0 ? "Price will update soon" : recentOrder.totalPrice}</span> */}
                  </div>
                </div>
                <div className="bgWhite">
                  <div className="d-flex justify-content-between">
                    <p className="mb-0 fw6 ">Shipment {`${orderInfo?.totalItems - 1}` + "-" + `${orderInfo?.totalItems}`} Items</p>
                    <p className="mb-0 fw6 ">Standard Delivery</p>
                  </div>
                  {/* <p className="mb-0 fw7 text-muted mt-3">
                    Tommorow, before 2.00PM
                  </p> */}
                </div>
                <div className="bgWhiteRdus">
                  <div className="orderFlex justify-content-between">
                    <p className="fw6 orderID">Order ID - {orderInfo?._id}</p>
                    <div className="detailArw d-flex">
                      <p className="">
                        <Link className="textRed text-decoration-none orderDetails orderID" to='/profile/myOrder'>  View Details </Link>
  
                        <span className="">
                          <BiChevronRight />
                        </span>{" "}</p>
  
                    </div>
  
                  </div>
                </div>
              </div>
            </div>
            )
          }
         
        </div>
      </div>
    </div>
  );
};

export default Succesfull;

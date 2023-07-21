import React,{useEffect,useState} from 'react'
import './orders.css';
import {myOrderCb} from "../../redux/cart";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify"
import { loader } from "../../redux/common";
import { useNavigate } from "react-router-dom";



function Orders() {

  const dispatch = useDispatch();
  const [myorderCb,setMyOrderCb]=useState([])
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState(null);

  const orderSortuser = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    // console.log(selectedValue)
  
    // Call the function with the selectedValue parameter
    dispatch(myOrderCb(selectedValue, (resp) => {
      // console.log(resp, "respp");
      if (resp.status) {
        setMyOrderCb(resp.data);
      } else {
        toast.error(resp.message);
      }
    }));
  };
  
  useEffect(()=>{
     window.scrollTo(0, 0);
    dispatch(myOrderCb("all",(resp) => {
      // console.log(resp,"respp")
      if(resp.status){
        setMyOrderCb(resp.data)
      }else{
        toast.error(resp.message)
      }
    }))
  },[])

  const viewDetailsFn =(e)=>{
    navigate("/profile/"+e._id)
  }
    return (
        <div>
            
            <section className='py-0'>
                <div className="container p-0">
                    <div className="row">
                       
                        <div className="col-sm-12 orDer mt-5 mt-sm-0">
                            <div className="card bgGray p-3">
                                <div className='d-flex justify-content-between'>
                                    <div className='col-md-9'>
                                        <h4 className='fw6'>My Orders</h4>
                                    </div>
                                    <div className='col-md-3'>
                                        <div class="select">
                                            <select onClick={orderSortuser}>
                                                <option className='fw6' value="all">All Orders</option>
                                                <option value="dispatched">Dispatched</option>
                                                <option value="confirmed">Confirmed</option>
                                                <option value="rejected">Rejected</option>
                                                <option value="completed">Completed</option>
                                            </select>
                                            <div class="select_arrow">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Cutomer 1 */}
                                {myorderCb.map((item,i)=>{
                                  return(
                                    <div className="card p-3 mt-3">
                                    <div className="row rowTopOrders">
                                        <div className="col-lg-8 col-md-12">
                                            <p className='text-muted mb-0 fw5 '>Delivery to :{item?.Address[0].DeliverTo}</p>
                                            { item.items.productdetail.map((subItem,j)=>{
                                              // console.log(subItem,"sub")
                                              return(
                                                <div className='mx-0'>
                                                <p className='text-muted mb-0 fw5 mt-1'>{subItem?.nameOfMedicine} {subItem?.packingForm}</p>
                                                
                                            </div>
                                              )
                                            })}
                                            {/*
                                            <div className='mt-1'>
                                                <a  className='textRed text-decoration-none fw5'>+1 more</a>
                                            </div> */}
                                        </div>
                                        <div className="col-lg-4 col-md-12 align-self-end d-flex justify-content-lg-end mt-md-3 mt-3 mt-lg-0">
                                            <div>
                                                {/* <p className='fw6 mb-0 mt-lg-4'>Delivery on Feb 07</p> */}
                                                <button className='btn brderDetailsRed mt-1 fw5' onClick={()=>{viewDetailsFn(item)}}>VIEW DETAILS</button>
                                            </div>
                                        </div>
                                        {/* <div>
                                          { item.status == "pending" ? 
                                          <p className='bgYellow orderTrack fw5 p-1'>Order is pending</p>
                                          : item.status == "active" ? 
                                          <p className='bgYellow orderTrack fw5 p-1'>Order in progress</p>
                                          : item.status == "inprogress" ? 
                                          <p className='bgYellow orderTrack fw5 p-1'>Out for delivery</p>
                                          : item.status == "completed" ? 
                                          <p className='bgYellow orderTrack fw5 p-1'>Order delivered </p>
                                          : null
                                        }
                                            
                                        </div> */}
                                    </div>
                                </div>
                                  )
                                }) }                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             
            
           
        </div>
    )
}

export default Orders


 {/* <Modal show={show} onHide={handleClose} className="rateModal">
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="d-flex">
              <span className="leftArrow">
                <BsArrowLeftShort />
              </span>
              <p className="mb-0 backBtn">Back</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center fw8 opinion">
            Your opinion matters to us!
          </h4>
          <div className="rateUs">
            <p className="text-center fw7 ourSer mb-0">
              How do you rate our service
            </p>
            <div className=" starsGap">
              <span className="starClr">
                <AiFillStar />
              </span>
              <span className="starClr">
                <AiFillStar />
              </span>
              <span className="starClr">
                <AiFillStar />
              </span>
              <span className="starClr">
                <AiFillStar />
              </span>
              <span className="starClr">
                <AiOutlineStar />
              </span>
            </div>
            <div className="d-flex justify-content-around">
                <p className="bad">Bad</p>
                <p className="excellent">Excellent</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <div className="">
            <button className="btn bgRed text-white mt-3 fontMontserrat  text-uppercase">
              Submit
            </button>
          </div>
        </Modal.Footer>
      </Modal> */}

      {/* <Modal show={show} onHide={handleClose} className="refModal">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center fw6">Get Your Referral Discount</h4>
          <img src={refImg} alt="refImg" className="img-fluid mt-3" />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <div className="dotBrdr">
            <h5 className="text-center">ENTER REFERRAL CODE</h5>
            <form className="d-flex justify-content-center">
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <button type="submit" class="btn bgRed text-white mb-4 mx-2">
                Submit
              </button>
            </form>
          </div>
        </Modal.Footer>
      </Modal> */}

    //   <Modal show={show} onHide={handleClose} className="uploadPrescription">
    //     <Modal.Header closeButton>
    //       <Modal.Title></Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <h4 className="text-center fw6">Uploaded prescription</h4>
    //       <div className="row mt-4 uploadModalpre" >
    //         <div className="col-md-3 col-sm-6 ">
    //         <div className="upLoadSize">
    //         <img src={prescription} alt="prescription" className="img-fluid" />
    //         <i className="expandIcon">
    //           <FaExpandArrowsAlt />
    //         </i>
    //         <div>
    //           <form class="row gy-2 gx-3 align-items-center">
    //             <input
    //               class="form-check-input checkBoxPre"
    //               type="checkbox"
    //               id="autoSizingCheck"
    //             />
    //           </form>
    //         </div>
    //       </div>
    //         </div>
    //         <div className="col-md-3 col-sm-6 mt-sm-0 mt-4 mt-md-0">
    //         <div className="upLoadSize">
    //         <img src={prescription} alt="prescription" className="img-fluid" />
    //         <i className="expandIcon">
    //           <FaExpandArrowsAlt />
    //         </i>
    //         <div>
    //           <form class="row gy-2 gx-3 align-items-center">
    //             <input
    //               class="form-check-input checkBoxPre"
    //               type="checkbox"
    //               id="autoSizingCheck"
    //             />
    //           </form>
    //         </div>
    //       </div>
    //         </div>
    //         <div className="col-md-3 col-sm-6  mt-4 mt-md-0">
    //         <div className="upLoadSize">
    //         <img src={prescription} alt="prescription" className="img-fluid" />
    //         <i className="expandIcon">
    //           <FaExpandArrowsAlt />
    //         </i>
    //         <div>
    //           <form class="row gy-2 gx-3 align-items-center">
    //             <input
    //               class="form-check-input checkBoxPre"
    //               type="checkbox"
    //               id="autoSizingCheck"
    //             />
    //           </form>
    //         </div>
    //       </div>
    //         </div>
    //       </div>
        
    //     </Modal.Body>
    //     <Modal.Footer className="d-flex justify-content-center">
    //       <button type="submit" class="btn bgRed text-white mb-4 mx-2 text-uppercase">
    //         Select
    //       </button>
    //     </Modal.Footer>
    //   </Modal>
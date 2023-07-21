import "./address.css";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import { useFetcher } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerDatacb, getAddressListcb, addNewArsCb, delAddressCb, editAddressCb } from "../../redux/customerApi";
import { useForm } from "react-hook-form";
import { loader } from "../../redux/common";
import { editProfileCb } from "../../redux/customerApi";
import { toast } from "react-toastify"


function Address() {

  const [addressList, setAddressList] = useState([]);
  const [customerData, setCustomerData] = useState([]);

  const [flag, setFlag] = useState();

  const [deliverToSt, setDeliverToSt] = useState();
  const [mobileNumberSt, setMobileNumberSt] = useState();
  const [pincodeSt, setPincodeSt] = useState();
  const [houseToSt, setHouseToSt] = useState();
  const [streetNameoSt, setStreetNameoSt] = useState();
  const [editAddIdSt, setEditAddIdSt] = useState();

  
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const [showEdt, setShowEdt] = useState(false);
  const handleCloseEdt = () => setShowEdt(false);
  const handleShowEdt = () => setShowEdt(true);

  const [addressType, setaddressType] = useState("Home");

  const dispatch = useDispatch();

  const { register, formState: { errors }, reset, handleSubmit } = useForm({ mode: "onBlur" });

  const { register: register2, formState: { errors: errors2 }, reset1, handleSubmit: handleSubmit2, } = useForm({ mode: "onBlur" });

  const { register: register3, formState: { errors: errors3 }, reset2, handleSubmit: handleSubmit3, } = useForm({ mode: "onBlur" });


  const editProfileFn = (data) => {

    for (let k in data) data[k] == "" && delete data[k];
    dispatch(loader(true));
    dispatch(editProfileCb(data, (resp) => {
      if (resp.status) {
        dispatch(loader(false));
        reset();
        toast.success(resp.message);
        setFlag(!flag);
      } else {
        dispatch(loader(false));
        toast.error(resp.message)
      }

    }))

  };

  const addNewFn = (data) => {
    // console.log(JSON.stringify(data));
    data["AddressType"] = addressType;
    dispatch(loader(true));
    dispatch(addNewArsCb(data, (resp) => {
      
      if (resp.status) {
        dispatch(loader(false));
        reset();
        toast.success(resp.message);
        handleCloseAdd();
        setFlag(!flag);
      } else {
        dispatch(loader(false));
        toast.error(resp.message)
      }
    }))
  };


  const editOldAdd = (data) => {
    for (let k in data) data[k] == "" && delete data[k];
    data["AddressType"] = addressType;
    dispatch(loader(true));
    dispatch(editAddressCb(data,editAddIdSt,(resp) => {
      if (resp.status) {
        dispatch(loader(false));
        handleCloseEdt()
        toast.success(resp.message);
        setFlag(!flag);
      } else {
        dispatch(loader(false));
        toast.error(resp.message)
      }
    }))
  };

  const deleteAdrFn = (data) => {
    dispatch(loader(true));
    dispatch(delAddressCb(data._id, (resp) => {
      if (resp.status) {
        dispatch(loader(false));       
        toast.success(resp.message);       
        setFlag(!flag);
      } else {
        dispatch(loader(false));
        toast.error(resp.message)
      }


    }))
  }

  const editIconFn=(data)=>{
    // console.log(data,"data");
    setDeliverToSt(data.DeliverTo)
    setMobileNumberSt(data.MobileNo)
    setPincodeSt(data.PinCode)
    setHouseToSt(data.HouseNo)
    setStreetNameoSt(data.StreetName)
    setEditAddIdSt(data._id)
    handleShowEdt();
  }
  

  useEffect(() => {
    dispatch(loader(true));
    dispatch(getCustomerDatacb((resp) => {
      if (resp.status) {
        setCustomerData(resp.data);

      }
      else {
        setCustomerData([])
      }
    }
    ));
    dispatch(getAddressListcb((res) => {

      if (res.status) {
        // console.log(res.data, "res.datares.data")
        setAddressList(res.data)
      }
      else {
        setAddressList([])
      }
    }

    ));
    dispatch(loader(false));
  }, [flag])



  return (
    <div>
      <section className="address py-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-sm-12 top8">
              <div className="card bgGray pt-4  p-3">
                {/* Button For Edit and Address */}
                <div className="d-flex justify-content-center">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class=" btn bgRed editBtn"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Edit Profile
                      </button>
                    </li>
                    <li class="nav-item  mngeAdd mt-sm-0" role="presentation">
                      <button
                        class=" btn bgRed editBtn mx-2"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Manage Address
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="row justify-content-center my-3">
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" >
                      <div className="row justify-content-center py-2">
                        <div className="col-md-10">
                          <div className="card px-3 py-4 formCard">
                            <form className="addresForm" onSubmit={handleSubmit(editProfileFn)} >
                              <div class="mb-3">
                                <label htmlFor="" className="text-muted fw5">
                                  Name*
                                </label>
                                <input
                                  type="text"
                                  name="Name"
                                  class="form-control"
                                  id="exampleInputName"
                                  aria-describedby="emailHelp"
                                  placeholder={customerData.Name}
                                  {...register("Name")}
                                />
                              </div>
                              <div class="mb-3">
                                <label htmlFor="" className="text-muted fw5">
                                  Mobile number*
                                </label>
                                <input
                                  type="text"
                                  name="MobileNumber"
                                  class="form-control"
                                  id="exampleInputNumber"
                                  placeholder={customerData.MobileNumber}
                                  {...register("MobileNumber")}
                                />
                              </div>
                              <div class="mb-3">
                                <label htmlFor="" className="text-muted fw5">
                                  Email*
                                </label>
                                <input
                                  type="email"
                                  name="Email"
                                  class="form-control"
                                  id="exampleInputemail"
                                  placeholder={customerData.Email}
                                  {...register("Email")}
                                />
                              </div>
                              <button type="submit" class="btn bgRed w-50 d-block mx-auto fw6 text-white mt-4">
                                Save
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                      <div className="row justify-content-center py-2">
                        <div className="col-md-10 cardAddressBg">
                          {addressList && addressList.length ?
                            addressList.map((item, i) => {
                              return (
                                <div className="card px-3 py-4 formCard mt-4">
                                  <div className="">
                                    <h5>{item?.AddressType}</h5>
                                    <p className="fw5 text-muted mb-0">
                                      {item?.DeliverTo}
                                    </p>
                                    <p className="fw5 text-muted mb-0">
                                      Plot no {item?.HouseNo} , {item?.StreetName} - {item?.PinCode}
                                    </p>
                                    <p className="fw5 text-muted mb-0">{item?.MobileNo}</p>
                                  </div>
                                  <div className="d-flex bgRed trashEdit p-1">
                                    <a className="brdrTrash">
                                      <svg onClick={()=>{editIconFn(item)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-2 bi bi-pencil-square text-white" viewBox="0 0 16 16" >
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path
                                          fill-rule="evenodd"
                                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                        />
                                      </svg>
                                    </a>
                                    <a className="text-dark">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mx-2 bi bi-trash text-white" viewBox="0 0 16 16"
                                        onClick={() => { deleteAdrFn(item) }}>
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path
                                          fill-rule="evenodd"
                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              )
                            })
                            :
                            null
                          }
                          <br />
                          <div className=" formCard">
                            <button type="submit" class="btn bgRed w-50 d-block mx-auto fw6 text-white mt-4" onClick={handleShowAdd}>
                              Add Address
                            </button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal For Select Address--> */}
        {/* <div class="modal fade "  id="exampleModal" tabindex="-1"aria-labelledby="exampleModalLabel" aria-hidden="true" >
        
          <div class="modal-dialog ">
            <div class="modal-content modalCnt">
              <div class="modal-header">
                <h5
                  class="modal-title d-block text-center fw7 selectAdd"
                  id="exampleModalLabel"
                >
                  Select Address
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="card py-3">
                <div className="row justify-content-center">
                  <div className="col-6">
                    <div className="row">
                      <button className="btn newAdd">Add New Address</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-4">
                <div className="row p-3">
                  <div className="col-sm-6 colSix">
                    <div className="card px-3 py-4 formCard">
                      <div className="">
                        <h5 className="fw6">Home</h5>
                        <p className="fw5 text-muted mb-0">G.Sathish Kumar</p>
                        <p className="fw5 text-muted mb-0">
                          Plot no 10 , kK Nagar , 2nd layout , Adam street ,
                          kajamalai, Chennai - 689236
                        </p>
                        <p className="fw5 text-muted mb-0">9876543210</p>
                      </div>
                      <div className="d-flex bgRed trashEdit p-1">
                        <a className="brdrTrash">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="mx-2 bi bi-pencil-square text-white"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </a>
                        <a className="text-dark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="mx-2 bi bi-trash text-white"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="bgLightRose p-1 brdrBtm">
                        <label for="checkboxNoLabel" className="fw6">
                          Select
                        </label>
                        <input
                          className="form-check-input mx-2"
                          type="checkbox"
                          id="checkboxNoLabel"
                          value=""
                          aria-label="..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-4 mt-sm-0">
                    <div className="card px-3 py-4 formCard">
                      <div className="">
                        <h5 className="fw6">Office</h5>
                        <p className="fw5 text-muted mb-0">G.Sathish Kumar</p>
                        <p className="fw5 text-muted mb-0">
                          Plot no 10 , kK Nagar , 2nd layout , Adam street ,
                          kajamalai, Chennai - 689236
                        </p>
                        <p className="fw5 text-muted mb-0">9876543210</p>
                      </div>
                      <div className="d-flex bgRed trashEdit p-1">
                        <a className="brdrTrash">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="mx-2 bi bi-pencil-square text-white"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </a>
                        <a className="text-dark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="mx-2 bi bi-trash text-white"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="bgGray p-1 brdrBtm">
                        <label for="checkboxNoLabel2" className="fw6">
                          Select
                        </label>
                        <input
                          className="form-check-input mx-2"
                          type="checkbox"
                          id="checkboxNoLabel2"
                          value=""
                          aria-label="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <Modal show={show} onHide={handleClose}>
          <div className="modalCnt">
            <Modal.Header closeButton>
              <Modal.Title>
                <h5
                  class="modal-title d-block text-center fw7 selectAdd"
                  id="exampleModalLabel"
                >
                  Select Address
                </h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="card py-3">
                <div className="row justify-content-center">
                  <div className="col-6">
                    <div className="row">
                      <button className="btn newAdd">Add New Address</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-4">
                <div className="row p-3">
                  <div className="col-sm-6 colSix">
                    <div className="card px-3 py-4 formCard">
                      <div className="">
                        <h5 className="fw6">Home</h5>
                        <p className="fw5 text-muted mb-0">G.Sathish Kumar</p>
                        <p className="fw5 text-muted mb-0">
                          Plot no 10 , kK Nagar , 2nd layout , Adam street ,
                          kajamalai, Chennai - 689236
                        </p>
                        <p className="fw5 text-muted mb-0">9876543210</p>
                      </div>
                      <div className="d-flex bgRed trashEdit p-1">
                        <a className="brdrTrash">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="mx-2 bi bi-pencil-square text-white"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </a>
                        <a className="text-dark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="mx-2 bi bi-trash text-white"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="bgLightRose p-1 brdrBtm">
                        <label for="checkboxNoLabel" className="fw6">
                          Select
                        </label>
                        <input
                          className="form-check-input mx-2"
                          type="checkbox"
                          id="checkboxNoLabel"
                          value=""
                          aria-label="..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-4 mt-sm-0">
                    <div className="card px-3 py-4 formCard">
                      <div className="">
                        <h5 className="fw6">Office</h5>
                        <p className="fw5 text-muted mb-0">G.Sathish Kumar</p>
                        <p className="fw5 text-muted mb-0">
                          Plot no 10 , kK Nagar , 2nd layout , Adam street ,
                          kajamalai, Chennai - 689236
                        </p>
                        <p className="fw5 text-muted mb-0">9876543210</p>
                      </div>
                      <div className="d-flex bgRed trashEdit p-1">
                        <a className="brdrTrash">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="mx-2 bi bi-pencil-square text-white"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                        </a>
                        <a className="text-dark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="mx-2 bi bi-trash text-white"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="bgGray p-1 brdrBtm">
                        <label for="checkboxNoLabel2" className="fw6">
                          Select
                        </label>
                        <input
                          className="form-check-input mx-2"
                          type="checkbox"
                          id="checkboxNoLabel2"
                          value=""
                          aria-label="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
            <div class=" d-block mx-auto mb-3">
                <button type="button" class="btn bgRed fw5 text-white">
                  Continue
                </button>
              </div>
            </Modal.Footer>
          </div>
        </Modal> */}

        {/* Add Address */}

        <Modal show={showAdd} onHide={handleCloseAdd} className="modalReact">
          <div className="modalCnt ">
            <Modal.Header closeButton>
              <Modal.Title>
                <h5 class="modal-title fw7" id="exampleModalLabel">
                  Add Address
                </h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="card p-3">
                <form key={1} onSubmit={handleSubmit2(addNewFn)}>

                  <div className="row">

                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-md-4 align-self-center">
                          <p className="text-muted fw5">Name</p>
                        </div>
                        <div className="col-md-8">
                          <div class="mb-3">
                            <input
                              type="text"
                              name="DeliverTo"
                              class="form-control"
                              id="exampleInputName"
                              {...register2("DeliverTo")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-md-4 align-self-center">
                          <p className="text-muted fw5 mx-2">Mobile No</p>
                        </div>
                        <div className="col-md-8">
                          <div class="mb-3">
                            <input
                              type="text"
                              name="MobileNo"
                              class="form-control"
                              id="exampleInputNumber"
                              {...register2("MobileNo")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">

                        <div className="col-md-4">
                          <p className="fw5 text-muted">Pincode</p>
                        </div>
                        <div className="col-md-8">

                          <div class="mb-3">
                            <input
                              type="text"
                              name="PinCode"
                              class="form-control"
                              id="exampleInputName"
                              {...register2("PinCode")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-md-4 align-self-center">
                          <p className="text-muted fw5 mx-2">Door No</p>
                        </div>
                        <div className="col-md-8">
                          <div class="mb-3">
                            <input
                              type="text"
                              name="HouseNo"
                              class="form-control"
                              id="exampleInputName"
                              {...register2("HouseNo")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-2">
                          <p className="text-muted fw5">Address</p>
                        </div>
                        <div className="col-md-10">
                          <div class="mb-3">
                            <input
                              type="text"
                              name="StreetName"
                              class="form-control"
                              id="exampleInputNumber"
                              {...register2("StreetName")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row d-flex justify-content-center">
                    <div className="col-4 col-md-2">
                      <span className='btn addressBtnAdd fw5' onClick={() => { setaddressType("Home") }}>Home</span>
                    </div>
                    <div className="col-4 col-md-2">
                      <span className='btn addressBtnAdd fw5 ' onClick={() => { setaddressType("Office") }}>Office</span>
                    </div>
                    <div className="col-4 col-md-2">
                      <span className='btn addressBtnAdd fw5 ' onClick={() => { setaddressType("Others") }} >Others</span>
                    </div>
                  </div>

                  <button type="submit" class=" d-block mx-auto mb-3 btn bgRed fw5 text-white mt-4">
                    Save and Continue
                  </button>


                </form>
              </div>
            </Modal.Body>

          </div>
        </Modal>

        {/* Edit Address */}

        <Modal show={showEdt} onHide={handleCloseEdt} className="modalReact">
          <div className="modalCnt ">
            <Modal.Header closeButton>
              <Modal.Title>
                <h5 class="modal-title fw7" id="exampleModalLabel">
                  Edit Address
                </h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="card p-3">
                <form key={1} onSubmit={handleSubmit3(editOldAdd)}>

                  <div className="row">

                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-md-4 align-self-center">
                          <p className="text-muted fw5">Deliver to</p>
                        </div>
                        <div className="col-md-8">
                          <div class="mb-3">
                            <input
                              type="text"
                              name="DeliverTo"
                              class="form-control"
                              id="exampleInputName"
                              {...register3("DeliverTo")}
                              placeholder={ deliverToSt }
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-md-4 align-self-center">
                          <p className="text-muted fw5 mx-2">Mobile to</p>
                        </div>
                        <div className="col-md-8">
                          <div class="mb-3">
                            <input
                              type="text"
                              name="MobileNo"
                              class="form-control"
                              id="exampleInputNumber"
                              {...register3("MobileNo")}
                              placeholder={ mobileNumberSt }
                            />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-md-4">
                          <p className="fw5 text-muted">Pincode</p>
                        </div>
                        <div className="col-md-8">
                          <div class="mb-3">
                            <input
                              type="text"
                              name="PinCode"
                              class="form-control"
                              id="exampleInputName"
                              {...register3("PinCode")}
                              placeholder={ pincodeSt }
                            />
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="row">
                        <div className="col-md-4 align-self-center">
                          <p className="text-muted fw5 mx-2">House to</p>
                        </div>
                        <div className="col-md-8">
                          <div class="mb-3">
                            <input
                              type="text"
                              name="HouseNo"
                              class="form-control"
                              id="exampleInputName"
                              {...register3("HouseNo")}
                              placeholder={ houseToSt }

                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-2">
                          <p className="text-muted fw5">Street name</p>
                        </div>
                        <div className="col-md-10">
                          <div class="mb-3">
                            <input
                              type="text"
                              name="StreetName"
                              class="form-control"
                              id="exampleInputNumber"
                              {...register3("StreetName")}
                              placeholder={ streetNameoSt }

                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center">
                    <div className="col-4 col-md-2">
                      <span className='btn addressBtnAdd fw5' onClick={() => { setaddressType("Home") }}>Home</span>
                    </div>
                    <div className="col-4 col-md-2">
                      <span className='btn addressBtnAdd fw5 '  onClick={() => { setaddressType("Office") }}>Office</span>
                    </div>
                    <div className="col-4 col-md-2">
                      <span className='btn addressBtnAdd fw5 ' onClick={() => { setaddressType("Others") }}>Others</span>
                    </div>
                  </div>

                  <button type="submit" class=" d-block mx-auto mb-3 btn bgRed fw5 text-white mt-4">
                    Save and Continue
                  </button>


                </form>
              </div>
            </Modal.Body>

          </div>
        </Modal>

      </section>
      {/* Modal Start */}
      {/* <!-- Button trigger modal --> */}
    </div>
  );
}

export default Address;

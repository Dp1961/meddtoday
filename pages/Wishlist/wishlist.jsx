import React, { useEffect, useState } from "react";
import "./wishlist.css";
import sonic from "../../assets/images/sonic.png";
import likeButton from "../../assets/images/likeButton.png";
import { AiOutlineHeart } from "react-icons/ai";
import layermask from "../../assets/images/layermask.png";
import { cusFavLstCb } from "../../redux/customerApi";
import { useDispatch } from 'react-redux';
import { loader } from "../../redux/common";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import { addRmvFavCb } from "../../redux/customerApi";
import { addtoCartCb } from "../../redux/cart";


function Wishlist() {

  const dispatch = useDispatch();
  const [favList, setFavList] = useState([]);
  const [flag, setFlag] = useState(true);

  const navigate = useNavigate();


  useEffect(() => {
    dispatch(loader(true))
    dispatch(cusFavLstCb((res) => {
      dispatch(loader(false))
      // console.log(res, "resss")
      if (res.status) {
        setFavList(res.data)
      } else {
        toast.error(res.message)
      }
    }))
    window.scrollTo(0, 0)
  }, [flag])

  const addCartFn = (e) => {
    dispatch(loader(true));
    var data = {
      productId: e._id,
      quantity: 1,
    };
    dispatch(
      addtoCartCb(data, (resp) => {
        dispatch(loader(false));
        if (resp.status) {
          toast.success("Product Added successfully");
        } else {
          toast.error(resp.message);
        }
      })
    );
  };

  const wiseList = (e) => {
    dispatch(loader(true));
    if (localStorage.getItem(e._id) === "true") {
      localStorage.removeItem(e._id);
    }
    var data = { "productId": e._id }
    dispatch(addRmvFavCb(data, (res) => {
      if (res.status) {
        dispatch(loader(false));
        setFlag(!flag)
      } else {
        dispatch(loader(false));
        toast.error(res.message);
      }
    }))
  };
  return (
    <div>
      <section className="p-0 whisList">
        <div className="container">
          <h3 className="fw6  mt-4">Wishlist</h3>
          {/* Produts */}
          <div className="row products justify-content-center justify-content-lg-start">
            {/* Product 1 */}

            {favList && favList.map((item, i) => {
              return (
                <div className="col-xxl-4 col-lg-3 col-md-3 col-sm-6 colWhislistCustom">
                  <div className="card crd h-100 pstnHelth mx-3">
                    {/* Like button */}
                    <div className="likeHghtArrivals">
                      <div className="heartRoundWhlist">
                        <div className="">
                          <a className="text-dark deleteBtn" onClick={() => { wiseList(item); }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-trash mx-1" viewBox="0 0 16 16" >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Product Image */}
                    < div onClick={() => { navigate(`/medicine/${item._id}`, { state: { "id": item._id } }) }}>
                      <div className="heightProduct">
                        <img src={item?.imgUrls[0]} alt="thermometer" className="img-flu100 w-100 d-block mx-auto" />
                      </div>
                      {/* Product Content */}
                      <div class="card-body crdBdyHghtWsli"  >
                        <div className="saltCompFnt">
                          <h6 className="mb-0 fw6">{item?.nameOfMedicine}</h6>
                          <div className="d-flex wiSHBConTent">
                            <h4 className=" mx-2 mt-1 fw6 textRed">₹{item?.priceToCustomer}</h4>
                            <s className=" strikeRate align-self-center fw5">₹{item?.mrp}</s>
                          </div>
                        </div>

                        <div className="">
                          <button class="btn bg-warning fw-bold crdBtnWhislist" onClick={() => { addCartFn(item) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-cart3 mx-2" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}


          </div>
        </div>
      </section>
    </div>
  );
}

export default Wishlist;

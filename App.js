import React, { useEffect, useState } from 'react'

import './App.css';
import Footer from './components/common/Footer/footer';
import Navbar from './components/common/NavBar/navBar'
import Profile from './components/common/Profile/profile'
import Onlinemedicine from './pages/Onlinemedicine/onlinemedicine'
import Home from './pages/Home/home';
import Searchmed from './pages/Searchmed/Searchmed';
import Medicine from './pages/Medicine/medicine';
import Qualification from './pages/Qualification/qualification'
import Popularity from './pages/Popularity/popularity';
import Categories from './pages/Categories/categories';
import Cart from './pages/Cart/cart'
import Prescription from './pages/Prescription/prescription';
import Editprofile from './pages/Editprofile/editprofile';
import Address from './pages/Address/address';
import Orders from './pages/Orders/orders';
import Orderdetails from './pages/OrderDetails/orderdetails';
import Refund from './pages/Refund/refund';
import Records from './pages/Records/records';
import Referandearn from './pages/ReferandEarn/referandearn';
import Coupoun from './pages/Coupoun/coupoun';
import Coupounoffer from './pages/CoupounOffer/coupounoffer';
import Wishlist from './pages/Wishlist/wishlist';
import Wallet from './pages/Wallet/wallet';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from "./redux/common";
import { TailSpin, Oval } from "react-loader-spinner"
import { toast, ToastContainer } from "react-toastify"
import Termsandcondition from "./pages/Termsandcondition/Termsandcondition";
import Privacypolicy from "./pages/Privacypolicy/Privacypolicy";
import Fpppolicy from "./pages/Fpppolicy/Fpppolicy";
import Shippingdelivery from './pages/Shippingdelivery/Shippingdelivery'
import RefundReturn from './pages/RefundReturn/RefundReturn'
import Blogdetails from './pages/Blogdetails/blogdetails';

import "react-toastify/dist/ReactToastify.css"
import About from './pages/About/About';
import Contactus from './pages/Contactus/Contactus';
import CartPrescription from './pages/cartPrescription/cartPrescription';
import Succesfull from './pages/paymentSuccessful/succesfull';
import Paymenterror from './pages/PaymentError/PaymentError';
import jwt_decode from "jwt-decode";
import CheckoutForm from './pages/pay/checkout';

import ReactGA from "react-ga";

// const TRACKING_ID = "G-KVE5WJ15TG";
// ReactGA.initialize(TRACKING_ID);

function App() {

const TRACKING_ID = "G-KVE5WJ15TG";
ReactGA.initialize(TRACKING_ID);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  let [resetter, setResetter] = useState(true)

  let { favoriteProductIdObject } = useSelector(state => state.backupReducer);




  setInterval(() => {
    checkToken();
  }, 3000);

  function checkToken() {
    if (localStorage.getItem("oAuth")) {
      let value = localStorage.getItem("oAuth");
      const remainingString = value.slice(7);
      let decodedToken = jwt_decode(remainingString);
      let tokenValue = (decodedToken.exp * 1000)

      if (tokenValue < Date.now()) {
        for (let i = 0; i < favoriteProductIdObject.length; i++) {
          localStorage.removeItem(favoriteProductIdObject[i]._id);
        }
        localStorage.clear();
        setResetter(!resetter);
        navigate("/");
        dispatch(isLogin(false));

      }
    }
  }


  useEffect(() => {
    if (localStorage.getItem("isLogin") == null || localStorage.getItem("isLogin") == false) {
      dispatch(isLogin(false));
    } else {
      dispatch(isLogin(true));
    }
  }, [])


  useEffect(() => {
  }, [resetter])

  const loaderStatus = useSelector(state => state.apiReducer.loader);

  return (
    <div className="App">
      <TailSpin height="100" width="80"
        color="#f60101"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="tailSpin"
        visible={loaderStatus}
      />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/onlinemedicine" exact element={<Onlinemedicine />} />
        <Route path="/Searchmed/:id" exact element={<Searchmed />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/medicine/:id1/:id" exact element={<Medicine />} />
        <Route path="/popularity/:id1/:id2/:id3" element={<Popularity />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/categories" exact element={<Categories />} />
        <Route path="/prescription" exact element={<Prescription />} />
        <Route path="/profile/:id" exact element={<Profile />} />
        <Route path="/coupoun" exact element={<Coupoun />} />
        <Route path="/coupounoffer" exact element={<Coupounoffer />} />
        <Route path="/wishlist" exact element={<Wishlist />} />
        <Route path="/privacypolicy" exact element={<Privacypolicy />} />
        <Route path="/fpppolicy" exact element={<Fpppolicy />} />
        <Route path="/termsandcondition" exact element={<Termsandcondition />} />
        <Route path='/Shippingdelivery' exact element={<Shippingdelivery />} />
        <Route path='/RefundReturn' exact element={<RefundReturn />} />
        <Route path='/Blogdetails/:id' exact element={<Blogdetails />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/contactus' exact element={<Contactus />} />
        <Route path='/cartPrescription' exact element={<CartPrescription />} />
        <Route path='/Success/:id' exact element={<Succesfull />} />
        <Route path='/errors' exact element={<Paymenterror />} />
        <Route path='/checkout' exact element={<CheckoutForm />} />
      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import "./blogdetails.css";
import bannerbg from "../../assets/images/bannerbg.png";
import { MdOutlineDateRange } from "react-icons/md";
import author1 from "../../assets/images/author1.png";
import {BiChevronRight} from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { loader } from "../../redux/common";
import { toast } from "react-toastify";
import { getblogsDetailCb } from "../../redux/product"
import {  useParams , useNavigate} from "react-router-dom";


const Blogdetails = () => {

  const dispatch = useDispatch();
  const search = useParams();
  const navigate = useNavigate();
 

  const[blogdetail, setBlogdetail]=useState([]);
  const[writerdata, setWriterdata]=useState([]);

  useEffect(() => {
    const id = search;
    console.log(id.id, "id");

   
    dispatch(getblogsDetailCb(id.id,(resp) =>
    {
      dispatch(loader(false));
      if(resp && resp.status)
      {
          console.log(resp,"blogs");
          setBlogdetail([resp.blogInfo]);
          setWriterdata([resp.writterInfo]);
          console.log("new",resp.writterInfo)
      }
      
      else{
          console.log(resp);
          toast.error(resp ? resp.message : "Error occurred while searching");
      }
  })
      )

   
}, []);

  return (
    <div>
      <div className="container ">
        <div className="d-flex px-md-4 py-3 bgLightYellow">
          <a className="text-decoration-none text-dark">
            <p className="fw6 results mb-0">Home <span><BiChevronRight/></span></p>
          </a>
          <a className="text-decoration-none text-dark">
            <p className="fw6 results mb-0">Blog<span><BiChevronRight/></span></p>
          </a>
          {
        blogdetail.map((item, i) => {
                            return (
          <a className="text-decoration-none text-dark">
            <p className="fw6 results mb-0"dangerouslySetInnerHTML={{ __html: item?.title }}></p>
          </a>
          );
        })}
        </div>
        {
        blogdetail.map((item, i) => {
                            return (
        <div className="contentCstm">
          <h2 dangerouslySetInnerHTML={{ __html: item?.title }}></h2>
          <div className="">
           <div>
           <img src={item?.imgUrl} alt="blog1" className="img-fluid"/>
           </div>
            <div className="d-flex justify-content-between mt-3">
              {/* <button className="btn bgRed text-white fw6">{item?.category}</button> */}
            
                <p className="mb-0">
                  <span className="mx-2 timeDateClr">
                    <MdOutlineDateRange />
                  </span>
                  {item?.updatedAt.split('T')[0]}
                </p>
             
            </div>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: item?.content}}/>
               

         
            <div className="mt-4">
              <h5 className="fw6">Written by</h5>
              <div className="row">
                  <div className="col-lg-6 col-md-8 col-sm-12" >
                   <div className="card p-3" onClick={() => { navigate(`/qualification/?type=writer&id=${writerdata[0]?._id}`) }}>
                   <div className="row">
                      <div className="col-sm-2 col-3 align-self-center">
                        <img src={writerdata[0]?.imageUrl} alt="" className="img-fluid" />
                      </div>
                      <div className="col-sm-10 col-9" >
                        <h5 className="textRed fw6">{writerdata[0]?.name}</h5>
                        <p className="mb-0 text-muted">Content Writer</p>
                      </div>
                    </div>
                   </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        );
                        })}
      </div>
    </div>
  );
};

export default Blogdetails;

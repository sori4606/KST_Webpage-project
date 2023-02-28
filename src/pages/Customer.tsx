import React, { useEffect, useRef, useState } from "react";
import "./Customer.css";
import Intro_Header from "./Intro_Header";
import useIntersectionObsever from "../hooks/useIntersectionObserver";
import "../pages/Animate.css";

const Customer = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  
  const isInViewport = useIntersectionObsever(ref, 0);
  const isInViewport2 = useIntersectionObsever(ref2, 0);
  const isInViewport3 = useIntersectionObsever(ref3, 0);
  const isInViewport4 = useIntersectionObsever(ref4, 0);
  const isInViewport5 = useIntersectionObsever(ref5, 0);
  const isInViewport6 = useIntersectionObsever(ref6, 0);
  const isInViewport7 = useIntersectionObsever(ref7, 0);
  const isInViewport8 = useIntersectionObsever(ref8, 0);

  let [fade, setFade] = useState("");
  let [fade2, setFade2] = useState("");
  let [fade3, setFade3] = useState("");
  let [fade4, setFade4] = useState("");
  let [fade5, setFade5] = useState("");
  let [fade6, setFade6] = useState("");
  let [fade7, setFade7] = useState("");
  let [fade8, setFade8] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("endLeft");
    }, 100);
    return () => {
      setFade("");
    };
  }, [isInViewport]);

  useEffect(() => {
    setTimeout(() => {
      setFade2("endLeft");
    }, 100);
    return () => {
      setFade2("");
    };
  }, [isInViewport2]);

  useEffect(() => {
    setTimeout(() => {
      setFade3("endLeft");
    }, 100);
    return () => {
      setFade3("");
    };
  }, [isInViewport3]);

  useEffect(() => {
    setTimeout(() => {
      setFade4("endLeft");
    }, 100);
    return () => {
      setFade4("");
    };
  }, [isInViewport4]);

  useEffect(() => {
    setTimeout(() => {
      setFade5("endLeft");
    }, 100);
    return () => {
      setFade5("");
    };
  }, [isInViewport5]);

  useEffect(() => {
    setTimeout(() => {
      setFade6("endLeft");
    }, 100);
    return () => {
      setFade6("");
    };
  }, [isInViewport6]);

  useEffect(() => {
    setTimeout(() => {
      setFade7("endLeft");
    }, 100);
    return () => {
      setFade7("");
    };
  }, [isInViewport7]);

  useEffect(() => {
    setTimeout(() => {
      setFade8("endLeft");
    }, 100);
    return () => {
      setFade8("");
    };
  }, [isInViewport8]);

  return (
    <div className="Customer_All" style={{ position: "relative" }}>
      <Intro_Header />

      <div className="middle">
        <div className="Customer_sub1">
          <span>Works Together</span>
        </div>

        <div className="Customer_sub2">
          <span>ㅡ매출처</span>
        </div>

        <div className="Customer_sub3">
          <div className="customerContainer">
            <div ref = {ref} className={isInViewport? "item startLeft " + fade : 'item'} style={{height:'220px', width:'250px'}}>
              <img src = './img/solid.png' alt = 'solidLogo' style={{objectFit:'fill', width:'70%' , height:'40%', marginLeft:'10%'}} />
              <div className="itemSub" style={{marginTop:'-10%'}}>(주)쏠리드</div>
            </div>
            <div ref = {ref2} className={isInViewport2? "item startLeft " + fade2 : 'item'} style={{height:'220px'}}>
              <img src = './img/SKT_logo.png' alt = 'SKTLogo' />
              <div className="itemSub">SKT</div>
            </div>
            <div ref = {ref3} className={isInViewport3? "item startLeft " + fade3 : 'item'} style={{height:'220px', width:'250px'}}>
              <img src = './img/LG_logo.png' alt = 'LGLogo' style={{objectFit:'fill', width:'70%' , height:'40%', marginLeft:'10%'}} />
              <div className="itemSub" style={{marginTop:'-10%'}}>LG</div>
            </div>
            <div ref = {ref4} className={isInViewport4? "item startLeft " + fade4 : 'item'} style={{height:'220px', width:'250px'}}>
              <img src = './img/KT_logo.png' alt = 'KTLogo' style={{objectFit:'fill', width:'70%' , height:'40%', marginLeft:'10%'}} />
              <div className="itemSub" style={{marginTop:'-10%'}}>KT</div>
            </div>
            <div ref = {ref5} className={isInViewport5? "item startLeft " + fade5 : 'item'} style={{height:'220px'}}>
              <img src = './img/Verizon_logo2.png' alt = 'VerizonLogo' style={{width:'60%', marginLeft:'15%'}}/>
              <div className="itemSub">Verizon</div>
            </div>
            <div ref = {ref6} className={isInViewport6? "item startLeft " + fade6 : 'item'} style={{height:'220px', width:'250px'}}>
              <img src = './img/KDDI_logo.jpeg' alt = 'KDDILogo' style={{objectFit:'fill', width:'70%' , height:'40%', marginLeft:'10%'}} />
              <div className="itemSub"  style={{marginTop:'-10%'}}>KDDI</div>
            </div>
            <div ref = {ref7} className={isInViewport7? "item startLeft " + fade7 : 'item'} style={{height:'220px'}}>
              <img src = './img/Docomo_logo.gif' alt = 'DocomoLogo' />
              <div className="itemSub">Docomo</div>
            </div>
            <div ref = {ref8} className={isInViewport8? "item startLeft " + fade8 : 'item'} style={{height:'220px', width:'250px'}}>
              <img src = './img/BAI_Communications_logo.jpeg' alt = 'BAI_CommunicationLogo' style={{objectFit:'fill', width:'70%' , height:'40%', marginLeft:'10%'}} />
              <div className="itemSub" style={{marginTop:'-10%'}}>BAI Communications</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;

import React, { useEffect, useRef, useState } from "react";
import "./Product.css";
import useIntersectionObsever from "../hooks/useIntersectionObserver";
import "../pages/Animate.css";


const Product = () => {
  let [fade0, setFade0] = useState('');

  useEffect(() => {
    setFade0('endFadeIn')
    return () => {
      setFade0('');
    }
  },[])
  
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  
  const isInViewport = useIntersectionObsever(ref, 0);
  const isInViewport2 = useIntersectionObsever(ref2, 0);
  const isInViewport3 = useIntersectionObsever(ref3, 0);
  
  const isInViewport4 = useIntersectionObsever(ref4, 0);
  const isInViewport5 = useIntersectionObsever(ref5, 0);
  const isInViewport6 = useIntersectionObsever(ref6, 0);

  let [fade, setFade] = useState("");
  let [fade2, setFade2] = useState("");
  let [fade3, setFade3] = useState("");

  let [fade4, setFade4] = useState("");
  let [fade5, setFade5] = useState("");
  let [fade6, setFade6] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("endRight");
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
      setFade3("endRight");
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
      setFade5("endRight");
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

  return (
    
    <div className="Product">
      <div className={'startFadeIn ' +fade0}>
        <img src="./img/Product.jpg" alt="Product_image" />
      </div>

      <div className='Product_Sub1'>
        Product
      </div>
      <div className = 'introduce'>
        <span >ㅡ제품소개</span>
      </div>
      
      <div className="Product1" style={{position: 'relative',top:'100px'}}>
        
        <ul ref = {ref} className={isInViewport? 'startRight ' + fade : ''}>
          <img src = './img/NXP Processor.png' alt="NXP_png" />
          <li>
            Digital 광 분산 중계기 (Genesis) Control
            Processor : NXP LS1020AXE7KQB
          </li>
        </ul>

        <ul ref = {ref2} className={isInViewport2? 'startLeft ' + fade2 : ''}>
          <li>
              Digital 광 분산 중계기 (Genesis) Control
              Processor : TI AM3352BZCZD60
          </li>
          <img src = './img/T1 Processor.jpg' alt="T1_png" />

        </ul>
        
        <ul ref = {ref3} className={isInViewport3? 'startRight ' + fade3 : ''}>
          <img src = './img/Xilinx Processor.png' alt="Xilinx_png" />
          <li>
            Analog 광 분산 중계기 (Alliance,single SDM) Module
            Processor : Xilinx XC7Z020 (Zynq MPSoC)
          </li>
        </ul>

        <ul ref = {ref4} className={isInViewport4? 'startLeft ' + fade4 : ''}>
          <li>
            Analog 광 분산 중계기 (Alliance,dual SDM) Module
            Processor : Xilinx XC7Z020 (Zynq MPSoC)
          </li>
          <img src = './img/Xilinx2 Processor.jpg' alt="Xilinx_png" />

        </ul>
        
        <ul ref = {ref5} className={isInViewport5? 'startRight ' + fade5 : ''}>
          <img src = './img/XCZU5CG_2.png' alt="Xilinx_png" />
          <li>
            Analog 광 분산 중계기 (Alliance) DPD Module
            Processor : Xilinx XCZU5CG (UltraScale  Zynq MPSoC)
          </li>
        </ul>
        
        <ul ref = {ref6} className={isInViewport6? 'startLeft ' + fade6 : ''}>
          <li>
            Analog 광 분산 중계기 (Alliance) DPD Module
            Processor : Xilinx XCZU9CG (UltraScale  Zynq MPSoC)
          </li>
          <img src = './img/XCZU9CG_2.jpg' alt="Xilinx_png" />

        </ul>
        

      </div>


    </div>

  );
};

export default Product;

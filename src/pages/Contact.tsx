import React, { useEffect, useRef, useState } from "react";
import './Contact.css';
import useIntersectionObsever from "../hooks/useIntersectionObserver";
import "../pages/Animate.css";

const Contact = () => {
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
  
  const isInViewport = useIntersectionObsever(ref, 0);
  const isInViewport2 = useIntersectionObsever(ref2, 0);
  const isInViewport3 = useIntersectionObsever(ref3, 0);
  

  let [fade, setFade] = useState("");
  let [fade2, setFade2] = useState("");
  let [fade3, setFade3] = useState("");


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
      setFade3("endRightImg");
    }, 100);
    return () => {
      setFade3("");
    };
  }, [isInViewport3]);

  return (
    <div
      className="Contact"
    >
      <section style={{height:'700px'}}>
        <div> 
          <img className={'Contact_img1 startFadeIn ' + fade0} src="./img/telephone2.png" alt="Contact_image" />
        </div> 
        {/* <div className="Contact_text">
          Contact
        </div> */}
      </section>





      <div className="Contact_Sub1">Inquiry</div>
      <div className="Inquiry">
        <span>ㅡ문의하기</span>
      </div>

      <div ref = {ref} className={isInViewport? "Contact_text2 startLeft " + fade : "Contact_text2"}>
        고객의 만족을 위해서 최선을 다하는 KST가 되겠습니다.
      </div>

      <div ref = {ref2} className={isInViewport2? "Contact_text3 startLeft " + fade2 : "Contact_text3"}>
        안녕하세요, KST고객상담실 입니다.
        회사에 관련된 문의는 아래 번호로 연락주십시오.
      </div>

      <img ref = {ref3} className = {isInViewport3? 'Contact_img2 startRightImg '+ fade3 : "Contact_img2"} src = './img/KST_building.png' alt = 'KST_building' />

      <div className = 'Contact_text4'>

        <div className="Contact_text4_sub1">
          <img src = './img/Contact.png' alt = 'Contact_img' />
          <div className="Contact_text4_sub1_sub"><h2>Tel</h2>
           02-6478-1900</div>
        </div>

        <div className="Contact_text4_sub2">
          <img src = './img/clock2.png' alt = 'Contact_img' />
          <div className="Contact_text4_sub2_sub"><h2>운영시간</h2>
          평일 월~금 오전 09:00 ~ 오후 6:00 운영 / 점심시간 12:00 ~ 13:00 / 토, 일, 공휴일 휴무</div>
        </div>

      </div>

    </div>
  );
};

export default Contact;

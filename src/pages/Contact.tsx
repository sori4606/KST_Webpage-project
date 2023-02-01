import React, { useEffect, useState } from "react";
import './Contact.css';

const Contact = () => {
  let [fade, setFade] = useState('');

  useEffect(() => {
    setFade('end')
    return () => {
      setFade('');
    }
  },[])

  return (
    <div
      className="Contact"
      style={{ position: "relative", background: "#fffff4", height: "2300px" }}
    >
      
      <div className="Contact_text">
        Contact
      </div>
      <div>
        <img className={'Contact_img1 start ' + fade} src="./img/telephone.jpg" alt="Contact_image" />
      </div>

      <div className="Contact_Sub1">Inquiry</div>
      <div className="Inquiry">
        <span>ㅡ문의하기</span>
      </div>

      <div className="Contact_text2">
        고객의 만족을 위해서 최선을 다하는 KST가 되겠습니다.
      </div>

      <div className="Contact_text3">
        안녕하세요, KST고객상담실 입니다.
        회사에 관련된 문의는 아래 번호로 연락주십시오.
      </div>

      <img className = 'Contact_img2'src = './img/KST_building.png' alt = 'KST_building' />

      <div className = 'Contact_text4'>
        <div className="Contact_text4_sub1" style={{border:'1px solid black', background:'white'}}>
          <img src = './img/Contact.png' alt = 'Contact_img' />
          <span>Tel : 02-6478-1900</span>

        </div>

        <div className="Contact_text4_sub2" style={{border:'1px solid black', paddingTop:'10px', marginTop:'10px', background:'white'}}>
          <img src = './img/clock.jpg' alt = 'Contact_img' />
          <span>평일 월~금 오전 09:00 ~ 오후 6:00 운영 / 점심시간 12:00 ~ 13:00 / 토, 일, 공휴일 휴무</span>
        </div>

      </div>

    </div>
  );
};

export default Contact;

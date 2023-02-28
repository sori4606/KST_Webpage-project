import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";
import Intro_Header from './Intro_Header';
import useIntersectionObsever from "../hooks/useIntersectionObserver";
import '../pages/Animate.css';

const AboutUs = () => {
  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  
  const isInViewport = useIntersectionObsever(ref, 0)
  const isInViewport2 = useIntersectionObsever(ref2, 0.3)
  const isInViewport3 = useIntersectionObsever(ref3, 0)
  const isInViewport4 = useIntersectionObsever(ref4, 0.3)

  let [fade, setFade] = useState('');
  let [fade2, setFade2] = useState('');
  let [fade3, setFade3] = useState('');
  let [fade4, setFade4] = useState('');
  
  useEffect(() => {
    setTimeout(()=>{ setFade('endFadeIn') }, 100)
    return () => {
      setFade('');
    }
  },[isInViewport])

  useEffect(() => {
    setTimeout(()=>{ setFade2('endLeft') }, 100)
    return () => {
      setFade2('');
    }
  },[isInViewport2])
 
  useEffect(() => {
    setTimeout(()=>{ setFade3('endAbout3') }, 100)
    return () => {
      setFade3('');
    }
  },[isInViewport3])

  useEffect(() => {
    setTimeout(()=>{ setFade4('endLeft') }, 100)
    return () => {
      setFade4('');
    }
  },[isInViewport4])

  
  return (
    <div className="AboutUs" style={{background:'#fffff4' , width:'100%', height:'100%'}}>
      <Intro_Header />
      <div ref = {ref} className={isInViewport? 'AboutUs_Sub1 startFadeIn ' + fade : 'AboutUs_Sub1'}>
        About us
      </div>
      
      <div className = {isInViewport? 'introduce startFadeIn ' + fade : 'introduce'}>
        <span >ㅡ회사소개</span>
      </div>
      
      <div ref = {ref2} className = {isInViewport2? 'board_text1 startLeft ' + fade2 : 'board_text1'}>더욱 발전된 세상, KST의 기술력이 만듭니다.</div>
      <div ref = {ref4} className = {isInViewport4? 'board_text2 startLeft ' + fade4 : 'board_text2'}>2001년, 이동통신 서비스 발전을 꿈꾸며 KST의 도전이 시작되었습니다.
              차별화된 기술로 중계기 발전에 기여하겠습니다.</div>
  
      <div ref = {ref3} className = {isInViewport3? 'board_img ' + fade3 : 'board_img'} >
        <img src = './img/controlboard.jpg' alt = 'controlboard_img'/>
      </div>

      <div className = 'Company_information'>
        <dl>
          <dt>
            회사명
            <div className = 'AboutUs_Name'>
              <span className="material-symbols-outlined">
                apartment
              </span>
            </div>
          </dt>
          <dd>(주)KST테크놀로지</dd>
        </dl>

        <dl>
          <dt>
            설립일
            <div className = 'AboutUs_Name'>
            <span className="material-symbols-outlined">
              calendar_month
            </span>
            </div>
          </dt>
          <dd>2001.03.17</dd>
        </dl>
        
        <dl>
          <dt>
            대표이사
            <div className = 'AboutUs_Name'>
              <span className="material-symbols-outlined">
                person
              </span>
            </div>
          </dt>
          <dd>송준화</dd>
        </dl>
                
        <dl>
          <dt>
            최고매출액
            <div className = 'AboutUs_Name'>
              <span className="material-symbols-outlined">
                attach_money
              </span>
            </div>
          </dt>
          <dd>219억원(2022 기준)</dd>
        </dl>
                
        <dl>
          <dt>
            직원수
            <div className = 'AboutUs_Name'>
              <span className="material-symbols-outlined">
                groups
              </span>
            </div>
          </dt>
          <dd>26명</dd>
        </dl>
                
        <dl>
          <dt>
            업종
            <div className = 'AboutUs_Name'>
              <span className="material-symbols-outlined">
                category
              </span>
            </div>
          </dt>
          <dd>이동통신 중계기</dd>
        </dl>
                
        <dl>
          <dt>
            본사전화
            <div className = 'AboutUs_Name'>
              <span className="material-symbols-outlined">
                call
              </span>
            </div>
          </dt>
          <dd>02-6478-1900</dd>
        </dl>
                
        <dl>
          <dt>
            주요납품군
            <div className = 'AboutUs_Name'>
              <span className="material-symbols-outlined">
                inventory_2
              </span>
            </div>
          </dt>
          <dd>MOULE 및 System</dd>
        </dl>

      </div>
    </div>
  );
};

export default AboutUs;
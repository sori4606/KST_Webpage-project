import React, { ReactNode, useEffect, useRef, useState, FC } from "react";
import "./Layout.css";
import { Link } from "react-router-dom";
import useIntersectionObsever from "../hooks/useIntersectionObserver";
import '../pages/Animate.css';
import styled from "styled-components";



const Layout= () => {

  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref7 = useRef(null)
  const ref8 = useRef(null)
  
  const isInViewport = useIntersectionObsever(ref, 0)
  const isInViewport2 = useIntersectionObsever(ref2, 0.1)
  const isInViewport3 = useIntersectionObsever(ref3, 0.1)
  const isInViewport4 = useIntersectionObsever(ref4, 0.1)
  const isInViewport5 = useIntersectionObsever(ref5, 0.1)
  const isInViewport7 = useIntersectionObsever(ref7, 0.1)
  const isInViewport8 = useIntersectionObsever(ref8, 0.1)

  let [fade, setFade] = useState('');
  let [fade2, setFade2] = useState('');
  let [fade3, setFade3] = useState('');
  let [fade4, setFade4] = useState('');
  let [fade5, setFade5] = useState('');
  let [fade6, setFade6] = useState('');
  let [fade7, setFade7] = useState('');
  let [fade8, setFade8] = useState('');

  const mark = '→'





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
    setTimeout(()=>{ setFade3('endLeft') }, 100)
    return () => {
      setFade3('');
    }
  },[isInViewport3])

  useEffect(() => {
    setTimeout(()=>{ setFade4('endFadeIn') }, 100)
    return () => {
      setFade4('');
    }
  },[isInViewport4])
  
  useEffect(() => {
    setTimeout(()=>{ setFade5('endLayoutWidth') }, 300)
    return () => {
      setFade5('');
    }
  },[isInViewport5])

  useEffect(() => {
    setTimeout(()=>{ setFade6('endFadeIn') }, 100)
    return () => {
      setFade6('');
    }
  },[isInViewport5])
  

  useEffect(() => {
    setTimeout(()=>{ setFade7('endFadeIn') }, 100)
    return () => {
      setFade7('');
    }
  },[isInViewport7])

  useEffect(() => {
    setTimeout(()=>{ setFade8('endFadeIn') }, 100)
    return () => {
      setFade8('');
    }
  },[isInViewport8])
  
  
  return (
    
    <div className="layout">
      
      <>
        <main className="main">
          <article className="section1" style={{height:'700px'}}>
            <div ref = {ref} className={isInViewport? "section1_1 startFadeIn " + fade : "section1_1"}>
              <img src="./img/main_page.jpg" alt="main_img" />
            </div>
            <div className={isInViewport? "motto startFadeIn " + fade : "motto"}>
              <h2>
                <div>Continue to Develop</div>
                <div>And Achieve.</div>
              </h2>
            </div>
          </article>

          <article className="section2">
            <div className="section2_About" style={{width:'100%'}}>
              <h2 ref = {ref2} className={isInViewport2? "startLeft " + fade2 : ""}>(주)KST TECHNOLOGY</h2>
              <h3 ref = {ref3} className={isInViewport3? "startLeft " + fade3 : ""}>A leading, Developing Company</h3>
              <p>
                (주)KST는 이동통신 네트워크에 대한 최적의 기술력을 제공합니다.
              </p>
            </div>

            <Link to="AboutUs">
              <div ref = {ref4} className={isInViewport4? "view_more startFadeIn " + fade4  : "view_more"}>View More</div>
            </Link>
          </article>
          
          <article className="section3" style={{background:'#879a82', height:'1400px', width:'100%'}}>
            <div ref = {ref7} className={isInViewport7? "section3Title startFadeIn " + fade7 : "section3Title"}>Innovative <div>Research</div></div>
            <div ref = {ref5} className={isInViewport5? "section3Content startFadeIn " +fade6 : "section3Content"}><h2 style={{fontSize:'20px'}}>끊임없는 연구개발로 이동통신 네트워크 발전에 기여하겠습니다.</h2>
              (주)케이에스티테크놀로지는 2001년 창사 이래 꾸준한 개발과 발전으로 성장해왔습니다.
              현재 IoT 기반 감시 제어, 무선 결재 솔루션, 임베디드 소프트웨어 및 시스템 사업으로 사업 영역을 확대해 나가고 있습니다.
            </div>
            <div ref = {ref5} className={isInViewport5? "startLayoutWidth " + fade5 : ""}>
              <img src="./img/Research.jpg" alt="ResearchImg" />
            </div>
          </article>

          <article className="section4">
            <div className="section4Content">문의사항을 남겨주시면 빠르고 상세하게 답변을 도와드립니다.</div>

            
            <Link to="Contact">
              <div className="section4Content2">문의하기 {mark} </div>
            </Link>



            </article>
        </main>
      </>


    </div>
  );
};

export default Layout;

import React, { useEffect, useRef, useState } from 'react'
import './Intro_Header.css';
import useIntersectionObsever from "../hooks/useIntersectionObserver";
import '../pages/Animate.css';


const Intro_Header = () => {
  
  let [fade, setFade] = useState('');

  
  useEffect(() => {
    setTimeout(()=>{ setFade('endFadeIn') }, 100)
    return () => {
      setFade('');
    }
  },[])
  return (

      <div className = 'AboutUs' style={{position:'relative'}}>
        <div className={'container startFadeIn ' + fade}>
          <img src="./img/AboutUs.jpg" alt="AboutUs_image" />
        </div>
        <div>
          <h2>
            <div className="AboutUs_text1">ABOUT KST</div>
            <div className="AboutUs_text2">BUILDING A BETTER FUTURE THROUGH REPEATER</div>
          </h2>
        </div>
      </div>

  )
}


export default Intro_Header
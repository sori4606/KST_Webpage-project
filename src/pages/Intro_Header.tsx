import React, { useEffect, useState } from 'react'
import './Intro_Header.css';

const Intro_Header = () => {

    let [fade, setFade] = useState('');

    useEffect(() => {
      setFade('end')
      return () => {
        setFade('');
      }
    },[])
  
  return (

      <div className = 'AboutUs' style={{position:'relative'}}>
        <div className={'container start ' + fade}>
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
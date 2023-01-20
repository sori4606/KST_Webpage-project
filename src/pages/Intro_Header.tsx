import React from 'react'
import './Intro_Header.css';

const Intro_Header = () => {
  return (

      <div className = 'AboutUs' style={{position:'relative'}}>
        <div>
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
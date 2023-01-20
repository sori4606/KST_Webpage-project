import React from 'react'
import './Technology.css'

const Technology = () => {
  return (
    <div className="Technology" style={{ position: "relative" , background:'#fffff4', height:'3100px'}}>
      <div>
        <img src="./img/Technology.jpg" alt="Product_image" />
      </div>

      <div className='Technology_Sub1'>
        Technology
      </div>
      <div className = 'introduce'>
        <span >ㅡ제품소개</span>
      </div>

      <div className='Technology1'>
        <img src = './img/IoT.webp' alt = 'IoT_img' />

      </div>
    </div>
  )
}

export default Technology
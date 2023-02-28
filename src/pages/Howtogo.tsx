import React from "react";
import Location from "./Location";
import "./Howtogo.css";
import Intro_Header from "./Intro_Header";

const Howtogo = () => {
  const str = "간선버스 : 30-5, 30, 3412, 3413, 3414\n *올림픽공원 남2문 앞 하차\n 지하철 : 9호선 한성백제역 4번출구에서 280미터"
  return (
    <div className="Howtogo">
      <Intro_Header />
      <div className='AboutUs_Sub1'>
        Contact us
      </div>
      <div className = 'introduce'>
        <span >ㅡ오시는 길</span>
      </div>

      <div className="map_location">
        <Location />
      </div>

      <div className='vehicle'>
        <div className="vehicle_sub">
          <span className="material-symbols-outlined">
            directions_car
          </span>
          <div className="vehicle_sub2">
            승용차
          </div>

          <div className="car_sub">
            서울특별시 송파구 방이동 164-1번지 KST빌딩
          </div>

        </div>

        <div className="vehicle_sub">
          <span className="material-symbols-outlined">
            directions_bus
          </span>
          <div className="vehicle_sub3">
            대중교통
          </div>

          <div className="bus_sub">
            {str}
          </div>
        </div>
        
        <div className="vehicle_sub">
          <span className="material-symbols-outlined">
            local_parking
          </span>
          <div className="vehicle_sub4">
            주차안내
          </div>

          <div className="parking_sub">
            KST 빌딩 지상 1층
          
          </div>
        </div>


      </div>
    </div>
  );
};

export default Howtogo;

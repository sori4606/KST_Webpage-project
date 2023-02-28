/*global kakao*/ 
import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

function Location() {
  const [map, setMap] = useState<any>(null); // map 변수를 useState를 사용하여 선언합니다.

  function setZoomable(zoomable: boolean) {
    if (map) { // map 변수가 null이 아닐 경우에만 setZoomable 함수 실행
      map.setZoomable(zoomable);
    }
  }

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.51323439063145, 127.12231668344003),
      draggable: false,
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    setMap(map); // map 변수를 state로 설정해줍니다. setZoomable에서도 읽을 수 있게 하기 위해서.

    var markerPosition = new kakao.maps.LatLng(37.51323439063145, 127.12231668344003);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    var iwContent = `<div style="padding:5px; height:55px;">(주)케이에스티테크놀로지 <span style="font-weight:100;font-size:1px;" >(우)05636</span>
         <br><a href="https://map.kakao.com/link/map/(주)케이에스티테크놀로지,37.51323439063145,127.12231668344003" style="color:blue" target="_blank">큰지도보기</a>
        <a href="https://map.kakao.com/link/to/(주)케이에스티테크놀로지,37.51323439063145,127.12231668344003" style="color:blue" target="_blank">길찾기</a></div>`,
      iwPosition = new kakao.maps.LatLng(37.51323439063145, 127.12231668344003);

    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    infowindow.open(map, marker);

    window.onresize = function () {
      showAsCenterByMarker();
    };

    function showAsCenterByMarker() {
      map.setCenter(marker.getPosition());
    }

    marker.setMap(map);
  }, []);

    return(
        <>
            <div id='map' style={{width: '91%' , height: '650px'}}></div>
            <button style = {{width:'10rem', height:'3rem', marginTop:'2rem', marginRight:'2rem'}} onClick={() => setZoomable(false)}>지도 확대/축소 끄기</button>
            <button style = {{width:'10rem', height:'3rem', marginTop:'2rem'}} onClick={() => setZoomable(true)}>지도 확대/축소 켜기</button>
        </>
    )
}

export default Location;
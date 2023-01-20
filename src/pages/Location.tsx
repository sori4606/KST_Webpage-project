/*global kakao*/ 
import React, { useEffect } from 'react';

declare global{
    interface Window{
        kakao: any;
    }
}

const { kakao } = window;

function Location() {

    useEffect(() => {
        const container = document.getElementById('map');
        const options={
            center:new kakao.maps.LatLng(37.51323439063145, 127.12231668344003), level: 3
        };
        
        const map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(37.51323439063145, 127.12231668344003); 
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
    marker.setMap(map);
    }, [])

    return(
        <div id='map' style={{width: '89%' , height: '650px'}}>
        </div>
    )


}

export default Location;
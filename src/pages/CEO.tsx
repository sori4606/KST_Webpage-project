import React from 'react'
import './CEO.css';
import Intro_Header from './Intro_Header';

const CEO = () => {
  return (
    <div className = 'CEO_All' style={{position:'relative', background:'#fffff4'}}>
      <Intro_Header />
      <div className='CEO_Message'>
        CEO Message
      </div>

      <div className='KST_back'>KST</div>

      <div className = 'CEO_Message_sub'>
        <span >ㅡCEO 메시지</span>
      </div>
      <div className = 'company_building'>
        <img src = './img/KST_building.png' alt = 'building_img' />
        <div className='CEO_talk'><div><span className = 'greets' style={{fontWeight:'1000'}}>안녕하십니까?</span></div>
        <span>
          ㈜ 케이.에스.티. 테크놀로지 홈페이지를 찾아주신 고객 여러분께 감사
          드리며 진심으로 환영합니다.
          저희 회사는 2001년 창사이래 이동 통신용 중계기의 핵심 요소 기술인 NMS Controller, RF Module, Digital FPGA 신호처리 기술을 공급하면서
          이동통신 서비스 발전에 기여해왔습니다.
          그동안 이동통신 산업의 발전과 고객 만족 향상을 위하여 신기술 개발에 최선을 다하였으며, 앞으로도 최고의 제품과 서비스로 고객에게 사랑받고 신뢰받는 기업으로 거듭나겠습니다.
          이제는 그간의 노력을 바탕으로 신성장동력의 확충과 시장 확대 등 괄목할만한 성과를 얻고 있으며, 저희 임직원은 더욱 일치단결하여 최고의 기술력과 경쟁력을 갖춘 내실있는 기업, 고객 감동을 통해 사랑받는 기업을
          만들기 위해 최선을 다하겠습니다.
          고객 여러분의 성원과 관심에 감사 드립니다.
          </span>
          <div className='CEO_Name' style={{fontWeight:'1000'}}>대표이사 송준화</div>
          </div>
      </div>

    </div>
  )
}

export default CEO
import React from 'react'
import Intro_Header from './Intro_Header';
import './Company_History.css';

const Company_History = () => {
  return (
    <div className='History' style={{background:'#fffff4'}}>
      <Intro_Header />

      <div className='History_all' >

        <div className = 'History_sub1'>
          OUR HISTORY
        </div>

        <div className='History_2023'>
          2021 - 2025
        </div>

        <div className='History_material'>
          <div>
            <span className="material-symbols-outlined">
              circle
            </span>
          </div>
        </div>

        <div className='KST_building' style={{width:'48%'}}>
          <img src = './img/KST_building.png' />
          <h1>KST TECHNOLOGY</h1>
        </div>


        <div className='History_2023_content'>
          <ul>
            <li>
              433MHz 기반 드론 응용 통신기술 개발 및 실증 (무인이동체 미래선도 핵심기술개발사업)
            </li>
          </ul>
        </div>
          
        
        <div className='History_2021'>
          2019 - 2021
        </div>

        <div className='History_material'>
          <div>
            <span className="material-symbols-outlined">
              circle
            </span>
          </div>
        </div>

        <div className='History_2021_content'>
          <ul>
            <li>
              개방형 프론트홀 인터페이스(O-RAN)을 지원하는 다중 대역, 다중 서비스, 다중 인터페이스의 5G DAS 기술 개발
            </li>
            <li>
              5G 수출향 중계기 RF MODULE, CPU BOARD, DIGITAL BOARD 개발
            </li>
          </ul>
        </div>
        
        <div className='History_2017'>
          2017 - 2018
        </div>

        <div className='History_material'>
          <div>
            <span className="material-symbols-outlined">
              circle
            </span>
          </div>
        </div>

        <div className='History_2017_content'>
          <ul>
            <li>
              (WC300 프로젝트 기술개발지원사업)
              ICS와 DAS의 미래 핵심기술 확보를 통한 Total Coverage Solution 개발
            </li>
            <li>
              (민군기술 적용연구)
              TICN 무선망에서 간섭신호제거 기술을 사용한 동일주파수 재전송 방식의 고출력, 고효율, 저지연, 듀얼모드 셀 커버리지 확장 장치 개발
            </li>
            <li>
              SKT, LGU+, KT 5G RF 광중계기 개발
            </li>
          </ul>
        </div>
                
        <div className='History_2015'>
          2015 - 2017
        </div>

        <div className='History_material'>
          <div>
            <span className="material-symbols-outlined">
              circle
            </span>
          </div>
        </div>

        <div className='History_2015_content'>
          <ul>
            <li>
              (에너지수요관리핵심기술)
              도파로 센서를 이용한 유사 석유 검출 기술
            </li>
            <li>
              Trio-MD Digital Board 개발
            </li>
            <li>
              서울시 U-BIKE Control Box 개발
            </li>
            <li>
              태양광 감시장치 개발
            </li>
            <li>
              Control Board에 Linux System 사용
            </li>
          </ul>
        </div>

        <div className='History_2014'>
          2014
        </div>

        <div className='History_material'>
          <div>
            <span className="material-symbols-outlined">
              circle
            </span>
          </div>
        </div>

      <div className='History_2014_content'>
        <ul>
          <li>
            (정보통신.방송 기술개발사업)
            생활전파 레이다 센서 SDR 플랫폼 기술 개발
          </li>
          <li>
            ELMO 중계기 RF Module 및 Controller 개발  도파로 센서를 이용한 유사 석유 검출 기술
          </li>
          <li>
            SDR 레이더 시스템 개발(미래창조과학부 과제 선정)
          </li>
          <li>
            일본향 DAS 중계기 RF Module 및 Controller 개발
          </li>
          <li>
            ICS 중계기 RF Module 개발(SKT, 수출향)
          </li>
          <li>
            차세대 중계기 RF Module 개발
          </li>
          <li>
            Solid 최우수 협력사 수상
          </li>
        </ul>
      </div>

      <div className='History_2013'>
          2013
      </div>

      <div className='History_material'>
        <div>
          <span className="material-symbols-outlined">
            circle
          </span>
        </div>
      </div>

      <div className='History_2013_content'>
        <ul>
          <li>
            DTV ICS 중계기, TRIO-M, TRIO-L Revision 중계기 개발
          </li>
          <li>
            KARI(항공우주연구원) Sensor Microwave Module 개발
          </li>
          <li>
            일본향 MCHR-KDUORF 개발 / KDDI
          </li>
        </ul>
      </div>

      <div className='History_2011'>
          2011
        </div>

        <div className='History_material'>
          <div>
            <span className="material-symbols-outlined">
              circle
            </span>
          </div>
        </div>

      <div className='History_2011_content'>
        <ul>
          <li>
            DIGITAL FPGA BOARD 양산, SDBIS-L RF Module 개발
          </li>
          <li>
            MIMO-1CA LMD / LM-HUB Digital Optic Module 개발
          </li>
          <li>
            MIMO-1CA in building 광 분산 시스템 개발
          </li>
          <li>
            OCNS Jamming 시스템(한강기지국)개발
          </li>
        </ul>
      </div>

      <div className='History_2010'>
          2010
        </div>

        <div className='History_material'>
          <div>
            <span className="material-symbols-outlined">
              circle
            </span>
          </div>
        </div>

      <div className='History_2010_content'>
        <ul>
          <li>
            본사 소재지 변경(서울송파구 방이동 위례성대로12길 4-5 KST빌딩)
          </li>
          <li>
            SK 텔레콤 T-Idea 제안상 수상
          </li>
        </ul>
      </div>

      <div className='History_2005'>
          2005
        </div>

        <div className='History_material'>
          <div>
            <span className="material-symbols-outlined">
              circle
            </span>
          </div>
        </div>

      <div className='History_2005_content'>
        <ul>
          <li>
            공중교환전화망 이용 이동통신용 중계기 감시시스템 및 방법 특허 출원(SKT 공동)
          </li>
          <li>
            기업부설연구소 설립 및 벤처기업 등록
          </li>
          <li>
            WiBro Modem 개발 및 ICS 중계기 Control Board 개발
          </li>
          <li>
            CDMA / WCDMA Modem 개발, 노이즈저감시스템 특허출원
          </li>
        </ul>
      </div>

      <div className='History_2001'>
          2001
        </div>

        <div className='History_material'>
          <div>
            <span className="material-symbols-outlined">
              circle
            </span>
          </div>
        </div>

      <div className='History_2001_content'>
        <ul>
          <li>
            3월 회사설립 (주)케이에스티 테크놀로지
          </li>
          <li>
            SKT / KTF용 FSK RF MODEM 개발
          </li>
          <li>
            TMD 개발 및 WCDM MODEM SKT 공용 SPEC 개발
          </li>
          <li>
            DMB 지하철,호주 / 대만 향변파중계기 Control Board 개발
          </li>
          <li>
            3G WRR-M, 베트남 향변파중계기, KTF DUAL-BAND Control Board 개발
          </li>
        </ul>
      </div>

      
        
        

      </div>

    </div>
  )
}

export default Company_History;
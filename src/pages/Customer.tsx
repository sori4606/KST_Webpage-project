import React from 'react'
import './Customer.css';
import Intro_Header from './Intro_Header';

const Customer = () => {
  return (
    <div className = 'Customer_All' style={{position:'relative'}}>
      <Intro_Header />

      <div className='middle' style={{height:'700px' , position:'relative', background:'#fffff4'}}>

        <div className='Customer_sub1'>
          <span>Works Together</span>
        </div>

        <div className = 'Customer_sub2'>
          <span >ㅡ매출처</span>
        </div>


        <div className='Customer_sub3'>
          <dl>
            <dt>
              <img src='/img/solid.jpg' alt = 'solid_logo' />
              <dd>
                (주)쏠리드
              </dd>
            </dt>
            <dt>
              <img src='/img/ANTS.png' alt = 'solid_logo' />
              <dd>
                에이앤티에스
              </dd>
            </dt>
            <dt>
              <img src='/img/HFR.jpeg' alt = 'solid_logo' />
              <dd>
                HFR
              </dd>
            </dt>
          </dl>

          <dl>
            <dt>
              <img src='/img/PANTECH C&I.jpg' alt = 'solid_logo' />
              <dd>
                팬택씨앤아이
              </dd>
            </dt>
            <dt>
              <img src='/img/cs-holdings.gif' alt = 'solid_logo' />
              <dd>
                CS홀딩스
              </dd>
            </dt>
            <dt>
              <img src='/img/MJ_TECH.webp' alt = 'solid_logo' />
              <dd>
                (주)엠제이테크놀로지
              </dd>
            </dt>
          </dl>

          <dl>
            <dt>
              <img src='/img/DONGJIN.gif' alt = 'solid_logo' />
              <dd>
                (주)동진티아이
              </dd>
            </dt>
            <dt>
              <img src='/img/Licomm.webp' alt = 'solid_logo' />
              <dd>
                (주)라이콤
              </dd>
            </dt>
            <dt>
              <img src='/img/ZENIX.png' alt = 'solid_logo' />
              <dd>
                (주)제닉스
              </dd>
            </dt>
          </dl>

          <dl>
            <dt>
              <img src='/img/IG ONE.jpg' alt = 'solid_logo' />
              <dd>
                아이지원 주식회사
              </dd>
            </dt>
            <dt>
              <img src='/img/Infix Technology.png' alt = 'solid_logo' />
              <dd>
                (주)인픽스테크놀러지
              </dd>
            </dt>
            <dt>
              <img src='/img/TEXON.jpg' alt = 'solid_logo' />
              <dd>
                (주)텍슨
              </dd>
            </dt>
          </dl>

          <dl>
            <dt className='CELLIN' style={{width:'24%'}}>
              <img src='/img/CELLIN.jpg' alt = 'solid_logo' />
              <dd>
                셀인 주식회사
              </dd>
            </dt>
          </dl>
          
            
        </div>
      </div>

    </div>
  )
}

export default Customer
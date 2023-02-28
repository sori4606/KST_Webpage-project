import React, { useEffect, useRef, useState } from "react";
import Intro_Header from "./Intro_Header";
import "./Company_History.css";
import useIntersectionObsever from "../hooks/useIntersectionObserver";
import "../pages/Animate.css";

const Company_History = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const ref10 = useRef(null);

  const isInViewport = useIntersectionObsever(ref, 0.2);
  const isInViewport2 = useIntersectionObsever(ref2, 0.2);
  const isInViewport3 = useIntersectionObsever(ref3, 0.2);
  const isInViewport4 = useIntersectionObsever(ref4, 0.2);
  const isInViewport5 = useIntersectionObsever(ref5, 0.2);
  const isInViewport6 = useIntersectionObsever(ref6, 0.2);
  const isInViewport7 = useIntersectionObsever(ref7, 0.2);
  const isInViewport8 = useIntersectionObsever(ref8, 0.2);
  const isInViewport9 = useIntersectionObsever(ref9, 0.2);
  const isInViewport10 = useIntersectionObsever(ref10,0.2);

  let [fade, setFade] = useState("");
  let [fade2, setFade2] = useState("");
  let [fade3, setFade3] = useState("");
  let [fade4, setFade4] = useState("");
  let [fade5, setFade5] = useState("");
  let [fade6, setFade6] = useState("");
  let [fade7, setFade7] = useState("");
  let [fade8, setFade8] = useState("");
  let [fade9, setFade9] = useState("");
  let [fade10, setFade10] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("endFadeIn");
    }, 200);
    return () => {
      setFade("");
    };
  }, [isInViewport]);

  useEffect(() => {
    setTimeout(() => {
      setFade2("endFadeIn");
    }, 200);
    return () => {
      setFade2("");
    };
  }, [isInViewport2]);

  useEffect(() => {
    setTimeout(() => {
      setFade3("endFadeIn");
    }, 200);
    return () => {
      setFade3("");
    };
  }, [isInViewport3]);

  useEffect(() => {
    setTimeout(() => {
      setFade4("endFadeIn");
    }, 100);
    return () => {
      setFade4("");
    };
  }, [isInViewport4]);

  useEffect(() => {
    setTimeout(() => {
      setFade5("endFadeIn");
    }, 100);
    return () => {
      setFade5("");
    };
  }, [isInViewport5]);

  useEffect(() => {
    setTimeout(() => {
      setFade6("endFadeIn");
    }, 100);
    return () => {
      setFade6("");
    };
  }, [isInViewport6]);

  useEffect(() => {
    setTimeout(() => {
      setFade7("endFadeIn");
    }, 100);
    return () => {
      setFade7("");
    };
  }, [isInViewport7]);

  useEffect(() => {
    setTimeout(() => {
      setFade8("endFadeIn");
    }, 100);
    return () => {
      setFade8("");
    };
  }, [isInViewport8]);

  useEffect(() => {
    setTimeout(() => {
      setFade9("endFadeIn");
    }, 100);
    return () => {
      setFade9("");
    };
  }, [isInViewport9]);

  useEffect(() => {
    setTimeout(() => {
      setFade10("endFadeIn");
    }, 100);
    return () => {
      setFade10("");
    };
  }, [isInViewport10]);

  return (
    <div className="History" style={{ background: "#fffff4"}}>
      <Intro_Header />

      <div className="History_all">
        <div className="History_sub1">OUR HISTORY</div>

        <div className="History_2023">2021 - 2025</div>

        <div className="History_material">
          <div>
            <span className="material-symbols-outlined">circle</span>
          </div>
        </div>

        <div className="KST_building">
          <img src="./img/KST_building.png" />
          <h1>KST TECHNOLOGY</h1>
        </div>

        <div
          ref={ref}
          className={
            isInViewport
              ? "History_2023_content startFadeIn " + fade
              : "History_2023_content"
          }
        >
          <ul>
            <li>
              433MHz 기반 드론 응용 통신기술 개발 및 실증 (무인이동체 미래선도
              핵심기술개발사업)
            </li>
          </ul>
        </div>

        <div className="History_2021">2019 - 2021</div>

        <div className="History_material">
          <div>
            <span className="material-symbols-outlined">circle</span>
          </div>
        </div>

        <div
          ref={ref2}
          className={
            isInViewport2
              ? "History_2021_content startFadeIn " + fade2
              : "History_2021_content"
          }
        >
          {" "}
          <ul>
            <li>
              개방형 프론트홀 인터페이스(O-RAN)을 지원하는 다중 대역, 다중
              서비스, 다중 인터페이스의 5G DAS 기술 개발
            </li>
            <li>5G 수출향 중계기 RF MODULE, CPU BOARD, DIGITAL BOARD 개발</li>
          </ul>
        </div>

        <div className="History_2017">2017 - 2018</div>

        <div className="History_material">
          <div>
            <span className="material-symbols-outlined">circle</span>
          </div>
        </div>

        <div
          ref={ref3}
          className={
            isInViewport3
              ? "History_2017_content startFadeIn " + fade3
              : "History_2017_content"
          }
        >
          {" "}
          <ul>
            <li>
              (WC300 프로젝트 기술개발지원사업) ICS와 DAS의 미래 핵심기술 확보를
              통한 Total Coverage Solution 개발
            </li>
            <li>
              (민군기술 적용연구) TICN 무선망에서 간섭신호제거 기술을 사용한
              동일주파수 재전송 방식의 고출력, 고효율, 저지연, 듀얼모드 셀
              커버리지 확장 장치 개발
            </li>
            <li>SKT, LGU+, KT 5G RF 광중계기 개발</li>
          </ul>
        </div>

        <div className="History_2015">2015 - 2017</div>

        <div className="History_material">
          <div>
            <span className="material-symbols-outlined">circle</span>
          </div>
        </div>

        <div
          ref={ref4}
          className={
            isInViewport4
              ? "History_2015_content startFadeIn " + fade4
              : "History_2015_content"
          }
        >
          <ul>
            <li>
              (에너지수요관리핵심기술) 도파로 센서를 이용한 유사 석유 검출 기술
            </li>
            <li>Trio-MD Digital Board 개발</li>
            <li>서울시 U-BIKE Control Box 개발</li>
            <li>태양광 감시장치 개발</li>
            <li>Control Board에 Linux System 사용</li>
          </ul>
        </div>

        <div className="History_2014">2014</div>

        <div className="History_material">
          <div>
            <span className="material-symbols-outlined">circle</span>
          </div>
        </div>

        <div
          ref={ref5}
          className={
            isInViewport5
              ? "History_2014_content startFadeIn " + fade5
              : "History_2014_content"
          }
        >
          <ul>
            <li>
              (정보통신.방송 기술개발사업) 생활전파 레이다 센서 SDR 플랫폼 기술
              개발
            </li>
            <li>
              ELMO 중계기 RF Module 및 Controller 개발 도파로 센서를 이용한 유사
              석유 검출 기술
            </li>
            <li>SDR 레이더 시스템 개발(미래창조과학부 과제 선정)</li>
            <li>일본향 DAS 중계기 RF Module 및 Controller 개발</li>
            <li>ICS 중계기 RF Module 개발(SKT, 수출향)</li>
            <li>차세대 중계기 RF Module 개발</li>
            <li>Solid 최우수 협력사 수상</li>
          </ul>
        </div>

        <div className="History_2013">2013</div>

        <div className="History_material">
          <div>
            <span className="material-symbols-outlined">circle</span>
          </div>
        </div>

        <div
          ref={ref6}
          className={
            isInViewport6
              ? "History_2013_content startFadeIn " + fade6
              : "History_2013_content"
          }
        >
          <ul>
            <li>DTV ICS 중계기, TRIO-M, TRIO-L Revision 중계기 개발</li>
            <li>KARI(항공우주연구원) Sensor Microwave Module 개발</li>
            <li>일본향 MCHR-KDUORF 개발 / KDDI</li>
          </ul>
        </div>

        <div className="History_2011">2011</div>

        <div className="History_material">
          <div>
            <span className="material-symbols-outlined">circle</span>
          </div>
        </div>

        <div
          ref={ref7}
          className={
            isInViewport7
              ? "History_2011_content startFadeIn " + fade7
              : "History_2011_content"
          }
        >
          <ul>
            <li>DIGITAL FPGA BOARD 양산, SDBIS-L RF Module 개발</li>
            <li>MIMO-1CA LMD / LM-HUB Digital Optic Module 개발</li>
            <li>MIMO-1CA in building 광 분산 시스템 개발</li>
            <li>OCNS Jamming 시스템(한강기지국)개발</li>
          </ul>
        </div>

        <div className="History_2010">2010</div>

        <div className="History_material">
          <div>
            <span className="material-symbols-outlined">circle</span>
          </div>
        </div>

        <div
          ref={ref8}
          className={
            isInViewport8
              ? "History_2010_content startFadeIn " + fade8
              : "History_2010_content"
          }
        >
          <ul>
            <li>
              본사 소재지 변경(서울송파구 방이동 위례성대로12길 4-5 KST빌딩)
            </li>
            <li>SK 텔레콤 T-Idea 제안상 수상</li>
          </ul>
        </div>

        <div className="History_2005">2005</div>

        <div className="History_material">
          <div>
            <span className="material-symbols-outlined">circle</span>
          </div>
        </div>

        <div
          ref={ref9}
          className={
            isInViewport9
              ? "History_2005_content startFadeIn " + fade9
              : "History_2005_content"
          }
        >
          <ul>
            <li>
              공중교환전화망 이용 이동통신용 중계기 감시시스템 및 방법 특허
              출원(SKT 공동)
            </li>
            <li>기업부설연구소 설립 및 벤처기업 등록</li>
            <li>WiBro Modem 개발 및 ICS 중계기 Control Board 개발</li>
            <li>CDMA / WCDMA Modem 개발, 노이즈저감시스템 특허출원</li>
          </ul>
        </div>

        <div className="History_2001">2001</div>

        <div className="History_material">
          <div>
            <span className="material-symbols-outlined">circle</span>
          </div>
        </div>

        <div
          ref={ref10}
          className={
            isInViewport10
              ? "History_2001_content startFadeIn " + fade10
              : "History_2001_content"
          }
        >
          <ul>
            <li>3월 회사설립 (주)케이에스티 테크놀로지</li>
            <li>SKT / KTF용 FSK RF MODEM 개발</li>
            <li>TMD 개발 및 WCDM MODEM SKT 공용 SPEC 개발</li>
            <li>DMB 지하철,호주 / 대만 향변파중계기 Control Board 개발</li>
            <li>
              3G WRR-M, 베트남 향변파중계기, KTF DUAL-BAND Control Board 개발
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Company_History;

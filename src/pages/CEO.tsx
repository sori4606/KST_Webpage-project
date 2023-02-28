import React, { useEffect, useRef, useState } from "react";
import "./CEO.css";
import Intro_Header from "./Intro_Header";
import useIntersectionObsever from "../hooks/useIntersectionObserver";
import "../pages/Animate.css";

const CEO = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  
  const isInViewport = useIntersectionObsever(ref, 0);
  const isInViewport2 = useIntersectionObsever(ref2, 0);
  const isInViewport3 = useIntersectionObsever(ref3, 0);

  let [fade, setFade] = useState("");
  let [fade2, setFade2] = useState("");
  let [fade3, setFade3] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("endFadeIn");
    }, 100);
    return () => {
      setFade("");
    };
  }, [isInViewport]);

  useEffect(() => {
    setTimeout(() => {
      setFade2("endFadeOut");
    }, 100);
    return () => {
      setFade2("");
    };
  }, [isInViewport2]);

  useEffect(() => {
    setTimeout(() => {
      setFade3("endRight");
    }, 100);
    return () => {
      setFade3("");
    };
  }, [isInViewport3]);

  return (
    <div
      className="CEO_All"
      style={{ position: "relative", background: "#fffff4" }}
    >
      <Intro_Header />
      <div
        ref={ref}
        className={
          isInViewport ? "CEO_Message startFadeIn " + fade : "CEO_Message"
        }
      >
        CEO Message
      </div>

      <div className="KST_back">KST</div>

      <div
        className={
          isInViewport
            ? "CEO_Message_sub startFadeIn " + fade
            : "CEO_Message_sub"
        }
      >
        <span>ㅡCEO 메시지</span>
      </div>
      <div className="company_building">
        <img
          ref={ref2}
          className={isInViewport2 ? "startFadeOut " + fade2 : ""}
          src="./img/KST_building.png"
          alt="building_img"
        />
        <div
          ref={ref3}
          className={isInViewport3 ? "CEO_talk startRight " + fade3 : "CEO_talk"}
        >
          <div>
            <span className="greets" style={{ fontWeight: "1000" }}>
              앞선 기술력과 차별화 된 솔루션을 통하여 고객에게 감동을 선사하고
              사회에 기여하는 회사
            </span>
          </div>
          <span>
            케이에스티테크놀로지는 지난 20년 동안 무선 및 이동통신 분야에서
            차별화 된 하드웨어 및 소프트웨어 경쟁력을 바탕으로 성장해 왔습니다.
            리눅스 기반의 임베디드 소프트웨어/시스템 및 FPGA 기반의 디지털
            신호처리 그리고 디지털/RF 회로설계 기술등 핵심 요소 기술을 바탕으로
            무선 및 이동통신 분야 발전에 일조해 왔으며, 고객과의 긴밀하고
            전략적인 협력을 통한 경쟁력 있는 솔루션을 제공함으로써 신뢰를
            쌓아왔습니다. 초기의 이동통신 중계기 시장부터 현재의 5G에 이르기까지
            선도적인 핵심 기술 확보를 통하여 고객에게 경쟁력을 제공하였으며, IoT
            기반 감시 제어 그리고 무선 결재 솔루션, 임베디드 소프트웨어 및
            시스템 사업으로 사업 영역을 확대해 나가고 있습니다. 탁월한 전문성을
            갖춘 훌륭한 인재와 차별적인 솔루션을 바탕으로 압도적인 기술 경쟁력을
            확보하고 최고의 제품 품질과 완성도를 통하여 소중한 고객에게 신뢰와
            감동을 제공하며, 이에 기반한 신성장 동력을 개발하고 지속적으로
            성장할 수 있는 또 다른 20년을 위해 뛰어갈 준비가 되어 있습니다. 선행
            기술 확보를 위한 과감한 투자를 통하여 핵심 기술을 강화하고
            확대함으로써 지속 성장할 수 있는 기반을 마련하고, 고객에게 최고의
            솔루션과 만족을 제공하며 사회에 기여할 수 있는
            케이에스티테크놀로지가 되도록 최선의 노력을 경주해 나가겠습니다.
          </span>
          <div className="CEO_Name" style={{ fontWeight: "1000" }}>
            대표이사 송준화
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEO;

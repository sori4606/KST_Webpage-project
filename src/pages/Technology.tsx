import React, { useEffect, useRef, useState } from "react";
import "./Technology.css";
import useIntersectionObsever from "../hooks/useIntersectionObserver";
import "../pages/Animate.css";

const Technology = () => {
  let [fade0, setFade0] = useState("");

  useEffect(() => {
    setFade0("endFadeIn");
    return () => {
      setFade0("");
    };
  }, []);

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

  const isInViewport = useIntersectionObsever(ref, 0);
  const isInViewport2 = useIntersectionObsever(ref2, 0);
  const isInViewport3 = useIntersectionObsever(ref3, 0);
  const isInViewport4 = useIntersectionObsever(ref4, 0);
  const isInViewport5 = useIntersectionObsever(ref5, 0);
  const isInViewport6 = useIntersectionObsever(ref6, 0);
  const isInViewport7 = useIntersectionObsever(ref7, 0);
  const isInViewport8 = useIntersectionObsever(ref8, 0);
  const isInViewport9 = useIntersectionObsever(ref9, 0);
  const isInViewport10 = useIntersectionObsever(ref10, 0);

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
      setFade("endLeft");
    }, 100);
    return () => {
      setFade("");
    };
  }, [isInViewport]);

  useEffect(() => {
    setTimeout(() => {
      setFade2("endLeft");
    }, 100);
    return () => {
      setFade2("");
    };
  }, [isInViewport2]);

  useEffect(() => {
    setTimeout(() => {
      setFade3("endLeft");
    }, 100);
    return () => {
      setFade3("");
    };
  }, [isInViewport3]);

  useEffect(() => {
    setTimeout(() => {
      setFade4("endLeft");
    }, 100);
    return () => {
      setFade4("");
    };
  }, [isInViewport4]);

  useEffect(() => {
    setTimeout(() => {
      setFade5("endLeft");
    }, 100);
    return () => {
      setFade5("");
    };
  }, [isInViewport5]);

  useEffect(() => {
    setTimeout(() => {
      setFade6("endLeft");
    }, 100);
    return () => {
      setFade6("");
    };
  }, [isInViewport6]);

  useEffect(() => {
    setTimeout(() => {
      setFade7("endLeft");
    }, 100);
    return () => {
      setFade7("");
    };
  }, [isInViewport7]);

  useEffect(() => {
    setTimeout(() => {
      setFade8("endLeft");
    }, 100);
    return () => {
      setFade8("");
    };
  }, [isInViewport8]);

  useEffect(() => {
    setTimeout(() => {
      setFade9("endLeft");
    }, 100);
    return () => {
      setFade9("");
    };
  }, [isInViewport9]);

  useEffect(() => {
    setTimeout(() => {
      setFade10("endLeft");
    }, 100);
    return () => {
      setFade10("");
    };
  }, [isInViewport10]);

  return (
    <div className="Technology">
      <div className="techMain">
        <img
          className={"techImg1 startFadeIn " + fade0}
          src="./img/Technology2.jpg"
          alt="Product_image"
        />
      </div>

      <div className="Technology_Sub1">Technology</div>
      <div className="introduce">
        <span>ㅡ기술소개</span>
      </div>

      <div className="Technology1">
        <div
          ref={ref}
          className={isInViewport ? "Tech startLeft " + fade : "Tech"}
        >
          <ul>
            Control Board 제작 및 원격 감시 / 제어
            <li>(이동통신 / IoT Modem 제어, 센서 제어)</li>
          </ul>
        </div>
        <div
          ref={ref2}
          className={isInViewport2 ? "Tech startLeft " + fade2 : "Tech"}
        >
          <ul>
            Embedded Linux System 제작
            <li>
              (자체 Linux File System 구축, kernel 최적화, Linux Driver 제작,
              System App 제작)
            </li>
          </ul>
        </div>
        <div
          ref={ref3}
          className={isInViewport3 ? "Tech startLeft " + fade3 : "Tech"}
        >
          <ul>
            Digital FPGA 신호처리
            <li>(CPLD, FPGA, Zynq MPSoC)</li>
          </ul>
        </div>

        <div
          ref={ref4}
          className={isInViewport4 ? "Tech startLeft " + fade4 : "Tech"}
        >
          <ul>
            TD-LTE Sync Detection
            <li>
              (4G/5G TD-LTE 동기 신호 검출 , RF 신호 직접 입력 , 4개의 개별 동기
              신호 출력 , DSP 방식)
            </li>
          </ul>
        </div>
        <div
          ref={ref5}
          className={isInViewport5 ? "Tech startLeft " + fade5 : "Tech"}
        >
          <ul>
            RF Module / System 개발
            <li>(이동통신 중계기용 시스템 및 모듈 , Up/Down Converter)</li>
          </ul>
        </div>
        <div
          ref={ref6}
          className={isInViewport6 ? "Tech startLeft " + fade6 : "Tech"}
        >
          <ul>
            생산 자동화 프로그램
            <li>(System 특성 자동 측정 / 성적서 작성)</li>
          </ul>
        </div>
      </div>

      <div className="Technology2Title">적용산업분야</div>

      <div className="Technology2">
        <div
          ref = {ref7}
          className={isInViewport7? "Tech2 startLeft " + fade7 : "Tech2"}
        >
          <div className="Tech2Sub2">Mobile communication repeater</div>
          <img src="./img/Tech2.webp" alt="Tech2_img" />

        </div>
        <div
        ref = {ref8}
          className={isInViewport8? "Tech2 startLeft " + fade8 : "Tech2"}
        >
          <div className="Tech2Sub2">Electronic Cars</div>
          <img src="./img/electronicCars.jpg" alt="ElectronicCar_img" />

        </div>
        <div
        ref = {ref9}
          className={isInViewport9? "Tech2 startLeft " + fade9 : "Tech2"}
        >
          <div className="Tech2Sub2">Defense Industry</div>
          <img src="./img/defenseIndustry.jpeg" alt="defenseIndustry_img" />

        </div>

        <div
        ref = {ref10}
          className={isInViewport10? "Tech2 startLeft " + fade10 : "Tech2" }
        >
          <div className="Tech2Sub2">Home appliances</div>
          <img src="./img/kitchen.jpg" alt="kitchen_img" />

        </div>
      </div>
    </div>
  );
};

export default Technology;

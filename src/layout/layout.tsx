
import React, { ReactNode } from "react";
import "./layout.css";
import { Link } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="layout">
      
      <>
        <main className="main">
          <article className="section1">
            <div>
              <img src="./img/main_page.jpg" alt="main_img" />
            </div>
            <div className="motto">
              <h2>
                <div>Continue to Develop</div>
                <div>And Achieve.</div>
              </h2>
            </div>
          </article>

          <article className="section2">
            <div className="section2_About">
              <h2>(주)KST TECH</h2>
              <h3>A leading, Developing Company</h3>
              <p>
                (주)KST는 이동통신 네트워크에 대한 최적의 솔루션을 제공합니다.
              </p>
            </div>

            <Link to="AboutUs">
              <div className="view_more">View More</div>
            </Link>
          </article>
          
        </main>
      </>


    </div>
  );
};

export default layout;

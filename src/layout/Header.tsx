import "./Header.css";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BrowserView, MobileView } from "react-device-detect";
import { MenuOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Menu, Button } from "antd";
import ScrollLock from 'react-scrolllock';



const Header = () => {

  
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBar, setToggleBar] = useState(true);
  const [Content, setContent] = useState(false);
  const [Content2, setContent2] = useState(false);
  const [Content3, setContent3] = useState(false);



  const toggleChange = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };

  const contentClick = () => {
    setContent(!Content);
    
  };

  const contentClick2 = () => {
    setContent2(!Content2);
  };

  const contentClick3 = () => {
    setContent3(!Content3);
  };

  let location = useLocation();

  useEffect(() => {
    setToggleMenu(false);
    setToggleBar(true);
    setContent(false);
    setContent2(false);
    setContent3(false);
  }, [location]);

  
  
  return (
    <div>
    <BrowserView>
    <>
    <Button className = "browserToggle"
            type="default"
            onClick={toggleChange}
            

            style={{
              position:'absolute',
              right: "32px",
              fontSize: "20px",
              top: "30px",
              marginBottom: "16",
              zIndex:'5'
            }}
            
          >

          {toggleBar ? <MenuOutlined /> : <MenuFoldOutlined />}
        </Button>
        
        {toggleMenu &&(
          <>
          <ScrollLock />

          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            theme="light"
            inlineCollapsed={toggleBar}
            onClick={onMenuClick}
            >
            <nav className="navbarMobile" >
              <ul>
                <li className="DropdownMobile">
                  <div className="Dropdown_MenuMobile" onClick={contentClick} style={{marginTop:'120px'}}>
                    회사소개
                    {Content ? (
                      <span className="material-symbols-outlined">
                        arrow_drop_down
                      </span>
                      
                    ) : (
                      <span className="material-symbols-outlined">
                        arrow_drop_up
                      </span>
                    )}
                  </div>
                  {Content ? (
                    <div className="Dropdown_ContentMobile--open">
                      <Link to="/AboutUs">
                        <div>기업개요</div>
                      </Link>
                      <Link to="/CEO">
                        <div>CEO 인사말</div>
                      </Link>
                      <Link to="/Customer">
                        <div>고객사</div>
                      </Link>
                      <Link to="/Company_History">
                        <div>회사연혁</div>
                      </Link>
                      <Link to="Howtogo">
                        <div>찾아오시는 길</div>
                      </Link>
                    </div>
                  ) : (
                    <div className="Dropdown_ContentMobile">
                      <div>
                        <Link to="/AboutUs">기업개요</Link>
                      </div>
                      <div>
                        <Link to="/CEO">CEO 인사말</Link>
                      </div>
                      <div>
                        <Link to="/Customer">고객사</Link>
                      </div>
                      <div>
                        <Link to="/Company_History">회사연혁</Link>
                      </div>
                      <div>
                        <Link to="Howtogo">찾아오시는 길</Link>
                      </div>
                    </div>
                  )}
                </li>

                <li className="DropdownMobile">
                  <div className="Dropdown_MenuMobile" onClick={contentClick2}>
                    제품/기술
                    {Content2 ? (
                      <span className="material-symbols-outlined">
                        arrow_drop_down
                      </span>
                    ) : (
                      <span className="material-symbols-outlined">
                        arrow_drop_up
                      </span>
                    )}
                  </div>
                  {Content2 ? (
                    <div className="Dropdown_ContentMobile--open">
                      <Link to="Product">
                        <div>제품소개</div>
                      </Link>
                      <Link to="Technology">
                        <div>주요기술</div>
                      </Link>
                    </div>
                  ) : (
                    <div className="Dropdown_ContentMobile">
                      <div>
                        <Link to="Product">제품소개</Link>
                      </div>
                      <div>
                        <Link to="Technology">주요기술</Link>
                      </div>
                    </div>
                  )}
                </li>

                <li className="DropdownMobile">
                  <div className="Dropdown_MenuMobile" onClick={contentClick3}>
                    고객지원
                    {Content3 ? (
                      <span className="material-symbols-outlined">
                        arrow_drop_down
                      </span>
                    ) : (
                      <span className="material-symbols-outlined">
                        arrow_drop_up
                      </span>
                    )}
                  </div>
                  {Content3 ? (
                    <div className="Dropdown_ContentMobile--open">
                      <Link to="Contact">
                        <div>문의하기</div>
                      </Link>
                    </div>
                  ) : (
                    <div className="Dropdown_ContentMobile">
                      <Link to="Contact">
                        <div>문의하기</div>
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </Menu>
          </>
        )}

    {/* 여기서부터 전체화면 */}
      <nav className="navbar">
        <ul>
          <Link to="/">
            <img
              className="logo_img"
              src="./img/top_logo.gif"
              alt="logo_img"
            />
          </Link>


          <li className="Dropdown">
            <div className="Dropdown_Menu">
              <Link to="/AboutUs">회사소개</Link>
            </div>
            <div className="Dropdown_Content">
              <div>
                <Link to="/AboutUs">기업개요</Link>
              </div>
              <div>
                <Link to="/CEO">CEO 인사말</Link>
              </div>
              <div>
                <Link to="/Customer">고객사</Link>
              </div>
              <div>
                <Link to="/Company_History">회사연혁</Link>
              </div>
              <div>
                <Link to="Howtogo">찾아오시는 길</Link>
              </div>
            </div>
          </li>

          <li className="Dropdown">
            <div className="Dropdown_Menu">
              <Link to="Product">제품/기술</Link>
            </div>
            <div className="Dropdown_Content">
              <div>
                <Link to="Product">제품소개</Link>
              </div>
              <div>
                <Link to="Technology">주요기술</Link>
              </div>
            </div>
          </li>

          <li className="Dropdown">
            <div className="Dropdown_Menu">
              <Link to="Contact">고객지원</Link>
            </div>
            <div className="Dropdown_Content">
              <div>
                <Link to="Contact">문의하기</Link>
              </div>
            </div>
          </li>

          <li className="Language">
            <Link to="/">Home |</Link>
            <Link to="Contact"> Contact</Link>
          </li>
        </ul>
      </nav>
      </>
    </BrowserView>




      <MobileView>
        <>
        <Link to="/">
          <img className="logo_img" src="./img/top_logo.gif" alt="logo_img" />
        </Link>

          <Button
            type="default"
            onTouchStart={toggleChange}

            style={{
              position:'absolute',
              right: "32px",
              fontSize: "20px",
              top: "30px",
              marginBottom: "16",
              zIndex:'5'
            }}
            
          >

          {toggleBar ? <MenuOutlined /> : <MenuFoldOutlined />}
        </Button>

       {toggleMenu && (
        <>
          <ScrollLock />
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            theme="light"
            inlineCollapsed={toggleBar}
            onClick={onMenuClick}
          >
            <nav className="navbarMobile" >
              <ul>
                <li className="DropdownMobile">
                  <div className="Dropdown_MenuMobile" onTouchStart={contentClick} style={{marginTop:'60px'}}>
                    회사소개
                    {Content ? (
                      <span className="material-symbols-outlined">
                        arrow_drop_down
                      </span>
                      
                    ) : (
                      <span className="material-symbols-outlined">
                        arrow_drop_up
                      </span>
                    )}
                  </div>
                  {Content ? (
                    <div className="Dropdown_ContentMobile--open">
                      <Link to="/AboutUs">
                        <div>기업개요</div>
                      </Link>
                      <Link to="/CEO">
                        <div>CEO 인사말</div>
                      </Link>
                      <Link to="/Customer">
                        <div>고객사</div>
                      </Link>
                      <Link to="/Company_History">
                        <div>회사연혁</div>
                      </Link>
                      <Link to="Howtogo">
                        <div>찾아오시는 길</div>
                      </Link>
                    </div>
                  ) : (
                    <div className="Dropdown_ContentMobile">
                      <div>
                        <Link to="/AboutUs">기업개요</Link>
                      </div>
                      <div>
                        <Link to="/CEO">CEO 인사말</Link>
                      </div>
                      <div>
                        <Link to="/Customer">고객사</Link>
                      </div>
                      <div>
                        <Link to="/Company_History">회사연혁</Link>
                      </div>
                      <div>
                        <Link to="Howtogo">찾아오시는 길</Link>
                      </div>
                    </div>
                  )}
                </li>

                <li className="DropdownMobile">
                  <div className="Dropdown_MenuMobile" onTouchStart={contentClick2}>
                    제품/기술
                    {Content2 ? (
                      <span className="material-symbols-outlined">
                        arrow_drop_down
                      </span>
                    ) : (
                      <span className="material-symbols-outlined">
                        arrow_drop_up
                      </span>
                    )}
                  </div>
                  {Content2 ? (
                    <div className="Dropdown_ContentMobile--open">
                      <Link to="Product">
                        <div>제품소개</div>
                      </Link>
                      <Link to="Technology">
                        <div>주요기술</div>
                      </Link>
                    </div>
                  ) : (
                    <div className="Dropdown_ContentMobile">
                      <div>
                        <Link to="Product">제품소개</Link>
                      </div>
                      <div>
                        <Link to="Technology">주요기술</Link>
                      </div>
                    </div>
                  )}
                </li>

                <li className="DropdownMobile">
                  <div className="Dropdown_MenuMobile" onTouchStart={contentClick3}>
                    고객지원
                    {Content3 ? (
                      <span className="material-symbols-outlined">
                        arrow_drop_down
                      </span>
                    ) : (
                      <span className="material-symbols-outlined">
                        arrow_drop_up
                      </span>
                    )}
                  </div>
                  {Content3 ? (
                    <div className="Dropdown_ContentMobile--open">
                      <Link to="Contact">
                        <div>문의하기</div>
                      </Link>
                    </div>
                  ) : (
                    <div className="Dropdown_ContentMobile">
                      <Link to="Contact">
                        <div>문의하기</div>
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </Menu>
          </>
        )}
      </>
      </MobileView>
    </div>
  );
};

export default Header;

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
                    ????????????
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
                        <div>????????????</div>
                      </Link>
                      <Link to="/CEO">
                        <div>CEO ?????????</div>
                      </Link>
                      <Link to="/Customer">
                        <div>?????????</div>
                      </Link>
                      <Link to="/Company_History">
                        <div>????????????</div>
                      </Link>
                      <Link to="Howtogo">
                        <div>??????????????? ???</div>
                      </Link>
                    </div>
                  ) : (
                    <div className="Dropdown_ContentMobile">
                      <div>
                        <Link to="/AboutUs">????????????</Link>
                      </div>
                      <div>
                        <Link to="/CEO">CEO ?????????</Link>
                      </div>
                      <div>
                        <Link to="/Customer">?????????</Link>
                      </div>
                      <div>
                        <Link to="/Company_History">????????????</Link>
                      </div>
                      <div>
                        <Link to="Howtogo">??????????????? ???</Link>
                      </div>
                    </div>
                  )}
                </li>

                <li className="DropdownMobile">
                  <div className="Dropdown_MenuMobile" onClick={contentClick2}>
                    ??????/??????
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
                        <div>????????????</div>
                      </Link>
                      <Link to="Technology">
                        <div>????????????</div>
                      </Link>
                    </div>
                  ) : (
                    <div className="Dropdown_ContentMobile">
                      <div>
                        <Link to="Product">????????????</Link>
                      </div>
                      <div>
                        <Link to="Technology">????????????</Link>
                      </div>
                    </div>
                  )}
                </li>

                <li className="DropdownMobile">
                  <div className="Dropdown_MenuMobile" onClick={contentClick3}>
                    ????????????
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
                        <div>????????????</div>
                      </Link>
                    </div>
                  ) : (
                    <div className="Dropdown_ContentMobile">
                      <Link to="Contact">
                        <div>????????????</div>
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
          </Menu>
          </>
        )}

    {/* ??????????????? ???????????? */}
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
              <Link to="/AboutUs">????????????</Link>
            </div>
            <div className="Dropdown_Content">
              <div>
                <Link to="/AboutUs">????????????</Link>
              </div>
              <div>
                <Link to="/CEO">CEO ?????????</Link>
              </div>
              <div>
                <Link to="/Customer">?????????</Link>
              </div>
              <div>
                <Link to="/Company_History">????????????</Link>
              </div>
              <div>
                <Link to="Howtogo">??????????????? ???</Link>
              </div>
            </div>
          </li>

          <li className="Dropdown">
            <div className="Dropdown_Menu">
              <Link to="Product">??????/??????</Link>
            </div>
            <div className="Dropdown_Content">
              <div>
                <Link to="Product">????????????</Link>
              </div>
              <div>
                <Link to="Technology">????????????</Link>
              </div>
            </div>
          </li>

          <li className="Dropdown">
            <div className="Dropdown_Menu">
              <Link to="Contact">????????????</Link>
            </div>
            <div className="Dropdown_Content">
              <div>
                <Link to="Contact">????????????</Link>
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
                    ????????????
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
                        <div>????????????</div>
                      </Link>
                      <Link to="/CEO">
                        <div>CEO ?????????</div>
                      </Link>
                      <Link to="/Customer">
                        <div>?????????</div>
                      </Link>
                      <Link to="/Company_History">
                        <div>????????????</div>
                      </Link>
                      <Link to="Howtogo">
                        <div>??????????????? ???</div>
                      </Link>
                    </div>
                  ) : (
                    <div className="Dropdown_ContentMobile">
                      <div>
                        <Link to="/AboutUs">????????????</Link>
                      </div>
                      <div>
                        <Link to="/CEO">CEO ?????????</Link>
                      </div>
                      <div>
                        <Link to="/Customer">?????????</Link>
                      </div>
                      <div>
                        <Link to="/Company_History">????????????</Link>
                      </div>
                      <div>
                        <Link to="Howtogo">??????????????? ???</Link>
                      </div>
                    </div>
                  )}
                </li>

                <li className="DropdownMobile">
                  <div className="Dropdown_MenuMobile" onTouchStart={contentClick2}>
                    ??????/??????
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
                        <div>????????????</div>
                      </Link>
                      <Link to="Technology">
                        <div>????????????</div>
                      </Link>
                    </div>
                  ) : (
                    <div className="Dropdown_ContentMobile">
                      <div>
                        <Link to="Product">????????????</Link>
                      </div>
                      <div>
                        <Link to="Technology">????????????</Link>
                      </div>
                    </div>
                  )}
                </li>

                <li className="DropdownMobile">
                  <div className="Dropdown_MenuMobile" onTouchStart={contentClick3}>
                    ????????????
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
                        <div>????????????</div>
                      </Link>
                    </div>
                  ) : (
                    <div className="Dropdown_ContentMobile">
                      <Link to="Contact">
                        <div>????????????</div>
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

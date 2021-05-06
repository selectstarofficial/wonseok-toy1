import React, { useState, useEffect, useRef } from "react";
import "./A_Header.css";
import Header_img from "./img/selectstartheaderimg.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import languageimg from "./img/language-logo-white.450641e3.svg";
import languageimgblack from "./img/language-logo.d60646a5.svg";
import { useTranslation } from "react-i18next";
import whiteimg from "./img/logo-wm.af44a964.png";
import { Modal } from "react-bootstrap";

const Dropdown = () => {
  const { i18n } = useTranslation();
  const changelanguageToKo = () => i18n.changeLanguage("ko");
  const changelanguageToEn = () => i18n.changeLanguage("en");
  return (
    <div className="dropdown">
      <div>
        <div className="dropdown-english" onClick={changelanguageToEn}>
          English
        </div>
      </div>
      <div>
        <div className="dropdown-korean" onClick={changelanguageToKo}>
          한국어
        </div>
      </div>
    </div>
  );
};
const Header = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [headerchange, setHeaderchange] = useState(false);
  const [nowscrolly, setNowscrolly] = useState(0);

  useEffect(() => {
    const real = () => {
      /*  setNowscrolly() = window.scrollY; */
      console.log(window.scrollY);
      if (window.scrollY > 945) {
        setHeaderchange(true);
      } else {
        setHeaderchange(false);
      }
    };
    window.addEventListener("scroll", real);
  });

  const showme = () => {
    setShowDiv(!showDiv);
  };

  const Asd = () => {
    switch (showDiv) {
      case true:
        return <Dropdown />;
      default:
        return null;
    }
  };
  return (
    <div className={`Header_cover ${headerchange && "colorwhite"}`}>
      <div className="Header_main_page">
        <HashLink smooth to="#Screen">
          <img
            className="gohome"
            src={headerchange ? whiteimg : Header_img}
            alt="img"
          />
        </HashLink>
        <div className="Header_text_list">
          <HashLink smooth to="#Products">
            <div className={`Header_text ${headerchange && "colorblack"}`}>
              PRODUCT
            </div>
          </HashLink>
          <HashLink smooth to="#HowItWorks">
            <div className={`Header_text ${headerchange && "colorblack"}`}>
              HOW IT WORKS
            </div>
          </HashLink>
          <HashLink smooth to="#company">
            <div className={`Header_text ${headerchange && "colorblack"}`}>
              COMPANY
            </div>
          </HashLink>
          <Link to="/Contact">
            <div className={`Header_text ${headerchange && "colorblack"}`}>
              CONTACT
            </div>
          </Link>
        </div>
        <div className="languagechange" onClick={showme}>
          a
          <div className="languageimg">
            <img
              src={headerchange ? languageimgblack : languageimg}
              alt="language"
            />
          </div>
          <span className={`English ${headerchange && "colorblack"}`}>
            English
          </span>
          <Asd />
        </div>
      </div>
    </div>
  );
};
export default Header;

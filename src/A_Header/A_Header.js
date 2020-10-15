import React, { useState, useEffect, useRef } from "react";
import "./A_Header.css";
import Header_img from "./img/selectstartheaderimg.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import languageimg from "./img/language-logo-white.450641e3.svg";
import { useTranslation } from "react-i18next";
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

  const showme = () => {
    setShowDiv(!showDiv);
  };
  console.log(setShowDiv);
  const Asd = () => {
    switch (showDiv) {
      case true:
        return <Dropdown />;
      default:
        return null;
    }
  };
  return (
    <div className="Header_cover">
      <div className="Header_main_page">
        <HashLink smooth to="#Screen">
          <img className="gohome" src={Header_img} alt="img" />
        </HashLink>
        <div className="Header_text_list">
          <HashLink smooth to="#Products">
            <div className="Header_text">PRODUCT</div>
          </HashLink>
          <HashLink smooth to="#HowItWorks">
            <div className="Header_text">HOW IT WORKS</div>
          </HashLink>
          <HashLink smooth to="#company">
            <div className="Header_text">COMPANY</div>
          </HashLink>
          <Link to="/Contact">
            <div className="Header_text">CONTACT</div>
          </Link>
        </div>
        <div className="languagechange" onClick={showme}>
          <div className="languageimg">
            <img src={languageimg} alt="language" />
          </div>
          <span className="English">English</span>
          <Asd />
        </div>
      </div>
    </div>
  );
};
export default Header;

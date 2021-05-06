import React, { Component } from "react";
import "./AboutHeader.css";
import AboutHeader_img from "./img/logo-wm.af44a964.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const AboutHeader = () => {
  return (
    <div id="Contact" className="AboutHeader_cover">
      <div className="AboutHeader_main_page">
        <HashLink to="/#Screen">
          <img src={AboutHeader_img} alt="img" />
        </HashLink>
        <div className="AboutHeader_text_list">
          <HashLink smooth to="/#Products">
            <div className="AboutHeader_text">PRODUCT</div>
          </HashLink>
          <HashLink smooth to="/#HowItWorks">
            <div className="AboutHeader_text">HOW IT WORKS</div>
          </HashLink>
          <HashLink smooth to="/#company">
            <div className="AboutHeader_text">COMPANY</div>
          </HashLink>
          <Link to="/Contact">
            <div className="AboutHeader_text">CONTACT</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;

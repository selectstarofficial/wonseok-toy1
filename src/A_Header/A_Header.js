import React from "react";
import "./A_Header.css";
import Header_img from "./img/selectstartheaderimg.png";

const Header = () => {
  return (
    <div className="Header_cover">
      <div className="Header_main_page">
        <img src={Header_img} alt="img" />
        <div className="Header_text_list">
          <div className="Header_text">PRODUCT</div>
          <div className="Header_text">SOLUTIONS</div>
          <div className="Header_text">COMPANY</div>
          <div className="Header_text">CONTACT</div>
        </div>
      </div>
    </div>
  );
};
export default Header;

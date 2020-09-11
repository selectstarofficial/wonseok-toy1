import React, { Component } from "react";
import "./footer.css";
import footer from "./footer_img.png";
import footer2 from "./footerbottom2.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer_cover_page">
        <div className="footer_top_line"></div>
        <div className="footer_main_view">
          <div className="footer_selectstart">
            <img src={footer} alt="img"></img>
          </div>
          <div className="footer_first_box">
            <div className="first_box_main_text1">PRODUCTS </div>
            <div className="first_box_sub_text1">Image Data</div>
            <div className="first_box_sub_text2">Video Data</div>
            <div className="first_box_sub_text3">Audio Data</div>
            <div className="first_box_sub_text4">Text Data</div>
            <div className="first_box_main_text2">HOW IT WORKS</div>
          </div>
          <div className="footer_second_box">
            <div className="second_box_main_text1">COMPANY </div>
            <div className="second_box_sub_text1">Clients</div>
            <div className="second_box_sub_text2">Cashmission</div>
            <div className="second_box_sub_text3">Careers</div>
            <div className="second_box_sub_text4">Blog</div>
          </div>
          <div className="footer_three_box">
            <div className="three_box_main_text1">COMPANY </div>
            <div className="three_box_main_text2">FIND US</div>
            <div className="three_box_sub_text1">Facebook</div>
            <div className="three_box_sub_text2">linkedin</div>
          </div>
        </div>
        <div className="footer_bottom_line">
          <div className="footer_bottom_img">
            <img src={footer2} alt="img"></img>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;

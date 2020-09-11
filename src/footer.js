import React, { Component } from "react";
import "./footer.css";
import footer from "./footer_img.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer_cover_page">
        <div className="footer_top_line"></div>
        <div className="footer_selectstar"></div>
        <div className="footer_first_box">
          <div className="first_box_main_text1">
            <div className="first_box_sub_text1">
              <div className="first_box_sub_text2">
                <div className="first_box_sub_text3">
                  <div className="first_box_sub_text4">
                    <div className="first_box_main_text2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_second_box">
          <div className="second_box_main_text1">
            <div className="second_box_sub_text1">
              <div className="second_box_sub_text2">
                <div className="second_box_sub_text3">
                  <div className="second_box_sub_text4">
                    <div className="second_box_main_text2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_three_box">
          <div className="three_box_main_text">
            <div className="three_box_main_text2">
              <div className="three_box_sub_text1">
                <div className="three_box_sub_text2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom_line">
          <div className="footer_bottom_text"></div>
        </div>
      </div>
    );
  }
}

export default Footer;

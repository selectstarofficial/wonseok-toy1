import React, { Component, useState } from "react";
import "./footer.css";
import footer from "./img/footer_img.png";
import { HashLink } from "react-router-hash-link";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainView: "ImageData",
    };
  }
  render() {
    return (
      <div className="Footer_cover">
        <div className="footer_first_line"></div>
        <div className="footer_second_line">
          <div className="footer_seconde_line_text">© SelectStar</div>
        </div>
        <div className="footer_main">
          <HashLink smooth to="/#Screen">
            <img src={footer} alt="img" />
          </HashLink>
          <div className="footer_main_list">
            <div className="footer_block">
              <div className="footer_li">
                <HashLink smooth to="/#Products">
                  <p className="li-title">PRODUCTS</p>
                </HashLink>
                <HashLink smooth to="/#Products">
               {/*  ?mode=ImageData */}
                  <p
                    className="li-sub"
                    /*  onClick={() => {
                      this.props.handleClick("ImageData");
                    }} */
                  >
                    Image Data
                  </p>
                </HashLink>
                <HashLink smooth to="/#Products?mode=VideoData">
                  <p
                    className="li-sub"
                    // onClick={() => {
                    //   this.props.handleClick("VideoData");
                    // }}
                  >
                    Video Data
                  </p>
                </HashLink>
                <HashLink smooth to="/#Products?mode=AudioData">
                  <p
                    className="li-sub"
                    /* onClick={() => {
                      this.props.handleClick("AudioData");
                    }} */
                  >
                    Audio Data
                  </p>
                </HashLink>
                <HashLink smooth to="/#Products?mode=TextData">
                  <p
                    className="li-sub"
                    /*  onClick={() => {
                      this.props.handleClick("TextData");
                    }} */
                  >
                    Text Data
                  </p>
                </HashLink>
              </div>
              <div className="footer_li">
                <HashLink smooth to="/#HowItWorks">
                  <p className="li-title">HOW IT WORKS</p>
                </HashLink>
              </div>
            </div>
            <div className="footer_block">
              <div className="footer_li">
                <HashLink smooth to="/#company">
                  <p className="li-title">COMPANY</p>
                </HashLink>
                <HashLink smooth to="/#clients">
                  <p className="li-sub">Clients</p>
                </HashLink>
                <HashLink smooth to="/#Cashmission">
                  <p className="li-sub">Cashmission</p>
                </HashLink>
                <a
                  href="https://www.notion.so/2387860beacf47048f74e0863550697a"
                  target="_blank"
                >
                  <p className="li-sub">Careers</p>
                </a>
                <a href="https://medium.com/@selectstar.ai" target="_blank">
                  <p className="li-sub">Blog</p>
                </a>
              </div>
            </div>
            <div className="footer_block">
              <div className="footer_li">
                <HashLink smooth to="/Contact">
                  <p className="li-title">CONTACT</p>
                </HashLink>
              </div>
              <div className="footer_li">
                <p className="li-title">FIND US</p>
                <a
                  href="https://www.facebook.com/SelectStar.inc"
                  target="_blank"
                >
                  <p className="li-sub">FACEBOOK</p>
                </a>
                <a
                  href="https://www.linkedin.com/company/selectstar-inc"
                  target="_blank"
                >
                  <p className="li-sub">linkedin</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;

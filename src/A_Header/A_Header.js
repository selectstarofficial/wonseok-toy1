import React, { Component } from "react";
import "./A_Header.css";
import Header_img from "./img/selectstartheaderimg.png";
import { HashLink } from "react-router-hash-link";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount = () => {
    window.addEventListener("Header_cover", this.handleScroll);
  };

  componentWillUnMount = () => {
    window.removeEventListener("Header_cover", this.handleScroll);
  };

  handleScroll = (e) => {
    const scrollTop = ("Header_cover", e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop,
    });
  };
  render() {
    return (
      <div className="Header_cover">
        <div className="Header_main_page">
          <HashLink smooth to="#Screen">
            <img src={Header_img} alt="img" />
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
            <div className="Header_text">CONTACT</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;

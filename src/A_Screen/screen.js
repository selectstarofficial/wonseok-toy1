import React, { Component } from "react";
import "./screen.css";
import screen_logo from "./img/color_h_500px_6 1.png";
import screen_button_img from "./img/smalllogo.png";

class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <div className="title">
          <div className="logoimg">
            <img src={screen_logo} alt="img"></img>
          </div>
          <div className="titletext">
            <div className="titleproduct">PRODUCT</div>
            <div className="titlesolutions">SOLUTIONS </div>
            <div className="titlecompany">COMPANY</div>
            <div className="titlecontact">CONTACT</div>
          </div>
        </div>
        <div className="screenmaintext">
          THE FINEST
          <br /> AI Data PLATFORM
        </div>
        <div className="screensubtext">
          Diverse and High Quality Data fitted just for your project
        </div>
        <button className="startbutton">
          <div className="startbuttontext">GET STARTED</div>
        </button>
        <button className="logobutton">
          <div className="logobuttonimg">
            <img src={screen_button_img} alt="img"></img>
          </div>
        </button>
      </div>
    );
  }
}

export default Screen;

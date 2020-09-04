import React, { Component } from "react";
import "./screen.css";
import styled from "styled-components";

class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <div className="title">
          <div className="logoimg"></div>
          <div className="titletext">
            <div className="product">PRODUCT</div>
            <div className="solutions">SOLUTIONS </div>
            <div className="company">COMPANY</div>
            <div className="contact">CONTACT</div>
          </div>
        </div>
        <div className="maintext">
          THE FINEST
          <br /> AI Data PLATFORM
        </div>
        <div className="subtext">
          Diverse and High Quality Data fitted just for your project
        </div>
        <button className="startbutton">
          <div className="startbuttontext">GET STARTED</div>
        </button>
        <button className="logobutton">
          <div className="logobuttonimg"></div>
        </button>
      </div>
    );
  }
}

export default Screen;

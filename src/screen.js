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
          <div className="logobuttonimg"></div>
        </button>
      </div>
    );
  }
}

export default Screen;

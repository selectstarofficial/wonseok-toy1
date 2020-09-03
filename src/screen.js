import React, { Component } from "react";
import "./screen.css";
import styled from "styled-components";

class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <div className="title">
          <div className="product">PRODUCT</div>
          <div className="solutions">SOLUTIONS </div>
          <div className="company">COMPANY</div>
          <div className="contact">CONTACT</div>
        </div>
        <div className="maintext">
          THE FINEST
          <br /> AI Data Platform
        </div>
        <div className="subtext">
          Diverse and High Quality Data fitted just for your project
        </div>
        <button className="startbutton">GET STARTED</button>
        <button className="logobutton">asd</button>
      </div>
    );
  }
}

export default Screen;

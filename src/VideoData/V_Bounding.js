import React, { Component } from "react";
import "./V_Collection.css";
import V_Bounding_img from "./img/video-boundingbox.9f2d8652.png";

class V_BOUNDING extends Component {
  render() {
    return (
      <div className="I_Bounding_cover">
        <div className="I_Bounding_box">
          <img src={V_Bounding_img} alt="img" className="I_Bounding_img"></img>
        </div>
        <div className="I_Bounding_title">
          <p className="main">Bounding Box</p>
          <p className="sub">
            Creating boundary boxes that fill the entire objects in the video by
            specific category
          </p>
        </div>
      </div>
    );
  }
}
export default V_BOUNDING;

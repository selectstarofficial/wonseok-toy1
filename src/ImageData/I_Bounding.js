import React, { Component } from "react";
import "./I_Bounding.css";
import I_Bounding_img from "./img/image-boundingbox1.9952ebd1.png";

class I_BOUNDING extends Component {
  render() {
    return (
      <div className="I_Bounding_cover">
        <div className="I_Bounding_box">
          <img src={I_Bounding_img} alt="img" className="I_Bounding_img"></img>
        </div>
        <div className="I_Bounding_title">
          <p className="main">Bounding Box</p>
          <p className="sub">
            Creating boundary boxes that fill the entire objects by specific
            category.
          </p>
        </div>
      </div>
    );
  }
}
export default I_BOUNDING;

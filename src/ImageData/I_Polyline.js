import React, { Component } from "react";
import "./I_Bounding.css";
import I_Polyline_img from "./img/image-polyline.d54abb46.png";

class I_Bounding extends Component {
  render() {
    return (
      <div className="I_Bounding_cover">
        <div className="I_Bounding_box">
          <img src={I_Polyline_img} alt="img" className="I_Bounding_img"></img>
        </div>
        <div className="I_Bounding_title">
          <p className="main">Polyline</p>
          <p className="sub">
            Creating a line by connecting dots on the specified line
          </p>
        </div>
      </div>
    );
  }
}
export default I_Bounding;

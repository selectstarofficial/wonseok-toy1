import React, { Component } from "react";
import "./V_Collection.css";
import V_Polygon_img from "./img/video-polygon.38897707.png";

class V_POLYGON extends Component {
  render() {
    return (
      <div className="I_Bounding_cover">
        <div className="I_Bounding_box">
          <img src={V_Polygon_img} alt="img" className="I_Bounding_img"></img>
        </div>
        <div className="I_Bounding_title">
          <p className="main">Polygon</p>
          <p className="sub">
            Creating a polygon by connecting dots on the specified shapes in the
            video
          </p>
        </div>
      </div>
    );
  }
}
export default V_POLYGON;

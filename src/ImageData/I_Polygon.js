import React, { Component } from "react";
import "./I_Bounding.css";
import I_Polygon_img from "./img/image-polygon.b93376a8.png";

class I_Polygon extends Component {
  render() {
    return (
      <div className="I_Bounding_cover">
        <div className="I_Bounding_box">
          <img src={I_Polygon_img} alt="img" className="I_Bounding_img"></img>
        </div>
        <div className="I_Bounding_title">
          <p className="main">Polygon</p>
          <p className="sub">
            Creating a polygon by connecting dots on the specified shape.
          </p>
        </div>
      </div>
    );
  }
}
export default I_Polygon;

import React, { Component } from "react";
import "./I_Bounding.css";
import I_Brush_img from "./img/image-brush.6bfc69a4.png";

class I_Brush extends Component {
  render() {
    return (
      <div className="I_Bounding_cover">
        <div className="I_Bounding_box">
          <img src={I_Brush_img} alt="img" className="I_Bounding_img"></img>
        </div>
        <div className="I_Bounding_title">
          <p className="main">Brush</p>
          <p className="sub">
            Brushing over specified points on the image to create a shape.
          </p>
        </div>
      </div>
    );
  }
}
export default I_Brush;

import React, { Component } from "react";
import "./I_Bounding.css";
import I_Segmentation_img from "./img/image-segmentation.15367823.png";

class I_Segmentation extends Component {
  render() {
    return (
      <div className="I_Bounding_cover">
        <div className="I_Bounding_box">
          <img
            src={I_Segmentation_img}
            alt="img"
            className="I_Bounding_img"
          ></img>
        </div>
        <div className="I_Bounding_title">
          <p className="main">Semantic Segmentation</p>
          <p className="sub">
            Segmenting an object by placing dots over the specified shape.
          </p>
        </div>
      </div>
    );
  }
}
export default I_Segmentation;

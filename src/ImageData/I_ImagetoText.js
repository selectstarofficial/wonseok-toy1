import React, { Component } from "react";
import "./I_ImagetoText.css";
import I_I_to_T_video from "./img/text-collection.8932f7d0.mp4";

class ImagetoText extends Component {
  render() {
    return (
      <div className="I_I-to-T_cover">
        <video autoPlay loop src={I_I_to_T_video} />
        <div className="I_I-to-T_title">
          <p className="main">Image to Text</p>
          <p className="sub">Identifying texts within a specified image</p>
        </div>
      </div>
    );
  }
}
export default ImagetoText;

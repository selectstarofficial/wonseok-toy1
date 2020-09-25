import React, { Component } from "react";
import "./V_Classification.css";
import V_Classification_img from "./img/video-classification.8444fdf0.png";

class V_CLASSIFICATION extends Component {
  render() {
    return (
      <div className="V_Classification_main">
        <div className="V_Classification_box">
          <img
            src={V_Classification_img}
            alt="img"
            className="V_Classification_img"
          ></img>
          <div className="V_Classification_img_text">
            <p>Category</p>
            <div>
              <div className="V_Classification_no">Sports</div>
              <div className="V_Classification_no">Fitness</div>
              <div className="V_Classification_no">Lifestyle</div>
            </div>
            <p>Sub Category</p>
            <div>
              <div className="V_Classification_no">Hand-to-hand combat</div>
            </div>
          </div>
        </div>
        <div className="V_Classification_title">
          <p className="main">Tagging</p>
          <p className="sub">
            Tagging provides proper keywords of ideas that best represent a
            given content, like an image.
          </p>
        </div>
      </div>
    );
  }
}
export default V_CLASSIFICATION;

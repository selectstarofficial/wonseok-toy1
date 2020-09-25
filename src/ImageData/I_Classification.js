import React, { Component } from "react";
import "./I_Classification.css";
import I_Classification_img from "./img/image-classification1.5cb92760.png";

class I_CLASSIFICATION extends Component {
  render() {
    return (
      <div className="I_Tagging_main">
        <div className="I_Tagging_box">
          <img
            src={I_Classification_img}
            alt="img"
            className="I_Tagging_img"
          ></img>
          <div className="I_Tagging_img_text">
            <p>
              Choose the words that come to your mind from <br />
              the following picture
            </p>
            <div className="I_Tagging_buttontext">
              <div className="I_Tagging_no">Spring</div>
              <div className="I_Tagging_no">Autumn</div>
              <div className="I_Tagging_no">Winter</div>
              <div className="I_Tagging_yes">Summer</div>
            </div>
          </div>
        </div>
        <div className="I_Tagging_title">
          <p className="I_T_main">Classification</p>
          <p className="I_T_sub">
            Sorting images into two or more specific categories.
          </p>
        </div>
      </div>
    );
  }
}
export default I_CLASSIFICATION;

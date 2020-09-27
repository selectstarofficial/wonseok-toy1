import React, { Component } from "react";
import "./A_Tagging.css";
import A_Classification_img from "./img/다운로드 (3).png";

class A_CLASSIFICATION extends Component {
  render() {
    return (
      <div className="A_Tagging_cover">
        <div className="A_Tagging_box">
          <p className="main">
            Q. Identify one or more emotions from the following audio clip
          </p>
          <img src={A_Classification_img} alt="img" />
          <div className="A_Tagging_button">
            <div className="A_Tagging_no">Normal</div>
            <div className="A_Tagging_yes">Sad</div>
            <div className="A_Tagging_no">Happy</div>
            <div className="A_Tagging_no">Angry</div>
          </div>
        </div>
        <div className="A_Tagging_text">
          <p className="main">Classification</p>
          <p className="sub">
            Sorting audio clips into two or more specific categories
          </p>
        </div>
      </div>
    );
  }
}
export default A_CLASSIFICATION;

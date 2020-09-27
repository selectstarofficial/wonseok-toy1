import React, { Component } from "react";
import "./T_Classification.css";
import T_Classification_img from "./img/text_classification.png";
class T_CLASSIFICATION extends Component {
  render() {
    return (
      <div className="T_Classification_cover">
        <div className="T_Classification_box">
          <img src={T_Classification_img} alt="img" />
          <div className="A_Tagging_button">
            <div className="A_Tagging_no">Sad</div>
            <div className="A_Tagging_no">Happy</div>
            <div className="A_Tagging_no">Angry</div>
            <div className="A_Tagging_yes">Normal</div>
          </div>
        </div>
        <div className="T_Classification_text">
          <p className="main">Classification & Analysis</p>
          <p className="sub">
            Sorting texts into two or more specific categories
          </p>
        </div>
      </div>
    );
  }
}
export default T_CLASSIFICATION;

import React, { Component } from "react";
import "./A_Tagging.css";
import A_Tagging_img from "./img/다운로드.png";

class A_TAGGING extends Component {
  render() {
    return (
      <div className="A_Tagging_cover">
        <div className="A_Tagging_box">
          <p className="main">
            Q. How many people appear in this conversation?
          </p>
          <img src={A_Tagging_img} alt="img" />
          <div className="A_Tagging_button">
            <div className="A_Tagging_no">1 person</div>
            <div className="A_Tagging_no">2 person</div>
            <div className="A_Tagging_yes">3 person</div>
          </div>
          <div className="A_Tagging_button">
            <div className="A_Tagging_no">4 person~</div>
          </div>
        </div>
        <div className="A_Tagging_text">
          <p className="main">Semantic Tagging</p>
          <p className="sub">
            Semantic Tagging provides proper keywords or ideas that best
            represent a given audio clip
          </p>
        </div>
      </div>
    );
  }
}
export default A_TAGGING;

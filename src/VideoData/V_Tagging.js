import React, { Component } from "react";
import "./V_Tagging.css";
import V_Tagging_img from "./img/video-tagging.39ae6f8e.png";

class V_TAGGING extends Component {
  render() {
    return (
      <div className="I_Tagging_main">
        <div className="I_Tagging_box">
          <img src={V_Tagging_img} alt="img" className="I_Tagging_img"></img>
          <div className="I_Tagging_img_text">
            <p>
              Q. Summarize the following conversation <br />
              in the video under three sentences.
            </p>
          </div>
        </div>
        <div className="I_Tagging_title">
          <p className="I_T_main">Tagging</p>
          <p className="I_T_sub">
            Tagging provides proper keywords of ideas that best represent a
            given content, like an image.
          </p>
        </div>
      </div>
    );
  }
}
export default V_TAGGING;

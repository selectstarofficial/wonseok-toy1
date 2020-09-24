import React, { Component } from "react";
import "./I_Tagging.css";
import I_Tagging_img from "./img/image-tagging1.e49b4350.png";

class I_Tagging extends Component {
  render() {
    return (
      <div className="I_Tagging_main">
        <div className="I_Tagging_box">
          <img src={I_Tagging_img} alt="img" className="I_Tagging_img"></img>
          <div className="I_Tagging_img_text">
            <p>
              Choose the words that come to your mind from <br />
              the following picture
            </p>
            <div className="I_Tagging_buttontext">
              <div className="I_Tagging_yes">Cozy</div>
              <div className="I_Tagging_yes">Warm</div>
              <div className="I_Tagging_no">Empty</div>
              <div className="I_Tagging_yes">Beautiful</div>
              <div className="I_Tagging_no">Cold</div>
              <div className="I_Tagging_no">Chic</div>
            </div>
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
export default I_Tagging;

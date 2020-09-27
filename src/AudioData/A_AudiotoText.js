import React, { Component } from "react";
import "./A_AudiotoText.css";
import A_AudiotoText_img from "./img/다운로드 (2).png";
class A_AUDIOTOTEXT extends Component {
  render() {
    return (
      <div className="A_AudiotoText_cover">
        <div className="A_AudiotoText_box">
          <p className="main">Dictation</p>
          <p className="sub">Transcribe the following voice clip into texts</p>
          <div>
            <img src={A_AudiotoText_img} alt="img" />
            <div className="A_AudiotoText_imgtext">
              Order everything in my cart
            </div>
          </div>
        </div>
        <div className="A_AudiotoText_text">
          <p className="main">Audio to Text</p>
          <p className="sub">
            Transcribing information in the audio clips into texts
          </p>
        </div>
      </div>
    );
  }
}
export default A_AUDIOTOTEXT;

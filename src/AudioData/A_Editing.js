import React, { Component } from "react";
import "./A_Editing.css";
import A_Editing_img from "./img/audio-editing.e8c3d2d1.png";
class A_EDITING extends Component {
  render() {
    return (
      <div className="A_Editing_cover">
        <img src={A_Editing_img} alt="img" />
        <div className="A_Editing_text">
          <p className="main">Audio Editing</p>
          <p className="sub">Editing the specified segments from audio clip</p>
        </div>
      </div>
    );
  }
}
export default A_EDITING;

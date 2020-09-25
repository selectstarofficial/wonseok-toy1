import React, { Component } from "react";
import "./I_Bounding.css";
import I_Keypoint_img from "./img/image-keypoint.eb3eae51.png";

class I_KEYPOINT extends Component {
  render() {
    return (
      <div className="I_Bounding_cover">
        <div className="I_Bounding_box">
          <img src={I_Keypoint_img} alt="img" className="I_Bounding_img"></img>
        </div>
        <div className="I_Bounding_title">
          <p className="main">Key Point</p>
          <p className="sub">
            Creating key points by identifying the specific points in the image
          </p>
        </div>
      </div>
    );
  }
}
export default I_KEYPOINT;

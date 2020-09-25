import React, { Component } from "react";
import "./V_Collection.css";
import V_Collection_img from "./img/video-collection.f558901f.png";

class V_COLLECTION extends Component {
  render() {
    return (
      <div className="I_Bounding_cover">
        <div className="I_Bounding_box">
          <img
            src={V_Collection_img}
            alt="img"
            className="I_Bounding_img"
          ></img>
        </div>
        <div className="I_Bounding_title">
          <p className="main">
            Recording video of a specific environment or specified situation
          </p>
          <p className="sub">
            Only collecting high-quality videos through AI inspection
          </p>
        </div>
      </div>
    );
  }
}
export default V_COLLECTION;

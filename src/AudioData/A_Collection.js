import React, { Component } from "react";
import "./A_Collection.css";
import A_Collection_img from "./img/audio-collection.c049b584.png";
class A_COLLECTION extends Component {
  render() {
    return (
      <div className="A_Collection_cover">
        <img src={A_Collection_img} alt="img" />
        <p className="main">
          Recording voice of a specific text or <br />
          specified situation
        </p>
        <p className="sub">
          Only collecting high-quality voice recordings <br />
          through filtering ambient noises.
        </p>
      </div>
    );
  }
}
export default A_COLLECTION;

import React, { Component } from "react";
import "./T_Collection.css";
import T_Collection_audio from "./img/text-collection.8932f7d0 (1).mp4";
import T_Collection_img from "./img/text-collection.4294c5d2.png";
class T_COLLECTION extends Component {
  render() {
    return (
      <div className="T_Collection_cover">
        <video autoPlay loop src={T_Collection_audio}></video>
        <img src={T_Collection_img} alt="img"></img>
        <div className="T_Collection_text">
          <p className="main">Collection</p>
          <p className="sub">
            Typing specified information or situations
            <br /> into texts
          </p>
        </div>
      </div>
    );
  }
}
export default T_COLLECTION;

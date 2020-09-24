import React, { Component } from "react";
import "./I_Collection.css";
import i_collection_img from "./img/imageData_Collection.png";

class I_Collection extends Component {
  render() {
    return (
      <div className="Image_View">
        <img
          src={i_collection_img}
          alt="img"
          className="Image_Collection_img"
        ></img>
      </div>
    );
  }
}
export default I_Collection;

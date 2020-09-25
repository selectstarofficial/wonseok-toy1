import React, { Component } from "react";
import "./I_Collection.css";
import i_collection_img from "./img/imageData_Collection.png";

class I_COLLECTION extends Component {
  render() {
    return (
      <>
        <img
          src={i_collection_img}
          alt="img"
          className="Image_Collection_img"
        ></img>
      </>
    );
  }
}
export default I_COLLECTION;

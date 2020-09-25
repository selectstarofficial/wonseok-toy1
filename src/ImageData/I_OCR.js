import React, { Component } from "react";
import "./I_OCR.css";
import I_OCR_img from "./img/image-ocr.02b6bc7b.png";
class I_OCR extends Component {
  render() {
    return (
      <>
        <div className="I_OCR_Cover">
          <div className="I_OCR_container">
            <img src={I_OCR_img} alt="img" />
            <div className="I_OCR_Box">
              <div className="I_OCR_GOOD">good</div>
            </div>
          </div>
          <div className="I_OCR_TITLE">
            <p className="main">Optical Character Recognition (OCR)</p>
            <p className="sub">
              Classifying characters within a specified image.
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default I_OCR;

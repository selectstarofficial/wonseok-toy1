import React, { Component } from "react";
import "./classification.css";
import phone1 from "./img/phone1.png";

class ImageClassification extends Component {
  render() {
    return (
      <div className="classification_cover_page">
        <div className="classification_img">
          <img src={phone1} alt="img"></img>
          <div className="classififcation_img_text">
            classification를 눌렀을때 이화면이 나오면 정말 좋겠다...
          </div>
        </div>
      </div>
    );
  }
}
export default ImageClassification;

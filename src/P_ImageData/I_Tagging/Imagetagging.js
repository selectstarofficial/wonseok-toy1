import React, { Component } from "react";
import "./tagging.css";
import phone2 from "./img/phone2.png";

class ImageTagging extends Component {
  render() {
    return (
      <div className="tagging_cover_page">
        <div className="tagging_img">
          <img src={phone2} alt="img"></img>
          <div className="tagging_img_text">
            tagging를 눌렀을때 이화면이 나오면 정말 좋겠다...
          </div>
        </div>
      </div>
    );
  }
}
export default ImageTagging;

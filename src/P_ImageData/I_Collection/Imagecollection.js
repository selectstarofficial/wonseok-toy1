import React, { Component } from "react";
import "./collection.css";
import phone1 from "./img/phone1.png";
import phone2 from "./img/phone2.png";
import phone3 from "./img/phone3.png";

class ImageCollection extends Component {
  render() {
    return (
      <div className="images">
        <div className="coverphone1">
          <div className="phone1">
            <img src={phone1} alt="img"></img>
          </div>
        </div>
        <div className="coverphone2">
          <div className="phone2">
            <img src={phone2} alt="img"></img>
          </div>
        </div>
        <div className="coverphone3">
          <div className="phone3">
            <img src={phone3} alt="img"></img>
          </div>
        </div>
      </div>
    );
  }
}
export default ImageCollection;

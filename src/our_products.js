import React, { Component } from "react";
import "./our_projects.css";

class Products extends Component {
  render() {
    return (
      <div className="cover">
        <div className="product"></div>
        <div className="maintext"></div>
        <div className="data">
          <div className="image"></div>
          <div className="video"></div>
          <div className="audio"></div>
          <div className="text-document"></div>
          <dic className="anythingyouwant"></dic>
        </div>
        <div className="mainview">
          <div className="indexes">
            <div className="collection"></div>
            <div className="tagging"></div>
            <div className="classification"></div>
            <div className="bounding"></div>
            <div className="polyline"></div>
            <div className="polygon"></div>
            <div className="segmentation"></div>
            <div className="key-point"></div>
            <div className="brush"></div>
            <div className="ocr"></div>
            <div className="imagetotext"></div>
          </div>
          <div className="images">
            <div className="phone1"></div>
            <div className="phone2"></div>
            <div className="phone3"></div>
          </div>
        </div>
        <div className="undertext">
          <div className="location">
            <div className="locationimg">
              <div className="locationtext"></div>
            </div>
          </div>
          <div className="quality">
            <div className="qualityimg">
              <div className="qualitytext"></div>
            </div>
          </div>
          <div className="privacy">
            <div className="privacyimg">
              <div className="privacytext"></div>
            </div>
          </div>
          <div className="ai">
            <div className="aiimg">
              <div className="aitext"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;

import React, { Component } from "react";
import "./ImageData.css";
import I_COLLECTION from "../ImageData/I_Collection";
import I_TAGGING from "../ImageData/I_Tagging";
import I_CLASSIFICATION from "../ImageData/I_Classification";
import I_BOUNDING from "../ImageData/I_Bounding";
import I_POLYLINE from "../ImageData/I_Polyline";
import I_POLYGON from "../ImageData/I_Polygon";
import I_SEGMENTATION from "../ImageData/I_Segmentation";
import I_KEYPOINT from "../ImageData/I_Keypoint";
import I_BRUSH from "../ImageData/I_Brush";
import I_OCR from "../ImageData/I_OCR";
import I_IMAGETOTEXT from "../ImageData/I_ImagetoText";
class ImageData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageView: "I_Collection",
    };
  }
  ImagehandleClick = (view) => {
    this.setState({
      imageView: view,
    });
  };
  render() {
    const ImageChange = () => {
      switch (this.state.imageView) {
        case "I_Collection":
          return <I_COLLECTION />;
        case "I_Tagging":
          return <I_TAGGING />;
        case "I_Classification":
          return <I_CLASSIFICATION />;
        case "I_Bounding":
          return <I_BOUNDING />;
        case "I_Polyline":
          return <I_POLYLINE />;
        case "I_Polygon":
          return <I_POLYGON />;
        case "I_Segmentation":
          return <I_SEGMENTATION />;
        case "I_Keypoint":
          return <I_KEYPOINT />;
        case "I_Brush":
          return <I_BRUSH />;
        case "I_OCR":
          return <I_OCR />;
        case "I_ImagetoText":
          return <I_IMAGETOTEXT />;
        default:
          return <I_COLLECTION />;
      }
    };
    return (
      <>
        <div className="Image_Indexes">
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Collection")}
            className={`Image_Collection ${
              this.state.imageView === "I_Collection" && "I_active"
            }`}
          >
            Collection
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Tagging")}
            className={`Image_Tagging ${
              this.state.imageView === "I_Tagging" && "I_active"
            }`}
          >
            Tagging
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Classification")}
            className={`Image_Classification ${
              this.state.imageView === "I_Classification" && "I_active"
            }`}
          >
            Classification
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Bounding")}
            className={`Image_BoundingBox ${
              this.state.imageView === "I_Bounding" && "I_active"
            }`}
          >
            Bounding Box
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Polyline")}
            className={`Image_Polyline ${
              this.state.imageView === "I_Polyline" && "I_active"
            }`}
          >
            Polyline
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Polygon")}
            className={`Image_Polygon ${
              this.state.imageView === "I_Polygon" && "I_active"
            }`}
          >
            Polygon
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Segmentation")}
            className={`Image_Segmentation ${
              this.state.imageView === "I_Segmentation" && "I_active"
            }`}
          >
            Segmentation
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Keypoint")}
            className={`Image_Keypoint ${
              this.state.imageView === "I_Keypoint" && "I_active"
            }`}
          >
            Key point
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Brush")}
            className={`Image_Brush ${
              this.state.imageView === "I_Brush" && "I_active"
            }`}
          >
            Brush
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_OCR")}
            className={`Image_OCR ${
              this.state.imageView === "I_OCR" && "I_active"
            }`}
          >
            OCR
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_ImagetoText")}
            className={`Image_ImagetoText ${
              this.state.imageView === "I_ImagetoText" && "I_active"
            }`}
          >
            ImagetoText
          </div>
        </div>
        <div className="Image_View">
          <ImageChange />
        </div>
      </>
    );
  }
}
export default ImageData;

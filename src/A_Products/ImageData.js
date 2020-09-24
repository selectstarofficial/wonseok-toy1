import React, { Component } from "react";
import "./ImageData.css";
import I_Collection from "../ImageData/I_Collection";
import I_Tagging from "../ImageData/I_Tagging";
import I_Classification from "../ImageData/I_Classification";
import I_Bounding from "../ImageData/I_Bounding";
import I_Polyline from "../ImageData/I_Polyline";
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
          return <I_Collection />;
        case "I_Tagging":
          return <I_Tagging />;
        case "I_Classification":
          return <I_Classification />;
        case "I_Bounding":
          return <I_Bounding />;
        case "I_Polyline":
          return <I_Polyline />;
        case "I_Polygon":
        case "I_Segmentation":
        case "I_Keypoint":
        case "I_Brush":
        case "I_OCR":
        case "I_ImagetoText":
          return;
        default:
          return <I_Collection />;
      }
    };
    return (
      <>
        <div className="Image_Indexes">
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Collection")}
            className="Image_Collection"
          >
            Collection
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Tagging")}
            className="Image_Tagging"
          >
            Tagging
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Classification")}
            className="Image_Classification"
          >
            Classification
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Bounding")}
            className="Image_Bounding Box"
          >
            Bounding Box
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Polyline")}
            className="Image_Polyline"
          >
            Polyline
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Polygon")}
            className="Image_Polygon"
          >
            Polygon
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Segmentation")}
            className="Image_Segmentation"
          >
            Segmentation
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Keypoint")}
            className="Image_Keypoint"
          >
            Key point
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_Brush")}
            className="Image_Brush"
          >
            Brush
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_OCR")}
            className="Image_OCR"
          >
            OCR
          </div>
          <div
            onClick={this.ImagehandleClick.bind(this, "I_ImagetoText")}
            className="Image_ImagetoText"
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

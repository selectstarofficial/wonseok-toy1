import React, { Component } from "react";
import ImageClassification from "./I_Classification/Imageclassification";
import ImageTagging from "./I_Tagging/Imagetagging";
import ImageCollection from "./I_Collection/Imagecollection";
import ImageBounding from "./I_Bounding/Imagebounding";
import ImagePolyline from "./I_Polyline/polyline";
import ImagePolygon from "./I_Polygon/Imagepolygon";
import ImageSegmentation from "./I_Segmentation/segmentation";
import Imagekeypoint from "./I_KeyPoint/imagekey-point";
import Brush from "./I_Brush/I_Brush";
import Ocr from "./I_Ocr/ocr";
import "./imagedata.css";
import Imagetotext from "./I_ImageToText/imagetotext";

class ImageData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageView: "Image_Collection",
    };
  }
  imagehandleClick = (image) => {
    this.setState({
      imageView: image,
    });
  };

  render() {
    const ImageMainchange = () => {
      switch (this.state.imageView) {
        case "Image_Collection":
          return <ImageCollection />;
        case "Image_Tagging":
          return <ImageTagging />;
        case "Image_Classification":
          return <ImageClassification />;
        case "Image_Bounding":
          return <ImageBounding />;
        case "Image_Polyline":
          return <ImagePolyline />;
        case "Image_Polygon":
          return <ImagePolygon />;
        case "Image_Segmentation":
          return <ImageSegmentation />;
        case "Image_Key-point":
          return <Imagekeypoint />;
        case "Image_Brush":
          return <Brush />;
        case "Image_Ocr":
          return <Ocr />;
        case "Image_Imagetotext":
          return <Imagetotext />;
        default:
          return <ImageCollection />;
      }
    };
    return (
      <div className="indexes">
        <div>
          <ImageMainchange />
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "Image_Collection")}
          className={`collection ${
            this.state.imageView === "Image_Collection" && "active"
          }`}
        >
          Collection
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "Image_Tagging")}
          className={`tagging ${
            this.state.imageView === "Image_Tagging" && "active"
          }`}
        >
          Tagging
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "Image_Classification")}
          className={`classification ${
            this.state.imageView === "Image_Classification" && "active"
          }`}
        >
          Classification
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "Image_Bounding")}
          className={`bounding ${
            this.state.imageView === "Image_Bounding" && "active"
          }`}
        >
          Bounding box
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "Image_Polyline")}
          className={`polyline ${
            this.state.imageView === "Image_Polyline" && "active"
          }`}
        >
          Polyline
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "Image_Polygon")}
          className={`polygon ${
            this.state.imageView === "Image_Polygon" && "active"
          }`}
        >
          polygon
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "Image_Segmentation")}
          className={`segmentation ${
            this.state.imageView === "Image_Segmentation" && "active"
          }`}
        >
          Segmentation
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "Image_Key-point")}
          className={`key-point ${
            this.state.imageView === "Image_Key-point" && "active"
          }`}
        >
          key-point
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "Image_Brush")}
          className={`brush ${
            this.state.imageView === "Image_Brush" && "active"
          }`}
        >
          brush
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "Image_Ocr")}
          className={`ocr ${this.state.imageView === "Image_Ocr" && "active"}`}
        >
          OCR
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "Image_Imagetotext")}
          className={`imagetotext ${
            this.state.imageView === "Image_Imagetotext" && "active"
          }`}
        >
          Image to Text
        </div>
      </div>
    );
  }
}
export default ImageData;

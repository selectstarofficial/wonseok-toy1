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
      imageView: "imagecollection",
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
        case "imagecollection":
          return <ImageCollection />;
        case "imagetagging":
          return <ImageTagging />;
        case "imageclassification":
          return <ImageClassification />;
        case "imagebounding":
          return <ImageBounding />;
        case "imagepolyline":
          return <ImagePolyline />;
        case "imagepolygon":
          return <ImagePolygon />;
        case "imagesegmentation":
          return <ImageSegmentation />;
        case "imagekey-point":
          return <Imagekeypoint />;
        case "brush":
          return <Brush />;
        case "ocr":
          return <Ocr />;
        case "imagetotext":
          return <Imagetotext />;
        default:
          return <ImageCollection />;
      }
    };
    return (
      <div className="indexes">
        <div
          className={`active ${
            this.state.mainView === "collection" && "active"
          }`}
        ></div>
        <div>
          <ImageMainchange />
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "imagecollection")}
          className={`collection ${
            this.state.mainView === "collection" && "active"
          }`}
        >
          Collection
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "imagetagging")}
          className="tagging"
        >
          Tagging
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "imageclassification")}
          className="classification"
        >
          Classification
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "imagebounding")}
          className="bounding"
        >
          Bounding box
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "imagepolyline")}
          className="polyline"
        >
          Polyline
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "imagepolygon")}
          className="polygon"
        >
          polygon
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "imagesegmentation")}
          className="segmentation"
        >
          Segmentation
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "imagekey-point")}
          className="key-point"
        >
          key-point
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "brush")}
          className="brush"
        >
          brush
        </div>
        <div onClick={this.imagehandleClick.bind(this, "ocr")} className="ocr">
          OCR
        </div>
        <div
          onClick={this.imagehandleClick.bind(this, "imagetotext")}
          className="imagetotext"
        >
          Image to Text
        </div>
      </div>
    );
  }
}
export default ImageData;

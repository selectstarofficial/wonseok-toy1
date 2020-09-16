import React, { Component } from "react";
import "./our_products.css";
import product_img from "./img/secondpageback-img.png";
import icon1 from "./img/product_icon1.png";
import icon2 from "./img/product_2.png";
import icon3 from "./img/product_3.png";
import icon4 from "./img/product4.png";
import ImageClassification from "./Imageclassification";
import ImageTagging from "./Imagetagging";
import ImageCollection from "./Imagecollection";
import ImageBounding from "./Imagebounding";
import ImagePolyline from "./polyline";
import ImagePolygon from "./Imagepolygon";
import ImageSegmentation from "./segmentation";
import Imagekeypoint from "./imagekey-point";
import Brush from "./brush";
import Ocr from "./ocr";
import Imagetotext from "./imagetotext";
/* const Change = () => {
  const [value, setValue] = setState;
};
 */
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainView: "imagecollection",
    };
  }
  handleClick = (view) => {
    this.setState({
      mainView: view,
    });
  };
  render() {
    const Mainchange = () => {
      switch (this.state.mainView) {
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
      <div className="coverpage">
        <div className="coverstair">
          <div className="product">PRODUCTS</div>
        </div>
        <div className="covermaintext">
          <div className="firsttext">QUICK&ACCURATE</div>
          <div className="secondtext">DATA COLLECTION / ANNOTATION</div>
        </div>
        <div className="data">
          <div className="image">
            <div className="coverimagetext">Image Data</div>
          </div>
          <div className="video">
            <div className="covervideotext">Video Data</div>
          </div>
          <div className="audio">
            <div className="coveraudiotext">Audio Data</div>
          </div>
          <div className="text-document">
            <div className="covertext-documenttext">Text/Document Data</div>
          </div>
          <dic className="anythingyouwant">
            <div className="coveranythingyouwanttext">Anything You Want</div>
          </dic>
        </div>
        <div className="mainview">
          <div className="indexes">
            <div>
              <Mainchange />
            </div>
            <div className="collectionbackground">
              <div
                onClick={this.handleClick.bind(this, "imagecollection")}
                className="collection"
              >
                collection
              </div>
            </div>
            <div
              onClick={this.handleClick.bind(this, "imagetagging")}
              className="tagging"
            >
              Tagging
            </div>
            <div
              onClick={this.handleClick.bind(this, "imageclassification")}
              className="classification"
            >
              Classification
            </div>
            <div
              onClick={this.handleClick.bind(this, "imagebounding")}
              className="bounding"
            >
              Bounding box
            </div>
            <div
              onClick={this.handleClick.bind(this, "imagepolyline")}
              className="polyline"
            >
              Polyline
            </div>
            <div
              onClick={this.handleClick.bind(this, "imagepolygon")}
              className="polygon"
            >
              polygon
            </div>
            <div
              onClick={this.handleClick.bind(this, "imagesegmentation")}
              className="segmentation"
            >
              Segmentation
            </div>
            <div
              onClick={this.handleClick.bind(this, "imagekey-point")}
              className="key-point"
            >
              key-point
            </div>
            <div
              onClick={this.handleClick.bind(this, "brush")}
              className="brush"
            >
              brush
            </div>
            <div onClick={this.handleClick.bind(this, "ocr")} className="ocr">
              OCR
            </div>
            <div
              onClick={this.handleClick.bind(this, "imagetotext")}
              className="imagetotext"
            >
              Image to Text
            </div>
          </div>
        </div>
        <div className="undertext">
          <div className="location">
            <div className="locationimg">
              <img src={icon1} alt="img"></img>
              <div className="locationtext">
                Data location,time,
                <br />
                weather,&more
                <div className="locationsubtext">
                  Using the mobile device`s log <br />
                  information, we collect <br />
                  <span>
                    where the data is from, when
                    <br />
                    it is collected, and other
                    <br />
                    usefull information.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="quality">
            <div className="qualityimg">
              <img src={icon2} alt="img"></img>
              <div className="qualitytext">
                Quality, size, placement,
                <br />
                & more
                <br />
                <div className="qualitysubtext">
                  We collect{" "}
                  <span>
                    every data in any
                    <br />
                    quality, size, object
                    <br />
                    placement, or composition.
                  </span>
                  <br />
                  We deliver any requests.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="privacy">
          <div className="privacyimg">
            <img src={icon3} alt="img"></img>
            <div className="privacytext">
              Privacy
              <div className="privacysubtext">
                We make sure to blur the
                <br />
                sensitive information such as
                <br />
                a face or number plates. Our
                <br />
                data is anonymous.
              </div>
            </div>
          </div>
        </div>
        <div className="ai">
          <div className="aiimg">
            <img src={icon4} alt="img"></img>
            <div className="aitext">
              AI inspection
              <div className="aisubtext">
                AI-based inspection
                <br />
                algorithm filters similar
                <br />
                images.
                <span>
                  This prevents
                  <br />
                  repeated image submission
                  <br />
                  and assures data diversity
                </span>
              </div>
            </div>
          </div>
        </div>
        <img src={product_img} alt="img"></img>
      </div>
    );
  }
}

export default Products;

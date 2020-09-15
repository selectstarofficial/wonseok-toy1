import React, { Component } from "react";
import "./our_products.css";
import { state } from "react";
import product_img from "./img/secondpageback-img.png";
import icon1 from "./img/product_icon1.png";
import icon2 from "./img/product_2.png";
import icon3 from "./img/product_3.png";
import icon4 from "./img/product4.png";
import Classification from "./classification";
import Tagging from "./tagging";
import Collection from "./collection";
import Bounding from "./bounding";
/* const Change = () => {
  const [value, setValue] = setState;
};
 */
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainView: "collection",
    };
  }
  handleClick(view) {
    return this.setState(() => ({
      mainView: view,
    }));
  }
  render() {
    const Mainchange = () => {
      switch (this.state.mainView) {
        case "collection":
          return <Collection />;
        case "tagging":
          return <Tagging />;
        case "classification":
          return <Classification />;
        case "bounding":
          return <Bounding />;
        default:
          return <Collection />;
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
                onClick={() => this.handleClick("collection")}
                className="collection"
              >
                collection
              </div>
            </div>
            <div
              onClick={() => this.handleClick("tagging")}
              className="tagging"
            >
              Tagging
            </div>
            <div
              onClick={() => this.handleClick("classification")}
              className="classification"
            >
              Classification
            </div>
            <div
              onClick={() => this.handleClick("bounding")}
              className="bounding"
            >
              Bounding box
            </div>
            <div onClick={"polyline"} className="polyline">
              Polyline
            </div>
            <div onClick={"polygon"} className="polygon">
              polygon
            </div>
            <div onClick={"segmentation"} className="segmentation">
              Segmentation
            </div>
            <div onClick={"key-point"} className="key-point">
              key-point
            </div>
            <div onClick={"brush"} className="brush">
              brush
            </div>
            <div onClick={"ocr"} className="ocr">
              OCR
            </div>
            <div onClick={"imagetotext"} className="imagetotext">
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

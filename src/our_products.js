import React, { Component } from "react";
import "./our_projects.css";
import phone1 from "./phone1.png";
import phone2 from "./phone2.png";
import phone3 from "./phone3.png";
import icon1 from "./product_icon1.png";
import icon2 from "./product_2.png";
import icon3 from "./product_3.png";
import icon4 from "./product4.png";

class Products extends Component {
  render() {
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
            <div className="collectionbackground">
              <div className="collection">collection</div>
            </div>
            <div className="tagging">Tagging</div>
            <div className="classification">Classification</div>
            <div className="bounding">Bounding box</div>
            <div className="polyline">Polyline</div>
            <div className="polygon">polygon</div>
            <div className="segmentation">Segmentation</div>
            <div className="key-point">key-point</div>
            <div className="brush">brush</div>
            <div className="ocr">OCR</div>
            <div className="imagetotext">Image to Text</div>
            <div className="images">
              <div className="coverphone1">
                <div className="phone1">
                  <img src={phone1}></img>
                </div>
              </div>
              <div className="coverphone2">
                <div className="phone2">
                  <img src={phone2}></img>
                </div>
              </div>
              <div className="coverphone3">
                <div className="phone3">
                  <img src={phone3}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="undertext">
          <div className="location">
            <div className="locationimg">
              <img src={icon1}></img>
              <div className="locationtext">
                Data location,time,
                <br />
                weather,&more
                <div className="locationsubtext">
                  Using the mobile device`s log <br />
                  information, we collect <br />
                </div>
                <div className="locationlasttext">
                  where the data is from, when
                  <br />
                  it is collected, and other
                  <br />
                  usefull information.
                </div>
              </div>
            </div>
          </div>
          <div className="quality">
            <div className="qualityimg">
              <img src={icon2}></img>
              <div className="qualitytext">
                Quality, size, placement,
                <br />& more
                <div className="qualitysubtext">
                  We collect every data in any
                  <br />
                  quality, size, object
                  <br />
                  placement, or composition.
                  <br />
                  We deliver any requests.
                </div>
              </div>
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

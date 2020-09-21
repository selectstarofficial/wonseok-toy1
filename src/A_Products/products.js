import React, { Component } from "react";
import "./products.css";
import product_image from "./img/image.png";
import product_video from "./img/video.png";
import product_audio from "./img/audio.png";
import product_text from "./img/Group.png";
import product_last from "./img/last.png";
import product_img from "./img/secondpageback-img.png";
import icon1 from "./img/product_icon1.png";
import icon2 from "./img/product_2.png";
import icon3 from "./img/product_3.png";
import icon4 from "./img/product4.png";
import ImageData from "../P_ImageData/imagedata";
import VideoData from "../P_VideoData/videodata";
import AudioData from "../P_AudioData/AudioData";
import TextData from "../P_TextData/TextData";
import GetStart from "../P_GetStart/GetStart";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainView: "ImageData",
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
        case "ImageData":
          return <ImageData />;
        case "VideoData":
          return <VideoData />;
        case "AudioData":
          return <AudioData />;
        case "GetStart":
          return <GetStart />;
        case "TextData":
          return <TextData />;
        default:
          return <ImageData />;
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
          <div
            className={`image ${
              this.state.mainView === "ImageData" && "main_active"
            }`}
          >
            <div
              onClick={this.handleClick.bind(this, "ImageData")}
              className={`coverimagetext ${
                this.state.mainView === "ImageData" && "main_active"
              }`}
            >
              <img
                src={product_image}
                alt="img"
                className={`product_image_img ${
                  this.state.mainView === "ImageData" && "image_active"
                }`}
              ></img>
              Image Data
            </div>
          </div>
          <div className="video">
            <div
              onClick={this.handleClick.bind(this, "VideoData")}
              className={`covervideotext ${
                this.state.mainView === "VideoData" && "main_active"
              }`}
            >
              <img
                src={product_video}
                alt="img"
                className={`product_video_img ${
                  this.state.mainView === "VideoData" && "image_active"
                }`}
              ></img>
              Video Data
            </div>
          </div>
          <div className="audio">
            <div
              onClick={this.handleClick.bind(this, "AudioData")}
              className={`coveraudiotext ${
                this.state.mainView === "AudioData" && "main_active"
              }`}
            >
              <img
                src={product_audio}
                alt="img"
                className={`product_audio_img ${
                  this.state.mainView === "AudioData" && "image_active"
                }`}
              ></img>
              Audio Data
            </div>
          </div>
          <div className="text-document">
            <div
              onClick={this.handleClick.bind(this, "TextData")}
              className={`covertext-documenttext ${
                this.state.mainView === "TextData" && "main_active"
              }`}
            >
              <img
                src={product_text}
                alt="img"
                className={`product_text_img ${
                  this.state.mainView === "TextData" && "image_active"
                }`}
              ></img>
              Text/Document Data
            </div>
          </div>
          <div className="anythingyouwant">
            <div
              onClick={this.handleClick.bind(this, "GetStart")}
              className={`coveranythingyouwanttext ${
                this.state.mainView === "GetStart" && "main_active"
              }`}
            >
              <img
                src={product_last}
                alt="img"
                className={`product_last_img ${
                  this.state.mainView === "GetStart" && "image_active"
                }`}
              ></img>
              Anything You Want
            </div>
          </div>
        </div>
        <div className="mainview">
          <div>
            <Mainchange />
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
        <img
          src={product_img}
          alt="img"
          className="product_background_img"
        ></img>
      </div>
    );
  }
}

export default Products;

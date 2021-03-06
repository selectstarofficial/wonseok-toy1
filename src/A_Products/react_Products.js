import React, { Component } from "react";
import "./react_Products.css";
import product_image from "./img/image.png";
import product_video from "./img/video.png";
import product_audio from "./img/audio.png";
import product_text from "./img/Group.png";
import product_last from "./img/last.png";
import ImageData from "./ImageData";
import VideoData from "./VideoData";
import AudioData from "./AudioData";
import TextData from "./TextData";
import GetStart from "./GetStart";
import icon1 from "./img/product_icon1.png";
import icon2 from "./img/product_2.png";
import icon3 from "./img/product_3.png";
import icon4 from "./img/product4.png";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainView: "ImageData",
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.focused !== this.props.focused) {
      this.setState({ mainView: newProps.focused });
    }
  }

  handleClick = (view) => {
    this.setState({
      mainView: view,
    });
  };
  render() {
    const MainChange = () => {
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
      <div id="Products" className="products_main_page">
        <div className="products_covr_page">
          <p className="products_small_header">PRODUCTS</p>
          <p className="products_big_header">
            <span className="blue">QUICK & ACCURATE</span>
            <br />
            DATA COLLECTION AND
            <br />
            ANNOTATION
          </p>
          <div className="products_Dataes">
            <div
              onClick={this.handleClick.bind(this, "ImageData")}
              className="p_ImageData"
            >
              <img
                src={product_image}
                alt="img"
                className={`p_img_img ${
                  this.state.mainView === "ImageData" && "opacity1"
                }`}
              />
              <p
                className={`p_image_text ${
                  this.state.mainView === "ImageData" && "colorblack"
                }`}
              >
                Image Data
              </p>
            </div>
            <div
              onClick={this.handleClick.bind(this, "VideoData")}
              className="p_VideoData"
            >
              <img
                src={product_video}
                alt="img"
                className={`p_video_img ${
                  this.state.mainView === "VideoData" && "opacity1"
                }`}
              />
              <p
                className={`p_video_text ${
                  this.state.mainView === "VideoData" && "colorblack"
                }`}
              >
                Video Data
              </p>
            </div>
            <div
              onClick={this.handleClick.bind(this, "AudioData")}
              className="p_AudioData"
            >
              <img
                src={product_audio}
                alt="img"
                className={`p_audio_img ${
                  this.state.mainView === "AudioData" && "opacity1"
                }`}
              />
              <p
                className={`p_audio_text ${
                  this.state.mainView === "AudioData" && "colorblack"
                }`}
              >
                Audio Data
              </p>
            </div>
            <div
              className="p_TextData"
              onClick={this.handleClick.bind(this, "TextData")}
            >
              <img
                src={product_text}
                alt="img"
                className={`p_text_img ${
                  this.state.mainView === "TextData" && "opacity1"
                }`}
              />
              <p
                className={`p_text_text ${
                  this.state.mainView === "TextData" && "colorblack"
                }`}
              >
                Text/Document Data
              </p>
            </div>
            <div
              className="p_GetStart"
              onClick={this.handleClick.bind(this, "GetStart")}
            >
              <img
                src={product_last}
                alt="img"
                className={`p_start_img ${
                  this.state.mainView === "GetStart" && "opacity1"
                }`}
              />
              <p
                className={`p_getstart_text ${
                  this.state.mainView === "GetStart" && "colorblack"
                }`}
              >
                anything You Want
              </p>
            </div>
          </div>
          <div className="products_MainView">
            <MainChange />
          </div>
          <div className="products_Footer">
            <div className="P_Footer">
              <img src={icon1} alt="img" />
              <p className="Data_main">
                Data location, time, <br />
                weather, & more
              </p>
              <p className="data_sub">
                Using the moblie device's <br />
                log information, we collect <br />
                <span className="blue">
                  where the data is from, when
                  <br />
                  it is collected, and other <br />
                  useful information.
                </span>
              </p>
            </div>
            <div className="P_Footer">
              <img src={icon2} alt="img" />
              <p className="Quality_main">
                Quality, size,
                <br />
                placement, & more
              </p>
              <p className="Quality_sub">
                We collect{" "}
                <span className="blue">
                  every data in any <br />
                  quality, size, object <br />
                  placement, or composition.
                  <br />
                </span>
                We deliver any requests.
              </p>
            </div>
            <div className="P_Footer">
              <img src={icon3} alt="img" />
              <p className="Privacy_main">Privacy</p>
              <p className="Privacy_sub">
                We make sure to blur the <br />
                sensitive information such as
                <br />
                a face or number plates. Our
                <br />
                data is anonymous.
              </p>
            </div>
            <div className="P_Footer">
              <img src={icon4} alt="img" />
              <p className="AI_main">AI Inspection</p>
              <p className="AI_sub">
                AI-based inspection
                <br />
                algorithm filters similar
                <br />
                images.{" "}
                <span className="blue">
                  This prevents
                  <br />
                  repeated image submission
                  <br />
                  and assures data diversity.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;

import React, { Component } from "react";
import "./VideoData.css";
import V_COLLECTION from "../VideoData/V_Collection";
import V_TAGGING from "../VideoData/V_Tagging";
import V_CLASSIFICATION from "../VideoData/V_Classification";
import V_BOUNDING from "../VideoData/V_Bounding";
import V_POLYGON from "../VideoData/V_Polygon";

class VideoData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoView: "V_Collection",
    };
  }
  VideohandleClick = (view) => {
    this.setState({
      videoView: view,
    });
  };
  render() {
    const VideoChange = () => {
      switch (this.state.videoView) {
        case "V_Collection":
          return <V_COLLECTION />;
        case "V_Tagging":
          return <V_TAGGING />;
        case "V_Classification":
          return <V_CLASSIFICATION />;
        case "V_Bounding":
          return <V_BOUNDING />;
        case "V_Polygon":
          return <V_POLYGON />;
        default:
          return <V_COLLECTION />;
      }
    };
    return (
      <>
        <div id="VideoData" className="Video_Indexes">
          <div
            onClick={this.VideohandleClick.bind(this, "V_Collection")}
            className={`Video_Collection ${
              this.state.videoView === "V_Collection" && "I_active"
            }`}
          >
            Collection
          </div>
          <div
            onClick={this.VideohandleClick.bind(this, "V_Tagging")}
            className={`Video_Tagging ${
              this.state.videoView === "V_Tagging" && "I_active"
            }`}
          >
            Tagging
          </div>
          <div
            onClick={this.VideohandleClick.bind(this, "V_Classification")}
            className={`Video_Classification ${
              this.state.videoView === "V_Classification" && "I_active"
            }`}
          >
            Classification
          </div>
          <div
            onClick={this.VideohandleClick.bind(this, "V_Bounding")}
            className={`Video_BoundingBox ${
              this.state.videoView === "V_Bounding" && "I_active"
            }`}
          >
            Bounding Box
          </div>
          <div
            onClick={this.VideohandleClick.bind(this, "V_Polygon")}
            className={`Video_Polygon ${
              this.state.videoView === "V_Polygon" && "I_active"
            }`}
          >
            Polygon
          </div>
        </div>
        <div className="Image_View">
          <VideoChange />
        </div>
      </>
    );
  }
}
export default VideoData;

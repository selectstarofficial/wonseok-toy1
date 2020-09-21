import React, { Component } from "react";
import "./videodata.css";
import VideoCollection from "./V_Collection/videocollection";
import VideoTagging from "./V_Tagging/videotagging";
import VideoClassification from "./V_Classification/videoclassification";
import VideoBounding from "./V_Bounding/videobounding";
import VideoPolygon from "./V_Polygon/videopolygon";
class VideoData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoView: "Video_Collection",
    };
  }
  videohandleClick = (video) => {
    this.setState({
      videoView: video,
    });
  };
  render() {
    const Videochange = () => {
      switch (this.state.videoView) {
        case "Video_Collection":
          return <VideoCollection />;
        case "Video_Tagging":
          return <VideoTagging />;
        case "Video_Classification":
          return <VideoClassification />;
        case "Video_Bounding":
          return <VideoBounding />;
        case "Video_Polygon":
          return <VideoPolygon />;
        default:
          return <VideoCollection />;
      }
    };
    return (
      <div className="Video_Indexes">
        <Videochange />
        <div
          onClick={this.videohandleClick.bind(this, "Video_Collection")}
          className={`Video_Collection ${
            this.state.videoView === "Video_Collection" && "Video_active"
          }`}
        >
          Collection
        </div>
        <div
          onClick={this.videohandleClick.bind(this, "Video_Tagging")}
          className={`Video_Tagging ${
            this.state.videoView === "Video_Tagging" && "Video_active"
          }`}
        >
          Tagging
        </div>
        <div
          onClick={this.videohandleClick.bind(this, "Video_Classification")}
          className={`Video_Classification ${
            this.state.videoView === "Video_Classification" && "Video_active"
          }`}
        >
          Classification
        </div>
        <div
          onClick={this.videohandleClick.bind(this, "Video_Bounding")}
          className={`Video_Bounding ${
            this.state.videoView === "Video_Bounding" && "Video_active"
          }`}
        >
          Bounding box
        </div>
        <div
          onClick={this.videohandleClick.bind(this, "Video_Polygon")}
          className={`Video_Polygon ${
            this.state.videoView === "Video_Polygon" && "Video_active"
          }`}
        >
          Polygon
        </div>
      </div>
    );
  }
}
export default VideoData;

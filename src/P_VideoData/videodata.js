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
      videoView: "videocollection",
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
        case "videocollection":
          return <VideoCollection />;
        case "videotagging":
          return <VideoTagging />;
        case "videoclassification":
          return <VideoClassification />;
        case "videobounding":
          return <VideoBounding />;
        case "videopolygon":
          return <VideoPolygon />;
        default:
          return <VideoCollection />;
      }
    };
    return (
      <div className="video_indexes">
        <Videochange />
        <div
          onClick={this.videohandleClick.bind(this, "videocollection")}
          className="video_collection"
        >
          Collection
        </div>
        <div
          onClick={this.videohandleClick.bind(this, "videotagging")}
          className="video_tagging"
        >
          Tagging
        </div>
        <div
          onClick={this.videohandleClick.bind(this, "videoclassification")}
          className="video_classification"
        >
          Classification
        </div>
        <div
          onClick={this.videohandleClick.bind(this, "videobounding")}
          className="video_bounding"
        >
          Bounding box
        </div>
        <div
          onClick={this.videohandleClick.bind(this, "videopolygon")}
          className="video_polygon"
        >
          Polygon
        </div>
      </div>
    );
  }
}
export default VideoData;

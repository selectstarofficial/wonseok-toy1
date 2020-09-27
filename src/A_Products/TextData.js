import React, { Component } from "react";
import "./TextData.css";
import T_COLLECTION from "../TextData/T_Collection";
import T_CLASSIFICATION from "../TextData/T_Classification";
import T_ENTITY from "../TextData/T_Entity";
import T_QANDA from "../TextData/T_QandA";
import T_TEXTTOAUDIO from "../TextData/T_TexttoAudio";

class VideoData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textView: "T_Collection",
    };
  }
  TexthandleClick = (view) => {
    this.setState({
      textView: view,
    });
  };
  render() {
    const TextChange = () => {
      switch (this.state.textView) {
        case "T_Collection":
          return <T_COLLECTION />;
        case "T_Classification":
          return <T_CLASSIFICATION />;
        case "T_Entity":
          return <T_ENTITY />;
        case "T_QandA":
          return <T_QANDA />;
        case "T_TexttoAudio":
          return <T_TEXTTOAUDIO />;
        default:
          return <T_COLLECTION />;
      }
    };
    return (
      <>
        <div className="Text_Indexes">
          <div
            onClick={this.TexthandleClick.bind(this, "T_Collection")}
            className={`Text_Collection ${
              this.state.textView === "T_Collection" && "I_active"
            }`}
          >
            Collection
          </div>
          <div
            onClick={this.TexthandleClick.bind(this, "T_Classification")}
            className={`Text_Classification ${
              this.state.textView === "T_Classification" && "I_active"
            }`}
          >
            Classification
          </div>
          <div
            onClick={this.TexthandleClick.bind(this, "T_Entity")}
            className={`Text_Entity ${
              this.state.textView === "T_Entity" && "I_active"
            }`}
          >
            Entity Tagging
          </div>
          <div
            onClick={this.TexthandleClick.bind(this, "T_QandA")}
            className={`Text_QandA ${
              this.state.textView === "T_QandA" && "I_active"
            }`}
          >
            Q&A
          </div>
          <div
            onClick={this.TexthandleClick.bind(this, "T_TexttoAudio")}
            className={`Text_TexttoAudio ${
              this.state.textView === "T_TexttoAudio" && "I_active"
            }`}
          >
            Text to Audio
          </div>
        </div>
        <div className="Image_View">
          <TextChange />
        </div>
      </>
    );
  }
}
export default VideoData;

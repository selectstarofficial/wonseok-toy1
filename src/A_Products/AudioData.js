import React, { Component } from "react";
import "./AudioData.css";
import A_COLLECTION from "../AudioData/A_Collection";
import A_TAGGING from "../AudioData/A_Tagging";
import A_CLASSIFICATION from "../AudioData/A_Classification";
import A_EDITING from "../AudioData/A_Editing";
import A_AUDIOTOTEXT from "../AudioData/A_AudiotoText";

class AudioData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioView: "A_Collection",
    };
  }
  AudiohandleClick = (view) => {
    this.setState({
      audioView: view,
    });
  };
  render() {
    const AudioChange = () => {
      switch (this.state.audioView) {
        case "A_Collection":
          return <A_COLLECTION />;
        case "A_Tagging":
          return <A_TAGGING />;
        case "A_Classification":
          return <A_CLASSIFICATION />;
        case "A_Editing":
          return <A_EDITING />;
        case "A_AudiotoText":
          return <A_AUDIOTOTEXT />;
        default:
          return <A_COLLECTION />;
      }
    };
    return (
      <>
        <div id="AudioData" className="Audio_Indexes">
          <div
            onClick={this.AudiohandleClick.bind(this, "A_Collection")}
            className={`Audio_Collection ${
              this.state.audioView === "A_Collection" && "I_active"
            }`}
          >
            Collection
          </div>
          <div
            onClick={this.AudiohandleClick.bind(this, "A_Tagging")}
            className={`Audio_Tagging ${
              this.state.audioView === "A_Tagging" && "I_active"
            }`}
          >
            Tagging
          </div>
          <div
            onClick={this.AudiohandleClick.bind(this, "A_Classification")}
            className={`Audio_Classification ${
              this.state.audioView === "A_Classification" && "I_active"
            }`}
          >
            Classification
          </div>
          <div
            onClick={this.AudiohandleClick.bind(this, "A_Editing")}
            className={`Audio_Editing ${
              this.state.audioView === "A_Editing" && "I_active"
            }`}
          >
            Editing
          </div>
          <div
            onClick={this.AudiohandleClick.bind(this, "A_AudiotoText")}
            className={`Audio_AudiotoText ${
              this.state.audioView === "A_AudiotoText" && "I_active"
            }`}
          >
            Audio to Text
          </div>
        </div>
        <div className="Image_View">
          <AudioChange />
        </div>
      </>
    );
  }
}
export default AudioData;

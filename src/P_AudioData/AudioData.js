import React, { Component } from "react";
import "./AudioData.css";
import AudioCollection from "./A_Collection/A_Collection";
import AudioTagging from "./A_Tagging/Audio_Tagging";
import AudioClassification from "./A_Classification/A_Classification";
import AudioEditing from "./A_Editing/Audio_Editing";
import AudioAudiotoText from "./A_AudiotoText/A_AudiotoText";
class AudioData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioView: "Audio_Collection",
    };
  }
  audiohandleClick = (audio) => {
    this.setState({
      audioView: audio,
    });
  };
  render() {
    const AudioChange = () => {
      switch (this.state.audioView) {
        case "Audio_Collection":
          return <AudioCollection />;
        case "Audio_Tagging":
          return <AudioTagging />;
        case "Audio_Classification":
          return <AudioClassification />;
        case "Audio_Editing":
          return <AudioEditing />;
        case "Audio_AudiotoText":
          return <AudioAudiotoText />;
        default:
          return <AudioCollection />;
      }
    };
    return (
      <div className="Audio_Indexes">
        <AudioChange />
        <div
          onClick={this.audiohandleClick.bind(this, "Audio_Collection")}
          className="Audio_Collection"
        >
          Collection
        </div>
        <div
          onClick={this.audiohandleClick.bind(this, "Audio_Tagging")}
          className="Audio_Tagging"
        >
          Tagging
        </div>
        <div
          onClick={this.audiohandleClick.bind(this, "Audio_Classification")}
          className="Audio_Classification"
        >
          Classification
        </div>
        <div
          onClick={this.audiohandleClick.bind(this, "Audio_Editing")}
          className="Audio_Editing"
        >
          Editing
        </div>
        <div
          onClick={this.audiohandleClick.bind(this, "Audio_AudiotoText")}
          className="Audio_AudiotoText"
        >
          Audio to Text
        </div>
      </div>
    );
  }
}
export default AudioData;

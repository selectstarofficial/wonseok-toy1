import React, { Component } from "react";
import "./TextData.css";
import TextCollection from "./T_Collection/T_Collection";
import TextEntityTagging from "./T_Entity/T_Entity";
import TextClassification from "./T_Classification/T_Classififcation";
import TextQA from "./T_QandA/T_QandA";
import TextTexttoAudio from "./T_TexttoAudio/T_TexttoAudio";
class TextData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textView: "Text_Collection",
    };
  }
  audiohandleClick = (text) => {
    this.setState({
      textView: text,
    });
  };
  render() {
    const AudioChange = () => {
      switch (this.state.audioView) {
        case "Text_Collection":
          return <TextCollection />;
        case "Text_Classification":
          return <TextClassification />;
        case "Text_Entity Tagging":
          return <TextEntityTagging />;
        case "Text_Q&A":
          return <TextQA />;
        case "Text_TexttoAudio":
          return <TextTexttoAudio />;
        default:
          return <TextCollection />;
      }
    };
    return (
      <div className="Audio_Indexes">
        <AudioChange />
        <div
          onClick={this.audiohandleClick.bind(this, "Text_Collection")}
          className="Audio_Collection"
        >
          Collection
        </div>
        <div
          onClick={this.audiohandleClick.bind(this, "Text_Classification")}
          className="Audio_Tagging"
        >
          Tagging
        </div>
        <div
          onClick={this.audiohandleClick.bind(this, "Text_Entity Tagging")}
          className="Audio_Classification"
        >
          Classification
        </div>
        <div
          onClick={this.audiohandleClick.bind(this, "Text_Q&A")}
          className="Audio_Editing"
        >
          Editing
        </div>
        <div
          onClick={this.audiohandleClick.bind(this, "Text_TexttoAudio")}
          className="Audio_AudiotoText"
        >
          Audio to Text
        </div>
      </div>
    );
  }
}
export default TextData;

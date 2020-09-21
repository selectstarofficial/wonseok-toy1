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
      switch (this.state.textView) {
        case "Text_Collection":
          return <TextCollection />;
        case "Text_Classification":
          return <TextClassification />;
        case "Text_EntityTagging":
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
      <div className="Text_Indexes">
        <AudioChange />
        <div
          onClick={this.audiohandleClick.bind(this, "Text_Collection")}
          className={`Text_Collection ${
            this.state.textView === "Text_Collection" && "Text_active"
          }`}
        >
          Collection
        </div>
        <div
          onClick={this.audiohandleClick.bind(this, "Text_Classification")}
          className={`Text_Classification ${
            this.state.textView === "Text_Classification" && "Text_active"
          }`}
        >
          Classification
        </div>
        <div
          onClick={this.audiohandleClick.bind(this, "Text_EntityTagging")}
          className={`Text_EntityTagging ${
            this.state.textView === "Text_EntityTagging" && "Text_active"
          }`}
        >
          Entity Tagging
        </div>
        <div
          onClick={this.audiohandleClick.bind(this, "Text_Q&A")}
          className={`Text_QandA ${
            this.state.textView === "Text_Q&A" && "Text_active"
          }`}
        >
          Q&A
        </div>
        <div
          onClick={this.audiohandleClick.bind(this, "Text_TexttoAudio")}
          className={`Text_TexttoAudio ${
            this.state.textView === "Text_TexttoAudio" && "Text_active"
          }`}
        >
          Text to Audio
        </div>
      </div>
    );
  }
}
export default TextData;

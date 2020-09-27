import React, { Component } from "react";
import "../AudioData/A_AudiotoText.css";
import T_TexttoAudio_img from "./img/Text_texttoaudio.png";
class T_TEXTTOAUDIO extends Component {
  render() {
    return (
      <div className="A_AudiotoText_cover">
        <div className="A_AudiotoText_box">
          <p className="main">Submit your voice recording</p>
          <p className="sub">Touch [Record] and read the following texts</p>
          <div>
            <img src={T_TexttoAudio_img} alt="img" />
            <div className="T_TexttoAudio">
              "Put your shoulders to the wheels, my man. <br />
              Goad on your bullocks, and never more pray <br />
              to me for help, until you have done your best
              <br /> to help yourself, or depend upon it you will
              <br /> henceforth pray in vain."
            </div>
          </div>
        </div>
        <div className="A_AudiotoText_text">
          <p className="main">Text to Audio</p>
          <p className="sub">Collecting voice recordings of specified texts</p>
        </div>
      </div>
    );
  }
}
export default T_TEXTTOAUDIO;

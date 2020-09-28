import React, { Component } from "react";
import "./textimonials.css";
import Leftside from "./img/leftside.png";
import Rightside from "./img/rightside.png";
import LG_CNS from "../Textimonials/LG_CNS";
import LOTTE from "../Textimonials/LOTTE";
import OMNIOUS from "../Textimonials/OMNIOUS";
import COGNITIVE from "../Textimonials/Cognitive";
import WIDEBRAIN from "../Textimonials/WideBrain";

class Textimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoView: "LG_CNS",
    };
  }
  chagehandleClick = (view) => {
    this.setState({
      videoView: view,
    });
  };
  render() {
    const TextimonialsChange = () => {
      switch (this.state.videoView) {
        case "LG_CNS":
          return <LG_CNS />;
        case "LOTTE":
          return <LOTTE />;
        case "OMNIOUS":
          return <OMNIOUS />;
        case "Cognitive":
          return <COGNITIVE />;
        case "WideBrain":
          return <WIDEBRAIN />;
        default:
          return <LG_CNS />;
      }
    };
    return (
      <div className="Textimonials_cover">
        <div className="Textimonials_box">
          <p className="Textimonials_title">TEXTIMONIAL</p>
          <div className="leftside">
            <img src={Leftside} alt="img"></img>
          </div>
          <div className="rightside">
            <img src={Rightside} alt="img"></img>
          </div>
          <div className="Textimonials_change">
            <TextimonialsChange />
          </div>
        </div>
      </div>
    );
  }
}
export default Textimonials;

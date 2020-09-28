import React, { Component } from "react";
import "./LG_CNS.css";
import WideBrain_img from "./img/widebranin.png";
class WIDEBRAIN extends Component {
  render() {
    return (
      <>
        <div className="LG_box">
          <div className="LG_text">
            <p className="main">
              “Our project with Selectstar required lots of efforts and
              <br />
              time input because it was to collect and label question
              <br />
              data generated from various types of books. Moreover,
              <br /> it demanded numerous reviews back and forth between
              <br />
              us and Selectstar, however, they held on to it until we
              <br /> got the finalized data with exceptional quality.”
            </p>
          </div>
        </div>
        <div className="WideBrain_Trapezoid_color"></div>
        <div className="LG_Trapezoid">
          <img src={WideBrain_img} alt="img"></img>
        </div>
      </>
    );
  }
}
export default WIDEBRAIN;

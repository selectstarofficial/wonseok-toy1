import React, { Component } from "react";
import "./LG_CNS.css";
import LOTTE_img from "./img/lotte.png";
import { Slide, Fade } from "react-awesome-reveal";
class LOTTE extends Component {
  render() {
    return (
      <>
        <div className="LG_box">
          <Slide direction="right" delay={10}>
            <div className="LG_text">
              <p className="main">
                “We were able to collect accurately processed large OCR
                <br /> data using Selectstar platform very promptly. Selectstar
                <br /> delivered the data for less than a month period, while{" "}
                <br />
                our own in-house workers took almost six months to <br />
                complete. Continuous communication and instant
                <br /> feedback updates were especially satisfactory. Loved
                <br /> cost, quality, and delivery time and we were happy to
                <br /> save many resources.”
              </p>
              <p className="sub">Lotte Data Communication</p>
            </div>
          </Slide>
        </div>
        <div className="LOTTE_Trapezoid_color"></div>
        <div className="LG_Trapezoid">
          <img src={LOTTE_img} alt="img"></img>
        </div>
      </>
    );
  }
}
export default LOTTE;

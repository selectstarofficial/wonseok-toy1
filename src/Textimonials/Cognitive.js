import React, { Component } from "react";
import "./LG_CNS.css";
import Cognitive_img from "./img/cognit.png";
import { Slide } from "react-awesome-reveal";
class COGNITIVE extends Component {
  render() {
    return (
      <>
        <div className="LG_box">
          <Slide direction="right" delay={10}>
            <div className="LG_text">
              <p className="main">
                “We contacted Selectstar to collect and label indoor
                <br /> environment images for developing AI algorithm for the
                <br /> smart home. We especially had a difficulty with
                <br /> collecting diverse data on our own. However, mobile{" "}
                <br />
                crowdsourcing platform from Selectstar made this
                <br /> possible for us! With their professional understanding{" "}
                <br />
                on various data, we could achieve everything from the
                <br /> quality, delivery time, to the management of the whole{" "}
                <br />
                project. ”
              </p>
            </div>
          </Slide>
        </div>
        <div className="Cognitive_Trapezoid_color"></div>
        <div className="LG_Trapezoid">
          <img src={Cognitive_img} alt="img"></img>
        </div>
      </>
    );
  }
}
export default COGNITIVE;

import React, { Component } from "react";
import "./LG_CNS.css";
import OMNIOUS_img from "./img/omnios.png";
import { Slide } from "react-awesome-reveal";
class OMNIOUS extends Component {
  render() {
    return (
      <>
        <div className="LG_box">
          <Slide direction="right" delay={10}>
            <div className="LG_text">
              <p className="main">
                “With Selectstar, we ran a data labeling project for
                <br />
                fashion and clothing images (Bounding Box, Tagging,
                <br />
                and Landmark). To meet up with our specifications,
                <br /> Selectstar actively communicated. As a result, we could
                <br /> get well-processed dataset we wanted with the
                <br />
                reasonable cost.”
              </p>
            </div>
          </Slide>
        </div>
        <div className="OMNIOUS_Trapezoid_color"></div>
        <div className="LG_Trapezoid">
          <img src={OMNIOUS_img} alt="img"></img>
        </div>
      </>
    );
  }
}
export default OMNIOUS;

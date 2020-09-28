import React, { Component } from "react";
import "./LG_CNS.css";
import LG_CNS_img from "./img/lgew.png";
class LG_CNS extends Component {
  render() {
    return (
      <>
        <div className="LG_box">
          <div className="LG_text">
            <p className="main">
              “With Selectstar, we were able to efficiently collect
              <br /> KorQuad 2.0, a Question-Answer dataset in Korean. We
              <br /> loved the quality and diversity of data, collected from
              <br /> broad workers. Especially, Selectstar's user guideline for
              <br /> our task was very impressive, capturing our
              <br /> expectations into clear explanations for the workers.”
            </p>
            <p className="sub">AI & Big Data Research Center</p>
          </div>
        </div>
        <div className="LG_Trapezoid_color"></div>
        <div className="LG_Trapezoid">
          <img src={LG_CNS_img} alt="img"></img>
        </div>
      </>
    );
  }
}
export default LG_CNS;

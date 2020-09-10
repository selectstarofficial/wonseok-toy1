import React, { Component } from "react";
import "./textimonials.css";
import textimonials1 from "./testimonialsimg1.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

class Textimonials extends Component {
  render() {
    return (
      <div className="textimonials_cover_page">
        <div className="textimonials_little_text">TEXTIMONIALS</div>
        <div className="textimonials_main_box">
          <div className="textimonials_left_button">
            <button className="textimonialsbutton">
              <AiOutlineArrowRight />
            </button>
          </div>
          <div className="textimonials_right_button">
            <button className="textimonialsbutton">
              <AiOutlineArrowLeft />
            </button>
          </div>
          <div className="textimonials_main_rectangle">
            <div className="textimonials_main_img">
              <img src={textimonials1} alt="img"></img>
            </div>
          </div>
          <div className="textimonials_main_text">
            “With Selectstar, we were able to efficiently collect
            <br />
            KorQuad 2.0, a Question-Answer dataset in Korean. We <br />
            loved the quality and diversity of data, collected from
            <br /> broad workers. Especially, Selectstar`s user guideline for
            <br /> our task was very Impressive, capturing our
            <br />
            expectations into clear explanations for the workers.”
            <div className="textimonials_sub_text">
              AI & Big Data Research Center
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Textimonials;

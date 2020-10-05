import React from "react";
import Process_img_1 from "./img/processimg.png";
import Process_img_2 from "./img/solution2-bg.a9e12d1a.png";
import "./process.css";

const Process = () => {
  return (
    <div className="Process_cover">
      <div className="Process_main">
        <p className="main-title">HOW IT WORKS</p>
        <p className="main-sub">AI DATA CROWDSOURCING</p>
        <div className="Process_box">
          <div className="Process_box_text">
            <p className="box-title">
              Advanced <span className="blue">Crowdsourcing Technology</span>{" "}
              based
              <br />
              on mathematical algorithms
            </p>
            <p className="box-sub">
              To create scalable & robust crowdsourcing platform, we <br />
              developed the unique data quality control system using the <br />
              cutting-edge mathematical algorithms.
            </p>
          </div>
          <div className="Process_box_text">
            <p className="box-title">
              AI assisted{" "}
              <span className="blue">Data Collection / Annotation</span>
            </p>
            <p className="box-sub">
              Our AI assisted data collection & annotation is efficient and
              <br />
              effective. We provide easier annotation environment and we
              <br />
              prevent the submission of useless 'similar data'.
            </p>
          </div>
          <img src={Process_img_1} alt="How it Works" />
        </div>
      </div>
      <img src={Process_img_2} alt="X" className="process_x" />
    </div>
  );
};

export default Process;

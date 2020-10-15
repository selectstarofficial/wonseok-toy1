import React from "react";
import "./solution.css";
import solution_aiimg from "./video/solution_video1_en.9bc23f52.mp4";
import solution_user from "./video/solution_video2_en.7f9fb95b.mp4";
import solution_quality from "./video/solution_video3_en.0625a40d.mp4";
import solution_mobile from "./video/solution_video4_en.c721bad0.mp4";

const Solution = () => {
  /*  margin();
  window.addEventListener("resize", margin);
  function margin() {
    innerWidth - 1440 / 2 == margin;
  }
 */
  return (
    <div id="Solution" className="Solution_cover">
      <div className="Solution_main_page">
        <div className="Solution_container">
          <div className="Soultion_video">
            <video controls autoPlay loop muted src={solution_aiimg} />
          </div>
          <p className="Title">AI assisted Data Collection/Annotation</p>
          <p className="Sub">
            Our designated AI team discovers the most effective and cutting-edge
            AI algorithms <br />
            to collect and label data
          </p>
        </div>
        <div className="Solution_container">
          <div className="Soultion_video">
            <video controls autoPlay loop muted src={solution_user} />
          </div>
          <p className="Title">User-Centered Task Guidelines</p>
          <p className="Sub">
            Our special guidance team maintains the data quality with the best
            user-centric <br />
            guidelines for the crowd-workers{" "}
          </p>
        </div>
        <div className="Solution_container">
          <div className="Soultion_video">
            <video controls autoPlay loop muted src={solution_quality} />
          </div>
          <p className="Title">Quality-Assuring Crowdsourcing AIgorithms</p>
          <p className="Sub">
            Our designated corwdsourcing team develops mathematical models to
            maintain 99% <br />
            accuracy of crowdsourced data
          </p>
        </div>
        <div className="Solution_container">
          <div className="Soultion_video">
            <video controls autoPlay loop muted src={solution_mobile} />
          </div>
          <p className="Title">Mobile Crowdsourcing to the World</p>
          <p className="Sub">
            Our ubiquitous mobile crowdsourcing platform guarantees fast,
            diverse, and <br />
            affordable data
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solution;

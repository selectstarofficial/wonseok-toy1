import React from "react";
import "./solution.css";
import solution_aiimg from "./img/solution_image1.c55d8896.jpg";
import solution_user from "./img/solution_image2.2303e6bb.jpg";
import solution_quality from "./img/solution_image3.8ebe61bf.jpg";
import solution_mobile from "./img/solution_image4.cc2d8dfb.jpg";

const Solution = () => {
  return (
    <div className="Solution_cover">
      <div className="Solution_main_page">
        <div className="Solution_container">
          <img src={solution_aiimg} alt="AI" />
          <p className="Title">AI assisted Data Collection/Annotation</p>
          <p className="Sub">
            Our designated AI team discovers the most effective and cutting-edge
            AI algorithms <br />
            to collect and label data
          </p>
        </div>
        <div className="Solution_container">
          <img src={solution_user} alt="User" />
          <p className="Title">Usr-Centered Task Guidelines</p>
          <p className="Sub">
            Our special guidance team maintains the data quality with the best
            user-centric <br />
            guidelines for the crowd-workers.{" "}
          </p>
        </div>
        <div className="Solution_container">
          <img src={solution_quality} alt="Quality" />
          <p className="Title">Quality-Assuring Crowdsourcing AIgorithms</p>
          <p className="Sub">
            Our designated corwdsourcing team develops mathematical models to
            maintain 99% <br />
            accuracy of crowdsourced data
          </p>
        </div>
        <div className="Solution_container">
          <img src={solution_mobile} alt="Mobile" />
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

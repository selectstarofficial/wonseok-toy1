import React, { Component } from "react";
import "./solution.css";
import solution_aiimg from "./img/solution_ai.png";
import solution_user from "./img/solution_user.png";
import solution_quality from "./img/solution_quality.png";
import solution_mobile from "./img/solution_mobile.png";

class Solution extends Component {
  render() {
    return (
      <div className="solutions_coverpage">
        <div className="solutions_imges">
          <div className="solutions_aiimg">
            <img src={solution_aiimg} alt="img"></img>
            <div className="solutions_ai_text">
              AI assisted Data Collection/Annotation
              <div className="solutions_ai_subtext">
                Our designated AI team discovers the most effective and
                cutting-edge AI algorithms to collect and
                <br />
                annotate data
              </div>
            </div>
          </div>
          <div className="solutions_userimg">
            <img src={solution_user} alt="img"></img>
            <div className="solutions_user_text">
              User-Centered Task Guidelines
              <div className="solutions_user_subtext">
                Our special guidance team maintains the data quality with the
                best user-centric guidelines for the
                <br />
                crowed-workers.
              </div>
            </div>
          </div>
          <div className="solutions_qualityimg">
            <img src={solution_quality} alt="img"></img>
            <div className="solutions_quality_text">
              Quality-Assuring Crowdsourcing
              <br />
              Algorithms
              <div className="solutions_quality_subtext">
                Our designated AI team discovers the most effective and
                cutting-edge AI algorithms to collect and <br />
                annotate data
              </div>
            </div>
          </div>
          <div className="solutions_mobileimg">
            <img src={solution_mobile} alt="img"></img>
            <div className="solutions_mobile_text">
              Mobile Crowdsourcing to the World
              <div className="solutions_mobile_subtext">
                Our ubiquitous mobile crowdsourcing platform guarantees fast,
                diverse, and affordable data
              </div>
            </div>
          </div>
          <div className="solutuins_empty"></div>
        </div>
      </div>
    );
  }
}

export default Solution;

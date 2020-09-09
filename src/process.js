import React, { Component } from "react";
import processimg from "./processimg.png";
import "./process.css";

class Process extends Component {
  render() {
    return (
      <div className="process_cover_page">
        <div className="process_text_box">
          <div className="process_little_text">
            HOW IT WORKS
            <div className="process_main_text">
              AI DATA CROWEDSOURCING
              <div className="process_mid_text1">
                Advance <span>Crowedsourcing Technology </span>based
                <br />
                on mathematical algorithms
                <div className="process_sub_text1">
                  To create scalable & robust crowdsourcing platform, we <br />
                  developed the unique data quality control system using the
                  <br />
                  cutting-edge mathematical algorithms.
                </div>
              </div>
              {
                <div className="process_mid_text2">
                  AI assisted <span>Data Collection/Annotation</span>
                  <div className="process_sub_text2">
                    Our AI assisted data collection & annotation is efficient
                    and
                    <br /> effective. We provide easier annotation environment
                    and we
                    <br /> prevent the submission of useless ‘similar data’.
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
        <div className="process_img">
          <img src={processimg}></img>
        </div>
      </div>
    );
  }
}

export default Process;

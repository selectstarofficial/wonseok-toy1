import React, { Component } from "react";
import processimg from "./processimg.png";

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
                <div className="process_sub_text1"></div>
              </div>
              <div className="process_mid_text2">
                <div className="prcess_sub_text"></div>
              </div>
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

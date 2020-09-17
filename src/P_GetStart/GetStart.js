import React, { Component } from "react";
import "./GetStart.css";

class GetStart extends Component {
  render() {
    return (
      <div className="GetStart_cover_page">
        <div className="GetStart_text_box">
          <div className="GetStart_maintext">
            ANY OTHER DATA? <br />
            NO PROBLEM!
            <div className="GetStart_subtext">
              Even if yourt project needs any other types of data
              collection/annotation, we got your back!
              <div className="GetStart_sublittletext">
                -100% of data is fully inspected by crowds. Stable and scalable
                QA.
                <br />
                -Small in-house generated data for Inspector qualification is
                needed. Project launch is fast and cheap
                <div className="GetStart_button">
                  <button className="GetStart_bbutton">GET STARED</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default GetStart;

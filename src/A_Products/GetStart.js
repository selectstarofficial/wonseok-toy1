import React, { Component } from "react";
import "./GetStart.css";
import GetStart_img from "./img/anything-you-want.d6946180.png";

class GetStart extends Component {
  render() {
    return (
      <div className="GetStart_cover">
        <div className="GetStart_box">
          <h1>
            ANY OTHER DATA? <br />
            NO PROBLEM!
          </h1>
          <p className="GetStart_main">
            Even if your project needs any other types of data
            collection/annotation, we got your back!
          </p>
          <p className="GetStart_sub">
            - 100% of data is fully inspected by crowds. Stable and scalable QA.{" "}
            <br />- Small in-house generated data for Inspector qualification is
            needed. Project launch is fast and cheap
          </p>
          <div className="G_button"> GET STARTED</div>
        </div>
        <img src={GetStart_img} alt="img"></img>
      </div>
    );
  }
}

export default GetStart;

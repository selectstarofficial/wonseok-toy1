import React, { Component } from "react";
import "./T_Entity.css";
import T_QandA_img from "./img/text-qa.9fe18166.png";
class T_ENTITY extends Component {
  render() {
    return (
      <div className="T_Entity_cover">
        <div className="T_Entity_box">
          <img src={T_QandA_img} alt="img" className="T_QandA_img" />
        </div>
        <div className="T_Entity_text">
          <p className="main">Question & Answering</p>
          <p className="sub">
            Getting answers for specified questions regarding the given texts
          </p>
        </div>
      </div>
    );
  }
}
export default T_ENTITY;

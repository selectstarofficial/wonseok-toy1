import React, { Component } from "react";
import "./T_Entity.css";
import T_Entity_img from "./img/text-entity.87827cbf.png";
class T_ENTITY extends Component {
  render() {
    return (
      <div className="T_Entity_cover">
        <div className="T_Entity_box">
          <img src={T_Entity_img} alt="img" className="T_Entity_img" />
        </div>
        <div className="T_Entity_text">
          <p className="main">Entity Tagging </p>
          <p className="sub">
            Arranging texts into two or more specific entities
          </p>
        </div>
      </div>
    );
  }
}
export default T_ENTITY;

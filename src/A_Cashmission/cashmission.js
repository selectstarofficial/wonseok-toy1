import React from "react";
import "./cashmission.css";
import cashmission_img1 from "./img/cashmission1.png";
import cashmission_img2 from "./img/cashmission2.png";

const Cashmission = () => {
  return (
    <div id="Cashmission" className="Cashmission_cover">
      <div className="Cashmission_main">
        <div className="Cashmission_box1">
          <p className="main">CASHMISSION</p>
          <p className="title">
            PERFORM IT
            <br />
            FROM
            <br />
            ANYWHERE
            <br />
            AT ANYTIME
            <br />
          </p>
          <p className="sub">
            Cashmission is a crowdsourcing platform in both mobile
            <br />
            and web applications. With versatile working
            <br />
            environments, we collect diverse data quickly and
            <br />
            accurately.
          </p>
        </div>
        <img src={cashmission_img1} alt="img" className="img1" />
        <img src={cashmission_img2} alt="img" className="img2" />
        <div className="Cashmission_box2">
          <p className="title">
            SIMPLE MISSION
            <br />
            ATTRACTIVE
            <br />
            REWARDS
          </p>
          <p className="sub">
            As missions pass our inspection process, earned points
            <br />
            can be exchanged for real cash!
            <br />
            <br />
            Collected data is used for developing the cutting-edge
            <br />
            artificial intelligenc for global companies.
            <br />
            <br />
            Join our journey of making the world easier through data
            <br />
            revolution!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cashmission;

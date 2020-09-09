import React, { Component } from "react";
import "./cashmission.css";
import cashmission_img1 from "./cashmission1.png";
import cashmission_img2 from "./cashmission2.png";

class Cashmission extends Component {
  render() {
    return (
      <div className="cashmission_cover_page">
        <div className="cashmission_main_view">
          <div className="cashmission_top_box">
            <div className="top_box_little_text">
              CASHMISSION
              <div className="top_box_main_text">
                PERFORM IT <br />
                FROM <br />
                ANYWHERE
                <br />
                AT ANYTIME
                <div className="top_box_sub_text">
                  Cashmission is a crowdsourcing platform in both mobile
                  <br />
                  and web applications. With versatile working <br />
                  environments, we collect diverse data quickly and
                  <br /> accurately.
                </div>
              </div>
            </div>
            <div className="top_box_main_img">
              <img src={cashmission_img1}></img>
            </div>
          </div>
          <div className="cashmission_bottom_box">
            <div className="bottom_box_main_img">
              <img src={cashmission_img2}></img>
            </div>
            <div className="bottom_box_main_text">
              SIMPLE MISSION <br />
              ATTRACTIVE <br />
              REWARDS
              <div className="bottom_box_sub_text">
                As missions pass our inspection process, earned points can be
                <br />
                exchanged for real cash!
                <br />
                <br />
                Collected data is used for developing the cutting-edge
                artificial <br />
                <br />
                intelligence for global companies. Join our journey of making
                the world easier through data
                <br /> revolution!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cashmission;

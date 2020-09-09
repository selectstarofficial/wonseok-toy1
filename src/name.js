import React, { Component } from "react";
import name_main_img from "./name_main_img.png";
class Name extends Component {
  render() {
    return (
      <div className="name_cover_page">
        <div className="name_top_box">
          <div className="name_little_text">
            <div className="name_top_box_main_text">
              <div className="name_top_box_sub_text"></div>
            </div>
          </div>
        </div>
        <div className="name_middle_box">
          <div className="name_main_img">
            <img src={}></img>
            <div className="name_middle_main_text1">
              <div className="name_middle_sub_text1"></div>
            </div>
            <div className="name_middle_main_text2">
              <div className="name_middle_sub_text2"></div>
            </div>
            <div className="name_bottom_box">
              <div className="name_bottom_since">
                <div className="name_bottom_sub_text1"></div>
              </div>
              <div className="name_bottom_clients">
                <div className="name_bottom_sub_text2"></div>
              </div>
              <div className="name_bottom_data">
                <div className="name_bottom_sub_text3"></div>
              </div>
              <div className="name_bottom_working">
                <div className="name_bottom_sub_text4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Name;

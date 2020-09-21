import React, { Component } from "react";
import "./name.css";
import ReactPlayer from "react-player ";
class Name extends Component {
  render() {
    return (
      <div className="name_cover_page">
        <div className="name_top_box">
          <div className="name_little_text">
            COMPANY
            <div className="name_top_box_main_text">
              SELECTSTAR GOT YOUR BACK!
              <div className="name_top_box_sub_text">
                Obtaining the proper data has always been the top issue for many
                companies using AI. <br />
                To solve this problem, Selectstar provides a platform that
                connects your company to the crowd-workes.
              </div>
            </div>
          </div>
        </div>
        <div className="name_middle_box">
          <div className="name_main_img">
            <ReactPlayer
              url="https://selectstar.ai/static/media/selectstar.b97543d9.mp4"
              playing
              controls
            />
            <div className="name_middle_main_text1">
              It`s MORE than just a connection
              <div className="name_middle_sub_text1">
                We research crowd-workers and your project passionately to
                <br />
                Develop cutting-edge technologies for mobile crowd-sourcing.
              </div>
            </div>
            <div className="name_middle_main_text2">
              Keep disrupting the world
              <div className="name_middle_sub_text2">
                Just for your project, we are here to maintain the quality,
                <br /> cost-efficiency, or any other burdens related to the data
              </div>
            </div>
            <div className="name_bottom_box">
              <div className="name_bottom_since">
                2018
                <div className="name_bottom_sub_text1">
                  Founded in Nov. 2018
                </div>
              </div>
              <div className="name_bottom_clients">
                125+
                <div className="name_bottom_sub_text2">115 Clients</div>
              </div>
              <div className="name_bottom_data">
                14M
                <div className="name_bottom_sub_text3">14M Processed Data</div>
              </div>
              <div className="name_bottom_working">
                40K+
                <div className="name_bottom_sub_text4">
                  34K Workers(Kor/Ph)
                  <br />
                  working
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Name;

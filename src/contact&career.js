import React, { Component } from "react";
import "./contact&career.css";

class Contact extends Component {
  render() {
    return (
      <div className="cc_cover_page">
        <dic className="cc_main_view">
          <div className="cc_left_box">
            <div className="cc_left_main_text">
              READY YO GET
              <br /> STARTED?
              <dic className="cc_left_sub_button">
                <button className="cc_button">GET STARTED</button>
              </dic>
            </div>
          </div>
          <div className="cc_right_box">
            <div className="cc_right_main_text">
              WANNA JOIN <br /> THE ROCKET?
              <div className="cc_right_sub_button">
                <button className="cc_button2">LEARN MORE</button>
              </div>
            </div>
          </div>
        </dic>
      </div>
    );
  }
}

export default Contact;

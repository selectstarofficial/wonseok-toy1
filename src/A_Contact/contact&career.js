import React, { Component } from "react";
import "./contact&career.css";

class Contact extends Component {
  render() {
    return (
      <div id="Careers" className="cc_cover_page">
        <div className="cc_main_view">
          <div className="cc_left_box">
            <div className="cc_left_main_text">
              READY YO GET
              <br /> STARTED?
              <div className="cc_left_sub_button">
                <button className="cc_button">GET STARTED</button>
              </div>
            </div>
          </div>
          <div className="cc_right_box">
            <div className="cc_right_main_text">
              WANNA JOIN <br /> THE ROCKET?
              <div className="cc_right_sub_button">
                <button className="cc_button2">
                  <a
                    href="https://www.notion.so/2387860beacf47048f74e0863550697a"
                    target="_blank"
                  >
                    LEARN MORE
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

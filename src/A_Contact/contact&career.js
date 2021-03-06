import React, { Component } from "react";
import "./contact&career.css";
import { HashLink } from "react-router-hash-link";

class Contact extends Component {
  render() {
    return (
      <div id="Careers" className="cc_cover_page">
        <div className="cc_main_view">
          <div className="cc_left_box">
            <h1 className="cc_left_main_text">
              READY YO GET
              <br /> STARTED?
            </h1>
            <HashLink smooth to="/Contact">
              <div className="cc_left_sub_button">GET STARTED</div>
            </HashLink>
          </div>
          <div className="cc_right_box">
            <h1 className="cc_right_main_text">
              WANNA JOIN <br /> THE ROCKET?{" "}
            </h1>
            <div className="cc_right_sub_button">
              <a
                href="https://www.notion.so/2387860beacf47048f74e0863550697a"
                target="_blank"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

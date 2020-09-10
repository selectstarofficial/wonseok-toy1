import React, { Component } from "react";
import "./allclients.css";
import allclient_one from "./allclients_one.png";
import allclient_two from "./allclient_two.png";
import allclient_three from "./allclient_three.png";
import allclient_four from "./allclient_four.png";
import allclient_five from "./allclient_five.png";
import allclient_six from "./allclient_six.png";
import allclient_seven from "./allclient_seven.png";

class Allclient extends Component {
  render() {
    return (
      <div className="allclinet_cover_page">
        <div className="allclient_one">
          <img src={allclient_one} alt="img"></img>
          <div className="allclient_two">
            <img src={allclient_two} alt="img"></img>
            <div className="allclient_three">
              <img src={allclient_three} alt="img"></img>
              <div className="allclient_four">
                <img src={allclient_four} alt="img"></img>
                <div className="allclient_five">
                  <img src={allclient_five} alt="img"></img>
                  <div className="allclient_six">
                    <img src={allclient_six} alt="img"></img>
                    <div className="allclient_seven">
                      <img src={allclient_seven} alt="img"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Allclient;

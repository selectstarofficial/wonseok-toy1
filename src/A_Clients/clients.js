import React, { Component } from "react";
import "./clients.css";
import client_LG from "./img/lg.png";
import clinet_NAVER from "./img/naver.png";
import clinet_LOTTE from "./img/lotte.png";
import clinet_SK from "./img/sk.png";
import clinet_KAIST from "./img/kaist.png";
import clinet_NIA from "./img/nia.png";

class Clients extends Component {
  render() {
    return (
      <div className="cover">
        <div className="clients">
          <div className="LG">
            <img src={client_LG} alt="img"></img>
          </div>
          <div className="NAVER">
            <img src={clinet_NAVER} alt="img"></img>
          </div>
          <div className="LOTTE">
            <img src={clinet_LOTTE} alt="img"></img>
          </div>
          <div className="SK">
            <img src={clinet_SK} alt="img"></img>
          </div>
          <div className="KAIST">
            <img src={clinet_KAIST} alt="img"></img>
          </div>
          <div className="NIA">
            <img src={clinet_NIA} alt="img"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
